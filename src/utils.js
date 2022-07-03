const fs = require("fs");

const calculateProfit = (oldVal, newVal) => ((newVal - oldVal) / oldVal) * 100;

const toDecimal = (number, decimals) =>
	parseFloat(number / 10 ** decimals).toFixed(decimals);

const toNumber = (number, decimals) => number * 10 ** decimals;

const createTempDir = () => {
	// create a 'temp' directory if not exists
	if (!fs.existsSync("./temp")) {
		fs.mkdirSync("./temp");
	}
};

module.exports = {
	calculateProfit,
	toDecimal,
	toNumber,
	createTempDir,
};
