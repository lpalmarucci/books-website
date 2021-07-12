export const formatDate = (date) => {

    let d = date.getDate();
    let m = date.getMonth();
    let h = date.getHours();
    let min = date.getMinutes();
    const y = date.getFullYear();

    m = (m + 1) < 10
        ? `0${m + 1}`
        : m;
    d = d < 10
        ? `0${d}`
        : d;
    h = h < 10
        ? `0${h}`
        : h;
    min = min < 10
        ? `0${min}`
        : min;

    return `${y}/${m}/${d} ${h}:${min}`;
}
