localStorage.removeItem('Account');
localStorage.clear();

var channel = geckos({ port: 6363 })

channel.onConnect(function (error) {
    if (error) {
      console.error(error.message)
    } else {
      console.log("You're connected on MMORPG")
    }
  })

$(document).on('click', '#login-account', function(e){
    e.preventDefault()
    var userName = $('#UserLogin').val()
    var password = $('#PassLogin').val()

    if(userName != '' && password != ''){
        var login = {
            username:userName,
            password:password
        }
    
        $(this).attr('disabled', true)
    
        channel.emit('QueryLogin', login)
    }else{

        var toast = new bootstrap.Toast(toastLoginVazio)
        toast.show()
        
    }
    



})



channel.on('StatusLogin', (data) => {
        console.log(data)
    if(data.status == true){
        localStorage.setItem('Account', JSON.stringify(data));

        var toast = new bootstrap.Toast(toastLoginSucesso)
        toast.show()
        
        setTimeout(() => {
            window.location.href = "/game";  
        }, 3000);

    }else{

        var toast = new bootstrap.Toast(toastLoginIncorreto)
        toast.show()

        $('#login-account').attr('disabled', false)
    }
    
})