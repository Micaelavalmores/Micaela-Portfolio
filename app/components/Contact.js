"use client"

import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={styles['contact-container']}>
      <div className={styles['contact-form-section']}>
        <div className={styles['contact-header']}>
          <p className={styles['contact-subheading']}>Contact me here</p>
          <h2 className={styles['contact-heading']}>Let's get in touch</h2>
        </div>
        <form className={styles['contact-form']} onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>
          <button type="submit" className={styles['submit-button']}>
            Send now
          </button>
        </form>
      </div>

      <div className={styles['contact-info-section']}>
        <div className={styles['map-container']}>
          <img 
            src="/images/vancouver-map.png" 
            alt="Vancouver, BC Map" 
            className={styles['map-image']}
          />
        </div>
        <div className={styles['location-info']}>
          <div className={styles['location-pin']}>
            <img src="/icons/location-red.svg" alt="Location pin" className={styles['pin-icon']} />
            <span className={styles['location-text']}>Based in Vancouver, BC</span>
          </div>
          <p className={styles['location-description']}>
            Based in Vancouver, BC. I'm perfectly positioned to collaborate with local teams and startups in the heart of Canada's tech and design scene. Whether you're a nearby business seeking intuitive UX/UI solutions or a remote client wanting seamless digital experiences, I'm just a quick message away. Let's connect and bring your project to life.
          </p>
          <div className={styles['social-links']}>
            <a href="https://www.linkedin.com/in/micaela-valmores" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/icons/linkedind-logo-black.svg" alt="LinkedIn" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <img src="/icons/discord-logo-black.svg" alt="Discord" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="/icons/github.svg" alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
