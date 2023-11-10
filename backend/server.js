require('dotenv').config();
const cors = require('cors');
const express = require('express');
const moongoose = require('mongoose');
const app = express();

const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/user');


// midleware
app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

// routes
app.use('/api/tasks', taskRoutes);
app.use('/api/user', userRoutes);




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

