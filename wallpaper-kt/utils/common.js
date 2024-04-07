
export function getTimeDiff(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;

    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const threeMonths = month * 3;

    if (diff < minute) {
        return '1分钟内';
    } else if (diff < hour) {
        const minutes = Math.floor(diff / minute);
        return `${minutes}分钟前`;
    } else if (diff < day) {
        const hours = Math.floor(diff / hour);
        return `${hours}小时前`;
    } else if (diff < month) {
        const days = Math.floor(diff / day);
        return `${days}天前`;
    } else if (diff < threeMonths) {
        const months = Math.floor(diff / month);
        return `${months}月前`;
    } else {
        return null;
    }
}
