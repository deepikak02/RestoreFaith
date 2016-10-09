/**
 * Created by uaggara on 10/9/16.
 */
function sendEmail(){
    subject = document.getElementById("#subject");
    message = document.getElementById("#message");

        $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                'key': 'YOUR API KEY HERE',
                'message': {
                    'from_email': 'rajataggarwal91@gmail.com',
                    'to': [
                        {
                            'email': 'rajataggarwal91@gmail.com',
                            'name': 'Rajat Aggarwal',
                            'type': 'to'
                        }
                    ],
                    'autotext': 'true',
                    'subject': subject,
                    'html': message
                }
            }
        }).done(function(response) {
            console.log(response); // if you're into that sorta thing
        });

}