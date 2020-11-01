import { Shield, Color, Metal, SymbolField, Field } from '@/ShieldRepresentation.ts';

// console.log('hey');
let w: string = 'world';

let field: Field = {
  type: 'symbol',
  symbol: {
    color: Metal.gold,
    symbol: 'circle',
  },
  background: Color.red,
};

let shield: Shield = { field };


export { shield };
