/**
 *      Unique Request ID Middleware
 * 
 *  Assigns a unique ID to each incoming HTTP request.
 *  The middleware adds a new property to the `req` object:
 *  - requestID: a unique identifier (UUID v4) for the request
 * 
 *  This can be useful for identifying individual requests.
 */
import {v4 as id} from 'uuid'
export const uniqueIDWare = (req, res, next) => {
    req.requestID = id();
    console.log(`Request ID: ${req.requestID}`)
    next();
}