const Sequelize = require("sequelize");
const database = require("./database/index");

const Lugar = database.define(
  "lugares",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    lugar: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    frase: Sequelize.STRING,
    descricao: Sequelize.STRING,
    estrutura: Sequelize.STRING,
    atividades: Sequelize.STRING,
    imagem: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

const initTable = async () => {
  await Lugar.sync();
};

module.exports = Lugar;
