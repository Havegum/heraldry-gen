import { Shield, Color, Metal, Tincture, SymbolField, SplitField, Field, DivisionType, Symbol } from './shieldRepresentation';

function randomEnumKey (enumeration): string {
  const keys = Object.keys(enumeration);
  const enumKey = keys[Math.floor(Math.random() * keys.length)];
  return enumKey;
}

function chooseDivision (): DivisionType {
  return Math.random() < 0.5 ? DivisionType.horizontal : DivisionType.vertical;
}

function expandPalette (palette: Set<Tincture>): Set<Tincture> {
  while (palette.size < 2) {
    let candidate: Tincture;
    do {
      if (Math.random() < 0.5) {
        candidate = Metal[randomEnumKey(Metal)];
      } else {
        candidate = Color[randomEnumKey(Color)];
      }
    } while (palette.has(candidate))
    palette.add(candidate);
  }

  const values = [...palette.values()];
  const background = values[Math.floor(Math.random() * palette.size)];
  console.log(background);
  console.log(Metal, Color)

  return palette;
}

function chooseTinctures(palette: Set<Tincture>): [Tincture, Tincture] {
  palette = expandPalette(palette);
  console.log(palette);

  return [Metal.gold as Tincture, Color.red as Tincture];
}


function generateField (depth: number, palette?: Set<Tincture>): Field {
  if (!palette) palette = new Set<Tincture>();

  let r = Math.random();

  if (r < 1 / (depth * 2)) {
    return new SplitField({
      division: {
        type: chooseDivision()
      },
      fields: [generateField(depth + 1), generateField(depth + 1)]
    });

  } else {
    let [background, color] = chooseTinctures(palette);
    return new SymbolField({
      symbol: new Symbol({
        symbol: 'circle',
        color,
        properties: {}
      }),
      background: background
    });
  }
}


export function generate (): Shield {
  return {
    field: generateField(1),
  }
}
