import {models} from '../index.js';


const getAllShipment= async()=>{
    return await models.shipment.findAll()
    }

const createShipment= async()=>{
    return await models.shipment.create({
        ShipmentID: shipment.ShipmentID,
        ItemNumber: shipment.ItemNumber,
        TrackingNumber: shipment.TrackingNumber,
        Date: shipment.Date,
        Status: shipment.Status
    })
}

const updateStatus= async(Status) =>{
    return await models.shipment.update({
        Status: Status
    },
    {
        where:{
            ShipmentID: ShipmentID
        }
    }
    )
    
}
export default {getAllShipment, createShipment,updateStatus}