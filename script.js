function updateUTC() {
  const currentUTC = new Date();
  const humanReadableUTC = currentUTC.toUTCString();
  document.getElementById("utc-time").textContent = humanReadableUTC;
}

updateUTC();

const users = {
  1: {
    name: "Onwuzuruike Goodluck Chiedozie",
    profession: "Frontend Developer",
    username: "@Monntanna_016",
    image:
      "https://pbs.twimg.com/profile_images/1859058731427700736/h0zzY0rP_400x400.jpg",
    email: "chiedoziegoodluck351@gmail.com",
    socialLink: "https://x.com/Montanna_016",
  },
  2: {
    name: "Onwuzuruike Goodluck Chiedozie",
    profession: "Frontend Developer",
    username: "@montanna_016",
    image:
      "https://pbs.twimg.com/profile_images/1859058731427700736/h0zzY0rP_400x400.jpg",
    email: "chiedoziegoodluck351@gmail.com",
    socialLink: "https://www.instagram.com/montanna_016",
  },
  3: {
    name: "Onwuzuruike Goodluck Chiedozie",
    profession: "Frontend Developer",
    username: "@DEVMONTANNA",
    image:
      "https://pbs.twimg.com/profile_images/1859058731427700736/h0zzY0rP_400x400.jpg",
    email: "chiedoziegoodluck351@gmail.com",
    socialLink: "https://github.com/DEVMONTANNA",
  },
};

function changeUserDetails(userId) {
  const user = users[userId];

  document.getElementById("user-name").textContent = "Fullname: " + user.name;
  document.getElementById("user-profession").textContent =
    "Job Title: " + user.profession;
  document.getElementById("user-username").textContent = user.username;
  document.getElementById("user-image").src = user.image;
  document.getElementById("user-email").textContent = "Email: " + user.email;

  const socialLinkElement = document.getElementById("user-username");
  socialLinkElement.href = user.socialLink;
  socialLinkElement.textContent = user.username;
}

document.getElementById("social-link-1").addEventListener("click", (event) => {
  event.preventDefault();
  changeUserDetails(1);
});
document.getElementById("social-link-2").addEventListener("click", (event) => {
  event.preventDefault();
  changeUserDetails(2);
});
document.getElementById("social-link-3").addEventListener("click", (event) => {
  event.preventDefault();
  changeUserDetails(3);
});
