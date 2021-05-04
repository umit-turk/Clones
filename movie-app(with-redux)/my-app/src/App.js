import './App.css'
import Footer from './components/Footer';
import Landing from './components/home/Landing';
import Navbar from './components/Navbar';
import {HashRouter as  Router, Route} from 'react-router-dom';
import Movie from './components/home/Movie';


function App() {
  return (
    <div>
    <Router>
     <Navbar />
    <Route exact path="/" component={Landing}/>
    <Route exact path="/movie/:id" component={Movie}/>
     <Footer />
     </Router>
    </div>
  );
}

export default App;
