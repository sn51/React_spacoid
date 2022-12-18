import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faTwitter,
  faInstagram,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";




export default function SocialFollow() {
  return (

    <div class="social-container" >
      <div class="twitter">
        <a href="https://www.twitter.com/jamesqquick" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>


      <div class="instagram">
        <a href="https://www.instagram.com/learnbuildteach"
          className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <div class="discord">
        <a href="https://www.discord.com/c/jamesqquick"
          className="discord social">
          <FontAwesomeIcon icon={faDiscord} size="2x" />
        </a>
      </div>


    </div>

  );
}