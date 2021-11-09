const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://chikardo:4455322@cluster0.ygczp.mongodb.net/angular-auth?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));