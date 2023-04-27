// Fecha de hoy
const hoy = new Date();
console.log(hoy)

// Fecha de nacimiento
const fechaNacimiento = new Date('1989-02-23');
console.log(fechaNacimiento)

// Verificar si hoy es más tarde que la fecha de nacimiento
const esMasTarde = hoy > fechaNacimiento;
console.log(esMasTarde)

// Día de nacimiento
const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento)

// Mes de nacimiento (Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth();
console.log(mesNacimiento +1)

// Año de nacimiento (con 4 dígitos)
const anioNacimiento = fechaNacimiento.getFullYear();
console.log(anioNacimiento)
