const { RefreshToken } = require('../models');

const RefreshTokenRepository = {
    async create(data){
        return await RefreshToken.create(data);
    },
    async getToken(refreshToken){
        return await RefreshToken.findOne({
            where: { token: refreshToken }
        });
    }
}

module.exports = RefreshTokenRepository;