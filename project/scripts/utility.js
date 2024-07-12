function formatLastModifiedDate(dateString) {
    const date = new Date(dateString);
    const day = padZero(date.getDate());
    const month = padZero(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());

    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedDate = document.lastModified;
    const formattedDate = formatLastModifiedDate(lastModifiedDate);
    document.getElementById('lastModifiedDateTime').textContent = formattedDate;

    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
});
