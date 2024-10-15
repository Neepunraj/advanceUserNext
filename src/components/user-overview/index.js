'use client'

import { useEffect } from "react"
import AddNewUser from "../add-new-user"
import SingleCard from "../single-user-card"



export default function UserOverView({fetchAllUsers}){
   
  


    return <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-purple-500 to-blue-600">
        <AddNewUser />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
           {
            fetchAllUsers && fetchAllUsers.data && fetchAllUsers.data.length>0 ?fetchAllUsers.data.map(item=>(
                <SingleCard item={item} key={item._id} />
            )):null
           }

        </div>

    </div>
}