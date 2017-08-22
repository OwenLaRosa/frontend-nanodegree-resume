var bio = {
  name: "Owen LaRosa",
  role: "Mobile and Web Developer",
  contacts: {
    mobile: "(617) - 867 - 5309",
    email: "owen.larosa@gmail.com",
    github: "OwenLaRosa",
    twitter: "@OwenLaRosa",
    location: "Somerville, MA"
  },
  links: {
    mobile: "tel:+16178675309",
    email: "mailto:owen.larosa@gmail.com",
    twitter: "https://twitter.com/OwenLaRosa",
    github: "https://github.com/OwenLaRosa",
    location: "http://www.somervillema.gov"
  },
  welcomeMessage: "Hello, I'm a mobile developer and proud Udacian!",
  skills: [
    "Swift", "Java", "web development", "SQL", "curriculum planning"
  ],
  biopic: "images/owen.jpg",
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", this.name);
    var formattedRole = HTMLheaderRole.replace("%data%", this.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedContacts = [
      HTMLmobile.replace("%data%", this.contacts.mobile),
      HTMLemail.replace("%data%", this.contacts.email),
      HTMLgithub.replace("%data%", this.contacts.github),
      HTMLtwitter.replace("%data%", this.contacts.twitter),
      HTMLlocation.replace("%data%", this.contacts.location)
    ];

    formattedContacts.forEach(function(contactItem) {
      $("#topContacts").append(contactItem);
    });

    var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    $("#header").append(HTMLskillsStart);

    if (this.skills.length > 0) {
      this.skills.forEach(function(skill) {
        $("#header").append(HTMLskills.replace("%data%", skill));
      });
    }
  }
};

var work = {
  jobs: [
    {
      employer: "Udacity",
      title: "Student Experience Lead - iOS",
      location: "Mountain View, CA",
      dates: "June 2017 - Present",
      description: "Responsible for all things student experience in Udacity's iOS Offerings"
    },
    {
      employer: "Udacity",
      title: "Code Reviewer Community Lead, Mentor",
      location: "Salem, MA",
      dates: "March 2015 - June 2017",
      description: "Audited teaching assistants, reviewed projects, and mentored students"
    }
  ],
  display: function() {
    this.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

      $(".work-entry:last").append(formattedEmployer + formattedTitle);

      var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
      $(".work-entry:last").append(formattedLocation);

      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
      $(".work-entry:last").append(formattedDescription);
    });
  }
};

var education = {
  schools: [
    {
      name: "University of Massachusetts, Lowell",
      location: "Lowell, MA",
      degree: "Bachelors",
      majors: ["Information Technology", "Business"],
      dates: "2016 - Present",
    },
    {
      name: "Keystone National High School",
      location: "Bloomsburg, PA",
      degree: "High School",
      majors: ["General Studies"],
      dates: "2013 - 2016",
    }
  ],
  "onlineCourses": [
    {
      title: "React Nanodegree",
      school: "Udacity",
      dates: "2017 - Present",
      url: "https://www.udacity.com/course/react-nanodegree--nd019"
    },
    {
      title: "Front-End Web Developer Nanodegree",
      school: "Udacity",
      dates: "2017 - Present",
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      title: "Android Deeveloper Nanodegree",
      school: "Udacity",
      dates: "2016 - 2017",
      url: "https://www.udacity.com/course/android-developer-nanodegree-by-google--nd801"
    },
    {
      title: "iOS Developer Nanodegree",
      school: "Udacity",
      dates: "2015 - 2015",
      url: "https://www.udacity.com/course/ios-developer-nanodegree--nd003"
    }
  ],
  display: function() {
    this.schools.forEach(function(school) {
      $('#education').append(HTMLschoolStart);
      var schoolName = HTMLschoolName.replace("%data%", school.name);
      var degree = HTMLschoolDegree.replace("%data%", school.degree);
      $('.education-entry:last').append(schoolName + degree);
      var schoolDates = HTMLschoolDates.replace("%data%", school.dates);
      $('.education-entry:last').append(schoolDates);
      var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
      $('.education-entry:last').append(schoolLocation);
      // add additional space after the comma when treating an array like a string
      var majors = HTMLschoolMajor.replace("%data%", school.majors.toString().replace(",", ", "));
      $('.education-entry:last').append(majors);
    });
    $('#education').append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(course) {
      $('#education').append(HTMLschoolStart);
      var courseName = HTMLonlineTitle.replace("%data%", course.title);
      var schoolName = HTMLonlineSchool.replace("%data%", course.school);
      $('.education-entry:last').append(courseName + schoolName);
      var courseDates = HTMLonlineDates.replace("%data%", course.dates);
      $('.education-entry:last').append(courseDates);
      var courseLink = HTMLonlineURL.replace("#", course.url).replace("%data%", course.url);
      $('.education-entry:last').append(courseLink);
    });
  }
};

var projects = {
  projects: [
    {
      title: "Udacians",
      dates: "2016 - 2017",
      description: "Social networking app for Udacity students for iOS and Android",
      images: [
        "images/udacians_banner.png"
      ]
    },
    {
      title: "Newscaster",
      dates: "2016 - 2016",
      description: "RSS Reader app using text-to-speech",
      images: [
        "images/newscaster_logo.png"
      ]
    }
  ],
  display: function() {
    this.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));

      project.images.forEach(function(image) {
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
      });
    });
  }
};

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);

// normally, this would be static
var previousTitle = null;
function toggleAppTitleSelected(selected, title) {
  if (previousTitle !== null) {
    // deselect previous app icon title
    previousTitle.css('color', '#000000');
    previousTitle.css('background-color', '#ffffff');
    previousTitle = null;
  }
  if (selected) {
    // highlight the title
    title.css('color', '#ffffff');
    title.css('background-color', '#0D47A1');
    previousTitle = title;
  }
}

// clicking within contacts area but outside an app icon should deselect the icon
$('#topContacts').click(function(event) {
  if (event.target == event.delegateTarget) {
    // user selected anywhere except on one of the list items
    toggleAppTitleSelected(false);
  }
});

// single clicking will select the app icon
$('.app-icon').click(function(event) {
  var title = $(event.delegateTarget).children('p');
  toggleAppTitleSelected(true, title);
});

// double clicking the app icon should open the link in a new tab
$('.app-icon').dblclick(function(event) {
  var type = $(event.delegateTarget).children('img').attr('alt');
  window.open(bio.links[type]);
});
