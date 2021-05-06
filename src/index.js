const toRevNum = (num) => Number(num.toString().split('').reverse().join(''));

function checkPal (num) {
    const reverseNum = toRevNum(num);
    return num === reverseNum;
}

function createPal () {
    let steps = 0;
    let result = 0;
    const resultObj = {};

    return function makePal (num) {

        if (checkPal(num)) return num;

        const reverseNum = toRevNum(num);
        result = num + reverseNum;
        steps++;

        if (!checkPal(result)) {
            return makePal(result);
        } else {
            resultObj.result = result;
            resultObj.steps = steps;

            return resultObj;
        }
    };
}
createPal();