export default function Card({ children }) {
    return (
        <div className="w-[100%] h-[85%] bg-white rounded-2xl p-4">
            {children}
        </div>
    )
}