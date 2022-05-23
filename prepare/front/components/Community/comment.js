import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentFormWrapper } from '../style/postFormSt';
import useInput from '../../hooks/useInput';

import { ADD_COMMENT_REQUEST } from '../../reducers/post';

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const [commentText, onChangeCommentText, setCommentText] = useInput('');
  const { addCommentDone } = useSelector((state) => state.post);
  const id = useSelector((state) => state.user.me?.id);

  useEffect(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);

  const onCommentSubmit = useCallback(
    (e) => {
      // e.preventDefault();
      console.log('postId: ', post.id, 'commentText: ', commentText, 'id: ', id);
      if (!commentText) {
        e.preventDefault();
        alert('댓글을 입력해주세요.');
      } else {
        dispatch({
          type: ADD_COMMENT_REQUEST,
          data: { content: commentText, postId: post.id, userId: id },
        });
      }
    },
    [commentText],
  );

  return (
    <CommentFormWrapper>
      <form type="submit" onSubmit={onCommentSubmit}>
        <div>
          <textarea type="text" value={commentText} onChange={onChangeCommentText} placeholder="댓글을 입력해주세요." />
          <button type="submit">댓글 생성</button>
        </div>
      </form>
    </CommentFormWrapper>
  );
};

export default CommentForm;
