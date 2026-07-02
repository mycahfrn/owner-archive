
export function getDate(date: string) {
    const d = new Date(date);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        .format(d)
        .replace(/^[A-Za-z]+/, m => m.toUpperCase());
}

export function formattedDate(date: string) {
    const d = new Date(date);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        .format(d)
        .replace(/^[A-Za-z]+/, m => m.toUpperCase());
}

export const getMonthKey = (dateString: string): string => {
    return new Date(dateString)
        .toLocaleString('en-US', { month: 'long', year: 'numeric' })
        .toUpperCase();
};

