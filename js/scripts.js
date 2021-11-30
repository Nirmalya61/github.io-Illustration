 $(document).ready(function () {
        $("#mycarousel").carousel({interval: 2000});
        $("#carousel-pause").click(function () {
            $("#mycarousel").carousel('pause');
        });
        $("#carousel-play").click(function () {
            $("#mycarousel").carousel('cycle');
        });
        $("#loginButton").click(function () {
            $("#loginModal").modal("show");
        })
        $("#reserveButton").click(function () {
            $("#reserveModal").modal("show");
        })
    });