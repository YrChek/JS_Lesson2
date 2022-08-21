function getPrimeNumbers (count) {
    const array = [];
    let arrayLenhth = array.length;
    for (let i = 2;arrayLenhth < count;i++) {
        let label = 1;
        for (let j = 2; j <= i; j++) {
            if (i / j === 1 && label === 1) {
                array.push(i);
                arrayLenhth = array.length;
            } else if (i % j === 0) {
                label = 0;
            }
        }
    }
    return array
}

console.log(getPrimeNumbers(process.argv[2]))
