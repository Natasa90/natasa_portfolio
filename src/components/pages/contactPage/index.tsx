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
            <span>+7733084424</span>
          </div>
          <div className='info-item'>
            <span>natasa.golubovic90@gmail.com</span>
          </div>
          <div className='info-item-location'>
            <div className='row-info-item'>
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