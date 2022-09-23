// Numeric enum type declaration
enum Color { red, green, blue };
console.log( Color );
// Typed variable declaration and assignment tests
let a:Color = Color.red;
a = Color.green;
a = 4.3;  // DANGER - you can assign any numeric value!
a = "test";  // error TS2322: Type '"test"' is not assignable to type 'Color'

