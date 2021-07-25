$(function () {
    $("form[name='myform2']").validate({
        rules: {
            iemail: {
                required: true,
                email: true
              },
            ipass: {
                required: true,
                minlength: 5
              },
        },
        messages: {
            iemail: {
                required: "Please provide a Email",
                email: "Please enter a valid email address"
              },
            ipass: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
              },
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});