import { useState } from 'react';
import './App.css';
import ClassList from './components/ClassList';
import { LoadingIcon } from './components/LoadingIcon';
import Login from './components/Login';

export interface classItem {
  id: number,
  name: string
  students: string[]
}

export interface Istate {
  classes: classItem[]
}



const App: React.FC = () => {
  const [classes, setClasses] = useState<Istate['classes']>([
    {
      id: 1,
      name: "cs01",
      students: ['teki', 'ermi', 'abel', 'kebede', 'abebe']
    },
    {
      id: 2,
      name: 'CS02',
      students: ['teki', 'ermi', 'abel']
    },
    {
      id: 3,
      name: 'CS03',
      students: ['teki', 'ermi']
    }
  ])

  const handleLogout = () => {
    setClasses([])
  }
  return (
    <div className="App">
      {
        !(classes.length > 0) ? <Login /> : <>
          <button onClick={handleLogout} className='logout-button'>Logout</button>
          <ClassList classes={classes} />
        </>
      }
      {/* {!(classes.length > 0) && <LoadingIcon />} */}
    </div>
  );
}

export default App;
