function add ( ...numbers:number[] ) {
	let result = 0;
	for ( let i = 0 ; i < numbers.length ; i ++ )
		result += numbers[ i ];
	return result;
	}
console.log( add( 1, 2, "3" ));