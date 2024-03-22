import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center gap-[1rem] h-[52px] py-[.5rem] px-[1rem] bg-white w-full   rounded-full overflow-x-auto overflow-y-hidden'>
            <Link className='p-[.5rem] duration-300 hover:bg-blue-100 px-[1rem] rounded-md text-base ' to='/home'>Home</Link>
            <div className='flex gap-[.4rem] items-center'>
                <button className='p-[.5rem] duration-300 hover:bg-blue-100 px-[1rem] rounded-md text-base '>FAQs</button>
                <Link className='p-[.5rem] duration-300 hover:bg-blue-100 px-[1rem] rounded-md text-base bg-[#FFD700]' to='play'>
                    Play
                </Link>
                <Link className='p-[.5rem] duration-300 hover:bg-blue-100 rounded-md text-base  bg-[#85E8C3]' to='association'>
                    Association
                </Link>
            </div>


        </div>
    )
}

export default NavBar