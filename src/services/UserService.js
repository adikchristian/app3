const UserRepository = require("../repositories/UserRepository");

const UserService = {
  async getAllUsers() {
    const user = await UserRepository.getAllUser();

    return {
      code: 200,
      message: "Success",
      data: user,
    };
  },

  async checkAvailableUserById(id) {
    const user = await UserRepository.getuserById(id);

    if (user) {
      return true;
    }

    return false;
  },

  async getUserById(id) {
    const check = await this.checkAvailableUserById(id);

    if (check) {
      return {
        code: 200,
        message: "Success",
        data: await UserRepository.getuserById(id),
      };
    } else {
      return {
        code: 404,
        message: "User not Found",
        data: null,
      };
    }
  },

  async createUser(data) {
    const checkEmail = await UserRepository.getUserByEmail(data.email);

    if (checkEmail) {
      return {
        code: 409,
        message: "Email already exist",
        data: null,
      };
    }

    const save = await UserRepository.createUser(data);

    if (save) {
      return {
        code: 200,
        message: "Data Berhasil disimpan",
        data: data,
      };
    } else {
      return {
        code: 500,
        message: "Server Is Not Working",
        data: null,
      };
    }
  },

  async updateUser(id, data) {
    const checkAvailable = await this.checkAvailableUserById(id);

    if (checkAvailable) {
      const user = await UserRepository.getuserById(id);
      const email = data.email;
      if (email) {
        const checkEmail = await UserRepository.getUserByEmail(email);
        if (checkEmail && email !== user.email) {
          return {
            code: 409,
            message: "Email already exist",
            data: null,
          };
        }
      }

      const update = await UserRepository.updateUser(id, data);

      if (update) {
        return {
          code: 200,
          message: "Data Berhasil disimpan",
          data: data,
        };
      } else {
        return {
          code: 500,
          message: "Server Is Not Working",
          data: null,
        };
      }
    } else {
      return {
        code: 404,
        message: "User not Found",
        data: null,
      };
    }
  },

  async deleteUser(id) {
    const checkAvailable = await this.checkAvailableUserById(id);

    if (checkAvailable) {
      const deleteUser = await UserRepository.deleteUser(id);
      if (deleteUser) {
        return {
          code: 200,
          message: "Data Berhasil dihapus",
          data: null,
        };
      } else {
        return {
          code: 500,
          message: "Server Is Not Working",
          data: null,
        };
      }
    } else {
      return {
        code: 404,
        message: "User not Found",
        data: null,
      };
    }
  },
};

module.exports = UserService;
