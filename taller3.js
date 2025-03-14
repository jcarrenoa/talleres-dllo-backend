function desglosarString(cadena, tipo) {
    const vocales = "aeiouAEIOU";
    const consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    
    if (tipo === "vocales") {
        return [...cadena].filter(letra => vocales.includes(letra)).length;
    } else if (tipo === "consonantes") {
        return [...cadena].filter(letra => consonantes.includes(letra)).length;
    } else {
        throw new Error("El tipo debe ser 'vocales' o 'consonantes'");
    }
}

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

function conversionRomana(romana) {
    const valores = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    let resultado = 0;
    for (let i = 0; i < romana.length; i++) {
        const actual = valores[romana[i]];
        const siguiente = valores[romana[i + 1]];
        if (siguiente && actual < siguiente) {
            resultado -= actual;
        } else {
            resultado += actual;
        }
    }
    return resultado;
}

const texto = "Murcielagos";
console.log(desglosarString(texto, "vocales"));  
console.log(desglosarString(texto, "consonantes"));
console.log(twoSum([3, 4, 2], 6));
console.log(conversionRomana("XIV"));