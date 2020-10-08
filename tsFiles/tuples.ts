const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string]      // define a tuple this way
} = {                          //{} - typescript notation for OBJECT
  name: 'Ciaran',
  age: 40,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

// TUPLES
person.role.push('admin');
person.role[1] = '10';
person.role = [0, 'admin'];

// let favouriteActivities: any[];
// favouriteActivities = ['Sports', 1];

let favouriteActivities: string[];
favouriteActivities = ['Sports', 'Cooking'];

for (const hobby in person.hobbies) {
  console.log(hobby.toUpperCase);
  // console.log(hobby.map); <<<== works in JavaScript (wrong here)

}

console.log(person.name);
console.log(person.age);

// CORE TYPES
// number
// string
// boolean
// object
// Array
// Tuple

