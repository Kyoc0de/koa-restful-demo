class HomeCtl {
    index(){
        ctx.body = '<h1>这是主页</h1>'
    }
}

module.exports = new HomeCtl()