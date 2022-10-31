function myRandom(min, max) {
    let randomNumber = Math.random() * (max + 1 - min) + min  
    return Math.floor(randomNumber)
    
}
let randomAction = myRandom(1, 4)
let users = {
    1:'+',
    2:'-',
    3:'*',
    4:'/',
}

let num1 = myRandom(1, 100)
let num2 = myRandom(1, 100)
let fool = `${num1} ${users[randomAction]} ${num2}`

let pr = +prompt(`${fool}`)


let answer = pr == `${eval(fool)}` ? `Javob to'g'ri` : `javobingiz noto'g'ri. To'g'ri javob: ${eval(fool)}`
alert(answer);
