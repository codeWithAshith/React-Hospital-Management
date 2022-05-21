const today = new Date();
let day = today.getDate();
let mon = new String(today.getMonth() + 1); //January is 0!
let yr = today.getFullYear();

if (mon.length < 2) {
  mon = "0" + mon;
}
if (day.length < 2) {
  day = "0" + day;
}

let toDaysDate = new String(yr + "-" + mon + "-" + day);
console.log(toDaysDate);

const getAge = (dateString) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};
export { toDaysDate, getAge };
