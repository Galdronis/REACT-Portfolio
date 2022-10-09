import React from 'react'
function ContactForm() {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="container mt-5" id='contact'>
      <h2 className="mb-3">Contact Me!</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name?
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email?
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message?
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}

export default ContactForm