import Post from './Post';

const Feed = ({ posts, handleCheck }) => {
  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} handleCheck={handleCheck} />
      ))}
     </>
  );
}

export default Feed