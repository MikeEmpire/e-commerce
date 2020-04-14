// When DOM is fully loaded
jQuery(document).ready( function( $) {

	/* ==================================================
	  Enable Strict Mode 
	================================================== */
	"use strict";


	/* ==================================================
	  Main Settings 
	================================================== */
	var settings = {
		/* Audio player instance */
		audio_player: false
	};


	/* ==================================================
	  Small Helpers 
	================================================== */

	/* "classChanged" Extend Class
 	 ----------------------------------- */
	( function( func ) {
	    $.fn.addClass = function() {
	        func.apply( this, arguments ); 
	        this.trigger( 'classChanged' );
	        return this;
	    }
	})( $.fn.addClass);


	/* Smooth Scroll
	 ----------------------------------- */
 	function scroll_to( target, speed ) {
 		var offset = $( '#header' ).outerHeight(),
			hash = target.split('#')[1];

		if ( hash ) {
			hash = '#'+hash;

			if ( $( hash ).length ) {
				var scroll_offset = $( hash ).offset().top - offset;
				$( 'html, body' ).animate({
					scrollTop: scroll_offset
				}, speed);
			}
		    
		} 
 	}


 	/* Disabe HASH links
	 ----------------------------------- */
	$( 'a[href="#"]' ).on( 'click', function(e) {
		e.preventDefault;
		return false;
 	});


 	/* Detect IE
 	 -------------------------------- */
 	function detectIE() {
		  var ua = window.navigator.userAgent;
		  var msie = ua.indexOf('MSIE ');
		  if (msie > 0) {
		    // IE 10 or older => return version number
		    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		  }

		  var trident = ua.indexOf('Trident/');
		  if (trident > 0) {
		    // IE 11 => return version number
		    var rv = ua.indexOf('rv:');
		    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		  }

		  var edge = ua.indexOf('Edge/');
		  if (edge > 0) {
		    // Edge (IE 12+) => return version number
		    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		  }

		  // other browser
		  return false;
	}
	var version = detectIE();
	if ( version != false ) {
		$( 'html' ).addClass( 'ie ie-' + version );
	}


 	/* Bind Smooth Scroll events
	 ----------------------------------- */
	$( document ).on( 'click', '#header #nav li a, #responsive-nav li a, .smooth-scroll', function(e) {
		var target = $( this ).attr( 'href' );
		scroll_to( target, 900 );
 	});


	/* "Skew" (glitch) effect
 	 ----------------------------------- */
 	$( '.skew-fx' ).bind( "webkitAnimationEnd mozAnimationEnd animationEnd", function(){
		$( this ).removeClass( 'on' )  
	})
	$( '.skew-fx' ).hover( function(){
		if ( $( window ).width() > 750 ) {
			$( this ).addClass( 'on' );
		}        
	});


	/* Masonry event hover effect
 	 ----------------------------------- */
	$( '.event-brick' ).on( 'hover', function(e){
		$( this ).toggleClass( 'on' );
	});


	/* Extend Class functions */
	$.fn.addClassDelay = function( c, d ) {
		var t = $( this );
		setTimeout( function(){ 
			t.addClass( c ) }, 
		d );
	    return this;
	};
	$.fn.removeClassDelay = function( c, d ) {
		var t = $( this );
		setTimeout( function(){ 
			t.removeClass( c ) }, 
		d );
	    return this;
	};


	/* ==================================================
	  Reload Scripts 
	================================================== */


	/* ==================================================
	  Instagram 
	================================================== */
	function _instagram( container ) {
		var script_url = 'plugins/instagram.php';

		var $this = $('#instagram .instagram-feed');

		$.ajax({
			url: script_url,
			dataType: 'html',
			timeout: 10000,
			type: 'GET',
			error:
				function(xhr, status, error) {
					$this.html( 'An error occured: ' + error );
				},
			success:
				function( data, status, xhr ) {
					$this.html( data ).hide();
					$this.show();
				}
		});

	}

	/* ==================================================
	  Cart
	================================================== */
	function _cart( container ) {
		var script_url = 'cart.php';

		var $this = $('#cart .shopcart');

		

	}


	/* ==================================================
	  YouTube 
	================================================== */
	function _youtube( container ) {

		$( '.youtube', container ).each(function() {

	        /* Based on the YouTube ID, we can easily find the thumbnail image */
	        var src = 'http://i.ytimg.com/vi/' + this.id + '/maxresdefault.jpg';
	    	
	    	/* If image doesn't exists get image from YouTube */
	    	if ( $( this ).find( 'img' ).length <= 0 ) {
	    		$( this ).append( '<img src="'+ src +'">' );
	    	}
	        
	        /* Add thumb classes */
	        $( this ).addClass( 'thumb thumb-fade' );

	        /* Overlay the Play icon to make it look like a video player */
	        var icon_layer_template = ''+
	        	'<span class="thumb-icon trans-40">' +
					'<svg class="circle-svg" width="80" height="80" viewBox="0 0 50 50">' +
						'<circle class="circle" cx="25" cy="25" r="23" stroke="#fff" stroke-width="1" fill="none"></circle>' +
					'</svg>' +
					'<span class="pe-7s-video"></span>' +
				'</span>';
                 
                                     
	       	$( this ).append( icon_layer_template );
	    
	        $( document ).on( 'click', '#'+this.id, function() {

	            /* Create an iFrame with autoplay set to true */
	            var iframe_url = 'https://www.youtube.com/embed/' + this.id + '?autoplay=1&autohide=1';
	            if ( $( this ).data( 'params' ) ) {
	            	iframe_url += '&' + $( this ).data( 'params' );
	            }
	    
	            /* The height and width of the iFrame should be the same as parent */
	            var iframe = $( '<iframe/>', { 'frameborder': '0', 'src': iframe_url, 'width': '1200', 'height' : '675' } );
	    
	            /* Replace the YouTube thumbnail with YouTube HTML5 Player */
	            $( this ).replaceWith( iframe );

	            /* Make movie responsive */
	            if ( $.fn.ResVid ) {
					$( container ).ResVid();
				}

				/* Pause Player */
				if ( typeof settings.audio_player != 'undefined' || settings.audio_player != false ) {
					settings.audio_player.playerAction( 'pause' );
				}

	        });
   		});
	}


	/* ==================================================
	   Lightbox
	================================================== */
	function _lightbox( container ) {

	 	/* Image */
		$( '.imagebox', container ).magnificPopup( {
			type:'image',
			zoom: {
				enabled: true,
				duration: 300, // don't foget to change the duration also in CSS
				opener: function(element) {
					return element.find('img');
				}
			}
		} );

		/* Iframe */
		$( '.mediabox', container ).magnificPopup( { 
			type:'iframe' ,
		} );

		/* Theme Gallery */
		$( '.gallery', container ).magnificPopup({
			delegate: 'a.g-item',
			callbacks: {
			    elementParse: function( item ) {

					if ( item.el.hasClass( 'iframe-link' ) ) {
						item.type = 'iframe';

						/* Pause Player */
						if ( typeof settings.audio_player != 'undefined' || settings.audio_player != false ) {
							settings.audio_player.playerAction( 'pause' );
						}
					} else {
						item.type = 'image';
					}

			    }
			},
	        gallery: {
	          	enabled:true
	        },

	    });

	}

	/* ==================================================
	  Tracklist 
	================================================== */
	function _audio_player( container ) {

		if ( typeof settings.audio_player == 'undefined' || settings.audio_player == false ) return false;


		/* Add progress container to 
		   tracklist track
		 -------------------------------- */
		if ( $( '.sp-tracklist' ).length ) {
			$( '.sp-tracklist li' ).each( function(){

				// If track doesn't have ".sp-content-control" container
				if ( $( this ).find( '.sp-content-control' ).length <= 0 ) {
					// Create unique ID
					var temp_id = 'sp-progress_' + Math.random().toString( 36 ).substr( 2, 9 ),
						progress_html = '<div id="' + temp_id + '" class="track-row track-row-progress sp-content-control">' +
						'<span class="sp-content-progress">' +
							'<span class="sp-content-loading"></span>' +
							'<span class="sp-content-position"></span>' +
						'</span>' +
					'</div>';

					/* Add unique ID to tracklist track "data-control" attribute */
					$( this ).find( '.track' ).attr( 'data-control', temp_id );

					/* Append progress html to track content */
					if ( $( this ).find( '.track-row-lyrics' ).length ) {
						$( progress_html ).insertBefore( $( this ).find( '.track-row-lyrics' ) );
					} else {
						$( this ).append( progress_html );
					}
					
				}

			} );

		}


		/* Generate Waveform
		 -------------------------------- */
		if ( $( '.track-waveform' ).length ) {

			$( '.track-waveform' ).each(function(){

				var 
					$this = $( this ),
					id = $this.attr( 'id' ),
					audio = $this.attr( 'data-audio' ),
					waveform;

				if ( Waveform != undefined && id !== 'undefined' && audio !== 'undefined' && audio !== '' ) {

					waveform = $( '#' + id + ' .waveform' )[0];
					$.ajax({
				        url: audio,
				        async: false,
				        type: "GET",
				        dataType: "binary",
				        processData: false,
				        success: function (data) {
				            var blob = data;
				            Waveform.generate( blob, {
				                canvas_width: 1400,
				                canvas_height: 200,
				                bar_width:4,
				                bar_gap : 0.4,
				                wave_start_color: "#ff7700",
								wave_end_color: "#ff2400",
				                shadow_height : 70,
								shadow_start_color: "#ff7700",
								shadow_end_color: "#ff2400",
								shadow_opacity : 0.2,
								shadow_gap : 1,
				                download: false,
				                onComplete: function(png, pixels) {
				                    var canvas = waveform;
				                    var context = canvas.getContext( '2d' );
				                    context.putImageData( pixels, 0, 0 );
				                    settings.audio_player.update_events( $this );
				                }
				            });
				                                    
				        },

				        error: function (xhr, status, err) {
				           console.log(status);
				        }

				    }); // Ajax magic
				}
			});
		}


		/* UPDATE Scamp player content 
		   and events
		 -------------------------------- */
		settings.audio_player.update_content();
		settings.audio_player.update_events( 'body' );
	}


	/* ==================================================
	  Text Animations 
	================================================== */
	function _text_anim( container ) {
	    if ( $( ".text-fx", container ).length) {
	        $( ".text-fx", container ).each( function() {
	            if (! $( this ).hasClass( "finished" ) ) {
	                $( this ).addClass( "finished" );
	                var c = $( this ).html().replace( "<br />", "~" );
	                var c = c.replace( "<br>", "~" );
	                var e = c.split( "" );
	                var b = "";
	                var a;
	                for (var d = 0; d < e.length; d++) {
	                    if (e[d] == " ") {
	                        b += " ";
	                    } else {
	                        if (e[d] == "~") {
	                            b += "<br />";
	                        } else {
	                            b += '<p><span class="trans-10" style="-webkit-transition-delay: ' + (d / 32) + "s; transition-delay: " + (d / 32) + 's;">' + e[d] + "</span></p>";
	                        }
	                    }
	                }
	                $( this ).html(b);
	            }
	        });
	    }
	    if ( $( ".text-fx-word",container ).length) {
	        $( ".text-fx-word", container ).each( function() {
	            if ( ! $( this ).hasClass( "finished" ) ) {
	                $( this ).addClass( "finished" );
	                var d = $( this ).html().split(" ");
	                var b = "";
	                var a;
	                for (var c = 0; c < d.length; c++) {
	                    if (d[c] == " ") {
	                        b += " ";
	                    } else {
	                        if (d[c] == "<br>" || d[c] == "<br />") {
	                            b += "<br />";
	                        } else {
	                            b += '<p><span class="trans-15" style="-webkit-transition-delay: ' + (c / 14) + "s; transition-delay: " + (c / 14) + 's;">' + d[c] + "</span></p>";
	                        }
	                    }
	                }
	                $( this ).html( b );
	            }
	        });
	    }
	    if ( $( ".text-fx-btn", container ).length) {
	        $( ".text-fx-btn .text-fx-btn-x", container ).each( function() {
	            if ( ! $( this ).hasClass( "finished" ) ) {
	                $( this ).addClass( "finished" );
	                var c = $( this ).html().replace("<br />", "~");
	                var c = c.replace("<br>", "~");
	                var e = c.split("");
	                var b = "";
	                var a;
	                for (var d = 0; d < e.length; d++) {
	                    if (e[d] == " ") {
	                        b += " ";
	                    } else {
	                        if (e[d] == "~") {
	                            b += "<br />";
	                        } else {
	                            b += '<p><span class="trans-12" style="-webkit-transition-delay: ' + (d / 45) + "s; transition-delay: " + (d / 45) + 's;">' + e[d] + "</span></p>";
	                        }
	                    }
	                }
	                $( this ).html( b );
	            }
	        });
	    }
	}


	/* ==================================================
	   Masonry boxes
	================================================== */
	function _masonry( container ) {

		/* Gallery Grid */
		$( '.gallery-grid' ).isotope({
				itemSelector : '.gallery-grid-item',
				transitionDuration: 0,
		});
		setTimeout( function(){ $( '.gallery-grid' ).isotope( 'layout' ) }, 3000);

	}


	/* ==================================================
	  Resonsive videos 
	================================================== */
	function _responsive_videos( container ) {
		if ( $.fn.ResVid ) {
			$( container ).ResVid();
		}
	}


	/* ==================================================
	  Toggle Effect 
	================================================== */
	function _toggle( container ) {
		$( '.toggle', container ).each( function() {		  
			
			/* Init */
			$( '.active-toggle', this ).next().show();

			/* List variables */
			var toggle = $( this );
			
			/* Click on Toggle Heading */
			$( 'h4.toggle-title', this ).on( 'click', function (e) {
				if ( $( this ).is( '.active-toggle' ) ) {
					$( this ).removeClass( 'active-toggle' );
					$( '.toggle-content', toggle ).slideUp(400);
				} else {
					$( this ).addClass( 'active-toggle' );
					$( '.toggle-content', toggle ).slideDown(400);
				}
				e.preventDefault;
			});
			
		});
	}


	/* ==================================================
	  Tabs 
	================================================== */
	function _tabs( container ) {
		$( '.tabs-wrap', container ).each( function() {		  
				
			/* List variables */
			var tabs = $( this );
			
			/* Click on Tab */
			$( 'ul.tabs li a', tabs ).on( 'click', function (e) {

				if ( ! $( this ).is( 'on' ) ) {
					var tab = $( this ).attr( 'href' );
					if ( $( tab ).length ) {
						$( '.tab-content').removeClass( 'on' );
						$( 'ul.tabs li a', tabs ).removeClass( 'on' );
						$( tab ).addClass( 'on' );
						$( this ).addClass( 'on' );
					}
				
				}
				return false;
				e.preventDefault;
			});
			
		});
	}


	/* ==================================================
	  BX Slider 
	================================================== */
	function _bxslider( container ) {

		if ( $( '.layers-slider' ).length ) {
			var layers_slider = $( '.layers-slider' ).bxSlider({
	            mode: 'fade',
	            auto: false,
	            speed: 1000,
	            pager: true,
	            controls: true,
	            pause: 5000,
	            touchEnabled: true,
	            onSliderLoad: function( slide ) {
	                setTimeout(function() {
	                    var init_height = $( '.layers-slider li', layers_slider ).outerHeight();
	                    $( '.bx-viewport', layers_slider ).height( init_height );
	                }, 100 );
	                $( '.layers-slider li.on .title', layers_slider ).addClassDelay( 'on', 1000 );
	              	$( '.layers-slider li.on .sub-title', layers_slider ).addClassDelay( 'on', 1200 );
	              	$( '.layers-slider li.on .thumb-icon', layers_slider ).addClassDelay( 'on', 1300 );
	            },
	            onSlideBefore: function(slide) {

	                slide.addClass( 'start' );
	                slide.addClassDelay( 'over', 10 );
	                slide.parent().children('li').removeClassDelay( 'on start', 100 );
	               	slide.addClassDelay( 'on', 500 );
	               	slide.removeClassDelay( 'over', 800 );
	              	$( slide ).find( '.title' ).removeClass( 'on' );
	              	$( slide ).find( '.sub-title' ).removeClass( 'on' );
	              	$( slide ).find( '.thumb-icon' ).removeClass( 'on' );
	             
	            },
	            onSlideAfter: function(slide) {
	            	$( slide ).find( '.title' ).addClassDelay( 'on', 200 );
	              	$( slide ).find( '.sub-title' ).addClassDelay( 'on', 600 );
	              	$( slide ).find( '.thumb-icon' ).addClassDelay( 'on', 700 );
	            }
	        });
		}

		if ( $( '.testi-slider' ).length ) {
			var testi_slider = $( '.testi-slider' ).bxSlider({
	            mode: 'fade',
	            auto: false,
	            speed: 1000,
	            pager: true,
	            controls: true,
	            pause: 5000,
	            touchEnabled: true,
	            onSliderLoad: function( slide ) {
	                setTimeout(function() {
	                    var init_height = $( '.testi-slider li', testi_slider ).outerHeight();
	                    $( '.bx-viewport', testi_slider ).height(init_height);
	                }, 100 );
	            },
	            onSlideBefore: function(slide) {
	                slide.addClass( 'start' );
	                slide.addClassDelay( 'over', 10 );
	                slide.parent().children('li').removeClassDelay( 'on start', 100 );
	               	slide.addClassDelay( 'on', 500 );
	               	slide.removeClassDelay( 'over', 800 );
	            },
	        });
		}
                        
	}

	/* ==================================================
	  Text Slider 
	================================================== */
	function _text_slider( container ) {
		if ( $( '.text-slider', container ).length <= 0 ) {
			return;
		} 

		// For each instance
		$( '.text-slider', container ).each( function(){
			var $this = $( this ),
				delay = parseInt( $this.attr( 'data-delay' ), 10 ),
				handle,
				index = 1,
				l = $( this ).find( '.text-slide' ).length-1,
				delay = delay * 1000;
			if ( l == 0 ) {
				return;
			}
	
			var _change_slide = function() {
				$this.find( '.text-slide:eq( ' + index + ' )' ).hide().removeClass( 'visible' ).find( '.on' ).removeClass( 'on' );
				index ++;
				if ( index > l ) {
					index = 0;
				}
				$this.find( '.text-slide:eq( ' + index + ' )' ).show().addClass( 'visible' );
				$this.find( '.visible h2' ).addClassDelay( 'on', 100 );
				$this.find( '.visible h6' ).addClassDelay( 'on', 300 );
			}
			_change_slide();
			handle = setInterval( _change_slide, delay );
			delay = delay * 1000;
		});

	}


	/* ==================================================
	  Homepage 
	================================================== */
	function _homepage_init( container ) {

		/* Set itro image animations */
		$( '.intro-image', container ).addClass( 'on' );
		$( '.intro-image', container ).removeClassDelay( 'on blur-fx trans-20', 2100 );

		/* Get instagram feed */
		_instagram( 'html' );

		/* Set isotope layout */
		if ( $.fn.isotope ) {
			$( '.items, .gallery-grid' ).isotope( 'layout' );
		}

	}

	/* ==================================================
	  Shopping Cart 
	================================================== */
	( function() {

		
			
	});




	/* ==================================================
	  Navigation 
	================================================== */
	( function() {

		/* Main navigation
	 	----------------------------------- */
		var 
			$nav = $( '#nav' ).children( 'ul' );
		
		// Create main navigation
		$( 'li', $nav).on( 'mouseenter', function() {
			var 
				$this = $( this ),
				$sub  = $this.children( 'ul' );
			if ( $sub.length) $this.addClass( 'active' );
			$sub.hide().stop(true, true).fadeIn(200);
		}).on( 'mouseleave', function() {
			$( this ).removeClass( 'active' ).children( 'ul' ).stop(true, true).fadeOut(50);
		});


		/* Change Active State on Scroll
		   Show or hide navigation background
	 	----------------------------------- */
		var sections = $( '.section' ),
		  	nav = $( '#nav' ),
		  	header = $( '#header' ),
		  	offset = 20,
		  	hidden_nav = false,
		  	header_height = header.outerHeight(),
		  	first_section = $( '.section' ).eq(0),
		  	last_section = $( '.site .section' ).last();


		// Disable hidden navigation
		if ( header.hasClass( 'hide-navigation' ) ) {
			hidden_nav = true;
		}
		 
		var scroll_actions = function() {

			var cur_pos = $( this ).scrollTop(),
				last_pos = last_section.offset().top + last_section.outerHeight();

			/* Show or hide naviagtion background */
			if ( hidden_nav ) {
				if ( cur_pos > 0 ) { 
					header.removeClass( 'hide-navigation' );
				} else {
					header.addClass( 'hide-navigation' )
				}
			}

			/* Add .active class to navigation if
			is over on .section container */
			if ( cur_pos < first_section.offset().top - header_height-offset ) {
				sections.removeClass( 'active' );
				nav.find( 'a' ).removeClass( 'active on' );
			} else if ( cur_pos > last_pos - header_height-offset ) {
				sections.removeClass( 'active' );
				nav.find( 'a' ).removeClass( 'active on' );
			} else {
				sections.each( function(i) {
					var top = $( this ).offset().top - header_height-offset,
						bottom = top + $( this ).outerHeight();

					if ( cur_pos >= top && cur_pos <= bottom ) {
						nav.find( 'a' ).removeClass( 'active on'  );
						sections.removeClass( 'active'  );
						$( this ).addClass( 'active'  );
						nav.find( 'a[href*="#'+$( this ).attr( 'id' )+'"]' ).addClass( 'active on' );
					}

				});
			}
		};
		
		$( window ).on( 'scroll', scroll_actions );

		scroll_actions();
		

		/* Responsive navigation
 	 	----------------------------------- */

	 	/* Clone top navigation and add to the sidebar */
		$( '#nav ul, #nav li' ).addClass( 'top-nav-el' );
		var $top_nav = $( '#nav > ul' ).children().clone();
		if ( $( '#responsive-nav ul' ).length <= 0 ) {
			$( '#responsive-nav' ).append( '<ul></ul>' );
			$( '#responsive-nav ul' ).append( $top_nav );
		}
		else {
			$( $top_nav ).insertBefore( '#responsive-nav ul > li:first-child:eq(0)' );
		}
		$( '#responsive-nav li' ).each( function(){
			if ( $( this ).children( 'ul' ).length ) {
				$( this ).find( 'a' ).first().after( '<i class="submenu-trigger icon icon-angle-down"></i>' );
			}
			$( this ).addClass( 'text-fx-btn rotate-x-360' );
			$( this ).find( 'a' ).addClass( 'trans-10 text-fx-btn-x' );
		});

		$( '#responsive-nav > ul > li' ).addClass( 'first-child' );
		$( '#responsive-nav .submenu-trigger, #responsive-nav .menu-item-has-children > a[href="#"]' ).on( 'click', function(e){
			e.preventDefault();
			var li = $( this ).closest( 'li' ),
				main_index = $( this ).parents( '.first-child' ).index();
			$( '#responsive-nav > ul > li:not(:eq( '+main_index+' )) ul:visible' ).slideUp();
			$( '#responsive-nav > ul > li:not(:eq( '+main_index+' )) li, #responsive-nav > ul > li:not(:eq( '+main_index+' ))' ).removeClass( 'opened' );
			li.toggleClass( 'opened' ).find( ' > ul' ).slideToggle(400);
		});

		/* Menu Trigger */
		$( '.responsive-trigger' ).on( 'click', function(e){
			e.preventDefault();
			$( 'body' ).addClass( 'responsive-block-on' );
		});

		$( '.responsive-block-close, .responsive-block-layer' ).on( 'click', function( e ){
			e.preventDefault();
			$( 'body' ).removeClass( 'responsive-block-on' );
		});

		/* Close Slidebar after click on hash anchor and ajax links */
		$( document ).on( 'click', '.responsive-block-content a[href*="#"], .responsive-block-content a.ajax-link', function(e){
			if ( $( this ).attr( 'href' ) != '#'  ) {
				$( 'body' ).removeClass( 'responsive-block-on' );
			}
		});


		/* Responsive Social Icons
		 -------------------------------- */

		if ( $( '#responsive-social' ).length ) {

		 	/* Clone top social icons and put in sidebar */
			var $social_block = $( '#social-block .social-icons' ).clone();
			$( '#responsive-social' ).append( $social_block ).find( '.social-icons' ).addClass( 'on' );
		}


		/* Icon navigation
 	 	----------------------------------- */

		/* Show/Hide Search Block */
		$( '#nav-search' ).on( 'click', function(e){
			$( this ).toggleClass( 'on' );
			$( '#search-block' ).slideToggle(400);
			e.preventDefault();
		});

		$( '#search-block' ).on( 'focusout', function () {
  			$( '#nav-search' ).removeClass( 'on' );
  			$( this ).slideUp(400);
  			e.preventDefault();
		});

		/* Show/Hide Social Block */
		$( '#nav-social' ).on( 'click', function(e){
			$( this ).toggleClass( 'on' );
			
			$( '#social-block' ).slideToggle( 400, function() {
				$( '#social-block .show-fx' ).toggleClass( 'on' );
		    });

			e.preventDefault();
		});

		/* Show Player Trigger */
		$( 'a[href="#show-player"]' ).on( 'click', function(event) {

			event.preventDefault();
			event.stopPropagation();

			if ( $( '#scamp_player' ).hasClass( 'sp-show-player' ) ) {
				$( '#scamp_player' ).removeClass( 'sp-show-player' ).addClass( 'sp-hidden-player' );
				$( this ).removeClass( 'on' );
			} else {
				$( '#scamp_player' ).removeClass( 'sp-hidden-player' ).addClass( 'sp-show-player' );
				$( this ).addClass( 'on' );
			}

		});
	})();
});