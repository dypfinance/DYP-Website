import React from "react";
import CircleButton from "../../assets/General/CircleButton";
import ChevronArrowSvg from "../../assets/General/ChevronArrowSvg/ChevronArrowSvg";
import PropTypes from "prop-types";

const EventCard = ({ date, month, title, link, year }) => {
  return (
    <div className="event-card-wrapper">
      <div className="row justify-content-between" style={{gap: 15, alignItems: 'center'}}>

          <div className="event-date-wrapper">
             <span id='eventDate'>{date}</span>
              <span id='eventMonth'>{month}</span>
          </div>
          <div style={{display: 'grid'}}>
          <span id="eventTitle">{title}</span>
          <span id="eventYear">{year}</span>
          </div>

         
      </div>
      
    </div>
  );
};

EventCard.propTypes = {
  date: PropTypes.string,
  month: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  year: PropTypes.string,

};

export default EventCard;
