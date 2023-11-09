// var TOKEN_LOGIN

// function login() {
//     const campos = camposLogin()

//     const result = loginService.login(campos).then((item) => {
//         window.location.href = "/entrar.html"
//         setToken(item)
//     }).catch(error => {
//         alert(error)
//     })
// }

// function getToken(){
//     const token = JSON.parse(this.TOKEN_LOGIN)
//     return token.token
// }

// function setToken(token){
//     this.TOKEN_LOGIN = token
//     const auth = JSON.parse(this.TOKEN_LOGIN)
//     localStorage.setItem('token' , auth.token)
// }

// const loginService = {
//     login: campos => {
//         return callApi({
//             method: "POST",
//             url: "http://localhost:8080/v1/login",
//             params: campos
//         })
//     }

   
// }

// function camposLogin() {
//     return {
//         email: form.email().value,
//         password: form.password().value
//     }
// }

// const form = {
//     email: () => document.getElementById("email"),
//     password: () => document.getElementById("password")
// }

// // function callApi({ method, url, params }) {
// //     return new Promise((resolve, reject) => {
// //         const xhr = new XMLHttpRequest();

// //         xhr.open(method, url, true);
// //         //xhr.setRequestHeader('Authorization', await firebase.auth().currentUser.getIdToken())
// //         xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
// //         // xhr.setRequestHeader('Access-Control-Allow-Origin', '')
// //         xhr.onreadystatechange = function () {
// //             if (this.readyState == 4) {
// //                 const json = this.responseText;
// //                 console.log(this.status)
// //                 if (this.status != 200) {
// //                     reject(json || 'Falha ao logar');
// //                 } else {
// //                     resolve(json);
// //                 }
// //             }
// //         };

// //         xhr.responseType = "text"
// //         xhr.send(JSON.stringify(params));
// //     })
// // }


// function callApi({method, url, params}) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open(method, url, true);
//         const token = localStorage.getItem('token')
//         xhr.setRequestHeader('Authorization', `Bearer ${token}`)
//         xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//         xhr.onreadystatechange = function() {
//             if (this.readyState == 4) {
//                 const json = this.responseText;
//                 if (this.status != 200) {
//                     reject(json || 'Error');
//                 } else {
//                     resolve(json);
//                 }
//             }
//         };
        
//         xhr.responseType = "text"
//         xhr.send(JSON.stringify(params));
//     })
// }




