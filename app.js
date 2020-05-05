const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const fallBackRoutes = require('./routes/fallBack')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.use(adminRoutes)
app.use(shopRoutes)

app.use(fallBackRoutes)


// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000)