import { FC } from 'react'

type Style = React.CSSProperties

const contactStyle:Record<string, Style> = {
    h1: {
        padding: '20px 0'
    },
    button: {
        marginTop: '20px',
        width: '100px' ,
        borderRadius: '20px',
    }
}
export const ContactPage: FC = () => {
    return (
        <>
        <h2 style={contactStyle.h1}> Let's get in touch!</h2>
        <form>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Full name</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Caren Brown"
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput3">Phone number</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput3"
                    placeholder="7733084424"
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Your message</label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                />
            </div>
        </form>
        <button style={contactStyle.button}>Submit</button>
        </>
    );
};
