import { FC, useState, FormEvent, ChangeEvent } from 'react'
import './input.styles.css'
import { Input } from './inputs/input'
import { TypingText } from './typingText.tsx'
import { supabase } from '../../../config/supabaseClient'


export const FormData: FC = () => { 

    const [name, setName] = useState<string>('')
    const updateName = (e: ChangeEvent<HTMLInputElement>): void => { 
        const usersName = e.target.value; 
        setName(usersName); 
    }

    const [email, setEmail] = useState<string>('')
    const updateEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        const usersEmail = e.target.value;
        setEmail(usersEmail);
    }

    const [phone, setPhone] = useState<string>('')
    const updatePhone = (e: ChangeEvent<HTMLInputElement>): void => {
        const usersPhone = e.target.value;
        setPhone(usersPhone); 
    }

    const [message, setMessage] = useState<string>('')
    const updateMessage = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        const usersMessage = e.target.value;
        setMessage(usersMessage);
    }

    const [formError, setFormError] = useState<string | null>(null)
    const [formSuccess, setFormSuccess] = useState<string | null>(null)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (!name || !email || !phone || !message) {
        setFormError('Please fill in all the fields.');
        setFormSuccess(null);
        return;
      }
  
      if (!supabase) {
        setFormError('Service is currently unavailable! Please try again later.');
        return;
      }
  
      try {
        const { data, error } = await supabase
          .from('Form_data')
          .insert([{ name, email, phone, message }]);
  
        if (error) {
          console.error('Error:', error);
          setFormError('Please fill in all the fields correctly!');
          setFormSuccess(null);
        } else {
          console.log('Data:', data);
          setFormSuccess('Your message has been sent successfully!');
          setFormError(null);
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setFormError('Unexpected error, please try again later.');
        setFormSuccess(null);
      }
    };
  
    return (
      <div className='page-container'>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <Input 
              type='text'
              value={name}
              label="Full name: "
              id="fullName"
              name="fullName" 
              placeholder="John Pitt" 
              handleOnChange={updateName}
            />
          </div>
          <div className='input-group'>
            <Input 
              type='email'
              value={email}
              label="Your Email: "
              id="email"
              name="email" 
              placeholder="example@gmail.com" 
              handleOnChange={updateEmail}
            />
          </div>
          <div className='input-group'>
            <Input 
              type='text'
              value={phone}
              label='Phone number: '
              id="phoneNumber"
              name="phoneNumber" 
              placeholder="+7733084424" 
              handleOnChange={updatePhone}
            />
          </div>
          <div className='input-group'>
            <label htmlFor='message'>Message: </label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Your message here..." 
              value={message} 
              onChange={updateMessage} 
              rows={4} 
              cols={50}
            />
          </div>
          <div className='buttonDiv'>
            <button type='submit' className='submit-button'>Submit</button>
            <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>
          </div>
        </form>
        {formError && <div className='form-error'>{formError}</div>}
        {formSuccess && <div className='form-success'>{formSuccess}</div>}
        <TypingText/>
        </div>
        <div className='contact-info'>
          <h2>Get in touch</h2>
          <p><em>I’d love to hear from you! Whether you have a question, a project idea, or just want to chat about the latest trends in web design and coding, feel free to reach out.</em></p>
          <div className='info-item'>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-phone-vibrate" viewBox="0 0 16 16">
              <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
              <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.599 4.058a.5.5 0 0 1 .208.676A7 7 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A8 8 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208m12.802 0a.5.5 0 0 1 .676.208A8 8 0 0 1 16 8a8 8 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A7 7 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676M3.057 5.534a.5.5 0 0 1 .284.648A5 5 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A6 6 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284m9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8s-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8s-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648"/>
            </svg>
            <span>+7733084424</span>
          </div>
          <div className='info-item'>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
              <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
            </svg>
            <span>natasa.golubovic90@gmail.com</span>
          </div>
          <div className='info-item-location'>
              <div className='row-info-item'>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-geo" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
              </svg>
              <span>Location</span>
            </div>
            <div className='map'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.610031179395!2d-87.86716092499164!3d42.05154195453871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb7f08a5e2e5d%3A0x9b0254fbd2b168!2s9449%20Bay%20Colony%20Dr%2C%20Des%20Plaines%2C%20IL%2060016%2C%20USA!5e0!3m2!1sen!2srs!4v1723335900596!5m2!1sen!2srs" 
                width="500" 
                height="300" 
                style={{ border: 0, paddingTop: '20px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  };