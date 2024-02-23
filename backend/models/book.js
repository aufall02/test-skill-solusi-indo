'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    nama_buku: DataTypes.STRING,
    kategori_buku: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    ISBN: DataTypes.STRING,
    ISSN: DataTypes.STRING,
    pembuat: DataTypes.STRING,
    tahun_pembuatan: DataTypes.INTEGER,
    harga: DataTypes.INTEGER,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};