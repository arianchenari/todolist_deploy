import Feed from './Feed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Home = ({ posts, handleCheck, handleClick, handleDelete, deleteMessage, addMessage, buttons }) => {
  return (
    <main className="flex-grow bg-slate-700 rounded-md px-2 overflow-y-auto">
      {posts.length ? (
        <Feed posts={posts} handleCheck={handleCheck} handleClick={handleClick} handleDelete={handleDelete} buttons={buttons} />
      ) : (
        <h1 className='absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]'>No Posts to Display</h1>
      )}  
      <h1 className={deleteMessage ? 'bg-zinc-950 text-slate-200 px-4 py-2 absolute bottom-[12%] left-[50%] translate-x-[-50%] rounded-md duration-700 opacity-50'
          : 'bg-zinc-950 text-slate-200 px-4 py-2 absolute bottom-[12%] left-[50%] rounded-md duration-300 opacity-0'}>
          <FontAwesomeIcon icon={faCheck} className='text-red-500 mr-2'/>
          Deleted Post
      </h1>
      <h1 className={addMessage ? 'bg-zinc-950 text-slate-200 px-4 py-2 absolute bottom-[12%] left-[50%] translate-x-[-50%] rounded-md duration-700 opacity-50'
          : 'bg-zinc-950 text-slate-200 px-4 py-2 absolute bottom-[12%] left-[50%] rounded-md duration-300 opacity-0'}>
          <FontAwesomeIcon icon={faCheck} className='text-green-500 mr-2'/>
          Post Added
      </h1>
    </main>
  )
}

export default Home