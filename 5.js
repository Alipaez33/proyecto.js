// Una variable que contenga la lista de la compra
let listaCompra = ['Leche', 'Pan', 'Huevos', 'Frutas', 'Verduras'];
 console.log(listaCompra);
// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push('Aceite de Girasol');

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop('Aceite de Girasol');

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
  { titulo: 'El Padrino', director: 'Francis Ford Coppola', fecha: 1972 },
  { titulo: 'La Lista de Schindler', director: 'Steven Spielberg', fecha: 1993 },
  { titulo: 'El Gran Hotel Budapest', director: 'Wes Anderson', fecha: 2014 }
];
console.log(peliculasFavoritas)

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasPosterioresA2010 = peliculasFavoritas.filter((pelicula) => pelicula.fecha > 2010);
console.log(peliculasPosterioresA2010);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculasFavoritas.map((pelicula) => pelicula.director);
console.log(peliculasFavoritas)
// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculasFavoritas.map((pelicula) => pelicula.titulo);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const titulosYDirectoresConcatenados = titulos.concat(directores);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const titulosYDirectoresConcatenadosSpread = [...titulos, ...directores];
