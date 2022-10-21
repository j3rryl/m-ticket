$(document).ready(function () {
  function load_data() {
    $.ajax({
      type: "GET",
      url: "/m-tickets/views/client/home.php",
      success: function (data) {
        $(".ajax-page").html(data);
      },
    });
  }
  load_data();
  $(document).on("click", "#categories", null, function (event) {
    event.preventDefault();
    var category_id = $(this).attr("data-value");
    $.ajax({
      type: "POST",
      url: "/m-tickets/views/client/category.php",
      data: {
        category_id: category_id,
      },
      success: function (data) {
        window.history.pushState(
          "Category",
          "title",
          "/m-tickets/views/client/category.php?category=" + category_id + ""
        );
        $(".ajax-page").html(data);
      },
    });
  });
  $(document).on("click", "#popular", null, function (event) {
    event.preventDefault();
    var event_id = $(this).attr("data-value");
    var event_name = $(this).attr("data-name");
    window.location.replace(
      "/m-tickets/views/client/ticket.php?event=" +
        event_name +
        "&event_id=" +
        event_id +
        ""
    );
  });
  $(document).on("click", "#recent1", null, function (event) {
    event.preventDefault();
    var event_id = $(this).attr("data-value");
    var event_name = $(this).attr("data-name");
    window.location.replace(
      "/m-tickets/views/client/ticket.php?event=" +
        event_name +
        "&event_id=" +
        event_id +
        ""
    );
  });
  $(document).on("click", "#recent2", null, function (event) {
    event.preventDefault();
    var event_id = $(this).attr("data-value");
    var event_name = $(this).attr("data-name");
    window.location.replace(
      "/m-tickets/views/client/ticket.php?event=" +
        event_name +
        "&event_id=" +
        event_id +
        ""
    );
  });
});
