import Header from '../components/Header'
import Dropdown from '../components/Dropdown'
import Card from '../components/Card'
import Textfield from '../components/Textfield'

export default function App() {
    return (
        <div className='w-screen h-screen bg-[#e8e8eb]'>
            <Header />

            <div className='w-screen h-[90%] flex flex-col p-8'>
                <div className='flex flex-row w-[100%] h-[15%] '>
                    <div className='flex flex-col w-1/6'>
                        <span className='ml-2'>Modo</span>
                        <Dropdown>
                            <option value='' hidden>Escolha um modo</option>
                            <option value='1'>Modo 1</option>
                            <option value='2'>Modo 2</option>
                            <option value='3'>Modo 3</option>
                        </Dropdown>
                    </div>

                    <div className='flex flex-col w-1/6'>
                        <span className='ml-2'>Tipo de roteiro</span>
                        <Dropdown>
                            <option value='' hidden>Selecione um tipo de roteiro</option>
                            <option value='1'>Roteiro 1</option>
                            <option value='2'>Roteiro 2</option>
                            <option value='3'>Roteiro 3</option>
                        </Dropdown>
                    </div>

                    <div className='flex flex-col w-1/6'>
                        <span className='ml-2'>Chave de modificação</span>
                        <Textfield>Digite sua chave de modificação...</Textfield>
                    </div>
                </div>

                <Card>
                    TEST CARD
                </Card>
            </div>
        </div>
    )
}