let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/sest-project'));

app.get('/*', (req, resp) => {
    resp.sendFile(__dirname+'/dist/sest-project/index.html');
});

app.listen(process.env.PORT || 8080);