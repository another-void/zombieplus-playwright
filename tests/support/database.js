const { Pool } = require ('pg');

const DbConfig = {
    user: 'neondb_owner',
    host: 'ep-sparkling-fire-acsiwj9e-pooler.sa-east-1.aws.neon.tech',
    database: 'neondb',
    password: 'npg_DSuRz9iQ4YIo',
    port: 5432,
    ssl: { rejectUnauthorized: false }
}

export async function executeSQL(sqlScript){
    try{
        const pool = new Pool(DbConfig);
        const client = await pool.connect();
        const result = await client.query(sqlScript);
        console.log(result.rows);
    } catch(error){
        console.log('Erro ao executar SQL: ' + error);
    }
    
}