import pool from '../db/connection.js';

export const getAll = async() => {
    const sql = `select pid, concat('images/', image) as image from product`;
    const [results] = await pool.execute(sql, []);
    
    return results;
};

export const getProduct = async(pid) => {
    const sql = `select concat('/images/', image) as image, name, info, rate, p.pid, list, img_list imgList, title_en, title_ko
                    from product p, product_detailinfo pd
                    where p.pid = pd.pid && p.pid = ${pid};`
    const [results, fields] = await pool.execute(sql, []);

    return results[0];
};