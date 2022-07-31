import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer" >
      <div className="socialMedia">
        <a href="https://www.instagram.com/starbucks/?hl=en" target="_blank">
          {<InstagramIcon />} 
        </a>
        <a href="https://twitter.com/starbucksindia" target="_blank">
          {<TwitterIcon />}
          </a>
        <a href="https://www.facebook.com/Starbucks/" target="_blank">
          {<FacebookIcon />}
          </a>
        <a href="https://in.linkedin.com/company/starbucks-india" target="_blank">
          {<LinkedInIcon />}
          </a>
          
      </div>
      <p> &copy; 2022 centralperk.com</p>
    </div>
  );
}

export default Footer;



