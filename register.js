form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const userId = document.getElementById("userId");
    const password = document.getElementById("password");
    const form = document.getElementById("form");
    const errorMsg = document.getElementById("error");
    
    const registerButton = document.getElementById("register");
    let messages = [];
    

    let registerUser = () => {
        let uid = localStorage.setItem("UID", userId.value);
        let pword = localStorage.setItem("PWORD", password.value);
        
        return credentials = {
            uid, pword
        }
    }    
    
    if (password.value.length < 6) {
        messages.push('Password must be longer than 6 characters');
    } else if (password.value.length >= 20) {
        messages.push('Password must be not longer than 20 characters');
    } else if (password.value === "password") {
        messages.push(`Password cannot be 'password'`);
    } else if (userId.value === password.value) {
        messages.push('User ID and Password cannot be the same!')
    }
    
    if (messages.length > 0) {
        e.preventDefault()
        errorMsg.innerText = messages.join(', ');
    } else {
        registerUser();
        location.href = 'login/'
    }
    
    
})