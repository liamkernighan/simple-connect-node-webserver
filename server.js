
const connect = require('connect');
const serveStatic = require('serve-static');
const port = 8080;
connect().use(serveStatic('./public')).listen(port, () => {
    console.log(`server is running on port ${port}`);
})