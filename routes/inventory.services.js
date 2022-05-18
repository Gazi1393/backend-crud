import { models } from '../index.js'


const getAllItems= async() =>{
    return await models.Inventory.findAll()
}
const CreateItem= async(inventory)=>{

    return await models.Inventory.create({
        ItemNumber: inventory.ItemNumber,
        ItemName:inventory.ItemName,
        Manufacturer:inventory.Manufacturer,
        CostPerItem:inventory.CostPerItem,
        StockQuantity:inventory.StockQuantity

    })
}

const UpdateItem= async( ItemName, Manufacturer, CostPerItem,StockQuantity)=>{
    const newItem= await models.Inventory.update(
        {
            ItemName: ItemName,
            Manufacturer: Manufacturer,
            CostPerItem: CostPerItem,
            StockQuantity: StockQuantity
        },
        {
        where: {
            ItemNumber:ItemNUmber
        }
    }
        
    )
    return newItem

}

const DeleteItem = async(ItemNumber) =>{
    const item = await models.Inventory.destroy(
        {
            where:{
                ItemNumber: ItemNumber
            }
        }
    )
    return item
}

export default{ getAllItems,CreateItem,UpdateItem,DeleteItem }