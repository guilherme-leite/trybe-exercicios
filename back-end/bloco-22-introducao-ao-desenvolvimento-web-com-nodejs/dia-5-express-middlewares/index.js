const express = require("express");
const userNameMinLength = 3;
const pwMinLenght = 4;
const pwMaxLenght = 8;

const app = express();
app.use(express.json());

app.post('/user/register', function (req, res) {
  const { username, email, password } = req.body;
  const isValid = email.includes("@") && email.includes(".com");
  const isPwValid = password.length >= pwMinLenght && password.length <= pwMaxLenght;
  
  if(username.length <= userNameMinLength || !isValid || !isPwValid ) {
    return res.status(400).json({ message: "invalid data" });
  }

  return res.status(201).json({ message: "user created" });

});

// app.post('/user/login', function (req, res) {
//   const { email, password } = req.body;
  

// });

app.listen(3002, () => {
  console.log('Rodante na porta 3002');
});
