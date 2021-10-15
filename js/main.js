
function showModalWin() {
  const darkLayer = document.createElement("div");
  darkLayer.id = "shadow";
  document.body.appendChild(darkLayer);

  const modalWin = document.getElementById("popupWin");
  modalWin.style.display = "block";

  const images = document.getElementById("images");
  const cancelButton = document.getElementById("cancel");
  const deleteButton = document.getElementById("delete");
  const closeButton = document.getElementById("close");

  closeButton.onclick = function () {
    darkLayer.parentNode.removeChild(darkLayer);
    modalWin.style.display = "none";
    return false;
  };

  cancelButton.onclick = function () {
    darkLayer.parentNode.removeChild(darkLayer);
    modalWin.style.display = "none";
    images.style.visibility = "visible";
    return false;
  };

  deleteButton.onclick = function () {
    darkLayer.parentNode.removeChild(darkLayer);
    images.style.visibility = "hidden";
    modalWin.style.display = "none";
    return false;
  };
}
