const toPersianNumber = (num) => {
  if (num === null || num === undefined) return "";

  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num.toString().replace(/[0-9]/g, (digit) => persianDigits[digit]);
};

export default toPersianNumber;
