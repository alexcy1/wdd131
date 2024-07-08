const products = [
    { id: 'fc-1888', name: 'Flux Capacitor', avgRating: 4.5 },
    { id: 'pl-2050', name: 'Power Laces', avgRating: 4.7 },
    { id: 'tc-1987', name: 'Time Circuits', avgRating: 3.5 },
    { id: 'lvr-2000', name: 'Low Voltage Reactor', avgRating: 3.9 },
    { id: 'we-1969', name: 'Warp Equalizer', avgRating: 5.0 }
];

document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('product-name');
    
    products.forEach(product => {
        let option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

function padZero(num) {
    return num.toString().padStart(2, '0');
}
