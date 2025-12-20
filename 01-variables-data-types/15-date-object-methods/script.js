let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth();
x = d.getMonth() + 1;

x = d.getDay(); // num of the day

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', {month: 'long'}).format(d);

x = d.toLocaleDateString('default', {month: 'short'});

x = d.toLocaleDateString('default', {
    weekday: 'long',
    year: 'numeric',
    month:'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York'
})

console.log(x);