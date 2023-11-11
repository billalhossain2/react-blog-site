import './App.css'
import BlogPage from './components/BlogPage/BlogPage'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function App() {
 

  return (
    <div className="App">
      <Header></Header>
      <BlogPage></BlogPage>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
