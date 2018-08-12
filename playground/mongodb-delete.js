// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db();

    // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    // db.collection('Users').deleteMany({name: 'Elliott'}).then((res) => console.log(res));

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5b7018f32c868b33a87514ba")}).then(res => console.log(res));
    client.close();
});

