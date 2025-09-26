export default function Card({ children }) {
    return (
        <div className='w-[100%] h-[85%] bg-white rounded-xl p-4 shadow-xl'>
            {children}
        </div>
    )
}