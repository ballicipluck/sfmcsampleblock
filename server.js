var express = require('express');
var app = express();

app.use('/', express.static('dist'));
// If users visit url/v2, they should see the dis2 content
app.use('/v2', express.static('dist2'));
app.listen(8878, function () {console.log('Example app listening on port ' + 8878);});

