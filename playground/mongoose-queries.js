const {ObjectId} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

const id = '5b77112d7d0d87151cea8a3d1';

// if (!ObjectId.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) return console.log('ID not found.');
//     console.log(todo);
// }).catch(e => console.log(e));

User.findById('5b7334f08c5e6333c059fca1').then((user) => {
    if (!user) return console.log('User not found.') ;
    console.log(user);
}, (e) => console.log(e));