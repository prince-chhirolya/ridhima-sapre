'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CreditTag = () => {
  const [isVisible, setIsVisible] = useState(true)
  
  // This effect ensures the site functionality depends on the credit tag
  useEffect(() => {
    // Create a verification function that checks if the credit tag exists
    const verifyCredit = () => {
      const creditElement = document.getElementById('csi-credit-tag')
      
      // Check if credit tag exists and is visible
      if (!creditElement || 
          window.getComputedStyle(creditElement).display === 'none' || 
          window.getComputedStyle(creditElement).visibility === 'hidden' ||
          creditElement.offsetParent === null) {
        
        // Make entire website content invisible
        document.body.style.visibility = 'hidden';
        
        // Create a blocking overlay that will still be visible
        let overlay = document.getElementById('csi-blocking-overlay');
        if (!overlay) {
          overlay = document.createElement('div');
          overlay.id = 'csi-blocking-overlay';
          overlay.style.position = 'fixed';
          overlay.style.top = '0';
          overlay.style.left = '0';
          overlay.style.width = '100%';
          overlay.style.height = '100%';
          overlay.style.backgroundColor = 'rgba(0,0,0,0.9)';
          overlay.style.zIndex = '9999';
          overlay.style.display = 'flex';
          overlay.style.alignItems = 'center';
          overlay.style.justifyContent = 'center';
          overlay.style.flexDirection = 'column';
          overlay.style.color = 'white';
          overlay.style.textAlign = 'center';
          overlay.style.padding = '20px';
          overlay.style.visibility = 'visible'; // Ensure overlay is visible
          
          const message = document.createElement('h2');
          message.textContent = 'Website Content Unavailable';
          message.style.marginBottom = '10px';
          message.style.fontSize = '24px';
          
          const subMessage = document.createElement('p');
          subMessage.textContent = 'The Chhirolya Super Intelligence (CSI) credit tag is required for this website to function.';
          subMessage.style.marginBottom = '20px';
          
          const subMessage2 = document.createElement('p');
          subMessage2.textContent = 'Please restore the credit tag to view the website content.';
          subMessage2.style.fontSize = '14px';
          subMessage2.style.opacity = '0.7';
          
          overlay.appendChild(message);
          overlay.appendChild(subMessage);
          overlay.appendChild(subMessage2);
          document.body.appendChild(overlay);
        }
        
        console.error('Critical component missing: CSI Credit Tag');
        setIsVisible(false);
        return false;
      } else {
        // Remove overlay if it exists and tag is present
        const overlay = document.getElementById('csi-blocking-overlay');
        if (overlay) {
          document.body.removeChild(overlay);
        }
        
        // Make website content visible again
        document.body.style.visibility = 'visible';
        return true;
      }
    }
    
    // Run verification immediately and periodically
    verifyCredit();
    const interval = setInterval(verifyCredit, 1000);
    
    // Also verify on any DOM changes that might affect the credit tag
    const observer = new MutationObserver(() => {
      verifyCredit();
    });
    
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class', 'id']
    });
    
    return () => {
      clearInterval(interval);
      observer.disconnect();
    }
  }, []);

  return (
    <motion.div
      id="csi-credit-tag"
      className="w-full py-3 bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-indigo-900/30 backdrop-blur-sm border-b border-indigo-800/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      data-verification="csi-required-element"
    >
      <div className="container mx-auto px-4">
        <motion.p 
          className="text-center text-sm md:text-base font-medium"
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Developed by ✨ Chhirolya Group using Chhirolya Super Intelligence (CSI)
          </span>
          <span className="ml-2 text-xs text-indigo-300">100% AI Generated Website</span>
        </motion.p>
      </div>
    </motion.div>
  )
}

export default CreditTag