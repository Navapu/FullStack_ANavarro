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