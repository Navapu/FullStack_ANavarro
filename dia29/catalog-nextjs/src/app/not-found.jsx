const NotFound = () => {
    return ( 
        <div className="text-center mt-12">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
            <a href="/" className="text-blue-500 hover:underline">Go back to Home</a>
        </div>
     );
}
 
export default NotFound;