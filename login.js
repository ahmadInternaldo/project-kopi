window.onload = () => {
    this.sessionStorage.setItem("userAdmin", "aldo")
    this.sessionStorage.setItem("password", "123")
}

let input = document.getElementsByTagName('input')
let login = document.getElementById('submitButton')

login.onclick = () => {
    if ((input[0].value != '') && (input[1].value != "")){
        if ((input[0].value === this.sessionStorage.getItem("userAdmin")) && (input[1].value === this.sessionStorage.getItem("password"))){
            window.open("homepage.html", "_self");
        }else {
            if (input[0].value != this.sessionStorage.getItem("userAdmin")){
                input[0].nextElementSibling.textContent = 'Invalid'
            setTimeout(() => {
                input[0].nextElementSibling.textContent = ''
            }, 2500)
            }
            if (input[1].value != this.sessionStorage.getItem("password")){
                input[1].nextElementSibling.textContent = 'Invalid'
            setTimeout(() => {
                input[1].nextElementSibling.textContent = ''
            }, 2500)
            }
        }
    } else {
        if (input[0].value == ''){
            input[0].nextElementSibling.textContent = 'Invalid'
            setTimeout(() => {
                input[0].nextElementSibling.textContent = ''
            }, 2000)
        }
        if (input[1].value == ''){
            input[1].nextElementSibling.textContent = 'Invalid'
            setTimeout(() => {
                input[1].nextElementSibling.textContent = ''
            }, 2000)
        }
    }
}