
function greeting(){
    let userName = 'Kennedy';

    function displayUserName(){
        return `Hola ${userName}`;
    }
    return displayUserName();
}

const g = greeting();
console.log(g);
console.log(g());