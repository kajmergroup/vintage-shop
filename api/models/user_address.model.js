module.exports = (sequelize, Sequelize) => {
  const User_address = sequelize.define(
    "user_address",
    {
      user_id: {
        type: Sequelize.INTEGER,
      },
      address_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      town: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address_line: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      postal_code: {
        type: Sequelize.INTEGER,
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
    }
  );
  return User_address;
};
