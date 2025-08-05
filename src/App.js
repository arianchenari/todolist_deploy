import Header from "./components/Header/Header";
import Home from "./components/Main/Home"; 
import Search from "./components/Main/Search";
import About from "./components/Main/About";
import Footer from "./components/Footer/Footer";
import Missing from "./components/Error/Missing";
import { Routes, Route} from 'react-router-dom';
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'first',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quisquam est voluptas saepe perferendis. Pariatur odio officiis fugit libero delectus. Ratione veniam ipsum harum, fugiat labore in ut neque doloribus.',
      datetime: "July 04, 2021",
      checked: true
    }, {
      id: 2,
      title: 'second',
      body: 'Hello lasdkidmee ariancc he a fsa',
      datetime: "July 01, 2021",
      checked: false
    }, {
      id: 3,
      title: 'Third',
      body: 'hi',
      datetime: "Jun 09, 2023",
      checked: false
    }, {
      id: 4,
      title: '4th',
      body: 'Lorem ipsum dolor sit amet, cclsc,sc iarjmas',
      datetime: "December 20, 2020",
      checked: false
    }
  ]);

  const handleCheck = (id) => {
    const postsList = posts.map(post => post.id === id ? {...post, checked: !post.checked} : post);
    setPosts(postsList);
  }

  
  return (
    <div className="max-w-[800px] h-screen m-auto flex flex-col shadow bg-slate-950 px-2 py-6 text-white">
        <Header></Header>
        <Routes>
          <Route path="/" element={ <Home posts={posts} handleCheck={handleCheck} /> }/>
          <Route path="/search" element={ <Search /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="*" element={ <Missing /> }/>
        </Routes>
        <Footer></Footer>
    </div>

  );
}

export default App;
