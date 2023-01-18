// node_modules
import { Component } from 'react';

// components
import Animation1 from './components/Animation1';
import Animation2 from './components/Animation2';
import Animation3 from './components/Animation3';
import Delay from './components/Delay';
import Footer from './components/Footer';
import Header from './components/Header';
import ImplementedLoginMethods from './components/ImplementedLoginMethods';
import UnimplementedLoginMethods from './components/UnimplementedLoginMethods';
import UsernamePassword from './components/UsernamePassword';

// scripts
import State from './scripts/State';

// styles
import './styles/animation.css';
import './styles/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...State.initialState };
    State.getState = () => this.state;
    State.setState = (state) => this.setState(state);
  }

  render() {
    const { state } = this;
    const { animation1, animation2, animation3, isLoading, isSuccess } = state;

    return (
      <div className='container-fluid h-100'>
        {/* row */}
        <div className='row h-100'>
          {/* column */}
          <div className='col-12'>
            {/* flex box */}
            <div className='align-items-center d-flex flex-column h-100 justify-content-center'>
              {/* card */}
              <div
                className='align-items-center card d-flex flex-column justify-content-center pb-2 px-5 pt-5'
                style={{ width: '400px' }}
              >
                {/* card header */}
                <Header />

                {/* card body */}
                <div className='card-body'>
                  {/* card title */}
                  <h5 className='card-title fw-light text-center'>
                    Loading Animation Demo
                  </h5>

                  {/* delay */}
                  {!isLoading && !isSuccess && <Delay />}

                  {/* user input */}
                  {!isLoading && !isSuccess && <UsernamePassword />}

                  {/* animation 1 */}
                  {animation1 && <Animation1 />}

                  {/* animation 2 */}
                  {animation2 && <Animation2 />}

                  {/* animation 3 */}
                  {animation3 && <Animation3 />}

                  {/* footer */}
                  <Footer />
                </div>
              </div>

              {/* alternate options */}
              <div
                className='align-items-center card d-flex flex-column justify-content-center mt-5 p-2'
                style={{ width: '400px' }}
              >
                {/* card body */}
                <div className='card-body'>
                  {/* card title */}
                  <h5 className='card-title fw-light text-center'>
                    Implemented login methods
                  </h5>

                  {/* login methods */}
                  <ImplementedLoginMethods />
                </div>

                {/* card body */}
                <div className='card-body'>
                  {/* card title */}
                  <h5 className='card-title fw-light text-center'>
                    Unimplemented login methods
                  </h5>

                  {/* login methods */}
                  <UnimplementedLoginMethods />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
