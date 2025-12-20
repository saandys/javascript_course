const d = new Date(6, 30, 2022, 6, 0, 0);
const hour = d.getHours();

if(hour < 12){
    console.log('Good morning');
}else if(hour < 18){
    console.log('Good afternoon');
}else{
    console.log('Good night');
}

// Nested if

if(hour < 12){
    console.log('Good morning');

    if(hour === 6){
        console.log('Wake Up!!');
    }
}else if(hour < 18){
    console.log('Good afternoon');
}else{
    console.log('Good night');

    if(hour >= 20){
        console.log('zzzzzzz');
    }
}

if(hour >= 5 && hour < 15){
    console.log('It is work time!');
}

if(hour === 6 || hour === 20){
    console.log('Brush your teeth!');
}