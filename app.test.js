import supertest from "supertest";
import app from "./app.js";

const request = supertest(app);

describe('Greetings Endpoints', () => {

  it('GET / should show Hello World!', async () => {
    return request.get('/').then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello World!');
    });
  });

  it('GET /:name should show personalized greeting', async () => {
    return request.get('/John').then((res) => {
        expect(res.statusCode).toBe(200);
      expect(res.text).toBe('Hello John!');
    });
  });

});

beforeAll(done => {
  done()
})

afterAll(done => {
  done()
})
