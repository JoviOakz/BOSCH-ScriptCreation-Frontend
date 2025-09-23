import BrandColors from '../images/brand_colors.png'

export default function Header() {
    return (
        <div className='w-screen h-[10%]'>
            <div className='w-screen h-screen flex flex-col'>
                <img src={BrandColors} className='w-screen h-[2.5%]' />

                <div className='w-screen h-[7.5%] bg-white flex items-center'>
                    <p className='ml-8'>BOSCH LOGO</p>
                </div>
            </div>
        </div>
    )
}