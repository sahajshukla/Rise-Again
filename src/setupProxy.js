const proxy = require('http-proxy-middleware');
module.exports = function(app){
  app.use(
    proxy("/feelings",{
      target:"http://localhost:5000",
      changeOrigin:true,
      secure:false
    })
  );
  app.use(
    proxy("/score",{
      target:"http://localhost:5000",
      changeOrigin:true,
      secure:false
    })
  );
}
