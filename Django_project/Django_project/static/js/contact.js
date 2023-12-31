$(document).ready(function () {
    $('#submit_button').click(function (event) {
        $('.error').remove();
        var hasError = false;

        var name = $('#name').val();
        if (name === "") {
            $('#name').after('<div class="error">Tên không được trống</div>');
            hasError = true;
        }

        var email = $('#email').val();
        if (email === "") {
            $('#email').after('<div class="error">Email không được trống</div>');
            hasError = true;
        } else {
            var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!email.match(emailPattern)) {
                $('#email').after('<div class="error">Email không đúng định dạng</div>');
                hasError = true;
            }
        }

        var subject = $('#subject').val();
        if (subject === "") {
            $('#subject').after('<div class="error">Tiêu đề không được trống</div>');
            hasError = true;
        }

        var message = $('#message').val();
        if (message === "") {
            $('#message').after('<div class="error">Tin nhắn không được trống</div>');
            hasError = true;
        }

        if (hasError) {
            event.preventDefault();
        }
    });
});