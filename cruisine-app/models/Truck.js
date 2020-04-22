module.exports = function (sequelize, DataTypes) {
    const Truck = sequelize.define("Truck", {
        truck_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Truck.associate = function (models) {
        // We're saying that a Trucks should belong to an Author
        // A Trucks can't be created without an Author due to the foreign key constraint
        Truck.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Truck;
};
