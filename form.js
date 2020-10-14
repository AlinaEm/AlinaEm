jQuery(document).ready(function(){
    jQuery("form").submit(function() {
        var form_data=jQuery(this).serialize();
        jQuery.ajax({
            type: "POST",
            url: "telegram.php",
            data: form_data,
            success: swal({
                title: "thank you!",
                type: "success",
                showConfirmButton: false,
                timer: 2000
            })
        });
        $(this).find('input, textarea').prop('disabled',true);
        Event.preventDefault();
    });
});

