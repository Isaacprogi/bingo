import React, { useState } from 'react'
import { Bingo } from '../../types/types'
import { FaUserCircle } from 'react-icons/fa'
import Modal from '../common/Modal/Modal'
import { useNavigate } from 'react-router-dom'

interface BingoCardProps {
  bingo: Bingo
}


const BingoRow: React.FC<BingoCardProps> = ({bingo}) => {
  const [showConfirmModal1, setShowConfirmModal1] = useState<boolean>(false)

  const navigate = useNavigate()





  return (
    <>

      {/* <Modal isOpen={showConfirmModal1} onClose={() => setShowConfirmModal1(false)}>
        <div className='w-full p-4 min-h-[20rem] flex flex-col gap-4 items-center justify-center max-w-[30rem] rounded-md bg-white'>
          <h1 className='text-center text-black'>
            Are you sure you want to delete {props.user.username}?
          </h1>
          <div className='flex gap-4'>
            <button className='hover:bg-gray-200 w-[5rem] h-[2rem] flex items-center justify-center' onClick={handleDelete}>
              Confirm
            </button>
            <button className='hover:bg-gray-200 w-[5rem] h-[2rem] flex items-center justify-center' onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </Modal> */}


      <tr  className=" relative hover:bg-gray-200 duration-300 cursor-pointer border-gray-400 border-b" key={bingo.id}>
        <td className="pt-9 flex flex-col text-[25px] pb-1 ">
            <span>{bingo.date}</span>
            <span className='text-[16px] mt-[.5rem]'>{bingo.time}</span>
        </td>
        <td className="pt-9 pb-1 text-[25px] ">{bingo.association}</td>
        <td className="pt-9 pb-1 text-[25px] ">{bingo.firstPrice}</td>
        <td className="pt-9 pb-1 text-[25px] ">{bingo.donation}$</td>
        <td className="pt-9 pb-1 text-[25px] ">{bingo.ticketPrice}$</td>
        <td className={`pt-9 pb-1 text-[25px] `}>
            <button className={`${bingo.status === 'Play'?"bg-[#85E8C3]":"bg-[#6A6A6A] text-white"} p-[.5rem] w-[6rem] duration-300 hover:bg-blue-100 px-[1rem] rounded-md text-base `}>
             {bingo.status === 'Play'?'Play':'Finished'}
            </button>
        </td>
      </tr>
   
    </>
  )
}

export default BingoRow