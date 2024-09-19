function stringChop(str, size) {
 let arr = str.split("")
	let result = []
	while(arr.length >0){
		result.push(arr.splice(0,size).join(""))
	}
return result 
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
