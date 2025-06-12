const users = [
    {
        id: 1,
        name: 'Alejandro',
        email: 'alejandro@gmail.com'
    }, {
        id: 2,
        name: 'Juan',
        email: 'juan@gmail.com'
    }
];
export const GET = async (req, {params}) => {
    const {id} = await params;

    const user = users.find(user => user.id === Number(id));

    const ResponseAPI = {
        msg: user ? "User obtained" : "User not found",
        data: user || null,
        status: user ? "ok" : "error"
    };

    return new Response(JSON.stringify(ResponseAPI), {
        status: user ? 200 : 404,
        headers: { 'Content-Type': 'application/json' }
    })

}
export const DELETE = async (req, {params}) => {

}