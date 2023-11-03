function outputCartRow(item, total) {
    var rowHTML = '<tr>';
    // Create table cells for item details
    rowHTML += '<td><img src="' + item.imageSrc + '"></td>';
    rowHTML += '<td>' + item.name + '</td>';
    rowHTML += '<td>' + item.quantity + '</td>';
    rowHTML += '<td>' + (item.price !== '' ? '$' + item.price.toFixed(2) : '') + '</td>';
    rowHTML += '<td>' + (total !== '' ? '$' + total.toFixed(2) : '') + '</td>';
    rowHTML += '</tr>';

    // Use document.write() to output the row HTML
    document.write(rowHTML);
}

// Function to calculate subtotal
function calculateSubtotal(items) {
    var subtotal = 0;
    for (var i = 0; i < items.length; i++) {
        subtotal += items[i].quantity * items[i].price;
    }
    return subtotal;
}

// Function to calculate tax
function calculateTax(subtotal, taxRate) {
    return subtotal * taxRate;
}

// Function to calculate shipping
function calculateShipping(subtotal, shippingThreshold, shippingCost) {
    return subtotal >= shippingThreshold ? 0 : shippingCost;
}

// Function to calculate grand total
function calculateGrandTotal(subtotal, tax, shipping) {
    return subtotal + tax + shipping;
}

