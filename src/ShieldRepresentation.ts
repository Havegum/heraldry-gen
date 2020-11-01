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

export type Tincture = Color | Metal;

export enum DivisionType {
  horizontal = 'Horizontal',
  vertical = 'Vertical',
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
export interface Symbol {
  symbol: string,
  color: Tincture,
  properties: SymbolProperties,
}

export interface SymbolProperties {
  [propName: string]: any;
}

// Symbol fields have one symbol, and a (possibly composite) background
export type SymbolField = {
  type: "Symbol",
  symbol: Symbol,
  background: Background
}

// Split fields have a division rule, and a list of fields
export interface SplitField {
  type: "Division",
  division: Division,
  fields: Array<Field>,
}

export type Field = SymbolField | SplitField;

// A shield has one field that may split into others
export interface Shield {
  field: Field,
}
