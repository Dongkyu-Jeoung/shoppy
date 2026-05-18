import pool from '../db/connection.js';

export const getSignup = async(member) => {    
    const { id, pwd, name, phone, pwdHash, email } = member;
    const sql = `INSERT INTO MEMBER(id, pwd, name, phone, email, mdate) 
                    VALUES(?, ?, ?, ?, ?, curdate());`;
    const  [rows] = await pool.execute(sql, [id, pwd, name, phone, email]);
    console.log(rows);
    
    return rows.affectedRows;
};