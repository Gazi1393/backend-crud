# Shopify-backend challenge

## Goal
The goal of this application is to do inventory tracking for a logistics company. It is a scalable ExpressJS application that allows users to perform CRUD operations on Inventory list. Additionally, it also allows users to create Shipments from the Inventory list.
 
## Instructions
Create a REST API ExpressJS CRUD application that is connected to a MySQL database with the use of sequelize.
- run `npm init` on root folder
- packages to install : express, mysql2, sequelize
- run `npm start` or `npm devStart` to start the application.
## Endpoints
The application has following API endpoints:
- GET /inventory to fetch a list of all inventory items
- POST /inventory/item to add a new item to the list
- PATCH /inventory/:id to update an inventory item with :id
- DELETE /inventory/:id to delete an item with :id
- POST /shipment to create a new shipment
- PATCH /shipment/:id to update status of shipment with :id 


## Additional info
Used Postman to test the functionalities
.env.sample includes environment variables
