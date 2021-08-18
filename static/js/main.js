
$(document).ready(function(){

    my_nav = {
        home: $('#navbar-home'),
        resume: $('#navbar-resume'),
        about: $('#navbar-about'),
        contact: $('#navbar-contact')
    };

    for (let each_nav in my_nav){
        my_nav[each_nav].click(function(){

            $('li.active').attr("class", "");
            my_nav[each_nav].attr("class", "active");

         })
    }
})
