"use client"

import { Label } from "@radix-ui/react-label"
import { Button } from "../ui/button"
import {
    Dialog,
    DialogContent,

    DialogHeader,
    DialogTitle,

    DialogFooter
} from "@/components/ui/dialog"
import { Input } from "../ui/input"
import { Fragment, useContext, useEffect, useState } from "react"
import { addNewUserFormControls, addNewUserFormInitialState } from "@/utils"
import { addNewUSerAction, EditUserAction } from "@/actions"
import { UserContext } from "@/context"





export default function AddNewUser() {
    const{currentEditedId,setCurrentEditedID,
        openAddBox, setopenAddBox,
        addNewUserFormData, setAddNewUserFormData} = useContext(UserContext)
   
   

    function handleSaveButtonValid() {
        return Object.keys(addNewUserFormData).every(
            (key) => addNewUserFormData[key].trim() !== ""
        );
    }
    async function handleAddNewUSerAction() {
        const result =currentEditedId!== null?await EditUserAction(currentEditedId,addNewUserFormData,'/user-management'): await addNewUSerAction(addNewUserFormData,"/user-management")
        setopenAddBox(false)
        setAddNewUserFormData(addNewUserFormInitialState)
        


    }
   

    return (
        <Fragment>
            <div className="mt-4">
                <Button onClick={() => setopenAddBox(true)}>Add New User</Button>
                <Dialog open={openAddBox} onOpenChange={() => {
                    setopenAddBox(false)
                    setAddNewUserFormData(addNewUserFormInitialState)
                }}>

                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>{currentEditedId!== null?'Edit User':'Add New User'}</DialogTitle>

                        </DialogHeader>
                        <form action={handleAddNewUSerAction} className="grid gap-4 py-4">


                            {
                                addNewUserFormControls.map(controlItem => (
                                    <div key={controlItem.name} className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor={controlItem.name} className="text-right">
                                            {controlItem.label}
                                        </Label>
                                        <Input
                                            id={controlItem.name}
                                            placeholder={controlItem.placeholder}
                                            type={controlItem.type}
                                            className="col-span-3"
                                            value={addNewUserFormData[controlItem.name]}
                                            onChange={(e) =>
                                                setAddNewUserFormData({
                                                    ...addNewUserFormData,
                                                    [controlItem.name]: e.target.value
                                                })

                                            }

                                        />


                                    </div>
                                ))
                            }

                            <DialogFooter>
                                <Button className='disabled:opacity-55'

                                    type="submit">Save </Button>
                            </DialogFooter>

                        </form>

                    </DialogContent>
                </Dialog>

            </div>



        </Fragment>
    )
}