import { useContext } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Posts from './views/Posts';
import CreatePost from './views/CreatePost';
import PostsContextProvider from './contexts/PostsContext';
import { ThemeContext } from './contexts/ThemeContext';

function App() {

  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark

  return (
    <BrowserRouter>
      <Navbar title="My Blog" />

      <div className="bg" style={{background: theme.bg}}>
        <div className="container">

          <PostsContextProvider>
            <Switch>
              {/* <Route exact path="/">
                <Posts posts={posts} deletePost={deletePost} />
              </Route>
              <Route exact path="/create">
                <CreatePost addPost={addPost} />
              </Route> */}

              <Route exact path="/" component={Posts} />
              <Route exact path="/create" component={CreatePost} />
            </Switch>
          </PostsContextProvider>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
