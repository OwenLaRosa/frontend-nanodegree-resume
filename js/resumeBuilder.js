var bio = {
  name: "Owen S. LaRosa",
  role: "Mobile and Web Developer",
  contact: {
    email: "owen.larosa@gmail.com",
    twitter: "@OwenLaRosa",
    github: "OwenLaRosa",
    blog: "blog.owenlarosa.com",
    location: "Somerville, MA"
  },
  picture_url: "images/owen.jpg",
  welcome_message: "Hello, I'm a mobile developer and proud Udacian!",
  skills: [
    "Swift", "Java", "web development", "SQL", "curriculum planning"
  ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedContacts = [
  HTMLemail.replace("%data%", bio.contact.email),
  HTMLtwitter.replace("%data%", bio.contact.twitter),
  HTMLgithub.replace("%data%", bio.contact.github),
  HTMLblog.replace("%data%", bio.contact.blog),
  HTMLlocation.replace("%data%", bio.contact.location)
];

formattedContacts.forEach(function(contactItem) {
  $("#topContacts").append(contactItem);
});

var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture_url);
$("#header").append(formattedBioPic);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
$("#header").append(formattedWelcomeMessage);

$("#header").append(HTMLskillsStart);

bio.skills.forEach(function(skill) {
  $("#header").append(HTMLskills.replace("%data%", skill));
});
