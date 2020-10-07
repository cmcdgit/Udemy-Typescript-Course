var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Ciaran',
    age: 40,
    hobbies: ['Sports', 'Cooking'],
    role: Role.READ_ONLY
};
if (person.role === Role.READ_ONLY) {
    console.log('is read only');
}
var loopCount = 1;
for (var roleAsNum in Role) {
    console.log(loopCount);
    loopCount++;
    console.log(roleAsNum);
}
