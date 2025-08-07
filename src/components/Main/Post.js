import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Post = ({ post, handleCheck, handleClick, handleDelete, buttons }) => {
  return (
    <li className="grid items-center justify-center grid-cols-[50px_80px_1fr_40px] md:grid-cols-[50px_100px_1fr_1fr_100px_40px] border-2 bg-slate-950 border-slate-900 shadow-md duration-300 hover:shadow-slate-500 0 my-4 text-slate-400 p-2">
        <input type="checkbox" name="Checkbox" className="w-4" checked={post.checked} onChange={() => handleCheck(post.id)}/>
        <h1><Link to={`/${post.id}`}>{post.title.length >= 8 ? `${post.title.slice(0, 8)}...` : post.title}</Link></h1>
        <p><Link to={`/${post.id}`}>{post.body.length >= 25 ? `${post.body.slice(0, 25)}...` : post.body}</Link></p>
        <p className="hidden md:flex">{post.datetime}</p>
        <p className={
          post.priority === 'high' ? 'bg-red-950 w-10 text-center rounded-sm font-light text-[12px] md:flex items-center justify-center hidden'
          : post.priority === 'mid' ? 'bg-yellow-950 w-10 text-center rounded-sm font-light text-[12px] md:flex items-center justify-center hidden'
          : 'bg-green-950 w-10 text-center rounded-sm font-light text-[12px] md:flex items-center justify-center hidden'
        }>{post.priority.toUpperCase()}</p>
        <div className="ml-2 relative">
            <button type="button" 
              className="bg-slate-900 realtive rounded-full scale-[90%] opacity-35 hover:text-white hover:scale-100 border-slate-300 duration-300 px-2"
              onClick={() => handleClick(post.id)}
            >
            <FontAwesomeIcon icon={faEllipsisH}/>
          </button>
          <div className={post.id === buttons ? 
            "bg-slate-900 absolute top-[75%] left-[-75%] flex-col flex gap-1 duration-300 z-10 origin-top p-1 rounded-md border-[1px] border-slate-500"
            : 'scale-y-0 origin-top absolute'
          }>
        
          <button type="button" 
            onClick={() => handleDelete(post.id)}
            className="w-full text-slate-400 px-2 hover:text-slate-200">
              Delete
          </button>
          <Link to={`/${post.id}`}>
            <button type="button" className="w-full text-slate-400 px-2 hover:text-slate-200">Edi</button>
          </Link>
        </div>
      </div>

    </li>
  )
}

export default Post