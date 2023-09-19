const crypto = require('crypto');
const secretKey = 'SECRET_KEY'; // secret key (keep safe!)
const userIdentifier = current_user.id.toString(); // user's id
const hash = crypto.createHmac('sha256', secretKey).update(userIdentifier).digest('hex');