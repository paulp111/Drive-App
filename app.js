const express = require('express');
const multer = require('multer');
const { PrismaClient } = require('@prisma/client');
const path = require('path');
const app = express();
const prisma = new PrismaClient();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static files
app.use(express.static(__dirname));

// multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// render frontend
app.get('/', async (req, res) => {
  const files = await prisma.file.findMany();
  res.render('index', { files });
});

// file upload endpoint
app.post('/upload', upload.single('file'), async (req, res) => {
  const { file } = req;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  // Save file info in the database
  await prisma.file.create({
    data: {
      filename: file.originalname,
      mimetype: file.mimetype,
      path: file.path
    }
  });

  res.redirect('/');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
