// {
//   "drivers": [
//     {
//       "avail_radius": "a",
//       "id": "b",
//       "position_id": "c",
//       "position_lat": "d",
//       "position_long": "e"
//     }
//   ],
//  "stuffs": [
//     {
//       "id": "a",
//       "recver_name": "b",
//       "recver_position_id": "c",
//       "recver_position_lat": "d",
//       "recver_position_long": "e",
//       "sender_name": "f",
//       "sender_position_id": "a",
//       "sender_position_lat": "b",
//       "sender_position_long": "c"
//     }
//   ]
// }

const formToApiSchema = (form: any) => {
  const { drivers, stuffs } = form;
  const apiDrivers = drivers.map((driver: any) => ({
    avail_radius: parseFloat(driver.avail_radius),
    id: driver.id,
    position: {
      id: driver.position_id,
      lat: parseFloat(driver.position_lat),
      long: parseFloat(driver.position_long),
    },
  }));
  const apiStuffs = stuffs.map((stuff: any) => ({
    id: stuff.id,
    recver_name: stuff.recver_name,
    recver_position: {
      id: stuff.recver_position_id,
      lat: parseFloat(stuff.recver_position_lat),
      long: parseFloat(stuff.recver_position_long),
    },
    sender_name: stuff.sender_name,
    sender_position: {
      id: stuff.sender_position_id,
      lat: parseFloat(stuff.sender_position_lat),
      long: parseFloat(stuff.sender_position_long),
    },
  }));
  return {
    drivers: apiDrivers,
    stuffs: apiStuffs,
  };
};

export default formToApiSchema;
