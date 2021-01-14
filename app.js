// Init UI
const ui = new UI();

// Intanciate Github class
const github = new Github();

// Search input
const searhUser = document.getElementById("searchUser");

// search input even listener
searhUser.addEventListener("keyup", (e) => {
  // Get input teext

  const userText = e.target.value;
  if (userText !== "") {
    // Make Http calls
    github
      .getUser(userText)
      .then((data) => {
        if (data.profile.message === "Not Found") {
          //   Show Alert
          ui.showAlert("User Not Found", 'alert alert-danger')
        } else {
          //   Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos)
        }
      })
  } else {
    //   Clear profile
    ui.clearProfile();
  }
});
