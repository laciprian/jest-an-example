import request from 'supertest';
import app from '../src/app';

const baseUrl = 'http://localhost:3001';

describe('"users" routes', () => {
  it('check index route status', async () => {
    const response = await request(app).get('/users');

    expect(response.status).toBe(200);
  });

  // it('should return all users', async () => {
  //   const response = await request.get('/users');
  //
  //   expect(response.body).toEqual([]);
  // });

  // it('create user', async () => {
  //   const response = await request.post('/users', insertUserData);
  //
  //   expect(response.status).toBe(200);
  // });
});
