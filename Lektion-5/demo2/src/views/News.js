import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import { getPosts } from '../store/actions/postsActions';

const News = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch])

  const posts = useSelector(state => state.postsReducer.posts);
  const loading = useSelector(state => state.postsReducer.loading);

  return (
    <div>
      {loading && !posts && <p>Loading...</p>}
      {posts && posts.map(post => <Post key={post.id} post={post} />)}
      {loading && posts && <p>Loading new posts...</p>}
    </div>
  )
}

export default News
