require('dotenv').config();

import Sequelize from 'sequelize';

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      DB_USER:'root',
      DB_NAME: 'ecommerce_db',
      DB_PW:'Bossman1982',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

export default sequelize;


