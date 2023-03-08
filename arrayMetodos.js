const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop()//ultimo elemento é apagado
console.log(pilotos)
pilotos.push('Lewis')
console.log(pilotos)
pilotos.shift()//primeiro elemento é apagado
console.log(pilotos)
pilotos.unshift('verstapen')
console.log(pilotos)
// adicionar
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)//novo array
console.log(algunsPilotos)
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)