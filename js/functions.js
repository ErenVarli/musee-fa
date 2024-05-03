// @koala-prepend "locale/fr.js"

// -- SELECT CUSTOM from https://www.w3schools.com/howto/howto_custom_select.asp
(function(){
    let x, i, j, selElmnt, a, b, c

    // Look for any elements with the class "custom-select":
    x = document.getElementsByClassName("custom-select")

    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0]
        // For each element, create a new DIV that will act as the selected item:
        a = document.createElement("DIV")
        a.setAttribute("class", "select-selected")
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
        x[i].appendChild(a)

        // For each element, create a new DIV that will contain the option list:
        b = document.createElement("DIV")
        b.setAttribute("class", "select-items select-hide")

        for (j = 1; j < selElmnt.length; j++) {
            // For each option in the original select element, create a new DIV that will act as an option item:
            c = document.createElement("DIV")
            c.innerHTML = selElmnt.options[j].innerHTML

            c.addEventListener("click", function(e) {
                // When an item is clicked, update the original select box, and the selected item:
                let y, i, k, s, h
                s = this.parentNode.parentNode.getElementsByTagName("select")[0]
                h = this.parentNode.previousSibling

                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i
                        h.innerHTML = this.innerHTML
                        y = this.parentNode.getElementsByClassName("same-as-selected")

                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class")
                        }

                        this.setAttribute("class", "same-as-selected")
                        break
                    }
                }
                h.click()
            })
            b.appendChild(c)
        } // Endfor

        x[i].appendChild(b)
        a.addEventListener("click", function(e) {
            // When the select box is clicked, close any other select boxes, and open/close the current select box:
            e.stopPropagation()
            closeAllSelect(this)
            this.nextSibling.classList.toggle("select-hide")
            this.classList.toggle("select-arrow-active")
        })
    } // Endfor

    function closeAllSelect( elmnt ) {
        // A function that will close all select boxes in the document, except the current select box:
        let x, y, i, arrNo = []
        x = document.getElementsByClassName("select-items")
        y = document.getElementsByClassName("select-selected")
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active")
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide")
            }
        }
    }

    // If the user clicks anywhere outside the select box, then close all select boxes:
    document.addEventListener("click", closeAllSelect);
})();
// -- END SELECT CUSTOM


//// Pour les fonctions spécifiques en jQuery \\\\
jQuery( document ).ready(function($) {

    // HELPERS
    const log = console.log
    const lang = $('html').attr('lang') // fr-FR or en-EN

    // --- UTILITIES FUNCTIONS
	//@param Str small(-up) || medium(-up) || large(-up)
    //@return Bool if screen
    function isScreen ( slug ) {
    	let info = slug.split("-")
    	let m = info[1] ? 'min' : 'max'

    	switch (info[0]) {
    		case 'small':
    			size = (m == 'max') ? '767px' : '768px'
    		break;
    		case 'medium':
    			size = (m == 'max') ? '991px' : '992px'
    		break;
    		case 'large':
    			size = (m == 'max') ? '1199px' : '1200px'
    		break;
    	}

    	return window.matchMedia("("+ m +"-width: "+ size +")").matches
    }

    // SLICK SLIDER
    $('.slick-slider--full').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000
    })

    $('.slick-slider--default').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    })

    // DATE PICKER
    let date_placeholder = "Choose a date"
    let date_args = { format: 'DD/MM/Y' }

    if ( lang == 'fr-FR' ) {
        date_placeholder = "Choisir une date"
        date_args.locale = 'fr'
    }

    // If there have not date, add a placeholder
    if ( $("#ui-datepicker").val() == '' ) {
        $("#ui-datepicker")
            .attr( "placeholder", date_placeholder )
    }
    
    $("#ui-datepicker").datetimepicker( date_args )

    // ---- ACF MAPS -- Begin
    /*
    *  new_map
    *
    *  This function will render a Google Map onto the selected jQuery element
    *
    *  @type	function
    *  @date	8/11/2013
    *  @since	4.3.0
    *
    *  @param	$el (jQuery element)
    *  @return	n/a
    */
    
    function new_map( $el ) {
        
        // var
        var $markers = $el.find('.marker');
        
        
        // vars
        var args = {
            zoom		: 16,
            center		: new google.maps.LatLng(0, 0),
            mapTypeId	: google.maps.MapTypeId.ROADMAP
        };
        
        
        // create map	        	
        var map = new google.maps.Map( $el[0], args);
        
        
        // add a markers reference
        map.markers = [];
        
        
        // add markers
        $markers.each(function(){
            
            add_marker( $(this), map );
            
        });
        
        
        // center map
        center_map( map );
        
        
        // return
        return map;
        
    }

    /*
    *  add_marker
    *
    *  This function will add a marker to the selected Google Map
    *
    *  @type	function
    *  @date	8/11/2013
    *  @since	4.3.0
    *
    *  @param	$marker (jQuery element)
    *  @param	map (Google Map object)
    *  @return	n/a
    */

    function add_marker( $marker, map ) {

        // var
        var latlng = new google.maps.LatLng( $marker.attr('data-lat'), $marker.attr('data-lng') );

        // create marker
        var marker = new google.maps.Marker({
            position	: latlng,
            map			: map
        });

        // add to array
        map.markers.push( marker );

        // if marker contains HTML, add it to an infoWindow
        if( $marker.html() )
        {
            // create info window
            var infowindow = new google.maps.InfoWindow({
                content		: $marker.html()
            });

            // show info window when marker is clicked
            google.maps.event.addListener(marker, 'click', function() {

                infowindow.open( map, marker );

            });
        }

    }

    /*
    *  center_map
    *
    *  This function will center the map, showing all markers attached to this map
    *
    *  @type	function
    *  @date	8/11/2013
    *  @since	4.3.0
    *
    *  @param	map (Google Map object)
    *  @return	n/a
    */

    function center_map( map ) {

        // vars
        var bounds = new google.maps.LatLngBounds();

        // loop through all markers and create bounds
        $.each( map.markers, function( i, marker ){

            var latlng = new google.maps.LatLng( marker.position.lat(), marker.position.lng() );

            bounds.extend( latlng );

        });

        // only 1 marker?
        if( map.markers.length == 1 )
        {
            // set center of map
            map.setCenter( bounds.getCenter() );
            map.setZoom( 16 );
        }
        else
        {
            // fit to bounds
            map.fitBounds( bounds );
        }

    }

    /*
    *  document ready
    *
    *  This function will render each map when the document is ready (page has loaded)
    *
    *  @type	function
    *  @date	8/11/2013
    *  @since	5.0.0
    *
    *  @param	n/a
    *  @return	n/a
    */
    // global var
    let map = null;

    function initAcfMaps(){
        $('.acf-map').each(function(){
            map = new_map( $(this) );
        });
    }
    
    // Ajoute link tarteaucitron si une vidéo est bloquée
    function tarteblock(){
        //Sur chaque Gmap
        var elem = document.querySelector(".acf-map")
        
        // Si Google Maps n'existe pas dans cet element
        if ( jQuery('.gm-style').length == 0) {
            // On insère le message
            elem.innerHTML += '<p class="message-nocookies">Le dépôt de cookies par Google Maps est actuellement désactivé. Afin de voir cette carte, vous pouvez : <button class="mbtn">Autoriser les cookies de Google Maps</button></p>';
        }
        
        //On envève le message au click sur les boutons pour permettre les cookies
        jQuery('#googlemapsAllowed,#tarteaucitronAllAllowed').click(function(){
            jQuery('.message-nocookies').remove();
        })
    
        jQuery('.mbtn').click(function(){
            tarteaucitron.userInterface.respond(document.getElementById('googlemapsAllowed'), true);
            jQuery('.message-nocookies').remove();
        })
    }
    
    // On active la fonction après un temps pour permettre la cancelation de .message-nocookies
    setTimeout(tarteblock, 1000)
    
    // Init Acf Maps when googleMaps is_loaded by tarteaucitron
    document.addEventListener("googlemaps_loaded", function() {
        var acfMapTimeOut = null
    
        // googleMaps detector looper, init acf map when matching
        var acfMapInit = function(){
            if ( typeof window.google === "object" ) {
                initAcfMaps()
                clearTimeout(acfMapTimeOut)
            } else {
                acfMapTimeOut = setTimeout(() => { acfMapInit() }, 800);
            }
        }
    
        if ( jQuery('.acf-map').length ) acfMapInit()
    })

    // ---- ACF MAPS -- End

    // ADD EVENT LISTENNERS
    $(window).scroll(function(event) {
        if ( isScreen('medium-up') ) {
            let scroll = $(window).scrollTop()

            if ( scroll > 400 ) {
                $('.navbar-logo').addClass('is-visible')
            } else {
                $('.navbar-logo').removeClass('is-visible')
            }
        }
    })

    if ( isScreen('medium') ) {
        $('.js-prices-collapse').hide()
    }

    $('.js-prices-toggle').on('click', function(){
        $('.js-prices-collapse').slideToggle()
        $(this).toggleClass('is-active')
    })

    // INITIALISATION
    if ( isScreen('small') ){
        $('.js-prices-collapse').hide()
    }
    
});