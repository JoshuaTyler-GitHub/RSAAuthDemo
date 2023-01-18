// scripts
import Auth from '../scripts/Auth';
import State from '../scripts/State';

function UsernamePassword() {
  const { password, username } = State.getState();

  return (
    <div className='py-2' id='form-root'>
      {/* email */}
      <div className='form-group'>
        <input
          id='email'
          type='email'
          className='form-control'
          placeholder='User ID'
          value={username}
          onChange={(e) => State.onUsername(e.target.value)}
        />
      </div>
      {/* password */}
      <div className='form-group mt-2'>
        <input
          id='password'
          type='password'
          className='form-control'
          placeholder='Password'
          value={password}
          onChange={(e) => State.onPassword(e.target.value)}
        />
      </div>
      {/* buttons */}
      <div className='d-flex justify-content-around mt-3'>
        <button
          className='btn btn-primary'
          style={{ width: '150px' }}
          onClick={() => Auth.emailAndPassword()}
        >
          Sign In
        </button>
        <button
          className='btn btn-sm btn-white text-primary'
          style={{ width: '150px' }}
          type='button'
          onClick={() => Auth.forgotPassword()}
        >
          Forgot Password
        </button>
      </div>
      {/* flex box */}
    </div>
  );
}
export default UsernamePassword;
