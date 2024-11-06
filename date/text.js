const bookedSlots = [
    {
        "_id": "6728b350517753b38c0a5201",
        "scheduledAt": "2024-11-09T03:00:00.000Z",
        "duration": 59
    },
    {
        "_id": "6728cf5c517753b38c0b5b63",
        "scheduledAt": "2024-11-10T23:00:00.000Z",
        "duration": 59
    },
    {
        "_id": "6728d40c517753b38c0b84ea",
        "scheduledAt": "2024-11-16T03:00:00.000Z",
        "duration": 59
    }
] // utc time

const slot = {
    _id: "6728d943517753b38c0bb7e9",
    day: "Saturday",
    startTime: "09:00",
    endTime: "09:59"
  }; // user local time based on location time zone

const isBooked = bookedSlots.some(bookedSlot => {
    // i need to compare every bookSlot with the above slot. if anyone match with slot, then will return true for him. otherwise return false.
    console.log(bookedSlot)
})

console.log(isBooked)