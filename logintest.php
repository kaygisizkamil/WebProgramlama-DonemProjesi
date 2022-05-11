 
 
<!doctype html>
<html>
<head> 
<meta charset="tr">
<title>logintest</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="loginstyle.css">
    <link rel="stylesheet" href="css/bootstrap.min.css.map">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
   
</head>
 <body>
      <?php     
       $nameError="";
       $parolaError="";
       $checkBoxError="";
       if(isset($_POST['checker'])){
            if(isset($_POST['email']) && isset($_POST['password']) ){
                if($_POST['password']=="b211210381" && ($_POST['email']=="B211210381@sakarya.edu.tr"  ||  $_POST['email']=="b211210381@sakarya.edu.tr")){
                    //dogru input
                    header('Location: https://www.youtube.com/watch?v=y6120QOlsfU');
                }
                if($_POST['password']!="b211210381"){
                            $parolaError='Parola yanlış tekrar deneyin';
                         //   header('Location: index.php'); 
                }
                if($_POST['email']!="B211210381@sakarya.edu.tr"  ||  $_POST['email']!="b211210381@sakarya.edu.tr"){
                        $nameError='Kullanıcı adı yanlış tekrar deneyin';
                       // header('Location: index.php');
                }
            }
            else{
                if($_POST['password']==""){
                    $parolaError='Lütfen parola girişi sağlayın';
                }
                if($_POST['email']==""){
                    $nameError='Lütfen kullanıcı adınızı giriniz';
                
                }
            }
        }
        else {           
              $checkBoxError='Onay butonuna tıklayıp tekrar deneyiniz';;              
           }
        include('index.php');

        ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(E_ALL ^ E_NOTICE);
      

?>

</body>
</html>
