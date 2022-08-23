document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener("submit", function(event){
    event.preventDefault()
    //event.target.new-task-description.value
    let get = document.querySelector(`#new-task-description`).value
    miniProject(get)

  })

});
function miniProject (list) {
  let x = document.createElement('p')
  
  let orp = document.createElement('button')
  orp.textContent = "x"
  orp.addEventListener("click", handler)
  x.textContent = list
  x.appendChild(orp)
  document.querySelector(`#list`).appendChild(x)
}
function handler(event){
  event.target.parentNode.remove()
}
