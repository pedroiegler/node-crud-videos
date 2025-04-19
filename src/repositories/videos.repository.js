import { sql } from '../config/db.js'

export class VideosRepository {
    async list(search) {
        if (search)
            return await sql`SELECT * FROM videos WHERE title ILIKE ${'%' + search + '%'}`;

        return await sql`SELECT * FROM videos`
    }

    async create(video) {
        const { title, description, duration } = video;

        await sql`INSERT INTO videos (title, description, duration) VALUES (${title}, ${description}, ${duration})`;
    }

    async update(id, video) {
        const { title, description, duration } = video;

        await sql`UPDATE videos SET title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`;
    }

    async delete(id) {
        await sql`DELETE FROM videos WHERE id = ${id}`;
    }
}