const wrapInArray = <T>(arg : T) : T[] => {
    return [arg];
}

console.log(wrapInArray<number>(5))