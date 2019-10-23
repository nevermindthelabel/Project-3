const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  let Users = sequelize.define(
    'Users',
    {
      // Giving the Username model a name of type STRING
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      // email required for resetting a password and for the optional carpool feature
      email: {
        type: DataTypes.STRING
        // allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // second password for confirmation
      password2: {
        type: DataTypes.STRING
        // allowNull: false
      },
      // optional zip code for user carpools
      zipCode: {
        type: DataTypes.STRING
      }
    },
    {
      hooks: {
        beforeCreate: user => {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
        }
      }
    }
  );

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  Users.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Users.hasMany(models.Reports);
  };
  return Users;
};
