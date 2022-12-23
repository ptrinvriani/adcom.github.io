// cek apakah sudah terkoneksi
// alert("oke berhasil terhubung")

// ambil elemen
const getUsername = document.querySelector("#username");
const getPassword = document.querySelector("#password");
const getForm = document.querySelector("form");

// buat user dan password
const USERS = [
 {
    name: "putri@gmail.com",
    password: "123",
 },
];

// lakukan perulangan untuk ambil data dari database
USERS.forEach((user) => {
    console.log(user);
    
});

// testing console.log('user')
console.log(USERS);

// tambahkan event ketika user klik login form
getForm.addEventListener("submit", (event)=>{
    // agar ketika user klik login tidak terload browsernya
    event.preventDefault();

    // ambil value dari input username
    // alert(getUsername.value);
    
    // lakukan dan percabangan
    USERS.forEach((user) => {
        // percabangan
        if(getUsername.value == user.name && getPassword.value == user.password){
            alert("oke berhasil login");
        } else {
            alert("Invalid Credentials");
        }
        
    });

});
