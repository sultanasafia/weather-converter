
        function celsiusToFahrenheit(celsius) {
            return (celsius * 9/5) + 32;
        }

        function fahrenheitToCelsius(fahrenheit) {
            return (fahrenheit - 32) * 5/9;
        }

        function convertTemperature() {
            var choice = document.getElementById("conversionType").value;
            var inputValue = parseFloat(document.getElementById("temperatureInput").value);
            var resultElement = document.getElementById("result");

            if (isNaN(inputValue)) {
                resultElement.innerHTML = "Please enter a valid number.";
                return;
            }

            if (choice === "celsiusToFahrenheit") {
                var result = celsiusToFahrenheit(inputValue);
                resultElement.innerHTML = inputValue + " Celsius is equal to " + result.toFixed(2) + " Fahrenheit";
            } else if (choice === "fahrenheitToCelsius") {
                var result = fahrenheitToCelsius(inputValue);
                resultElement.innerHTML = inputValue + " Fahrenheit is equal to " + result.toFixed(2) + " Celsius";
            } else {
                resultElement.innerHTML = "Please select a conversion type.";
            }
        }
   