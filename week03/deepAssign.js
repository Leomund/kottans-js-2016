function deepAssign(target, source, isExpand) {
	if (target === undefined || target === null){
		throw new TypeError('Error: source cannot be null or undefind');
	}

	var to = Object(target);
	var lenArgs = arguments.length;

	if ( isExpand === true ){
		lenArgs -= 1;
	}

	for (var i = 1; i < lenArgs; i += 1) {

		if(arguments[i] === undefined || arguments[i] === null){
			continue;
		}

		var arrKeys = Object.keys(arguments[i]),
		keysLength = arrKeys.length,
		k = 0;
		for (j = 0; j < keysLength; j += 1) {
			var copy = arguments[i][arrKeys[j]];
			if (copy instanceof Object) {
				if (isExpand === true) {
					to[arrKeys[j]] = deepAssign(to[arrKeys[j]], copy);
				} else {
					to[arrKeys[j]] = deepAssign(new copy.constructor(copy), copy);
				}

			} else {
				to[arrKeys[k]] = copy;
			}

		}
	}
	return to
}

let a = {a:1,b:2};
let b = {c:2,d:{x:3}};
console.log(deepAssign(a,b))