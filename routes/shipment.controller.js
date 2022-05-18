import express from "express";
import shipmentServices from "./shipment.services.js";

const router= express.Router()
const app = express()

router.post('/',async(req,res,next)=>{
    try{
        res.send(await shipmentServices.createShipment(req.body))
    } catch(error){
        next(error)
    }
})

router.patch('/:id',async(req,res,next)=>{
    try{res.send(await shipmentServices.updateStatus(
        req.body.status
     )  
    )
}catch(error){
        next(error)
    }

})

export default router