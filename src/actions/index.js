'use server'

import connectToDB from "@/database"
import User from "@/models";
import { revalidatePath } from "next/cache";

/* for all the operations instead of having seperate folder 
 add new user 
 edit user details
 fetch all the users from data base 
 delete users
  */

 //add user without validations 
 export async function addNewUSerAction(formData,pathToRevalidate){
    await connectToDB();

    try{
        const newlyCreatedUser = await User.create(formData);
        if(newlyCreatedUser){
            revalidatePath(pathToRevalidate)

            return  {
                success:true,
                message:'User Created Successfully'

            }
        }else{
            return {
                success:false,
                message:'Unable to Create use Please try again later'
            }
        }
       



    }catch(error){
        console.log(error)
        return {
            success:false,
            message:'Something Went wrong Please try again'
        }
    }
 }


 //fetching users

 export async function fetchUsersAction() {
    await connectToDB();


    try{
        const allUserList = await User.find({});
        if(allUserList){
            return {
                success:true,
                data:JSON.parse(JSON.stringify(allUserList))
            }
        }else{
            return {
                success:false,
                message:'Unable to Extract Users'
            }
        }



    }catch(error){
        console.log(error)
        return {
            success:false,
            message:'Something Went wrong Please try again'
        }
    }
    
 }

 //edit
 export async function EditUserAction(currentID,formData,pathToRevalidate) {
    await connectToDB()


    try{
        const {firstName, lastName,email,address }= formData

        const updatedUser = await User.findOneAndUpdate(
            {_id:currentID},{firstName,lastName,address,email},{new:true}
        )

        if(updatedUser){
            revalidatePath(pathToRevalidate)
            return {
                succes:true,
            message:'User Updated Successfully'
            }
        }else{
            return {
                success:false,
                message:'Not able to update the user! please try again'
            }
        }

    }catch(error){
        console.log(error)
        return {
            succes:false,
            message:'Something Went Wrong! Please try again later'
        }
    }
    
 }

 //delete

 export async function deleteUserAction(currentID,pathToRevalidate){
    await connectToDB()

    try{
        const deletedUser = await User.findByIdAndDelete(currentID);

        if(deletedUser){
            revalidatePath(pathToRevalidate)
            return {
                success:true,
                message:'User deleted Successfully'
            }
        }else{
            return {
                succes:false,
                message:'Unable to Delete ! please try again'
            }
        }

    }catch(error){
        console.log(error)
        return {
            success: false,
            message:'Something Went Wrong! Please try again later'
        }
    }
 }