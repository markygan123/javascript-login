form.addEventListener('submit', (e) => {
    const uid = localStorage.getItem("UID");
    const pw = localStorage.getItem("PWORD");
    const userId = document.getElementById("userId");
    const password = document.getElementById("password");
    const errorMsg = document.getElementById("error");

    const loginBtn = document.getElementById("login");
    let messages = [];

    let success = () => {        
        loginBtn.innerText = 'Restart';
        userId.disabled = true;
        password.disabled = true;
    
        loginBtn.addEventListener('click', (e) => {
            localStorage.clear();
            location.href = '/index.html';
        });    
    }

    if (userId.value === uid && password.value === pw) {
        messages.push('Login successful');
        success();        
    } else if (userId.value != uid) {
        messages.push('User not found');
    } else {
        messages.push('Wrong Password!');
    }
    
    if (messages.length > 0) {
        e.preventDefault();
        errorMsg.innerText = messages.join(', ');
    }

});

