$(".slider-box-inner").slick({
    autoplay: true,
    autoplaySpeed: 8000,
    dots: false,
    arrows: true,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                arrows: false,
            }
        }
    ]
});

setTimeout(() => {
    document.getElementById("loader").remove()

},2000);

$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('.header').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('.header').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});

const words = ["Html", "javascript", "Web"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 300);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 200);
	};
	loopDeleting();
};

typingEffect();



// function x() {
// 	for (var i = 1; 1 <= 5; i++) {
// 		setTimeout(function(){
// 		console.log (x);
// 	}, x * 1000);
// 		close(i);
// 	}

// 	console.log("namaste javascript")
// };

// x();

// menubar

$(".navbar-toggler").click(function () {
	$(".navbar-collapse").toggleClass("menu-visible");
	$(".menu_overlay").toggleClass("menu-visible");
	$("body").css("overflow", "hidden");
  });
  
  $(".menu_close_btn").click(function () {
	$(".navbar-collapse").removeClass("menu-visible");
	$(".navbar-collapse").removeClass("show");
	$(".menu_overlay").removeClass("menu-visible");
	$("body").css("overflow", "auto");
  });
  
  $(".menu_overlay").click(function () {
	$(".menu_overlay").removeClass("menu-visible");
	$(".navbar-collapse").removeClass("show");
	$(".navbar-collapse").removeClass("menu-visible");
	$("body").css("overflow", "auto");
  });
  