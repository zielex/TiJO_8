function add(num1, num2)
{
    return num1 + num2;
}

function addOne(number)
{
    number++;
    return number;
}

function negate(number)
{
    return -number;
}

function notCovered(number)
{
    return number > 10;
}

function isNegativeNumber(number)
{
    var isNegative = false;
    if (number < 0) {
        isNegative = true;
    }
    return isNegative;
}

module.exports = {
    add: add,
    addOne: addOne,
    negate: negate,
    notCovered: notCovered,
    isNegativeNumber: isNegativeNumber
};
