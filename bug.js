```javascript
//Incorrect usage of $inc operator in MongoDB update query
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{quantity:1}});
//The above query will increment the quantity field by 1 only if quantity field already exists, if not it won't create it and increment.
```