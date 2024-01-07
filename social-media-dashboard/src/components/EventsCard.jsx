import React from 'react'
import data from "../sample-data.js";
import styled from 'styled-components';

const socialIcons = {
  "facebook": <i className="fa fa-facebook-official" aria-hidden="true"></i>,
  "instagram": <i className="fa fa-instagram" aria-hidden="true"></i>,
  "twitter": <i className="fa fa-twitter" aria-hidden="true"></i>,
  "youtube": <span className="fa-stack fa-2x"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-youtube-play fa-stack-1x fa-inverse"></i></span>
};

const EventCardStyles = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 110px;
  flex: 0 0 235px;
  background-color: hsl(228, 28%, 20%);
  padding: 20px;
  border-radius: 5px;
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
  .contact {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;

    h3 {
      align-self: center;
      color: hsl(228, 34%, 66%);
      font-size: 12px;
    }
  }
  .bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h2 {
      color: white;
      text-align: center;
    }

    .span {
      display: flex;
      flex-direction: row;
      align-items: center;
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
  }
}
`

const EventsCard = (platform, type, amount, modifier) =>
  <EventCardStyles>
    <div className="contact">
      <h3>{type}</h3>
      {socialIcons[platform]}
    </div>
    <div className="bottom">
      <h2>{Math.abs(amount) > 9999 ? Intl.NumberFormat('en', { notation: 'compact' }).format(amount) : amount}</h2>
      <span className="span">
        {modifier > 0 ? <i className="fa fa-caret-up"></i> : <i className="fa fa-caret-down"></i>}
        <h4 className={modifier > 0 ? "positive" : "negative"}>{Math.abs(modifier)}%</h4>
      </span>
    </div>
  </EventCardStyles>


const Events = () => {
  return [...data.events].map(x =>
    EventsCard(x.platform, x.type, x.amount, x.modifier));

}
export default Events