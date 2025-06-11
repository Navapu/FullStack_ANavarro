export const Button = ({ children, onClick, size="md"}) => {

    const sizeClasses = {
        sm: "py-1 px-2 text-sm",
        md: "py-2 px-4 text-base",
        lg: "py-3 px-6 text-lg"
    }
    return (
        <button className={`bg-white text-gray-500 border rounded shadow cursor-pointer ${sizeClasses[size]}`} onClick={onClick}>{children}</button>
    );
}