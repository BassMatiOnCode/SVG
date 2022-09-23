type Square = { x:number, y:number, w:number };
type Circle = { x:number, y:number, d:number };
function move <SomeType> ( o:SomeType, dx:number, dy:number ):SomeType { 
    o.x += dx ;
    o.y += dy ;
    return o ;
    };
