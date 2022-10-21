module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define(
    "product",
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      desc: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      img: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return Product;
};
