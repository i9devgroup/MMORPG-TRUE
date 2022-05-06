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
    
        window.channel.emit('QueryLogin', login)
    }
    



})



channel.on('StatusLogin', (data) => {
        console.log(data)
    if(data.status == true){
        localStorage.setItem('Account', JSON.stringify(data));
        window.location.href = "/game";
    }else{

        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()

        $('#login-account').attr('disabled', false)
    }
    
})