import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <div className="offers_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-100">
                <h3>Fearture Room</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-4">
              <div className="single_offers">
                <div className="about_thumb">
                  <img src="img/offers/1.png" alt="" />
                </div>
                <h3>
                  Up to 35% savings on Club <br />
                  rooms and Suites
                </h3>
                <ul>
                  <li>Luxaries condition</li>
                  <li>3 Adults &amp; 2 Children size</li>
                  <li>Sea view side</li>
                </ul>
                <a href="#" className="book_now">
                  book now
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="single_offers">
                <div className="about_thumb">
                  <img src="img/offers/2.png" alt="" />
                </div>
                <h3>
                  Up to 35% savings on Club <br />
                  rooms and Suites
                </h3>
                <ul>
                  <li>Luxaries condition</li>
                  <li>3 Adults &amp; 2 Children size</li>
                  <li>Sea view side</li>
                </ul>
                <a href="#" className="book_now">
                  book now
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-4">
              <div className="single_offers">
                <div className="about_thumb">
                  <img src="img/offers/3.png" alt="" />
                </div>
                <h3>
                  Up to 35% savings on Club <br />
                  rooms and Suites
                </h3>
                <ul>
                  <li>Luxaries condition</li>
                  <li>3 Adults &amp; 2 Children size</li>
                  <li>Sea view side</li>
                </ul>
                <a href="#" className="book_now">
                  book now
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
