const Landing = () => {
    const BACKEND_API = import.meta.env.VITE_BACKEND_API;
    return ( 
        <div>
            <h1 className="text-2xl font-bold mb-4">Im' landing</h1>
            <h3 className="mt-2">My backend API Url is: {BACKEND_API}</h3>
        </div>
     );
}
 
export default Landing;