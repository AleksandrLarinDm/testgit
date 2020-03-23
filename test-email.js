main();

function main(){
        console.log(match('larin@gmail.com'));
        console.log(match('sanya@lr.su'));
}

function match(text){
    let regExp = new RegExp(/(\w+)@(gmail|mail|ukr)(.com|.ua|.net)/);
    return regExp.test(text);
}