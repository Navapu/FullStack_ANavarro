export const Card = ({children, title}) => {
    return ( 
        <article className="bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200">
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            {children}
        </article>
     );
}