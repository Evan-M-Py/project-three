module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 11]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            },
            unique: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_pass: {
            type: DataTypes.STRING,
            allowNull: false,
            // Add in bcrypt here to get password hashing
        }
    });

    User.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.Truck, {
            foreignKey: "truck_id"
        });
    };

    return User;
};