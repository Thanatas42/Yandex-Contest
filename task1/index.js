function sum(data) {
    let maxLenght = 0;
    let dataObj = {};

    data.replace(/[\n\r\t]+/g, '').split('').forEach((item) => {
        if (item !== ' ') {
            if (item in dataObj) {
                dataObj[item]++;
                maxLenght < dataObj[item] ? maxLenght++ : maxLenght;
            } else {
                dataObj[item] = 1;
                maxLenght === 0 ? maxLenght = 1 : maxLenght;
            }
        }
    });

    let resultList = Object.entries(dataObj).map(item => item = item[0]).sort();

    function gist(resultList, dataObj) {
        for (let count = maxLenght; count > 0; count--) {
            let gistString = '';
            resultList.forEach((item) => {
                dataObj[item] >= count ? gistString += '#' : gistString += ' ';
            });
            console.log(gistString);
        }
        console.log(resultList.join(''));
    }
    gist(resultList, dataObj);
};

process.stdin.on('data', data => {
    sum(data.toString());
    process.exit();
});