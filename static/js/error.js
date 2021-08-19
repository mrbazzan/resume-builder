
let subject = document.getElementById('id_subject');
let message = document.getElementById('id_message');
let send_form = document.getElementById('send');

function print_error(sub){
    if(sub.value === ''){
        alert('Subject field is empty!');
    }
}

send_form.onclick = print_error(subject);