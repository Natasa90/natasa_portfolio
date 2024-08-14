import { FC, useState, ChangeEvent } from 'react'
import './input.styles.css'
import { Input } from './inputs/input'
import { TypingText } from './typingText.tsx'

export const FormData: FC = () => { 

    const [fullName, setFullName] = useState<string>('')
    const updateFullName = (e: ChangeEvent<HTMLInputElement>): void => { 
        const usersFullName = e.target.value; 
        setFullName(usersFullName); 
    }

    const [email, setEmail] = useState<string>('')
    const updateEmail = (e: ChangeEvent<HTMLInputElement>): void => {
        const usersEmail = e.target.value;
        setEmail(usersEmail);
    }

    const [phoneNumber, setPhoneNumber] = useState<number>(0)
    const updatePhoneNumber = (e: ChangeEvent<HTMLInputElement>): void => {
        const usersPhone = e.target.value;
        setPhoneNumber(Number(usersPhone)); 
    }

    const [message, setMessage] = useState<string>('')
    const updateMessage = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        const usersMessage = e.target.value;
        setMessage(usersMessage);
    }

    const handleSubmit = () => {
      console.log(fullName); 
    }

    return (
      <div className='page-container'>
        <div className='form-container'>
          <div className='input-group'>
            <Input 
                label="Full name: "
                id="fullName"
                name="fullName" 
                placeholder="John Pitt" 
                handleOnChange={updateFullName}
            />
          </div>
          <div className='input-group'>
            <Input 
                label="Your Email: "
                id="email"
                name="email" 
                placeholder="example@gmail.com" 
                handleOnChange={updateEmail}
            />
          </div>
          <div className='input-group'>
            <Input 
                label='Phone number: '
                id="phoneNumber"
                name="phoneNumber" 
                placeholder="+7733084424" 
                handleOnChange={updatePhoneNumber}
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
            <button className='submit-button' onClick={handleSubmit}>Submit</button>
            <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>
          </div>
          <div className='typing-text-box'>
            <TypingText/>
          </div>
        </div>
        <div className='contact-info'>
            <h2>Get in touch</h2>
            <p><em>I’d love to hear from you! Whether you have a question, a project idea, or just want to chat about the latest trends in web design and coding, feel free to reach out.
            </em></p>
            <div className='info-item'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg>
                <span>+7733084424</span>
            </div>
            <div className='info-item'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
              <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
            </svg>
                <span>natasa.golubovic90@gmail.com</span>
            </div>
            <div className='info-item-location'>
                <div className='row-info-item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                    </svg>
                    <span>Location</span>
                </div>
            <div className='map'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.610031179395!2d-87.86716092499164!3d42.05154195453871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb7f08a5e2e5d%3A0x9b0254fbd2b168!2s9449%20Bay%20Colony%20Dr%2C%20Des%20Plaines%2C%20IL%2060016%2C%20USA!5e0!3m2!1sen!2srs!4v1723335900596!5m2!1sen!2srs" 
                width="500" 
                height="300" 
                style={{ border: 0, paddingTop:'20px'}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            </div>
        </div>
      </div>
    )
  }