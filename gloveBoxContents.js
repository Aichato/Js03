const myStorage = {
    car: {
        inside: {
            'glove box': 'maps',
            'passenger seat': 'crumbs',
        },
        outside: {
            trunk: 'jack',
        },
    },
};
const gloveBoxContents = function (myStorage){
      console.log(myStorage.car["inside"][['glove box']]);
 }
gloveBoxContents(myStorage);