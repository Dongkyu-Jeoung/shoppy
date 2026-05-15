import * as repository from '../repository/products.js'

// 전체 상품 조회
export const getAll = async(req, res, next) => {
    const products = await repository.getAll();
    res.json(products);
};

export const getProduct = async(req, res, next) => {
    const product = await repository.getProduct(req.params.pid);
    const {title_en, title_ko, list, ...rest} = product;

    const result = {...rest,
                    "detailInfo": { title_en, title_ko, list }};
    
    
    res.json(result);
}