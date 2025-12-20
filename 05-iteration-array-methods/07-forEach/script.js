const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

socials.forEach((item, index, arr) => {
    console.log(item);
    console.log(index);
    console.log(arr);
});

function logSocials(social) {
    console.log(social);
}

socials.forEach(logSocials);

const socialObjs = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Facebook', url: 'https://twitter.com'},
    {name: 'LinkedIn', url: 'https://twitter.com'},
    {name: 'Instagram', url: 'https://twitter.com'},
];

socialObjs.forEach((item) => console.log(item));