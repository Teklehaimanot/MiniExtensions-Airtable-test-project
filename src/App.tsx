import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ClassList from './components/ClassList';
import Login from './components/Login';
import { Istate } from './state/ClassReducer';


const App: React.FC = () => {
  const classes = useSelector<Istate, Istate['classes']>(state => state.classes)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch({ type: 'Reset_Classes' })
  }
  return (
    <div className="App">
      {
        !(classes.length > 0) ? <Login /> : <>
          <button className='logout-button' onClick={handleLogout}>Logout</button>
          <ClassList classes={classes} />
        </>
      }
    </div>
  );
}

export default App;
