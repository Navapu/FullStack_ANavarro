/**
 *      User Validator Middleware
 * 
 *  This middleware validates the presence of required fields in the request body for add a user.
 *  Specifically, it checks for the existence of:
 *  - `name`
 *  - `age`
 * 
 *  If either field is missing, the server responds with a `400 Bad Request` status
 *  and an appropriate error message.
 * 
 *  Otherwise, the request is passed to the next handler.
 */
export const validateMiddleware = (req, res, next) => {
    const {name, age} = req.body;
    if(!name || !age){
        return res.status(400).json({msg: "You have to add the name and the age."})
    }
    next();
}