// selecting the download button in the wallpapers page

const downloadButtons = document.getElementsByClassName("wallpaper-download");

for(let i = 0; i < downloadButtons.length; i++){
    const button = downloadButtons[i]
    const filename = button.name
    button.addEventListener("click", () =>{downloadFile(filename)})

}
// downloadButtons.forEach(button => {
//     const filename = button.name
//     button.addEventListner("click", () =>{donwloadFile(filename)})
// });


// defining the downloadFile function 
function downloadFile(fileName){
    const filePath = "../img/wallpapers/" + fileName;

    const downloadFileName = fileName;

    const a = document.createElement("a");
    
    a.href = filePath;

    a.download = downloadFileName;

    a.click()
    console.log("downloading in progress.")
    document.body.removeChild(a);

}
