const alturaEnCm = 179;
const alturaEnMetros = 1.79;
const pesoEnKg = 90;

const alturaRedondeada = Math.ceil(alturaEnMetros);
const pesoRedondeado = Math.floor(pesoEnKg);

const esMaximo = Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER;

console.log(`Altura en centímetros: ${alturaEnCm}`);
console.log(`Altura en metros: ${alturaEnMetros}`);
console.log(`Peso en kilogramos: ${pesoEnKg}`);
console.log(`Altura redondeada hacia arriba: ${alturaRedondeada}`);
console.log(`Peso redondeado hacia abajo: ${pesoRedondeado}`);
console.log(`¿El máximo valor + 1 es igual al máximo valor en Javascript? ${esMaximo}`);
