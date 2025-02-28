function findMax(numbers) {
    if (numbers.length === 0) {
        throw new Error("El array no puede estar vacío");
    }
    
    let max = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    
    return max;
}

function includes(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return true;
        }
    }
    return false;
}

function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

function missingNumbers(numbers) {
    let min = findMin(numbers);
    let max = findMax(numbers);
    let missing = [];
    
    for (let i = min; i <= max; i++) {
        if (!includes(numbers, i)) {
            missing.push(i);
        }
    }
    
    return missing;
}

console.log(findMax([3, 1, 7, 5, 9, 2])); 
console.log(includes([3, 1, 7, 5, 9, 2], 7));
console.log(includes([3, 1, 7, 5, 9, 2], 4));
console.log(sum([3, 1, 7, 5, 9, 2]));
console.log(missingNumbers([3, 1, 7, 5, 9, 2]));

//Funciones Auxiliares

function findMin(numbers) {
    if (numbers.length === 0) {
        throw new Error("El array no puede estar vacío");
    }
    
    let min = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    
    return min;
}