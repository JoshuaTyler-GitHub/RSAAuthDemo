import RSALogo from '../images/RSA.png';

function Footer() {
  return (
    <div className='d-flex justify-content-around mt-5'>
      <img alt='RSA' src={RSALogo} style={{ height: '20px' }} />
      <span className='fw-light'>©2015-2023 RSA Security LLC</span>
    </div>
  );
}
export default Footer;
