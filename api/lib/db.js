const { Sequelize} = require('sequelize')
require("dotenv").config();





const sequelize = new Sequelize(process.env.dbName, process.env.dbUser,process.env.dbPassword,  {
  host: 'shop-postgres',
  port: process.env.dbPort,
  dialect: 'postgres'
});


const startDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


module.exports = {
  startDB
}