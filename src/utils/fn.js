export const getCookie = (name) => {
    const matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };
export const setCookie = (name, value, props) => {
    props = {
        path: '/',
        ...props,
    };
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
        const d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
    }
    if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
        updatedCookie += '; ' + propName;
        const propValue = props[propName];
        if (propValue !== true) {
        updatedCookie += '=' + propValue;
        }
    }
    document.cookie = updatedCookie;
};
export const deleteCookie = (name) => {
  setCookie(name, null, { expires: -1 });
};
const getDaysForCard = (days) => (
  days === 0 ? 'Сегодня'
    : days === 1 ? 'Вчера'
      : days > 1 ? `${days} дня(-ей) назад`
        : '');

export const conversionDateForCard = (date) => {
  const dayCreated = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffTime = Math.ceil((today - dayCreated) / (60 * 60 * 24 * 1000));
  const hours = dayCreated.getHours() > 9 ? dayCreated.getHours() : `0${dayCreated.getHours()}`
  const min = dayCreated.getMinutes() > 9 ? dayCreated.getMinutes() : `0${dayCreated.getMinutes()}`
  return `${getDaysForCard(diffTime)}, ${hours}:${min} i-GMT+${dayCreated.getTimezoneOffset() * (-1) / 60}`;
};