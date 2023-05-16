import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import store from "./redux/store";
import { Provider } from "react-redux";
import List from "./Components/List/List";
import Post from "./Components/Post/Post";
import Footer from "./Components/Footer/Footer";
import AppPost from "./Components/AddPost/AddPost";
function App() {
  /* eslint-disable no-undef */
  return (
    <Provider store={store}>
      <div className="App">
        <AppPost/>
        <nav className="Navbar">
          <Navbar />
        </nav>
        <div className="postContainer"><Post/></div>
        <div className="listContainer"><List/></div>
        <footer className="footerContainer"><Footer/></footer>
      </div>
    </Provider>
  );
}

export default App;
