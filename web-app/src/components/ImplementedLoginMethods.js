import Auth from '../scripts/Auth';

// images
import GitHubIcon from '../images/GitHubIcon.png';
import GoogleIcon from '../images/GoogleIcon.png';

function ImplementedLoginMethods() {
  return (
    <div className='d-flex flex-wrap justify-content-around mt-2'>

      {/* Passwordless */}
      <button
        className='btn btn-light'
        onClick={() => Auth.passwordless()}
      >
        Passwordless
      </button>

      {/* GitHub */}
      <button
        className='btn btn-light'
        onClick={() => Auth.gitHub()}
      >
        <img alt="GitHub" src={GitHubIcon} style={{ height: '25px', width: '25px' }}/>
      </button>

      {/* Google */}
      <button
        className='btn btn-light'
        onClick={() => Auth.google()}
      >
        <img alt="Google" src={GoogleIcon} style={{ height: '25px', width: '25px' }}/>
      </button>
    </div>
  );
}
export default ImplementedLoginMethods;
