const { Category } = require('../models');

const CategoryRepository = {
    async getAllCategory(){
        return await Category.findAll();
    },
    async getCategoryById(id){
        return await Category.findByPk(id);
    },
    async createCategory(data){
        return await Category.create(data);
    },
    async updateCategory(id, data){
        const category = await Category.findByPk(id);
        return await category.update(data);
    },
    async deleteCategory(id){
        return await Category.destroy({
            where:{
                id: id,
            }
        });
    }
}

module.exports = CategoryRepository;