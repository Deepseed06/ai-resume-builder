import { Loader2, PlusSquare } from 'lucide-react'
import React from 'react'
import {Button} from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
 
import {Input} from "@/components/ui/input"
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from '../../../service/GlobalApi'
import { useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'


const AddResume = () => {
  const [openDialog, setOpenDialog] = React.useState(false)
  const [resumeTitle, setResumeTitle] = React.useState(false )
  const [loading, setLoading] = React.useState(false)
  const {user} = useUser()
  const navigation = useNavigate();
  const onCreate = () => {
    // Call the API to create a new resume with the title
    setLoading(true)
    const uuid = uuidv4()
    const data = {
      data:{
        title: resumeTitle,
        resumeId: uuid,
        userEmail:user?.primaryEmailAddress?.emailAddress,
        userName:user?.fullName,
      }
    }
    GlobalApi.createNewResume(data).then((res) => {
      console.log(res)
      if(res){

        setLoading(false)
        navigation(`/dashboard/resume/${res.data.data.documentId}/edit`)
        
      }
      // Handle success response
    }).catch((err) => {
      setLoading(false)
      console.log(err)
      // Handle error response
    })
    setOpenDialog(false)
  }
  return (
    <div>
      <div onClick={() => setOpenDialog(true)} className='p-14 py-24 border items-center 
      flex justify-center bg-secondary rounded-lg h-[280px]
      hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed '>
        <PlusSquare/>
      </div>

      <Dialog open={openDialog} onOpenChange={() => setOpenDialog(false)}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Resume</DialogTitle>
      <DialogDescription>
       <>Add a title for your new resume</>
        <Input onChange={(e) => setResumeTitle(e.target.value)} className='my-2' placeholder='Ex. Full Stack Resume'/>
      </DialogDescription>
      <div className='flex justify-end gap-5'>
        <Button  onClick={() => setOpenDialog(false)} variant={'ghost'}>Cancel</Button>
        <Button disabled={!resumeTitle || loading} onClick={()=>onCreate()}>
          {
            loading ? <Loader2 className='animate-spin'/> : 'Create'
          }
        </Button>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddResume