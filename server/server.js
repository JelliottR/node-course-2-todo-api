const express = require('express'), bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo'), {User} = require('./models/user');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    new Todo(req.body).save().then((doc) => {
        res.send(doc);
    }, e => res.status(400).send(e));
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, e => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(404).send();
    }
    Todo.findById(req.params.id).then((todo) => {
        if (!todo) return res.status(404).send();
        res.send({todo});
    }, e => res.status(400).send());
});

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndDelete(id).then(todo => {
        if (!todo) return res.status(404).send();
        res.send({todo})
    }, e => res.status(400).send());
});

app.listen(port, console.log(`Started on port ${port}`));

module.exports = {
    app
};