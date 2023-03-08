const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main(citys, prices) {
    prices = prices.split(' ');
    let result = prices;
    let stack = [];

    prices.forEach((item, index) => {
        item = Number(item);

        for (var i = stack.length - 1; i >= 0; i--) {
            if (item < stack[i][0]) {
                result[stack[i][1]] = index;
                stack.pop();
            } else {
                break;
            }
        }

        stack.push([item, index]);
    });

    stack.forEach(item => result[item[1]] = -1);

    console.log(result.join(' '));
}

rl.question('', (answer1) => {
    rl.question('', (answer2) => {
        main(answer1, answer2);
        rl.close();
    });
});
