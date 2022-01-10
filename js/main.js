(function () {
  "use strict";

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  var fullHeight = function () {
    if (!isMobile.any()) {
      $(".js-fullheight").css("height", $(window).height());
      $(window).resize(function () {
        $(".js-fullheight").css("height", $(window).height());
      });
    }
  };

  // Parallax
  var parallax = function () {
    $(window).stellar();
  };

  var contentWayPoint = function () {
    var i = 0;
    $(".animate-box").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("animated-fast")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated-fast");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft animated-fast");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight animated-fast");
                  } else {
                    el.addClass("fadeInUp animated-fast");
                  }

                  el.removeClass("item-animate");
                },
                k * 100,
                "easeInOutExpo"
              );
            });
          }, 50);
        }
      },
      { offset: "85%" }
    );
  };

  var goToTop = function () {
    $(".js-gotop").on("click", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $("html").offset().top,
        },
        500,
        "easeInOutExpo"
      );

      return false;
    });

    $(window).scroll(function () {
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $(".js-top").addClass("active");
      } else {
        $(".js-top").removeClass("active");
      }
    });
  };

  var pieChart = function () {
    $(".chart").easyPieChart({
      scaleColor: false,
      lineWidth: 4,
      lineCap: "butt",
      barColor: "#FF9000",
      trackColor: "#f5f5f5",
      size: 160,
      animate: 1000,
    });
  };

  var skillsWayPoint = function () {
    if ($("#fh5co-skills").length > 0) {
      $("#fh5co-skills").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(pieChart, 400);
            $(this.element).addClass("animated");
          }
        },
        { offset: "90%" }
      );
    }
  };

  // Loading page
  var loaderPage = function () {
    $(".fh5co-loader").fadeOut("slow");
  };

  $(function () {
    contentWayPoint();
    goToTop();
    loaderPage();
    fullHeight();
    parallax();
    // pieChart();
    skillsWayPoint();
  });

  // my js

  var computerLanguages = [
    {
      id: "python",
      name: "Python",
      image: "img/python.png",
      description: `I used python for one of my jobs at Empolis GmbH (werkstudent). 
	  I had to use the Spacy library to create an advanced natural language processing.
	  I also had to work with python in the "Web-technology 1" and "Web-technology 2" courses`,
      details: [
        {
          name: "Django",
          image: "img/django.png",
          description: `In the "Web-technology 1" and "Web-technology 2" courses we used Django to build a web application (Backend)`,
        },
      ],
    },
    {
      id: "php",
      name: "PHP",
      image: "img/php.png",
      description: `Mit der Objectorientierten Programmierung in PHP habe ich schon große Erfahrung.
		  Zusätzlich kann ich richtig gut die "Middleware-Architektur" und die "MVC-Architektur(Model View Controller)" in dieser Programmierspache implementieren.
		  Mit den Frameworks Laravel und Zend Framework bin ich eng vertaut.
		  `,
      details: [
        {
          name: "Laravel",
          image: "img/laravel.png",
          description: `Laravel ist einer der besten PHP Frameworks, das die "MVC-Architecture" implementiert. Dieses wird von Taylor Otwell gemacht. 
			  Damit habe ich schon große Erfahrung gesammelt und kann alle von diesem Framework gebotenen Tools sehr gut benutzen wie zum Beispiel "Queue Driver", "Real Time Communication", "Api Architecture"`,
        },
        {
          name: "Zend Framework",
          image: "img/zend.png",
          description:
            "Zend Framework ist ein auf PSR-15(PHP Standard Recommandation) basiert Framework, das sich auf die Erstellen von Middleware-Anwendungen spezialisiert.",
        },
      ],
    },
    {
      id: "javascript",
      name: "JavaScript",
      image: "img/javascript.png",
      description: `JavaScript ist wahrscheinlich meine am meistbenutzte Computersprache nicht nur im "Frontend" mit Vuejs sondern auch im "Backend" mit Nodejs. 
			Damit habe ich eine riesige Erfahrung durch die Nutzung von Frameworks gesammelt. Übrigens beherrsche ich sehr gut Ecmascript 6 und einige damit verbundene Tools wie zum Beispiel Babeljs und Webpack.
			`,
      details: [
        {
          name: "Nodejs",
          image: "img/nodejs.png",
          description:
            "Nodejs is a must for web programming. With it I helped to set up many servers. These servers had to receive requests and perform certain tasks using npm packages.",
        },
        {
          name: "Vuejs",
          image: "img/vuejs.png",
          description:
            "Vue.js ist ein Offene Quelle JavaScript Framework zum Erstellen von Benutzeroberflächen.",
        },
        {
          name: "Reactjs",
          image: "img/react.svg",
          description:
            "Reactjs ist ein Framework von Facebook, das mit anderen Tools wie zum beispiel Redux, React Router geliefert wird.",
        },
        {
          name: "React Native",
          image: "img/react.svg",
          description:
            "React Native ist ein Framework für die Erstellung von plattformübergreifende Anwendung(Hybrid App) auf Android und IOS.",
        },
        {
          name: "Angular",
          image: "img/angular.svg",
          description:
            "Angular ist der MVC-Framework von Google, das auf TypeScript basiert",
        },
        {
          name: "Webpack",
          image: "img/webpack.svg",
          description:
            "Webpack ist ein offene Quelle JavaScript Compiler. Sein Hauptzweck ist die Bündelung von JavaScript-Dateien zur Verwendung in einem Browser.",
        },
      ],
    },
    {
      id: "dart",
      name: "Dart",
      image: "img/dart.png",
      description: `Dart ist eine Objectorientierte Programmiersprache von Google. 
			Das sollte eine Alternative für Javascript sein und lässt sich für die Erstellung von Web- und mobileanwendungen benutzen.
			Damit habe schon gute Anwendungen für Smartphone gemacht.
			`,
      details: [
        {
          name: "Flutter",
          image: "img/flutter.png",
          description:
            "Flutter ist ein auf Dart basiert Framework für die Entwicklung von plattformübergreifenden Anwendungen. Das unterscheidet sich von anderen mobilen Frameworks wie React Native durch seine relative schnelle Ausführungsgeschwindigkeit.",
        },
      ],
    },
    {
      id: "java",
      name: "Java",
      image: "img/java.png",
      description:
        "Mit Java habe ich schon einige Schulprojekte wie zum Beispiel die Entwicklung von vituellen Robotern mit Robocode.",
      details: [],
    },
    {
      id: "fsharp",
      name: "F#",
      image: "img/fsharp.png",
      description:
        "In dieser Programmierspache kenne ich mich schon gut aus und kann einwandfrei functionale Programmierung und objektorientierte Programmierung umsetzen.",
      details: [],
    },
    {
      id: "html-css",
      name: "HTML&CSS",
      image: "img/html_css.png",
      description: `HTML 5 Und CSS 3 sind zwei der ersten "Maschinensprachen", die ich gelernt habe. Damit kenne ich mich schon seit langem sehr gut aus.`,
      details: [
        {
          name: "Sass",
          image: "img/sass.svg",
          description: "Gute Erfahrung damit",
        },
        {
          name: "Bootstrap",
          image: "img/bootstrap.png",
          description: "Gute Erfahrung damit",
        },
        {
          name: "Foundation",
          image: "img/foundation.svg",
          description: "Gute Erfahrung damit",
        },
      ],
    },
  ];

  var computerTools = [
    {
      id: "cplusplus",
      name: "C++",
      image: "img/cplus.png",
      description:
        "From my many years of work with the Qt framework, I was able to accumulate a lot of expertise with this language. I particularly use it for the creation of software such as Artefact-Creator.",
      details: [],
    },
    {
      id: "Qt",
      name: "Qt",
      image: "img/qt.png",
      description: `Qt ist das Werkzeug, das ich am meisten benutze. 
		Mit Qt (Qt / C ++, QML) bin ich in der Lage, Software und Anwendungen für viele Plattformen 
		unter Beibehaltung eines Qualitätsdesigns zu realisieren.
		`,
      details: [
        {
          name: "C++",
          image: "img/cplus.png",
          description: `Qt ist ein C ++ - Framework. Es stellt uns viele Ressourcen wie grafische 
			Elemente und einen Designer für eine bessere Effizienz zur Verfügung`,
        },
        {
          name: "QML/JavaScript",
          image: "img/javascript.png",
          description:
            "Die neue QML-Sprache von Qt ermöglicht es Javascript, Anwendungen und Software zu vereinfachen.",
        },
      ],
    },
    {
      id: "unity",
      name: "Unity 2D/3D",
      image: "img/unity.png",
      description: `Mit Unity musste ich nicht nur 2D-Spiele wie Mario, 
	  sondern auch 3D-Spiele wie RPG oder TowerDefence realisieren.
		`,
      details: [
        {
          name: "C#",
          image: "img/csharp.png",
          description: `C # ist eine der Sprachen, die ich für das Spielskript verwende.`,
        },
        {
          name: "JavaScript",
          image: "img/javascript.png",
          description:
            "Dies ist die Skriptsprache, die ich am häufigsten für die Arbeit mit Unity verwende.",
        },
      ],
    },
    {
      id: "Unreal",
      name: "Unreal Engine",
      image: "img/unreal.png",
      description: `Unreal Engine ist ein sehr leistungsfähiges Werkzeug, mit dem 3D-Spiele mit hochwertigen Texturen und Realismus realisiert werden können.`,
      details: [],
    },
    {
      id: "Shopware5",
      name: "Shopware 5",
      image: "img/shopware5.png",
      description: `Shopware ist die perfekte Lösung für den E-Commerce der Zukunft und bietet Dir die Möglichkeit, das Wachstum zu entfesseln und das perfekte Kundenerlebnis in den Mittelpunkt zu stellen.`,
      details: [],
    },
    {
      id: "Shopware6",
      name: "Shopware 6",
      image: "img/shopware6.png",
      description: `Shopware ist die perfekte Lösung für den E-Commerce der Zukunft und bietet Dir die Möglichkeit, das Wachstum zu entfesseln und das perfekte Kundenerlebnis in den Mittelpunkt zu stellen.`,
      details: [],
    },
  ];

  var cards = [];
  var tools = [];

  for (var i = 0; i < computerLanguages.length; i++) {
    cards.push(languageCard(computerLanguages[i]));
  }
  for (var i = 0; i < computerTools.length; i++) {
    tools.push(toolsCard(computerTools[i]));
  }
  document.querySelector("#computer-languages").innerHTML = cards.join(" ");
  document.querySelector("#computer-tools").innerHTML = tools.join(" ");

  $('[data-toggle="tooltip"]').tooltip();

  slideAnimation("#computer-languages .portfolio-item", ".shadow");
})();

function languageCard(language) {
  return (
    `
	<div class="col-md-12 col-sm-12 portfolio-item" style="padding-left:20px;">
		<div class="shadow p-3 mb-5 bg-white rounded row" style="transition:transform 1s, opacity 1s">
			<div style="position:relative;width:100%;justify-content:space-betweeen" class="row">
				<a class="portfolio-link col-md-2 col-sm-12" style="margin:0;max-width:400px !important" id=` +
    language.id +
    `>
					<img class="img-fluid" src="` +
    language.image +
    `" alt="logo computer languages">
				</a>
				<div class="portfolio-caption col-md-10 col-sm-12" style="max-width:none;padding:0;margin:0">
					<h4>` +
    language.name +
    `</h4>
					<p class="text-muted" style="word-break:break-word;padding-left:5px;padding-right:5px">` +
    language.description +
    `</p>
				</div>
				` +
    btnMore(language.details) +
    `
				</div>
				<div class="collapse moreInfo" style="width:100%;padding:7px">
					<div class="card card-body" style="border:none">
						<div class="column">
							` +
    language.details.map((data) => moreInfoCard(data)).join(" ") +
    `
						</div>
					</div>
				</div>
			</div>
		</div>
	`
  );
}

function toolsCard(language) {
  return (
    `
	<div align="center" class="col-md-12 col-sm-12">
		<div class="shadow p-3 mb-5 bg-white rounded row" style="transition:transform 1s, opacity 1s">
			<div style="position:relative;width:100%;justify-content:space-betweeen" class="row">
				<a class="portfolio-link col-md-2 col-sm-12" style="margin:0;max-width:400px !important" id=` +
    language.id +
    `>
					<img class="img-fluid" src="` +
    language.image +
    `" alt="logo computer languages">
				</a>
				<div class="portfolio-caption col-md-10 col-sm-12" style="max-width:none;padding:0;margin:0">
					<h4>` +
    language.name +
    `</h4>
					<p class="text-muted" style="word-break:break-word;padding-left:5px;padding-right:5px">` +
    language.description +
    `</p>
				</div>
				` +
    btnMore(language.details) +
    `
				</div>
				<div class="collapse moreInfo" style="width:100%;padding:7px">
					<div class="card card-body" style="border:none">
						<div class="column">
							` +
    language.details.map((data) => moreInfoCard(data)).join(" ") +
    `
						</div>
					</div>
				</div>
			</div>
		</div>
`
  );
}

function toggleCollapse($element) {
  $(
    $element.parentNode.parentNode.parentNode.querySelector(".moreInfo")
  ).slideToggle();
}

function slideAnimation(observed, modified) {
  var observer = new IntersectionObserver(
    function (observables) {
      observables.forEach(function (observable) {
        if (observable.intersectionRatio > 0.3) {
          observable.target
            .querySelector(modified)
            .classList.remove("not-visible-left");
          observable.target
            .querySelector(modified)
            .classList.remove("not-visible-right");
        }
      });
    },
    {
      threshold: [0.3],
    }
  );

  var items = document.querySelectorAll(observed);
  var index = 0;
  items.forEach(function (item) {
    var $panel = item.querySelector(modified);
    if ($panel) {
      $panel.classList.add(
        index % 2 == 0 ? "not-visible-left" : "not-visible-right"
      );
      observer.observe(item);
      index++;
    }
  });
}

function moreInfoCard(data) {
  return (
    `
		<div class="row" style="padding:10px;border-bottom:1px solid rgba(0,0,0,.125)">
		<div class="col-sm-3 column">
			<img class="mini" src="` +
    data.image +
    `" width="50" height="50"> 
			<h4>` +
    data.name +
    `</h4>                   
		</div>
		<div class="col-sm-9">
			` +
    data.description +
    `
		</div>  
		</div>      
`
  );
}

function btnMore(data) {
  return data.length === 0
    ? ""
    : '<a data-toggle="tooltip"  data-placement="top" title="Klicken Sie hier, um weitere Informationen zu erhalten" class="btn-more" onclick="toggleCollapse(this)"><i class="fas fa-chevron-down"></i></a>';
}
