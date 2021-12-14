import { React } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';

const demoList = [{
  id: 1, title: 'book1', author: 'author1',
}, {
  id: 2, title: 'book2', author: 'author2',
}, {
  id: 3, title: 'book3', author: 'author3',
}];

function App() {
  return (
    <Router>
      <header>
        <nav>
          <h1>Awesome Bookstore</h1>
          <div className="nav-links">
            <Link to="/">Book</Link>
            <div />
            <Link to="/categories">Categories</Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<BookList bookList={demoList} />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
