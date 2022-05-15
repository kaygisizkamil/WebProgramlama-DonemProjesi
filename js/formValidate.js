const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const myArea = document.getElementById('myArea');
var isValid1=false;
var isValid2=false;
var isValid3=false;

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
    if(isValid1 && isValid2 && isValid3){
        var isim = username.value.trim();
        var mail = email.value.trim();
        var mesaj = myArea.value.trim();
        var cinsiyet=document.getElementById('cinsiyet').value;
        var secilen=document.getElementById('sel1').text;
        var selects = document.getElementById('sel1');
       var secilen = selects.options[selects.selectedIndex].text;// gives u value2
       var check=document.getElementById('onay').value;
        localStorage.setItem("txtValue0",isim);
        localStorage.setItem("txtValue1",mail);
        localStorage.setItem("txtValue2",mesaj);
        localStorage.setItem("txtValue3",cinsiyet);
        localStorage.setItem("txtValue4",secilen);
        localStorage.setItem("txtValue5",check);
      //  localStorage.setItem("txtValue3",isim);*/
       
        form.submit();
        window.open('formResults.html', '_blank');
        window.location.href = "home.html";
      }
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const myAreaValue = myArea.value.trim();
    
    if(usernameValue === '') {
        isValid1=false;
        setError(username, 'Ad zorunludur');
        
    } else {
        isValid1=true;
        setSuccess(username);
        
    }

    if(emailValue === '') {
        isValid2=false;
        setError(email, 'Email zorunludur');
        
    } else if (!isValidEmail(emailValue)) {
        isValid2=false;
        setError(email, 'Lütfen geçerli bir email giriniz');
        
    } else {
        isValid2=true;
        setSuccess(email);
    }

    if(myAreaValue === '') {
        isValid3=false;
        setError(myArea, 'Lütfen bizimle iletişime geçmek istediğiniz konuyu detaylandırın');
        
    }else {
        isValid3=true;
        setSuccess(myArea);
    }
};