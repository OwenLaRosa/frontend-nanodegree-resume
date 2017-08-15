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
  picture_url: "/images/owen.jpg",
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
