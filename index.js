const express = require('express');
const path = require('path');
const { readdirSync, statSync, existsSync } = require('fs');

const app = express();
const port = 3000; 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:page', (req, res) => {
    const page = req.params.page;
    const filePath = path.join(__dirname, 'public', 'routes', `${page}.html`);

    res.sendFile(filePath, err => {
        if (err) {
            const UNKNOWN_PAGE = path.join(__dirname, 'public', 'routes', `404.html`);

            res.sendFile(UNKNOWN_PAGE);
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'routes', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/reviews/:type*', (req, res) => {
    const folderPath = path.join(__dirname, 'public/reviews', req.params.type.toLowerCase()  );
    if (existsSync(folderPath) && statSync(folderPath).isDirectory()) {
        try {
            const imageFiles = getImages(folderPath);
            res.json(imageFiles);
        } catch (err) {
            res.status(500).send('Unable to scan directory');
        }
    } else {
        res.status(404).send({ error: 'Folder not found'});
    }
});



function getImages(dir) {
    const files = readdirSync(dir);
    let result = [];
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = statSync(filePath);
        if (stats.isDirectory()) {
            result = result.concat(getImages(filePath));
        } else {
            result.push(path.relative(path.join(__dirname, 'public'), filePath).replace(/\\/g, '/'));
        }
    });
    
    return result;
}
