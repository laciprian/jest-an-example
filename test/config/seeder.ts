import path from 'path';
import logger from '../../src/logger';
import { QueryInterface, Sequelize } from 'sequelize';
import { Application } from '../../src/declarations';
import { readdirSync, lstatSync } from 'fs';

const seedPathTest = path.join(__dirname, '../seeders/');

class Seeder {
  private readonly sequelizeClient: Sequelize;
  private readonly queryInterface: QueryInterface;

  constructor(client: Sequelize) {
    this.sequelizeClient = client;
    this.queryInterface = this.sequelizeClient.getQueryInterface();
  }

  async seedAll(folderPath: string) {
    const files = readdirSync(folderPath).filter((file) =>
      lstatSync(path.join(folderPath, file)).isFile()
    );

    files.map(async (file) => {
      await this.seed(path.join(folderPath, file)).catch((error) => {
        throw new Error(error.message);
      });
    });
  }

  async seed(filePath: string) {
    const seed = this.getModule(filePath);
    await seed.up(this.queryInterface, this.sequelizeClient);
  }

  private getModule = (filepath: string) => {
    try {
      /** handle modules transpiled by babel */
      const module = require(filepath);
      return module.default ? module.default : module;
    } catch (e: unknown) {
      throw e;
    }
  };
}

const setupDb = async (app: Application) => {
  app.setup();
  return app.get('sequelizeSync');
};

export default async function (app: Application): Promise<void> {
  await setupDb(app);

  const sequelizeClient = app.get('sequelizeClient');
  const seeder = new Seeder(sequelizeClient);

  try {
    await seeder.seedAll(seedPathTest);
  } catch (e: unknown) {
    logger.debug('Sequelize seeder error', e);
  }
}
