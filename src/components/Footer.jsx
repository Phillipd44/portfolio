import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="text-center text-sm py-4 bg-orange-800 text-white">
      <div className="flex justify-center items-center space-x-4 mb-2">
        <a 
          href="https://www.linkedin.com/in/phillip-desrochers-516645270" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-orange-300 transition-colors"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a 
          href="https://github.com/Phillipd44" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-orange-300 transition-colors"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
      © {currentYear} Phillip DesRochers
    </footer>
  )
}

export default Footer
