<template>
  <main class="container">

    <header>

      <nav id="navbar">        

        <div class="navbar__link">

          <img class="navbar__link--logo" src="./assets/dasdas.jpg" alt="Dasdas Logo">

          <ul class="navbar__link--content">

            <li> <a href="#"> <img src="./assets/twitter.jpg" alt="Twitter icon"> </a> </li>
            <div><img src="./assets/dot.jpg" alt="dot"> </div>
            <li> <a href="#"> <img src="./assets/dribbble.jpg" alt="Dribble icon"> </a> </li>
            <div><img src="./assets/dot.jpg" alt="dot"> </div>
            <li> <a href="#"> <img src="./assets/figma.jpg" alt="Figma icon"> </a></li>
            <div> <img src="./assets/dot.jpg" alt="dot"></div>
            <li> <a href="#"> <img src="./assets/github.jpg" alt="GitHub icon"> </a> </li>

          </ul>

          <div class="navbar__mobile--menu">

              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
              </a>

          </div>

          <div class="navbar__router--links">  
            <router-link to="/"> Blog </router-link>
            <router-link to="/Postdetails">View Post </router-link>
            <router-view/>
          </div>

        </div>

      </nav>

    </header>

  </main>
</template>

<style lang="scss" scoped>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "SFProText";
}

.container {
  margin: 30px;
  font-family: "SFProText";
}

header {
  width: 100%;
  height: 50px;
}

#navbar {

  .navbar__link--logo {
    width: 50px;
    height: 40px;
  }

  .navbar__link {

    .navbar__link--content {
      display: none;
    }

    .navbar__mobile--menu {
      cursor: pointer;
      float: right;

      a {
        svg {
          width: 30px;
        }
      }
    }

    .navbar__router--links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      a {
        width: 95px;
        border: none;
        border-radius: 5px;
        box-shadow: 1px 1px 5px #4e4e4e;
        color: #fff;
        text-decoration: none;
        background-color: #2c2c2c;
        padding: 5px 10px;
        
        &:hover {
        transform: scale(1.3);
        transition: 1s;
      }
      }
    }
  }
}

/******************* Media Queries begins here **********************/

@media (min-width: 720px) {

  #navbar {

    .navbar__link {

      .navbar__link--content {
        display: inline-flex;
        float: right;
        cursor: pointer;
        
        li {
          list-style-type: none;
        }

        div {
          width: 4px;

          img {
            width: 2px;
          }
        }
      }

      .navbar__mobile--menu a {
        display: none;
      }
    }
  }
}
  
/******************* Media Queries ends here **********************/

</style>