const Profile = require("../models/profileModel")
const addProfileDetails = async(req,res)=>{
const {
      profileImg,
      experience,
      githubProfile,
      linkedinProfile,
      codingPlateform,
      skills,
      location,
      achievements
    } = req.body;
    if(!profileImg || !experience ||  !githubProfile || !linkedinProfile || !codingPlateform || !skills || !location || !achievements){
        return res.status(400).json({message: "Please fill all the fields"

        });
}

const newProfile = await Profile.create({
    profileImg,
    experience,
    githubProfile,
    linkedinProfile,
    codingPlateform,
    skills,
    location,
    achievements
})
const profileAdd =await newProfile.save();
return res.status(201).json({
    message: "Profile created successfully",
    data: profileAdd
})
}
const updateProfileDetails = async(req,res)=>{

}
module.exports={addProfileDetails,updateProfileDetails};