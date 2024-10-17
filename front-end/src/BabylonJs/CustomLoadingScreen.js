function CustomLoadingScreen() {
}
CustomLoadingScreen.prototype.displayLoadingUI = function() {
  const loader =document.createElement("div")
  loader.setAttribute("id","loader")
  loader.setAttribute("class","loader")
  const insert = document.querySelector("body")
  insert.append(loader)
  const canvas = document.querySelector("canvas")
  loader.append(canvas)   
};
CustomLoadingScreen.prototype.hideLoadingUI = function() {
  const canvas = document.querySelector("canvas")
  const insert = document.querySelector("main")
  insert.append(canvas)
  const loader = document.getElementById("loader")
  loader.remove();
};

export default CustomLoadingScreen
