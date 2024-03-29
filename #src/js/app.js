let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));


window.addEventListener('load', function () {
	
	document.body.classList.add('is-load');

	// ==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('._padding-top');
		if (wrapper) {
			let header = document.querySelector('.header');
			if(header) {
				const setPedding = () => wrapper.style.paddingTop = header.clientHeight + 'px';
				setPedding();
				window.addEventListener('resize', setPedding);
			}
			
		}
	}
	// ==== AND ADD PADDING-TOP ================================

	@@include('_function.js');
	@@include('files/dynamic_adapt.js');
	@@include('forms.js');
	@@include('pages/home.js');
	@@include('pages/appointment.js');
	@@include('../common/checkbox/checkbox.js');
	@@include('../common/header/header.js');
	@@include('../common/rating/rating.js');
	//@@includ e('../common/popup/popup.js');
	
});

window.addEventListener('DOMContentLoaded', function() {
	if(isMobile.any()) {
		document.body.classList.add('_is-mobile');
	}


	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});
});
{
	var isMap = document.getElementById("map");
	if(isMap) {
		var map;

		var center = {
			lat: 40.68950,
			lng: -74.044683,
		}

		var markerPosition = {
			lat: 40.68950,
			lng: -74.044683,
		}

		function initMap() {

			map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: center.lat, lng: center.lng},

				zoom: 16,

				//styles: 
			});

			var marker = new google.maps.Marker({

			    position: {lat: markerPosition.lat, lng: markerPosition.lng},

			    map: map,

			    title: '',
			    label: '',

			   // icon: 'img/contact/googlMarker.svg',
			});

		}
	}

	var isMap2 = document.getElementById("map-2");
	if(isMap2) {
		var map2;
		let center = {
			lat: +isMap2.dataset.markPositionLat,
			lng: +isMap2.dataset.markPositionLng
		}
		
		let markerPosition = {
			lat: +isMap2.dataset.centerLat,
			lng:  +isMap2.dataset.centerLng,
		}

		function initMap() {

			map2 = new google.maps.Map(document.getElementById('map-2'), {
				center: {lat: center.lat, lng: center.lng},

				zoom: 16,

				//styles: 
			});

			var marker = new google.maps.Marker({

			    position: {lat: markerPosition.lat, lng: markerPosition.lng},

			    map: map2,

			    title: '',
			    label: '',

			   // icon: 'img/contact/googlMarker.svg',
			});

		}
	}
}