const notificationModel = require("../models/notification.model");



const getNotifByUserId = async (req, res) => {
    const email = req.params.id;
    
    let notif = await notificationModel.find({to : 'expert'}).populate('touserid').populate('fromuserid');
    let r = notif.filter((x)=> x.touserid && x.touserid.email == email)
    res.json(r);
};

const getNotifByAgriId = async (req, res) => {
    const id = req.params.id;
    
    let notif = await notificationModel.find({to:'agri' , fromuserid: id }).populate('touserid').populate('fromuserid');
    
    res.json(notif);
};

const marqerVu = async (req, res) => {
const userid = req.params.id
notificationModel.updateMany(
    {
        touserid : userid } , 
        {
            vu : true , 
        },
        (err, result
)=> {res.send (result)} )
        }



module.exports.getNotifByUserId = getNotifByUserId;
module.exports.marqerVu = marqerVu;
module.exports.getNotifByAgriId = getNotifByAgriId;

