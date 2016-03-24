import * as express from 'express';
import * as controller from '../api/blogController';

const router = express.Router();
//Base Route -- /api/v1/blogs

//GET: /api/v1/blogs
router.get('/',controller.getAll);

//POST: /api/v1/blogs
router.post('/',controller.create);

export = router;
