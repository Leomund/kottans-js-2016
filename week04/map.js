function map(array, fn) {

	if(!(array instanceof Array)) {
		throw new Error;
	}

	return new this((res, rej) => {
		var isRejected = false;
		var result = [];
		array.forEach(function(value){
			if (typeof value.then == "function") {
				value.then(value => result.push(fn(value)))
				.catch(isRejected = true);
			} else {
				result.push(fn(value));
			}
		})

		isRejected ? rej('Rejected?') : res(result);
	})
}