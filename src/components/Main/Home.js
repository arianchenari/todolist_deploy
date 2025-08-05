import Feed from './Feed';

const Home = ({ posts, handleCheck }) => {
  return (
    <main className="flex-grow bg-slate-700 rounded-md px-2">
    {posts.length ? (
      <Feed posts={posts} handleCheck={handleCheck}/>
    ) : (
      <h1>No Posts to Display</h1>
    )}  
    </main>
  )
}

export default Home