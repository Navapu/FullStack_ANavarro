"use client"
const Error = ({error}) => {
    return ( 
        <div>
            <h2>Something went wrong...</h2>
            <h3>Error: {error}</h3>
        </div>
     );
}
 
export default Error;