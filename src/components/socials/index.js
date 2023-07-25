import "./socials.css";
import { SocialIcon } from 'react-social-icons';

const Socials = ( ) => {
  return (
    <div className="row">
    <div className="col">
    </div>
    <div className="col-10 d-flex justify-content-center" id="socials">
          <SocialIcon style={{ height: 38, width: 38 }} className ="social-icon" url="http://www.youtube.com/denhurley" />
          <SocialIcon style={{ height: 38, width: 38 }} className ="social-icon" url="http://www.vimeo.com/user582835" />
          <SocialIcon style={{ height: 38, width: 38 }} className ="social-icon" url="https://twitter.com/itsdendo" />
          <SocialIcon style={{ height: 38, width: 38 }} className ="social-icon" url="http://dennishurley.tumblr.com/" />
          <SocialIcon style={{ height: 38, width: 38 }} className ="social-icon" url="http://instagram.com/dendohurley" />
          <SocialIcon style={{ height: 38, width: 38 }} className ="social-icon" url="http://www.facebook.com/dendocomedy" />
    </div>
    <div className="col">
    </div>
  </div>
  );
};

export default Socials;