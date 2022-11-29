//Object destructuring 1
numPlanets = 8
yearNeptuneDiscovered = 1846

//Object destructuring 2
//{yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//Object destructuring 3
//Your name is Alejandro and you like purple
//Your name is Melissa and you like green
//Your name is undefined and you like green

//Array destructuring 1
console.log(first); Maya
console.log(second); Marisa
console.log(third); ChannelSplitterNode

//Array destructuring 2
console.log(raindrops); "Raindrops on roses"
console.log(whiskers); "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//Array destructuring 3
console.log(numbers); [10,30,20]

//ES2015 Object Destructuring
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const {a, b} = obj.numbers

//ES2015 One-Line Array Swap with Destructuring
[arr[0], arr[1]] = [arr[1], arr[0]]

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})