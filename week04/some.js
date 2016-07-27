function some(array, count) {
	
	var rejected = [],
		result = [],
		counter = 0;

	if (!(array instanceof Array && array.length >= count)) {
		throw new Error;
	}

	return new Promise((resplve, reject) => {
		function finaly() {
			if(array.length === counter) {
				resolve(result);
			}
		}

		array.forEach(value => {
			if (typeof value.then == "function") {
				value.then(value => {
					if (result.length < count) {
						result.push(value)
						counter++
						finaly()
					}
				}).catch(err => rejected.push(err))
			} else if (result.length < count) {
				result.push(value)
				counter++
				finaly()
			}
		})
	})
}