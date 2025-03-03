type Person = {
    firstName : string,
    lastName : string,
}

const getFullName = (person : Person ) : string => {
    return `${person.firstName} ${person.lastName}`
}

console.log(getFullName({firstName : "John", lastName : "Doe"}))

export {}