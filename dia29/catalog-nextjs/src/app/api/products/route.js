const products = [
    {id: 1, name: "FordFiesta", price: 15000},
    {id: 2, name: "SeatIbiza", price: 20000}
]

export const GET = async(req) => {
    const searchParams = req.nextUrl.searchParams;
    const name = searchParams.get("name");
    const price = searchParams.get("price")

    const findedProducts = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    const ResponseAPI = {
        msg: "Products",
        data: findedProducts,
        status: "ok"
    }

    return new Response(JSON.stringify(ResponseAPI), {status: 200});
}