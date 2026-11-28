import 'dotenv/config'
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname,join } from 'node:path';
import { pool } from "./src/Config/db.js"


const __filename = fileURLToPath(import.meta.url);
const __dirname =dirname(__filename);
const SCHEMA_PATH =join(__dirname,'schema.sql');
export async function runSchema(){
    const sql =await readFile(SCHEMA_PATH,'utf8');
    const client =await pool.connect();

    try {
        await client.query('BEGIN')
        await client.query('sql')
        await client.query('COMMIT')
        console.log('Database schema applied successfully from schema.sql. ')
    } catch (err) {
        await client.query('ROLLBACK');
        console.error('Failed to apply database schema:',err);
        throw err
        
    }finally {
        client.release();
    }
}
runSchema()
  .catch((err)=>{
    console.error(err)
    process.exit(1)
  })
   .finally(()=>pool.end())
  