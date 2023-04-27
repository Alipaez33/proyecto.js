// Objeto con mis datos personales
const misDatos = {
    nombre: 'Alinson',
    apellido: 'Paez',
    edad: 34,
    altura: 1.80,
    eresDesarrollador: true
  };
  console.log(misDatos)


  // Obtener la edad a partir del objeto
  const edad = misDatos.edad;
console.log(edad)

  
  // Lista con los datos personales de mis amigos y yo
  const datosPersonales = [
    misDatos,
    {
      nombre: 'María',
      apellido: 'Salina',
      edad: 37,
      altura: 1.56,
      eresDesarrollador: false
    },
    {
      nombre: 'Pedro',
      apellido: 'Rodríguez',
      edad: 28,
      altura: 1.80,
      eresDesarrollador: true
    }
  ];
  
  // Lista ordenada por edad de mayor a menor
  const ordenadoPorEdad = datosPersonales.sort((a, b) => b.edad - a.edad);
  console.log(ordenadoPorEdad)