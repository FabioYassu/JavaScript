let valores = [1,2,9,7,5]

console.log(valores)
console.log('')
console.log('//Percurso para exibição')

for (let pos = 0; pos < valores.length; pos++) {    
    console.log(`A posição ${pos} tem como valor ${valores[pos]}`)
}

console.log('')
console.log('//Percurso utilizando IN')
for (let pos in valores) {    
    console.log(`A posição ${pos} tem como valor ${valores[pos]}`)
}

console.log('')
console.log('//Busca de valores indexOf')
console.log(`Valor 7 esta na posição: ${valores.indexOf(7)}`)
console.log(`Valor 10 não encontrado: ${valores.indexOf(100)} `)

console.log('')
console.log('//Organizando de Forma Crescente')
console.log(`O Vetor crescente é: ${valores.sort()}`)