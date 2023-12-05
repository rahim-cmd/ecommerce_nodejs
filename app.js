const express = require('express');
const bodyParser = require('body-parser');
// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes')
const productRoutes = require('./src/routes/product.routes')
// create express app
const app=express();
// Setup server port
const port = process.env.PORT||3000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/',(req, res)=>{

    res.send('This is node with express');

});


// using as middleware
app.use('/api/v1/employees', employeeRoutes)
//using as middleware for product route
app.use('/api/v1/products', productRoutes)



// listen for requests
app.listen(port, () => {
    console.log(`app running good ${port}`)
  })