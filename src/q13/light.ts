const color = process.argv[2];
if(!color){
    console.log('Unknown');
    process.exit(1);
}
switch(color.toLowerCase()){
    case 'red':
        console.log('Stop');
        process.exit(1);
    case 'yellow':
        console.log('Caution');
        process.exit(1);
    case 'green':
        console.log('Go');
        process.exit(1);
    default:
        console.log('Unknown');
}