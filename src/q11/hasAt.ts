const text = process.argv[2];

if(!text){
  console.log('Invalid input');
  process.exit(1);
}
if(text.includes('@')){
  console.log('Has @');
}
else{
  console.log('No @');
}