const numberToEnumString = (n) => {
	let strArray = [];
	while (n > 0) {
		strArray.unshift(n);
		n = n - 1;
	}
	return strArray.toString().replace(/,/g, '');
};

const digitsToArray = (n) => Array.from(numberToEnumString(n)).map(Number);

export default digitsToArray;
