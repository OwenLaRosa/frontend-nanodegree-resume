var bio = {
  name: "Owen LaRosa",
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

var work = {
  jobs: [
    {
      employer: "Udacity",
      title: "Student Experience Lead - iOS",
      dates: "June 2017 - Present",
      description: "Responsible for all things student experience in Udacity's iOS Offerings"
    },
    {
      employer: "Udacity",
      title: "Code Reviewer Community Lead, Mentor",
      dates: "March 2015 - June 2017",
      description: "Audited teaching assistants, reviewed projects, and mentored students"
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "University of Massachusetts, Lowell",
      "degree": "Bachelors",
      "subjects": ["Information Technology", "Business"],
      "date": "Present",
      "gpa": 4.0
    },
    {
      "name": "Keystone National High School",
      "degree": "High School",
      "subjects": ["General Studies"],
      "date": "2016",
      "gpa": 4.0
    }
  ],
  "certifications": [
    {
      "name": "Udacity",
      "degree": "Nanodegree",
      "title": "React",
      "date": "Present"
    },
    {
      "name": "Udacity",
      "degree": "Nanodegree",
      "title": "Front-End Web Developer",
      "date": "Present"
    },
    {
      "name": "Udacity",
      "degree": "Nanodegree",
      "title": "Android Developer",
      "date": "2017"
    },
    {
      "name": "Udacity",
      "degree": "Nanodegree",
      "title": "iOS Developer",
      "date": "2016"
    }
  ]
};

var projects = [
  {
    "title": "Udacians",
    "date": "2017",
    "description": "Social networking app for Udacity students for iOS and Android",
    "images": [
      "/images/udacians_banner.png"
    ]
  },
  {
    "title": "Newscaster",
    "date": "2016",
    "description": "RSS Reader app using text-to-speech",
    "images": [
      "/images/newscaster_logo.png"
    ]
  }
];

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

if (bio.skills.length > 0) {
  bio.skills.forEach(function(skill) {
    $("#header").append(HTMLskills.replace("%data%", skill));
  });
}

function displayWork() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

    $(".work-entry:last").append(formattedEmployer + formattedTitle);

    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedDescription);
  });
}

displayWork();

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

function inName(name) {
  var splitName = name.split(" ");
  var firstName = splitName[0];
  var lastName = splitName[1];
  return firstName.charAt(0).toUpperCase() + firstName.slice(1, firstName.length).toLowerCase() + " " + lastName.toUpperCase();
}

$("#main").append(internationalizeButton);
