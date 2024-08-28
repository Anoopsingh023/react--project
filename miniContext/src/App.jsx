import './App.css'
import UserContextprovider from './Context/UserContextProvider'
import Login from './Component/Login';
import Profile from './Component/Profile';


function App() {

  return (
    <UserContextprovider>
      <h1>React</h1>
      <Login/>
      <Profile/>
    </UserContextprovider>
  );
}

export default App
