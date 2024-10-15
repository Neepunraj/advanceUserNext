
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import { deleteUserAction, EditUserAction } from "@/actions"
import { useContext } from "react"
import { UserContext } from "@/context"




export default  function SingleCard({item}) {
    const {
        setCurrentEditedID,
        setopenAddBox,
        setAddNewUserFormData
    } = useContext(UserContext)

    async function handledeletebyId(currID){
        const result = await deleteUserAction(currID,'/user-management')
    
    }
    async function handleEditbyID(cUser) {
        setopenAddBox(true)
        setAddNewUserFormData({
            firstName:cUser?.firstName,
            lastName:cUser?.lastName,
            email:cUser?.email,
            address:cUser?.address
        })
        setCurrentEditedID(cUser?._id)
        
    
       
        
    }
    


    
    return <Card className='p-5 ml-5 cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg' >
        <CardHeader>
            <CardTitle>{item.firstName} {item.lastName}</CardTitle>

        </CardHeader>
        <CardContent>
            <div className="flex justify-between">
            <CardDescription >{item.email}</CardDescription>
            <CardDescription >{item.address}</CardDescription>

            </div>

            
            <div className="mt-5 flex gap-4 justify-center items-center">
                <Button
                    onClick={() => handleEditbyID(item)}
                    className='w-full'>Edit</Button>
                <Button className='w-full'
                    onClick={() => {
                        handledeletebyId(item._id)
                    }}>Delete</Button>
            </div>
        </CardContent>

    </Card>
}