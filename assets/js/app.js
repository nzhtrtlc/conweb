/**
 * Created by servettuncel on 23.04.2016.
 */

$(document).ready(function(){
    $('form').on('submit',function () {
        var txt = $('input').val();

        if(txt.toLowerCase().includes("merhaba"))
            $('.view').text("sana da merhaba !");
        else if(txt.toLowerCase().includes("nasılsın"))
            $('.view').text("çok şükür seni sormalı");
        else if(txt.toLowerCase().includes("iyi"))
            $('.view').text("aiv");

        $('input').val("");
        return false;

    });
    
});
