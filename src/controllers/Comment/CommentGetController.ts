import db from '../../database';
import MarmoymError from '../../models/MarmoymError';
import ErrorType from '../../models/ErrorType';
import { transaction } from '../../database/databaseUtils';
import { CommentRequest } from '../../routes/RequestTypes';
import { CommentResponse } from '../../routes/ResponseTypes';
import * as CommentSelectDAO from '../../dao/Comment/CommentSelectDAO';
import * as UserSelectDAO from '../../dao/User/UserSelectDAO';
import * as ArrayUtils from '../../utils/ArrayUtils';

export async function getIdsByTargetIds(req: CommentRequest.idGet){
  const commentIds = await CommentSelectDAO.selectIdsByTargetIdAndType(req.targetId, req.targetType);
  await Promise.all(commentIds.map(commentObj => {
    commentObj.updated_at = commentObj.updated_at.getTime();
  }));
  return commentIds;
}

export async function getCommentsByIds(req: CommentRequest.Get) {
  let result: CommentResponse.Get = {
    comments: [],
    users: []
  };
  let userIds = []; 

  const commentSelected = await CommentSelectDAO.selectCommentByIds(req.commentIds);

  await Promise.all(commentSelected.map(async commentObj => {
    userIds = ArrayUtils._appendIfNotPresent(userIds, commentObj, 'user_id');
    commentObj.updated_at = commentObj.updated_at.getTime();
    result.comments.push(commentObj);
  }));
  console.log(userIds)
  result.users = await UserSelectDAO.selectUserByIds(userIds);

  return result;
}