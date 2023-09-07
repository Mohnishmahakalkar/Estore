const express = require("express"); // Include ExpressJS
const app = express(); // Create an ExpressJS app
app.use(express.json());
const jwt = require("jsonwebtoken");

const { USER_CREDS, PRODUCTS } = require("./Data-Store");

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/login", (req, res) => {
  let username = req?.body?.username;
  let password = req?.body?.password;
  let userfound = false;

  if (!username) {
    return res
      .status(404)
      .send({ msg: "Username Not provided", status: false, field: "username" });
  }

  if (!password) {
    return res.status(404).send({
      msg: "Password Not provided",
      status: false,
      field: "password",
    });
  }

  USER_CREDS.forEach((user) => {
    if (user.username === username) {
      userfound = user;
    }
  });

  if (userfound === false) {
    return res
      .status(404)
      .send({ msg: "User Not Found", status: false, field: "username" });
  }

  if (userfound.password !== password) {
    return res
      .status(409)
      .send({ msg: "Password Incorrect", status: false, field: "password" });
  }

  const PAYLOAD = {
    firstname: userfound?.user_data?.first_name,
    userID: userfound?.user_data?.user_id,
  };

  let token = jwt.sign(PAYLOAD, "encrypt");

  return res.status(200).send({ token: token });
});

app.get("/user/profile", (req, res) => {
  const token = jwt.decode(req?.headers?.authorization, "encrypt");

  let userdata = false;

  USER_CREDS.forEach((user) => {
    if (user.user_data.user_id == token.userID) {
      userdata = user;
    }
  });

  if (userdata === false) {
    return res.status(404).send({ msg: "User Not Found", status: false });
  }

  const data = {
    username: userdata?.username,
    first_name: userdata?.user_data?.first_name,
    last_name: userdata?.user_data?.last_name,
    user_id: userdata?.user_data?.user_id,
    profile_pic: userdata?.user_data?.profile_pic,
  };

  return res.status(200).send(data);
});

app.get("/products", (req, res) => {
  return res.status(200).send(PRODUCTS);
});

app.get("/product/:id", (req, res) => {
  let productFound = false;

  PRODUCTS.forEach((product) => {
    if (product.product_id == req.params.id) {
      productFound = product;
    }
  });

  if (!productFound) {
    return res.status(404).send({ msg: "Product Not Found", status: false });
  }

  return res.status(200).send(productFound);
});

const port = 3001; // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));
