export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePhone = (number)=> {
  const returnPrefix = "+254";
  const re =
    /^((?:254|\+254|0)((?<xa>7(?:(?:[0123456789][0-9])|(?:5[7-9])|(6[8-9]))[0-9]{6})|(?<xb>1(?:(?:[1][0-1]))[0-9]{6})))$/;
  if (re.test(number)) {
    var x = number.match(re);
    if (x.groups.xa) {
      return returnPrefix + x.groups.xa;
    } else if (x.groups.xb) {
      return returnPrefix + x.groups.xb;
    }
  } else return false;
}
