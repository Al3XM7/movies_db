const app = require('../app');  //importacion de app
const request = require('supertest')  //importacion de supertest

let id;

test("GET / directors must to return all directors",async () => {
    const res = await request(app).get('/directors');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});

test("POST / directors must create a new director", async () => {
    const director = {
        firstName: "Helson",
        lastName : "Jhonsen",
        nationality:'hungray',
        birthday: "1995-10-10",
        image:'image.png'
    }
    const res = await request(app).post('/directors').send(director);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.firstName).toBe(director.firstName)
});

test('PUT /directors/:id must update a director', async () => {
    const directorUpdate = {
        firstName :"Michael",
        
    }
    const res = await request(app).put(`/directors/${id}`).send(directorUpdate);
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(directorUpdate.firstName);
    
})


test('DELETE /directors/:id must erase a director', async () => {
    const res = await request(app).delete(`/directors/${id}`);
    expect(res.status).toBe(204);
});