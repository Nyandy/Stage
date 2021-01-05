<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>main</title>
  <link rel="stylesheet" href="../css/nav.css">
  <link rel="stylesheet" href="../css/main.css">
</head>

<body style="margin: 0">

  <div class="navbar">
      <a class="active" href="main.php">Home</a>
      <a href="collection.php">collection</a>
      <a style="float:right" href="user.php">User</a>
  </div>

  <div style="margin-top: 75px"></div>

  <div id="decks" class="grid-container">
    <div class="grid-item">
      <img onclick="Set1_Pull()" src="../assets/set1_cover.png">
    </div>
    <div class="grid-item">
      <img src="../assets/set1_cover.png">
    </div>
    <div class="grid-item">
      <img src="../assets/set1_cover.png">
    </div>
  </div>

  <div id="pulls" class="grid-container">
    <div class="grid-item">
      <img id="img1" src="">
    </div>
    <div class="grid-item">
      <img id="img2" src="">
    </div>
    <div class="grid-item">
      <img id="img3" src="">
    </div>
  </div>

  <script src="../js/set1_pull.js"></script>
</body>

</html>