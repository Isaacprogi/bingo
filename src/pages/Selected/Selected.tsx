import BingosTable from '../../components/BingosTable/BingosTable'
import { Link } from 'react-router-dom'

const Selected = () => {
    return (
        <div className='w-full  p-[1rem] '>
            <h1 className='text-[2rem] mt-[4rem]'>Popular Bingo's</h1>
            <BingosTable >
                <div className="flex border-b border-gray-400 pb-[1rem] items-center justify-between">
                    <h1 className='text-[2rem]'>Trending Bingo's</h1>
                    <Link to='/all-bingos' className='text-[25px] hover:underline duration-300 cursor-pointer'>See all Bingos</Link>
                </div>
            </BingosTable>
        </div>
    )
}

export default Selected