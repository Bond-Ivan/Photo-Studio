"use strict";var e,t,r,o,c,n,a,s,u,d,i,l,_,m,v,p,y;e=/^[a-zA-Zа-яА-ЯёЁ]+$/,t=document.querySelector(".header__burger"),r=document.querySelector(".header__menu"),o=document.querySelector(".header__menu-btn"),c=document.querySelector(".header__btn"),n=document.querySelector(".header__search"),a=document.querySelector(".header__top-nav"),s=document.querySelector(".header__search-btn"),u=document.querySelector(".contacts__map-btn"),d=document.querySelector(".contacts__map-inner"),i=document.querySelector(".contacts__form-btn"),l=document.querySelector(".contacts__input"),_=document.querySelector(".contacts__input-elem"),m=document.querySelector(".contacts__show-address__btn "),v=document.querySelector(".about-us__btn"),p=document.querySelector(".about-us__input"),y=document.querySelector(".about-us__input-elem"),v.addEventListener("click",(function(){if(e.test(y.value))document.querySelector(".about-us__input-error")&&(document.querySelector(".about-us__input-error").remove(),y.removeAttribute("style","border-color:red")),location.reload();else{document.querySelector(".about-us__input-error")&&document.querySelector(".about-us__input-error").remove();var t=document.createElement("p");t.textContent="Неккоректный формат",t.classList.add("about-us__input-error"),p.append(t),y.setAttribute("style","border-color:red")}})),i.addEventListener("click",(function(){if(e.test(_.value))document.querySelector(".contacts__input-error")&&(document.querySelector(".contacts__input-error").remove(),_.removeAttribute("style","border-color:red")),location.reload();else{document.querySelector(".contacts__input-error")&&document.querySelector(".contacts__input-error").remove();var t=document.createElement("p");t.textContent="Неккоректный формат",t.classList.add("contacts__input-error"),l.append(t),_.setAttribute("style","border-color:red")}})),t.addEventListener("click",(function(){r.classList.add("header__menu--active")})),o.addEventListener("click",(function(){r.classList.remove("header__menu--active")})),u.addEventListener("click",(function(){d.classList.add("contacts__map-inner--active"),d.classList.contains("contacts__map-inner--active")&&(m.classList.add("contacts__show-address__btn--active"),m.addEventListener("click",(function(){d.classList.remove("contacts__map-inner--active"),m.classList.remove("contacts__show-address__btn--active")})))})),c.addEventListener("click",(function(){n.classList.add("header__search--active"),a.classList.add("header__top-nav--active"),c.classList.add("header__btn--active")})),s.addEventListener("click",(function(){n.classList.remove("header__search--active"),a.classList.remove("header__top-nav--active"),c.classList.remove("header__btn--active")}));var b=[55.76944445235575,37.6389748435122];ymaps.ready((function(){var e=new ymaps.Map("map",{center:[55.768617954996486,37.63612533751799],zoom:15}),t=new ymaps.Placemark(b,{},{iconLayout:"default#image",iconImageHref:"images/placemark.svg",iconImageSize:[12,12],iconImageOffset:[0,0]});e.controls.remove("geolocationControl"),e.controls.remove("searchControl"),e.controls.remove("trafficControl"),e.controls.remove("typeSelector"),e.controls.remove("fullscreenControl"),e.controls.remove("zoomControl"),e.controls.remove("rulerControl"),e.geoObjects.add(t)}));