import './contact-card.css'
import { ServoiceFeedback } from 'react-feedback-widget';
import InfoBox from '../info-box'

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
        <InfoBox></InfoBox>
        <img src='/images/function-hall-weymouth.jpg' alt='Weymouth Function Hall' class="rounded mx-auto d-block smallerImage"></img>
          <div className="d-flex justify-content-center">
            <div className="card contactCard" >
              <div className="card-body">
                <h1 className="card-title">Weymouth Function Hall Booking</h1>
                <p className="card-text"><strong>To book the Weymouth Function Hall please call</strong></p>
                <br />
                <span className="card-text">Krista Gotell: 339-469-1207</span>
                <br />
                <span className="card-text"><strong>Event Coordinator, Sons of Italy Weymouth</strong></span>
                <br />
                <span className="card-text"><strong>weymouthsoihallrental@gmail.com</strong></span>
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