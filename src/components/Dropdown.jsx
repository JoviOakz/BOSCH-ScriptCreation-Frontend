export default function Dropdown({ children }) {
    return (
        <select className='w-[94%] bg-white rounded-lg p-4 shadow-xl'>
            <option value='dropdown_text' hidden>{children}</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
        </select>
    )
}