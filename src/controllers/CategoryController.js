const CategoryService = require('../services/CategoryService');
const Validator = require('fastest-validator');
const v = new Validator();

const CategoryControler = {
    async getAllCategory(req, res){
        const category = await CategoryService.getAllCategory();
        res.json(category);
    },
    async getCategoryById(req, res){
        const id = req.params.id;
        const category = await CategoryService.getCategoryById(id);
        res.status(category.code).json(category);
    },
    async createCategory(req, res){
        const schema = {
            name: 'string|empty:false'
        }

        const validate = v.validate(req.body, schema);

        if(validate.length){
            return res.status(400).json({
                code: 400,
                message: 'Validation Error',
                data: validate,
            });
        }

        const data = {
            name: req.body.name,
        }

        const save = await CategoryService.createCategory(data);
        res.status(save.code).json(save);
    },
    async updateCategory(req, res){
        const id = req.params.id;

        const schema = {
            name: 'string|empty:false'
        }

        const validate = v.validate(req.body, schema);

        if(validate.length){
            return res.status(400).json({
                code: 400,
                message: 'Validation Error',
                data: validate,
            });
        }

        const data = {
            name: req.body.name,
        }

        const update = await CategoryService.updateCategory(id, data);
        res.status(update.code).json(update);
    },
    async deleteCategory(req, res){
        const id = req.params.id;

        const deleteCategory = await CategoryService.deleteCategory(id);
        res.status(deleteCategory.code).json(deleteCategory);
    }
}

module.exports = CategoryControler;