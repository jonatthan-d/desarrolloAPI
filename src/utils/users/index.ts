import { Connection } from "mysql2/typings/mysql/lib/Connection";

export class UserUtils {
    private database;

    constructor(db: Connection) {
        this.database =db;
    }

    async function getUsers(){
        const [rows, fields] = await this.database.query("SELECT * FROM users")
        return {
            rows,
            fields
        }
    }
        
    
}
