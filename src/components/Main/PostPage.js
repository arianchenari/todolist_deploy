import { useParams } from "react-router-dom";
import { useEffect } from "react";

const PostPage = ({ 
    posts, editPriority, setEditPriority, editTitle, setEditTitle, editBody, setEditBody, editTime, setEditTime, handleSubmit, handleDelete
 }) => {
    const { id } = useParams();
    const post = posts.find(post => post.id.toString() === id);

    useEffect(() => {
        const date = new Date(post.datetime);
        const formatedDate = date.toISOString().split('T')[0];
        setEditPriority(post.priority);
        setEditTitle(post.title);
        setEditBody(post.body);
        setEditTime(formatedDate);
    }, [post.priority, post.title, post.body, post.datetime]);

  return (
    <main className="flex-grow bg-slate-700 rounded-md px-2 py-2 relative">
        {post ? (
            <ul className="flex flex-col gap-2">
            <li className="flex bg-slate-700 rounded-lg border-slate-950 border-2">
                <h1 className="bg-slate-950 text-slate-100 h-full p-1">Title</h1>
                <input 
                    type="text" 
                    className="bg-slate-600 w-full rounded-r-lg text-slate-300 flex items-center pl-1 outline-0"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
            </li>
            <li className="flex flex-col bg-slate-700 rounded-lg border-slate-950 border-2">
                <h1 className="bg-slate-950 text-slate-100 h-full flex items-center p-1">Body</h1>
                <textarea 
                    type="text" 
                    className="bg-slate-600 w-full md:h-[100px] h-[250px] rounded-b-lg text-slate-300 pl-1 outline-0"
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                />
            </li>
            <li className="grid grid-cols-2 gap-2">
                <div className="flex flex-col bg-slate-700 rounded-lg border-slate-950 border-2">
                    <h1 className="bg-slate-950 text-slate-100 h-full flex items-center p-1">DateDue</h1>
                    <input
                        type="date" 
                        className="bg-slate-600 w-full rounded-b-lg text-slate-300 pl-1 outline-0"
                        value={editTime}
                        onChange={(e) => setEditTime(e.target.value)}
                    />
                </div>
                <div className="bg-slate-950 text-slate-100 flex-col flex p-1">
                    <h1 className="bg-slate-950 text-slate-100 h-full flex items-center p-1">Priority</h1>
                    <select 
                        name="Priority" 
                        id={post.id}
                        value={editPriority}
                        onChange={(e) => setEditPriority(e.target.value)}
                        className={
                            editPriority === 'high' ?  'bg-red-950 rounded-sm p-1 outline-none'
                            : editPriority === 'mid' ? 'bg-yellow-950 rounded-sm p-1 outline-none'
                            : editPriority === 'low' ? 'bg-green-950 rounded-sm p-1 outline-none'
                            : ''
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
                    onClick={() => handleSubmit(post.id)}
                >
                    Submit
                </button>
                <button 
                    type="button" 
                    className="bg-gray-900 text-slate-300 duration-200 hover:text-white hover:bg-red-900 px-7 py-2 rounded-md"
                    onClick={() => handleDelete(post.id)}
                >
                    Delete
                </button>
            </li>
        </ul>
        ) : null}
    </main>
  )
}

export default PostPage