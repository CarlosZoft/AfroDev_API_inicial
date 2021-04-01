const configExpress = require('./configExpress');
const conection = require("./database/conection");
const Tables = require("./database/Tables");


conection.connect(error => {

    if(error) {
        throw error;
    }
    
    Tables.init(conection);
        
    const app = configExpress();    
    
    app.listen(3030, () => console.log("App runing..."));
 
  
})