import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if (!token) {
            return res.json({ success: false, message: "Not Authorized. Login Again." });
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if(token_decode !==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.json({ success: false, message: "Not Authorized. Login Again." });
        }

        // Optional: Attach decoded token to request if needed
        // req.admin = token_decode;

        next();  // Proceed to the next middleware or route
    } catch (error) {
        return res.json({ success: false, message: error.message});
    }
};

export default adminAuth;
