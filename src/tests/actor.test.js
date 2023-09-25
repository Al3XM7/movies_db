const app = require('../app');  //importacion de app
const request = require('supertest')  //importacion de supertest

let id;

test("GET / actors must to return all actors",async () => {
    const res = await request(app).get('/actors');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test("POST / actors must create a new actor", async () => {
    const actor = {
        firtsName: "Helson",
        lastName : "Jhonsen",
        nationality:'hungray',
        birthday: "1995-10-10",
        image:'image.png'
    }
    const res = await request(app).post('/actors').send(actor);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(actor.name)
});

test('PUT /actors/:id must update a actor', async () => {
    const actorUpdate = {
        firstName :"Michael",
        nationality :"Germany"
    }
    const res = await request(app).put(`/actors/${id}`).send(actorUpdate);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(actorUpdate.name);
    expect(res.body.nationality).toBe(actorUpdate.nationality);
});







test('DELETE /actors/:id must erase a actor', async () => {
    const res = await request(app).delete(`/actors/${id}`);
    expect(res.status).toBe(204);
  
});