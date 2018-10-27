function sumOfOther(array) {
	let sum = array.reduce((sum,val) => sum + val);
	return array.map(val => sum - val);
}

console.log(sumOfOther([2,3,4,1]));