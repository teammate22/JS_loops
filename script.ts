// задание 1
let n = Number(prompt('Введите число'))
let i = 2
while(i <= n){
  if(i % 2 == 1) n -= 1
  alert(i)
  i += 2
}

// задание 2
let n2 = Number(prompt('Введите число'))
while(1 <= n2){
  if(n2 % 2 == 0) n2 -= 1
  alert(n2)
  n2 -= 2
}

// задание 3
let n3 = Number(prompt('Введите число'))
let i3 = 1
while(i3 <= n3){
  if(n3 % i3 == 0) alert(i3)
  i3 += 1
}

// задание 4
let procent = Number(prompt('Введите годовую ставку'))
let years = 0
i = 0
while(i < 200){
  i += procent
  years++
}
alert(`Через ${years} лет вклад увеличится вдвое`)

// задание 5
for(let i = 0; i < 10; ){
  let random = Math.floor(Math.random() * 20)
  if(random % 4 == 0) continue
  console.log(random)
  i++
}

// задание 6
let volume = Number(prompt('Введите объём воды'))
let days = 0
while(volume > 10){
  volume -= volume * 0.1
  days++
  console.log(`через ${days} дней объём равен ` + volume)
}
alert(`Такого объёма воды хватит на ${days - 1} дней работы `)