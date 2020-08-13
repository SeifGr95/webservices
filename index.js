// tous les imports necessaire
const express = require("express"); // express qui permet d'executer les requete
const bodyParser = require("body-parser"); // bodyparser qui permet de recuperer les donnes d'une requetes
const mongoose = require("mongoose"); // mongoose permet de manipuler mongodb
const userRouter = require("./routes/user.routes"); // les routes (URL) d'un utlisateurs
const questionRouter = require("./routes/question.route"); // les routes (URL) d'un utlisateurs
const answerRouter = require("./routes/answer.route"); // les routes (URL) d'un utlisateurs
const articleRouter = require("./routes/article.route"); // les routes (URL) d'un utlisateurs
const eventRouter = require("./routes/event.route"); // les routes (URL) d'un utlisateurs
const partdemarcheRouter = require("./routes/partdemarche.route"); // les routes (URL) d'un utlisateurs
const productRouter = require("./routes/product.route"); // les routes (URL) d'un utlisateurs
const app = express(); // l'instance d'express
app.use(bodyParser.urlencoded({
  extended: true
}));
// parse application/json
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://saif:123456saif@cluster0.dxdlw.mongodb.net/usermanagement?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

// Routing
app.use("/users/", userRouter);
app.use("/question/", questionRouter);
app.use("/answer/", answerRouter);
app.use("/article/", articleRouter);
app.use("/event/", eventRouter);
app.use("/partdemarche/", partdemarcheRouter);
app.use("/product/", productRouter);
// le serveur qui demarre sur le port 3000
app.listen(3000, () => {
  console.log("app is running..");
});
