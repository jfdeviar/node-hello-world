import supertest from "supertest";
import app from "./app.js";

const request = supertest(app);

describe('Greetings Endpoints', () => {

  it('GET / should show Hello World!', async () => {
    return request.get('/').then((res) => {
        expect(res.statusCode).toBe(200);
    });
  });

});

beforeAll(done => {
  done()
})

afterAll(done => {
  done()
})
