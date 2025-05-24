import React from 'react'
import AddResume from './AddResume'
import { useUser } from '@clerk/clerk-react'
import GlobalApi from '../../../service/GlobalApi'
import ResumeItem from '../../components/ResumeItem'

const Dashboard = () => {
  const {user} = useUser()

  const [resumeList, setResumeList] = React.useState([])

  const getResumeList = () => {
    // Call the API to get the list of resumes for the user
    GlobalApi.getUserResumes(user?.primaryEmailAddress?.emailAddress).then((res) => {
      console.log(res.data.data)
      if(res){
        setResumeList(res.data.data)
        // setLoading(false)
      }
      // Handle success response
    }).catch((err) => {
      // setLoading(false)
      console.log(err)
      // Handle error response
    })
  }
  React.useEffect(() => {
    getResumeList()
  }, [user])

  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>

      <p>Start Creating AI resume for your next Job role</p>

      <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5'>
        <AddResume/>
        {
          resumeList&&resumeList.map((resume,index) => (
           <ResumeItem key={index} resume={resume} getResumeList={getResumeList} />
          ))
        }
      </div>

    </div>
  )
}

export default Dashboard