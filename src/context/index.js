
import { addNewUserFormInitialState } from "@/utils";
import { createContext, useState } from "react";



export const UserContext = createContext(null)

export default function UserState({children}){
    const [currentEditedId,setCurrentEditedID] = useState(null)
    const [openAddBox, setopenAddBox] = useState(false)
    const [addNewUserFormData, setAddNewUserFormData] = useState(addNewUserFormInitialState)



    return <UserContext.Provider value={{
        currentEditedId,setCurrentEditedID,
        openAddBox, setopenAddBox,
        addNewUserFormData, setAddNewUserFormData

    }}>{children}</UserContext.Provider>
}