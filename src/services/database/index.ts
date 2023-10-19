import mysql from 'mysql2/promise';

const contection = mysql.createConnection({
    host: process.env.CHAT_AI_DB_HOST,
    user: process.env.CHAT_AI_DB_USER,
    password: process.env.CHAT_AI_DB_PASS,
    database: process.env.CHAT_AI_DB_NAME,
    port: Number(process.env.CHAT_AI_DB_PORT),
    waitForConnections: true,
});

export default contection;