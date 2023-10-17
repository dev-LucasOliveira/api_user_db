const express = require('express')
const userRoute = require('./src/routes/user.route');
const clientRoute = require('./src/routes/client.route');
const connectDatabase = require("./src/database/db");
const app = express();

connectDatabase();
app.use(express.json());

// routes
app.use("/user", userRoute)
app.use("/client", clientRoute)

const port = 3000;

app.listen(port, () => console.log(`\nServer listening to port ${port}`));