require('dotenv').config();

module.exports = {
    development: {
        "username": process.env.DEV_USER,
        "password": process.env.DEV_PASSWORD,
        "database": process.env.DEV_DATABASE,
        "host": process.env.DEV_HOST,
        "port": process.env.DEV_PORT,
        "dialect": "mysql"
    },
    test: {
        "username": process.env.TEST_PGUSER,
        "password": process.env.TEST_PGPASSWORD,
        "database": process.env.TEST_PGDATABASE,
        "host": process.env.TEST_PGHOST,
        "port": process.env.TEST_PGPORT,
        "dialect": "postgres"
    },
    production: {
        "username": process.env.PROD_PGUSER,
        "password": process.env.PROD_PGPASSWORD,
        "database": process.env.PROD_PGDATABASE,
        "host": process.env.PROD_PGHOST,
        "port": process.env.PROD_PGPORT,
        "dialect": "postgres"
    }
};