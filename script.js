//variaveis login
const input_name = document.querySelector(".name");
const input_password = document.querySelector(".password");
const show_password = document.querySelector(".show-password");
const submit = document.querySelector(".submit-btn");

//variaveis register
const new_username = document.querySelector(".new-name");
const new_password = document.querySelector(".new-password");
const confirmNewPassword = document.querySelector(".new-passwordConfirm");
const register = document.querySelector(".register-btn");

let login_user = [];

register.addEventListener("click", () => {
    if (new_username.value === "" || new_password.value === "" || confirmNewPassword.value === "") {
        alert("Faltam informações.");
    } else if (new_password.value !== confirmNewPassword.value) {
        alert("As senhas não coincidem.");
        new_password.value = "";
        confirmNewPassword.value = "";
    } else {
        alert("Registro bem-sucedido.");

        //adicionar os novos dados em um objeto criado no array login_user
        login_user.push({
            user: new_username.value,
            password: new_password.value,
        });

        new_password.value = "";
        confirmNewPassword.value = "";
        console.log(login_user);
    }
});

//mostra senha
show_password.addEventListener("click", () => {
    if (input_password.type == "password") {
        input_password.type = "text";
        show_password.innerText = "Esconder senha";
    } else {
        input_password.type = "password";
        show_password.innerText = "Mostrar senha";
    }
});

//valida login
submit.addEventListener("click", () => {
    if (input_name.value === "" || input_password.value === "") {
        alert("Digite seu login.");
    } else {
        const userFound = login_user.find(
            (index) => index.user === input_name.value && index.password === input_password.value
        );

        if (userFound) {
            alert(`Login concedido com sucesso! Bem-vindo(a) de volta ${userFound.user}!`);
            input_name.value = "";
            input_password.value = "";
        } else {
            alert(
                "Usuário ou senha incorretos. Por favor, verifique seus dados ou faça o registro."
            );
        }
    }
});

// teste para adicionar objetos em um array
// let users = [];

// users.push({
//     user: "lucas",
//     password: "123",
// });

// users.push({
//     user: "maria",
//     password: "321",
// });

// users.push({
//     user: "jose",
//     password: "1234",
// });

// console.log(users);
