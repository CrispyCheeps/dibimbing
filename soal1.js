var getFullName = function (person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
};
console.log(getFullName({ firstName: "John", lastName: "Doe" }));
