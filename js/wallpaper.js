// selecting the download button in the wallpapers page

const downloadButtons = document.getElementsByClassName("wallpaper-download");

for (let i = 0; i < downloadButtons.length; i++) {
  const button = downloadButtons[i];
  const filename = button.name;
  button.addEventListener("click", () => {
    downloadFile(filename);
  });
}

// defining the downloadFile function
function downloadFile(fileName) {
  const filePath = "img/wallpapers/" + fileName;

  const downloadFileName = fileName;

  const a = document.createElement("a");
  a.style.display = "none";
  a.href = filePath;
  a.download = downloadFileName;

  // add link to the DOM, so it can be clicked
  document.body.appendChild(a);

  a.click();
  console.log("downloading in progress.");

  // To make this work on Firefox we need to wait
  // a little while before removing it.
  setTimeout(() => {
    document.body.removeChild(a);
  }, 500);
}
