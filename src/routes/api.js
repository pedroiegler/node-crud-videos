import { VideosRepository } from '../repositories/videos.repository.js'

export function VideosAPI(server){
    const database = new VideosRepository()

    server.get('/videos', async (request) => {
        const search = request.query.search;

        return await database.list(search)
    })

    server.post('/videos', async (request, reply) => {
        const { title, description, duration } = request.body;

        await database.create({
            title: title,
            description: description,
            duration: duration,
        });

        return reply.status(201).send()
    })

    server.put('/videos/:id', async (request, reply) => {
        const { title, description, duration } = request.body;

        await database.update(request.params.id, {
            title: title,
            description: description,
            duration: duration,
        });

        return reply.status(204).send()
    })

    server.delete('/videos/:id', async (request, reply) => {
        await database.delete(request.params.id);

        return reply.status(204).send()
    })
}