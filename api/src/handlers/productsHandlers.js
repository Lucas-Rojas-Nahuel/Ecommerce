const products = [
    {id:1, name:'Producto 1', price: 100},
    {id:2, name:'Producto 2', price: 100}
];

const getProductsHandler = (req, res)=>{
    res.json(products);
};

const getProductByIdHandler= (req, res)=>{
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Producto no encontrado');
    res.json(product);
};

module.exports= {
    getProductsHandler,
    getProductByIdHandler,
}