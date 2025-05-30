//regular function
function isPairorOdd(x){
    if (x % 2 == 0){
        return "Is pair"
    }else{
        return "Is odd"
    }
}

console.log(isPairorOdd(4))

//arrow function
const arrow = (x) => {
    if (x % 2 == 0){
        return "Is pair"
    }else{
        return "Is odd"
    }
}

console.log(arrow(3))