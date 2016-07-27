function reduce(array, fn) {
	if (!(array instanceof Array))
		throw new Error;

	return new Promise((resolve, reject) => {
		var total = 0,
		counter = 0;
		for (var i = 0; i < array.length; i++) {
			if (typeof array[i].then == "function") {
				count++;
				array[i].then(val => {
					total += fn(val);
					!--count && res(total);
				})
				.catch(rej)

			} else {
				total += fn(array[i]);
				!count && resolve(total);
			}
		}
	}
}