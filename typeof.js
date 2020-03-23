function getText(text) {
    let mas = text.trim().split('.');
    return mas[mas.length-1];
}

function main() {
   let rez= getText("stuff.js");
   console.log(rez);
}

main();