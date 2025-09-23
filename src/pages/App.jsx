import Fita from '../images/header.png'

export default function App() {
    return (
        <div className='w-screen h-screen bg-[#EFEFF0]'>
            <img src={Fita} className='w-screen h-[2.5%]' />

            <div className='w-screen h-[7.5%] bg-white'>
                <img src="Logo" />
            </div>

            <div className='w-screen h-[90%]'>
                <div className='w-[100%] h-[20%] bg-amber-100'>

                </div>

                <div className='w-[100%] h-[80%] bg-amber-200'>

                </div>
            </div>
        </div>
    )
}