jQuery(document).ready(function(i){function e(e){e.each(function(){var e=i(this),a=e.children(".cd-slider").children("li"),t=n(e);t.on("click",function(e){e.preventDefault();var n=i(this),s=n.index();l(s,t,a)}),e.on("swipeleft",function(){var i=s(e),n=e.find(".is-visible").last(),o=n.index();!n.is(":last-child")&&i&&l(o+1,t,a)}),e.on("swiperight",function(){var i=s(e),n=e.find(".is-visible").last(),o=n.index();!n.is(":first-child")&&i&&l(o-1,t,a)})})}function n(e){var n=i('<ol class="cd-slider-navigation"></ol>');return e.children(".cd-slider").find("li").each(function(e){var l=i(0==e?'<li class="selected"></li>':"<li></li>");i('<a href="#0"></a>').appendTo(l);l.appendTo(n)}),n.appendTo(e),n.children("li")}function l(e,n,l){n.removeClass("selected").eq(e).addClass("selected"),l.eq(e).addClass("is-visible").removeClass("covered").prevAll("li").addClass("is-visible covered").end().nextAll("li").removeClass("is-visible covered"),n.parent("ul").addClass("slider-animating").on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){i(this).removeClass("slider-animating")})}function s(i){return i.parents(".touch").length>0}function a(){i("#header").addClass("active")}function t(){i("#header").removeClass("active")}var o=i(".cd-slider-wrapper");o.length>0&&e(o),i(".scrollTo").on("click",function(){var e=i(this).attr("href"),n=750;return i("html, body").animate({scrollTop:i(e).offset().top},n),!1});i(window).scroll(function(e){i(window).scrollTop()>=150?a():i(window).scrollTop()<150&&t()}),i("#burger").on("click",function(){i(".header_nav").toggleClass("active")})});