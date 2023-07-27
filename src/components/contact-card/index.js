import './contact-card.css'
import { ServoiceFeedback } from 'react-feedback-widget';

const config = {
  servId: 'cl8t3e61z000709l0fy773k38',
  servPID: 'cl8t3e61z000809l0yk88mw73',
  userEmail: 'test@feedbackisgreat.com',    
  userFirstName: 'Brendan',
  userLastName: 'Murphy',
};

const ContactCard = () => {
    return (
      <div>
        <div className='d-flex justify-content-center'>
            <h1 className='tagline'><strong>Weymouth Sons of Italy</strong></h1>
          </div>
          <div className='d-flex justify-content-center'>
            <body><p>Our Weymouth function hall is available for booking. This large capacity venue is handicap accessible, has a full bar, 
              and can handle a capacity of 250 people.</p></body>
          </div>
          <div className="d-flex justify-content-center">
            <div className="card contactCard" >
              <div className="card-body">
                <h5 className="card-title">Function Hall Booking</h5>
                <span className="card-text"><strong>To book the Weymouth Function Hall, please contact:</strong></span>
                <h6 className="card-subtitle mb-2 text-muted">Tom Morse, Manager</h6>
                <span className="card-text"><strong>Sons of Italy, Weymouth</strong></span>
                <br />
                <span className="card-text">tom@weymouthdogshop.com </span>
                <br />
                <span className="card-text">(781) 335-9820</span>
                <br />
                <br />
                <ServoiceFeedback config={config}>
                    <button className="btn btn-primary" id="feedbackButton" type="button">Feedback?</button>
                </ServoiceFeedback>
                <br />
              </div>
            </div>
      </div>
    </div>
    );
  };
  export default ContactCard;