import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Post = ({ post, handleCheck }) => {
  return (
    <li className="grid grid-cols-[50px_100px_1fr_40px] border-2 bg-slate-950 border-slate-900 shadow-md duration-300 hover:shadow-slate-500 0 my-4 text-slate-400 p-2">
      <input type="checkbox" name="Checkbox" className="w-4" onChange={() => handleCheck(post.id)}/>
      <h1>{post.title}</h1>
      <p>{post.body.length >= 25 ? `${post.body.slice(0, 25)}...` : post.body}</p>
      <button type="button" className="bg-slate-900 rounded-full scale-[90%] opacity-35 hover:text-white hover:scale-100 duration-300"><FontAwesomeIcon icon={faEllipsisH}/></button>
    </li>
  )
}

export default Post