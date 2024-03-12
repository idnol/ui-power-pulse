const getDate = (data) => {
    const today = data ? new Date(data) : new Date(); // Convert data to Date object if provided, or use the current date

    let day = today.getDate();
    let month = today.getMonth() + 1;
    const year = today.getFullYear();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
}
export default getDate;
