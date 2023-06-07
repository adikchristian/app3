const CategoryRepository = require('../repositories/CategoryRepository');

const CategoryService = {
    async getAllCategory(){
        const category = await CategoryRepository.getAllCategory();

        return {
            code: 200,
            message: "Success",
            data: category,
        }
    },
    async checkAvailableCategoryById(id){
        const check = await CategoryRepository.getCategoryById(id);

        if(check){
            return true;
        }

        return false;
    },
    async getCategoryById(id){
        const check = await this.checkAvailableCategoryById(id);

        if(check){
            return {
                code: 200,
                message: 'Success',
                data: await CategoryRepository.getCategoryById(),
            }
        }else{
            return {
                code: 404,
                message: 'Category Not Found',
                data: null,
            }
        }
    },
    async createCategory(data){
        const save = await CategoryRepository.createCategory(data);

        if(save){
            return {
                code: 200,
                message: 'Data Berhasil disimpan',
                data: data,
            }
        }else{
            return {
                code: 500,
                message: 'Server Is Not Working',
                data: null
            }
        }
    },
    async updateCategory(id, data){
        const check = await this.checkAvailableCategoryById(id);

        if(check){
            const update = await CategoryRepository.updateCategory(id, data);
            if(update){
                return {
                    code: 200,
                    message: 'Data Berhasil disimpan',
                    data: data,
                }
            }else{
                return {
                    code: 500,
                    message: 'Server Is Not Working',
                    data: null
                }
            }
        }else{
            return {
                code: 404,
                message: 'Category Not Found',
                data: null,
            }
        }
    },
    async deleteCategory(id){
        const check = await this.checkAvailableCategoryById(id);

        if(check){
            const deleteCategory = await CategoryRepository.deleteCategory(id);
            if(deleteCategory){
                return {
                    code: 200,
                    message: 'Data Berhasil dihapus',
                    data: null,
                }
            }else{
                return {
                    code: 500,
                    message: 'Server Is Not Working',
                    data: null
                }
            }
        }else{
            return {
                code: 404,
                message: 'Category Not Found',
                data: null,
            }
        }
    } 
}

module.exports = CategoryService;