const ProductService = require('../services/ProductService');

const ProductController = {
    async createProduct(req, res){
        const data = {
            categoryId: req.body.categoryId,
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            publisher: req.body.publisher,
            stock: req.body.stock,
        }

        const save = await ProductService.createProduct(data);
        res.json(save);
    },
    async getAllProducts(req, res){
        const Products = await ProductService.findAllProduct();
        res.json(Products);
    },
    async getProductById(req, res){
        const id = req.params.id;
        const product = await ProductService.getProductById(id);
        res.status(product.code).json(product);
    },
    async updateProduct(req, res){
        const id = req.params.id;
        const data = {
            categoryId: req.body.categoryId,
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            publisher: req.body.publisher,
            stock: req.body.stock,
        }
        const update = await ProductService.updateProduct(id, data);
        res.status(update.code).json(update);
    },
    async deleteProduct(req, res){
        const id = req.params.id;
        const destroyProduct = await ProductService.deleteProduct(id);
        res.status(destroyProduct.code).json(destroyProduct);
    }
}

module.exports = ProductController;