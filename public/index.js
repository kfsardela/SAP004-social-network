import home from "./pages/home/main.js";
import login from "./pages/login/main.js";
import profile from "./pages/profile/main.js";
import register from "./pages/register/main.js";
import {
  signOut
} from "./pages/login/data.js"


const main = document.querySelector('#root');

const router = async (user) => {
  if (user) {
    if (window.location.hash != "#login") {
      main.innerHTML =`
        <header class="header">
          <section class="headerMobile">
            <label for="toggle-1"><i id="btn-men" class="fas fa-bars"></i></label>
            <h1 class="header-title">SpaceJobs</h1>
          </section>
          <input type="checkbox" id="toggle-1">
          <nav class="menu-mobile invisible" id="mostra" > 
            <ul> <a class= "menu-profile" href= "./#profile">Perfil</a> </ul>
            <ul> <a href= "/">Feed</a> </ul>
            <ul> <a id= "btn-signOut" class="logout"> Sair</a></ul>
          </nav>
          <section class="headerWeb">
            <div class="menuWeb"> 
              <a href= "/"><i class="fas fa-home"></i></a>
              <a class= "menu-profile" href= "./#profile"><i class="fas fa-user-circle"></i></a>
            </div>
            <h1 class= "title-web">SpaceJobs</h1>
            <i id= "btn-signOut-web" class="fas fa-sign-out-alt logout"></i>        
          </section>
        </header>`

      main.querySelector("#btn-men").addEventListener("click", () => {
        main.querySelector(".menu-mobile").classList.remove("invisible");
        main.querySelector(".menu-mobile").classList.add("nav");
      })

      main.querySelector("#btn-signOut").addEventListener("click", () => signOut());
      main.querySelector("#btn-signOut-web").addEventListener("click", () => signOut());
    }
    switch (window.location.hash) {
      case "#home":
        main.appendChild(await home());
        break;
      case "#profile":
        main.appendChild(await profile());
        break;
      case "#login":
        main.appendChild(await login());
        break;
      default:
        main.appendChild(await home());
    }
  } else {
    main.innerHTML = ""
    switch (window.location.hash) {
      case '#register':
        main.appendChild(await register());
        break;
      default:
        main.appendChild(await login());
    }
  }

}

const init = async () => {
  firebase.auth().onAuthStateChanged(async (user) => {
    await router(user);
  });
}
const pages = async () => {
  let user = firebase.auth().currentUser
  await router(user);
}
window.addEventListener("load", async () => {
  init();
});

window.addEventListener("hashchange", () => {
  pages();
});

window.logErrors = (error) => {
  const allErrors = document.getElementById("error")
  allErrors.innerHTML = error
  console.log(error)
}