// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-eat").on("click", function (event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("neweat");

    var newDevour = {
      devour: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevour
    }).then(
      function () {
        console.log("changed eat to", devour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devour: $("[name=devour]:checked").val().trim()
    }; console.log(newBurger)

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
