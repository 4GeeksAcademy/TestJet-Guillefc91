// Esta es mi función que suma dos números
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromDollarToYen = (dollar) =>{
        return (dollar * oneEuroIs.JPY)/oneEuroIs.USD;
}
const fromEuroToDollar = (euro) =>{
    return (euro * oneEuroIs.USD);
}
const fromYenToPound = (yen) =>{
    return (yen * oneEuroIs.GBP)/oneEuroIs.JPY;
}

// Solo un registro en consola para nosotros
console.log(fromDollarToYen(10))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};

