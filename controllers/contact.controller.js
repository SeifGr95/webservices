const nodemailer = require("nodemailer")

exports.create = (req, res) => {


 

        // configuration of transporter
        var transporter = nodemailer.createTransport({
            host : 'smtp.gmail.com',
            port : 587,
            auth : {
                user : 'etudiant.gorchene.saifeddine@uvt.tn',
                pass : 'saif123RR.uvt'
            },
            secureConnection : true,
            tls : {
                cipher : 'SSLv3'
            }
        })
        //2- mail options
    
        var mailOptions = {
            from : 'saifgorchene@gmail.com',
            to : 'contact.agri1@gmail.com',
            subject :req.body.subject ,
            text : req.body.text,
        }
        // 3- send mail
        transporter.sendMail(mailOptions , (err , result)=>{
            if(err){
                res.status(403).send(err)
            }else{
                res.send({'ok':'ok'})
            }
        })
    
    
    
    
    


}