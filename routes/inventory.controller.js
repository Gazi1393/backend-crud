import express from 'express'
import inventoryServices from './inventory.services.js'

const router = express.Router()
const app = express()


router.get('/', async(req,res,next)=>{
    try{
        res.send(await inventoryServices.getAllItems())
    }catch (error){
        next(error)
    }
}
)

router.post('/item', async(req,res,next)=>{
 try{
     res.send(await inventoryServices.CreateItem(req.body))
 }catch (error){
     next(error)
 }
})

router.patch('/:id', async(req,res,next)=>{
    try{
        res.send(await inventoryServices.UpdateItem(
            req.body.ItemName,
            req.body.Manufacturer,
            req.body.CostPerItem,
            req.body.StockQuantity
        ))
    }catch(error){
        next(error)
    }
})

router.delete('/:id', async(req,res,next)=>{
    try{
        const item = await inventoryServices.DeleteItem(req.params.id)
    if (item==null){
        return 'No such item in database'
    }
    return res.send('Item has been removed')
    }catch(error){
        next(error)
    }
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Error found!')
})

export default router