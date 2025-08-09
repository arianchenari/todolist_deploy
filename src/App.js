import Header from "./components/Header/Header";
import Home from "./components/Main/Home"; 
import Add from "./components/Main/Add"; 
import PostPage from "./components/Main/PostPage";
import About from "./components/Main/About";
import Footer from "./components/Footer/Footer";
import Missing from "./components/Error/Missing";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState( JSON.parse(localStorage.getItem('posts')) || []);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  //const [searchList, setSearchList] = useState([]);
  const [buttons, setButtons] = useState(false);
  const [buttonsFilter, setButtonsFilter] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [addMessage, setAddMessage] = useState(false);
  const [editPriority, setEditPriority] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const [editTime, setEditTime] = useState('');
  const [priority, setPriority] = useState('high');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [time, setTime] = useState('');
  const [sort, setSort] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts])

  useEffect(() => {
    if(buttonsFilter) setSort('');
    if(search){
      const newPostsList = posts.filter(post => post.title.toLowerCase().includes(search.toLocaleLowerCase())
        || post.body.toLocaleLowerCase().includes(search.toLowerCase())
        || post.priority.toLocaleLowerCase().includes(search.toLowerCase())
      );
      setSearchResult(newPostsList);
    } else{
      setSearchResult(posts);
    }

  }, [search, posts, buttonsFilter]);

  const handleSearchingPosts = (value) => {
    setSort(value);
    if(value === 'check'){
      const truePosts = searchResult.filter(post => post.checked)
      const falsePosts = searchResult.filter(post => !post.checked)
      const newPostsList = [...truePosts, ...falsePosts];
      setSearchResult(newPostsList);
    }
    if(value === 'priority'){
      const highPosts = searchResult.filter(post => post.priority === 'high')
      const midPosts = searchResult.filter(post => post.priority === 'mid')
      const lowPosts = searchResult.filter(post => post.priority === 'low')
      const newPostsList = [...highPosts, ...midPosts, ...lowPosts];
      setSearchResult(newPostsList);
    }
    if(value === 'due'){
      const today = new Date();
      const arrNearDay =searchResult.map(post => {
        const datetime = new Date(post.datetime);
        const diffTime = today - datetime;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        return {
          id: post.id,
          diffDays
        }
      });
      const sortedArrNearDay = arrNearDay.sort((a, b) => a.diffDays - b.diffDays);
      const newPostsList = sortedArrNearDay.map(item => searchResult.find(post => post.id === item.id ? post : null));
      setSearchResult(newPostsList);
    }
  }

  const handleCheck = async (id) => {
    const newPostsList = posts.map(post => post.id === id ? {...post, checked: !post.checked} : post );
    setPosts(newPostsList);
  }

  const handleClick = (id) => {
    buttons === id ? setButtons(null) : setButtons(id);
  }

  const handleDelete = async (id) => {
    const newPostsList = posts.filter(post => post.id !== id);
    setPosts(newPostsList);
    setTimeout(() => navigate('/'), 0);
    if(!addMessage)
    setDeleteMessage(true);
    setTimeout(() => {
      setDeleteMessage(false);
    }, 1500);
  }

  const handleSubmit = (id) => {
    const post = posts.find(post => post.id === id);
    const title = editTitle;
    const body = editBody;
    const priority = editPriority;
    const date = new Date(editTime);
    const datetime = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    });
    const updatedPost = {
      id,
      title,
      body,
      datetime,
      priority,
      checked: post.checked
    };
    const newPostsList = posts.map(post => post.id === id ? updatedPost : post);
    setPosts(newPostsList);
    console.log(newPostsList);
    navigate('/');
  }

  const handleAdd = async () => {
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const date = new Date(time);
    const datetime = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    });
    const newPost = { id, title, body, datetime, priority, checked: false };

    const newPostsList = [...posts, newPost];
    setPosts(newPostsList);
    setTitle('');
    setBody('');
    setTime('');
    setPriority('high');
    setButtons(false);
    navigate('/');

    if(!deleteMessage)
    setAddMessage(true);
    setTimeout(() => {
      setAddMessage(false);
    }, 1500);
  }
 
  return (
    <div className="max-w-[800px] h-screen m-auto flex flex-col shadow bg-slate-950 px-2 py-6 text-white">
        <Header></Header>
        <Routes>
          <Route path="/" element={ <Home 
              posts={searchResult}
              handleCheck={handleCheck} 
              handleClick={handleClick} 
              handleDelete={handleDelete} 
              deleteMessage={deleteMessage}
              addMessage={addMessage}
              buttons={buttons}
              search={search}
              setSearch={setSearch}
              buttonsFilter={buttonsFilter}
              setButtonsFilter={setButtonsFilter}
              sort={sort}
              setSort={setSort}
              handleSearchingPosts={handleSearchingPosts}
              />
            }/>
          <Route path="/:id" 
            element={<PostPage posts={searchResult}
            editPriority={editPriority}
            setEditPriority={setEditPriority}
            editBody={editBody}
            setEditBody={setEditBody}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editTime={editTime}
            setEditTime={setEditTime}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
            />}
          />
          <Route path="/add" element={ <Add 
            title={title}
            setTitle={setTitle}
            body={body}
            setBody={setBody}
            time={time}
            setTime={setTime}
            priority={priority}
            setPriority={setPriority}
            handleAdd={handleAdd}
          /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="*" element={ <Missing /> }/>
        </Routes>
        <Footer></Footer>
    </div>

  );
}

export default App;
