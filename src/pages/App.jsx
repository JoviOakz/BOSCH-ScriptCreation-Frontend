import Header from '../components/Header'
import Card from '../components/Card'

export default function App() {
    return (
        <div className='w-screen h-screen bg-[#EFEFF0]'>
            <Header />

            <div className='w-screen h-[90%] flex flex-col p-8'>
                <div className='w-[100%] h-[15%] bg-amber-100' />

                <Card>
                    TEST CARD
                </Card>
            </div>
        </div>
    )
}