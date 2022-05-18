import sequelize from './sequelize.js';
import express from 'express';
import inventory from './routes/inventory.controller.js'
import shipment from './routes/shipment.controller.js'




const app = express();
const models = {
    Inventory: inventory(sequelize),
    Shipment : shipment(sequelize)
}
sequelize.sync ({force:true})

app.use(express.json())

app.use('/inventory', inventory)
app.use('/shipment', shipment)

const PORT = env.PORT||8080
const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

export {models,server}