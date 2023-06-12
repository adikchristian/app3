const RefreshTokenService = require('../services/RefreshTokenService');

const RefreshTokenController = {
    async getNewRefreshToken(req, res){
        const refreshToken = req.body.refreshToken;
        const email = req.body.email;

        const generateNeToken = await RefreshTokenService.getToken(email, refreshToken);
        console.log(generateNeToken);
        res.status(generateNeToken.code).json(generateNeToken);
    }   
}

module.exports = RefreshTokenController;