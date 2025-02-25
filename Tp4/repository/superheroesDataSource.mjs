// repository/superheroesDataSourse.mjs
export default class SuperheroesDataSourse {
    // Metodo abstracto para obtener todos los superheroes
    obtenerTodos() {
        throw new Error('Este metodo debe ser implementado por la subclase');
    }
}