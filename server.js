const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 静的ファイルの提供
app.use(express.static(__dirname));

// ルートへのアクセスをindex.htmlにリダイレクト
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// /galleryへのアクセスをgallery.htmlにリダイレクト
app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'gallery.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});