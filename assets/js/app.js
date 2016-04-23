/**
 * Created by servettuncel on 23.04.2016.
 */

$(document).ready(function(){
    $('form').on('submit',function () {
        var txt = $('input').val();

        if(txt == "merhaba")
            $('.view').text("sana da merhaba !");
        else if(txt == "nasılsın")
            $('.view').text("çok şükür seni sormalı");
        else if(txt == "iyi")
            $('.view').text("aiv");

        $('input').val("");
        return false;

    });
    
});