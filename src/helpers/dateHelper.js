export const getDayFromTimestamp = (timestamp) => {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    return days[new Date(+timestamp).getDay()]
}

export const getMonthFromTimestamp = (timestamp) => {
    const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    return months[new Date(+timestamp).getMonth()];
}

export const getYearFromTimestamp = (timestamp) => new Date(+timestamp).getFullYear();

export const getFullDate = (timestamp) => {
    const date = new Date(+timestamp)
    return `${date.getDate()} ${getMonthFromTimestamp(timestamp)} ${getYearFromTimestamp(timestamp)}`
}

export const getTimeFromTimestamp = (timestamp) => {
    const date = new Date(+timestamp)
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}.${minutes} WITA`
}