function formatNumberWithCommas(number: Number) {
    // Convert the number to a string and split into integer and decimal parts
    const parts = number.toString().split('.');
    
    // Add commas to the integer part
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    // Join the parts back together (in case there were decimal places)
    return parts.join('.');
}

export { formatNumberWithCommas }



import jalaali from "jalaali-js";

export function convertToJalali(date: string) {
    const newDate = new Date(date);
    const jalaaliDate = jalaali.toJalaali(
      newDate.getFullYear(),
      newDate.getMonth() + 1,
      newDate.getDate(),
    );
  
    const months = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];
  
    const day = jalaaliDate.jd;
    const month = months[jalaaliDate.jm - 1];
    const year = jalaaliDate.jy;
  
    return `${day} ${month} ${year}`;
  }
  