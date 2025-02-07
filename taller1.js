function convertidorTemp(c) {
    return c * 9/5 + 32
}

function resolvedor(a, b, c, pos) {
    if (pos) {
        return (-b+Math.sqrt(b**2 - 4*a*c))/(2*a)
    } else {
        return (-b-Math.sqrt(b**2 - 4*a*c))/(2*a)
    }
}

function mejorParidad(num) {
    if (num%2 == 0) {
        return true
    }
    return false
}

function peorParidad(num) {
    const par = 2;
    const verdadero = true;
    const falso = false;
    if (typeof num === 'number') {
        if (num === 1) {
            if (num % par == 0) {
                return verdadero
            } else {
                return falso
            }
        }
        if (num === 2) {
            if (num % par == 0) {
                return verdadero
            } else {
                return falso
            }
        }
        if (num === 3) {
            if (num % par == 0) {
                return verdadero
            } else {
                return falso
            }
        }
        if (num === 4) {
            if (num % par == 0) {
                return verdadero
            } else {
                return falso
            }
        }
        if (num === 5) {
            if (num % par == 0) {
                return verdadero
            } else {
                return falso
            }
        }
        if (num === 6) {
            if (num % par == 0) {
                return verdadero
            } else {
                return falso
            }
        }
        if (num === 7) {
            if (num % par == 0) {
                return verdadero
            } else {
                return falso
            }
        }
        if (num === 8) {
            if (num % par == 0) {
                return verdadero
            } else {
                return falso
            }
        }
        if (num === 9) {
            if (num % par == 0) {
                return verdadero
            } else {
                return falso
            }
        }
        if (num === 10) {
            if (num % par == 0) {
                return verdadero
            } else {
                return falso
            }
        }
    }
    return falso
}
