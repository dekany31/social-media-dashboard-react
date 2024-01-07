import React from 'react'
import data from "../sample-data.js";
import styled from 'styled-components';

const socialIcons = {
  "facebook": <i className="fa fa-facebook-official" aria-hidden="true"></i>,
  "instagram": <i className="fa fa-instagram" aria-hidden="true"></i>,
  "twitter": <i className="fa fa-twitter" aria-hidden="true"></i>,
  "youtube": <span className="fa-stack fa-2x"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-youtube-play fa-stack-1x fa-inverse"></i></span>
};

const CardStyles = styled.div`
.cardHeadBand {
  height: 5px;
  width: 235px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.card {
  display: flex;
  flex-direction: column;
  width: 235px;
  height: 220px;
  background-color: hsl(228, 28%, 20%);
  color: hsl(228, 34%, 66%);
  font-family: Inter;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
/* cardHeadBand css - szines sav*/
.cardHeadBand-facebook {
  background-color: hsl(208, 92%, 53%);
}
.cardHeadBand-twitter {
  background-color: hsl(203, 89%, 53%);
}
.cardHeadBand-instagram {
  background: linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
}
.cardHeadBand-youtube {
  background-color: hsl(348, 97%, 39%);
}
/*  */
.contact {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  /* az instagram ikon felso szele miatt nagyitas vegett az fa-lg nem rajzolja ki a fa-2x tul nagy*/
  font-size: 24px;
  padding: 0 65px;
}
.fa-facebook-official {
  color: hsl(208, 92%, 53%);
}
.fa-instagram {
  background: linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
  background-clip: text;
  color: transparent;
  margin-top: 1px;
}
.fa-twitter {
  color: hsl(203, 89%, 53%);
}
.fa-stack {
  font-size: 14px;
  color: hsl(348, 97%, 39%);
}
.fa-youtube-play {
  color: hsl(228, 28%, 20%);
}

h2 {
      color: white;
      font-size: 3em;
      margin-top: 0.2em;
    }
h6 {
      letter-spacing: 3px;
      font-weight: 400;
    }
/* last row - followers */
.followersDiff {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
     }
     h4 {
      font-size: 12px;
      margin-left: 5px;
    }
    h4.positive {
      color: hsl(163, 72%, 41%);
    }
    h4.negative {
      color: hsl(356, 69%, 56%);
    }
    .fa-caret-up {
      color: hsl(163, 72%, 41%);
    }
    .fa-caret-down {
      color: hsl(356, 69%, 56%);
    }
    /*  */
`

const PlatformCard = (platform, name, followers, difference) =>
  <CardStyles>
    <div className={"cardHeadBand cardHeadBand-" + platform} />
    <div className="card">
      <div className="contact">
        {socialIcons[platform]}
        <h4>@{name}</h4>
      </div>
      <h2>{Math.abs(followers) > 9999 ? Intl.NumberFormat('en', { notation: 'compact' }).format(followers) : followers}</h2>
      {/* formazza a nagyobb szamokat 12K-ra */}
      <h6>FOLLOWERS</h6>
      <div className="followersDiff">
        {/* a nyilacska */}
        {difference > 0 ? <i className="fa fa-caret-up"></i> : <i className="fa fa-caret-down"></i>}
        <h4 className={difference > 0 ? "positive" : "negative"}>{Math.abs(difference)} Today</h4>
      </div>
    </div>
  </CardStyles>;

const Platforms = () => {
  return [...data.platforms].map(x => Object.entries(x).map(y =>
    PlatformCard(y[0], y[1].name, y[1].followers, y[1].difference)))
}// Object.entries(x) segítségével az adott platformot reprezentáló objektumot konvertálja egy olyan tömbbé, amely az objektum kulcs-érték párait tartalmazza.

export default Platforms