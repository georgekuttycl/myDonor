const {User,Hospital,Customer} = require('../../../data/models');
const { json } = require("body-parser");
const { QueryTypes } = require('sequelize');
const ResponseModel=require('../../../utilities/responseModel')
const tokenHandler= require("../../../utilities/tokenHandler")
const otp_verify = require("otp-verify"); //otp-verifier import
// 
module.exports.customerRegistration = async(req,res)=>{


    const {name,bloodGroup,phone,address,pin,state,weight,gender,email,password,age,otp } = req.body;
    // email otp sending functionlaity.
    otp_verify.setupSenderEmail({
        service: "gmail",
        user: "josephjvalavi18@gmail.com",
        //for gmail, create an app password and use it
        pass: "dhdlltoprgqmqeok",
      });
    
      otp_verify.sendOTP(
        {
          to: email,
        //   message: "Enter the below OTP for email validation",
           message: "zerena you are hacked please enter this otp for further mailings",
          subject: "Email Verification hacking",
        },
        (err, generatedOtp) => {
          if (err) console.log(err);
          else console.log("Email sent", generatedOtp);
        }
      );
      if(otp!=generatedOtp){
        return 
      }

    //user details insertion to custumer table

    const user = await User.create({
        email:email,
        password:password,
        role:'customer'
    });
    const customer = await Customer.create({
        name:name,
        bloodGroup:bloodGroup,
        phone:phone,
        address:address,
        pin:pin,
        state:state,
        weight:weight,
        gender:gender,
        age:age,
        userId:user.dataValues.id
    })

};

// hospital registrtion table insertion
module.exports.hospitalRegistration = async(req,res)=>{
    const {name,licenseNumber,phone,address,pin,state,email,password,role} = req.body;


     // email otp sending functionlaity.
     otp_verify.setupSenderEmail({
        service: "gmail",
        user: "josephjvalavi18@gmail.com",
        //for gmail, create an app password and use it
        pass: "dhdlltoprgqmqeok",
      });
    
      otp_verify.sendOTP(
        {
          to: email,
        //   message: "Enter the below OTP for email validation",
           message: "zerena you are hacked please enter this otp for further mailings",
          subject: "Email Verification hacking",
        },
        (err, generatedOtp) => {
          if (err) console.log(err);
          else console.log("Email sent", generatedOtp);
        }
      );
      if(otp!=generatedOtp){
        return 
      }
// insertion to User  table.
    const usertable = await User.create({
        email:email,
        password:password,
        role:'hospital'
    });
    // insertrion to hospital table.
    const hospital = await Hospital.create({
        name:name,
        phone:phone,
        address:address,
        pin:pin,
        state:state,
        licenseNumber:licenseNumber,
        category:'govt',
        userId:usertable.dataValues.id
    })
}
    //User login functionalaity
module.exports.login = async(req,res)=>{
        const{email,password}=req.body;
        //checking database.
        let loggedUser=await User.findOne({
            where:{email:email,
            password:password}
        });
        if(!loggedUser){
            return res.json(new ResponseModel(null, null, ['Invalid credentials.']));

        }
console.log(loggedUser)
        // Create token.
    const token = tokenHandler.createToken({
        id: loggedUser.id,
        role: loggedUser.role
    });

    res.json(new ResponseModel(token))
}
    
// function for forgot passsword//not yet completed.

module.exports.forgotPassword= async (req,res)=>{
  const {email}=req.body;
  //emailing the otp.

  otp_verify.setupSenderEmail({
    service: "gmail",
    user: "josephjvalavi18@gmail.com",
    //for gmail, create an app password and use it
    pass: "dhdlltoprgqmqeok",
  });

  otp_verify.sendOTP(
    {
      to: email,
    //   message: "Enter the below OTP for email validation",
       message: "PLease enter the otp for password reset",
      subject: "Email Verification for password reset",
    },
    (err, generatedOtp) => {
      if (err) console.log(err);
      else console.log("Email sent", generatedOtp);
    }
  );

// taking otp and password from req.body.upadating password feild
   const {otp,password}=req.body;
  if(otp!=generatedOtp){
    return 
  }

  await User.update({
    password:password
  },
  {where:{email:email}

  })
   
}