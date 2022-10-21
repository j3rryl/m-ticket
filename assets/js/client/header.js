$(document).ready(function () {
  $("#logout-btn").on("click", function () {
    event.preventDefault();
    console.log("Log out");
    $.ajax({
      method: "POST",
      url: "/m-tickets/controllers/signout.php",
      success: function (data) {
        window.location.replace("/index.php");
      },
    });
  });
});
