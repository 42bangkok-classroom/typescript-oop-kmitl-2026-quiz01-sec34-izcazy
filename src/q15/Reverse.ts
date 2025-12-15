const text: string = process.argv[2];
if(!text){
    console.log('Please provide a text.');
    process.exit(1);
}
let reverse: string = ""
for(let i = text.length - 1; i >= 0; i-- ){
    reverse += text[i];
}
console.log(reverse);