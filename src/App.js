import Header from "./components/Header/Header";
import Home from "./components/Main/Home"; 
import Add from "./components/Main/Add"; 
import Search from "./components/Main/Search";
import PostPage from "./components/Main/PostPage";
import About from "./components/Main/About";
import Footer from "./components/Footer/Footer";
import Missing from "./components/Error/Missing";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from "react";


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'first',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quisquam est voluptas saepe perferendis. Pariatur odio officiis fugit libero delectus. Ratione veniam ipsum harum, fugiat labore in ut neque doloribus.',
      datetime: "July 04, 2021",
      priority: 'high',
      checked: true
    }, {
      id: 2,
      title: 'second',
      body: 'Hello lasdkidmee ariancc he a fsa',
      datetime: "July 01, 2021",
      priority: 'mid',
      checked: false
    }, {
      id: 3,
      title: 'Third',
      body: 'hi',
      datetime: "Jun 09, 2023",
      priority: 'high',
      checked: false
    }, {
      id: 4,
      title: '4th',
      body: 'Lorem ipsum dolor sit amet, cclsc,sc iarjmas',
      datetime: "December 20, 2020",
      priority: 'low',
      checked: false
    }
  ]);
  const [buttons, setButtons] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState(false);
  const [editPriority, setEditPriority] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const [editTime, setEditTime] = useState('');

  const navigate = useNavigate();

  const handleCheck = (id) => {
    const postsList = posts.map(post => post.id === id ? {...post, checked: !post.checked} : post);
    setPosts(postsList);
  }

  const handleClick = (id) => {
    buttons === id ? setButtons(null) : setButtons(id);
  }

  const handleDelete = (id) => {
    const newPostsList = posts.filter(post => post.id !== id);
    setPosts(newPostsList);
    setTimeout(() => navigate('/'), 0);
    setDeleteMessage(true);
    setTimeout(() => {
      setDeleteMessage(false);
    },2000 );
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
 
  return (
    <div className="max-w-[800px] h-screen m-auto flex flex-col shadow bg-slate-950 px-2 py-6 text-white">
        <Header></Header>
        <Routes>
          <Route path="/" element={ <Home 
              posts={posts} 
              handleCheck={handleCheck} 
              handleClick={handleClick} 
              handleDelete={handleDelete} 
              deleteMessage={deleteMessage}
              buttons={buttons} /> 
            }/>
          <Route path="/:id" 
            element={<PostPage posts={posts} 
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
          <Route path="/add" element={ <Add /> }/>
          <Route path="/search" element={ <Search /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="*" element={ <Missing /> }/>
        </Routes>
        <Footer></Footer>
    </div>

  );
}

export default App;
