
const Add = ({ 
  title, setTitle, body, setBody, time, setTime, priority, setPriority, handleAdd
 }) => {

  return (
    <main className="flex-grow bg-slate-700 rounded-md px-2 py-2 relative">
        <ul className="flex flex-col gap-2">
        <li className="flex bg-slate-700 rounded-lg border-slate-950 border-2">
            <h1 className="bg-slate-950 text-slate-100 h-full p-1">Title</h1>
            <input 
                type="text" 
                className="bg-slate-600 w-full rounded-r-lg text-slate-300 flex items-center pl-1 outline-0"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="add title"
            />
        </li>
        <li className="flex flex-col bg-slate-700 rounded-lg border-slate-950 border-2">
            <h1 className="bg-slate-950 text-slate-100 h-full flex items-center p-1">Body</h1>
            <textarea 
                type="text" 
                className="bg-slate-600 w-full md:h-[100px] h-[250px] rounded-b-lg text-slate-300 pl-1 outline-0"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="add some details"
            />
        </li>
        <li className="grid grid-cols-2 gap-2">
            <div className="flex flex-col bg-slate-700 rounded-lg border-slate-950 border-2">
                <h1 className="bg-slate-950 text-slate-100 h-full flex items-center p-1">DateDue</h1>
                <input
                    type="date"
                    className="bg-slate-600 w-full rounded-b-lg text-slate-300 pl-1 outline-0"
                    value={time || ''}
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <div className="bg-slate-950 text-slate-100 flex-col flex p-1">
                <h1 className="bg-slate-950 text-slate-100 h-full flex items-center p-1">Priority</h1>
                <select 
                    name="Priority" 
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    placeholder='add priority'
                    className={
                        priority === 'high' ?  'bg-red-950 rounded-sm p-1 outline-none'
                        : priority === 'mid' ? 'bg-yellow-950 rounded-sm p-1 outline-none'
                        : priority === 'low' ? 'bg-green-950 rounded-sm p-1 outline-none'
                        : 'bg-slate-700 rounded-sm p-1 outline-none'
                    }
                >
                    <option value="high" className="bg-red-950 rounded-sm font-light text-[12px]">High Priority</option>
                    <option value="mid" className="bg-yellow-950 rounded-sm font-light text-[12px]">Mid Priority</option>
                    <option value="low" className="bg-green-950 rounded-sm font-light text-[12px]">Low Priority</option>
                </select>
            </div>
        </li>
        <li className="mt-6 flex gap-2">
            <button 
                type="button" 
                className="bg-gray-900 text-slate-300 duration-200 hover:text-white hover:bg-green-900 px-7 py-2 rounded-md"
                onClick={() => handleAdd()}
            >
                Add Post
            </button>   
        </li>
    </ul>
  </main>
  )
}

export default Add