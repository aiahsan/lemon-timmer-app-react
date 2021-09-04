import logo from './logo.svg';
import './style/style.css';
import { GrMail } from 'react-icons/gr';
import FlipCountdown from '@rumess/react-flip-countdown';

function App() {
  return (
    <div className='container '>
      <div className='d-flex justify-between nav'>
        <div>
          <h2>Lemon Network</h2>
        </div>
        <div className='d-flex justify-between align-center nav-right'>
          <div className='d-flex align-center'>
            <GrMail color='#00c443' />
            <h4>hello@lemonnet.social</h4>
          </div>
          <div>
            <button>Noitify Me</button>
          </div>
        </div>
      </div>

      <div className='d-flex justify-between mt-20'>
        <div>
          <div className='commingsoon'>
            <div className='cline'></div>
            <h3>Coming Soon</h3>
          </div>
          <div>
            <h1>
              Our <span>new website</span> will be launched <span>soon.</span>
            </h1>
            <FlipCountdown
              hideYear
              hideMonth
              endAt={'2022-12-12 01:26:58'} // Date/Time
            />
          </div>
          <div></div>
          <div></div>
          <div>
            <h5>Lemon Network- &#169; 2021 All rights reserved</h5>
          </div>
        </div>

        <div>
          <div>
            <img src='lemon.jpeg' alt='' />
            <div className='pos-rel'>
              <div className='img-head'>
                <h2>Lemonnet</h2>
                <p>The future of social network is about to come.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
