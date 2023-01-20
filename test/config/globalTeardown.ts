import app from '../../src/app';

export default async () => {
  app.get('sequelizeClient').close();
};
