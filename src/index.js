function toReadable(number) {
    let numbers = number + '';
    let arr = [];
    let values = [];
    let str = '';
    for (let i = 0; i < numbers.length; i++) {
        arr.push(numbers[i])
        values.unshift('1' + '0'.repeat(i))
    }
    values = values.map((num, i) => [arr[i], num])
    values.forEach((nums, i) => {
        str += `${getNum(nums[0])}${getName(nums)}`
    })
    
    console.log(values);
    console.log(str);

    function getNum(str) {
        switch (str) {
            case '1':
                return 'one';
            case '2':
                return 'two';
            case '3':
                return 'three';
            case '4':
                return 'four';
            case '5':
                return 'five';
            case '6':
                return 'six';
            case '7':
                return 'seven';
            case '8':
                return 'eight';
            case '9':
                return 'nine'
        }
    }

    function getName(nums) {
        if (nums[1].length === 4) {
            return ' thousand '
        } else if (nums[1].length === 3) {
            return ' hundred '
        } else if (nums[1].length === 2) {
            return 'thy '
            
        } else if (nums[1].length === 1) {
            return '';
        }
        
    }

    function onlik(num) {
        switch (num) {
            case '11':
                return ' eleven ';
            case '12':
                return ' twelve ';
            case '13':
                return ' thirteen';
            case '14':
                return ' fourteen ';
            case '15':
                return ' fiveteen ';
            case '16':
                return ' sixteen ';
            case '17':
                return ' seventeen ';
            case '18':
                return ' eighteen ';
            case '19':
                return ' nineteen ';
        }
    }

    // return values;
}

console.log(toReadable(8715))

module.exports = {
    toReadable,
};
