const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const resultContainer = document.getElementById("result-container");
const romanArr = {
    M: 1000, CM: 900, D: 500, CD: 400,
    C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9,
    V: 5, IV: 4, I: 1
};

const convertToRomanRecursive = (num) => {
    if (num === 0) {
        return '';
    }

    for (const key in romanArr) {
        if (num >= romanArr[key]) {
            return key + convertToRomanRecursive(num - romanArr[key]);
        }
    }
};

const checkingNumber = () => {
    const input = parseInt(number.value); // Parse input as an integer
    if (!input || isNaN(input)) {
        output.innerText = "Please enter a valid number";
        resultContainer.style = "display: block;"
        return;
    }

    if (input < 0) {
        output.innerText = "Please enter a number greater than or equal to 1";
        resultContainer.style = "display: block;"
    } else if (input >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
        resultContainer.style = "display: block;"
    } else {
        const romanNumeral = convertToRomanRecursive(input);
        output.innerText = `${romanNumeral}`;
        resultContainer.style = "display: block;"
    }
};

convertBtn.addEventListener("click", checkingNumber);
