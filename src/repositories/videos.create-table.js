import { sql } from '../config/db.js'

sql`
    CREATE TABLE videos (
        id          SERIAL PRIMARY KEY,
        title       TEXT,
        description TEXT,
        duration    INTEGER
    );
`.then(() => {
    console.log('Table was created!')
});