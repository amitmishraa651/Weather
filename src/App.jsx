import Weather from './assets/Weather'
import Navbar from './assets/Navbar'
import './App.css'

const App = () => {
  


  return (
    <div>
      <Navbar/>
      <Weather/>
      <div className='footer'> 
          <p> Copyright &#169; 2024, Created by Amit.</p>
        </div>
    </div>
  )
}

export default App
