import bcrypt from 'bcrypt';
import * as repository from '../repository/signup.js'

// 전체 상품 조회
export const getSignup = async(req, res, next) => {
    const { id, pwd, name, phone, emailName, emailDomain } = req.body;
    const pwdHash = await bcrypt.hash(pwd, 10);
    const email = emailName.concat('@'). concat(emailDomain);
    const member = {...req.body, pwdHash, email};
    
    const [result] = await repository.getSignup(member);
    
    res.json({"isSignup": result});
};