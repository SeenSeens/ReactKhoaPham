// Khai báo thư viện express
var express = require('express');
// Tạo biến app sử dụng express
var app = express();
// Dùng thư mục public
app.use(express.static("public"));
// Dùng engine là ejs
app.set('view engine', 'ejs');
app.set('views', './views');
// Mở port 3000
app.listen(3000);

app.get('/', function(req, res) { // req: gửi, res: trả
	res.render('trangchu');
});