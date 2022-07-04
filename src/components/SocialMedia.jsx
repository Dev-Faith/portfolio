import React from 'react';
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {ExternalLink } from 'react-external-link';

const SocialMedia = () => {
  return (
   <div className="app__social">
          <div>
               <ExternalLink href="https://twitter.com/Dev_Faith">
                  <BsTwitter />
                  </ExternalLink>
       </div>
          <div>
              <ExternalLink href="https://web.facebook.com/olu.muyiwa.7549/">
                  <FaFacebookF />
                  </ExternalLink>
       </div>
          <div>
              <ExternalLink href="https://www.instagram.com/eyitope_faith/">
                  < BsInstagram />
                  </ExternalLink>
       </div>
   </div>
  )
}

export default SocialMedia;