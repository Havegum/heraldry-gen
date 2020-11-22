import { symbols } from './components/Symbol.svelte';
import { divisions } from './components/Division.svelte';
import { Color, Metal, Field, Symbol } from './ShieldRepresentation.js';

const symbolKeys = Object.keys(symbols);

function pick (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomEnumKey (enumeration) {
  const keys = Object.keys(enumeration);
  return pick(keys);
}


function chooseSymbol (force = false, color) {
  let symbol = pick(symbolKeys);
  while (force && symbol === 'empty') symbol = pick(symbolKeys);

  let properties = {};
  for (let key in symbols[symbol]?.options || ({})) {
    properties[key] = pick(symbols[symbol].options[key]);
  }

  return new Symbol({ symbol, color, properties });
}

function chooseTinctures (palette) {
  const { colors, metals } = palette;

  let tinctures = [
     pick([...metals.keys()]),
     pick([...colors.keys()])
  ];

  if (Math.random() > 0.5) tinctures.reverse();
  return tinctures;
}

function expandPalette (palette) {
  const { colors, metals } = palette;

  if (colors.size < 1) colors.add(Color[randomEnumKey(Color)]);
  if (metals.size < 1) metals.add(Metal[randomEnumKey(Metal)]);

  let paletteSize = colors.size + metals.size;
  const cooling = 0.5;
  const attempts = 10;

  if (Math.random() < Math.E ** ((palette.colors.size + palette.metals.size) * -cooling)) {
    for (let i = 0; i < attempts; i++) {
      if (Math.random() < 0.5) {
        let candidate = Metal[randomEnumKey(Metal)];
        if (metals.has(candidate)) continue;
        metals.add(candidate);
        break;

      } else {
        let candidate = Color[randomEnumKey(Color)];
        if (colors.has(candidate)) continue;
        colors.add(candidate);
        break;
      }
    }
  }

  return palette;
}

function chooseDivision () {
  const type = pick(Object.keys(divisions));

  let properties = {};
  for (let key in divisions[type]?.options || ({})) {
    properties[key] = pick(divisions[type].options[key]);
  }

  return { type, properties };
}

function chooseFields (n) {
  let palette = { colors: new Set(), metals: new Set() };
  const fields = new Array();

  for (let i = 0; i < n; i++) {
    palette = expandPalette(palette);
    const [color, background] = chooseTinctures(palette);
    const symbol = chooseSymbol(false, color);
    fields.push(new Field({ symbol, background }));
  }

  return fields;
}

export function generate () {
  const division = chooseDivision();
  const fieldCount = divisions[division.type].getFieldCount(division.properties);
  const fields = chooseFields(fieldCount);

  return { division, fields };
}
