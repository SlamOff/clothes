$(document).ready(function() {
	// remove placeholder after click
		$('input, textarea').focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'))
			$(this).attr('placeholder','');
		});
		$('input, textarea').blur(function(){
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
	
	// accordion
	if($(window).width() < 768){
		$('.buy h4').click(function(){
			$(this).siblings('p').slideToggle();
		});
		$('.why h4').click(function(){
			$(this).siblings('p').slideToggle();
		});
	}
	
	//popup
	$('.popup').magnificPopup({
		type: 'inline'
	});

	//mask
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});
	// carousel
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		prevArrow: '.prev',
		nextArrow: '.next',
		appendDots: '.slider_wrapper',
		customPaging: function(slider, i) {
			return '<div class="dot"></div>';
		}
	});
	var locationURL = window.location.pathname;
	if ( locationURL == "/ua.html" ) {
		var validationName = "Обов'язкого для заповнення";
		var validationNameMax = "Від 2 до 16 літер";
		var validationPhone = "Введіть вірний номер";
		var validationEmail = "Введите вірний E-mail";
		var text1 = "днів", text2 = 'годин', text3 = 'хвилин';
	}
	else {
		var validationName = "Обязательно для заполнения";
		var validationNameMax = "От 2 до 16 букв";
		var validationPhone = "Введите корректный номер";
		var validationEmail = "Введите корректный E-mail";
		var text1 = "дней", text2 = 'часов', text3 = 'минут';
	}
	//counter lang
	$('#timer-text-16f5765c176e45a3e6ea1b22bcee5469-days, #timer-text-16f5765c176e45a3e6ea1b22bcee54690-days, #timer-text-6bbf00fe03504b6a0b3cf753959967a3-days, #timer-text-6bbf00fe03504b6a0b3cf753959967a30-days').text(text1);
	$('#timer-text-16f5765c176e45a3e6ea1b22bcee5469-hours, #timer-text-16f5765c176e45a3e6ea1b22bcee54690-hours, #timer-text-6bbf00fe03504b6a0b3cf753959967a3-hours, #timer-text-6bbf00fe03504b6a0b3cf753959967a30-hours').text(text2);
	$('#timer-text-16f5765c176e45a3e6ea1b22bcee5469-minutes, #timer-text-16f5765c176e45a3e6ea1b22bcee54690-minutes, #timer-text-6bbf00fe03504b6a0b3cf753959967a3-minutes, #timer-text-6bbf00fe03504b6a0b3cf753959967a30-minutes').text(text3);
	//popup
	//validation
	$('#mainForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#topForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#noskiForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#kolgForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#belForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#pizhForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#golForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#futbForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#tryForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#stepForm').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#form1').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
	$('#form2').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			}
		},
		messages: {
			name: {
				required: validationName,
				minlength: validationNameMax,
				maxlength: validationNameMax
			},
			email: {
				required: validationName,
				email: validationEmail
			},
			phone: {
				required: validationPhone
			}
		}
	});
});