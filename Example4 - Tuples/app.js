var person = {
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
var favouriteActivities;
favouriteActivities = ['Sports', 'Cooking'];
for (var hobby in person.hobbies) {
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
