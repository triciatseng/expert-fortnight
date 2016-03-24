import * as express from 'express';
import * as controller from '../api/blogController';

const router = express.Router();
//Base Route -- /api/v1/blogs

router.post('/',controller.create);

export = router;
