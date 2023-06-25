import './App.css';
import Post from './components/Post.js';
import Header from './components/Header';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Post />} />

          <Route path={'/login'} element={<div>Login Page</div>}></Route>
        </Route>

        <Route path={'/register'} element></Route>
      </Routes>
    </>
  );
}

export default App;
