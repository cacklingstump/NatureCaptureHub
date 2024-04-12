document.addEventListener("DOMContentLoaded", function() {
  // Get references to the buttons
  var joinGroupBtn = document.getElementById("joinGroupBtn");
  var blogOfTheWeekBtn = document.getElementById("blogOfTheWeekBtn");

  // Add click event listeners to the buttons
  joinGroupBtn.addEventListener("click", function() {
    // Redirect to the Facebook group URL
    window.location.href = "https://www.facebook.com/groups/dublinphotography";
  });

  blogOfTheWeekBtn.addEventListener("click", function() {
    // Redirect to the blog of the week URL
    window.location.href = "https://www.thephoblographer.com/";
  });
});
