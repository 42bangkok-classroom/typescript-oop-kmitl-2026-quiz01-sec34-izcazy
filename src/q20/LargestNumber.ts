const args = process.argv.slice(2);
let max: number | null = null
for(const item of args){
    const num = Number(item);

    if(!isNaN(num) && item.trim() !== ""){
        if(max == null || num > max){
            max = num;
        }
    }
}
if(max != null){
    console.log(`Largest: ${String(max)}`);
}