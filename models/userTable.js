module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('UserTable', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    voiceStrength: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    voicePitch: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    speakingPace: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    recorder: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
  });
  return UserTable;
};
