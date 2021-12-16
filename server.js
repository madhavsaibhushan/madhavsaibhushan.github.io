const express = require('express');
const app = express();
app.use(requireHTTPS);
app.use(express.static('./dist/ < name - on - package.json >'));

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/<name-on-package.json>/' }
    );
});
console.log(console.log('runnging on port 8080'))
app.listen(process.env.PORT || 8080);