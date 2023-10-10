document.addEventListener("DOMContentLoaded", function () {
    const numbersData = {
        "status": 200,
        "numeros": [15, 17, 25, 11, 21, 18, 19, 22, 23, 25, 28]
    };

    const numberList = document.getElementById("numberList");
    const addBtn = document.getElementById("add");
    const multiplyBtn = document.getElementById("multiply");
    const resultValue = document.getElementById("resultValue");
/*
    function fetchNumbers() {
        fetch("https://desarrolloweb.free.beeceptor.com/numeros")
            .then(response => response.json())
            .then(data => {
                const numbers = data.numbers;
                numberList.innerHTML = numbers.map(number => `<li>${number}</li>`).join("");
            })
            .catch(error => console.error(error));
    }
*/
    function loadNumbers() {
        const numbers = numbersData.numeros;
        numberList.innerHTML = numbers.map(number => `<li>${number}</li>`).join("");
    }

    function getSelectedNumbers() {
        return Array.from(numberList.querySelectorAll("li.selected")).map(li => parseFloat(li.textContent));
    }

    function sumSelectedNumbers() {
        const selectedNumbers = getSelectedNumbers();
        const sum = selectedNumbers.reduce((acc, val) => acc + val, 0);
        resultValue.textContent = sum;
    }

    function multiplySelectedNumbers() {
        const selectedNumbers = getSelectedNumbers();
        const product = selectedNumbers.reduce((acc, val) => acc * val, 1);
        resultValue.textContent = product;
    }

    numberList.addEventListener("click", function (event) {
        const li = event.target;
        if (li.tagName === "LI") {
            li.classList.toggle("selected");
        }
    });

    loadNumbers();

    addBtn.addEventListener("click", sumSelectedNumbers);
    multiplyBtn.addEventListener("click", multiplySelectedNumbers);
});
