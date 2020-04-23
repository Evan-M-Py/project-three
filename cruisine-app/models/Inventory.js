module.exports = function (sequelize, DataTypes) {
    const Inventory = sequelize.define("Inventory", {
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false
        }
    });

    Inventory.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Inventory.belongsTo(models.Truck, {
            foreignKey: "truck_id"
        });
    };

    return Inventory;
};
