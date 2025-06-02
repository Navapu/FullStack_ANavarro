/**
 *      HTTP Request Logger
 * 
 *  Create an empty array called logs in db/logs.js
 *  The middleware stores the following information:
 *  - Date and time of the request
 *  - HTTP method used (GET, POST, PUT, DELETE)
 *  - Request URL
 *  - Client's User-Agent
 */
import { logs } from "../db/logs.js";
export const logMiddleware = (req, res, next) => {
    const logEntry = {
        date: new Date().toISOString(),
        method: req.method,
        url: req.originalUrl,
        userAgent: req.headers['user-agent']
    }
    logs.push(logEntry);
    next();
}