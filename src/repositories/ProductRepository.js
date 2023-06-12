const { Product } = require('../models');

const ProductRepository = {
    async getAllProduct(){
        return await Product.findAll({
            include:'category'
        });
    },

    async getProductById(id){
        return await Product.findByPk(id);
    },

    async getProductByEmail(email){
        return Product.findOne({
            where: {email: email}
        });
    },
    
    async createProduct(data){
        return await Product.create(data);
    },

    async updateProduct(id, data){
        const product = await Product.findByPk(id);
        return await product.update(data);
    },

    async deleteProduct(id){
        return await Product.destroy({
            where: {
                id: id,
            }
        });
    }
}

module.exports = ProductRepository;