module.exports = app => {
    // app egg.js plugins sequelize
    const {STRING,INTEGER,DATE} = app.Sequelize;
    const User = app.model.define('user',{
        id:{type:INTEGER,primaryKey:true,autoIncrement:true},
        name:STRING(30),
        age:INTEGER,
        created_at:DATE,
        update_at:DATE
    });
    return User;
}