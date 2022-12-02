import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import fs from "fs"

const app: Express = express();
const port = 8080;

app.use(cors())
app.use(express.json())

app.get('/post', (req: Request, res: Response) => {
  res.send('Typescript + Node.js + Express Server');
});

app.post('/post', (req: Request, res) => {
  const { writeTime, title, content } = req.body.data.content;
  res.send('Got a POST request')
  fs.writeFile(`../client/article/${title}.md`, JSON.stringify(req.body.data), (err) => console.log(err));
})

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});

