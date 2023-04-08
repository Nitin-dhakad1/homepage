import { ReactComponent as Logo } from "./logo.svg";
import styles from './App.css'
import icon from './image-removebg-preview.png'
import prog from './image__1_-removebg-preview.png'

const App = () => {
  return (
    <div>
      <div className='navigation-bar'>
        <Logo/>
        <button className='navigation-button1'>Categories</button>
        <div className='bar1'></div>
        <button className='navigation-button2'>Community</button>
        <div className='bar2'></div>
        <button className='navigation-button3'>Create</button>
        <div className='bar3'></div>
        <button className='navigation-button4'>About us</button>
        <img src={icon} className="icon"></img>
      </div>
      <div className='screen'>
        <p className='para'>Work in progress!
This website is still under progress. Come back later for more features. For any queries, please contact with the above</p>
        <img src={prog} className="prog"></img>
      </div>
    </div>
  );
};

export default App;
