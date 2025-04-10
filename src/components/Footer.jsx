import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="text-center text-sm py-4 bg-orange-800 text-white">
      © {currentYear} Phillip DesRochers
    </footer>
  )
}

export default Footer
