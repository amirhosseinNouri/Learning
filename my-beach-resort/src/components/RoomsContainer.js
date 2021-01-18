import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) return <Loading></Loading>;
  return (
    <div>
      Rooms Container
      <RoomsFilter rooms={rooms}></RoomsFilter>
      <RoomList rooms={sortedRooms}></RoomList>
    </div>
  );
}

export default withRoomConsumer(RoomsContainer);

// export default function RoomsContainer() {
//   return (
//     <>
//       <RoomConsumer>
//         {(value) => {
//           const { loading, sortedRooms, rooms } = value;

//           if (loading) return <Loading></Loading>;
//           return (
//             <div>
//               Rooms Container
//               <RoomsFilter rooms={rooms}></RoomsFilter>
//               <RoomList rooms={sortedRooms}></RoomList>
//             </div>
//           );
//         }}
//       </RoomConsumer>
//     </>
//   );
// }
