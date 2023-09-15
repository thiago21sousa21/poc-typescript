import dotenv from 'dotenv';
import * as pg from 'pg'

dotenv.config()

const {Pool} = pg;

export const db = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production" ? true : false
});