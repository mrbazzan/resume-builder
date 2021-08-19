
$(document).on('submit', '#form', function(e){
    e.preventDefault();

    $.ajax({
    type: 'POST',
    url: "/send/",
    data: {
        mail: $('#id_email').val(),
        subject: $('#id_subject').val(),
        message: $('#id_message').val(),
        csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
    },
    success: function(){
        alert('Successfully Submitted!');
    }
    });

    document.getElementById('id_email').value = ''
    document.getElementById('id_subject').value = ''
    document.getElementById('id_message').value = ''

});
