function isPrime(num) {
	if (num < 2) return false;
	for (var i = 2; i < num; i++) {
		if (num % i == 0)
			return false;
	}
	return true;
	
};

for (var i = 0; i < 100; i++) {

	if (isPrime(i)) {

		for ( var j = 0; j < 100; j++ ) {
			if ( i % j == 0 && j != 1) {
				console.log(i + " Делители этого числа: " + "1 и " + j);
			};
		};
	};
};


/* 
if (isPrime(i)) {
	let j = i.toString();
	if (j.length > 1) {
		console.log(i + " Делители этого числа: " + +j[0] + " и " + +j[1]);
	} else {
		console.log(i + " Делители этого числа: " + j[0]);
	}
}
}; */