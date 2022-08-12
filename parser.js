// Class for row objects
class dataObject {
    // CSV column names
    seq;
    name_first;
    name_last;
    age;
    street;
    city;
    state;
    zip;
    dollar;
    pick;
    date;
    constructor(a,b,c,d,e,f,g,h,i,j,k) {
        this.seq = a;
        this.name_first = b;
        this.name_last = c;
        this.age = d;
        this.street = e;
        this.city = f;
        this.state = g;
        this.zip = h;
        this.dollar = i;
        this.pick = j;
        this.date = k;
    }
}
const CSVtoArray = function(text) {
    // Courtesy of niry, at https://stackoverflow.com/a/41563966/17545237
    let p = '', row = [''], ret = [row], i = 0, r = 0, s = !0, l;
    for (l of text) {
        if ('"' === l) {
            if (s && l === p) row[i] += l;
            s = !s;
        } else if (',' === l && s) l = row[++i] = '';
        else if ('\n' === l && s) {
            if ('\r' === p) row[i] = row[i].slice(0, -1);
            row = ret[++r] = [l = '']; i = 0;
        } else row[i] += l;
        p = l;
    }
    return ret;
}
// Pull CSV text passed from PS caller
let dataString = process.argv[2];
// Parse into dataAray, an array of CSV lines;
// string[][]
let dataArray = CSVtoArray(dataString);
let objectArray = [];
// Create individual objects which represent each row; iterate
// from 1 and not 0 as 0 only contains headers; add each object
// to objectArray ()
for (let z = 1; z < dataArray.length; z++) {
    let a = dataArray[z][0];
    let b = dataArray[z][1];
    let c = dataArray[z][2];
    let d = dataArray[z][3];
    let e = dataArray[z][4];
    let f = dataArray[z][5];
    let g = dataArray[z][6];
    let h = dataArray[z][7];
    let i = dataArray[z][8];
    let j = dataArray[z][9];
    let k = dataArray[z][10];    
    let newObject = new dataObject(a,b,c,d,e,f,g,h,i,j,k);
    objectArray.push(newObject);
}
// Parse objectArray into a JSON string and pass the JSON
// string back to PS caller.
console.log(JSON.stringify(objectArray));