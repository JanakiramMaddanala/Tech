export const dateStringToDate = (dateString: string): Date => {
    const [year, month, date] = dateString.split('/').map(item => parseInt(item));
    return new Date(year, month, date);
}