module.exports = function zeros(expression) {
    var numberWithZeros = 1;
    var prevNumb = "";
    var factorialLevel = 0;
    var zerosCount = 0;

    for (i in expression) {
        j = Number(i) + 1;
        switch (expression[i]) {
            case "*":{
                break;
            }
            case "!":{
                if (expression[Number(i)+1]=="!") {
                    factorialLevel = factorialLevel + 1;
                    break;
                } else {
                    factorialLevel = factorialLevel + 1;
                    numberWithZeros = multiply(String(numberWithZeros), factorial(prevNumb,factorialLevel));
                    factorialLevel = 0;
                    prevNumb = "";
                    break;
                }
            }
            default : {
                prevNumb = prevNumb + expression[i];
                break;
            }
        }
    };
    var i = 0;
    while (numberWithZeros.slice(numberWithZeros.length-1-i, numberWithZeros.length-i) == "0") {
        zerosCount = zerosCount + 1;
        i++;
    };
    return (zerosCount);

    function multiply(first, second) {
        var memorizedPart = 0;
        var previousPartialProduct = "";
        var twoDigitsProduct = 0;
        var currentPartialProduct = "";
        var fullProduct = "";
        for (decimalShift in second) {
            for (i in first) {
                twoDigitsProduct = second[second.length-1-decimalShift] * first[first.length-1-i];
                twoDigitsProduct += memorizedPart;
                twoDigitsProduct += (previousPartialProduct[previousPartialProduct.length-i-2]) ? Number(previousPartialProduct[previousPartialProduct.length-i-2]) : 0;
                currentPartialProduct = String(twoDigitsProduct % 10) + currentPartialProduct;
                memorizedPart = (twoDigitsProduct - twoDigitsProduct % 10)/10;
            }
            if (memorizedPart != 0) {
                currentPartialProduct = memorizedPart + currentPartialProduct;
            }
            fullProduct = currentPartialProduct.slice(currentPartialProduct.length-1, currentPartialProduct.length) + fullProduct;
            previousPartialProduct = currentPartialProduct;
            currentPartialProduct = "";
            memorizedPart = 0;
        }
        fullProduct = previousPartialProduct.slice(0,-1) + fullProduct;
        return (fullProduct);
    };

    function factorial(base,level) {
        var factorialResult = base;
        var counter = base;
        while (counter > level) {
            counter = counter - level;
            factorialResult = multiply(String(factorialResult), String(counter));
        }
        return (factorialResult);
    };
};