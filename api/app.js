const express = require('express');
const app = express();
const loginRouter = require('./routes/loginRouter.js')
const signupRouter = require('./routes/signupRouter.js')
require("dotenv").config();

const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);


app.listen(3000, (error) => {
    if (error) {
        throw error;
    }

    console.log("API server listening on port 3000")
})



app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).render(err);
})
