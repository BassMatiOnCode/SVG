
class Point  {
  constructor ( private x: number, private y:number ) { }
  print ( ) { 
    console.log ( `x=${this.x} y=${this.y}` ) ;
    } 
	/*
  printDistanceTo ( p: Point ) { 
    console.log(Math.sqrt(Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2))) ; 
  } */ }

let p1 = new Point( 3, 3 );
console.log( p1.x );