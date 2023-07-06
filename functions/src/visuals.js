import { ObjectId } from 'mongodb';
import { db } from './dbConnect.js';

export async function getAllVisuals(req, res) {
  const coll = db.collection('visual-story-one');
  
  const visualNovel = await coll.find({}).toArray();
  res.status(200).send(visualNovel);
}

export async function getAllVisualsTwo(req, res) {
  const coll = db.collection('visual-story-two');

  const visualNovel = await coll.find({}).toArray();
  res.status(200).send(visualNovel);
}

export async function getAllVisualsThree(req, res) {
  const coll = db.collection('visual-story-three');
  
  const visualNovel = await coll.find({}).toArray();
  res.status(200).send(visualNovel);
}