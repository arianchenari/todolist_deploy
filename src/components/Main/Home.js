import Feed from './Feed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSearch, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Home = ({ 
    posts, handleCheck, handleClick, handleDelete, deleteMessage, 
    addMessage, buttons, search, setSearch, buttonsFilter, setButtonsFilter,
    sort, setSort
}) => {
  return (
    <main className="flex-grow bg-slate-700 rounded-md px-2 overflow-y-auto">
      <div className='flex flex-row items-center bg-slate-950 rounded-lg border-slate-950 border-2 mt-2 relative'>
        <FontAwesomeIcon icon={faSearch} className='p-2 text-slate-300 hover:text-white cursor-pointer'/>
        <input 
          type="search" 
          className='bg-slate-600 w-full text-slate-300 p-2 flex items-center outline-0'
          placeholder='search items...'
          search={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {!buttonsFilter ? 
          <>
            <button 
              type="button" 
              className={sort === 'priority' ? "text-slate-400 bg-inherit text-[9px] md:text-[12px] pr-1 border-l-4 border-slate-950 px-1"
               : "text-slate-400 bg-slate-600 text-[9px] md:text-[12px] pr-1 border-l-4 border-slate-950 px-1 hover:text-slate-200"}
              onClick={() => setSort('priority')}
            >
                Sorted by Priority  
            </button>
            <button 
              type="button" 
              className={sort === 'due' ? "text-slate-400 bg-inherit text-[9px] md:text-[12px] pr-1 border-l-4 border-slate-950 px-1"
               : "text-slate-400 bg-slate-600 text-[9px] md:text-[12px] pr-1 border-l-4 border-slate-950 px-1 hover:text-slate-200"}
              onClick={() => setSort('due')}
            >
              Sorted by Nearset Due
            </button>
            <button 
              type="button" 
              className={sort === 'check' ? "text-slate-400 bg-inherit text-[9px] md:text-[12px] pr-1 border-l-4 border-slate-950 px-1"
               : "text-slate-400 bg-slate-600 text-[9px] md:text-[12px] pr-1 border-l-4 border-slate-950 px-1 hover:text-slate-200"}
              onClick={() => setSort('check')}
            >
              Sorted By Checked
            </button>
          </>
          : null
        }

        {buttonsFilter ? 
          <button 
            type="button"
            onClick={() => setButtonsFilter(!buttonsFilter)}
          >
            <FontAwesomeIcon icon={faAngleLeft} className='p-2 text-slate-300 hover:text-white cursor-pointer duration-300 -rotate-90'/>
          </button>
          : <button 
              type="button"
              onClick={() => setButtonsFilter(!buttonsFilter)}
            >
              <FontAwesomeIcon icon={faAngleLeft} className='p-2 text-slate-300 hover:text-white cursor-pointer duration-300'/>
            </button>
        }
      </div>
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