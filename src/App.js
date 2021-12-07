import Home from './components/Exercise/Home';
import ExerciseCompo from './components/Exercise/ExerciseComponent';
import GeeksCompo from './components/Exercise/Geeks';
import GeeksChat from './components/Exercise/GeeksChat';
import Card from './components/Exercise/card';
import Alert from './components/Exercise/alert';
import Badges from './components/Exercise/badges';
import Toast from './components/Exercise/toast';
import Modal from './components/Exercise/Modal';
import Rating from './components/Exercise/Rating';
import MainHome from './components/Exercise/MainHome';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div class="bg-haiti-500 py-4 px-6">
        <ul class="flex">
          <li class="ml-4 text-white">
            <Link to="/">MainHome</Link>
          </li>
          <li class="ml-4 text-white">
            <Link to="/Home">Home</Link>
          </li>
          <li class="ml-4 text-white">
            <Link to="/Exercise">Exercise</Link>
          </li>
          <li class="ml-4 text-white">
            <Link to="/Geeks">GeeksCompo</Link>
          </li>
          <li class="ml-4 text-white">
            <Link to="/GeeksChat">GeeksChat</Link>
          </li>
          <li class="ml-4 text-white">
            <Link to="/Card">Card</Link>
          </li>
          <li class="ml-4 text-white">
            <Link to="/Alert">Alert</Link>
          </li>
          <li class="ml-4 text-white">
            <Link to="/Badges">Badges</Link>
          </li>
          <li class="ml-4 text-white">
            <Link to="/Toast">Toast</Link>
          </li>
          <li class="ml-4 text-white">
            <Link to="/Modal">Modal</Link>
          </li>
          <li class="ml-4 text-white">
            <Link to="/Rating">Rating</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={MainHome} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Exercise" component={ExerciseCompo} />
        <Route exact path="/Geeks" component={GeeksCompo} />
        <Route exact path="/GeeksChat" component={GeeksChat} />
        <Route exact path="/Card" component={() => (<Card title={"Title"} body={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} footer={"Footer"} />)} />
        <Route exact path="/Alert" component={() => (<Alert title={"This is an alert"} alertMsg={"The alert component can be used to highlight certain parts of your page for higher content visibility."} />)} />
        <Route exact path="/Badges" component={() => (<Badges value={"New"} />)} />
        <Route exact path="/Toast" component={() => (<Toast title={"Keenthemes"} value={"11 mins ago"} bodyMsg={"Hello, world! This is a toast message."} />)} />
        <Route exact path="/Modal" component={() => (<Modal modalTitles={"Modal Title"} modalBody={"Modal body text goes here."} />)} />
        <Route exact path="/Rating" component={() => (<Rating value={3.5} />)} />
      </Switch>
    </Router>
  );
}

export default App;
