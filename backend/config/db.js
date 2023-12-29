const mongoose = require('mongoose')


mongoose.connect("mongodb+srv://rolesonict:stumperball@cluster0.ndqpz8q.mongodb.net/?retryWrites=true&w=majority", {
    dbName: 'Icttest'
})
    .then(() => {
        console.log('MongoDB connected Successfully')
    })
    .catch(error => {
        console.log('MongoDB coneection is not available' + error)
    })