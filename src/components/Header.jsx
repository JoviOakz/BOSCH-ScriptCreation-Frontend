import BrandColors from '../images/brand_colors.png'
import Logo from '../images/bosch_logo.png'

export default function Header() {
    return (
        <div className='w-screen h-[10%]'>
            <div className='w-screen h-screen flex flex-col'>
                <img src={BrandColors} className='w-screen h-[2.5%]' />

                <div className='w-screen h-[7.5%] bg-white flex items-center'>
                    <img src={Logo} className='w-[10%] ml-8 mt-0.5'></img>
                </div>
            </div>
        </div>
    )
}