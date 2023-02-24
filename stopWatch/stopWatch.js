var min = 0;
var hr = 0;
var sec = 0;
var count = 0;
var flag = false;

export const stop = () => {
  flag = false;
  stopWatch();
};
export const reset = () => {
  flag = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("hour").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
  stopWatch();
};
export const start = () => {
  flag = true;

  stopWatch();
};
export const stopWatch = () => {
  if (flag == true) {
    count = count + 1;
    document.getElementById("count").innerHTML = count;
    if (count == 100) {
      sec = sec + 1;
      count = 0;
      document.getElementById("sec").innerHTML = sec;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
      document.getElementById("min").innerHTML = min;
      if (min == 60) {
        hr = hr + 1;
        min = 0;
        document.getElementById("sec").innerHTML = hr;
      }
    }
    setTimeout("stopWatch()", 10);
  }
};
