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
const contactRouter = require("./routes/contact.route"); // les routes (URL) d'un utlisateurs
const newsRouter = require("./routes/news.route"); // les routes (URL) d'un utlisateurs
const expertRouter = require("./routes/Expert.route"); // les routes (URL) d'un utlisateurs
const commisariatRouter = require("./routes/commisariat.route"); // les routes (URL) d'un utlisateurs
const rdvRouter = require("./routes/rdv.route"); // les routes (URL) d'un utlisateurs
const secteurRouter = require("./routes/secteur.route"); // les routes (URL) d'un utlisateurs

const app = express(); // l'instance d'express;
const cors = require("cors")
app.use(bodyParser.urlencoded({
  extended: true
}));
// parse application/json
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
  limit : '50mb',
  extended: true
}));
app.use(cors())
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
app.use("/contact/", contactRouter);
app.use("/news/", newsRouter);
app.use("/expert/", expertRouter); 
app.use("/commisariat/", commisariatRouter);
app.use("/rdv/", rdvRouter);
app.use("/secteur/", secteurRouter);
// le serveur qui demarre sur le port 3000
app.listen(process.env.PORT, process.env.IP, () => {
  console.log("app is running.. on 3000");
});
