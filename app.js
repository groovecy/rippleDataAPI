var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var locals = {
    title: 'Ripple Data API',
    description: 'Page Description'
};

app.set('view engine', 'ejs');

router.use(function (req, res, next) {
    console.log("client ip: " + req.ip);
    next();
});

router.get("/", function (req, res) {
    res.render('ledger', locals);
});

router.get("/transactions", function (req, res) {
    res.render('templates/account/transactions', locals);
});

router.get("/payments", function (req, res) {
    res.render('templates/account/payments', locals);
});

app.use("/", router);

app.use('/scripts', express.static(__dirname + '/scripts/'));
app.use('/styles', express.static(__dirname + '/styles/'));
app.use('/datetimepicker', express.static(__dirname + '/node_modules/jquery-datetimepicker/'));

// app.use("*", function (req, res) {
//     res.render('404', locals);
// });

app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})