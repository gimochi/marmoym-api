import db from '../../database';
import { CommentStatus } from '../../models/Status/CommentStatus';

export function selectIdsByTargetIdAndType(targetId: number,targetType: string) {
  return db('Comment').where({
      target_id: targetId,
      target_type: targetType,
      status: CommentStatus.NORMAL
    })
    .select('id','updated_at');
};

export function selectCommentByIds(ids: number[]) {
  return db('Comment').where({
    status: CommentStatus.NORMAL
  })
  .whereIn('id', ids)
  .select('id', 'depth', 'parent_id', 'label', 'user_id', 'vote_id', 'created_at', 'updated_at');
}