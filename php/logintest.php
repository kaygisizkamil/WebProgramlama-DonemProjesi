 
      <?php     
       $nameError="";
       $parolaError="";
       $checkBoxError="";
       if(isset($_POST['checker'])){
            if(isset($_POST['email']) && isset($_POST['password']) ){
                if($_POST['password']=="b211210381" && $_POST['email']=="B211210381@gmail.com"){
                    //dogru input
                   // print_r($_POST);
                   // echo file_get_contents("home.html");
                   echo '<meta http-equiv="refresh" content="0; ../html/home.html">';
                  // exit(header("Location: ../html/home.html"));
                    

                }
                if($_POST['password']!="b211210381"){
                            $parolaError='Parola yanlış tekrar deneyin';
                         //   header('Location: index.php'); 
                }
                if($_POST['email']!="B211210381@gmail.com" ){
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
              $checkBoxError='Onay butonuna tıklayıp tekrar deneyiniz';
                 
           }
         
           include('../index.php');
       //include('../index.php');

