import { ObjectId } from 'mongodb';
import { db } from './dbConnect.js';

export async function getAllVisuals(req, res) {
  const coll = db.collection('visual-story-one');
  
  const visualNovel = await coll.find({}).toArray();
  res.status(200).send(visualNovel);
}