import './App.css';
import Profile from './Profile/Profile';
import myProfilePic from '../src/profile_pic.jpg'


function App() {
  const styleObject={height: 400 , width : 300}
  const handleName = name => {
    alert(name)
  };
  return (
    <div className="App">
      <Profile fullName="Amina KCHAOU" bio="dream it possible" profession="student/engineer" handleName={handleName}> 
        <img src={myProfilePic} alt="my-pic" style={styleObject}/>
      </Profile>
    </div>
  );
}

export default App;

