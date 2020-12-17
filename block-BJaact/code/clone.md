1. Write the output with reason

```js
const person = {
  firstName: "John",
  lastName: "Doe",
};

let person2 = person;

person.firstName = "Arya";

console.log(person2.firstName); // 'Arya' , due to copying
console.log(person.firstName); //  'Arya' , due to copying
console.log(person.lastName); // 'Doe' , due to copying
console.log(person == person2); // True , having same address
console.log(person === person2); // True , having same address
console.log(person.lastName === person2.lastName); // True , having same address
```

2. Write the output with reason:

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

let personTwo = { ...person };

person.firstName = "Arya";
person.city = "Navada";

console.log(personTwo.firstName); // 'John'
console.log(person.firstName); // 'Arya'
console.log(personTwo.lastName); // 'Doe'
console.log(person.firstName === personTwo.firstName); // false , due to cloning
console.log(person == personTwo); // false , have different address
console.log(person === personTwo); // false , have different address
console.log(person.address === personTwo.address); // true due to the shallow cloning
console.log(person.address == personTwo.address); // true due to the shallow cloning
console.log(personTwo.address.city); // 'San Jose' , due to having same address
console.log(person.address.city); // 'San Jose'
console.log(person.address.city == personTwo.address.city); // True due to having same address
```

3. Write the output with reason:

```js
let person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

let personTwo = { ...person, address: { ...person.address } };

person.firstName = "Arya";
person.city = "Navada";

console.log(personTwo.firstName); // 'John'
console.log(person.firstName); // 'Arya'
console.log(personTwo.lastName); // 'Doe'
console.log(person.firstName === personTwo.firstName); // false due to different addresses
console.log(person == personTwo); // false due to different addresses
console.log(person === personTwo); // false due to different addresses
console.log(person.address === personTwo.address); // false due to different addresses
console.log(person.address == personTwo.address); // false due to different addresses
console.log(personTwo.address.city); // 'San Jose' due to deep cloning
console.log(person.address.city); // 'San Jose'
console.log(person.address.city == personTwo.address.city); // True due to deep cloning
```

4. Clone the `blogs` variable into a new variable named `clonedBlogs`

```js
let blogs = [
  {
    id: 1,
    title: "Post #1",
    body: "My first blog post",
  },
  {
    id: 2,
    title: "Post #2",
    body: "My second blog post",
  },
  {
    id: 3,
    title: "Post #3",
    body: "My third blog post",
  },
];

// Your code goes here

let clonedBlogs = [{ ...blogs[0] }, { ...blogs[1] }, { ...blogs[2] }];
```

5. Clone the `question` variable into a new variable named `questionClone`

```js
var questions = [
  {
    prompt: "Why is the sky blue?",
    responses: [
      "Because the color blue was on sale at Wallmart",
      "Because blue is the prettiest color",
      "Because the air molecules difract blue light more than any other color",
    ],
  },
  {
    prompt: "Why are leaves usually green?",
    responses: [
      "So green caterpillars can hide better.",
      "Because leaves can more easily make energy with green light",
      "Because leaves absorb red and blue light so it's green that is reflected",
    ],
  },
];

// Your code goes here
let questionClone = [
  { ...questions[0], responses: [...questions[0].responses] },
  { ...questions[1], responses: [...questions[1].responses] },
];
```

6. Clone the `allBlogs` variable into a new variable named `allBlogsClone`

```js
var allBlogs = {
  id: 1,
  title: "Alamofire JSON Serialization",
  body: "All about serialization in Alamofire...",
  author: {
    id: 1,
    fullName: "Jeff Potter",
    username: "jpotts18",
  },
  comments: [
    {
      id: 1,
      body: "Thanks for the help Jeff, this saved me hours",
    },
    {
      id: 2,
      body: "Your welcome. I am happy to help!",
    },
  ],
};

// Your code goes here
let allBlogsClone = {
  ...allBlogs,
  author: { ...allBlogs.author },
  comments: [{ ...allBlogs.comments[0], ...allBlogs.comments[1] }],
};
```

7. Clone the `person` variable into a new variable named `clonedPerson`

```js
let person = [
  {
    input: {name: "Ryan",},
    output: { name: "Ryan" },
  },
  {
    input: { name: { first: "Ryan", last: "Haskell-Glatz" } },
    output: { firstName: "Ryan", lastName: "Haskell-Glatz" },
  },
  {
    input: { name: "Ryan", age: 24 },
    output: { name: "Ryan", age: 24 },
  },
  {
    input: {
      name: { first: "Ryan", last: "Haskell-Glatz" },
      birthday: { year: 1993, month: "Nov" },
    },
    output: {
      firstName: "Ryan",
      lastName: "Haskell-Glatz",
      birthdayYear: 1993,
      birthdayMonth: "Nov",
    },
  },
];

// Your code goes here
let clonedPerson = [
  {
    input : {...person[0].input},
    output  : {...person[0].output}
  },
  {
    input : { name :{...person[1].input.name}},
    output : {...person[1].output}
  },
  {
    input : {...person[2].input},
    output : {...person[2].output}
  },
  {
    input : {
      name : {...person[3].input.name},
      birthday : {...person[3].input.birthday}
    },
    output : {
      ...person[3].output
    }
  }
  ];
```

8. Write a function named `cloneObject` that accepts an object and returns the clone of the object

```js
function cloneObject(object) {
  // your code
  let clonedObject = JSON.parse(JSON.stringify(object));
  return clonedObject;
}

// Run the test below to check your function

let user = {
  name: "John",
  house: "Stark",
  sisters: ["Arya", "Sansa"],
};
let cloned = cloneObject(user);

let person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st",
    city: "San Jose",
    state: "CA",
    country: "USA",
  },
};

let clonedPerson = cloneObject(user);

console.log(
  `The user object is ${
    user == cloned ? `not clone` : `cloned successfully 😁👑`
  }`
);
console.log(
  `The person object is ${
    person == clonedPerson ? `not clone` : `cloned successfully 😁👑`
  }`
);
```
