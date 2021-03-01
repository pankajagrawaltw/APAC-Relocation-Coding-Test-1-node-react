import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import UserDetails from './components/UserDetails'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Homepage} exact />
        <Route path="/user/:id" component={UserDetails} exact />
      </Router>
    </div>
  );
}

export default App;