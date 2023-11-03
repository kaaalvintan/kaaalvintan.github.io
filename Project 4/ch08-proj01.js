
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

   var items = [
      {
          imageSrc: '105070.jpg',
          name: 'Portrait of Marten Soolmans',
          quantity: 3,
          price: 75.00
      },
      {
          imageSrc: '106060.jpg',
          name: 'View of Houses in Delft',
          quantity: 1,
          price: 125.00
      },
      {
          imageSrc: '106050.jpg',
          name: 'Woman Reading a Letter',
          quantity: 2,
          price: 100.00
      }
  ];
  
  // Iterate over the items array and generate table rows
  for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var total = item.quantity * item.price;
      outputCartRow(item, total);
  }
// Sample values for taxRate, shippingThreshold, and shippingCost
var taxRate = 0.1; // 10%
var shippingThreshold = 500; // Example shipping threshold value
var shippingCost = 25; // Example shipping cost

// Calculate subtotal, tax, shipping, and grand total using functions
var subtotal = calculateSubtotal(items);
var tax = calculateTax(subtotal, taxRate);
var shipping = calculateShipping(subtotal, shippingThreshold, shippingCost);
var grandTotal = calculateGrandTotal(subtotal, tax, shipping);

// Set the calculated values to the corresponding elements in your HTML
document.querySelector('.totals:nth-child(1) td:last-child').textContent = '$' + subtotal.toFixed(2);
document.querySelector('.totals:nth-child(2) td:last-child').textContent = '$' + tax.toFixed(2);
document.querySelector('.totals:nth-child(3) td:last-child').textContent = '$' + shipping.toFixed(2);
document.querySelector('.totals:nth-child(4) td:last-child').textContent = '$' + grandTotal.toFixed(2);
