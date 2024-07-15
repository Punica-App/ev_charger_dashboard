
import './App.css'
import { HiOutlineBell } from 'react-icons/hi2'
import { navItems } from './data'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import { Snackbar } from '@mui/joy'
import { useDispatch, useSelector } from 'react-redux'
import { clearSnackbar } from './redux/layoutSlice/layoutSlice'

function App() {
const {showSnackbar, error, message, snackColor} = useSelector((state)=>state.layoutState)
const dispatch = useDispatch()

return (
  <>
  <Routes>
    <Route path='/' element={ <Navbar/>}>
      <Route index element={<Dashboard/>} />
      <Route path='charging-stations'  element={<h1>Station</h1>} />
      <Route path='revenue'  element={<h1>Revenue</h1>} />
      <Route path='notifications'  element={<h1>Notifiations</h1>} />
      <Route path='reports'  element={<h1>Reports</h1>} />
    </Route>
   </Routes>
   <Snackbar
        autoHideDuration={3500}
        color= { snackColor}
        variant='solid'
        open={showSnackbar}
        onClose={()=>{
          dispatch(clearSnackbar())
        }}
      >
      {error||message}
    </Snackbar>
   </>
  )
}

export default App
