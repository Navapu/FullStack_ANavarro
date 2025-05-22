import {Link} from 'react-router'
const Error = () => {
    return ( 
        <>
        <h1 style={{color: "red"}}>Error: 404</h1>
        <Link to="/">Home</Link>
        </>
     );
}
 
export default Error;