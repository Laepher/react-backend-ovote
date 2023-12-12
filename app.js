const app = require("express")();
const http = require("http").Server(app);

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ovote:ovote@cluster0.km2n8st.mongodb.net/?retryWrites=true&w=majority"
);

const User = require("./models/UserModel");
const Peserta = require("./models/PesertaModel");
const Calon = require("./models/CalonModel");

// async function insert(){
//     await User.create({
//         email:"admin@gmail.com",
//         name:"admin",
//         password:"admin"
//     })
// }

// insert()

http.listen(3000, function () {
  console.log("server running");
});
