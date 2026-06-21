
export function getDate(date) {
    const d = new Date(date);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        .format(d)
        .replace(/^[A-Za-z]+/, m => m.toUpperCase());
}

export function formattedDate(date) {
    const d = new Date(date);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        .format(d)
        .replace(/^[A-Za-z]+/, m => m.toUpperCase());
}
