const student = require("../Models/stuModels");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken"); 


const getAllStudents= async(req,res)=>{
    try{
        let students = await student.find();
        if(students && students.length>0){
            return res.send(students).status(200);
        } 
        else{
            return res.send({message: "No Student Exist"}).status(204);
        }
    }
    catch(err){
        return res.send(err).status(500);
    }

}

const createStudent = async(req,res)=>{
    const body = req.body;
    try{
        const {username,email,password} = body;
        const hashedPassword = await bcrypt.hash(password,1);
        const students = new student({
            username:username,
            email:email,
            password:hashedPassword
        });
        const result = await students.save();
        res.send(result).status(201);
    }catch(err){
        return res.send(err).status(500);
    }
}

const getStudentById = async (req, res) => {
    let username = req.params.name;
    try {
        const students = await student.findOne({ username });
        if (!students) {
            res.send({ message: `Not Student found with username: ${username}` }).status(404);
        } else {
            res.send(students).status(200);
        }
    } catch (err) {
        return res.send(err).status(500);
    }
}


const deleteStudentById = async (req, res) => {
    let email = req.params.email;
    try {
        await student.deleteOne({ email });
        res.send({ message: `Deleted Successfully for email: ${email}` }).status(204);
    } catch (err) {
        return res.send(err).status(500);
    }
}


const updateStudent = async (req, res) => {
    let id = req.params.id;
    const body = req.body;
    try {
        const students = await student.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        if (students) {
            res.send(students).status(202);
        } else {
            res.send({ message: 'Not found' }).status(404)
        }
    } catch (err) {
        res.send(err).status(500);
    }
}

const login = async (req, res) => {
    // req = {
    //     body:{
    //         email:"",
    //         password:""
    //     }
    // }
    const { email, password } = req.body;
    try {
        let students = await student.findOne({ email });
        const isMatch = await bcrypt.compare(password, students.password);
        delete students.password;
        delete students._id;
        delete students.__v;
        delete students.createdAt;
        if (isMatch) {
            const token = await jwt.sign({ students }, process.env.SECRET_KEY, { expiresIn: '1h', algorithm: 'HS512' })
            res.send({
                email: students.email,
                username: students.username,
                token: token,
                message: "Logged in Successfully",
                status:'200'
            }).status(200);
        } else {
            res.send({ message: 'invalid Credentails please enter correct details', status:'500' }).status(500);

        }
    }
    catch (err) {
        res.send(err).status(500);
    }

}

module.exports = {
    getAllStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudentById,
    login
}