let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

const obj = {};
let deep = 0;
function recursion(tree) {
	for (const key in tree) {
		if (key == "value") {
			if(!obj.hasOwnProperty(deep)) {
				obj[deep] = [];
			}
			obj[deep].push(tree[key]);
			deep++;
		} else {
			recursion(tree[key]);
		}
	}
	deep--;
	if(deep == 0) {
		let result = convert(obj);
		return result;
	}
}

function convert(object) {
	let array = [];
	for (const key in object) {
			array.push(object[key]);
	}
	return array;
}

let array = recursion(tree);
console.log(array); // [[100], [90, 120], [70,99,110,130]]