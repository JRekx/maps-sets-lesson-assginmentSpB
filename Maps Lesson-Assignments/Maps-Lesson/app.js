const myMap = new Map();
myMap.set(7, `seven`);
myMap.set(`7`, `seven string`);
myMap.set([], `empy array!`);//will not take an empty array

const empty = []//this is how you map and empty array
myMap.set(empty, `empy array!`);
myMap.set(true,`TRUEE!`);


myMap.get(7);

const add = (x,y) => x + y;
const mult = (x,y) => x * y;

const funcCalls = newMap2();
funcCalls.set(add,0);
funcCalls.set(mult,0);

//using functions as keys 

funcCalls.set(add,1);
funcCalls.set(mult,9);

const bandData = [

[3,`3 Doors Down`],
[`three`,`Three Dog Night`],
[`nine`,`Nine Inch Nails`],
[182,`Blink 182`],
[41,`Sum 41`]

];
const bandMap = new Map(bandData);   //syntax used to make a map /// the spread method ... will also give you the bandnames

bandMap.set(`twenty`,`MatchBox Twenty`).set(2,`U2`); //Able to add new arrays using set 

//--map.delete() and --.map.Clear will delete the whole map or the classifed map
//--map.keys() and --map.values() will list the keys or the values

//looping with maps.

//--map.size will tell us how many obj are in the map


bandMap.forEach((val,key) =>  {
    console.log(key + `=>` + val);
});

for(let [key,value] of bandMap){
    console.log(key, `=`,value);
}

//Sets 

const bannedHashTags = new Set([`noFilter`,`duckface`,`yolo`,`suck it`]);

//adding to a set

bannedHashTags.add(`bestLife`).add(`fml`);

//set can also delete and clear just like maps

function filterHashTags(tags){
    const bannedHashTags = new Set([`nofilter`,
    `duckface`,
    `yolo`,
    `suck it`
]);
return tags.filter((tags) => !bannedHashTags.has(tag));
}

const susanTags = [`happmonday`,`yolo`,`winning`,`sunset`];

const ages = [33,53,25,64,32,64,12,51,14,74,52];
[...new Set(ages)] //removes dupilcates from an array