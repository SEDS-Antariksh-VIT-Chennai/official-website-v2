webpackJsonp([1], {
    0: function (e, t, o) {
        "use strict";
        var s = o(70),
            i = o(72),
            n = o(71),
            r = o(67),
            c = o(66),
            a = o(69),
            l = o(68);
        (0, s.setLoader)(), (0, i.setTopbar)(), (0, n.setMenu)(), (0, r.setSections)(), (0, c.setCrewSection)(), (0, a.setWorksSection)(), (0, l.setWorkPreview)()
    },
    65: function (e, t) {
        "use strict";

        function o() {
            var e = document.querySelector("body"),
                t = document.getElementById("audio");
            t.play(), document.getElementById("audio_trigger").onclick = function () {
                e.classList.contains("audio-on") ? (t.pause(), e.classList.remove("audio-on")) : (t.play(), e.classList.add("audio-on"))
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.audioPlayer = o
    },
    66: function (e, t, o) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            (0, r.default)(".portfolio-list--one").slick({
                dots: !1,
                arrows: !1,
                centerMode: !0,
                centerPadding: "0",
                touchMove: !1,
                edgeFriction: .05,
                slidesToShow: 3,
                slidesToScroll: 1,
                touchThreshold: 10,
                infinite: !0,
                autoplay: !0,
                speed: 15e3,
                autoplaySpeed: 0,
                cssEase: "linear",
                asNavFor: ".portfolio-list--two",
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        initialSlide: 1,
                        centerMode: !0,
                        centerPadding: "50px",
                        infinite: !1,
                        autoplay: !1,
                        speed: 500,
                        cssEase: "ease"
                    }
                }]
            }), (0, r.default)(".portfolio-list--two").slick({
                dots: !1,
                arrows: !1,
                centerMode: !0,
                centerPadding: "0",
                touchMove: !1,
                edgeFriction: .05,
                slidesToShow: 3,
                slidesToScroll: 1,
                touchThreshold: 10,
                infinite: !0,
                autoplay: !0,
                speed: 15e3,
                autoplaySpeed: 0,
                cssEase: "linear",
                asNavFor: ".portfolio-list--one",
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        initialSlide: 1,
                        centerMode: !0,
                        centerPadding: "50px",
                        infinite: !1,
                        autoplay: !1,
                        speed: 500,
                        cssEase: "ease"
                    }
                }]
            }), (0, r.default)(".person-big-image").slick({
                dots: !1,
                arrows: !1,
                centerMode: !0,
                centerPadding: "0",
                infinite: !1,
                initialSlide: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                touchThreshold: 10,
                speed: 500,
                fade: !0,
                cssEase: "linear"
            }), (0, r.default)(".person-details").slick({
                dots: !1,
                arrows: !1,
                centerMode: !0,
                centerPadding: "0",
                infinite: !1,
                touchMove: !1,
                initialSlide: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 1e3,
                cssEase: "ease",
                asNavFor: ".people"
            }), (0, r.default)(".people").slick({
                dots: !1,
                arrows: !1,
                centerMode: !0,
                centerPadding: "0",
                infinite: !1,
                touchMove: !1,
                edgeFriction: .05,
                initialSlide: 1,
                slidesToShow: 3,
                slidesToScroll: 1,
                touchThreshold: 10,
                speed: 800,
                cssEase: "ease",
                asNavFor: ".person-details",
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerMode: !0,
                        centerPadding: "100px"
                    }
                }]
            }), (0, r.default)(".people .slick-slide").on("click", function () {
                (0, r.default)(".people").slick("slickGoTo", (0, r.default)(this).data("slick-index"))
            }), (0, r.default)(".people").on("beforeChange", function (e, t, o, s) {
                (0, r.default)(".person-big-image").slick("slickGoTo", s)
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setCrewSection = i;
        var n = o(15),
            r = s(n),
            c = o(64);
        s(c)
    },
    67: function (e, t, o) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = (document.querySelector("body"), document.querySelector("#main-cocpit")),
                t = (0, r.default)(".scroll-info");
            t.on("click", function () {
                var e = "#" + (0, r.default)(this).data("scroll-to"),
                    t = (0, r.default)(this).data("scroll-speed") || 800;
                console.log(t), (0, r.default)("html, body").animate({
                    scrollTop: (0, r.default)(e).offset().top
                }, t, "easeInOutCubic")
            });
            var o = document.querySelector("#silence"),
                s = o.offsetTop,
                i = document.querySelector("#crew"),
                n = i.offsetTop,
                c = document.querySelector("#fear"),
                d = c.offsetTop,
                u = document.querySelector("#offer"),
                f = u.offsetTop,
                p = document.querySelector("#report"),
                m = document.querySelector(".aside-text-box--silence"),
                v = (0, l.setupTypewriter)(m),
                w = document.querySelector(".aside-text-box--fear"),
                y = (0, l.setupTypewriter)(w),
                g = document.querySelector(".comet");
            new a.default(g);
            var h = function () {
                var e = !1;
                return function () {
                    e || (e = !0, v.type())
                }
            }(),
                S = function () {
                    var e = !1;
                    return function () {
                        e || (e = !0, y.type())
                    }
                }();
            (0, r.default)("section").removeClass("section-is-shown"), setTimeout(function () {
                e.classList.add("section-is-shown")
            }, 4e3), window.addEventListener("scroll", function () {
                var e = window.scrollY,
                    t = p.offsetTop;
                e > s - 500 && (h(), o.classList.add("section-is-shown")), e > n - 500 && i.classList.add("section-is-shown"), e > d - 500 && (S(), c.classList.add("section-is-shown")), e > d - 500 && e < f - 500 ? g.classList.add("comet--visible") : g.classList.remove("comet--visible"), e > f - 500 && u.classList.add("section-is-shown"), e > t - 500 && p.classList.add("section-is-shown")
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setSections = i;
        var n = o(15),
            r = s(n),
            c = o(63),
            a = s(c),
            l = o(73);
        jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
            def: "easeOutQuad",
            swing: function (e, t, o, s, i) {
                return jQuery.easing[jQuery.easing.def](e, t, o, s, i)
            },
            easeInCubic: function (e, t, o, s, i) {
                return s * (t /= i) * t * t + o
            },
            easeOutCubic: function (e, t, o, s, i) {
                return s * ((t = t / i - 1) * t * t + 1) + o
            },
            easeInOutCubic: function (e, t, o, s, i) {
                return (t /= i / 2) < 1 ? s / 2 * t * t * t + o : s / 2 * ((t -= 2) * t * t + 2) + o
            }
        })
    },
    68: function (e, t, o) {
        "use strict";

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            var e = document.querySelector("html"),
                t = document.getElementById("workPreview");
            (0, r.default)(".portfolio-card__more").on("click", function (t) {
                t.preventDefault(), t.stopPropagation();
                var o = document.querySelector(".o-work-preview"),
                    s = t.target;
                console.log(t.target.parent), console.log(s), e.classList.add("work-preview-is-active"), document.getElementById("previewImage").src = "", setTimeout(function () {
                    document.getElementById("previewImage").src = t.target.dataset.imageUrl ? "./images/portfolio/big/" + t.target.dataset.imageUrl : "./images/portfolio/big/" + t.target.parent.dataset.imageUrl
                }, 100), setTimeout(function () {
                    o.classList.add("o-work-preview--is-opened")
                }, 1e3)
            }), (0, r.default)(".o-work-preview__close").on("click", function () {
                e.classList.remove("work-preview-is-active"), t.classList.remove("o-work-preview--is-opened")
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setWorkPreview = i;
        var n = o(15),
            r = s(n)
    },
    69: function (e, t) {
        "use strict";

        function o() {
            function e(e) {
                var t = document.querySelector(".portfolio-card--is-active");
                t && t.classList.remove("portfolio-card--is-active"), e.target.classList.add("portfolio-card--is-active"), e.stopPropagation()
            }
            var t = document.querySelector(".o-works"),
                o = t.offsetTop,
                s = t.offsetHeight,
                i = document.querySelector(".portfolio-list--one"),
                n = document.querySelector(".portfolio-list--two");
            window.addEventListener("scroll", function () {
                var e = window.scrollY;
                e > o - 400 && e < o + s ? t.classList.add("o-works--active") : t.classList.remove("o-works--active")
            }), i.addEventListener("click", e, !1), n.addEventListener("click", e, !1)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setWorksSection = o
    },
    70: function (e, t, o) {
        "use strict";

        function s() {
            function e(e) {
                var t = Array.isArray(e) ? e : [e],
                    o = [];
                return t.forEach(function (e) {
                    o.push(new Promise(function (t, o) {
                        var s = new Image;
                        s.onload = function () {
                            t({
                                path: e,
                                status: "ok"
                            })
                        }, s.onerror = function () {
                            t({
                                path: e,
                                status: "error"
                            })
                        }, s.src = e
                    }))
                }), Promise.all(o)
            }
            document.querySelector(".o-loader__line").style.width = "20%", e(["./images/planet__source.png", "./images/planet__mask.png"]).then(function (e) {
                "ok" === e[0].status && setTimeout(function () {
                    document.querySelector(".o-loader__line").style.width = "70%"
                }, 1e3), "ok" === e[0].status && "ok" === e[1].status && (setTimeout(function () {
                    document.querySelector(".o-loader__line").style.width = "100%"
                }, 500), setTimeout(function () {
                    document.querySelector("body").classList.add("site-is-loaded")
                }, 1e3), setTimeout(function () {
                    (0, i.audioPlayer)()
                }, 2900)), "error" === e[0].status && setTimeout(function () {
                    document.querySelector("body").classList.add("site-is-loaded--error")
                }, 1e3)
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setLoader = s;
        var i = o(65)
    },
    71: function (e, t) {
        "use strict";

        function o() {
            var e = document.querySelector(".o-menu"),
                t = document.querySelector(".menu-trigger--open"),
                o = document.querySelector(".menu-trigger--close"),
                s = document.querySelector(".menu-list");
            t.addEventListener("click", function () {
                e.classList.add("o-menu--is-opened")
            }), o.addEventListener("click", function () {
                e.classList.remove("o-menu--is-opened")
            }), s.addEventListener("click", function () {
                e.classList.remove("o-menu--is-opened")
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setMenu = o
    },
    72: function (e, t) {
        "use strict";

        function o() {
            var e = document.querySelector(".o-topbar"),
                t = window.scrollY;
            window.addEventListener("scroll", function () {
                window.scrollY > 50 ? e.classList.add("o-topbar--scrolled") : e.classList.remove("o-topbar--scrolled"), window.scrollY > 50 && window.scrollY > t + 50 ? (e.classList.add("o-topbar--hide"), setTimeout(function () {
                    t = window.scrollY
                }, 200)) : window.scrollY < t - 50 && (e.classList.remove("o-topbar--hide"), setTimeout(function () {
                    t = window.scrollY
                }, 200))
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setTopbar = o
    },
    73: function (e, t) {
        "use strict";

        function o(e) {
            var t = e.innerHTML;
            e.innerHTML = "";
            var o = 0,
                s = "",
                i = !1,
                n = !1,
                r = 50,
                c = 0,
                a = function a() {
                    if (i === !0 && (s += t[o]), "<" === t[o] && (c = 0, n ? (n = !1, i = !0) : (s = "", n = !0, i = !0, s += t[o])), !i && n && (s.innerHTML += t[o]), i || n || (c = " " === t[o] ? 0 : Math.random() * r + 50, e.innerHTML += t[o]), i === !0 && ">" === t[o] && (c = Math.random() * r + 50, i = !1, n)) {
                        var l = document.createElement("span");
                        e.appendChild(l), l.innerHTML = s, s = l.firstChild
                    }
                    o += 1, o < t.length - 1 && setTimeout(a, c)
                };
            return {
                type: a
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setupTypewriter = o
    }
});