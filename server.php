<?php
mysql_connect("localhost", "AD0206", "aspegren");
mysql_select_db("ad0206");
$return = new ArrayObject();

// Hämtar filer
if(isset($_GET['action']) and $_GET['action'] == "getFiles"){
  if(!isset($_GET['type']) or $_GET['type'] == ""){
    $res = mysql_query("SELECT * FROM media ORDER BY id DESC");
  }else{
    $res = mysql_query("SELECT * FROM media WHERE type='".$_GET['type']."' ORDER BY id DESC");
  }
  $media = new ArrayObject();
  while($row = mysql_fetch_array($res)){
    $m = new ArrayObject();
    $m['path'] = $row['path'];
    $m['type'] = $row['type'];
    $m['title'] = $row['title'];
    $media['files'][] = $m;
  }
  echo json_encode($media);
}


// Laddar upp filen
if(isset($_FILES['media']['name'])){
  // 1. Avgör vilken typ av media vi vill ladda upp
  if($_POST['type'] == "video"){
    $path = "video/";
  }else if($_POST['type'] == "photo"){
    $path = "photo/";
  }else if($_POST['type'] == "audio"){
    $path = "audio/";
  }else{
    $path = "";
    $return['success'] = false;
    $return['message'] = "Incorrect type of media";
    echo json_encode($return);
    exit;
  }
  
  $return['fileName'] = $_FILES['media']['name'];
  $path = $path.$_FILES['media']['name']; 
  // 2. Laddar upp filen
  if(move_uploaded_file($_FILES['media']['tmp_name'], $path)) {
    $return['success'] = true;
    $return['message'] = "File successfully uploaded";
    if(!isset($_POST['title'])){
      $title = "";
    }else{
      $title = $_POST['title'];
    }
    // 3. Sparar adressen till filen i en databas, samt vilken typ av fil det är
    if(!mysql_query("INSERT INTO media (type, path, title) VALUES ('".$_POST['type']."', '".$path."', '".$title."')")){
      $return['sql'] = false;
    }else{
      $return['sql'] = true;
    }
    echo json_encode($return);
    /*
      CREATE TABLE media (
        id int(11) NOT NULL auto_increment,
        mediaType varchar(100) NOT NULL,
        path varchar(500) NOT NULL,
        PRIMARY KEY  (id)
      ) ;
    */
  }else{
    $return['success'] = false;
    $return['message'] = "message uploading file failed";
    echo json_encode($return);
  }
}
?>