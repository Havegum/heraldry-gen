export enum Color {
  red = '#c83223',
  green = '#218c49',
  blue = '#1480bd',
  black = '#2a2a2a',
  purple = '#5c2871',
}

export enum Metal {
  gold = '#ffe600',
  silver = '#f0f0f0',
}

export interface Point {
  x: number,
  y: number,
}

export interface Boundary {
  topLeft: Point,
  topRight: Point,
  bottomLeft: Point,
  bottomRight: Point,
  touchesLeftEdge: boolean,
  touchesRightEdge: boolean,
}

export type Tincture = Color | Metal;

export enum DivisionType {
  horizontal = 'horizontal',
  vertical = 'vertical',
  // diagonal?
}

export interface Division {
  type: DivisionType,
  // edgeStyle
}

export interface CompositeBackground {
  colorA: Tincture,
  colorB: Tincture,
  division: Division,
}

export type Background = Tincture | CompositeBackground

// Symbols can be icons, patterns, or no symbol.
// The properties are symbol-specific and are forwarded to their constructor.
export class Symbol {
  symbol: string;
  color: Tincture;
  center: Point;
  properties: SymbolProperties;

  constructor (config: {
    symbol: string,
    color: Tincture,
    center: Point,
    properties?: SymbolProperties
  }) {
    this.symbol = config.symbol;
    this.color = config.color;
    this.center = config.center;
    this.properties = config.properties || {};
  }
}

export interface SymbolProperties {
  [propName: string]: any;
}

// Symbol fields have one symbol, and a (possibly composite) background
export class SymbolField {
  type: string = 'Symbol';
  boundary: Boundary;
  symbol: Symbol;
  background: Background;

  constructor (config: { symbol: Symbol, background: Background, boundary: Boundary }) {
    this.symbol = config.symbol;
    this.background = config.background;
    this.boundary = config.boundary;
  }
}

// Split fields have a division rule, and a list of fields
export class SplitField {
  type: string = 'Division';
  boundary: Boundary;
  division: Division;
  fields: Array<Field>;

  constructor (config: { division: Division, fields: Array<Field>, boundary: Boundary }) {
    this.division = config.division;
    this.fields = config.fields;
    this.boundary = config.boundary;
  }
}

export type Field = SymbolField | SplitField;

// A shield has one field that may split into others
export interface Shield {
  field: Field,
  shape: string,
}
