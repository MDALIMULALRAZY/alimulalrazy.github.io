var mr = function (a, b, c) {
    "use strict";

    function d(b) {
        b = "undefined" == typeof b ? a : b, g.documentReady.concat(g.documentReadyDeferred).forEach(function (a) {
            a(b)
        })
    }

    function e(b) {
        b = "object" == typeof b ? a : b, g.windowLoad.concat(g.windowLoadDeferred).forEach(function (a) {
            a(b)
        })
    }
    var f = {},
            g = {
                documentReady: [],
                documentReadyDeferred: [],
                windowLoad: [],
                windowLoadDeferred: []
            };
    return a(c).ready(d), a(b).on("load", e), f.setContext = function (b) {
        var c = a;
        return "undefined" != typeof b ? function (c) {
            return a(b).find(c)
        } : c
    }, f.components = g, f.documentReady = d, f.windowLoad = e, f
}


(jQuery, window, document);
mr = function (a, b, c, d) {
    "use strict";
    return a.util = {}, a.util.requestAnimationFrame = c.requestAnimationFrame || c.mozRequestAnimationFrame || c.webkitRequestAnimationFrame || c.msRequestAnimationFrame, a.util.documentReady = function (a) {
        var b = new Date,
                c = b.getFullYear();
        a(".update-year").text(c)
    }, a.util.getURLParameter = function (a) {
        return decodeURIComponent((new RegExp("[?|&]" + a + "=([^&;]+?)(&|#|;|$)").exec(location.search) || [void 0, ""])[1].replace(/\+/g, "%20")) || null
    }, a.util.capitaliseFirstLetter = function (a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }, a.util.slugify = function (a, b) {
        return "undefined" != typeof b ? a.replace(/ +/g, "") : a.toLowerCase().replace(/[\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\]\[\}\{\'\"\;\\\:\?\/\>\<\.\,]+/g, "").replace(/ +/g, "-")
    }, a.util.sortChildrenByText = function (a, c) {
        var d = b(a),
                e = d.children().get(),
                f = -1,
                g = 1;
        "undefined" != typeof c && (f = 1, g = -1), e.sort(function (a, c) {
            var d = b(a).text(),
                    e = b(c).text();
            return e > d ? f : d > e ? g : 0
        }), d.empty(), b(e).each(function (a, b) {
            d.append(b)
        })
    }, a.util.idleSrc = function (a, c) {
        c = "undefined" != typeof c ? c : "";
        var d = a.is(c + "[src]") ? a : a.find(c + "[src]");
        d.each(function (a, c) {
            c = b(c);
            var d = c.attr("src"),
                    e = c.attr("data-src");
            "undefined" == typeof e && c.attr("data-src", d), c.attr("src", "")
        })
    }, a.util.activateIdleSrc = function (a, c) {
        c = "undefined" != typeof c ? c : "";
        var d = a.is(c + "[src]") ? a : a.find(c + "[src]");
        d.each(function (a, c) {
            c = b(c);
            var d = c.attr("data-src");
            "undefined" != typeof d && c.attr("src", d)
        })
    }, a.util.pauseVideo = function (a) {
        var c = a.is("video") ? a : a.find("video");
        c.each(function (a, c) {
            var d = b(c).get(0);
            d.pause()
        })
    }, a.util.parsePixels = function (a) {
        var d, e = b(c).height();
        return /^[1-9]{1}[0-9]*[p][x]$/.test(a) ? parseInt(a.replace("px", ""), 10) : /^[1-9]{1}[0-9]*[v][h]$/.test(a) ? (d = parseInt(a.replace("vh", ""), 10), e * (d / 100)) : -1
    }, a.components.documentReady.push(a.util.documentReady), a
}


(mr, jQuery, window, document), mr = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        a(".background-image-holder").each(function () {
            var b = a(this).children("img").attr("src");
            a(this).css("background", 'url("' + b + '")').css("background-position", "initial").css("opacity", "1")
        })
    };
    return a.backgrounds = {
        documentReady: e
    }, a.components.documentReady.push(e), a
}

(mr, jQuery, window, document), mr = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        a(".youtube-background").length && a(".youtube-background").each(function () {
            var b = a(this),
                    c = a(this).attr("data-video-url"),
                    d = a(this).attr("data-start-at");
            b.attr("data-property", '{videoURL:"' + c + '",containment:"self",autoPlay:true, mute:true, startAt:' + d + ", opacity:1}"), b.closest(".videobg").append('<div class="loading-indicator"></div>'), b.YTPlayer(), b.on("YTPStart", function () {
                b.closest(".videobg").addClass("video-active")
            })
        }), a(".videobg").find("video").length && a(".videobg").find("video").closest(".videobg").addClass("video-active"), a(".video-cover").each(function () {
            var b = a(this);
            b.find("iframe").length && (b.find("iframe").attr("data-src", b.find("iframe").attr("src")), b.find("iframe").attr("src", ""))
        }), a(".video-cover .video-play-icon").on("click", function () {
            var b = a(this),
                    c = b.closest(".video-cover");
            if (c.find("video").length) {
                var d = c.find("video").get(0);
                return c.addClass("reveal-video"), d.play(), !1
            }
            if (c.find("iframe").length) {
                var e = c.find("iframe");
                return e.attr("src", e.attr("data-src")), c.addClass("reveal-video"), !1
            }
        })
    };
    return a.video = {
        documentReady: e
    }, a.components.documentReady.push(e), a
}
(mr, jQuery, window, document),
        function (a, b, c, d, e, f, g) {
            a.GoogleAnalyticsObject = e, a[e] = a[e] || function () {
                (a[e].q = a[e].q || []).push(arguments)
            }, a[e].l = 1 * new Date, f = b.createElement(c), g = b.getElementsByTagName(c)[0], f.async = 1, f.src = d, g.parentNode.insertBefore(f, g)
        }(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-52115242-5", "auto"), ga("send", "pageview");


