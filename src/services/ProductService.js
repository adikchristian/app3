const ProductRepository = require('../repositories/ProductRepository');

const ProductService = {
    async createProduct(data){
        const save = await ProductRepository.createProduct(data);

        if(save){
            return {
                code: '200',
                message: 'Data berhasil disimpan',
                data: save,
            }
        }else{
            return {
                code: '500',
                message: 'Data Gagal disimpan',
                data: null,
            }
        }
    },
     async findAllProduct(){
        const Products = await ProductRepository.getAllProduct();
        return {
            code: 200,
            message: 'success',
            data: Products,
        }
     },
     async checkAvailableProductById(id){
        const check = await ProductRepository.getProductById(id);

        if(check){
            return true;
        }

        return false;
    },
    async getProductById(id){
        const check = await this.checkAvailableProductById(id);

        if(check){
            return {
                code: 200,
                message: 'Success',
                data: await ProductRepository.getProductById(id),
            }
        }else{
            return {
                code: 404,
                message: 'Category Not Found',
                data: null,
            }
        }
    },
    async updateProduct(id, data){
        const check = await this.checkAvailableProductById(id);

        if(check){
            const update = await ProductRepository.updateProduct(id, data);
            if(update){
                return {
                    code: 200,
                    message: 'Data Berhasil disimpan',
                    data: update,
                }
            }else{
                return {
                    code: 500,
                    message: 'Server Not Wokring',
                    data: null,
                }
            }
        }else{
            return {
                code: 404,
                message: 'Product Not Found',
                data: null,
            }
        }
    },
    async deleteProduct(id){
        const check = this.checkAvailableProductById(id);

        if(check){
            const deleteProduct = await ProductRepository.deleteProduct(id);

            if(deleteProduct){
                return {
                    code: 200,
                    message: 'Data Berhasil dihapus',
                    data: null,
                }
            }else{
                return {
                    code: 500,
                    message: 'Server Not Wokring',
                    data: null,
                }
            }
        }else{
            return {
                code: 404,
                message: 'Product Not Found',
                data: null,
            }
        }
    }
}

module.exports = ProductService;