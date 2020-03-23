
function duplicate(arr) {
    let res = [];
    for (let item of arr){
        if(!res.includes(item)){
            res.push(item);
        }
    }
    return res;
}

function main() {
    let arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
    let mas=  duplicate(arr);
    console.log(mas);
}
main();