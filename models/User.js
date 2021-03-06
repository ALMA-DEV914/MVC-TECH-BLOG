const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
    // check user password with bcrypt
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

//Create user model
User.init(
        {
          // define an id column
          id: {
            // use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the Primary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
          },
          // define a username column
          username: {
            type: DataTypes.STRING,
            allowNull: false
          },
          // define an email column
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            // there cannot be any duplicate email values in this table
            unique: true,
            // if allowNull is set to false, we can run our data through validators before creating the table data
            validate: {
              isEmail: true
            }
          },
          // define a password column
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              // this means the password must be at least four characters long
              len: [8]
            }
        },
    },
        {
        
        hooks: {
            //beforeCreate hook is used to work with data before a new instance is created
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
                //encrypt password user passed in
                newUserData.password = await bcrypt.hash(
                    newUserData.password,
                    10);
                //return the new user data
                return newUserData;
            },
        },
    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'user'
    }
);

module.exports = User;
