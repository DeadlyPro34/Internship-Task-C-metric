function validation() {
    const username = document.getElementById('uname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_@]*$/;
    const emailPattern = /^([a-zA-Z0-9._]+)@([a-zA-Z0-9]+)\.([a-z]+)(\.[a-z]+)?$/;

    if (usernamePattern.test(username)) 
        {
            if (emailPattern.test(email)) 
                {
                    if (password.length >= 6) 
                    {
                        alert("Username, Email, and Password are valid");
                        return true;
                    }    
                    else 
                    {
                        alert("Password should be at least 6 characters long.");
                        return false;
                    }
                } 
            else 
                {
                    alert("Invalid Email format.");
                    return false;
                }
        } 
    else 
        {
            alert("Invalid Username. It should start with a letter and can include letters, numbers, underscores, and @.");
            return false;
        }
}