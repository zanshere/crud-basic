import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = Number(process.env.PORT ?? 3001);

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    message: 'Express backend is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend berjalan di http://localhost:${PORT}`);
});
