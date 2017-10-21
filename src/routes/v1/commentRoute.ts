/**
 * Copyright Marmoym 2017
 */
import { Router, Request, Response } from 'express'

import db from '../../database';
import { respond } from '../../services/responseService';
import * as URL from '../URL';
import { CommentRequest } from '../RequestTypes';
import * as CommentGetController from '../../controllers/Comment/CommentGetController';

function commentRoute(router) {

  router.route(URL.COMMENTS)
    /**
     * Comments 가져오기
     */
    .post((request: Request, response: Response) => {
      let req: CommentRequest.Get = request.body;
      const payload = CommentGetController.getCommentsByIds(req);

      respond(response, payload);
    })
    /**
     * Comments 수정하기
     */
    .put((request: Request, response: Response) => {

    })

    /**
     * Comments 삭제하기
     */
    .delete((request: Request, response: Response) => {

    })

  router.route(URL.COMMENTS_IDS)
    /**
     * Comments ids가져오기
     */
    .get((request: Request, response: Response) => {
      let req: CommentRequest.idGet = request.query;
      const payload = CommentGetController.getIdsByTargetIds(req);

      respond(response, payload, 'commentIds');
    })
  
  router.route(URL.NEW_COMMENTS)
    /**
     * Comments 등록하기
     */
    .post((request: Request, response: Response) => {
      
    })
}

export default commentRoute;