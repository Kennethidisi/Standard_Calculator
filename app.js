let input_display = document.querySelector('#input_display')

window.onload = ()=>{
    setTimeout(()=>{
        document.querySelector('.welcome_page').style.display = "none"
    },3000)
    input_display.value = ""
}

let clear_btn = document.querySelector('#clear');
let delete_btn = document.querySelector('#delete');
let equal_to = document.querySelector('#equal_to');

let input_btns = document.querySelectorAll('.input_btn');
input_btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        input_display.value += btn.value
    })
})

equal_to.addEventListener('click', ()=>{
    try{
        let result = eval(input_display.value)

        if(Number.isInteger(result)){
            input_display.value = result;
        }else{
            input_display.value = result.toFixed(2);
        }
    }catch(err){
        console.log(err)
        input_display.value = 'ERROR'
        setTimeout(()=>{
            input_display.value = ''
        },2000)
    }
})


clear_btn.addEventListener('click', ()=>{
    input_display.value = "";
})

delete_btn.addEventListener('click', ()=>{
    input_display.value = input_display.value.substring(0, input_display.value.length-1)
})