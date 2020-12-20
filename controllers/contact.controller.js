const nodemailer = require("nodemailer")

exports.create = (req, res) => {


 

        // configuration of transporter
        var transporter = nodemailer.createTransport({
            host : 'smtp.gmail.com',
            port : 587,
            auth : {
                user : 'agripfe2020@gmail.com',
                pass : 'pfe123**'
            },
            secureConnection : true,
            tls : {
                cipher : 'SSLv3'
            }
        })
        //2- mail options
    
        var mailOptions = {
            from : req.body.email,
            to : 'agripfe2020@gmail.com',
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