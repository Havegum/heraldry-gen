import { Shield, Color, Metal, SymbolField, SplitField, Field, DivisionType, Symbol } from './shieldRepresentation';

let simpleSymbolField: Field = new SymbolField({
  symbol: new Symbol({
    symbol: 'diamond',
    color: Color.black,
    properties: { dotted: true },
  }),
  background: Metal.gold,
});

let dividedField: Field = new SplitField({
  division: { type: DivisionType.vertical },
  fields: [
    new SymbolField({
      symbol: new Symbol({
        symbol: 'circle',
        color: Metal.gold
      }),
      background: Color.red
    }),
    new SplitField({
      division: { type: DivisionType.horizontal, },
      fields: [
        new SplitField({
          division: { type: DivisionType.horizontal },
          fields: [
            new SplitField({
              division: { type: DivisionType.vertical },
              fields: [
                new SymbolField({
                  symbol: new Symbol({
                    symbol: 'diamond',
                    color: Metal.silver,
                    properties: { dotted: true }
                  }),
                  background: Color.blue,
                }),
                new SymbolField({
                  symbol: new Symbol({
                    symbol: 'empty',
                    color: Color.blue,
                  }),
                  background: Metal.silver,
                }),
              ]
            }),
            new SplitField({
              division: { type: DivisionType.vertical },
              fields: [
                new SymbolField({
                  symbol: new Symbol({
                    symbol: 'circle',
                    color: Color.blue,
                  }),
                  background: Metal.silver,
                }),
                new SymbolField({
                  symbol: new Symbol({
                    symbol: 'circle',
                    color: Metal.silver,
                  }),
                  background: Color.blue,
                }),
              ]
            }),
          ]
        }),
        new SymbolField({
          symbol: new Symbol({
            symbol: 'circle',
            color: Color.blue,
          }),
          background: Metal.silver,
        }),
      ],
    })
  ],
});

let simple: Shield = { field: simpleSymbolField };
let complex: Shield = { field: dividedField };


export {
  simple,
  complex,
};
