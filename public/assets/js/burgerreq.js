// $(function() {
//   $("#devour").on("click", function(event) {
//     var id = $(this).data("id");
//     var devoured = $(this).data("devoured");
//
//     var devouredState = {
//       devoured: devoured
//     };
//
//     // Send the PUT request.
//     $.ajax("/burgers/update/" + id, {
//       type: "PUT",
//       data: devouredState
//     }).then(
//       function() {
//         console.log("changed status to", devoured);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });
