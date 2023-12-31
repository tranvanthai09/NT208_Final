$(document).ready(function () {
    $('#checkout_btn').click(function (event) {
        $('.error').remove();
        var hasError = false;

        var first_name = $('#first_name').val();
        if (first_name === "") {
            $('#first_name').after('<div class="error">Thông tin không được trống</div>');
            hasError = true;
        }

        var last_name = $('#last_name').val();
        if (last_name === "") {
            $('#last_name').after('<div class="error">Thông tin không được trống</div>');
            hasError = true;
        }

        var number = $('#number').val();
        if (number === "") {
            $('#number').after('<div class="error">Thông tin không được trống</div>');
            hasError = true;
        }

        var address = $('#address').val();
        if (address === "") {
            $('#address').after('<div class="error">Thông tin không được trống</div>');
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

        if (hasError) {
            event.preventDefault();
        }
    });
});