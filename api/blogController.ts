import * as express from 'express';
import { Blog, IBlogModel } from '../models/Blog';

export function getAll(req: express.Request,res: express.Response,next: Function){
  Blog.find({}) //<--you can find items by different variables like _id: 5, or title: "Hello!"
    .exec((err, blogs) => {
      if (err) return next(err);
      res.json(blogs);
    });
}

export function create(req: express.Request,res: express.Response,next: Function){
  req.body.datePosted = Date.now();
  let b = new Blog(req.body);
  b.save((err,blog: IBlogModel) => {
    if (err) return next(err);
    res.json(blog);
  });
}
