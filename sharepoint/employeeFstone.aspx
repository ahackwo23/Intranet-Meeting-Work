<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>WorkTango</title>

    <meta name="description" content="Source code generated using layoutit.com">
    <meta name="author" content="LayoutIt!">

    <link href="./css/Newstyle.css" rel="stylesheet">

  </head>
  <body>
    <Header>
      <img src="../Intranet Meeting Work/Images/Rvalley_logo.png" alt="" style="height:50px;">
      <div class="logo"> River Valley Food's </div>
      <div class="hamBurger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <nav class="nav-bar">
        <ul>
          <li>
            <a href="./WorktangoRevision.htm" class="Active1">Home</a>
          </li>
          <li>
            <a href="">Rewards</a>
          </li>
          <li>
            <a href="">Incentives</a>
          </li>
          <li>
            <a href="">More River Valley</a>
          </li>
        </ul>
      </nav>
    </Header>

    <script>
      hamBurger = document.querySelector(".hamBurger");
      hamBurger.onclick = function() {
          navBar = document.querySelector(".nav-bar");
          navBar.classList.toggle('active')
      }
    </script>
    
  </body>
  </html>