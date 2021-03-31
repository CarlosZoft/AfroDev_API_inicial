const configExpress = require('./configExpress');
const app = configExpress();

app.listen(3030, () => console.log("App running"))