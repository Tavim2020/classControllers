import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IntroductionOne } from './pages/IntroductionOne'
import { Redirect } from './routes/Redirect';



function App() {
  // const { modal } = useSelector((state: RootState) => state.store)
  // const dispatch = useDispatch();

   return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Redirect />}
        />
        <Route
          path="/introduction/page/1"
          element={<IntroductionOne />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App
