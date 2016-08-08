
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';
var collection = 'user'

return function mongoUpsert(context, callback) {

    MongoClient.connect(url, function(err, db) {
        if (err) {
            return callback(err);
        }
        console.log("Connected correctly to server.");
        
        db.collection(collection)
        .findOne({email: context.email}, (err, result) => {
            if(err) return callback(err);

            console.log(result);

            db.close();
            callback(null, result);
        });
    });
}
