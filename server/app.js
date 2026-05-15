import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRouter from './routes/products.js';

dotenv.config();

const PORT = process.env.SERVER_PORT || 9000;
const app = express();

// 미들웨어 -> 공통작업 정의
app.use(cors());
app.use(express.json());

// 라우터 : 클라이언트 요청 처리
// app.get('/test', (req, res, next) => {});       // 직접처리
// app.use('/test', cotroller.함수명)              // 컨트롤러에 분배

app.use('/products', productsRouter);


app.listen(PORT, () => {
    console.log(`서버 실행 ---->> ${PORT}`);
});