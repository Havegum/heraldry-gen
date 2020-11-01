import { Shield, Color, Metal, SymbolField, Field, DivisionType } from './ShieldRepresentation';

let simpleSymbolField: Field = {
  type: 'Symbol',
  symbol: {
    color: Metal.gold,
    symbol: 'circle',
    properties: {}
  },
  background: Color.red,
};

let dividedField: Field = {
  type: 'Division',
  division: {
    type: DivisionType.vertical
  },
  fields: [
    {
      type: 'Symbol',
      symbol: {
        color: Metal.gold,
        symbol: 'circle',
        properties: {}
      },
      background: Color.red
    },
    {
      type: 'Division',
      division: {
        type: DivisionType.horizontal,
      },
      fields: [
        {
          type: 'Division',
          division: {
            type: DivisionType.horizontal,
          },
          fields: [
            {
              type: 'Division',
              division: {
                type: DivisionType.vertical,
              },
              fields: [
                {
                  type: 'Symbol',
                  symbol: {
                    color: Metal.silver,
                    symbol: 'circle',
                    properties: {}
                  },
                  background: Color.blue,
                },
                {
                  type: 'Symbol',
                  symbol: {
                    color: Color.blue,
                    symbol: 'circle',
                    properties: {}
                  },
                  background: Metal.silver,
                }
              ]
            },
            {
              type: 'Division',
              division: {
                type: DivisionType.vertical,
              },
              fields: [
                {
                  type: 'Symbol',
                  symbol: {
                    color: Color.blue,
                    symbol: 'circle',
                    properties: {}
                  },
                  background: Metal.silver,
                },
                {
                  type: 'Symbol',
                  symbol: {
                    color: Metal.silver,
                    symbol: 'circle',
                    properties: {}
                  },
                  background: Color.blue,
                }
              ]
            },
          ]
        },
        {
          type: 'Symbol',
          symbol: {
            color: Color.blue,
            symbol: 'circle',
            properties: {}
          },
          background: Metal.silver,
        }
      ],
    },
  ],
}

// let shield: Shield = { field: simpleSymbolField };
let shield: Shield = { field: dividedField };


export { shield };
