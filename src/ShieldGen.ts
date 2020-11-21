// @ts-ignore
import { symbols } from './components/Symbol.svelte';
import { Shield, Color, Metal, Tincture,   SymbolField, Point, Boundary, SplitField, Field, DivisionType, Symbol } from './shieldRepresentation';
import { Bezier } from "bezier-js";

let symbolKeys = Object.keys(symbols);

interface Palette {
  colors: Set<Color>,
  metals: Set<Metal>,
}

function pick<T> (arr:Array<T>): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomEnumKey (enumeration): string {
  const keys = Object.keys(enumeration);
  return pick(keys);
}

function getIntersections (beziers: any[], y): Point[] {
  let intersectionPoint = {
    p1: { x: Number.MIN_VALUE, y },
    p2: { x: Number.MAX_VALUE, y }
  };
  let points: Point[] = new Array();
  for (let bezier of beziers) {
    for (let t of bezier.intersects(intersectionPoint)) {
      points.push(bezier.get(t) as Point);
    }
  }
  return points;
}

function chooseDivision (boundary: Boundary, outline: any[]): { type: DivisionType, boundaries: Boundary[] } {
  // const type = Math.random() < 0.5 ? DivisionType.horizontal : DivisionType.vertical;

  if (Math.random() < 0.5) {
    const type = DivisionType.vertical;

    const top    = Math.min(boundary.topLeft.y,    boundary.topRight.y   );
    const bottom = Math.max(boundary.bottomLeft.y, boundary.bottomRight.y);

    const topLeft     = boundary.topLeft.x;
    const topRight    = boundary.topRight.x;
    const bottomLeft  = boundary.bottomLeft.x;
    const bottomRight = boundary.bottomRight.x;

    const mid = (topLeft + bottomRight + bottomLeft + topRight) / 4;

    const bLeft: Boundary = {
      topLeft:     { x: topLeft,    y: top    },
      topRight:    { x: mid,        y: top    },
      bottomLeft:  { x: bottomLeft, y: bottom },
      bottomRight: { x: mid,        y: bottom },
      touchesLeftEdge: boundary.touchesLeftEdge,
      touchesRightEdge: false,
    };

    const bRight: Boundary = {
      topLeft:     { x: mid,         y: top    },
      topRight:    { x: topRight,    y: top    },
      bottomLeft:  { x: mid,         y: bottom },
      bottomRight: { x: bottomRight, y: bottom },
      touchesLeftEdge: false,
      touchesRightEdge: boundary.touchesRightEdge,
    };

    const boundaries = [bLeft, bRight];
    return { type, boundaries };

  } else {
    const type = DivisionType.horizontal;

    const top    = Math.min(boundary.topLeft.y,    boundary.topRight.y   );
    const bottom = Math.max(boundary.bottomLeft.y, boundary.bottomRight.y);
    const mid = (top + bottom) / 2;

    let leftX = Array(3).fill(boundary.topLeft.x);
    let rightX = Array(3).fill(boundary.topRight.x);

    if (boundary.touchesLeftEdge || boundary.touchesRightEdge) {
      let intersections = [top, mid, bottom].map(y => getIntersections(outline, y));
      // TODO: The only new `y`-value is `mid`. Refactor this so it only checks that.
      if (boundary.touchesLeftEdge) {
        leftX = intersections.map(arr =>
          arr.reduce((left, point) =>
            Math.min(left, point.x), Number.MAX_VALUE
          )
        );
      }
      if (boundary.touchesRightEdge) {
        rightX = intersections.map(arr =>
          arr.reduce((right, point) =>
            Math.max(right, point.x), Number.MIN_VALUE
          )
        );
      }
    }

    const bTop: Boundary = {
      topLeft: { x: leftX[0], y: top },
      topRight: { x: rightX[0], y: top },
      bottomLeft: { x: leftX[1], y: mid },
      bottomRight: { x: rightX[1], y: mid },
      touchesLeftEdge: boundary.touchesLeftEdge,
      touchesRightEdge: boundary.touchesRightEdge,
    };

    const bBottom: Boundary = {
      topLeft: { x: leftX[1], y: mid },
      topRight: { x: rightX[1], y: mid },
      bottomLeft: { x: leftX[2], y: bottom },
      bottomRight: { x: rightX[2], y: bottom },
      touchesLeftEdge: boundary.touchesLeftEdge,
      touchesRightEdge: boundary.touchesRightEdge,
    };

    const boundaries = [bTop, bBottom];
    return { type, boundaries };
  }
}

function chooseSymbol (force = false, color: Tincture, center: Point): Symbol {
  let symbol = pick(symbolKeys);
  while (force && symbol === 'empty') {
    symbol = pick(symbolKeys);
  }

  let properties = {};
  for (let key in symbols[symbol]?.options || ({})) {
    properties[key] = pick(symbols[symbol].options[key]);
  }

  return new Symbol({
    symbol,
    color,
    center,
    properties,
  });
}

function chooseTinctures(palette: Palette): [Tincture, Tincture] {
  const { colors, metals } = palette;

  let tinctures: [Tincture, Tincture] = [
     pick([...metals.keys()]),
     pick([...colors.keys()])
  ];

  if (Math.random() > 0.5) tinctures.reverse();
  return tinctures;
}

function expandPalette (palette: Palette): Palette {
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


function generateField (depth: number, boundary: Boundary, outline: any[], palette?: Palette): Field {
  if (!palette) palette = { colors: new Set(), metals: new Set() };

  let r = Math.random();
  const { type, boundaries } = chooseDivision(boundary, outline);
  if (r < 1 / (depth * 2)) {
  // if (depth < 2) {
    return new SplitField({
      division: { type },
      fields: boundaries.map(b => generateField(depth + 1, b, outline, palette)),
      boundary
    });

  } else {
    let x = (boundary.topLeft.x + boundary.topRight.x) / 2;
    if (boundary.bottomRight.x !== boundary.bottomLeft.x) {
      x += (boundary.bottomLeft.x + boundary.bottomRight.x) / 2;
      x /= 2;
    }
    const y = (boundary.topLeft.y + boundary.topRight.y + boundary.bottomRight.y + boundary.bottomLeft.y) / 4;
    const center = { x, y };
    palette = expandPalette(palette);

    let [background, color] = chooseTinctures(palette);
    let symbol = chooseSymbol(depth === 1, color, center);
    return new SymbolField({
      symbol,
      background: background,
      boundary,
    });
  }
}


function generateShape (): { path: string, outline: any[] } {
    /*
      To reason about the shape of the shield, we're building it up as a series
      of bezier curves. The string is a SVG-renderable path, and the outline
      is a list of Bezier instances from `bezier-js`
    */

    // X-axis
    const left = 0;
    const middle = 50;
    const right = 100;
    // Y-axis
    const top = 0;
    const bottom = 120;

    // NOTE: These can all be randomized
    const aBit = 30;
    const curveStart = 55;
    const halfBit = aBit * 0.5;

    const segments = [
      [
        [left, top],
        [left, top],
        [left, curveStart],
        [left, curveStart]
      ],
      [
        [left, curveStart],
        [left, curveStart + aBit],
        [middle - aBit, bottom - halfBit],
        [middle, bottom]
      ],
      [
        [middle, bottom],
        [middle + aBit, bottom - halfBit],
        [right, curveStart + aBit],
        [right, curveStart]
      ],
      [
        [right, curveStart],
        [right, curveStart],
        [right, top],
        [right, top]
      ]
    ];

    const pathBody = segments.map(points => points.slice(1).join(' ')).join(' C ');
    const path = `M ${left},${top} ${pathBody} Z`;
    const outline = segments.map(points => new Bezier(points.flat()));
    return { path, outline };
}


export function generate (): Shield {
  const { path, outline } = generateShape();
  const boundary: Boundary = {
    topLeft: { x: 0, y: 0 },
    topRight: { x: 100, y: 0 },
    bottomLeft: { x: 50, y: 120 },
    bottomRight: { x: 50, y: 120 },
    touchesLeftEdge: true,
    touchesRightEdge: true,
  };

  return {
    field: generateField(1, boundary, outline),
    shape: path,
  }
}
