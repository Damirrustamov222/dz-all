let user = {
    name: "Damir",
    age: 13,
    status: true,
    wifes: ["Malika", "Amina", "Jasmina", "Farzod","Samir"],
};

const passport =  {
    serries: "AC",
    number: 1244512,
    date: "2015-01-01",
    date_exp: "2025-01-01",
    localtion: {
        country: "Uzbekistan",
        city: "Samarkand",
        region: "Samarakand shaxar",
        zipcode: 140000 
    },
};


let newObj= Object.assign({},user, passport);
let keys =Object.keys(newObj);
let values = Object.values(newObj); 
let combo= keys.map((key, index) => [key, values[index]]);

let types = {
    string: [],
    number: [],
    boolean: [],
    object: []
};

combo.forEach(([key, value]) => {
    if (typeof value === "string") {
        types.string.push([key, value]);
    } else if (typeof value === "number") {
        types.number.push([key, value]);
    } else if (typeof value === "boolean") {
        types.boolean.push([key, value]);
    } else if (typeof value === "object") {
        types.object.push([key, value]);
    }
});

console.log(newObj, keys, values, combo, types);
