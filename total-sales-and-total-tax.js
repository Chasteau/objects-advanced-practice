var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSum(sales) {
  var total = 0;
  for (var i in sales) {
    total += sales[i];
  }
  return total;
}

function calculateTaxes(province, sales) {
  var taxes = sales * province
  return taxes;
}

function calculateSalesTax(salesData, taxRates) {

  // create the structure for the result as an empty object
  var output = {};

  // use a for loop to go through all sales data
  for (i = 0; i < salesData.length; i++ ) {
    var currentSalesData = salesData[i];

    // get the first company
    var companyName = currentSalesData.name;

    //get sum of sales
    var currentSales = calculateSum(currentSalesData.sales);

    // get the total tax
    var currentTaxes = calculateTaxes(taxRates[currentSalesData.province], currentSales);

    // console.log(companyName, currentSales, curentTaxes);

    // check if the company is already in the result, if not insert, if yes sum the values
    if (output.hasOwnProperty(companyName)) {
      output[companyName].totalSales += currentSales;
      output[companyName].totalTaxes += currentTaxes;
    } else {
      output[companyName] = {totalSales: currentSales, totalTaxes: currentTaxes};
    }
  }

  return output;

}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
