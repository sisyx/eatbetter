function parseDate(dateString: string) {
    const date = new Date(dateString);
    // Format the date to "YYYY-MM-DD"
    const formattedDate = date.toISOString().split('T')[0];
    return formattedDate
}


export { parseDate };