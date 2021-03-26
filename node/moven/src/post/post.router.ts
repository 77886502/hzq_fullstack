// 负责文章模板的路由
import express from 'express';
import * as postController from './post.controller';
const router = express.Router();

/*
    创建内容
*/ 
router.post('/posts',postController.store);
/*
    获取文章
*/ 
// router.get('/posts');

export default router;