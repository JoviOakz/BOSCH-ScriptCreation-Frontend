import Header from '../components/Header'
import Card from '../components/Card'
import Dropdown from '../components/Dropdown'

export default function App() {
    return (
        <div className='w-screen h-screen bg-[#e8e8eb]'>
            <Header />

            <div className='w-screen h-[90%] flex flex-col p-8'>
                <div className='flex flex-row w-[100%] h-[15%] '>
                    <div className='flex flex-col w-1/6'>
                        <span className='ml-3'>Modo</span>
                        <Dropdown>Escolha um modo</Dropdown>
                    </div>

                    <div className='flex flex-col w-1/6'>
                        <span className='ml-3'>Modo</span>
                        <Dropdown>Escolha um modo</Dropdown>
                    </div>

                    <div className='flex flex-col w-1/6'>
                        <span className='ml-3'>Modo</span>
                        <Dropdown>Escolha um modo</Dropdown>
                    </div>
                </div>

                <Card>
                    TEST CARD
                </Card>
            </div>
        </div>
    )
}