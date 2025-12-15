const color = process.argv[2];
if(!color){
    console.log('Unknown');
    process.exit(1);
}
switch(color.toLowerCase()){
    case 'red':
        console.log('Stop');
        process.exit(0);
    case 'yellow':
        console.log('Caution');
        process.exit(0);
    case 'green':
        console.log('Go');
        process.exit(0);
    default:
        console.log('Unknown');
}