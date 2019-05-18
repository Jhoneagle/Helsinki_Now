export const cleanHTML = (value) => {
  return value.replace(/<(\/)*p>/g, "\n")
    .replace(/<(\/)*span>/g, "")
    .replace(/<(\/)*br>/g, "\n")
    .replace(/<br \/>/g, "\n")
    .replace(/<(\/)*b>/g, "")
    .replace(/<(\/)*strong>/g, "")
    .replace(/<(\/)*h[1-9]>/g, "")
    .replace(/<(\/)*a(.)*>/g, "")
    .replace(/^\s+|\s+$/g, '')
    .replace(/((\.)|(!)|(\?))([A-Y])/g, "$1 $5")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&apos;/g, "'")
    .replace(/&pound;/g, "£")
    .replace(/&euro;/g, "€")
    .replace(/([a-y])([A-Y])/g, "$1 $2");
};

export const checkUrl = (value) => {
  if (value.startsWith('https://') || value.startsWith('http://')) {
    return value;
  } else {
    return 'https://' + value;
  }
};

export const parseTimeStamp = (value) => {
  if (value === null) return null;
  
  const dayTime = value.split("T");
  const dayComp = dayTime[0].split("-");
  const timeComp = dayTime[1].split(":");
  
  let result = timeComp[0] + ':' + timeComp[1] + ' ';
  result += dayComp[2] + '.' + dayComp[1] + '.' + dayComp[0];
  
  return result;
};

export const hoursFromStringToInt = (value) => {
  if (value === null) return null;
  
  const parts = value.split(":");
  return parseInt(parts[0]);
};