const UserService = require('../services/UserService');
const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const v = new Validator();

const UserController = {
    async getAllUsers(req, res){
        const users = await UserService.getAllUsers();
        res.json(users);
    },

    async getuserById(req, res){
        const id = req.params.id
        const user = await UserService.getUserById(id);
        res.status(user.code).json(user);
    },

    async createuser(req, res){
        const schema = {
            name: 'string|empty:false',
            email: 'email|empty:false',
            password: 'string|min:6'
        }

        const validate = v.validate(req.body, schema);

        if(validate.length){
            return res.status(400).json({
                code: 400,
                message: 'Validation Error',
                data: validate,
            });
        }

        const password = await bcrypt.hash(req.body.password, 10);

        const data ={
            name: req.body.name,
            role: req.body.role,
            email: req.body.email,
            password,
        }

        const user = await UserService.createUser(data);
        return res.status(user.code).json(user);
    },

    async updateUser(req, res){
        const schema = {
            name: 'string|empty:false',
            email: 'email|empty:false',
            password: 'string|min:6'
        }

        const validate = v.validate(req.body, schema);

        if(validate.length){
            return res.status(400).json({
                code: 400,
                message: 'Validation Error',
                data: validate,
            });
        }
        const id = req.params.id;

        const password = await bcrypt.hash(req.body.password, 10);

        const data ={
            name: req.body.name,
            role: req.body.role,
            email: req.body.email,
            password,
        }

        const user = await UserService.updateUser(id, data);
        return res.status(user.code).json(user);
    },

    async deleteUser(req, res){
        const id = req.params.id
        const user = await UserService.deleteUser(id);
        res.status(user.code).json(user);
    },
}

module.exports = UserController;