import { DataTypes } from 'sequelize'

export default (sequelize)=>{
    const Inventory = sequelize.define('inventory',{
        ItemNumber :DataTypes.INTEGER,
        ItemName : DataTypes.STRING,
        Manufacturer: DataTypes.STRING,
        CostPerItem: DataTypes.DOUBLE,
        StockQuantity: DataTypes.INTEGER
     })
    
     return Inventory
}