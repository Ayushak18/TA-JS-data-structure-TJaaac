```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

To add this image here use ![Memory Representation](./Storage.jpeg)

2. Answer the following with reason:

- `user == newUser;` // True  - both are pointing to the same address.
- `user === newUser;` // True  - both are pointing to the same address.
- `user.name === newUser.name;` // True  - both are pointing to the same address.
- `user.name == newUser.name;` // True  - both are pointing to the same address.
- `user.sibling == newUser.sibling;` // True  - both are pointing to the same address.
- `user.sibling === newUser.sibling;`// True  - both are pointing to the same address.
- `user.sibling == allBrothers;` // False - Both are pointing to the different datas.
- `user.sibling === allBrothers;` // False - Both are pointing to the different datas.
- `brothersCopy === allBrothers;`// False - Both are pointing to the different datas.
- `brothersCopy == allBrothers;` //False - Both are pointing to the different datas.
- `brothersCopy == user.sibling;` // True  - both are pointing to the same address.
- `brothersCopy === user.sibling;`// True  - both are pointing to the same address.
- `brothersCopy[0] === user.sibling[0];`// True  - both are pointing to the same address.
- `brothersCopy[1] === user.sibling[1];`// True  - both are pointing to the same address.
- `user.sibling[1] === newUser.sibling[1];`// True  - both are pointing to the same address.
