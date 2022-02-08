import React from "react";
import BannerCarousel from "./bannerCarousel";
export default class LatestUpdates extends React.Component
{
  formatDate(newDate) {
    const months = {
      0: 'Jan',
      1: 'Feb',
      2: 'Mar',
      3: 'Apr',
      4: 'May',
      5: 'Jun',
      6: 'Jul',
      7: 'Aug',
      8: 'Sep',
      9: 'Oct',
      10: 'Nov',
      11: 'Dec',
    }
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const d = new Date(newDate)
    const year = d.getFullYear()
    const date = d.getDate()
    const monthIndex = d.getMonth()
    const monthName = months[d.getMonth()]
    const dayName = days[d.getDay()] // Thu
    const formatted = `${monthName} ${date}`
    return formatted.toString()
  }

  render() {
    return (
      <>
        <div className="earn-hero-area App-container latestupdates">
          <div className="container">
            <BannerCarousel announcements={this.props.announcements} />
            <div className="breadcrumbs">
              <a href="/">
                <span>Home</span>
              </a>
              <span>Latest Updates</span>
            </div>
            <div className="earn-hero-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div className="earn-hero-content p4token-wrapper">
                    <div className="row">
                      <div className="col-md-6 firstcol">
                        <h5 className="h3 text-left">
                          <b>Latest Announcements</b>
                        </h5>
                        <ul className="text-left event-list">
                          {
                            this.props.announcements.map((announcements) =>
                                <a target='_blank' href={announcements.link}>
                                  <span>{this.formatDate(announcements.date)}</span>
                                  <li>{announcements.title}</li>
                                </a>
                            )
                          }
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h5 className="h3 text-left">
                          <b>Latest Events</b>
                        </h5>
                        <ul className="text-left event-list">
                          {
                            this.props.events.map((events) =>
                                <a target='_blank' href={events.link}>
                                  <span>{this.formatDate(events.date)}</span>
                                  <li>{events.title}</li>
                                </a>
                            )
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
