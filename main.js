const name_user=document.querySelector('#name')
const date_user=document.querySelector('#date')
const calculte=document.querySelector('#btn')
const message_to_user=document.querySelector('#message')

calculte.addEventListener('click',Calculate_age)
function Calculate_age(){
    const date_birth=date_user.value.split('-')
    const today= new Date()
    const day= today.getDate()
    const month=today.getMonth()
    const year=today.getFullYear()

    const day_dec=date_birth[0]-day
    const month_dec=date_birth[1]-(month+1)
    const year_dec=date_birth[2]-year

    if( year_dec<=0 && month_dec<=0 && day_dec<=0 ){
        message_to_user.textContent= ` ${name_user.value} su voto es válido` 
    }
    else{
        message_to_user.textContent=` ${name_user.value} su voto no es valido`
    }
}

console.log('holalatodos')
console.log('date_birth')
