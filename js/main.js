$(".slider-box-inner").slick({
    autoplay: true,
    autoplayspeed: 8000,
    dots: false,
    arrows: true,
	responsive: [
        {
            breakpoint: 440,
            settings: {
                arrows: false,
            }
        },
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

const words = ["React", "Html", "javascript", "Web"];
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