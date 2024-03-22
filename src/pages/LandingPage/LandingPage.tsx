import ball from '../../assets/ball.svg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='w-full  flex flex-col sm:flex-row font-[400] bg-[#D9D9D9]  min-h-full'>
      <div className=' flex-1 bg-red-500 sm:flex-none overflow-hidden lg:w-[583px]'>
        <img src={ball} className='w-full h-full object-cover' alt="" />
      </div>
      <div className='flex-1 p-[1rem] flex  items-center justify-center'>
        <div className='flex flex-col items-center justify-center w-full max-w-[28rem] text-center'>
          <h1 className='text-[2rem] '>Welcome to Association/Club!</h1>
          <p className='text-base leadin-[22.4px]  text-[#000000]'>With bingo, make a difference! seize the opportunity to create positive change. Sign up now to host bingo events, manage payments,
            and support your charitable causes. Join us in making an impact today!</p>
          <Link to='/login' className='h-[43px] duration-300 text-[#0047FF] cursor-pointer hover:bg-blue-100 bg-white w-full mt-[1rem] rounded-md text overflow-hidden h-[3rem] flex items-center justify-center'>Login </Link>
          <Link to='/create-account' className='h-[43px] duration-300 text-[#0047FF] shadow-[0px 4px 20px 0px #0000001A] cusor-pointer hover:bg-blue-100 bg-white w-full mt-[1rem] rounded-md text overflow-hidden h-[3rem] flex items-center justify-center'>Create Account</Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage