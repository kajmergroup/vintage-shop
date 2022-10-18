module.exports = {
  HOST: "shop-postgres-1",
  USER: "postgres",
  PASSWORD: "123",
  DB: "vintage_db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
