$(function () {
    $("form[name='myform1']").validate({
        rules: {
            email: {
                required: true,
                email: true
              },
            fullname: "required",
            mob: {
                required: true,
                minlength: 10
              },
            pass: {
                required: true,
                minlength: 5
              },
            cpass: {
                required: true,
                minlength: 5,
                equalTo: "#pass"
            },
              pin: {
                required: true,
                minlength: 6
              }
        },
        messages: {
            email: {
                required: "Please provide a Email",
                email: "Please enter a valid email address"
              },
            fullname: "Please enter your name",
            mob: {
                required: "Please provide a Mobile Number",
                minlength: "Please enter 10 digits"
              },
            pass: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
              },
            cpass: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Both Passwords do not match"
            },
              pin: {
                required: "Please provide a pincode",
                minlength: "Pincode must be 6 digits"
              },
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});