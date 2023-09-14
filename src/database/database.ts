import dotenv from 'dotenv';
import * as pg from 'pg'

dotenv.config()

const {Pool} = pg;

const config = {
    connnectionString: process.env.DATABASE_URL,
    ssl:false
}

if(process.env.NODE_ENV)config.ssl = true

export const db = new Pool(config)