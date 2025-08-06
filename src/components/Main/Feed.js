import Post from './Post';

const Feed = ({ posts, handleCheck, handleClick, handleDelete, buttons }) => {
  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} handleCheck={handleCheck} handleClick={handleClick} handleDelete={handleDelete} buttons={buttons}/>
      ))}
     </>
  );
}

export default Feed