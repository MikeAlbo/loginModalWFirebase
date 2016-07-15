$(document).ready(function(){
   
    // --- login register form -- //
    
    // vars
        var loginForm = $("#loginModal");
        var registerForm = $("#registerModal");
    
    // form animation in
    
        function formFade(formId, view){
            if(view){
                formId.animate({
                    opacity: 1
                }, 500);
            } else {
                formId.animate({
                    opacity: 0
                }, 500);
            }
        };
    
        formFade(loginForm, false);
    
    // close button
    
        $(".close").on('click', function(){
            closeForm();
            alert("clicked");
        });
    
        function closeForm(){
            formFade(loginForm, false);
            formFade(registerForm, false);
        }
    
    
    // clicking on social button 
    
    
    // --- footer nav bar --- //
    
    
});

