export default function Dropdown({ children }) {
    return (
        <select className='w-[90%] bg-white rounded-lg p-4 shadow-xl'>
            {children}
        </select>
    )
}