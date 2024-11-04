import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const {speciality} = useParams()
  const[filterDoc,setFilterDoc] = useState([])
  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)
  const applyFilter = ()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality === spaciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])

  return (
    <div>
      <p className='text-gray-600'>Browse through the vets specialities.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=>speciality === 'General practitioner'?navigate('/doctors'):navigate('/doctors/General practitioner')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General practitioner"?"bg-indigo-100 text-black":""}`}>General practitioner</p>
          <p onClick={()=>speciality === 'Cardiology'?navigate('/doctors'):navigate('/doctors/Cardiology')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Cardiology"?"bg-indigo-100 text-black":""}`}>Cardiology</p>
          <p onClick={()=>speciality === 'Neurology'?navigate('/doctors'):navigate('/doctors/Neurology')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurology"?"bg-indigo-100 text-black":""}`}>Neurology</p>
          <p onClick={()=>speciality === 'Behavior'?navigate('/doctors'):navigate('/doctors/Behavior')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Behavior"?"bg-indigo-100 text-black":""}`}>Behavior</p>
          <p onClick={()=>speciality === 'Surgery'?navigate('/doctors'):navigate('/doctors/Surgery')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Surgery"?"bg-indigo-100 text-black":""}`}>Surgery</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item,index)=>(
                <div onClick={()=>navigate(`/appointments/${item.id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors