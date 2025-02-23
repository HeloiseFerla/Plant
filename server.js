import express from 'express';
const app = express();
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
