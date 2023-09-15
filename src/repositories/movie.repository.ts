import { db } from "../database/connect"

const getMovies = async()=>{
    const list = await db.query(`
        SELECT * FROM movies;
    `);
    return list.rows;
}

const getMovie = async(id: number)=>{
    const movie = await db.query(`
        SELECT status FROM movies WHERE id = $1;
    `,[id]);
    return movie.rows[0];
}

const create = async(title:string, description:string|void)=>{
    const result = await db.query(`
        INSERT INTO movies (title, description)
            VALUES ($1, $2);
    `, [title, description]);
    return result.rowCount;
}

const deleteMovie = async(id:number)=>{
    const result = await db.query(`
        DELETE FROM movies WHERE id = $1
    `,[id])
    return result.rowCount;
}

const toggleStatus = async(id:number, status:boolean) =>{
    const result = await db.query(`
        UPDATE movies SET status = $1 WHERE id = $2
    `,[status,id])
    return result.rowCount;
}

export const movieRepository = {
    getMovies,
    create,
    deleteMovie,
    toggleStatus,
    getMovie
}