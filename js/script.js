let d = new Date();

function print(txt) {
  document.write(txt);
};

function today() {
  let niceDate = d.getDate().toString() + "/" + (d.getMonth() + 1).toString() + "/" + d.getFullYear().toString()
  document.write(niceDate);
};

function age() {
  let b = new Date(2004, 3, 5);
  let delta = new Date(d - b);
  let years = Math.abs(delta.getUTCFullYear() - 1970);
  document.write(years.toString());
};
