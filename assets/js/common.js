<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    //Disable F12
    $(document).keydown(function (event) {
        if (event.keyCode == 123) { // Prevent F12
            return false;
        } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
            return false;
        }
    });
    //Disable right click
    $(document).on("contextmenu", function (e) {
        e.preventDefault();
    });
</script>
