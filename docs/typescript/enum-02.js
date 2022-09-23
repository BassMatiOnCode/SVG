"use strict";
// Numeric enum type declaration
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
console.log(Color);
// Typed variable declaration and assignment tests
let a = Color.red;
a = Color.green;
a = 4.3; // DANGER - you can assign any numeric value!
// a = "test";  // error TS2322: Type '"test"' is not assignable to type 'Color'
