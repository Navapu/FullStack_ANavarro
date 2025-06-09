# Mongoose CRUD CheatSheet

## Read methods


```js
// Find multiple documents
Model.find();

// Find by ID
Model.findById(id);

// Find one that matches certain criteria
Model.findOne({ field: value, field2: value2 });

// Find multiple that match certain criteria
Model.find({ age: { $gt: 18 } });

```

## Create methods

```js
// Version 1: save()
const myUser = new User({
    name: 'Alejandro',
    email: 'alejandro@gmail.com'
});
myUser.save();

// Version 2: create()
Model.create({
    name: 'Alejandro',
    email: 'alejandro@gmail.com'
});

// Create multiple documents at once
Model.insertMany([
    {
        name: 'Alejandro',
        email: 'alejandro@gmail.com'
    },
    {
        name: 'user1',
        email: 'user1@gmail.com'
    },
    {
        name: 'user2',
        email: 'user2@gmail.com'
    }
]);
```

## Update methods
```js
// Update by ID and return the updated document
Model.findByIdAndUpdate(id, { field: value, field2: value2 }, { new: true });

// Update one document that matches a certain condition
Model.updateOne({ field: value }, { $set: { field: "newValue" } });

// Update multiple documents that match a certain condition
Model.updateMany({ field: value }, { $set: { field: "newValue" } });
```

## Delete methods
```js
// Delete by ID
Model.findByIdAndDelete(id);

// Delete one document that matches a certain condition
Model.deleteOne({ field: value });

// Delete multiple documents that match a certain condition
Model.deleteMany({ field: value });
```

## Moongose advanced

## Common Operators in Filters

```js
// Greater than 18 ($gt - Greater Than)
Model.find({ age: { $gt: 18 } });

// Update all items that do not have the 'age' field
Model.updateMany({ age: { $exists: false } }, { $set: { age: 17 } });

/*
$eq: equal to
$ne: not equal to
$gt: greater than
$gte: greater than or equal to
$lt: less than
$lte: less than or equal to
$in: value is in the array
$nin: value is not in the array
$and: logical AND
$or: logical OR
*/

// Advanced queries

Model.find({ age: { $in: [25, 30, 35] } });
Model.find({ age: { $nin: [25, 30, 35] } });

// All conditions must be met
Model.find({
    $and: [
        { age: { $gt: 21 } },
        { name: 'Alejandro' }
    ]
});

// At least one condition must be met
Model.find({
    $or: [
        { age: { $gt: 21 } },
        { name: 'Alejandro' }
    ]
});
```

## Useful Options

```js
// For updates
{ new: true }      // Returns the updated document
{ upsert: true }   // Updates the document, or inserts it if it doesn't exist

// For queries
.select('field1 field2')   // Select specific fields to return
.limit(10)                 // Limit the number of results
.skip(10)                  // Skip a specific number of results
.sort({ field1: 1 })       // Sort results (1 ascending, -1 descending)

// Example
Model.find().select('name age').limit(10).skip(5).sort({ age: -1 });
```

# Relaciones entre modelos

### One-to-Many

A document can be related to multiple documents from another collection.
Example:
- A user can have many products []
- A product can have a single owner

```js

// Product model
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, options);
export const Product = mongoose.model('Product', productSchema);

// User model
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    // Array of Product IDs
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
}, options);
export const User = mongoose.model('User', userSchema);
```

## Using populate() in Queries

The populate() method lets you replace referenced ObjectIds with actual document data.
```js
// Populate a single reference
const products = await Product.find().populate("owner");
```