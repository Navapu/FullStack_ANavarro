import { useParams, Link, useSearchParams } from "react-router";
const Contact = () => {

    //contactId come from <Route path="/contact/contactId" />
    const {contactId} = useParams()

    const [searchParams] = useSearchParams();
    const price = searchParams.get("price") //?price=15
    const dist = searchParams.get("dist") //?dist=1000
    return ( 
        <div>
            <h1>Contact</h1>
            <h3>Route Params (useParams)</h3>

            <p><Link to='try-123'>try-123</Link></p>
            {contactId && <p>The contact id is: {contactId}</p>}

            <h3>Search Params (useSearchParams)</h3>

            <ul>
                <li>?dist={dist}</li>
                <li>?price= {price}</li>
            </ul>
        </div>
     );
}
 
export default Contact;