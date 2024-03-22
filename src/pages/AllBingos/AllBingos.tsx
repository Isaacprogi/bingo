import BingosTable from '../../components/BingosTable/BingosTable'
import { BiSearchAlt } from 'react-icons/bi'
import { BiFilterAlt } from 'react-icons/bi'

const AllBingos = () => {
    return (
        <div className='w-full  p-[1rem] '>
            <h1 className='text-[2rem] mt-[2rem]'>Bingo's</h1>
            <BingosTable >
                <div className=" flex text-base justify-end gap-[1rem] border-b border-gray-400 pb-[1rem] items-center ">
                    <div className='flex hover:bg-blue-100 duration-300 cursor-pointer group gap-[.2rem] items-center bg-white px-[1rem] py-[.5rem] rounded-md'>
                    <BiSearchAlt/>
                    <input placeholder='search' type="text" className='flex-1 bg-[inherit] outline-none' />
                    </div>
                    <div className='flex hover:bg-blue-100 duration-300 cursor-pointer gap-[.2rem] items-center bg-white px-[1rem] py-[.5rem] rounded-md'>
                        <BiFilterAlt/>
                        <span>Filters</span>
                    </div>
                </div>
            </BingosTable>
        </div>
    )
}

export default AllBingos