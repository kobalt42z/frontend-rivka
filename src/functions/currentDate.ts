export const currentDate = () => {
    let currentDate = new Date();
    let day: string | number = currentDate.getDate();
    let month: string | number = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    let year = currentDate.getFullYear();

    // Pad the day and month with leading zeros if necessary
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    let formattedDate = day + '/' + month + '/' + year;
    return formattedDate;
}