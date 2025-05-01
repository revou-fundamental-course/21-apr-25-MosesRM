// This variable tells us if we convert C to F (true) or F to C (false)
var isCtoF = true;

// Convert button action
document.getElementById('convertBtn').onclick = function () {
    var input = document.getElementById('inputTemp').value;

    // Check if input is empty
    if (input === '') {
        alert('Please enter a temperature value.');
        return; // stop if empty
    }

    // Convert from string to number
    var tempInput = parseFloat(input);
    var output;
    var calcText;

    if (isCtoF) {
        // Celsius to Fahrenheit: (input * 9/5) + 32
        output = (tempInput * 9 / 5) + 32;
        calcText = tempInput + ' * (9/5) + 32 = ' + output.toFixed(2);
    } else {
        // Fahrenheit to Celsius: (input - 32) * 5/9
        output = (tempInput - 32) * 5 / 9;
        calcText = '(' + tempInput + ' - 32) * (5/9) = ' + output.toFixed(2);
    }

    // Show result in output input box (readonly)
    document.getElementById('outputTemp').value = output.toFixed(2);

    // Show the calculation formula below
    document.getElementById('calculation').innerText = calcText;
};

// Reset button action clears all inputs and outputs
document.getElementById('resetBtn').onclick = function () {
    document.getElementById('inputTemp').value = '';
    document.getElementById('outputTemp').value = '';
    document.getElementById('calculation').innerText = '';
};

// Reverse button action changes conversion direction, clears inputs and updates text
document.getElementById('reverseBtn').onclick = function () {
    // Switch the conversion mode
    isCtoF = !isCtoF;

    // Clear inputs and outputs
    document.getElementById('inputTemp').value = '';
    document.getElementById('outputTemp').value = '';
    document.getElementById('calculation').innerText = '';

    // Update instruction text and link text
    if (isCtoF) {
        document.getElementById('instruction').innerText =
            'Masukkan suhu derajat celcius (C) ke kota di bawah, lalu klik tombol konversi untuk mendapatkan hasil konversi dalam bentuk farenheit (F)';
    document.getElementById('link').innerText = 'Celcius to farenheit';
    } else {
    document.getElementById('instruction').innerText =
        'Masukkan suhu derajat farenheit (F) ke kota di bawah, lalu klik tombol konversi untuk mendapatkan hasil konversi dalam bentuk celcius (C)';
    document.getElementById('link').innerText = 'Farenheit to celcius';
    }
};

// Link text acts the same as reverse button
document.getElementById('link').onclick = function () {
    document.getElementById('reverseBtn').click();
};
