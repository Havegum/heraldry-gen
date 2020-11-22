export const Color = {
  red: '#c83223',
  green: '#218c49',
  blue: '#1480bd',
  black: '#2a2a2a',
  purple: '#5c2871',
}

export const Metal = {
  gold: '#ffe600',
  silver: '#f0f0f0',
}

export const DivisionType = {
  horizontal: 'horizontal',
  vertical: 'vertical',
  // diagonal?
}

// Symbols can be icons, patterns, or no symbol.
// The properties are symbol-specific and are forwarded to their constructor.
export class Symbol {
  constructor ({ symbol, color, properties=null }) {
    this.symbol = symbol;
    this.color = color;
    if (properties) this.properties = properties;
  }
}

export class Field {
  constructor ({ symbol, background }) {
    this.type = 'Symbol';
    this.symbol = symbol;
    this.background = background;
  }
}

// Split fields have a division rule, and a list of fields
export class SplitField {
  constructor ({ division, fields, boundary }) {
    this.type = 'Division';
    this.division = division;
    this.fields = fields;
    this.boundary = boundary;
  }
}
