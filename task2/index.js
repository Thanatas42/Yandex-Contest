function main(data) {
    let array = data.split('@');

    let count = array[0] * 1;
    let str = array[1];

    let strArray = str.split('');
    let mySet = new Set();
    let beautiCountResult = 0;

    strArray.forEach((item) => {
        if (!mySet.has(item)) {
            let checkItem = checkStr(item);
            if (checkItem > beautiCountResult) {
                beautiCountResult = checkItem;
            }
            mySet.add(item);
        }
    });


    function checkStr(indicator) {
        let beautiCount = 0;
        let revertCount = count;
        let right = 0;

        for (let i = 0; i < strArray.length; i++) {
            while (strArray[right] === indicator || revertCount > 0) {
                strArray[right] !== indicator ? revertCount-- : revertCount;

                right++
            }

            strArray[i] === indicator ? revertCount : revertCount++;
            if (beautiCount < right - i) {
                beautiCount = right - i;
            }
        }

        return beautiCount;
    };

    console.log(beautiCountResult.toString());
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('', (answer1) => {
    rl.question('', (answer2) => {
        var result = (`${answer1}`) + (`@${answer2}`);
        res = main(result);
        rl.close();
    });
});