const jwt = require('jsonwebtoken');
require('dotenv/config')

const secretKey = process.env.SECRET_KEY;

exports.generateToken = id => {
    return jwt.sign({ id: id }, secretKey, { expiresIn: '1h' })
}
// Token blir skickad som "Bearer <token>"
exports.verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        req.userData = jwt.verify(token, secretKey)
        next()
    }
    catch {
        return res.status(401).json({
            statusCode: 401,
            status: false,
            message: 'Access restricted! Please login!'
        })
    }
}