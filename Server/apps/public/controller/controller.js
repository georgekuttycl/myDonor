const { User, Hospital, Customer,Feedback } = require("../../../data/models");
const { json } = require("body-parser");
const { QueryTypes } = require("sequelize");
const ResponseModel = require("../../../utilities/responseModel");
const tokenHandler = require("../../../utilities/tokenHandler");
const otp_verify = require("otp-verify"); //otp-verifier import
const { PasswordHasher } = require("../../../utilities/passwordHashing");
//
module.exports.customerRegistration = async (req, res) => {
   console.log("customer body",req.body);
  // return;
  const {
    fullName,
    bloodGroup,
    phone,
    address,
    pincode,
    state,
    weight,
    gender,
    email,
    password,
    age,
    otp,
  } = req.body;
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
      message: "Otp message ",
      subject: "Email Verification for myDonor registration",
    },
    async (err, otp) => {
      if (err) {
        console.log(err);
        return;
      }

      try {
        const user = await User.create({
          email: email,
          password: new PasswordHasher().hashPassword(password),
          role: "customer",
          otp: otp,
        });
        const customer = await Customer.create({
          name: fullName,
          Bloodgroup: bloodGroup,
          phone: phone,
          address:address,
          pin: pincode,
          state: state,
          weight: weight,
          gender: gender,
          age: age,
          userId: user.dataValues.id,
        });

        return res.json(new ResponseModel(otp));
      } catch(err) {
        console.log(err)

        return res.json(
          new ResponseModel(null, null, ["Task failed successfully."])
        );
      }
    }
  );
  // if(otp!=generatedOtp){
  //   return
  // }

  //user details insertion to custumer table
};

module.exports.checkOtp = async (req, res) => {
  const { email, otp } = req.body;
  const user = await User.findOne({
    where: {
      email: email,
      otp: otp,
    },
  });


  if (!user) {
    return res.json(new ResponseModel(null, null, ["Invalid OPT"]));
  }
  user.otp = 0;
  await user.save();

  return res.json(new ResponseModel());
};

// hospital registrtion table insertion
module.exports.hospitalRegistration = async (req, res) => {
 // return;
 const {
  name,
  licenseNumber,
  phone,
  address,
  pincode,
  category,
  state,
  email,
  password,
  role,
  otp
} = req.body;
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
     message: "Otp message ",
     subject: "Email Verification for myDonor registration",
   },
   async (err, otp) => {
     if (err) {
       console.log(err);
       return;
     }

     try {
      const user = await User.create({
        email: email,
        password: new PasswordHasher().hashPassword(password),
        role: "hospital",
        otp:otp
      });
      const hospital = await Hospital.create({
        name: name,
        phone: phone,
        address: address,
        pin: pincode,
        state: state,
        licenseNumber: licenseNumber,
        category: category,
        userId: user.dataValues.id,
      });

       return res.json(new ResponseModel(otp));
     } catch(err) {
       console.log(err)

       return res.json(
         new ResponseModel(null, null, ["Task failed successfully."])
       );
     }
   }
 );
 // if(otp!=generatedOtp){
 //   return
 // }

 //user details insertion to custumer table
};


//User login functionalaity
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  //checking database.
  let loggedUser = await User.findOne({
    where: { email: email},
    include: Hospital
  });
  // Checking password
  if (!loggedUser) {
    return res.json(new ResponseModel(null, null, ["Invalid credentials."]));
  }
  console.log(loggedUser);

  var result = new PasswordHasher().checkPassword(password, loggedUser.dataValues.password);
  if(!result){
    return res.json(new ResponseModel(null, null, ["Invalid password."]));
  }
  if(loggedUser.dataValues.role == 'hospital'){
    if(!loggedUser.Hospital.status == 1){
    return res.json(new ResponseModel(null, null, ["Hospital is not approved."]));
    }
  }
  // Create token.
  const token = tokenHandler.createToken({
    id: loggedUser.id,
    role: loggedUser.role,
  });

  res.json(new ResponseModel(token));
};

// function for forgot passsword//not yet completed.

module.exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  //emailing the otp.

  otp_verify.setupSenderEmail({
    service: "gmail",
    user: "mydonor49@gmail.com",
    //for gmail, create an app password and use it
    pass: "audissss4",
  });

  otp_verify.sendOTP(
    {
      to: email,
      //   message: "Enter the below OTP for email validation",
      message: "PLease enter the otp for password reset",
      subject: "Email Verification for password reset",
    },
    (err, otp) => {
      console.log();
      if (err) console.log(err);
      else console.log("Email sent", otp);
    }
  );

  // taking otp and password from req.body.upadating password feild
  const { otp, password } = req.body;
  if (otp != generatedOtp) {
    return;
  }

  await User.update(
    {
      password: password,
    },
    { where: { email: email } }
  );
};


//get feedback details
module.exports.getFeedbackDetails= async(req,res)=>{
  try{
    const feedback = await Feedback.findAll(
      {
        include:{
          model:User,
        include:[Customer, Hospital]
        }
      }
    );
    res.json(feedback);
    console.log(feedback);
  }
  catch(err){
    console.log(err)
    return res.json(
      new ResponseModel(null, null, ["Something went wrong !"])
    );
  }
}