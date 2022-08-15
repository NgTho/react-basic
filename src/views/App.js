import logo from './logo.svg';
import './App.scss';
import Mycomponent from './Example/Mycomponent.js';
import ListTodos from './Todos/ListTodos.js';
import Nav from './Nav/Nav.js';
import Home from './Example/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
let App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todos">
              <ListTodos />
            </Route>
            <Route path="/about">
              <Mycomponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
          
        </header>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
