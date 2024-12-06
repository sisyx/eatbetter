function formatNumberWithCommas(number: Number) {
    // Convert the number to a string and split into integer and decimal parts
    const parts = number.toString().split('.');
    
    // Add commas to the integer part
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    // Join the parts back together (in case there were decimal places)
    return parts.join('.');
}

export { formatNumberWithCommas }