import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import { getAllVisuals, getAllVisualsTwo, getAllVisualsThree } from "./src/visuals.js";


const app = express();
// const PORT = 3000

app.use(express.json());
app.use(cors());

app.get('/visual-story-one', getAllVisuals);
app.get('/visual-story-two', getAllVisualsTwo);
app.get('/visual-story-three', getAllVisualsThree);


// app.listen(PORT, () => {
//   console.log(`Listening on http://localhost:${PORT}...`)
// });


export const api = functions.https.onRequest(app);