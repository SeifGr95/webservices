const rdvModel = require("../models/rdv.model");
const notificationModel = require("../models/notification.model");

const getAll = async (req, res) => {
    let newList = await rdvModel.find().populate('client')
    res.json(newList);
};

const getById = async (req, res) => {
    const email = req.params.id;
    console.log(email);
    let rdv = await rdvModel.find().populate('expert').populate('client');
   let r = rdv.filter(elem=> elem.expert &&  elem.expert.email == email);

    res.json(r);
};

const add = async (req, res) => {
    const date_rdv = req.body.date_rdv;
    const sujet_rdv = req.body.sujet_rdv;
    const lieu_rdv = req.body.lieu_rdv;
    const client = req.body.client;
    const expert = req.body.expert;
    
        const Rdv = new rdvModel({
            date_rdv: date_rdv,
            sujet_rdv: sujet_rdv,
            lieu_rdv: lieu_rdv,
            client: client,
            expert: expert
        });

        const notif = new notificationModel({
            contenu: "vous avez un nouveau rendez-vous",
            fromuserid: client,
            touserid: expert,
            to : 'expert'
        });
        notif.save() 

        

        let result = await Rdv.save();
        res.json( result);
};


const updateEtat = async (req, res) => {
    const id = req.params.userid;
    const client = req.body.client;
    const expert = req.body.expert;
    let result = await rdvModel.findByIdAndUpdate(id, {
        Etat: req.body.Etat,
      
    });

    const notif = new notificationModel({
        contenu: req.body.Etat == 1 ? "votre rendez-vous a été accecpté" : "votre rendez-vous a été refusé",
        fromuserid: client,
        touserid: expert,
        to : 'agri'
    });
    notif.save() 

    res.json(result);
};



const update = async (req, res) => {
    const id = req.params.userid;

    const date_rdv = req.body.date_rdv;
    const sujet_rdv = req.body.sujet_rdv;
    const lieu_rdv = req.body.lieu_rdv;
    const client = req.body.client;
    const expert = req.body.expert;
    let result = await rdvModel.findByIdAndUpdate(id, {
        date_rdv: date_rdv,
            sujet_rdv: sujet_rdv,
            lieu_rdv: lieu_rdv,
            client: client,
            expert: expert
    });
    res.json(result);
};

const remove = async (req, res) => {
    const id = req.params.userid;
    let result = await rdvModel.findByIdAndRemove(id);

    res.json(result);
};




module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.update = update;
module.exports.remove = remove;
module.exports.add = add;
module.exports.updateEtat = updateEtat;
