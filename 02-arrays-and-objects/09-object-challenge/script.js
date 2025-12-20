const library = [
    {
        title:'Cumbres Borrascosas',
        author:'Autor 1',
        status: {
            own:true,
            reading: false,
            read: false
        }
    },
    {
        title:'Las escaleras',
        author:'Autor 2',
        status: {
            own:true,
            reading: false,
            read: false
        }
    },
    {
        title:'Mirando por la ventana',
        author:'Autor 3',
        status: {
            own:true,
            reading: false,
            read: false
        }
    }
];

library.map((item) => {
    item.status.read = true;
}) ;

const {title: firstBook} = library[0];
console.log(firstBook);

const JSONlibrary = JSON.stringify(library);
console.log(JSONlibrary);