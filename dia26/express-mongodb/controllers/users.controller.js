export const getUsers = (req, res, next) => {
    try{
        console.log("Getting all the users...")
        res.status(200).json({msg: 'Completed'})
    }catch(error){
        next(error)
    }
}