import request from 'supertest';
import app from '../src/app';

const baseUrl = 'http://localhost:3001';
describe('Index test suite', () => {
  it('gets index endpoint', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ name: 'Jest a test', version: 'v1.15.0' });
  });
});
