import * as mongoose from 'mongoose';

export interface IBlogModel extends app.i.IBlog, mongoose.Document{}


let blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  datePosted: { type: Number },
  body: { type: String, required: true },
  imageURL: { type: String, default: 'http://1.bp.blogspot.com/-Bsv5jXiALOk/UdXLHs5jwaI/AAAAAAAAIU0/JuhiK3PvL10/s541/kune-kune-piglets-stacked.jpg' },
  tags: String
});

export let Blog = mongoose.model<IBlogModel>('Blog', blogSchema);
