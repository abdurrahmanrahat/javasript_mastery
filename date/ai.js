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

const slot = {
    _id: "6728d943517753b38c0bb7e9",
    day: "Saturday",
    startTime: "09:00",
    endTime: "09:59"
};

function parseTime(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    return { hours, minutes };
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function isSlotBooked(bookedSlot, slotDate, slot) {
    const bookedDate = new Date(bookedSlot.scheduledAt);
    const slotStart = parseTime(slot.startTime);

    // Set slot start time (UTC calculation)
    const slotStartDate = new Date(slotDate);
    slotStartDate.setUTCHours(slotStart.hours, slotStart.minutes, 0, 0);
    slotStartDate.setMinutes(slotStartDate.getMinutes());
    console.log("....slotDate", slotDate)

    function convertToUTC(localDate, localTime) {
        // Create a new Date object representing the local time
        const localDateTime = new Date(`${localDate} ${localTime}`);

        // Get the timezone offset in milliseconds
        const timezoneOffset = localDateTime.getTimezoneOffset() * 60000;

        // Calculate the UTC time in milliseconds
        const utcTime = localDateTime.getTime() - timezoneOffset;

        // Create a new Date object from the UTC time
        const utcDate = new Date(utcTime);

        return utcDate;
    }

    // const slotStartDate = convertToUTC(slotDate, `${slotStart.hours}:${slotStart.minutes}`)

    const timezoneOffset = slotStartDate.getTimezoneOffset() * 60000
    const UtcSlotStartDate = slotStartDate.getTime() + timezoneOffset;
    console.log(new Date(UtcSlotStartDate))
    console.log(bookedDate)

    if (String(new Date(UtcSlotStartDate)) === String(bookedDate)) {
        return {
            date: formatDate(slotStartDate),
            startTime: slot.startTime
        };
    }

    return null;
}

function checkNextThirtyDays(slot, bookedSlots) {
    const disabledFor = {};
    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const slotDayIndex = days.indexOf(slot.day);

    for (let i = 0; i < 30; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        if (currentDate.getDay() === slotDayIndex) {
            bookedSlots.forEach(bookedSlot => {
                const result = isSlotBooked(bookedSlot, currentDate, slot);
                console.log("result", result)
                if (result) {
                    // disabledFor["date"] =  result.date;
                    // disabledFor["startTime"] = result.startTime;
                    disabledFor[result.date] = result.startTime;
                }
            });
        }
    }

    return disabledFor;
}

const disabledFor = checkNextThirtyDays(slot, bookedSlots);
console.log('disabledFor', disabledFor);