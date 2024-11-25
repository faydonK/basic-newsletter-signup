const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Replace <username> and <password> with your MongoDB credentials
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/newsletter?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const subscriberSchema = new mongoose.Schema({
    email: String
});
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

app.use(express.json());
app.use(express.static('public'));

app.post('/subscribe', (req, res) => {
    const newSubscriber = new Subscriber({ email: req.body.email });
    newSubscriber.save((err) => {
        if (err) {
            res.status(500).send('Error saving subscription.');
        } else {
            res.status(200).send('Subscription successful!');
        }
    });
});

// Ensure the server listens on all network interfaces using '0.0.0.0'
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});
