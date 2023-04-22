function soma(n1=0 ,n2=0 ) {
    return n1 + n2
}

let res = soma(8)
console.log(res)
console.log(soma(2, 10))

console.log('')
console.log('//Atribuindo uma function em variavel')
let v = function(x) {
        return x*2
}

console.log(v(7))

console.log('')
console.log('//Fatorial')
function fatorial(m) {
    let fat = 1
    for(let c = m; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

console.log('')
console.log('//Fatorial em Recursividade')
//5! = 5x4x3x2x1 = 120
//5! = 5x4! = 120   || 4x3 = 12.2 = 24.5 = 120
 
function fator(b) {
    if(b == 1) {
        return 1
    } else {
        return b * fator(b-1)
    }
}

console.log(fator(5))