import React, { useState, useRef } from 'react'
import axios from 'axios'

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('http://localhost:5000/send-email', form);
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setForm({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='relative w-full min-h-screen bg-orange-200'>
      <div className='max-container'>
        <div className='flex-1 min-w-[50%] flex flex-col'>
          <h1 className='head-text'>Reach Out</h1>

          {status.message && (
            <div className={`mt-4 p-4 rounded-md ${
              status.type === 'success' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
            }`}>
              {status.message}
            </div>
          )}

          <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
            <label className='text-black-500 font-semibold'>
              Name
              <input type='text' name='name' className='input' placeholder='Anakin Skywalker' required value={form.name} onChange={handleChange} />
            </label>
            <label className='text-black-500 font-semibold'>
              Email
              <input type='email' name='email' className='input' placeholder='randomstuff@company.com' required value={form.email} onChange={handleChange} />
            </label>
            <label className='text-black-500 font-semibold'>
              Message
              <textarea name='message' rows={4} className='textarea' placeholder='Share your thoughts, questions, or requests here...' required value={form.message} onChange={handleChange} />
            </label>
            <button type='submit' className='btn' disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
