const app = require('../app');  //importacion de app
const request = require('supertest');  //importacion de supertest
const Directors = require('../models/Directors');
const Actors = require('../models/Actors');
const Genres = require('../models/Genres');
require('../models/index')
let id;

test("GET / movies must to return all movies",async () => {
    const res = await request(app).get('/movies');
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
});



test("POST / movies must create a new movie", async () => {
    const movie = {
        name: 'Helson',
        image: 'image.png',
        synopsis: 'lorem ipsum dolor sit amet, consectetur',
        realeseYear: 2000
    }
    const res = await request(app).post('/movies').send(movie);
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe(movie.name)
});

test('PUT /movies/:id must update a movie', async () => {
    const movieUpdate = {
        name:"Titanic"
        
    }
    const res = await request(app).put(`/movies/${id}`).send(movieUpdate);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(movieUpdate.name);
    
});

test('POST / movies/:id/directors', async () => { 
    const director = await Directors.create({
        firstName: "Helson",
        lastName : "Jhonsen",
        nationality:'hungray',
        birthday: "1995-10-10",
        image:'image.png'
    });
    const res = await request(app).post(`/movies/${id}/directors`).send([director.id]);
    await director.destroy();
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
});



test('POST / movies/:id/actors', async () => { 
    const actor = await Actors.create({
        firtsName: "Helson",
        lastName : "Jhonsen",
        nationality:'hungray',
        birthday: "1995-10-10",
        image:'image.png'
    });
    const res = await request(app).post(`/movies/${id}/actors`).send([actor.id]); 
    await actor.destroy();
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
});

test('POST / movies/:id/genres', async () => { 
    const genre = await Genres.create({
        name: "Helson",
        
    });
    const res = await request(app).post(`/movies/${id}/genres`).send([genre.id]); 
    await genre.destroy();
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
});




test('DELETE /movies/:id must erase a movie', async () => {
    const res = await request(app).delete(`/movies/${id}`);
    expect(res.status).toBe(204);
});