require('dotenv').config();
const express = require('express');
const moongoose = require('mongoose');
const app = express();

const taskRoutes = require('./routes/taskRoutes');


// midleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

// routes
app.use('/api/tasks', taskRoutes);






// connect to mongodb
moongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, function () {
            console.log(`Connected to DB and Server is running on Port: ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log(error)
    })

