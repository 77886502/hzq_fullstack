const controller = require("egg").Controller;
class UserController extends Controller{
    async index(){
        const {ctx} = this;
        ctx.body = "用户"
    }
}
module.exports = UserController
