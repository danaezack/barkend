/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'database-1.c50aguo6s8fu.us-west-1.rds.amazonaws.com',
      database: 'postgres',
      user:     'postgres',
      password: 'barkend123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './'
    },
  },
};
