let myinput = document.querySelector('.input')
let myselect1 = document.querySelector('.select1')
let myselect2 = document.querySelector('.select2')
let myresult = document.querySelector('.footer')
let mybutten = document.querySelector('.button')
let exchangerateapi = `https://v6.exchangerate-api.com/v6/c23b91d95249ee14e67f4196/latest/USD`
fetch(exchangerateapi).then(data => data.json()).then((data) => {
   Object.keys(data.conversion_rates).sort().forEach((myloop) => {
    let myviow1 = `
    <option value=${myloop}>${myloop}</option>
    `
    myselect1.innerHTML += myviow1
    myselect2.innerHTML += myviow1
   })
})
myselect1.addEventListener('change', () =>{
    let exchangerateapi1 = `https://v6.exchangerate-api.com/v6/c23b91d95249ee14e67f4196/latest/${myselect1.value}`
    fetch(exchangerateapi1).then(data2 => data2.json()).then((data2) =>  {
        myselect2.addEventListener('change', () => {
            mybutten.addEventListener('click', () => {
                if(!isNaN(myinput.value)){
                    let myprint = `
                    <p>${myinput.value*data2.conversion_rates[myselect1.value]}${myselect1.value} = ${myinput.value*data2.conversion_rates[myselect2.value]}${myselect2.value}</p>
                    `
                    myresult.innerHTML = myprint
                }else{
                    myresult.innerHTML = 'invied currency'
                }
            })
        })
    })
})

