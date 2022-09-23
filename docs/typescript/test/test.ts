interface Person {
	firstName:string , 
	lastName:string
	}
const test = ( person:Person) : boolean => {
	return person.firstName === "John" ;
	}