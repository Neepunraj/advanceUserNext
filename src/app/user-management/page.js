import { fetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import UserOverView from "@/components/user-overview";

export default async function UserManagement(){
    const fetchAllUsers = await fetchUsersAction()
    

    return (
        <UserOverView fetchAllUsers={fetchAllUsers} />
       
    )
}