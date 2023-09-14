import { db } from "../database/database"

const getMovies = async()=>{
    //simplesmente fazer a requisição de puxar todos os dados
    const list = await db.query(`
        SELECT * FROM movies;
    `);
    return list.rows;
    //dar o retorno do sucesso
}

const create = async(title, description)=>{
    //receber um body validado
    const result = await db.query(`
        INSERT INTO movies (title, description)
            VALUES ($1, $2);
    `, [title, description]);
    //fazer um isert desse body
    return result.rowCount;
}

const deleteMovie = async(id)=>{
    //recebr um id
    const result = await db.query(`
        DELETE FROM movies WHERE id = $1
    `,[id])
    //deletar o filme desse id
    return result.rowCount;

}

const toggleStatus = async(id) =>{
    //receber um id
    //trocar o pra false o assistido
    const result = await db.query(`
        UPDATE movies status = $1 movies WHERE id = $2
    `,[id])
    return result.rowCount;
}

export const movieRepository = {
    getMovies,
    create,
    deleteMovie,
    toggleStatus
}