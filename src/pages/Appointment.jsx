import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {
  const {docId} = useParams()
  const {doctors} = useContext(AppContext)
  const[docInfo,setDocInfo] = useState(null)
  const[docSlots,setDocSlots] = useState([])
  const[slotIndex,setSlotIndex] = useState(0)
  const[slotTime,setSlotTime] = useState('')

  const fetchDocInfo = async()=>{
    const docInfo = doctors.find(doc=>doc.id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async()=>{
    setDocSlots([])
    let today = new Date()
    for(let i=0; i<7; i++){
      let currentDate = new Date(today)
      currentDate.setDate()
    }
  }

  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])

  useEffect(()=>{
    getAvailableSlots()
  },[docInfo])

  return docInfo && (
    <div>
      {/*---doctors details---*/}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/*---doc info---*/}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} <img src={assets.verified_icon} alt="" /></p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          {/*---doct about---*/}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment