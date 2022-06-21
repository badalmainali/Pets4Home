const multer = require("multer");

// File Upload Using Multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/public/uploads/blogs");
    // callback(null, "./images");
  },
  filename: (req, file, callback) => {
    callback(null,file.originalname);
  },
});

exports.upload = multer({ storage: storage });
