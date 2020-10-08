
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {                          //{} - typescript notation for OBJECT
  name: 'Ciaran',
  age: 40,
  hobbies: ['Sports', 'Cooking'],
  role: Role.READ_ONLY
};

if (person.role === Role.READ_ONLY) {
  console.log('is read only');
}

let loopCount = 1;
for (const roleAsNum in Role) {
  console.log(loopCount);
  loopCount++;
  console.log(roleAsNum);

}