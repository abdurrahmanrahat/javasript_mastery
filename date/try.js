const bookedSlots = [
    {
        "_id": "6728cf5c517753b38c0b5b63",
        "scheduledAt": "2024-11-10T23:00:00.000Z",
        "duration": 59
    },
    {
        "_id": "6728b350517753b38c0a5201",
        "scheduledAt": "2024-11-09T03:00:00.000Z",
        "duration": 59
    },
    {
        "_id": "6728b350517753b38c0a5201",
        "scheduledAt": "2024-11-16T03:00:00.000Z",
        "duration": 59
    },
    {
        "_id": "6728d40c517753b38c0b84ea",
        "scheduledAt": "2024-11-16T03:00:00.000Z",
        "duration": 59
    }
];

export const convertToISODate = (dateString) => {
    // Create a Date object from the date string
    const date = new Date(dateString)

    // Extract year, month, and day in ISO format
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0')

    // Return in "YYYY-MM-DD" format
    return `${year}-${month}-${day}`
}

const checkIfSlotIsBooked = (date, time) => {
    // Convert user's date and time into a local Date object
    const userDateTime = new Date(`${date}T${time}:00`);

    return bookedSlots.some((slot) => {
        // Convert slot's UTC scheduledAt to local time
        // const slotStartTime = new Date(slot.scheduledAt);

        console.log("userDateTime", userDateTime.toISOString())
        console.log("scheduleAt", slot.scheduledAt)


        // return String(userDateTime) === String(slotStartTime);
        return false
    });
};

// Example usage:
const date = "2024-11-09"; // user local date
const time = "09:00"; // user local time
const isBooked = checkIfSlotIsBooked(date, time);
console.log(isBooked ? "Slot is booked" : "Slot is available");
