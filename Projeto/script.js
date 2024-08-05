
var box;

var state;
var startState;


function start(state){

    // If selected "login"
    if(state==1){
        // Box 2 disappear
        document.getElementById("box2").style.left = "70%";
        document.getElementById("box2").style.top = "50%";
        document.getElementById("box2").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("box2").style.display = "none";
        }, 800);


        // Box 1 appear
        document.getElementById("box1").style.display = "block";
        setTimeout(function() {
            document.getElementById("box1").style.left = "50%";
            document.getElementById("box1").style.top = "50%";
            document.getElementById("box1").style.opacity = "100";
        }, 100);

        // Start box disappear
        document.getElementById("startBox").style.top = "-10%";
        document.getElementById("startBox").style.opacity = "0";

        startState = 1;

        console.log(startState)

    }
    // If selected "register"
    if(state==2){
        // Box 1 disappear
        document.getElementById("box1").style.left = "30%"; 
        document.getElementById("box1").style.top = "50%";
        document.getElementById("box1").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("box1").style.display = "none";
        }, 800);


        // Box 2 appear
        document.getElementById("box2").style.display = "block";
        setTimeout(function() {
            document.getElementById("box2").style.left = "50%";
            document.getElementById("box2").style.top = "50%";
            document.getElementById("box2").style.opacity = "100";
        }, 100);

        // Start box disappear
        document.getElementById("startBox").style.top = "-10%";
        document.getElementById("startBox").style.opacity = "0";

    }
}

function changeBox(box){
    if(box==1){
        currentBox = 2
    }
    else if(box==2){
        currentBox = 1
    }

    if(currentBox==1){
        // Box 2 disappear
        document.getElementById("box2").style.left = "70%";
        document.getElementById("box2").style.top = "50%";
        document.getElementById("box2").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("box2").style.display = "none";
        }, 800);


        // Box 1 appear
        document.getElementById("box1").style.display = "block";
        setTimeout(function() {
            document.getElementById("box1").style.left = "50%";
            document.getElementById("box1").style.top = "50%";
            document.getElementById("box1").style.opacity = "100";
        }, 100);

    }
    else if(currentBox==2){
        // Box 1 disappear
        document.getElementById("box1").style.left = "30%"; 
        document.getElementById("box1").style.top = "50%";
        document.getElementById("box1").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("box1").style.display = "none";
        }, 800);


        // Box 2 appear
        document.getElementById("box2").style.display = "block";
        setTimeout(function() {
            document.getElementById("box2").style.left = "50%";
            document.getElementById("box2").style.top = "50%";
            document.getElementById("box2").style.opacity = "100";
        }, 100);

        

    }

}

function cancelBoxes(){
    // Box 2 disappear
    document.getElementById("box2").style.left = "70%";
    document.getElementById("box2").style.top = "50%";
    document.getElementById("box2").style.opacity = "0";
    setTimeout(function() {
        document.getElementById("box2").style.display = "none";
    }, 800);


    // Box 1 disappear
    document.getElementById("box1").style.left = "30%"; 
    document.getElementById("box1").style.top = "50%";
    document.getElementById("box1").style.opacity = "0";
    setTimeout(function() {
        document.getElementById("box1").style.display = "none";
    }, 800);

    // Start box appeart
    setTimeout(function(){
        document.getElementById("startBox").style.top = "50%";
        document.getElementById("startBox").style.opacity = "1";
    }, 300);


    state = 0;
    startState = 0;

    console.log(startState)


}

var Name
var Pass

function submitRegister() {
    console.log('New Register Submitted');
    
    var newEmail = document.getElementById('newEmail').value;
    var newName = document.getElementById("newName").value;
    var newPass = document.getElementById("newPass").value;

    // Obter a lista atual de usuários do localStorage ou inicializar uma nova lista
    var userList = JSON.parse(localStorage.getItem('userList')) || [];

    // Verificar se o nome de usuário já existe
    var userExists = userList.some(function(user) {
        return user.username === newName;
    });

    if (userExists) {
        document.getElementById('errorMessage').style.backgroundColor = 'rgb(201, 44, 44)'
        document.getElementById('errorMessageInfo').innerHTML = 'Nome já existe'
        document.getElementById('errorMessage').style.marginTop = '20px';
        setTimeout(function() {
            document.getElementById('errorMessage').style.marginTop = '-10%';
        }, 3000);
        return;
    }

    // Adicionar o novo usuário à lista
    var newUser = { username: newName, password: newPass, email: newEmail };
    userList.push(newUser);

    // Salvar a lista atualizada no localStorage
    localStorage.setItem('userList', JSON.stringify(userList));

    console.log('Email: ' + newEmail);
    console.log('Name: ' + newName);
    console.log('Pass: ' + newPass);

    window.location.href = "index.html";
}

function submitLogin() {
    var body = document.body;

    console.log('New Login Submitted');
    var enteredUsername = document.getElementById("logInputName2").value;
    var enteredPassword = document.getElementById("logInputPass2").value;

    // Obter a lista atual de usuários do localStorage
    var userList = JSON.parse(localStorage.getItem('userList')) || [];

    // Verificar se as credenciais são válidas
    var isValidCredentials = userList.some(function(user) {
        return user.username === enteredUsername && user.password === enteredPassword;
    });

    if (isValidCredentials) {
        body.classList.add('green-background');
        setTimeout(function () {
            body.classList.remove('green-background');
        }, 1000);
        window.location.href = "pagina/pagina.html";
    } else {
        document.getElementById('box1').style.animation = 'horizontal-shaking 0.25s .1s'
        document.getElementById('box1').style.transition = '.3s'
        document.getElementById('box1').style.boxShadow = '0px 10px 100px red'
        setTimeout(function () {
            document.getElementById('box1').style.boxShadow = '0px 10px 100px rgba(0, 0, 0, 0.404)'
            document.getElementById('box1').style.animation = 'none'
            document.getElementById('box1').style.transition = '.8s'
        }, 1000);

    }

    console.log('Entered Name: ' + enteredUsername);
    console.log('Entered Pass: ' + enteredPassword);
}

function getPassword() {
    var enteredUsername = document.getElementById("logInputName2").value;

    // Obter a senha do usuário pelo nome de usuário
    var password = getPasswordByUsername(enteredUsername);

    if (password !== null) {
        console.log('Senha para usuario [',enteredUsername,'] encontrada:', password);
        document.getElementById('errorMessage').style.backgroundColor = 'rgb(30, 212, 30)'
        document.getElementById('errorMessageInfo').innerHTML = 'Password recuperada: '+ password
    } else {
        console.log('Usuário [',enteredUsername,'] não encontrado ou senha não existe.');
        document.getElementById('errorMessage').style.backgroundColor = 'rgb(201, 44, 44)'
        document.getElementById('errorMessageInfo').innerHTML = 'Password inrecuperável :('
    }
    
    document.getElementById('errorMessage').style.marginTop = '20px';
    setTimeout(function() {
        document.getElementById('errorMessage').style.marginTop = '-10%';
    }, 3000);
}

function getPasswordByUsername(username) {
    var userList = JSON.parse(localStorage.getItem('userList')) || [];

    var user = userList.find(function(user) {
        return user.username === username;
    });

    return user ? user.password : null;
}
function deleteAccount() {
    var enteredUsername = document.getElementById("logInputName2").value;
    var enteredPassword = document.getElementById("logInputPass2").value;

    // Obtain the list of users from localStorage
    var userList = JSON.parse(localStorage.getItem('userList')) || [];

    // Find the index of the user with the specified username
    var userIndex = userList.findIndex(function(currentUser) {
        return currentUser.username === enteredUsername && currentUser.password === enteredPassword;
    });

    if (userIndex !== -1) {
        // Remove the user from the list
        userList.splice(userIndex, 1);

        // Save the updated user list to localStorage
        localStorage.setItem('userList', JSON.stringify(userList));

        // Provide feedback to the user (you can customize this)
        console.log('Usuário [', enteredUsername, '] apagado');
        document.getElementById('errorMessage').style.backgroundColor = 'rgb(30, 212, 30)';
        document.getElementById('errorMessageInfo').innerHTML = 'Conta apagada';
    } else {
        // If the user is not found, provide appropriate feedback
        console.log('Usuário [', enteredUsername, '] não encontrado ou senha incorreta.');
        document.getElementById('errorMessage').style.backgroundColor = 'rgb(201, 44, 44)';
        document.getElementById('errorMessageInfo').innerHTML = 'Usuário inexistente ou senha incorreta';
    }

    document.getElementById('errorMessage').style.marginTop = '20px';
    setTimeout(function () {
        document.getElementById('errorMessage').style.marginTop = '-10%';
    }, 3000);
}

