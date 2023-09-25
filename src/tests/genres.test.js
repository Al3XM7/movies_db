const app = require('../app');  //importacion de app
const request = require('supertest')  //importacion de supertest

let id;

test("GET / genres must to return all genres",async () => {
    const res = await request(app).get('/genres');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});







test("POST / genres must create a new genre", async () => {
    const genre = {
        name: "Helson",
    }
    const res = await request(app).post('/genres').send(genre);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(genre.name)
});

test('PUT /genres/:id must update a genre', async () => {
    const genreUpdate = {
        name :"Michael",
        
    }
    const res = await request(app).put(`/genres/${id}`).send(genreUpdate);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(genreUpdate.name);
    
})


test('DELETE /genres/:id must erase a genre', async () => {
    const res = await request(app).delete(`/genres/${id}`);
    expect(res.status).toBe(204);
});