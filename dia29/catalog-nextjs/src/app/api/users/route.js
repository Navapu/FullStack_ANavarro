const ResponseAPI = {
    msg: "Users obtained",
    data: [],
    status: "ok"
}
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
export const GET = () => {
    ResponseAPI.msg = "Users obtained";
    ResponseAPI.data = users
    return new Response(JSON.stringify(ResponseAPI), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    })
}
export const POST = async (req) => {
    const body = await req.json();
    const {name, email} = body;

    const newUser = {
        id: Date.now(),
        name,
        email
    };
    ResponseAPI.msg = "User created"
    ResponseAPI.data = newUser
    users.push(newUser);
    return new Response(JSON.stringify(ResponseAPI), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    })

}