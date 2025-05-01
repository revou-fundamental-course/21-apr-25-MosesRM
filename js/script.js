// Normal state (C to F)
var isCtoF = true;

// Convert button action
document.getElementById('convertBtn').addEventListener("click", function(event) {
    event.preventDefault(); // Prevent page refresh
    var input = document.getElementById('inputTemp').value;

    // Check if input is empty
    if (input === '') {
        alert('Please enter the value.');  
        return;
    }

    // Convert from string to number
    var tempInput = parseFloat(input);
    var output;
    var calcText;

    if (isNaN(tempInput)) {
        alert("Please input a number");
    } else {
        if (isCtoF) {
            // Celsius to Fahrenheit: (input * 9/5) + 32
            output = (tempInput * 9 / 5) + 32;
            calcText = tempInput + ' * (9/5) + 32 = ' + output.toFixed(2);
        } else {
            // Fahrenheit to Celsius: (input - 32) * 5/9
            output = (tempInput - 32) * 5 / 9;
            calcText = '(' + tempInput + ' - 32) * (5/9) = ' + output.toFixed(2);
        }
    }

    // Show result in output input box (readonly)
    document.getElementById('outputTemp').value = output.toFixed(2);

    // Show the calculation formula
    document.getElementById('calculation').innerText = calcText;
});

// Reset button action clears all 
document.getElementById('resetBtn').onclick = function () {
    document.getElementById('inputTemp').value = '';
    document.getElementById('outputTemp').value = '';
    document.getElementById('calculation').innerText = '';
};

// Reverse button action 
document.getElementById('reverseBtn').addEventListener("click", function(event) {
    event.preventDefault(); // Prevent page refresh
    isCtoF = !isCtoF; // Switch the conversion state

    // Clear inputs and outputs
    document.getElementById('inputTemp').value = '';
    document.getElementById('outputTemp').value = '';
    document.getElementById('calculation').innerText = '';

    // Update instruction text and link text
    if (isCtoF) {
        document.getElementById('instruction').innerHTML =
            'Masukkan suhu derajat celcius (&deg;C) ke kota di bawah, lalu klik tombol konversi untuk mendapatkan hasil konversi dalam bentuk farenheit (&deg;F)';
        document.getElementById('link').innerText = 'Farenheit to Celcius';
        document.getElementById('label-input').innerHTML = 'Celcius (&deg;C)';
        document.getElementById('label-output').innerHTML = 'Farenheit (&deg;F)';
        document.getElementById('formula-Intro').innerHTML = 'Suhu S dalam derajat Fahrenheit (&deg;F) sama dengan suhu S dalam derajat Celcius (&deg;C) kali 9/5 tambah 32';
        document.getElementById('formula').innerHTML = 'S<sub>(&deg;F)</sub> = (S<sub>(&deg;C)</sub> x 9/5) + 32';
        document.getElementById('formula-alternatif').innerHTML = 'S<sub>(&deg;F)</sub> = (S<sub>(&deg;C)</sub> x 1,8) + 32';
    } else {
        document.getElementById('instruction').innerHTML =
            'Masukkan suhu derajat farenheit (&deg;F) ke kota di bawah, lalu klik tombol konversi untuk mendapatkan hasil konversi dalam bentuk celcius (&deg;C)';
        document.getElementById('link').innerText = 'Celcius to Farenheit';
        document.getElementById('label-input').innerHTML = 'Fahrenheit (&deg;F)';
        document.getElementById('label-output').innerHTML = 'Celsius (&deg;C)';
        document.getElementById('formula-Intro').innerHTML = 'Suhu S dalam derajat Celcius (&deg;C) sama dengan suhu S dalam derajat Farenheit (&deg;F) dikurangi 32 dulu lalu dikali 9/5';
        document.getElementById('formula').innerHTML = 'S<sub>(&deg;C)</sub> = (S<sub>(&deg;F)</sub> - 32) x 9/5';
        document.getElementById('formula-alternatif').innerHTML = 'S<sub>(&deg;C)</sub> = (S<sub>(&deg;F)</sub> - 32) x 1.8';
    }
});

// Link text 
document.getElementById('link').onclick = function () {
    document.getElementById('reverseBtn').click();
};