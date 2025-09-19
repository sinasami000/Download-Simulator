let progress = document.querySelector(".progress");
let formbtn = document.querySelector(".btn");
let form = document.querySelector("form");
let input = document.querySelector("input");
let percent = document.querySelector(".percentage");
let perCount = document.querySelector(".count");
let donebtn = document.querySelector(".donebtn");
let download = document.querySelector(".download");
percent.classList.add("display");
download.classList.add("display");
// let userinput;
const mainfunc = (time) => {
  let count = 0;
  progress.style.height = `${100}%`;
  const interval = setInterval(() => {
    if (count <= 100) {
      download.classList.remove("display");
      percent.classList.remove("display");
      progress.style.width = `${count}%`;
      perCount.textContent = `${count}%`;
      count++;
      donebtn.disabled = true;
    } else {
        donebtn.disabled = false;
      clearInterval(interval);
      window.addEventListener("keydown", (event) => {
        if (event.key == "Enter") {
          donebtn.click();
        }
      });
    }
  }, time);
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let userinput = input.value;
  userinput = Number(userinput);
  if (!userinput || userinput < 1) {
    alert("Enter valid duration");
  } else {
    userinput = userinput * 10;
    mainfunc(userinput);
  }
  input.value = "";
});
donebtn.addEventListener("click", () => {
  download.classList.add("display");
});
