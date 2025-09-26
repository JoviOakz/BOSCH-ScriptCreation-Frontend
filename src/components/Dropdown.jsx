export default function Dropdown({ children }) {
    return (
        <select className='w-[60%] bg-white rounded-xl p-4 shadow-xl'>
            <option value='dropdown_text' hidden>{children}</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
        </select>
    )
}