enum Color {
  red = '#ff0000',
  green = '#00ff00',
  blue = '#0000ff',
  black = '#000000',
  purple = '#cc00cc',
}

enum Metal {
  gold = '#ffff00',
  silver = '#ffffff',
}

type Tincture = Color | Metal;

enum DivisionType {
  horizontal,
  vertical,
  // diagonal?
}

interface Division {
  type: DivisionType,
  // edgeStyle
}

interface CompositeBackground {
  colorA: Tincture,
  colorB: Tincture,
  division: Division,
}

type Background = Tincture | CompositeBackground

// Symbols can be icons, patterns, or no symbol.
// The properties are symbol-specific and are forwarded to their constructor.
interface Symbol {
  symbol: string,
  properties: object,
}

// Symbol fields have one symbol, and a (possibly composite) background
interface SymbolField {
  symbol: Symbol,
  background: Background
}

// Split fields have a division rule, and a list of fields
interface SplitField {
  division: Division,
  fields: Array<Field>,
}

type Field = SymbolField | SplitField;

// A shield has one field that may split into others
interface Shield {
  field: Field,
}

export {
  Color,
  Metal,
  Tincture,
  Division,
  CompositeBackground,
  Background,
  Symbol,
  SymbolField,
  SplitField,
  Field,
  Shield,
}
