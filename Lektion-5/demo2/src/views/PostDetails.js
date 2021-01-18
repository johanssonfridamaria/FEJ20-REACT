import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOnePost, clearPost } from '../store/actions/postsActions';

const PostDetails = () => {

  const id = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOnePost(id));

    return () => {
      // cleanup
      dispatch(clearPost());
    }

  },[dispatch, id])

  const post = useSelector(state => state.postsReducer.post);
  const loading = useSelector(state => state.postsReducer.loading);



   const _post = ( post &&
    <div>
      <h2>{ post.title }</h2>
      <p>{ post.body }</p>
    </div>
  )

  return (
    <div>
      {_post}
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default PostDetails
