import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import Title from "../components/Title";


function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
     <Title title="Search rooms" />
      <RoomsFilter rooms={rooms} />
      <div className="offers_area padding_top">
        <div className="container">
          <div className="row">
                <RoomsList rooms={sortedRooms} />
          </div>
          
         
        </div>
      </div>
    </>
  );
}

export default withRoomConsumer(RoomContainer);
// import React, { Component } from 'react';
// import RoomsFilter from './RoomFilter';
// import RoomsList from './RoomList';
// import { RoomConsumer } from '../context';
// import Loading from './Loading';

// class RoomsContainer extends Component {
//     render() {
//         return (
//             <RoomConsumer>
//                 {
//                     (value) => {
//                         const { loading, sortedRooms, rooms } = value;
//                         if (loading) {
//                             return <Loading />;
//                         }
//                         return (
//                         <div>
//                             hello from react Rooms Container
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomsList rooms={sortedRooms}/>
//                         </div>
//                         )
//                     }
//                 }
//             </RoomConsumer>
//         );
//     }
// }

// export default RoomsContainer;
