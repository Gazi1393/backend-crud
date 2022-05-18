import { DataTypes } from "sequelize";

export default (sequelize)=>{
    const shipment= sequelize.define('shipment',{
        ShipmentIS: DataTypes.INTEGER,
        ItemNumber: DataTypes.INTEGER,
        TrackingNumber:DataTypes.INTEGER,
        Date: DataTypes.DATE,
        Status: DataTypes.BOOLEAN

    })
    shipment.hasMany(Inventory,{
        foreignKey:'ItemNumber'
    });
    Inventory.belongsTo(shipment)
    return shipment
}