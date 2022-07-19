const router = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

router.use('/auth/', authRoute);
router.use('/users/', usersRoute);
router.use('/posts/', postsRoute);
router.use('/categories/', categoryRoute);
router.post('/upload', multer(multerConfig).single("file"), async (req, res) => {
    res.status(200).json(req.file.filename)
});

module.exports = router;