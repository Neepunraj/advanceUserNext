import mongoose from "mongoose";

const connectToDB = async()=>{
    
    const url = "mongodb+srv://neepushre97:qxjGndUGiQDlIaZ6@cluster0.0igud.mongodb.net/ "
    mongoose.connect(url)
    .then(()=>console.log('Databse Connected Successfully'))
    .catch((e)=> console.log(e))
}
export default connectToDB;
/* qxjGndUGiQDlIaZ6 */
/* mongodb+srv://neepushre97:<db_password>@cluster0.0igud.mongodb.net/ */