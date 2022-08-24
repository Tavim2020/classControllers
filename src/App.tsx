import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { RootState } from './store/configStore';
import { openModal } from './store/reducers';

function App() {
  const { modal } = useSelector((state: RootState) => state.store)
  const dispatch = useDispatch();

  return (
    <div className="App">
        <button onClick={() => dispatch(openModal())}>
          {modal && 'count is'}  modal
        </button>
    </div>
  )
}

export default App
