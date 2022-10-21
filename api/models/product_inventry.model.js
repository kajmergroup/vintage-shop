module.exports = (sequelize, Sequelize) => {
  const Inventory = sequelize.define(
    "product_inventory",
    {
      size: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return  Inventory;
};
