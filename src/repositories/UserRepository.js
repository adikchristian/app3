const { User } = require('../models');

const UserRepository = {
    async getAllUser(){
        return await User.findAll();
    },

    async getuserById(id){
        return await User.findByPk(id);
    },

    async getUserByEmail(email){
        return User.findOne({
            where: {email: email}
        });
    },
    
    async createUser(data){
        return await User.create(data);
    },

    async updateUser(id, data){
        const user = await User.findByPk(id);
        return await user.update(data);
    },

    async deleteUser(id){
        return await User.destroy({
            where: {
                id: id,
            }
        });
    }
}

module.exports = UserRepository;