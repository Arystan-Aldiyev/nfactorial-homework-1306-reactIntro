import './App.css';
import first from "./assets/photo1.jpeg"
import second from "./assets/photo2.jpg"
import third from "./assets/photo3.jpeg"
import forth from "./assets/photo4.jpeg"
import fifth from "./assets/photo5.jpeg"
import logo from "./assets/logo-og.png"
import { format } from 'date-fns'

function App() {
  const date = new Date();
  const formattedDate = format(date, "dd.MM.yyyy HH:mm")
  return (
    <>
      <div className='header'>
        <div className='logoIm'>
          <img src={logo} className="logoImg" alt="logo" />
        </div>
        <div className="dateTime">
          { formattedDate } &nbsp; &nbsp;
        </div>
      </div>
      <div className='main'>
        <div className='equalContainers' id='first'>HEY</div>
        <div className='equalContainers' id='second'>LET'S</div>
        <div className='equalContainers' id='third'>GIVE</div>
        <div className='equalContainers' id='forth'>ALL</div>
        <div className='equalContainers' id='fifth'>YOU CAN</div>
      </div>
    </>
  )
}

export default App;
