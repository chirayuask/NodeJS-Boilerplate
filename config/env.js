import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path : path.resolve(__dirname, '../.env')});



export default {
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_DIALECT: process.env.DB_DIALECT,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT
}
