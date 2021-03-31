const configExpress = require('./configExpress');
const conection = require("./database/conection")
const app = configExpress();

conection.connect(async err => {
    try{
        app.listen(3030, () => console.log("App runing..."));
    }
    catch(err){
        console.error(err);
    }    
})