const jwt = require("jsonwebtoken");
const RefreshTokenRepository = require("../repositories/RefreshTokenRepository");
const { JWT_SECRET, JWT_SECRET_REFRESH_TOKEN, JWT_ACCESS_TOKEN_EXPIRED } =
  process.env;

const RefreshTokenService = {
  async getToken(email, refreshToken) {
    const token = await RefreshTokenRepository.getToken(refreshToken);
    var data = {};

    if (!token) {
      data = {
        code: 400,
        message: "Invalid Token",
        data: null,
      };
    }

    jwt.verify(refreshToken, JWT_SECRET_REFRESH_TOKEN, (err, decoded) => {
      if (err) {
        data = {
          code: 400,
          message: "Invalid Token",
          data: null,
        };
      } else {
        if (email !== decoded.user.email) {
          data = {
            code: 400,
            message: "Email is Not Valid",
            data: null,
          };
        } else {
          const newToken = jwt.sign({ data: decoded.data }, JWT_SECRET, {
            expiresIn: JWT_ACCESS_TOKEN_EXPIRED,
          });

          data = {
            code: 200,
            message: "Success",
            data: {
              access_token: newToken,
            },
          };
        }
      }
    });

    return data;
  },
};

module.exports = RefreshTokenService;
