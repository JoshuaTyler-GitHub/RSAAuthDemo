// images
import AppleIcon from '../images/AppleIcon.png';
import FacebookIcon from '../images/FacebookIcon.png';
import GameCenterIcon from '../images/GameCenterIcon.png';
import MicrosoftIcon from '../images/MicrosoftIcon.png';
import OpenIdIcon from '../images/OpenIdIcon.png';
import PlayGamesIcon from '../images/PlayGamesIcon.png';
import TwitterIcon from '../images/TwitterIcon.png';

function UnimplementedLoginMethods() {
  return (
    <div
      className='align-items-center d-flex flex-wrap justify-content-evenly mt-2'
      style={{ height: '100px', width: '300px' }}
    >

      {/* Apple */}
      <button
        className='btn btn-light'
        onClick={() => alert('not yet implemented')}
      >
        <img alt="Apple" src={AppleIcon} style={{ height: '25px', width: '25px' }}/>
      </button>

      {/* Facebook */}
      <button
        className='btn btn-light'
        onClick={() => alert('not yet implemented')}
      >
        <img alt="Facebook" src={FacebookIcon} style={{ height: '25px', width: '25px' }}/>
      </button>

      {/* GameCenter */}
      <button
        className='btn btn-light'
        onClick={() => alert('not yet implemented')}
      >
        <img alt="GameCenter" src={GameCenterIcon} style={{ height: '25px', width: '25px' }}/>
      </button>

      {/* Microsoft */}
      <button
        className='btn btn-light'
        onClick={() => alert('not yet implemented')}
      >
        <img alt="Microsoft" src={MicrosoftIcon} style={{ height: '25px', width: '25px' }}/>
      </button>

      {/* OpenId */}
      <button
        className='btn btn-light'
        onClick={() => alert('not yet implemented')}
      >
        <img alt="OpenId" src={OpenIdIcon} style={{ height: '25px', width: '25px' }}/>
      </button>

      {/* PlayGames */}
      <button
        className='btn btn-light'
        onClick={() => alert('not yet implemented')}
      >
        <img alt="PlayGames" src={PlayGamesIcon} style={{ height: '25px', width: '25px' }}/>
      </button>

      {/* Twitter */}
      <button
        className='btn btn-light'
        onClick={() => alert('not yet implemented')}
      >
        SAML
      </button>

      {/* Twitter */}
      <button
        className='btn btn-light'
        onClick={() => alert('not yet implemented')}
      >
        <img alt="Twitter" src={TwitterIcon} style={{ height: '25px', width: '25px' }}/>
      </button>
    </div>
  );
}
export default UnimplementedLoginMethods;
