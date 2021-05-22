// import 'amd-loader';
// var define = window.define;
var self = window.self;
// var WorkerGlobalScope = window.WorkerGlobalScope;
var exports = {};
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(x, e) {
    "use strict";
    function g(e) {
        return null != e && e === e.window;
    }
    var t = [], T = x.document, i = Object.getPrototypeOf, a = t.slice, m = t.concat, l = t.push, r = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, s = v.toString, c = s.call(Object), y = {}, b = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
    }, u = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function _(e, t, n) {
        var i, r, o = (n = n || T).createElement("script");
        if (o.text = e, t) for (i in u) (r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
    }
    var f = "3.4.1", C = function(e, t) {
        return new C.fn.init(e, t);
    }, d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function h(e) {
        var t = !!e && "length" in e && e.length, n = w(e);
        return !b(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
    }
    C.fn = C.prototype = {
        jquery: f,
        constructor: C,
        length: 0,
        toArray: function() {
            return a.call(this);
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return C.each(this, e);
        },
        map: function(n) {
            return this.pushStack(C.map(this, function(e, t) {
                return n.call(e, t, e);
            }));
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, C.extend = C.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || b(s) || (s = {}), 
        a === l && (s = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) i = e[t], 
        "__proto__" !== t && s !== i && (c && i && (C.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], 
        o = r && !Array.isArray(n) ? [] : r || C.isPlainObject(n) ? n : {}, r = !1, s[t] = C.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s;
    }, C.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = i(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && s.call(n) === c);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        globalEval: function(e, t) {
            _(e, {
                nonce: t && t.nonce
            });
        },
        each: function(e, t) {
            var n, i = 0;
            if (h(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (h(Object(e)) ? C.merge(n, "string" == typeof e ? [ e ] : e) : l.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : r.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e;
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) != s && i.push(e[r]);
            return i;
        },
        map: function(e, t, n) {
            var i, r, o = 0, s = [];
            if (h(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r); else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return m.apply([], s);
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), 
    C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
    });
    var p = function(n) {
        function f(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }
        function r() {
            E();
        }
        var e, h, _, o, s, p, d, g, w, l, c, E, x, a, T, m, u, v, y, C = "sizzle" + 1 * new Date(), b = n.document, S = 0, i = 0, A = le(), D = le(), k = le(), N = le(), I = function(e, t) {
            return e === t && (c = !0), 0;
        }, O = {}.hasOwnProperty, t = [], L = t.pop, j = t.push, P = t.push, H = t.slice, R = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
        }, F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", W = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+", q = "\\[" + W + "*(" + M + ")(?:" + W + "*([*^$|!~]?=)" + W + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + W + "*\\]", Y = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)", X = new RegExp(W + "+", "g"), B = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"), U = new RegExp("^" + W + "*," + W + "*"), $ = new RegExp("^" + W + "*([>+~]|" + W + ")" + W + "*"), K = new RegExp(W + "|>"), z = new RegExp(Y), Q = new RegExp("^" + M + "$"), V = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + q),
            PSEUDO: new RegExp("^" + Y),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + F + ")$", "i"),
            needsContext: new RegExp("^" + W + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)", "i")
        }, G = /HTML$/i, Z = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, ee = /^[^{]+\{\s*\[native \w/, te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ne = /[+~]/, ie = new RegExp("\\\\([\\da-f]{1,6}" + W + "?|(" + W + ")|.)", "ig"), re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
            return t ? "\x00" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, se = _e(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            P.apply(t = H.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType;
        } catch (e) {
            P = {
                apply: t.length ? function(e, t) {
                    j.apply(e, H.call(t));
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        function ae(t, e, n, i) {
            var r, o, s, a, l, c, u, f = e && e.ownerDocument, d = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!i && ((e ? e.ownerDocument || e : b) !== x && E(e), e = e || x, T)) {
                if (11 !== d && (l = te.exec(t))) if (r = l[1]) {
                    if (9 === d) {
                        if (!(s = e.getElementById(r))) return n;
                        if (s.id === r) return n.push(s), n;
                    } else if (f && (s = f.getElementById(r)) && y(e, s) && s.id === r) return n.push(s), 
                    n;
                } else {
                    if (l[2]) return P.apply(n, e.getElementsByTagName(t)), n;
                    if ((r = l[3]) && h.getElementsByClassName && e.getElementsByClassName) return P.apply(n, e.getElementsByClassName(r)), 
                    n;
                }
                if (h.qsa && !N[t + " "] && (!m || !m.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                    if (u = t, f = e, 1 === d && K.test(t)) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(re, oe) : e.setAttribute("id", a = C), 
                        o = (c = p(t)).length; o--; ) c[o] = "#" + a + " " + be(c[o]);
                        u = c.join(","), f = ne.test(t) && ve(e.parentNode) || e;
                    }
                    try {
                        return P.apply(n, f.querySelectorAll(u)), n;
                    } catch (e) {
                        N(t, !0);
                    } finally {
                        a === C && e.removeAttribute("id");
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, i);
        }
        function le() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > _.cacheLength && delete e[i.shift()], e[t + " "] = n;
            };
        }
        function ce(e) {
            return e[C] = !0, e;
        }
        function ue(e) {
            var t = x.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) _.attrHandle[n[i]] = t;
        }
        function de(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function he(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function pe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t;
            };
        }
        function me(s) {
            return ce(function(o) {
                return o = +o, ce(function(e, t) {
                    for (var n, i = s([], e.length, o), r = i.length; r--; ) e[n = i[r]] && (e[n] = !(t[n] = e[n]));
                });
            });
        }
        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (e in h = ae.support = {}, s = ae.isXML = function(e) {
            var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
            return !G.test(t || n && n.nodeName || "HTML");
        }, E = ae.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : b;
            return i !== x && 9 === i.nodeType && i.documentElement && (a = (x = i).documentElement, 
            T = !s(x), b !== x && (n = x.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", r, !1) : n.attachEvent && n.attachEvent("onunload", r)), 
            h.attributes = ue(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), h.getElementsByTagName = ue(function(e) {
                return e.appendChild(x.createComment("")), !e.getElementsByTagName("*").length;
            }), h.getElementsByClassName = ee.test(x.getElementsByClassName), h.getById = ue(function(e) {
                return a.appendChild(e).id = C, !x.getElementsByName || !x.getElementsByName(C).length;
            }), h.getById ? (_.filter.ID = function(e) {
                var t = e.replace(ie, f);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, _.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && T) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }) : (_.filter.ID = function(e) {
                var n = e.replace(ie, f);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                };
            }, _.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && T) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++]; ) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                    }
                    return [];
                }
            }), _.find.TAG = h.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" !== e) return o;
                for (;n = o[r++]; ) 1 === n.nodeType && i.push(n);
                return i;
            }, _.find.CLASS = h.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && T) return t.getElementsByClassName(e);
            }, u = [], m = [], (h.qsa = ee.test(x.querySelectorAll)) && (ue(function(e) {
                a.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + W + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || m.push("\\[" + W + "*(?:value|" + F + ")"), 
                e.querySelectorAll("[id~=" + C + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), 
                e.querySelectorAll("a#" + C + "+*").length || m.push(".#.+[+~]");
            }), ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = x.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + W + "*[*^$|!~]?="), 
                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), 
                a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), 
                e.querySelectorAll("*,:x"), m.push(",.*:");
            })), (h.matchesSelector = ee.test(v = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function(e) {
                h.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), u.push("!=", Y);
            }), m = m.length && new RegExp(m.join("|")), u = u.length && new RegExp(u.join("|")), 
            t = ee.test(a.compareDocumentPosition), y = t || ee.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, I = t ? function(e, t) {
                if (e === t) return c = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === x || e.ownerDocument === b && y(b, e) ? -1 : t === x || t.ownerDocument === b && y(b, t) ? 1 : l ? R(l, e) - R(l, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return c = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, s = [ e ], a = [ t ];
                if (!r || !o) return e === x ? -1 : t === x ? 1 : r ? -1 : o ? 1 : l ? R(l, e) - R(l, t) : 0;
                if (r === o) return de(e, t);
                for (n = e; n = n.parentNode; ) s.unshift(n);
                for (n = t; n = n.parentNode; ) a.unshift(n);
                for (;s[i] === a[i]; ) i++;
                return i ? de(s[i], a[i]) : s[i] === b ? -1 : a[i] === b ? 1 : 0;
            }), x;
        }, ae.matches = function(e, t) {
            return ae(e, null, null, t);
        }, ae.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== x && E(e), h.matchesSelector && T && !N[t + " "] && (!u || !u.test(t)) && (!m || !m.test(t))) try {
                var n = v.call(e, t);
                if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e) {
                N(t, !0);
            }
            return 0 < ae(t, x, null, [ e ]).length;
        }, ae.contains = function(e, t) {
            return (e.ownerDocument || e) !== x && E(e), y(e, t);
        }, ae.attr = function(e, t) {
            (e.ownerDocument || e) !== x && E(e);
            var n = _.attrHandle[t.toLowerCase()], i = n && O.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
            return void 0 !== i ? i : h.attributes || !T ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }, ae.escape = function(e) {
            return (e + "").replace(re, oe);
        }, ae.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, ae.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (c = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(I), c) {
                for (;t = e[r++]; ) t === e[r] && (i = n.push(r));
                for (;i--; ) e.splice(n[i], 1);
            }
            return l = null, e;
        }, o = ae.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (;t = e[i++]; ) n += o(t);
            return n;
        }, (_ = ae.selectors = {
            cacheLength: 50,
            createPseudo: ce,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ie, f), e[3] = (e[3] || e[4] || e[5] || "").replace(ie, f), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && z.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ie, f).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = A[e + " "];
                    return t || (t = new RegExp("(^|" + W + ")" + e + "(" + W + "|$)")) && A(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(n, i, r) {
                    return function(e) {
                        var t = ae.attr(e, n);
                        return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(X, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"));
                    };
                },
                CHILD: function(p, e, t, g, m) {
                    var v = "nth" !== p.slice(0, 3), y = "last" !== p.slice(-4), b = "of-type" === e;
                    return 1 === g && 0 === m ? function(e) {
                        return !!e.parentNode;
                    } : function(e, t, n) {
                        var i, r, o, s, a, l, c = v != y ? "nextSibling" : "previousSibling", u = e.parentNode, f = b && e.nodeName.toLowerCase(), d = !n && !b, h = !1;
                        if (u) {
                            if (v) {
                                for (;c; ) {
                                    for (s = e; s = s[c]; ) if (b ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                    l = c = "only" === p && !l && "nextSibling";
                                }
                                return !0;
                            }
                            if (l = [ y ? u.firstChild : u.lastChild ], y && d) {
                                for (h = (a = (i = (r = (o = (s = u)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]) && i[2], 
                                s = a && u.childNodes[a]; s = ++a && s && s[c] || (h = a = 0) || l.pop(); ) if (1 === s.nodeType && ++h && s === e) {
                                    r[p] = [ S, a, h ];
                                    break;
                                }
                            } else if (d && (h = a = (i = (r = (o = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]), 
                            !1 === h) for (;(s = ++a && s && s[c] || (h = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++h || (d && ((r = (o = s[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [ S, h ]), 
                            s !== e)); ) ;
                            return (h -= m) === g || h % g == 0 && 0 <= h / g;
                        }
                    };
                },
                PSEUDO: function(e, o) {
                    var t, s = _.pseudos[e] || _.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    return s[C] ? s(o) : 1 < s.length ? (t = [ e, e, "", o ], _.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, t) {
                        for (var n, i = s(e, o), r = i.length; r--; ) e[n = R(e, i[r])] = !(t[n] = i[r]);
                    }) : function(e) {
                        return s(e, 0, t);
                    }) : s;
                }
            },
            pseudos: {
                not: ce(function(e) {
                    var i = [], r = [], a = d(e.replace(B, "$1"));
                    return a[C] ? ce(function(e, t, n, i) {
                        for (var r, o = a(e, null, i, []), s = e.length; s--; ) (r = o[s]) && (e[s] = !(t[s] = r));
                    }) : function(e, t, n) {
                        return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop();
                    };
                }),
                has: ce(function(t) {
                    return function(e) {
                        return 0 < ae(t, e).length;
                    };
                }),
                contains: ce(function(t) {
                    return t = t.replace(ie, f), function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t);
                    };
                }),
                lang: ce(function(n) {
                    return Q.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(ie, f).toLowerCase(), 
                    function(e) {
                        var t;
                        do {
                            if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === a;
                },
                focus: function(e) {
                    return e === x.activeElement && (!x.hasFocus || x.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !_.pseudos.empty(e);
                },
                header: function(e) {
                    return J.test(e.nodeName);
                },
                input: function(e) {
                    return Z.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: me(function() {
                    return [ 0 ];
                }),
                last: me(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: me(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: me(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: me(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: me(function(e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
                    return e;
                }),
                gt: me(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                })
            }
        }).pseudos.nth = _.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) _.pseudos[e] = he(e);
        for (e in {
            submit: !0,
            reset: !0
        }) _.pseudos[e] = pe(e);
        function ye() {}
        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function _e(a, e, t) {
            var l = e.dir, c = e.next, u = c || l, f = t && "parentNode" === u, d = i++;
            return e.first ? function(e, t, n) {
                for (;e = e[l]; ) if (1 === e.nodeType || f) return a(e, t, n);
                return !1;
            } : function(e, t, n) {
                var i, r, o, s = [ S, d ];
                if (n) {
                    for (;e = e[l]; ) if ((1 === e.nodeType || f) && a(e, t, n)) return !0;
                } else for (;e = e[l]; ) if (1 === e.nodeType || f) if (r = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), 
                c && c === e.nodeName.toLowerCase()) e = e[l] || e; else {
                    if ((i = r[u]) && i[0] === S && i[1] === d) return s[2] = i[2];
                    if ((r[u] = s)[2] = a(e, t, n)) return !0;
                }
                return !1;
            };
        }
        function we(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--; ) if (!r[i](e, t, n)) return !1;
                return !0;
            } : r[0];
        }
        function Ee(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), 
            c && t.push(a)));
            return s;
        }
        function xe(h, p, g, m, v, e) {
            return m && !m[C] && (m = xe(m)), v && !v[C] && (v = xe(v, e)), ce(function(e, t, n, i) {
                var r, o, s, a = [], l = [], c = t.length, u = e || function(e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                    return n;
                }(p || "*", n.nodeType ? [ n ] : n, []), f = !h || !e && p ? u : Ee(u, a, h, n, i), d = g ? v || (e ? h : c || m) ? [] : t : f;
                if (g && g(f, d, n, i), m) for (r = Ee(d, l), m(r, [], n, i), o = r.length; o--; ) (s = r[o]) && (d[l[o]] = !(f[l[o]] = s));
                if (e) {
                    if (v || h) {
                        if (v) {
                            for (r = [], o = d.length; o--; ) (s = d[o]) && r.push(f[o] = s);
                            v(null, d = [], r, i);
                        }
                        for (o = d.length; o--; ) (s = d[o]) && -1 < (r = v ? R(e, s) : a[o]) && (e[r] = !(t[r] = s));
                    }
                } else d = Ee(d === t ? d.splice(c, d.length) : d), v ? v(null, t, d, i) : P.apply(t, d);
            });
        }
        function Te(e) {
            for (var r, t, n, i = e.length, o = _.relative[e[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = _e(function(e) {
                return e === r;
            }, s, !0), c = _e(function(e) {
                return -1 < R(r, e);
            }, s, !0), u = [ function(e, t, n) {
                var i = !o && (n || t !== w) || ((r = t).nodeType ? l(e, t, n) : c(e, t, n));
                return r = null, i;
            } ]; a < i; a++) if (t = _.relative[e[a].type]) u = [ _e(we(u), t) ]; else {
                if ((t = _.filter[e[a].type].apply(null, e[a].matches))[C]) {
                    for (n = ++a; n < i && !_.relative[e[n].type]; n++) ;
                    return xe(1 < a && we(u), 1 < a && be(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*" : ""
                    })).replace(B, "$1"), t, a < n && Te(e.slice(a, n)), n < i && Te(e = e.slice(n)), n < i && be(e));
                }
                u.push(t);
            }
            return we(u);
        }
        return ye.prototype = _.filters = _.pseudos, _.setFilters = new ye(), p = ae.tokenize = function(e, t) {
            var n, i, r, o, s, a, l, c = D[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, a = [], l = _.preFilter; s; ) {
                for (o in n && !(i = U.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), 
                n = !1, (i = $.exec(s)) && (n = i.shift(), r.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), s = s.slice(n.length)), _.filter) !(i = V[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), 
                r.push({
                    value: n,
                    type: o,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break;
            }
            return t ? s.length : s ? ae.error(e) : D(e, a).slice(0);
        }, d = ae.compile = function(e, t) {
            var n, i = [], r = [], o = k[e + " "];
            if (!o) {
                for (n = (t = t || p(e)).length; n--; ) (o = Te(t[n]))[C] ? i.push(o) : r.push(o);
                (o = k(e, function(m, v) {
                    function e(e, t, n, i, r) {
                        var o, s, a, l = 0, c = "0", u = e && [], f = [], d = w, h = e || b && _.find.TAG("*", r), p = S += null == d ? 1 : Math.random() || .1, g = h.length;
                        for (r && (w = t === x || t || r); c !== g && null != (o = h[c]); c++) {
                            if (b && o) {
                                for (s = 0, t || o.ownerDocument === x || (E(o), n = !T); a = m[s++]; ) if (a(o, t || x, n)) {
                                    i.push(o);
                                    break;
                                }
                                r && (S = p);
                            }
                            y && ((o = !a && o) && l--, e && u.push(o));
                        }
                        if (l += c, y && c !== l) {
                            for (s = 0; a = v[s++]; ) a(u, f, t, n);
                            if (e) {
                                if (0 < l) for (;c--; ) u[c] || f[c] || (f[c] = L.call(i));
                                f = Ee(f);
                            }
                            P.apply(i, f), r && !e && 0 < f.length && 1 < l + v.length && ae.uniqueSort(i);
                        }
                        return r && (S = p, w = d), u;
                    }
                    var y = 0 < v.length, b = 0 < m.length;
                    return y ? ce(e) : e;
                }(r, i))).selector = e;
            }
            return o;
        }, g = ae.select = function(e, t, n, i) {
            var r, o, s, a, l, c = "function" == typeof e && e, u = !i && p(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && T && _.relative[o[1].type]) {
                    if (!(t = (_.find.ID(s.matches[0].replace(ie, f), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                for (r = V.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !_.relative[a = s.type]); ) if ((l = _.find[a]) && (i = l(s.matches[0].replace(ie, f), ne.test(o[0].type) && ve(t.parentNode) || t))) {
                    if (o.splice(r, 1), !(e = i.length && be(o))) return P.apply(n, i), n;
                    break;
                }
            }
            return (c || d(e, u))(i, t, !T, n, !t || ne.test(e) && ve(t.parentNode) || t), n;
        }, h.sortStable = C.split("").sort(I).join("") === C, h.detectDuplicates = !!c, 
        E(), h.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(x.createElement("fieldset"));
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), h.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ue(function(e) {
            return null == e.getAttribute("disabled");
        }) || fe(F, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }), ae;
    }(x);
    C.find = p, C.expr = p.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = p.uniqueSort, 
    C.text = p.getText, C.isXMLDoc = p.isXML, C.contains = p.contains, C.escapeSelector = p.escape;
    function E(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
            if (r && C(e).is(n)) break;
            i.push(e);
        }
        return i;
    }
    function S(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }
    var A = C.expr.match.needsContext;
    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function N(e, n, i) {
        return b(n) ? C.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i;
        }) : n.nodeType ? C.grep(e, function(e) {
            return e === n !== i;
        }) : "string" != typeof n ? C.grep(e, function(e) {
            return -1 < r.call(n, e) !== i;
        }) : C.filter(n, e, i);
    }
    C.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [ i ] : [] : C.find.matches(e, C.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, C.fn.extend({
        find: function(e) {
            var t, n, i = this.length, r = this;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                for (t = 0; t < i; t++) if (C.contains(r[t], this)) return !0;
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
            return 1 < i ? C.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(N(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(N(this, e || [], !0));
        },
        is: function(e) {
            return !!N(this, "string" == typeof e && A.test(e) ? C(e) : e || [], !1).length;
        }
    });
    var I, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || I, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, 
        this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [ null, e, null ] : O.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), 
            k.test(i[1]) && C.isPlainObject(t)) for (i in t) b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
        }
        return (r = T.getElementById(i[2])) && (this[0] = r, this.length = 1), this;
    }).prototype = C.fn, I = C(T);
    var L = /^(?:parents|prev(?:Until|All))/, j = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function P(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    C.fn.extend({
        has: function(e) {
            var t = C(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, i = 0, r = this.length, o = [], s = "string" != typeof e && C(e);
            if (!A.test(e)) for (;i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(1 < o.length ? C.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(C(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), C.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return E(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return E(e, "parentNode", n);
        },
        next: function(e) {
            return P(e, "nextSibling");
        },
        prev: function(e) {
            return P(e, "previousSibling");
        },
        nextAll: function(e) {
            return E(e, "nextSibling");
        },
        prevAll: function(e) {
            return E(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return E(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return E(e, "previousSibling", n);
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return S(e.firstChild);
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (D(e, "template") && (e = e.content || e), 
            C.merge([], e.childNodes));
        }
    }, function(i, r) {
        C.fn[i] = function(e, t) {
            var n = C.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 
            1 < this.length && (j[i] || C.uniqueSort(n), L.test(i) && n.reverse()), this.pushStack(n);
        };
    });
    var H = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e;
    }
    function F(e) {
        throw e;
    }
    function W(e, t, n, i) {
        var r;
        try {
            e && b(r = e.promise) ? r.call(e).done(t).fail(n) : e && b(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [ e ].slice(i));
        } catch (e) {
            n.apply(void 0, [ e ]);
        }
    }
    C.Callbacks = function(i) {
        i = "string" == typeof i ? function(e) {
            var n = {};
            return C.each(e.match(H) || [], function(e, t) {
                n[t] = !0;
            }), n;
        }(i) : C.extend({}, i);
        function n() {
            for (o = o || i.once, t = r = !0; a.length; l = -1) for (e = a.shift(); ++l < s.length; ) !1 === s[l].apply(e[0], e[1]) && i.stopOnFalse && (l = s.length, 
            e = !1);
            i.memory || (e = !1), r = !1, o && (s = e ? [] : "");
        }
        var r, e, t, o, s = [], a = [], l = -1, c = {
            add: function() {
                return s && (e && !r && (l = s.length - 1, a.push(e)), function n(e) {
                    C.each(e, function(e, t) {
                        b(t) ? i.unique && c.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
                    });
                }(arguments), e && !r && n()), this;
            },
            remove: function() {
                return C.each(arguments, function(e, t) {
                    for (var n; -1 < (n = C.inArray(t, s, n)); ) s.splice(n, 1), n <= l && l--;
                }), this;
            },
            has: function(e) {
                return e ? -1 < C.inArray(e, s) : 0 < s.length;
            },
            empty: function() {
                return s = s && [], this;
            },
            disable: function() {
                return o = a = [], s = e = "", this;
            },
            disabled: function() {
                return !s;
            },
            lock: function() {
                return o = a = [], e || r || (s = e = ""), this;
            },
            locked: function() {
                return !!o;
            },
            fireWith: function(e, t) {
                return o || (t = [ e, (t = t || []).slice ? t.slice() : t ], a.push(t), r || n()), 
                this;
            },
            fire: function() {
                return c.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!t;
            }
        };
        return c;
    }, C.extend({
        Deferred: function(e) {
            var o = [ [ "notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2 ], [ "resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", s = {
                state: function() {
                    return r;
                },
                always: function() {
                    return a.done(arguments).fail(arguments), this;
                },
                "catch": function(e) {
                    return s.then(null, e);
                },
                pipe: function() {
                    var r = arguments;
                    return C.Deferred(function(i) {
                        C.each(o, function(e, t) {
                            var n = b(r[t[4]]) && r[t[4]];
                            a[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && b(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [ e ] : arguments);
                            });
                        }), r = null;
                    }).promise();
                },
                then: function(t, n, i) {
                    var l = 0;
                    function c(r, o, s, a) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(r < l)) {
                                    if ((e = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? a ? t.call(e, c(l, o, R, a), c(l, o, F, a)) : (l++, 
                                    t.call(e, c(l, o, R, a), c(l, o, F, a), c(l, o, R, o.notifyWith))) : (s !== R && (n = void 0, 
                                    i = [ e ]), (a || o.resolveWith)(n, i));
                                }
                            }
                            var n = this, i = arguments, t = a ? e : function() {
                                try {
                                    e();
                                } catch (e) {
                                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== F && (n = void 0, 
                                    i = [ e ]), o.rejectWith(n, i));
                                }
                            };
                            r ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), 
                            x.setTimeout(t));
                        };
                    }
                    return C.Deferred(function(e) {
                        o[0][3].add(c(0, e, b(i) ? i : R, e.notifyWith)), o[1][3].add(c(0, e, b(t) ? t : R)), 
                        o[2][3].add(c(0, e, b(n) ? n : F));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? C.extend(e, s) : s;
                }
            }, a = {};
            return C.each(o, function(e, t) {
                var n = t[2], i = t[5];
                s[t[1]] = n.add, i && n.add(function() {
                    r = i;
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), 
                a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this;
                }, a[t[0] + "With"] = n.fireWith;
            }), s.promise(a), e && e.call(a, a), a;
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    r[t] = this, o[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(r, o);
                };
            }
            var n = arguments.length, i = n, r = Array(i), o = a.call(arguments), s = C.Deferred();
            if (n <= 1 && (W(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || b(o[i] && o[i].then))) return s.then();
            for (;i--; ) W(o[i], t(i), s.reject);
            return s.promise();
        }
    });
    var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function(e, t) {
        x.console && x.console.warn && e && M.test(e.name) && x.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, C.readyException = function(e) {
        x.setTimeout(function() {
            throw e;
        });
    };
    var q = C.Deferred();
    function Y() {
        T.removeEventListener("DOMContentLoaded", Y), x.removeEventListener("load", Y), 
        C.ready();
    }
    C.fn.ready = function(e) {
        return q.then(e).catch(function(e) {
            C.readyException(e);
        }), this;
    }, C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || q.resolveWith(T, [ C ]);
        }
    }), C.ready.then = q.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? x.setTimeout(C.ready) : (T.addEventListener("DOMContentLoaded", Y), 
    x.addEventListener("load", Y));
    var X = function(e, t, n, i, r, o, s) {
        var a = 0, l = e.length, c = null == n;
        if ("object" === w(n)) for (a in r = !0, n) X(e, t, a, n[a], !0, o, s); else if (void 0 !== i && (r = !0, 
        b(i) || (s = !0), c && (t = s ? (t.call(e, i), null) : (c = t, function(e, t, n) {
            return c.call(C(e), n);
        })), t)) for (;a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
    }, B = /^-ms-/, U = /-([a-z])/g;
    function $(e, t) {
        return t.toUpperCase();
    }
    function K(e) {
        return e.replace(B, "ms-").replace(U, $);
    }
    function z(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }
    function Q() {
        this.expando = C.expando + Q.uid++;
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[K(t)] = n; else for (i in t) r[K(i)] = t[i];
            return r;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [ t ] : t.match(H) || []).length;
                    for (;n--; ) delete i[t[n]];
                }
                void 0 !== t && !C.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t);
        }
    };
    var V = new Q(), G = new Q(), Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, J = /[A-Z]/g;
    function ee(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(J, "-$&").toLowerCase(), 
        "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = function(e) {
                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
                }(n);
            } catch (e) {}
            G.set(e, t, n);
        } else n = void 0;
        return n;
    }
    C.extend({
        hasData: function(e) {
            return G.hasData(e) || V.hasData(e);
        },
        data: function(e, t, n) {
            return G.access(e, t, n);
        },
        removeData: function(e, t) {
            G.remove(e, t);
        },
        _data: function(e, t, n) {
            return V.access(e, t, n);
        },
        _removeData: function(e, t) {
            V.remove(e, t);
        }
    }), C.fn.extend({
        data: function(n, e) {
            var t, i, r, o = this[0], s = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                G.set(this, n);
            }) : X(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = G.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    G.set(this, n, e);
                });
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = G.get(o), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
                for (t = s.length; t--; ) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = K(i.slice(5)), 
                ee(o, i, r[i]));
                V.set(o, "hasDataAttrs", !0);
            }
            return r;
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e);
            });
        }
    }), C.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = V.get(e, t), n && (!i || Array.isArray(n) ? i = V.access(e, t, C.makeArray(n)) : i.push(n)), 
            i || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = C.queue(e, t), i = n.length, r = n.shift(), o = C._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, r.call(e, function() {
                C.dequeue(e, t);
            }, o)), !i && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return V.get(e, n) || V.access(e, n, {
                empty: C.Callbacks("once memory").add(function() {
                    V.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), C.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                C.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            function n() {
                --r || o.resolveWith(s, [ s ]);
            }
            var i, r = 1, o = C.Deferred(), s = this, a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) (i = V.get(s[a], e + "queueHooks")) && i.empty && (r++, 
            i.empty.add(n));
            return n(), o.promise(t);
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"), ie = [ "Top", "Right", "Bottom", "Left" ], re = T.documentElement, oe = function(e) {
        return C.contains(e.ownerDocument, e);
    }, se = {
        composed: !0
    };
    re.getRootNode && (oe = function(e) {
        return C.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument;
    });
    function ae(e, t, n, i) {
        var r, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
        return r;
    }
    var le = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === C.css(e, "display");
    };
    function ce(e, t, n, i) {
        var r, o, s = 20, a = i ? function() {
            return i.cur();
        } : function() {
            return C.css(e, t, "");
        }, l = a(), c = n && n[3] || (C.cssNumber[t] ? "" : "px"), u = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && ne.exec(C.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--; ) C.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), 
            u /= o;
            u *= 2, C.style(e, t, u + c), n = n || [];
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, 
        i.start = u, i.end = r)), r;
    }
    var ue = {};
    function fe(e, t) {
        for (var n, i, r, o, s, a, l, c = [], u = 0, f = e.length; u < f; u++) (i = e[u]).style && (n = i.style.display, 
        t ? ("none" === n && (c[u] = V.get(i, "display") || null, c[u] || (i.style.display = "")), 
        "" === i.style.display && le(i) && (c[u] = (l = s = o = void 0, s = (r = i).ownerDocument, 
        a = r.nodeName, (l = ue[a]) || (o = s.body.appendChild(s.createElement(a)), l = C.css(o, "display"), 
        o.parentNode.removeChild(o), "none" === l && (l = "block"), ue[a] = l)))) : "none" !== n && (c[u] = "none", 
        V.set(i, "display", n)));
        for (u = 0; u < f; u++) null != c[u] && (e[u].style.display = c[u]);
        return e;
    }
    C.fn.extend({
        show: function() {
            return fe(this, !0);
        },
        hide: function() {
            return fe(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                le(this) ? C(this).show() : C(this).hide();
            });
        }
    });
    var de = /^(?:checkbox|radio)$/i, he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, pe = /^$|^module$|\/(?:java|ecma)script/i, ge = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
        void 0 === t || t && D(e, t) ? C.merge([ e ], n) : n;
    }
    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"));
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, 
    ge.th = ge.td;
    var ye, be, _e = /<|&#?\w+;/;
    function we(e, t, n, i, r) {
        for (var o, s, a, l, c, u, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++) if ((o = e[h]) || 0 === o) if ("object" === w(o)) C.merge(d, o.nodeType ? [ o ] : o); else if (_e.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (he.exec(o) || [ "", "" ])[1].toLowerCase(), 
            l = ge[a] || ge._default, s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], u = l[0]; u--; ) s = s.lastChild;
            C.merge(d, s.childNodes), (s = f.firstChild).textContent = "";
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", h = 0; o = d[h++]; ) if (i && -1 < C.inArray(o, i)) r && r.push(o); else if (c = oe(o), 
        s = me(f.appendChild(o), "script"), c && ve(s), n) for (u = 0; o = s[u++]; ) pe.test(o.type || "") && n.push(o);
        return f;
    }
    ye = T.createDocumentFragment().appendChild(T.createElement("div")), (be = T.createElement("input")).setAttribute("type", "radio"), 
    be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), ye.appendChild(be), 
    y.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", 
    y.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Ee = /^key/, xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0;
    }
    function Se() {
        return !1;
    }
    function Ae(e, t) {
        return e === function() {
            try {
                return T.activeElement;
            } catch (e) {}
        }() == ("focus" === t);
    }
    function De(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) De(e, a, n, i, t[a], o);
            return e;
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, 
        i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Se; else if (!r) return e;
        return 1 === o && (s = r, (r = function(e) {
            return C().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = C.guid++)), e.each(function() {
            C.event.add(this, t, r, i, n);
        });
    }
    function ke(e, r, o) {
        o ? (V.set(e, r, !1), C.event.add(e, r, {
            namespace: !1,
            handler: function(e) {
                var t, n, i = V.get(this, r);
                if (1 & e.isTrigger && this[r]) {
                    if (i.length) (C.event.special[r] || {}).delegateType && e.stopPropagation(); else if (i = a.call(arguments), 
                    V.set(this, r, i), t = o(this, r), this[r](), i !== (n = V.get(this, r)) || t ? V.set(this, r, !1) : n = {}, 
                    i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                } else i.length && (V.set(this, r, {
                    value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
                }), e.stopImmediatePropagation());
            }
        })) : void 0 === V.get(e, r) && C.event.add(e, r, Ce);
    }
    C.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, l, c, u, f, d, h, p, g, m = V.get(t);
            if (m) for (n.handler && (n = (o = n).handler, r = o.selector), r && C.find.matchesSelector(re, r), 
            n.guid || (n.guid = C.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0;
            }), c = (e = (e || "").match(H) || [ "" ]).length; c--; ) h = g = (a = Te.exec(e[c]) || [])[1], 
            p = (a[2] || "").split(".").sort(), h && (f = C.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, 
            f = C.event.special[h] || {}, u = C.extend({
                type: h,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && C.expr.match.needsContext.test(r),
                namespace: p.join(".")
            }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(h, s)), 
            f.add && (f.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), 
            C.event.global[h] = !0);
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, f, d, h, p, g, m = V.hasData(e) && V.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(H) || [ "" ]).length; c--; ) if (h = g = (a = Te.exec(t[c]) || [])[1], 
                p = (a[2] || "").split(".").sort(), h) {
                    for (f = C.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], 
                    a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--; ) u = d[o], 
                    !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), 
                    u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                    s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || C.removeEvent(e, h, m.handle), 
                    delete l[h]);
                } else for (h in l) C.event.remove(e, h + t[c], n, i, !0);
                C.isEmptyObject(l) && V.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = C.event.fix(e), l = new Array(arguments.length), c = (V.get(this, "events") || {})[a.type] || [], u = C.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = C.event.handlers.call(this, a, c), t = 0; (r = s[t++]) && !a.isPropagationStopped(); ) for (a.currentTarget = r.elem, 
                n = 0; (o = r.handlers[n++]) && !a.isImmediatePropagationStopped(); ) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, 
                a.data = o.data, void 0 !== (i = ((C.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), 
                a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button)) for (;c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < C(r, this).index(c) : C.find(r, this, null, [ c ]).length), 
                s[r] && o.push(i);
                o.length && a.push({
                    elem: c,
                    handlers: o
                });
            }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a;
        },
        addProp: function(t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t];
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    });
                }
            });
        },
        fix: function(e) {
            return e[C.expando] ? e : new C.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && D(t, "input") && ke(t, "click", Ce), !1;
                },
                trigger: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && D(t, "input") && ke(t, "click"), !0;
                },
                _default: function(e) {
                    var t = e.target;
                    return de.test(t.type) && t.click && D(t, "input") && V.get(t, "click") || D(t, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, C.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, C.Event = function(e, t) {
        if (!(this instanceof C.Event)) return new C.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Se, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0;
    }, C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, C.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, C.event.addProp), C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        C.event.special[e] = {
            setup: function() {
                return ke(this, e, Ae), !1;
            },
            trigger: function() {
                return ke(this, e), !0;
            },
            delegateType: t
        };
    }), C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        C.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), 
                e.type = r), t;
            }
        };
    }), C.fn.extend({
        on: function(e, t, n, i) {
            return De(this, e, t, n, i);
        },
        one: function(e, t, n, i) {
            return De(this, e, t, n, i, 1);
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), 
            !1 === n && (n = Se), this.each(function() {
                C.event.remove(this, e, n, t);
            });
            for (r in e) this.off(r, t, e[r]);
            return this;
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ie = /<script|<style|<link/i, Oe = /checked\s*(?:[^=]|=\s*.checked.)/i, Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function je(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e;
    }
    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
        e;
    }
    function Re(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (V.hasData(e) && (o = V.access(e), s = V.set(t, o), c = o.events)) for (r in delete s.handle, 
            s.events = {}, c) for (n = 0, i = c[r].length; n < i; n++) C.event.add(t, r, c[r][n]);
            G.hasData(e) && (a = G.access(e), l = C.extend({}, a), G.set(t, l));
        }
    }
    function Fe(n, i, r, o) {
        i = m.apply([], i);
        var e, t, s, a, l, c, u = 0, f = n.length, d = f - 1, h = i[0], p = b(h);
        if (p || 1 < f && "string" == typeof h && !y.checkClone && Oe.test(h)) return n.each(function(e) {
            var t = n.eq(e);
            p && (i[0] = h.call(this, e, t.html())), Fe(t, i, r, o);
        });
        if (f && (t = (e = we(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), 
        t || o)) {
            for (a = (s = C.map(me(e, "script"), Pe)).length; u < f; u++) l = e, u !== d && (l = C.clone(l, !0, !0), 
            a && C.merge(s, me(l, "script"))), r.call(n[u], l, u);
            if (a) for (c = s[s.length - 1].ownerDocument, C.map(s, He), u = 0; u < a; u++) l = s[u], 
            pe.test(l.type || "") && !V.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                nonce: l.nonce || l.getAttribute("nonce")
            }) : _(l.textContent.replace(Le, ""), l, c));
        }
        return n;
    }
    function We(e, t, n) {
        for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || C.cleanData(me(i)), 
        i.parentNode && (n && oe(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    C.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var i, r, o, s, a, l, c, u = e.cloneNode(!0), f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (s = me(u), 
            i = 0, r = (o = me(e)).length; i < r; i++) a = o[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && de.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t) if (n) for (o = o || me(e), s = s || me(u), i = 0, r = o.length; i < r; i++) Re(o[i], s[i]); else Re(e, u);
            return 0 < (s = me(u, "script")).length && ve(s, !f && me(e, "script")), u;
        },
        cleanData: function(e) {
            for (var t, n, i, r = C.event.special, o = 0; void 0 !== (n = e[o]); o++) if (z(n)) {
                if (t = n[V.expando]) {
                    if (t.events) for (i in t.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                    n[V.expando] = void 0;
                }
                n[G.expando] && (n[G.expando] = void 0);
            }
        }
    }), C.fn.extend({
        detach: function(e) {
            return We(this, e, !0);
        },
        remove: function(e) {
            return We(this, e);
        },
        text: function(e) {
            return X(this, function(e) {
                return void 0 === e ? C.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return Fe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return Fe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return Fe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return Fe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(me(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return C.clone(this, e, t);
            });
        },
        html: function(e) {
            return X(this, function(e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ie.test(e) && !ge[(he.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (;n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(me(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var n = [];
            return Fe(this, arguments, function(e) {
                var t = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(me(this)), t && t.replaceChild(e, this));
            }, n);
        }
    }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        C.fn[e] = function(e) {
            for (var t, n = [], i = C(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), 
            C(i[o])[s](t), l.apply(n, t.get());
            return this.pushStack(n);
        };
    });
    var Me, qe, Ye, Xe, Be, Ue, $e, Ke = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), ze = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = x), t.getComputedStyle(e);
    }, Qe = new RegExp(ie.join("|"), "i");
    function Ve() {
        if ($e) {
            Ue.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
            $e.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
            re.appendChild(Ue).appendChild($e);
            var e = x.getComputedStyle($e);
            Me = "1%" !== e.top, Be = 12 === Ge(e.marginLeft), $e.style.right = "60%", Xe = 36 === Ge(e.right), 
            qe = 36 === Ge(e.width), $e.style.position = "absolute", Ye = 12 === Ge($e.offsetWidth / 3), 
            re.removeChild(Ue), $e = null;
        }
    }
    function Ge(e) {
        return Math.round(parseFloat(e));
    }
    function Ze(e, t, n) {
        var i, r, o, s, a = e.style;
        return (n = n || ze(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || oe(e) || (s = C.style(e, t)), 
        !y.pixelBoxStyles() && Ke.test(s) && Qe.test(t) && (i = a.width, r = a.minWidth, 
        o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, 
        a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s;
    }
    function Je(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    Ue = T.createElement("div"), ($e = T.createElement("div")).style && ($e.style.backgroundClip = "content-box", 
    $e.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === $e.style.backgroundClip, 
    C.extend(y, {
        boxSizingReliable: function() {
            return Ve(), qe;
        },
        pixelBoxStyles: function() {
            return Ve(), Xe;
        },
        pixelPosition: function() {
            return Ve(), Me;
        },
        reliableMarginLeft: function() {
            return Ve(), Be;
        },
        scrollboxSize: function() {
            return Ve(), Ye;
        }
    }));
    var et = [ "Webkit", "Moz", "ms" ], tt = T.createElement("div").style, nt = {};
    function it(e) {
        var t = C.cssProps[e] || nt[e];
        return t || (e in tt ? e : nt[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--; ) if ((e = et[n] + t) in tt) return e;
        }(e) || e);
    }
    var rt = /^(none|table(?!-c[ea]).+)/, ot = /^--/, st = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, at = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function lt(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function ct(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0, a = 0, l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (;s < 4; s += 2) "margin" === n && (l += C.css(e, n + ie[s], !0, r)), i ? ("content" === n && (l -= C.css(e, "padding" + ie[s], !0, r)), 
        "margin" !== n && (l -= C.css(e, "border" + ie[s] + "Width", !0, r))) : (l += C.css(e, "padding" + ie[s], !0, r), 
        "padding" !== n ? l += C.css(e, "border" + ie[s] + "Width", !0, r) : a += C.css(e, "border" + ie[s] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), 
        l;
    }
    function ut(e, t, n) {
        var i = ze(e), r = (!y.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i), o = r, s = Ze(e, t, i), a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ke.test(s)) {
            if (!n) return s;
            s = "auto";
        }
        return (!y.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === C.css(e, "boxSizing", !1, i), 
        (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + ct(e, t, n || (r ? "border" : "content"), o, i, s) + "px";
    }
    function ft(e, t, n, i, r) {
        return new ft.prototype.init(e, t, n, i, r);
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ze(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = K(t), l = ot.test(t), c = e.style;
                if (l || (t = it(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                "string" === (o = typeof n) && (r = ne.exec(n)) && r[1] && (n = ce(e, t, r), o = "number"), 
                null != n && n == n && ("number" !== o || l || (n += r && r[3] || (C.cssNumber[a] ? "" : "px")), 
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), 
                s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n));
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = K(t);
            return ot.test(t) || (t = it(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), 
            void 0 === r && (r = Ze(e, t, i)), "normal" === r && t in at && (r = at[t]), "" === n || n ? (o = parseFloat(r), 
            !0 === n || isFinite(o) ? o || 0 : r) : r;
        }
    }), C.each([ "height", "width" ], function(e, l) {
        C.cssHooks[l] = {
            get: function(e, t, n) {
                if (t) return !rt.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, l, n) : ae(e, st, function() {
                    return ut(e, l, n);
                });
            },
            set: function(e, t, n) {
                var i, r = ze(e), o = !y.scrollboxSize() && "absolute" === r.position, s = (o || n) && "border-box" === C.css(e, "boxSizing", !1, r), a = n ? ct(e, l, n, s, r) : 0;
                return s && o && (a -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(r[l]) - ct(e, l, "border", !1, r) - .5)), 
                a && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[l] = t, t = C.css(e, l)), 
                lt(0, t, a);
            }
        };
    }), C.cssHooks.marginLeft = Je(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ze(e, "marginLeft")) || e.getBoundingClientRect().left - ae(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, o) {
        C.cssHooks[r + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [ e ]; t < 4; t++) n[r + ie[t] + o] = i[t] || i[t - 2] || i[0];
                return n;
            }
        }, "margin" !== r && (C.cssHooks[r + o].set = lt);
    }), C.fn.extend({
        css: function(e, t) {
            return X(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (i = ze(e), r = t.length; s < r; s++) o[t[s]] = C.css(e, t[s], !1, i);
                    return o;
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
            }, e, t, 1 < arguments.length);
        }
    }), ((C.Tween = ft).prototype = {
        constructor: ft,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || C.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = i, this.unit = o || (C.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = ft.propHooks[this.prop];
            return e && e.get ? e.get(this) : ft.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = ft.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : ft.propHooks._default.set(this), this;
        }
    }).init.prototype = ft.prototype, (ft.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function(e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[it(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }).scrollTop = ft.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, C.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, C.fx = ft.prototype.init, C.fx.step = {};
    var dt, ht, pt, gt, mt = /^(?:toggle|show|hide)$/, vt = /queueHooks$/;
    function yt() {
        ht && (!1 === T.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(yt) : x.setTimeout(yt, C.fx.interval), 
        C.fx.tick());
    }
    function bt() {
        return x.setTimeout(function() {
            dt = void 0;
        }), dt = Date.now();
    }
    function _t(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function wt(e, t, n) {
        for (var i, r = (Et.tweeners[t] || []).concat(Et.tweeners["*"]), o = 0, s = r.length; o < s; o++) if (i = r[o].call(n, t, e)) return i;
    }
    function Et(o, e, t) {
        var n, s, i = 0, r = Et.prefilters.length, a = C.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (s) return !1;
            for (var e = dt || bt(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
            return a.notifyWith(o, [ c, n, t ]), n < 1 && r ? t : (r || a.notifyWith(o, [ c, 1, 0 ]), 
            a.resolveWith(o, [ c ]), !1);
        }, c = a.promise({
            elem: o,
            props: C.extend({}, e),
            opts: C.extend(!0, {
                specialEasing: {},
                easing: C.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: dt || bt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = C.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n), n;
            },
            stop: function(e) {
                var t = 0, n = e ? c.tweens.length : 0;
                if (s) return this;
                for (s = !0; t < n; t++) c.tweens[t].run(1);
                return e ? (a.notifyWith(o, [ c, 1, 0 ]), a.resolveWith(o, [ c, e ])) : a.rejectWith(o, [ c, e ]), 
                this;
            }
        }), u = c.props;
        for ((!function(e, t) {
            var n, i, r, o, s;
            for (n in e) if (r = t[i = K(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), 
            n !== i && (e[i] = o, delete e[n]), (s = C.cssHooks[i]) && "expand" in s) for (n in o = s.expand(o), 
            delete e[i], o) n in e || (e[n] = o[n], t[n] = r); else t[i] = r;
        }(u, c.opts.specialEasing)); i < r; i++) if (n = Et.prefilters[i].call(c, o, u, c.opts)) return b(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), 
        n;
        return C.map(u, wt, c), b(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), 
        C.fx.timer(C.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })), c;
    }
    C.Animation = C.extend(Et, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return ce(n.elem, e, ne.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            for (var n, i = 0, r = (e = b(e) ? (t = e, [ "*" ]) : e.match(H)).length; i < r; i++) n = e[i], 
            Et.tweeners[n] = Et.tweeners[n] || [], Et.tweeners[n].unshift(t);
        },
        prefilters: [ function(e, t, n) {
            var i, r, o, s, a, l, c, u, f = "width" in t || "height" in t, d = this, h = {}, p = e.style, g = e.nodeType && le(e), m = V.get(e, "fxshow");
            for (i in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, 
            a = s.empty.fire, s.empty.fire = function() {
                s.unqueued || a();
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, C.queue(e, "fx").length || s.empty.fire();
                });
            })), t) if (r = t[i], mt.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    g = !0;
                }
                h[i] = m && m[i] || C.style(e, i);
            }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h)) for (i in f && 1 === e.nodeType && (n.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
            null == (c = m && m.display) && (c = V.get(e, "display")), "none" === (u = C.css(e, "display")) && (c ? u = c : (fe([ e ], !0), 
            c = e.style.display || c, u = C.css(e, "display"), fe([ e ]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (d.done(function() {
                p.display = c;
            }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), 
            n.overflow && (p.overflow = "hidden", d.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
            })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = V.access(e, "fxshow", {
                display: c
            }), o && (m.hidden = !g), g && fe([ e ], !0), d.done(function() {
                for (i in g || fe([ e ]), V.remove(e, "fxshow"), h) C.style(e, i, h[i]);
            })), l = wt(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, 
            l.start = 0));
        } ],
        prefilter: function(e, t) {
            t ? Et.prefilters.unshift(e) : Et.prefilters.push(e);
        }
    }), C.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? C.extend({}, e) : {
            complete: n || !n && t || b(e) && e,
            duration: e,
            easing: n && t || t && !b(t) && t
        };
        return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), 
        null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            b(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue);
        }, i;
    }, C.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(le).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i);
        },
        animate: function(t, e, n, i) {
            function r() {
                var e = Et(this, C.extend({}, t), s);
                (o || V.get(this, "finish")) && e.stop(!0);
            }
            var o = C.isEmptyObject(t), s = C.speed(e, n, i);
            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r);
        },
        stop: function(r, e, o) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(o);
            }
            return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), 
            this.each(function() {
                var e = !0, t = null != r && r + "queueHooks", n = C.timers, i = V.get(this);
                if (t) i[t] && i[t].stop && s(i[t]); else for (t in i) i[t] && i[t].stop && vt.test(t) && s(i[t]);
                for (t = n.length; t--; ) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), 
                e = !1, n.splice(t, 1));
                !e && o || C.dequeue(this, r);
            });
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = V.get(this), n = t[s + "queue"], i = t[s + "queueHooks"], r = C.timers, o = n ? n.length : 0;
                for (t.finish = !0, C.queue(this, s, []), i && i.stop && i.stop.call(this, !0), 
                e = r.length; e--; ) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), 
                r.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
            });
        }
    }), C.each([ "toggle", "show", "hide" ], function(e, i) {
        var r = C.fn[i];
        C.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(_t(i, !0), e, t, n);
        };
    }), C.each({
        slideDown: _t("show"),
        slideUp: _t("hide"),
        slideToggle: _t("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        C.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n);
        };
    }), C.timers = [], C.fx.tick = function() {
        var e, t = 0, n = C.timers;
        for (dt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(), dt = void 0;
    }, C.fx.timer = function(e) {
        C.timers.push(e), C.fx.start();
    }, C.fx.interval = 13, C.fx.start = function() {
        ht || (ht = !0, yt());
    }, C.fx.stop = function() {
        ht = null;
    }, C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, C.fn.delay = function(i, e) {
        return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = x.setTimeout(e, i);
            t.stop = function() {
                x.clearTimeout(n);
            };
        });
    }, pt = T.createElement("input"), gt = T.createElement("select").appendChild(T.createElement("option")), 
    pt.type = "checkbox", y.checkOn = "" !== pt.value, y.optSelected = gt.selected, 
    (pt = T.createElement("input")).value = "t", pt.type = "radio", y.radioValue = "t" === pt.value;
    var xt, Tt = C.expr.attrHandle;
    C.fn.extend({
        attr: function(e, t) {
            return X(this, C.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function(e) {
            return this.each(function() {
                C.removeAttr(this, e);
            });
        }
    }), C.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (r = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? xt : void 0)), 
            void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), 
            n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, r = t && t.match(H);
            if (r && 1 === e.nodeType) for (;n = r[i++]; ) e.removeAttribute(n);
        }
    }), xt = {
        set: function(e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = Tt[t] || C.find.attr;
        Tt[t] = function(e, t, n) {
            var i, r, o = t.toLowerCase();
            return n || (r = Tt[o], Tt[o] = i, i = null != s(e, t, n) ? o : null, Tt[o] = r), 
            i;
        };
    });
    var Ct = /^(?:input|select|textarea|button)$/i, St = /^(?:a|area)$/i;
    function At(e) {
        return (e.match(H) || []).join(" ");
    }
    function Dt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function kt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || [];
    }
    C.fn.extend({
        prop: function(e, t) {
            return X(this, C.prop, e, t, 1 < arguments.length);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[C.propFix[e] || e];
            });
        }
    }), C.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, 
            r = C.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ct.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (C.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), C.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        C.propFix[this.toLowerCase()] = this;
    }), C.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (b(t)) return this.each(function(e) {
                C(this).addClass(t.call(this, e, Dt(this)));
            });
            if ((e = kt(t)).length) for (;n = this[l++]; ) if (r = Dt(n), i = 1 === n.nodeType && " " + At(r) + " ") {
                for (s = 0; o = e[s++]; ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                r !== (a = At(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a, l = 0;
            if (b(t)) return this.each(function(e) {
                C(this).removeClass(t.call(this, e, Dt(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = kt(t)).length) for (;n = this[l++]; ) if (r = Dt(n), i = 1 === n.nodeType && " " + At(r) + " ") {
                for (s = 0; o = e[s++]; ) for (;-1 < i.indexOf(" " + o + " "); ) i = i.replace(" " + o + " ", " ");
                r !== (a = At(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        toggleClass: function(r, t) {
            var o = typeof r, s = "string" == o || Array.isArray(r);
            return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : b(r) ? this.each(function(e) {
                C(this).toggleClass(r.call(this, e, Dt(this), t), t);
            }) : this.each(function() {
                var e, t, n, i;
                if (s) for (t = 0, n = C(this), i = kt(r); e = i[t++]; ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else void 0 !== r && "boolean" != o || ((e = Dt(this)) && V.set(this, "__className__", e), 
                this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : V.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; ) if (1 === n.nodeType && -1 < (" " + At(Dt(n)) + " ").indexOf(t)) return !0;
            return !1;
        }
    });
    var Nt = /\r/g;
    C.fn.extend({
        val: function(n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = b(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(e) {
                    return null == e ? "" : e + "";
                })), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t));
            })) : t ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(Nt, "") : null == e ? "" : e : void 0;
        }
    }), C.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : At(C.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], l = s ? o + 1 : r.length;
                    for (i = o < 0 ? l : s ? o : 0; i < l; i++) if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                        if (t = C(n).val(), s) return t;
                        a.push(t);
                    }
                    return a;
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = C.makeArray(t), s = r.length; s--; ) ((i = r[s]).selected = -1 < C.inArray(C.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), C.each([ "radio", "checkbox" ], function() {
        C.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t);
            }
        }, y.checkOn || (C.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    }), y.focusin = "onfocusin" in x;
    function It(e) {
        e.stopPropagation();
    }
    var Ot = /^(?:focusinfocus|focusoutblur)$/;
    C.extend(C.event, {
        trigger: function(e, t, n, i) {
            var r, o, s, a, l, c, u, f, d = [ n || T ], h = v.call(e, "type") ? e.type : e, p = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = s = n = n || T, 3 !== n.nodeType && 8 !== n.nodeType && !Ot.test(h + C.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), 
            p.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[C.expando] ? e : new C.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, 
            e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : C.makeArray(t, [ e ]), 
            u = C.event.special[h] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !g(n)) {
                    for (a = u.delegateType || h, Ot.test(a + h) || (o = o.parentNode); o; o = o.parentNode) d.push(o), 
                    s = o;
                    s === (n.ownerDocument || T) && d.push(s.defaultView || s.parentWindow || x);
                }
                for (r = 0; (o = d[r++]) && !e.isPropagationStopped(); ) f = o, e.type = 1 < r ? a : u.bindType || h, 
                (c = (V.get(o, "events") || {})[e.type] && V.get(o, "handle")) && c.apply(o, t), 
                (c = l && o[l]) && c.apply && z(o) && (e.result = c.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = h, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !z(n) || l && b(n[h]) && !g(n) && ((s = n[l]) && (n[l] = null), 
                C.event.triggered = h, e.isPropagationStopped() && f.addEventListener(h, It), n[h](), 
                e.isPropagationStopped() && f.removeEventListener(h, It), C.event.triggered = void 0, 
                s && (n[l] = s)), e.result;
            }
        },
        simulate: function(e, t, n) {
            var i = C.extend(new C.Event(), n, {
                type: e,
                isSimulated: !0
            });
            C.event.trigger(i, null, t);
        }
    }), C.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                C.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0);
        }
    }), y.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function r(e) {
            C.event.simulate(i, e.target, C.event.fix(e));
        }
        C.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this, t = V.access(e, i);
                t || e.addEventListener(n, r, !0), V.access(e, i, (t || 0) + 1);
            },
            teardown: function() {
                var e = this.ownerDocument || this, t = V.access(e, i) - 1;
                t ? V.access(e, i, t) : (e.removeEventListener(n, r, !0), V.remove(e, i));
            }
        };
    });
    var Lt = x.location, jt = Date.now(), Pt = /\?/;
    C.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new x.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), 
        t;
    };
    var Ht = /\[\]$/, Rt = /\r?\n/g, Ft = /^(?:submit|button|image|reset|file)$/i, Wt = /^(?:input|select|textarea|keygen)/i;
    function Mt(n, e, i, r) {
        var t;
        if (Array.isArray(e)) C.each(e, function(e, t) {
            i || Ht.test(n) ? r(n, t) : Mt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r);
        }); else if (i || "object" !== w(e)) r(n, e); else for (t in e) Mt(n + "[" + t + "]", e[t], i, r);
    }
    C.param = function(e, t) {
        function n(e, t) {
            var n = b(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        }
        var i, r = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
            n(this.name, this.value);
        }); else for (i in e) Mt(i, e[i], t, n);
        return r.join("&");
    }, C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && Wt.test(this.nodeName) && !Ft.test(e) && (this.checked || !de.test(e));
            }).map(function(e, t) {
                var n = C(this).val();
                return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Rt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(Rt, "\r\n")
                };
            }).get();
        }
    });
    var qt = /%20/g, Yt = /#.*$/, Xt = /([?&])_=[^&]*/, Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ut = /^(?:GET|HEAD)$/, $t = /^\/\//, Kt = {}, zt = {}, Qt = "*/".concat("*"), Vt = T.createElement("a");
    function Gt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0, r = e.toLowerCase().match(H) || [];
            if (b(t)) for (;n = r[i++]; ) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function Zt(t, r, o, s) {
        var a = {}, l = t === zt;
        function c(e) {
            var i;
            return a[e] = !0, C.each(t[e] || [], function(e, t) {
                var n = t(r, o, s);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), 
                c(n), !1);
            }), i;
        }
        return c(r.dataTypes[0]) || !a["*"] && c("*");
    }
    function Jt(e, t) {
        var n, i, r = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i = i || {})[n] = t[n]);
        return i && C.extend(!0, e, i), e;
    }
    Vt.href = Lt.href, C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Lt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Lt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Jt(Jt(e, C.ajaxSettings), t) : Jt(C.ajaxSettings, e);
        },
        ajaxPrefilter: Gt(Kt),
        ajaxTransport: Gt(zt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, f, d, n, h, i, p, g, r, o, m = C.ajaxSetup({}, t), v = m.context || m, y = m.context && (v.nodeType || v.jquery) ? C(v) : C.event, b = C.Deferred(), _ = C.Callbacks("once memory"), w = m.statusCode || {}, s = {}, a = {}, l = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (p) {
                        if (!n) for (n = {}; t = Bt.exec(d); ) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function() {
                    return p ? d : null;
                },
                setRequestHeader: function(e, t) {
                    return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), 
                    this;
                },
                overrideMimeType: function(e) {
                    return null == p && (m.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (p) E.always(e[E.status]); else for (t in e) w[t] = [ w[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    var t = e || l;
                    return u && u.abort(t), c(0, t), this;
                }
            };
            if (b.promise(E), m.url = ((e || m.url || Lt.href) + "").replace($t, Lt.protocol + "//"), 
            m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(H) || [ "" ], 
            null == m.crossDomain) {
                i = T.createElement("a");
                try {
                    i.href = m.url, i.href = i.href, m.crossDomain = Vt.protocol + "//" + Vt.host != i.protocol + "//" + i.host;
                } catch (e) {
                    m.crossDomain = !0;
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), 
            Zt(Kt, m, t, E), p) return E;
            for (r in (g = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), 
            m.type = m.type.toUpperCase(), m.hasContent = !Ut.test(m.type), f = m.url.replace(Yt, ""), 
            m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(qt, "+")) : (o = m.url.slice(f.length), 
            m.data && (m.processData || "string" == typeof m.data) && (f += (Pt.test(f) ? "&" : "?") + m.data, 
            delete m.data), !1 === m.cache && (f = f.replace(Xt, "$1"), o = (Pt.test(f) ? "&" : "?") + "_=" + jt++ + o), 
            m.url = f + o), m.ifModified && (C.lastModified[f] && E.setRequestHeader("If-Modified-Since", C.lastModified[f]), 
            C.etag[f] && E.setRequestHeader("If-None-Match", C.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && E.setRequestHeader("Content-Type", m.contentType), 
            E.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Qt + "; q=0.01" : "") : m.accepts["*"]), 
            m.headers) E.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, E, m) || p)) return E.abort();
            if (l = "abort", _.add(m.complete), E.done(m.success), E.fail(m.error), u = Zt(zt, m, t, E)) {
                if (E.readyState = 1, g && y.trigger("ajaxSend", [ E, m ]), p) return E;
                m.async && 0 < m.timeout && (h = x.setTimeout(function() {
                    E.abort("timeout");
                }, m.timeout));
                try {
                    p = !1, u.send(s, c);
                } catch (e) {
                    if (p) throw e;
                    c(-1, e);
                }
            } else c(-1, "No Transport");
            function c(e, t, n, i) {
                var r, o, s, a, l, c = t;
                p || (p = !0, h && x.clearTimeout(h), u = void 0, d = i || "", E.readyState = 0 < e ? 4 : 0, 
                r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
                    void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) for (r in a) if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break;
                    }
                    if (l[0] in n) o = l[0]; else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break;
                            }
                            s = s || r;
                        }
                        o = o || s;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                }(m, E, n)), a = function(e, t, n, i) {
                    var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
                    if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (o = u.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
                    !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o])) for (r in c) if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                            !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                            break;
                        }
                        if (!0 !== s) if (s && e.throws) t = s(t); else try {
                            t = s(t);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: s ? e : "No conversion from " + l + " to " + o
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: t
                    };
                }(m, a, E, r), r ? (m.ifModified && ((l = E.getResponseHeader("Last-Modified")) && (C.lastModified[f] = l), 
                (l = E.getResponseHeader("etag")) && (C.etag[f] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, 
                o = a.data, r = !(s = a.error))) : (s = c, !e && c || (c = "error", e < 0 && (e = 0))), 
                E.status = e, E.statusText = (t || c) + "", r ? b.resolveWith(v, [ o, c, E ]) : b.rejectWith(v, [ E, c, s ]), 
                E.statusCode(w), w = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [ E, m, r ? o : s ]), 
                _.fireWith(v, [ E, c ]), g && (y.trigger("ajaxComplete", [ E, m ]), --C.active || C.event.trigger("ajaxStop")));
            }
            return E;
        },
        getJSON: function(e, t, n) {
            return C.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return C.get(e, void 0, t, "script");
        }
    }), C.each([ "get", "post" ], function(e, r) {
        C[r] = function(e, t, n, i) {
            return b(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, C.isPlainObject(e) && e));
        };
    }), C._evalUrl = function(e, t) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                C.globalEval(e, t);
            }
        });
    }, C.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (b(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                C(this).wrapInner(n.call(this, e));
            }) : this.each(function() {
                var e = C(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
            });
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                C(this).wrapAll(n ? t.call(this, e) : t);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                C(this).replaceWith(this.childNodes);
            }), this;
        }
    }), C.expr.pseudos.hidden = function(e) {
        return !C.expr.pseudos.visible(e);
    }, C.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, C.ajaxSettings.xhr = function() {
        try {
            return new x.XMLHttpRequest();
        } catch (e) {}
    };
    var en = {
        0: 200,
        1223: 204
    }, tn = C.ajaxSettings.xhr();
    y.cors = !!tn && "withCredentials" in tn, y.ajax = tn = !!tn, C.ajaxTransport(function(r) {
        var o, s;
        if (y.cors || tn && !r.crossDomain) return {
            send: function(e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields) for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), 
                e) i.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, 
                        "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(en[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()));
                    };
                }, i.onload = o(), s = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                    4 === i.readyState && x.setTimeout(function() {
                        o && s();
                    });
                }, o = o("abort");
                try {
                    i.send(r.hasContent && r.data || null);
                } catch (e) {
                    if (o) throw e;
                }
            },
            abort: function() {
                o && o();
            }
        };
    }), C.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return C.globalEval(e), e;
            }
        }
    }), C.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), C.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                i = C("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function(e) {
                    i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type);
                }), T.head.appendChild(i[0]);
            },
            abort: function() {
                r && r();
            }
        };
    });
    var nn, rn = [], on = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = rn.pop() || C.expando + "_" + jt++;
            return this[e] = !0, e;
        }
    }), C.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, o, s = !1 !== e.jsonp && (on.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        s ? e[s] = e[s].replace(on, "$1" + i) : !1 !== e.jsonp && (e.url += (Pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), 
        e.converters["script json"] = function() {
            return o || C.error(i + " was not called"), o[0];
        }, e.dataTypes[0] = "json", r = x[i], x[i] = function() {
            o = arguments;
        }, n.always(function() {
            void 0 === r ? C(x).removeProp(i) : x[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, 
            rn.push(i)), o && b(r) && r(o[0]), o = r = void 0;
        }), "script";
    }), y.createHTMLDocument = ((nn = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
    2 === nn.childNodes.length), C.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((i = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, 
        t.head.appendChild(i)) : t = T), o = !n && [], (r = k.exec(e)) ? [ t.createElement(r[1]) ] : (r = we([ e ], t, o), 
        o && o.length && C(o).remove(), C.merge([], r.childNodes)));
        var i, r, o;
    }, C.fn.load = function(e, t, n) {
        var i, r, o, s = this, a = e.indexOf(" ");
        return -1 < a && (i = At(e.slice(a)), e = e.slice(0, a)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 
        0 < s.length && C.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e);
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [ e.responseText, t, e ]);
            });
        }), this;
    }, C.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        C.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), C.expr.pseudos.animated = function(t) {
        return C.grep(C.timers, function(e) {
            return t === e.elem;
        }).length;
    }, C.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, c = C.css(e, "position"), u = C(e), f = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), o = C.css(e, "top"), 
            l = C.css(e, "left"), r = ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (s = (i = u.position()).top, 
            i.left) : (s = parseFloat(o) || 0, parseFloat(l) || 0), b(t) && (t = t.call(e, n, C.extend({}, a))), 
            null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), 
            "using" in t ? t.using.call(e, f) : u.css(f);
        }
    }, C.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                C.offset.setOffset(this, t, e);
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, 
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0], r = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect(); else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position"); ) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0), 
                    r.left += C.css(e, "borderLeftWidth", !0));
                }
                return {
                    top: t.top - r.top - C.css(i, "marginTop", !0),
                    left: t.left - r.left - C.css(i, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position"); ) e = e.offsetParent;
                return e || re;
            });
        }
    }), C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var o = "pageYOffset" === r;
        C.fn[t] = function(e) {
            return X(this, function(e, t, n) {
                var i;
                if (g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n;
            }, t, e, arguments.length);
        };
    }), C.each([ "top", "left" ], function(e, n) {
        C.cssHooks[n] = Je(y.pixelPosition, function(e, t) {
            if (t) return t = Ze(e, n), Ke.test(t) ? C(e).position()[n] + "px" : t;
        });
    }), C.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        C.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(i, o) {
            C.fn[o] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e), r = i || (!0 === e || !0 === t ? "margin" : "border");
                return X(this, function(e, t, n) {
                    var i;
                    return g(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, 
                    Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? C.css(e, t, r) : C.style(e, t, n, r);
                }, a, n ? e : void 0, n);
            };
        });
    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        C.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
    }), C.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), C.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), C.proxy = function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return i = a.call(arguments, 2), 
        (r = function() {
            return e.apply(t || this, i.concat(a.call(arguments)));
        }).guid = e.guid = e.guid || C.guid++, r;
    }, C.holdReady = function(e) {
        e ? C.readyWait++ : C.ready(!0);
    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = D, C.isFunction = b, 
    C.isWindow = g, C.camelCase = K, C.type = w, C.now = Date.now, C.isNumeric = function(e) {
        var t = C.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }
    var sn = x.jQuery, an = x.$;
    return C.noConflict = function(e) {
        return x.$ === C && (x.$ = an), e && x.jQuery === C && (x.jQuery = sn), C;
    }, e || (x.jQuery = x.$ = C), C;
}), function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : e.Popper = t();
}(this, function() {
    "use strict";
    function o(e) {
        return e && "[object Function]" === {}.toString.call(e);
    }
    function _(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n;
    }
    function p(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
    }
    function g(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
          case "HTML":
          case "BODY":
            return e.ownerDocument.body;

          case "#document":
            return e.body;
        }
        var t = _(e), n = t.overflow, i = t.overflowX, r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : g(p(e));
    }
    function m(e) {
        return 11 === e ? B : 10 === e ? U : B || U;
    }
    function b(e) {
        if (!e) return document.documentElement;
        for (var t = m(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; ) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== [ "TH", "TD", "TABLE" ].indexOf(n.nodeName) && "static" === _(n, "position") ? b(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
    }
    function l(e) {
        return null === e.parentNode ? e : l(e.parentNode);
    }
    function v(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, i = n ? e : t, r = n ? t : e, o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s = o.commonAncestorContainer;
        if (e !== s && t !== s || i.contains(r)) return function(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || b(e.firstElementChild) === e);
        }(s) ? s : b(s);
        var a = l(e);
        return a.host ? v(a.host, t) : v(e, l(t).host);
    }
    function y(e, t) {
        var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft", i = e.nodeName;
        if ("BODY" !== i && "HTML" !== i) return e[n];
        var r = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || r)[n];
    }
    function f(e, t) {
        var n = "x" === t ? "Left" : "Top", i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10);
    }
    function r(e, t, n, i) {
        return R(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], m(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0);
    }
    function w(e) {
        var t = e.body, n = e.documentElement, i = m(10) && getComputedStyle(n);
        return {
            height: r("Height", t, n, i),
            width: r("Width", t, n, i)
        };
    }
    function E(e) {
        return K({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        });
    }
    function x(e) {
        var t = {};
        try {
            if (m(10)) {
                t = e.getBoundingClientRect();
                var n = y(e, "top"), i = y(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i;
            } else t = e.getBoundingClientRect();
        } catch (e) {}
        var r = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }, o = "HTML" === e.nodeName ? w(e.ownerDocument) : {}, s = o.width || e.clientWidth || r.right - r.left, a = o.height || e.clientHeight || r.bottom - r.top, l = e.offsetWidth - s, c = e.offsetHeight - a;
        if (l || c) {
            var u = _(e);
            l -= f(u, "x"), c -= f(u, "y"), r.width -= l, r.height -= c;
        }
        return E(r);
    }
    function T(e, t, n) {
        var i = 2 < arguments.length && void 0 !== n && n, r = m(10), o = "HTML" === t.nodeName, s = x(e), a = x(t), l = g(e), c = _(t), u = parseFloat(c.borderTopWidth, 10), f = parseFloat(c.borderLeftWidth, 10);
        i && o && (a.top = R(a.top, 0), a.left = R(a.left, 0));
        var d = E({
            top: s.top - a.top - u,
            left: s.left - a.left - f,
            width: s.width,
            height: s.height
        });
        if (d.marginTop = 0, d.marginLeft = 0, !r && o) {
            var h = parseFloat(c.marginTop, 10), p = parseFloat(c.marginLeft, 10);
            d.top -= u - h, d.bottom -= u - h, d.left -= f - p, d.right -= f - p, d.marginTop = h, 
            d.marginLeft = p;
        }
        return (r && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (d = function(e, t, n) {
            var i = 2 < arguments.length && void 0 !== n && n, r = y(t, "top"), o = y(t, "left"), s = i ? -1 : 1;
            return e.top += r * s, e.bottom += r * s, e.left += o * s, e.right += o * s, e;
        }(d, t)), d;
    }
    function C(e) {
        if (!e || !e.parentElement || m()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === _(t, "transform"); ) t = t.parentElement;
        return t || document.documentElement;
    }
    function h(e, t, n, i, r) {
        var o = 4 < arguments.length && void 0 !== r && r, s = {
            top: 0,
            left: 0
        }, a = o ? C(e) : v(e, t);
        if ("viewport" === i) s = function(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t, i = e.ownerDocument.documentElement, r = T(e, i), o = R(i.clientWidth, window.innerWidth || 0), s = R(i.clientHeight, window.innerHeight || 0), a = n ? 0 : y(i), l = n ? 0 : y(i, "left");
            return E({
                top: a - r.top + r.marginTop,
                left: l - r.left + r.marginLeft,
                width: o,
                height: s
            });
        }(a, o); else {
            var l;
            "scrollParent" === i ? "BODY" === (l = g(p(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === i ? e.ownerDocument.documentElement : i;
            var c = T(l, a, o);
            if ("HTML" !== l.nodeName || function e(t) {
                var n = t.nodeName;
                if ("BODY" === n || "HTML" === n) return !1;
                if ("fixed" === _(t, "position")) return !0;
                var i = p(t);
                return !!i && e(i);
            }(a)) s = c; else {
                var u = w(e.ownerDocument), f = u.height, d = u.width;
                s.top += c.top - c.marginTop, s.bottom = f + c.top, s.left += c.left - c.marginLeft, 
                s.right = d + c.left;
            }
        }
        var h = "number" == typeof (n = n || 0);
        return s.left += h ? n : n.left || 0, s.top += h ? n : n.top || 0, s.right -= h ? n : n.right || 0, 
        s.bottom -= h ? n : n.bottom || 0, s;
    }
    function a(e, t, i, n, r, o) {
        var s = 5 < arguments.length && void 0 !== o ? o : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = h(i, n, s, r), l = {
            top: {
                width: a.width,
                height: t.top - a.top
            },
            right: {
                width: a.right - t.right,
                height: a.height
            },
            bottom: {
                width: a.width,
                height: a.bottom - t.bottom
            },
            left: {
                width: t.left - a.left,
                height: a.height
            }
        }, c = Object.keys(l).map(function(e) {
            return K({
                key: e
            }, l[e], {
                area: function(e) {
                    return e.width * e.height;
                }(l[e])
            });
        }).sort(function(e, t) {
            return t.area - e.area;
        }), u = c.filter(function(e) {
            var t = e.width, n = e.height;
            return t >= i.clientWidth && n >= i.clientHeight;
        }), f = 0 < u.length ? u[0].key : c[0].key, d = e.split("-")[1];
        return f + (d ? "-" + d : "");
    }
    function c(e, t, n, i) {
        var r = 3 < arguments.length && void 0 !== i ? i : null;
        return T(n, r ? C(t) : v(t, n), r);
    }
    function S(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e), n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0), i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        };
    }
    function A(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e];
        });
    }
    function D(e, t, n) {
        n = n.split("-")[0];
        var i = S(e), r = {
            width: i.width,
            height: i.height
        }, o = -1 !== [ "right", "left" ].indexOf(n), s = o ? "top" : "left", a = o ? "left" : "top", l = o ? "height" : "width", c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[A(a)], 
        r;
    }
    function k(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function N(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n;
            });
            var i = k(e, function(e) {
                return e[t] === n;
            });
            return e.indexOf(i);
        }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && o(t) && (n.offsets.popper = E(n.offsets.popper), n.offsets.reference = E(n.offsets.reference), 
            n = t(n, e));
        }), n;
    }
    function e(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n;
        });
    }
    function I(e) {
        for (var t = [ !1, "ms", "Webkit", "Moz", "O" ], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i], o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o;
        }
        return null;
    }
    function s(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
    }
    function t(e, t, n, i) {
        n.updateBound = i, s(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = g(e);
        return function e(t, n, i, r) {
            var o = "BODY" === t.nodeName, s = o ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, i, {
                passive: !0
            }), o || e(g(s.parentNode), n, i, r), r.push(s);
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, 
        n;
    }
    function n() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function(e, t) {
            return s(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                e.removeEventListener("scroll", t.updateBound);
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, 
            t;
        }(this.reference, this.state));
    }
    function u(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function d(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = "";
            -1 !== [ "width", "height", "top", "right", "bottom", "left" ].indexOf(e) && u(i[e]) && (t = "px"), 
            n.style[e] = i[e] + t;
        });
    }
    function O(e, t, n) {
        var i = k(e, function(e) {
            return e.name === t;
        }), r = !!i && e.some(function(e) {
            return e.name === n && e.enabled && e.order < i.order;
        });
        if (!r) {
            var o = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
        }
        return r;
    }
    function i(e, t) {
        var n = 1 < arguments.length && void 0 !== t && t, i = V.indexOf(e), r = V.slice(i + 1).concat(V.slice(0, i));
        return n ? r.reverse() : r;
    }
    function L(e, r, o, t) {
        var s = [ 0, 0 ], a = -1 !== [ "right", "left" ].indexOf(t), n = e.split(/(\+|\-)/).map(function(e) {
            return e.trim();
        }), i = n.indexOf(k(n, function(e) {
            return -1 !== e.search(/,|\s/);
        }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/, c = -1 === i ? [ n ] : [ n.slice(0, i).concat([ n[i].split(l)[0] ]), [ n[i].split(l)[1] ].concat(n.slice(i + 1)) ];
        return (c = c.map(function(e, t) {
            var n = (1 === t ? !a : a) ? "height" : "width", i = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== [ "+", "-" ].indexOf(t) ? (e[e.length - 1] = t, 
                i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t);
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var r, o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), s = +o[1], a = o[2];
                    if (!s) return e;
                    if (0 !== a.indexOf("%")) return "vh" !== a && "vw" !== a ? s : ("vh" === a ? R(document.documentElement.clientHeight, window.innerHeight || 0) : R(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * s;
                    switch (a) {
                      case "%p":
                        r = n;
                        break;

                      case "%":
                      case "%r":
                      default:
                        r = i;
                    }
                    return E(r)[t] / 100 * s;
                }(e, n, r, o);
            });
        })).forEach(function(n, i) {
            n.forEach(function(e, t) {
                u(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1));
            });
        }), s;
    }
    for (var j = Math.min, P = Math.floor, H = Math.round, R = Math.max, F = "undefined" != typeof window && "undefined" != typeof document, W = [ "Edge", "Trident", "Firefox" ], M = 0, q = 0; q < W.length; q += 1) if (F && 0 <= navigator.userAgent.indexOf(W[q])) {
        M = 1;
        break;
    }
    function Y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    var X = F && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0, window.Promise.resolve().then(function() {
                t = !1, e();
            }));
        };
    } : function(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout(function() {
                t = !1, e();
            }, M));
        };
    }, B = F && !(!window.MSInputMethodContext || !document.documentMode), U = F && /MSIE 10/.test(navigator.userAgent), $ = function(e, t, n) {
        return t && ne(e.prototype, t), n && ne(e, n), e;
    }, K = Object.assign || function(e) {
        for (var t, n = 1; n < arguments.length; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
    }, z = F && /Firefox/i.test(navigator.userAgent), Q = [ "auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start" ], V = Q.slice(3), G = "flip", Z = "clockwise", J = "counterclockwise", ee = ($(te, [ {
        key: "update",
        value: function() {
            return function() {
                if (!this.state.isDestroyed) {
                    var e = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    e.offsets.reference = c(this.state, this.popper, this.reference, this.options.positionFixed), 
                    e.placement = a(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), 
                    e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, 
                    e.offsets.popper = D(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", 
                    e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, 
                    this.options.onCreate(e));
                }
            }.call(this);
        }
    }, {
        key: "destroy",
        value: function() {
            return function() {
                return this.state.isDestroyed = !0, e(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), 
                this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", 
                this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", 
                this.popper.style[I("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), 
                this;
            }.call(this);
        }
    }, {
        key: "enableEventListeners",
        value: function() {
            return function() {
                this.state.eventsEnabled || (this.state = t(this.reference, this.options, this.state, this.scheduleUpdate));
            }.call(this);
        }
    }, {
        key: "disableEventListeners",
        value: function() {
            return n.call(this);
        }
    } ]), te);
    function te(e, t) {
        var n = this, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        (function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        })(this, te), this.scheduleUpdate = function() {
            return requestAnimationFrame(n.update);
        }, this.update = X(this.update.bind(this)), this.options = K({}, te.Defaults, i), 
        this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, 
        this.options.modifiers = {}, Object.keys(K({}, te.Defaults.modifiers, i.modifiers)).forEach(function(e) {
            n.options.modifiers[e] = K({}, te.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {});
        }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
            return K({
                name: e
            }, n.options.modifiers[e]);
        }).sort(function(e, t) {
            return e.order - t.order;
        }), this.modifiers.forEach(function(e) {
            e.enabled && o(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state);
        }), this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), this.state.eventsEnabled = r;
    }
    function ne(e, t) {
        for (var n, i = 0; i < t.length; i++) (n = t[i]).enumerable = n.enumerable || !1, 
        n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
    return ee.Utils = ("undefined" == typeof window ? global : window).PopperUtils, 
    ee.placements = Q, ee.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement, n = t.split("-")[0], i = t.split("-")[1];
                    if (i) {
                        var r = e.offsets, o = r.reference, s = r.popper, a = -1 !== [ "bottom", "top" ].indexOf(n), l = a ? "left" : "top", c = a ? "width" : "height", u = {
                            start: Y({}, l, o[l]),
                            end: Y({}, l, o[l] + o[c] - s[c])
                        };
                        e.offsets.popper = K({}, s, u[i]);
                    }
                    return e;
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, i = t.offset, r = e.placement, o = e.offsets, s = o.popper, a = o.reference, l = r.split("-")[0];
                    return n = u(+i) ? [ +i, 0 ] : L(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], 
                    s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], 
                    s.top += n[1]), e.popper = s, e;
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, i) {
                    var t = i.boundariesElement || b(e.instance.popper);
                    e.instance.reference === t && (t = b(t));
                    var n = I("transform"), r = e.instance.popper.style, o = r.top, s = r.left, a = r[n];
                    r.top = "", r.left = "", r[n] = "";
                    var l = h(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                    r.top = o, r.left = s, r[n] = a, i.boundaries = l;
                    var c = i.priority, u = e.offsets.popper, f = {
                        primary: function(e) {
                            var t = u[e];
                            return u[e] < l[e] && !i.escapeWithReference && (t = R(u[e], l[e])), Y({}, e, t);
                        },
                        secondary: function(e) {
                            var t = "right" === e ? "left" : "top", n = u[t];
                            return u[e] > l[e] && !i.escapeWithReference && (n = j(u[t], l[e] - ("right" === e ? u.width : u.height))), 
                            Y({}, t, n);
                        }
                    };
                    return c.forEach(function(e) {
                        var t = -1 === [ "left", "top" ].indexOf(e) ? "secondary" : "primary";
                        u = K({}, u, f[t](e));
                    }), e.offsets.popper = u, e;
                },
                priority: [ "left", "right", "top", "bottom" ],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets, n = t.popper, i = t.reference, r = e.placement.split("-")[0], o = P, s = -1 !== [ "top", "bottom" ].indexOf(r), a = s ? "right" : "bottom", l = s ? "left" : "top", c = s ? "width" : "height";
                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), 
                    e;
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    var n;
                    if (!O(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var i = t.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i))) return e;
                    } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), 
                    e;
                    var r = e.placement.split("-")[0], o = e.offsets, s = o.popper, a = o.reference, l = -1 !== [ "left", "right" ].indexOf(r), c = l ? "height" : "width", u = l ? "Top" : "Left", f = u.toLowerCase(), d = l ? "left" : "top", h = l ? "bottom" : "right", p = S(i)[c];
                    a[h] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[h] - p)), a[f] + p > s[h] && (e.offsets.popper[f] += a[f] + p - s[h]), 
                    e.offsets.popper = E(e.offsets.popper);
                    var g = a[f] + a[c] / 2 - p / 2, m = _(e.instance.popper), v = parseFloat(m["margin" + u], 10), y = parseFloat(m["border" + u + "Width"], 10), b = g - e.offsets.popper[f] - v - y;
                    return b = R(j(s[c] - p, b), 0), e.arrowElement = i, e.offsets.arrow = (Y(n = {}, f, H(b)), 
                    Y(n, d, ""), n), e;
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(g, m) {
                    if (e(g.instance.modifiers, "inner")) return g;
                    if (g.flipped && g.placement === g.originalPlacement) return g;
                    var v = h(g.instance.popper, g.instance.reference, m.padding, m.boundariesElement, g.positionFixed), y = g.placement.split("-")[0], b = A(y), _ = g.placement.split("-")[1] || "", w = [];
                    switch (m.behavior) {
                      case G:
                        w = [ y, b ];
                        break;

                      case Z:
                        w = i(y);
                        break;

                      case J:
                        w = i(y, !0);
                        break;

                      default:
                        w = m.behavior;
                    }
                    return w.forEach(function(e, t) {
                        if (y !== e || w.length === t + 1) return g;
                        y = g.placement.split("-")[0], b = A(y);
                        var n = g.offsets.popper, i = g.offsets.reference, r = P, o = "left" === y && r(n.right) > r(i.left) || "right" === y && r(n.left) < r(i.right) || "top" === y && r(n.bottom) > r(i.top) || "bottom" === y && r(n.top) < r(i.bottom), s = r(n.left) < r(v.left), a = r(n.right) > r(v.right), l = r(n.top) < r(v.top), c = r(n.bottom) > r(v.bottom), u = "left" === y && s || "right" === y && a || "top" === y && l || "bottom" === y && c, f = -1 !== [ "top", "bottom" ].indexOf(y), d = !!m.flipVariations && (f && "start" === _ && s || f && "end" === _ && a || !f && "start" === _ && l || !f && "end" === _ && c), h = !!m.flipVariationsByContent && (f && "start" === _ && a || f && "end" === _ && s || !f && "start" === _ && c || !f && "end" === _ && l), p = d || h;
                        (o || u || p) && (g.flipped = !0, (o || u) && (y = w[t + 1]), p && (_ = function(e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e;
                        }(_)), g.placement = y + (_ ? "-" + _ : ""), g.offsets.popper = K({}, g.offsets.popper, D(g.instance.popper, g.offsets.reference, g.placement)), 
                        g = N(g.instance.modifiers, g, "flip"));
                    }), g;
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement, n = t.split("-")[0], i = e.offsets, r = i.popper, o = i.reference, s = -1 !== [ "left", "right" ].indexOf(n), a = -1 === [ "top", "left" ].indexOf(n);
                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = A(t), 
                    e.offsets.popper = E(r), e;
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!O(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference, n = k(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name;
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
                    }
                    return e;
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x, i = t.y, r = e.offsets.popper, o = k(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name;
                    }).gpuAcceleration;
                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, a, l = void 0 === o ? t.gpuAcceleration : o, c = b(e.instance.popper), u = x(c), f = {
                        position: r.position
                    }, d = function(e, t) {
                        function n(e) {
                            return e;
                        }
                        var i = e.offsets, r = i.popper, o = i.reference, s = H, a = s(o.width), l = s(r.width), c = -1 !== [ "left", "right" ].indexOf(e.placement), u = -1 !== e.placement.indexOf("-"), f = t ? c || u || a % 2 == l % 2 ? s : P : n, d = t ? s : n;
                        return {
                            left: f(1 == a % 2 && 1 == l % 2 && !u && t ? r.left - 1 : r.left),
                            top: d(r.top),
                            bottom: d(r.bottom),
                            right: f(r.right)
                        };
                    }(e, window.devicePixelRatio < 2 || !z), h = "bottom" === n ? "top" : "bottom", p = "right" === i ? "left" : "right", g = I("transform");
                    if (a = "bottom" == h ? "HTML" === c.nodeName ? -c.clientHeight + d.bottom : -u.height + d.bottom : d.top, 
                    s = "right" == p ? "HTML" === c.nodeName ? -c.clientWidth + d.right : -u.width + d.right : d.left, 
                    l && g) f[g] = "translate3d(" + s + "px, " + a + "px, 0)", f[h] = 0, f[p] = 0, f.willChange = "transform"; else {
                        var m = "bottom" == h ? -1 : 1, v = "right" == p ? -1 : 1;
                        f[h] = a * m, f[p] = s * v, f.willChange = h + ", " + p;
                    }
                    var y = {
                        "x-placement": e.placement
                    };
                    return e.attributes = K({}, y, e.attributes), e.styles = K({}, f, e.styles), e.arrowStyles = K({}, e.offsets.arrow, e.arrowStyles), 
                    e;
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return d(e.instance.popper, e.styles), function(t, n) {
                        Object.keys(n).forEach(function(e) {
                            !1 === n[e] ? t.removeAttribute(e) : t.setAttribute(e, n[e]);
                        });
                    }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && d(e.arrowElement, e.arrowStyles), 
                    e;
                },
                onLoad: function(e, t, n, i, r) {
                    var o = c(r, t, e, n.positionFixed), s = a(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s), d(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }), n;
                },
                gpuAcceleration: void 0
            }
        }
    }, ee;
}), function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : null
}(this, function(e, p, f) {
    "use strict";
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    function s(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
    }
    function l(r) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {}, t = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable;
            }))), t.forEach(function(e) {
                var t, n, i;
                t = r, i = o[n = e], n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i;
            });
        }
        return r;
    }
    p = p && p.hasOwnProperty("default") ? p.default : p, f = f && f.hasOwnProperty("default") ? f.default : f;
    var t = "transitionend";
    function n(e) {
        var t = this, n = !1;
        return p(this).one(g.TRANSITION_END, function() {
            n = !0;
        }), setTimeout(function() {
            n || g.triggerTransitionEnd(t);
        }, e), this;
    }
    var g = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (;e += ~~(1e6 * Math.random()), document.getElementById(e); ) ;
            return e;
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : "";
            }
            try {
                return document.querySelector(t) ? t : null;
            } catch (e) {
                return null;
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var t = p(e).css("transition-duration"), n = p(e).css("transition-delay"), i = parseFloat(t), r = parseFloat(n);
            return i || r ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0;
        },
        reflow: function(e) {
            return e.offsetHeight;
        },
        triggerTransitionEnd: function(e) {
            p(e).trigger(t);
        },
        supportsTransitionEnd: function() {
            return Boolean(t);
        },
        isElement: function(e) {
            return (e[0] || e).nodeType;
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
                var r = n[i], o = t[i], s = o && g.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".');
            }
            var a;
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? g.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null;
        }
    };
    p.fn.emulateTransitionEnd = n, p.event.special[g.TRANSITION_END] = {
        bindType: t,
        delegateType: t,
        handle: function(e) {
            if (p(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
        }
    };
    var r = "alert", o = "bs.alert", a = "." + o, c = p.fn[r], u = {
        CLOSE: "close" + a,
        CLOSED: "closed" + a,
        CLICK_DATA_API: "click" + a + ".data-api"
    }, d = "alert", h = "fade", m = "show", v = function() {
        function i(e) {
            this._element = e;
        }
        var e = i.prototype;
        return e.close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
        }, e.dispose = function() {
            p.removeData(this._element, o), this._element = null;
        }, e._getRootElement = function(e) {
            var t = g.getSelectorFromElement(e), n = !1;
            return t && (n = document.querySelector(t)), n = n || p(e).closest("." + d)[0];
        }, e._triggerCloseEvent = function(e) {
            var t = p.Event(u.CLOSE);
            return p(e).trigger(t), t;
        }, e._removeElement = function(t) {
            var n = this;
            if (p(t).removeClass(m), p(t).hasClass(h)) {
                var e = g.getTransitionDurationFromElement(t);
                p(t).one(g.TRANSITION_END, function(e) {
                    return n._destroyElement(t, e);
                }).emulateTransitionEnd(e);
            } else this._destroyElement(t);
        }, e._destroyElement = function(e) {
            p(e).detach().trigger(u.CLOSED).remove();
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this), t = e.data(o);
                t || (t = new i(this), e.data(o, t)), "close" === n && t[n](this);
            });
        }, i._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(), t.close(this);
            };
        }, s(i, null, [ {
            key: "VERSION",
            get: function() {
                return "4.3.1";
            }
        } ]), i;
    }();
    p(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', v._handleDismiss(new v())), 
    p.fn[r] = v._jQueryInterface, p.fn[r].Constructor = v, p.fn[r].noConflict = function() {
        return p.fn[r] = c, v._jQueryInterface;
    };
    var y = "button", b = "bs.button", _ = "." + b, w = ".data-api", E = p.fn[y], x = "active", T = "btn", C = "focus", S = '[data-toggle^="button"]', A = '[data-toggle="buttons"]', D = 'input:not([type="hidden"])', k = ".active", N = ".btn", I = {
        CLICK_DATA_API: "click" + _ + w,
        FOCUS_BLUR_DATA_API: "focus" + _ + w + " blur" + _ + w
    }, O = function() {
        function n(e) {
            this._element = e;
        }
        var e = n.prototype;
        return e.toggle = function() {
            var e = !0, t = !0, n = p(this._element).closest(A)[0];
            if (n) {
                var i = this._element.querySelector(D);
                if (i) {
                    if ("radio" === i.type) if (i.checked && this._element.classList.contains(x)) e = !1; else {
                        var r = n.querySelector(k);
                        r && p(r).removeClass(x);
                    }
                    if (e) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                        i.checked = !this._element.classList.contains(x), p(i).trigger("change");
                    }
                    i.focus(), t = !1;
                }
            }
            t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(x)), 
            e && p(this._element).toggleClass(x);
        }, e.dispose = function() {
            p.removeData(this._element, b), this._element = null;
        }, n._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(b);
                e || (e = new n(this), p(this).data(b, e)), "toggle" === t && e[t]();
            });
        }, s(n, null, [ {
            key: "VERSION",
            get: function() {
                return "4.3.1";
            }
        } ]), n;
    }();
    p(document).on(I.CLICK_DATA_API, S, function(e) {
        e.preventDefault();
        var t = e.target;
        p(t).hasClass(T) || (t = p(t).closest(N)), O._jQueryInterface.call(p(t), "toggle");
    }).on(I.FOCUS_BLUR_DATA_API, S, function(e) {
        var t = p(e.target).closest(N)[0];
        p(t).toggleClass(C, /^focus(in)?$/.test(e.type));
    }), p.fn[y] = O._jQueryInterface, p.fn[y].Constructor = O, p.fn[y].noConflict = function() {
        return p.fn[y] = E, O._jQueryInterface;
    };
    var L = "carousel", j = "bs.carousel", P = "." + j, H = ".data-api", R = p.fn[L], F = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }, W = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }, M = "next", q = "prev", Y = "left", X = "right", B = {
        SLIDE: "slide" + P,
        SLID: "slid" + P,
        KEYDOWN: "keydown" + P,
        MOUSEENTER: "mouseenter" + P,
        MOUSELEAVE: "mouseleave" + P,
        TOUCHSTART: "touchstart" + P,
        TOUCHMOVE: "touchmove" + P,
        TOUCHEND: "touchend" + P,
        POINTERDOWN: "pointerdown" + P,
        POINTERUP: "pointerup" + P,
        DRAG_START: "dragstart" + P,
        LOAD_DATA_API: "load" + P + H,
        CLICK_DATA_API: "click" + P + H
    }, U = "carousel", $ = "active", K = "slide", z = "carousel-item-right", Q = "carousel-item-left", V = "carousel-item-next", G = "carousel-item-prev", Z = "pointer-event", J = ".active", ee = ".active.carousel-item", te = ".carousel-item", ne = ".carousel-item img", ie = ".carousel-item-next, .carousel-item-prev", re = ".carousel-indicators", oe = "[data-slide], [data-slide-to]", se = '[data-ride="carousel"]', ae = {
        TOUCH: "touch",
        PEN: "pen"
    }, le = function() {
        function o(e, t) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, 
            this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, 
            this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(re), 
            this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, 
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
        }
        var e = o.prototype;
        return e.next = function() {
            this._isSliding || this._slide(M);
        }, e.nextWhenVisible = function() {
            !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next();
        }, e.prev = function() {
            this._isSliding || this._slide(q);
        }, e.pause = function(e) {
            e || (this._isPaused = !0), this._element.querySelector(ie) && (g.triggerTransitionEnd(this._element), 
            this.cycle(!0)), clearInterval(this._interval), this._interval = null;
        }, e.cycle = function(e) {
            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), 
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
        }, e.to = function(e) {
            var t = this;
            this._activeElement = this._element.querySelector(ee);
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) p(this._element).one(B.SLID, function() {
                return t.to(e);
            }); else {
                if (n === e) return this.pause(), void this.cycle();
                var i = n < e ? M : q;
                this._slide(i, this._items[e]);
            }
        }, e.dispose = function() {
            p(this._element).off(P), p.removeData(this._element, j), this._items = null, this._config = null, 
            this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, 
            this._activeElement = null, this._indicatorsElement = null;
        }, e._getConfig = function(e) {
            return e = l({}, F, e), g.typeCheckConfig(L, e, W), e;
        }, e._handleSwipe = function() {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
                var t = e / this.touchDeltaX;
                0 < t && this.prev(), t < 0 && this.next();
            }
        }, e._addEventListeners = function() {
            var t = this;
            this._config.keyboard && p(this._element).on(B.KEYDOWN, function(e) {
                return t._keydown(e);
            }), "hover" === this._config.pause && p(this._element).on(B.MOUSEENTER, function(e) {
                return t.pause(e);
            }).on(B.MOUSELEAVE, function(e) {
                return t.cycle(e);
            }), this._config.touch && this._addTouchEventListeners();
        }, e._addTouchEventListeners = function() {
            var t = this;
            if (this._touchSupported) {
                var n = function(e) {
                    t._pointerEvent && ae[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
                }, i = function(e) {
                    t._pointerEvent && ae[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), 
                    t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), 
                    t.touchTimeout = setTimeout(function(e) {
                        return t.cycle(e);
                    }, 500 + t._config.interval));
                };
                p(this._element.querySelectorAll(ne)).on(B.DRAG_START, function(e) {
                    return e.preventDefault();
                }), this._pointerEvent ? (p(this._element).on(B.POINTERDOWN, function(e) {
                    return n(e);
                }), p(this._element).on(B.POINTERUP, function(e) {
                    return i(e);
                }), this._element.classList.add(Z)) : (p(this._element).on(B.TOUCHSTART, function(e) {
                    return n(e);
                }), p(this._element).on(B.TOUCHMOVE, function(e) {
                    return function(e) {
                        e.originalEvent.touches && 1 < e.originalEvent.touches.length ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX;
                    }(e);
                }), p(this._element).on(B.TOUCHEND, function(e) {
                    return i(e);
                }));
            }
        }, e._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
              case 37:
                e.preventDefault(), this.prev();
                break;

              case 39:
                e.preventDefault(), this.next();
            }
        }, e._getItemIndex = function(e) {
            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(te)) : [], 
            this._items.indexOf(e);
        }, e._getItemByDirection = function(e, t) {
            var n = e === M, i = e === q, r = this._getItemIndex(t), o = this._items.length - 1;
            if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
            var s = (r + (e === q ? -1 : 1)) % this._items.length;
            return -1 == s ? this._items[this._items.length - 1] : this._items[s];
        }, e._triggerSlideEvent = function(e, t) {
            var n = this._getItemIndex(e), i = this._getItemIndex(this._element.querySelector(ee)), r = p.Event(B.SLIDE, {
                relatedTarget: e,
                direction: t,
                from: i,
                to: n
            });
            return p(this._element).trigger(r), r;
        }, e._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                var t = [].slice.call(this._indicatorsElement.querySelectorAll(J));
                p(t).removeClass($);
                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                n && p(n).addClass($);
            }
        }, e._slide = function(e, t) {
            var n, i, r, o = this, s = this._element.querySelector(ee), a = this._getItemIndex(s), l = t || s && this._getItemByDirection(e, s), c = this._getItemIndex(l), u = Boolean(this._interval);
            if (r = e === M ? (n = Q, i = V, Y) : (n = z, i = G, X), l && p(l).hasClass($)) this._isSliding = !1; else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                var f = p.Event(B.SLID, {
                    relatedTarget: l,
                    direction: r,
                    from: a,
                    to: c
                });
                if (p(this._element).hasClass(K)) {
                    p(l).addClass(i), g.reflow(l), p(s).addClass(n), p(l).addClass(n);
                    var d = parseInt(l.getAttribute("data-interval"), 10);
                    d ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, 
                    this._config.interval = d) : this._config.interval = this._config.defaultInterval || this._config.interval;
                    var h = g.getTransitionDurationFromElement(s);
                    p(s).one(g.TRANSITION_END, function() {
                        p(l).removeClass(n + " " + i).addClass($), p(s).removeClass($ + " " + i + " " + n), 
                        o._isSliding = !1, setTimeout(function() {
                            return p(o._element).trigger(f);
                        }, 0);
                    }).emulateTransitionEnd(h);
                } else p(s).removeClass($), p(l).addClass($), this._isSliding = !1, p(this._element).trigger(f);
                u && this.cycle();
            }
        }, o._jQueryInterface = function(i) {
            return this.each(function() {
                var e = p(this).data(j), t = l({}, F, p(this).data());
                "object" == typeof i && (t = l({}, t, i));
                var n = "string" == typeof i ? i : t.slide;
                if (e || (e = new o(this, t), p(this).data(j, e)), "number" == typeof i) e.to(i); else if ("string" == typeof n) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]();
                } else t.interval && t.ride && (e.pause(), e.cycle());
            });
        }, o._dataApiClickHandler = function(e) {
            var t = g.getSelectorFromElement(this);
            if (t) {
                var n = p(t)[0];
                if (n && p(n).hasClass(U)) {
                    var i = l({}, p(n).data(), p(this).data()), r = this.getAttribute("data-slide-to");
                    r && (i.interval = !1), o._jQueryInterface.call(p(n), i), r && p(n).data(j).to(r), 
                    e.preventDefault();
                }
            }
        }, s(o, null, [ {
            key: "VERSION",
            get: function() {
                return "4.3.1";
            }
        }, {
            key: "Default",
            get: function() {
                return F;
            }
        } ]), o;
    }();
    p(document).on(B.CLICK_DATA_API, oe, le._dataApiClickHandler), p(window).on(B.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(se)), t = 0, n = e.length; t < n; t++) {
            var i = p(e[t]);
            le._jQueryInterface.call(i, i.data());
        }
    }), p.fn[L] = le._jQueryInterface, p.fn[L].Constructor = le, p.fn[L].noConflict = function() {
        return p.fn[L] = R, le._jQueryInterface;
    };
    var ce = "collapse", ue = "bs.collapse", fe = "." + ue, de = p.fn[ce], he = {
        toggle: !0,
        parent: ""
    }, pe = {
        toggle: "boolean",
        parent: "(string|element)"
    }, ge = {
        SHOW: "show" + fe,
        SHOWN: "shown" + fe,
        HIDE: "hide" + fe,
        HIDDEN: "hidden" + fe,
        CLICK_DATA_API: "click" + fe + ".data-api"
    }, me = "show", ve = "collapse", ye = "collapsing", be = "collapsed", _e = "width", we = "height", Ee = ".show, .collapsing", xe = '[data-toggle="collapse"]', Te = function() {
        function a(t, e) {
            this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), 
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(xe)), i = 0, r = n.length; i < r; i++) {
                var o = n[i], s = g.getSelectorFromElement(o), a = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                    return e === t;
                });
                null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o));
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), 
            this._config.toggle && this.toggle();
        }
        var e = a.prototype;
        return e.toggle = function() {
            p(this._element).hasClass(me) ? this.hide() : this.show();
        }, e.show = function() {
            var e, t, n = this;
            if (!this._isTransitioning && !p(this._element).hasClass(me) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(Ee)).filter(function(e) {
                return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains(ve);
            })).length && (e = null), !(e && (t = p(e).not(this._selector).data(ue)) && t._isTransitioning))) {
                var i = p.Event(ge.SHOW);
                if (p(this._element).trigger(i), !i.isDefaultPrevented()) {
                    e && (a._jQueryInterface.call(p(e).not(this._selector), "hide"), t || p(e).data(ue, null));
                    var r = this._getDimension();
                    p(this._element).removeClass(ve).addClass(ye), this._element.style[r] = 0, this._triggerArray.length && p(this._triggerArray).removeClass(be).attr("aria-expanded", !0), 
                    this.setTransitioning(!0);
                    var o = "scroll" + (r[0].toUpperCase() + r.slice(1)), s = g.getTransitionDurationFromElement(this._element);
                    p(this._element).one(g.TRANSITION_END, function() {
                        p(n._element).removeClass(ye).addClass(ve).addClass(me), n._element.style[r] = "", 
                        n.setTransitioning(!1), p(n._element).trigger(ge.SHOWN);
                    }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px";
                }
            }
        }, e.hide = function() {
            var e = this;
            if (!this._isTransitioning && p(this._element).hasClass(me)) {
                var t = p.Event(ge.HIDE);
                if (p(this._element).trigger(t), !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", g.reflow(this._element), 
                    p(this._element).addClass(ye).removeClass(ve).removeClass(me);
                    var i = this._triggerArray.length;
                    if (0 < i) for (var r = 0; r < i; r++) {
                        var o = this._triggerArray[r], s = g.getSelectorFromElement(o);
                        if (null !== s) p([].slice.call(document.querySelectorAll(s))).hasClass(me) || p(o).addClass(be).attr("aria-expanded", !1);
                    }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var a = g.getTransitionDurationFromElement(this._element);
                    p(this._element).one(g.TRANSITION_END, function() {
                        e.setTransitioning(!1), p(e._element).removeClass(ye).addClass(ve).trigger(ge.HIDDEN);
                    }).emulateTransitionEnd(a);
                }
            }
        }, e.setTransitioning = function(e) {
            this._isTransitioning = e;
        }, e.dispose = function() {
            p.removeData(this._element, ue), this._config = null, this._parent = null, this._element = null, 
            this._triggerArray = null, this._isTransitioning = null;
        }, e._getConfig = function(e) {
            return (e = l({}, he, e)).toggle = Boolean(e.toggle), g.typeCheckConfig(ce, e, pe), 
            e;
        }, e._getDimension = function() {
            return p(this._element).hasClass(_e) ? _e : we;
        }, e._getParent = function() {
            var e, n = this;
            g.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
            var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', i = [].slice.call(e.querySelectorAll(t));
            return p(i).each(function(e, t) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [ t ]);
            }), e;
        }, e._addAriaAndCollapsedClass = function(e, t) {
            var n = p(e).hasClass(me);
            t.length && p(t).toggleClass(be, !n).attr("aria-expanded", n);
        }, a._getTargetFromElement = function(e) {
            var t = g.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null;
        }, a._jQueryInterface = function(i) {
            return this.each(function() {
                var e = p(this), t = e.data(ue), n = l({}, he, e.data(), "object" == typeof i && i ? i : {});
                if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), 
                e.data(ue, t)), "string" == typeof i) {
                    if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                    t[i]();
                }
            });
        }, s(a, null, [ {
            key: "VERSION",
            get: function() {
                return "4.3.1";
            }
        }, {
            key: "Default",
            get: function() {
                return he;
            }
        } ]), a;
    }();
    p(document).on(ge.CLICK_DATA_API, xe, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = p(this), t = g.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(t));
        p(i).each(function() {
            var e = p(this), t = e.data(ue) ? "toggle" : n.data();
            Te._jQueryInterface.call(e, t);
        });
    }), p.fn[ce] = Te._jQueryInterface, p.fn[ce].Constructor = Te, p.fn[ce].noConflict = function() {
        return p.fn[ce] = de, Te._jQueryInterface;
    };
    var Ce = "dropdown", Se = "bs.dropdown", Ae = "." + Se, De = ".data-api", ke = p.fn[Ce], Ne = new RegExp("38|40|27"), Ie = {
        HIDE: "hide" + Ae,
        HIDDEN: "hidden" + Ae,
        SHOW: "show" + Ae,
        SHOWN: "shown" + Ae,
        CLICK: "click" + Ae,
        CLICK_DATA_API: "click" + Ae + De,
        KEYDOWN_DATA_API: "keydown" + Ae + De,
        KEYUP_DATA_API: "keyup" + Ae + De
    }, Oe = "disabled", Le = "show", je = "dropup", Pe = "dropright", He = "dropleft", Re = "dropdown-menu-right", Fe = "position-static", We = '[data-toggle="dropdown"]', Me = ".dropdown form", qe = ".dropdown-menu", Ye = ".navbar-nav", Xe = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Be = "top-start", Ue = "top-end", $e = "bottom-start", Ke = "bottom-end", ze = "right-start", Qe = "left-start", Ve = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }, Ge = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }, Ze = function() {
        function c(e, t) {
            this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), 
            this._inNavbar = this._detectNavbar(), this._addEventListeners();
        }
        var e = c.prototype;
        return e.toggle = function() {
            if (!this._element.disabled && !p(this._element).hasClass(Oe)) {
                var e = c._getParentFromElement(this._element), t = p(this._menu).hasClass(Le);
                if (c._clearMenus(), !t) {
                    var n = {
                        relatedTarget: this._element
                    }, i = p.Event(Ie.SHOW, n);
                    if (p(e).trigger(i), !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if (void 0 === f) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var r = this._element;
                            "parent" === this._config.reference ? r = e : g.isElement(this._config.reference) && (r = this._config.reference, 
                            void 0 !== this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(e).addClass(Fe), 
                            this._popper = new f(r, this._menu, this._getPopperConfig());
                        }
                        "ontouchstart" in document.documentElement && 0 === p(e).closest(Ye).length && p(document.body).children().on("mouseover", null, p.noop), 
                        this._element.focus(), this._element.setAttribute("aria-expanded", !0), p(this._menu).toggleClass(Le), 
                        p(e).toggleClass(Le).trigger(p.Event(Ie.SHOWN, n));
                    }
                }
            }
        }, e.show = function() {
            if (!(this._element.disabled || p(this._element).hasClass(Oe) || p(this._menu).hasClass(Le))) {
                var e = {
                    relatedTarget: this._element
                }, t = p.Event(Ie.SHOW, e), n = c._getParentFromElement(this._element);
                p(n).trigger(t), t.isDefaultPrevented() || (p(this._menu).toggleClass(Le), p(n).toggleClass(Le).trigger(p.Event(Ie.SHOWN, e)));
            }
        }, e.hide = function() {
            if (!this._element.disabled && !p(this._element).hasClass(Oe) && p(this._menu).hasClass(Le)) {
                var e = {
                    relatedTarget: this._element
                }, t = p.Event(Ie.HIDE, e), n = c._getParentFromElement(this._element);
                p(n).trigger(t), t.isDefaultPrevented() || (p(this._menu).toggleClass(Le), p(n).toggleClass(Le).trigger(p.Event(Ie.HIDDEN, e)));
            }
        }, e.dispose = function() {
            p.removeData(this._element, Se), p(this._element).off(Ae), this._element = null, 
            (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
        }, e.update = function() {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
        }, e._addEventListeners = function() {
            var t = this;
            p(this._element).on(Ie.CLICK, function(e) {
                e.preventDefault(), e.stopPropagation(), t.toggle();
            });
        }, e._getConfig = function(e) {
            return e = l({}, this.constructor.Default, p(this._element).data(), e), g.typeCheckConfig(Ce, e, this.constructor.DefaultType), 
            e;
        }, e._getMenuElement = function() {
            if (!this._menu) {
                var e = c._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(qe));
            }
            return this._menu;
        }, e._getPlacement = function() {
            var e = p(this._element.parentNode), t = $e;
            return e.hasClass(je) ? (t = Be, p(this._menu).hasClass(Re) && (t = Ue)) : e.hasClass(Pe) ? t = ze : e.hasClass(He) ? t = Qe : p(this._menu).hasClass(Re) && (t = Ke), 
            t;
        }, e._detectNavbar = function() {
            return 0 < p(this._element).closest(".navbar").length;
        }, e._getOffset = function() {
            var t = this, e = {};
            return "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = l({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), 
                e;
            } : e.offset = this._config.offset, e;
        }, e._getPopperConfig = function() {
            var e = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (e.modifiers.applyStyle = {
                enabled: !1
            }), e;
        }, c._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(Se);
                if (e || (e = new c(this, "object" == typeof t ? t : null), p(this).data(Se, e)), 
                "string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]();
                }
            });
        }, c._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which)) for (var t = [].slice.call(document.querySelectorAll(We)), n = 0, i = t.length; n < i; n++) {
                var r = c._getParentFromElement(t[n]), o = p(t[n]).data(Se), s = {
                    relatedTarget: t[n]
                };
                if (e && "click" === e.type && (s.clickEvent = e), o) {
                    var a = o._menu;
                    if (p(r).hasClass(Le) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && p.contains(r, e.target))) {
                        var l = p.Event(Ie.HIDE, s);
                        p(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), 
                        t[n].setAttribute("aria-expanded", "false"), p(a).removeClass(Le), p(r).removeClass(Le).trigger(p.Event(Ie.HIDDEN, s)));
                    }
                }
            }
        }, c._getParentFromElement = function(e) {
            var t, n = g.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)), t || e.parentNode;
        }, c._dataApiKeydownHandler = function(e) {
            if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || p(e.target).closest(qe).length)) : Ne.test(e.which)) && (e.preventDefault(), 
            e.stopPropagation(), !this.disabled && !p(this).hasClass(Oe))) {
                var t = c._getParentFromElement(this), n = p(t).hasClass(Le);
                if (n && (!n || 27 !== e.which && 32 !== e.which)) {
                    var i = [].slice.call(t.querySelectorAll(Xe));
                    if (0 !== i.length) {
                        var r = i.indexOf(e.target);
                        38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), 
                        i[r].focus();
                    }
                } else {
                    if (27 === e.which) {
                        var o = t.querySelector(We);
                        p(o).trigger("focus");
                    }
                    p(this).trigger("click");
                }
            }
        }, s(c, null, [ {
            key: "VERSION",
            get: function() {
                return "4.3.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Ve;
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Ge;
            }
        } ]), c;
    }();
    p(document).on(Ie.KEYDOWN_DATA_API, We, Ze._dataApiKeydownHandler).on(Ie.KEYDOWN_DATA_API, qe, Ze._dataApiKeydownHandler).on(Ie.CLICK_DATA_API + " " + Ie.KEYUP_DATA_API, Ze._clearMenus).on(Ie.CLICK_DATA_API, We, function(e) {
        e.preventDefault(), e.stopPropagation(), Ze._jQueryInterface.call(p(this), "toggle");
    }).on(Ie.CLICK_DATA_API, Me, function(e) {
        e.stopPropagation();
    }), p.fn[Ce] = Ze._jQueryInterface, p.fn[Ce].Constructor = Ze, p.fn[Ce].noConflict = function() {
        return p.fn[Ce] = ke, Ze._jQueryInterface;
    };
    var Je = "modal", et = "bs.modal", tt = "." + et, nt = p.fn[Je], it = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }, rt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }, ot = {
        HIDE: "hide" + tt,
        HIDDEN: "hidden" + tt,
        SHOW: "show" + tt,
        SHOWN: "shown" + tt,
        FOCUSIN: "focusin" + tt,
        RESIZE: "resize" + tt,
        CLICK_DISMISS: "click.dismiss" + tt,
        KEYDOWN_DISMISS: "keydown.dismiss" + tt,
        MOUSEUP_DISMISS: "mouseup.dismiss" + tt,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + tt,
        CLICK_DATA_API: "click" + tt + ".data-api"
    }, st = "modal-dialog-scrollable", at = "modal-scrollbar-measure", lt = "modal-backdrop", ct = "modal-open", ut = "fade", ft = "show", dt = ".modal-dialog", ht = ".modal-body", pt = '[data-toggle="modal"]', gt = '[data-dismiss="modal"]', mt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", vt = ".sticky-top", yt = function() {
        function r(e, t) {
            this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(dt), 
            this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, 
            this._isTransitioning = !1, this._scrollbarWidth = 0;
        }
        var e = r.prototype;
        return e.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e);
        }, e.show = function(e) {
            var t = this;
            if (!this._isShown && !this._isTransitioning) {
                p(this._element).hasClass(ut) && (this._isTransitioning = !0);
                var n = p.Event(ot.SHOW, {
                    relatedTarget: e
                });
                p(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, 
                this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), 
                this._setResizeEvent(), p(this._element).on(ot.CLICK_DISMISS, gt, function(e) {
                    return t.hide(e);
                }), p(this._dialog).on(ot.MOUSEDOWN_DISMISS, function() {
                    p(t._element).one(ot.MOUSEUP_DISMISS, function(e) {
                        p(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
                    });
                }), this._showBackdrop(function() {
                    return t._showElement(e);
                }));
            }
        }, e.hide = function(e) {
            var t = this;
            if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                var n = p.Event(ot.HIDE);
                if (p(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = p(this._element).hasClass(ut);
                    if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), 
                    p(document).off(ot.FOCUSIN), p(this._element).removeClass(ft), p(this._element).off(ot.CLICK_DISMISS), 
                    p(this._dialog).off(ot.MOUSEDOWN_DISMISS), i) {
                        var r = g.getTransitionDurationFromElement(this._element);
                        p(this._element).one(g.TRANSITION_END, function(e) {
                            return t._hideModal(e);
                        }).emulateTransitionEnd(r);
                    } else this._hideModal();
                }
            }
        }, e.dispose = function() {
            [ window, this._element, this._dialog ].forEach(function(e) {
                return p(e).off(tt);
            }), p(document).off(ot.FOCUSIN), p.removeData(this._element, et), this._config = null, 
            this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, 
            this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, 
            this._scrollbarWidth = null;
        }, e.handleUpdate = function() {
            this._adjustDialog();
        }, e._getConfig = function(e) {
            return e = l({}, it, e), g.typeCheckConfig(Je, e, rt), e;
        }, e._showElement = function(e) {
            var t = this, n = p(this._element).hasClass(ut);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), 
            this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), 
            this._element.setAttribute("aria-modal", !0), p(this._dialog).hasClass(st) ? this._dialog.querySelector(ht).scrollTop = 0 : this._element.scrollTop = 0, 
            n && g.reflow(this._element), p(this._element).addClass(ft), this._config.focus && this._enforceFocus();
            function i() {
                t._config.focus && t._element.focus(), t._isTransitioning = !1, p(t._element).trigger(r);
            }
            var r = p.Event(ot.SHOWN, {
                relatedTarget: e
            });
            if (n) {
                var o = g.getTransitionDurationFromElement(this._dialog);
                p(this._dialog).one(g.TRANSITION_END, i).emulateTransitionEnd(o);
            } else i();
        }, e._enforceFocus = function() {
            var t = this;
            p(document).off(ot.FOCUSIN).on(ot.FOCUSIN, function(e) {
                document !== e.target && t._element !== e.target && 0 === p(t._element).has(e.target).length && t._element.focus();
            });
        }, e._setEscapeEvent = function() {
            var t = this;
            this._isShown && this._config.keyboard ? p(this._element).on(ot.KEYDOWN_DISMISS, function(e) {
                27 === e.which && (e.preventDefault(), t.hide());
            }) : this._isShown || p(this._element).off(ot.KEYDOWN_DISMISS);
        }, e._setResizeEvent = function() {
            var t = this;
            this._isShown ? p(window).on(ot.RESIZE, function(e) {
                return t.handleUpdate(e);
            }) : p(window).off(ot.RESIZE);
        }, e._hideModal = function() {
            var e = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), 
            this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                p(document.body).removeClass(ct), e._resetAdjustments(), e._resetScrollbar(), p(e._element).trigger(ot.HIDDEN);
            });
        }, e._removeBackdrop = function() {
            this._backdrop && (p(this._backdrop).remove(), this._backdrop = null);
        }, e._showBackdrop = function(e) {
            var t = this, n = p(this._element).hasClass(ut) ? ut : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = lt, 
                n && this._backdrop.classList.add(n), p(this._backdrop).appendTo(document.body), 
                p(this._element).on(ot.CLICK_DISMISS, function(e) {
                    t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide());
                }), n && g.reflow(this._backdrop), p(this._backdrop).addClass(ft), !e) return;
                if (!n) return void e();
                var i = g.getTransitionDurationFromElement(this._backdrop);
                p(this._backdrop).one(g.TRANSITION_END, e).emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
                p(this._backdrop).removeClass(ft);
                var r = function() {
                    t._removeBackdrop(), e && e();
                };
                if (p(this._element).hasClass(ut)) {
                    var o = g.getTransitionDurationFromElement(this._backdrop);
                    p(this._backdrop).one(g.TRANSITION_END, r).emulateTransitionEnd(o);
                } else r();
            } else e && e();
        }, e._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), 
            this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }, e._resetAdjustments = function() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }, e._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
        }, e._setScrollbar = function() {
            var r = this;
            if (this._isBodyOverflowing) {
                var e = [].slice.call(document.querySelectorAll(mt)), t = [].slice.call(document.querySelectorAll(vt));
                p(e).each(function(e, t) {
                    var n = t.style.paddingRight, i = p(t).css("padding-right");
                    p(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
                }), p(t).each(function(e, t) {
                    var n = t.style.marginRight, i = p(t).css("margin-right");
                    p(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
                });
                var n = document.body.style.paddingRight, i = p(document.body).css("padding-right");
                p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
            }
            p(document.body).addClass(ct);
        }, e._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(mt));
            p(e).each(function(e, t) {
                var n = p(t).data("padding-right");
                p(t).removeData("padding-right"), t.style.paddingRight = n || "";
            });
            var t = [].slice.call(document.querySelectorAll("" + vt));
            p(t).each(function(e, t) {
                var n = p(t).data("margin-right");
                void 0 !== n && p(t).css("margin-right", n).removeData("margin-right");
            });
            var n = p(document.body).data("padding-right");
            p(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
        }, e._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = at, document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t;
        }, r._jQueryInterface = function(n, i) {
            return this.each(function() {
                var e = p(this).data(et), t = l({}, it, p(this).data(), "object" == typeof n && n ? n : {});
                if (e || (e = new r(this, t), p(this).data(et, e)), "string" == typeof n) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n](i);
                } else t.show && e.show(i);
            });
        }, s(r, null, [ {
            key: "VERSION",
            get: function() {
                return "4.3.1";
            }
        }, {
            key: "Default",
            get: function() {
                return it;
            }
        } ]), r;
    }();
    p(document).on(ot.CLICK_DATA_API, pt, function(e) {
        var t, n = this, i = g.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var r = p(t).data(et) ? "toggle" : l({}, p(t).data(), p(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var o = p(t).one(ot.SHOW, function(e) {
            e.isDefaultPrevented() || o.one(ot.HIDDEN, function() {
                p(n).is(":visible") && n.focus();
            });
        });
        yt._jQueryInterface.call(p(t), r, this);
    }), p.fn[Je] = yt._jQueryInterface, p.fn[Je].Constructor = yt, p.fn[Je].noConflict = function() {
        return p.fn[Je] = nt, yt._jQueryInterface;
    };
    var bt = [ "background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href" ], _t = {
        "*": [ "class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i ],
        a: [ "target", "href", "title", "rel" ],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: [ "src", "alt", "title", "width", "height" ],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }, wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi, Et = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function xt(e, s, t) {
        if (0 === e.length) return e;
        if (t && "function" == typeof t) return t(e);
        for (var n = new window.DOMParser().parseFromString(e, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function(e, t) {
            var n = l[e], i = n.nodeName.toLowerCase();
            if (-1 === a.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), 
            "continue";
            var r = [].slice.call(n.attributes), o = [].concat(s["*"] || [], s[i] || []);
            r.forEach(function(e) {
                !function(e, t) {
                    var n = e.nodeName.toLowerCase();
                    if (-1 !== t.indexOf(n)) return -1 === bt.indexOf(n) || Boolean(e.nodeValue.match(wt) || e.nodeValue.match(Et));
                    for (var i = t.filter(function(e) {
                        return e instanceof RegExp;
                    }), r = 0, o = i.length; r < o; r++) if (n.match(i[r])) return !0;
                    return !1;
                }(e, o) && n.removeAttribute(e.nodeName);
            });
        }, r = 0, o = l.length; r < o; r++) i(r);
        return n.body.innerHTML;
    }
    var Tt = "tooltip", Ct = "bs.tooltip", St = "." + Ct, At = p.fn[Tt], Dt = "bs-tooltip", kt = new RegExp("(^|\\s)" + Dt + "\\S+", "g"), Nt = [ "sanitize", "whiteList", "sanitizeFn" ], It = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object"
    }, Ot = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }, Lt = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: _t
    }, jt = "show", Pt = "out", Ht = {
        HIDE: "hide" + St,
        HIDDEN: "hidden" + St,
        SHOW: "show" + St,
        SHOWN: "shown" + St,
        INSERTED: "inserted" + St,
        CLICK: "click" + St,
        FOCUSIN: "focusin" + St,
        FOCUSOUT: "focusout" + St,
        MOUSEENTER: "mouseenter" + St,
        MOUSELEAVE: "mouseleave" + St
    }, Rt = "fade", Ft = "show", Wt = ".tooltip-inner", Mt = ".arrow", qt = "hover", Yt = "focus", Xt = "click", Bt = "manual", Ut = function() {
        function i(e, t) {
            if (void 0 === f) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, 
            this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, 
            this._setListeners();
        }
        var e = i.prototype;
        return e.enable = function() {
            this._isEnabled = !0;
        }, e.disable = function() {
            this._isEnabled = !1;
        }, e.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled;
        }, e.toggle = function(e) {
            if (this._isEnabled) if (e) {
                var t = this.constructor.DATA_KEY, n = p(e.currentTarget).data(t);
                n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(t, n)), 
                n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
            } else {
                if (p(this.getTipElement()).hasClass(Ft)) return void this._leave(null, this);
                this._enter(null, this);
            }
        }, e.dispose = function() {
            clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), 
            p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal"), 
            this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, 
            this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), 
            this._popper = null, this.element = null, this.config = null, this.tip = null;
        }, e.show = function() {
            var t = this;
            if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements");
            var e = p.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                p(this.element).trigger(e);
                var n = g.findShadowRoot(this.element), i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (e.isDefaultPrevented() || !i) return;
                var r = this.getTipElement(), o = g.getUID(this.constructor.NAME);
                r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), 
                this.config.animation && p(r).addClass(Rt);
                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement, a = this._getAttachment(s);
                this.addAttachmentClass(a);
                var l = this._getContainer();
                p(r).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(r).appendTo(l), 
                p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new f(this.element, r, {
                    placement: a,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: Mt
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
                    },
                    onUpdate: function(e) {
                        return t._handlePopperPlacementChange(e);
                    }
                }), p(r).addClass(Ft), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
                var c = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null, p(t.element).trigger(t.constructor.Event.SHOWN), e === Pt && t._leave(null, t);
                };
                if (p(this.tip).hasClass(Rt)) {
                    var u = g.getTransitionDurationFromElement(this.tip);
                    p(this.tip).one(g.TRANSITION_END, c).emulateTransitionEnd(u);
                } else c();
            }
        }, e.hide = function(e) {
            function t() {
                n._hoverState !== jt && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), 
                n.element.removeAttribute("aria-describedby"), p(n.element).trigger(n.constructor.Event.HIDDEN), 
                null !== n._popper && n._popper.destroy(), e && e();
            }
            var n = this, i = this.getTipElement(), r = p.Event(this.constructor.Event.HIDE);
            if (p(this.element).trigger(r), !r.isDefaultPrevented()) {
                if (p(i).removeClass(Ft), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), 
                this._activeTrigger[Xt] = !1, this._activeTrigger[Yt] = !1, this._activeTrigger[qt] = !1, 
                p(this.tip).hasClass(Rt)) {
                    var o = g.getTransitionDurationFromElement(i);
                    p(i).one(g.TRANSITION_END, t).emulateTransitionEnd(o);
                } else t();
                this._hoverState = "";
            }
        }, e.update = function() {
            null !== this._popper && this._popper.scheduleUpdate();
        }, e.isWithContent = function() {
            return Boolean(this.getTitle());
        }, e.addAttachmentClass = function(e) {
            p(this.getTipElement()).addClass(Dt + "-" + e);
        }, e.getTipElement = function() {
            return this.tip = this.tip || p(this.config.template)[0], this.tip;
        }, e.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(p(e.querySelectorAll(Wt)), this.getTitle()), p(e).removeClass(Rt + " " + Ft);
        }, e.setElementContent = function(e, t) {
            "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = xt(t, this.config.whiteList, this.config.sanitizeFn)), 
            e.html(t)) : e.text(t) : this.config.html ? p(t).parent().is(e) || e.empty().append(t) : e.text(p(t).text());
        }, e.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e = e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title);
        }, e._getOffset = function() {
            var t = this, e = {};
            return "function" == typeof this.config.offset ? e.fn = function(e) {
                return e.offsets = l({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), 
                e;
            } : e.offset = this.config.offset, e;
        }, e._getContainer = function() {
            return !1 === this.config.container ? document.body : g.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container);
        }, e._getAttachment = function(e) {
            return Ot[e.toUpperCase()];
        }, e._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(e) {
                if ("click" === e) p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                    return i.toggle(e);
                }); else if (e !== Bt) {
                    var t = e === qt ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN, n = e === qt ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    p(i.element).on(t, i.config.selector, function(e) {
                        return i._enter(e);
                    }).on(n, i.config.selector, function(e) {
                        return i._leave(e);
                    });
                }
            }), p(this.element).closest(".modal").on("hide.bs.modal", function() {
                i.element && i.hide();
            }), this.config.selector ? this.config = l({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle();
        }, e._fixTitle = function() {
            var e = typeof this.element.getAttribute("data-original-title");
            !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), 
            this.element.setAttribute("title", ""));
        }, e._enter = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), 
            p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Yt : qt] = !0), 
            p(t.getTipElement()).hasClass(Ft) || t._hoverState === jt ? t._hoverState = jt : (clearTimeout(t._timeout), 
            t._hoverState = jt, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                t._hoverState === jt && t.show();
            }, t.config.delay.show) : t.show());
        }, e._leave = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), 
            p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Yt : qt] = !1), 
            t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Pt, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                t._hoverState === Pt && t.hide();
            }, t.config.delay.hide) : t.hide());
        }, e._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
            return !1;
        }, e._getConfig = function(e) {
            var t = p(this.element).data();
            return Object.keys(t).forEach(function(e) {
                -1 !== Nt.indexOf(e) && delete t[e];
            }), "number" == typeof (e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), 
            g.typeCheckConfig(Tt, e, this.constructor.DefaultType), e.sanitize && (e.template = xt(e.template, e.whiteList, e.sanitizeFn)), 
            e;
        }, e._getDelegateConfig = function() {
            var e = {};
            if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e;
        }, e._cleanTipClass = function() {
            var e = p(this.getTipElement()), t = e.attr("class").match(kt);
            null !== t && t.length && e.removeClass(t.join(""));
        }, e._handlePopperPlacementChange = function(e) {
            var t = e.instance;
            this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
        }, e._fixTransition = function() {
            var e = this.getTipElement(), t = this.config.animation;
            null === e.getAttribute("x-placement") && (p(e).removeClass(Rt), this.config.animation = !1, 
            this.hide(), this.show(), this.config.animation = t);
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this).data(Ct), t = "object" == typeof n && n;
                if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data(Ct, e)), 
                "string" == typeof n)) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]();
                }
            });
        }, s(i, null, [ {
            key: "VERSION",
            get: function() {
                return "4.3.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Lt;
            }
        }, {
            key: "NAME",
            get: function() {
                return Tt;
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ct;
            }
        }, {
            key: "Event",
            get: function() {
                return Ht;
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return St;
            }
        }, {
            key: "DefaultType",
            get: function() {
                return It;
            }
        } ]), i;
    }();
    p.fn[Tt] = Ut._jQueryInterface, p.fn[Tt].Constructor = Ut, p.fn[Tt].noConflict = function() {
        return p.fn[Tt] = At, Ut._jQueryInterface;
    };
    var $t = "popover", Kt = "bs.popover", zt = "." + Kt, Qt = p.fn[$t], Vt = "bs-popover", Gt = new RegExp("(^|\\s)" + Vt + "\\S+", "g"), Zt = l({}, Ut.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), Jt = l({}, Ut.DefaultType, {
        content: "(string|element|function)"
    }), en = "fade", tn = "show", nn = ".popover-header", rn = ".popover-body", on = {
        HIDE: "hide" + zt,
        HIDDEN: "hidden" + zt,
        SHOW: "show" + zt,
        SHOWN: "shown" + zt,
        INSERTED: "inserted" + zt,
        CLICK: "click" + zt,
        FOCUSIN: "focusin" + zt,
        FOCUSOUT: "focusout" + zt,
        MOUSEENTER: "mouseenter" + zt,
        MOUSELEAVE: "mouseleave" + zt
    }, sn = function(e) {
        function i() {
            return e.apply(this, arguments) || this;
        }
        !function(e, t) {
            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t;
        }(i, e);
        var t = i.prototype;
        return t.isWithContent = function() {
            return this.getTitle() || this._getContent();
        }, t.addAttachmentClass = function(e) {
            p(this.getTipElement()).addClass(Vt + "-" + e);
        }, t.getTipElement = function() {
            return this.tip = this.tip || p(this.config.template)[0], this.tip;
        }, t.setContent = function() {
            var e = p(this.getTipElement());
            this.setElementContent(e.find(nn), this.getTitle());
            var t = this._getContent();
            "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(rn), t), 
            e.removeClass(en + " " + tn);
        }, t._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content;
        }, t._cleanTipClass = function() {
            var e = p(this.getTipElement()), t = e.attr("class").match(Gt);
            null !== t && 0 < t.length && e.removeClass(t.join(""));
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this).data(Kt), t = "object" == typeof n ? n : null;
                if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), p(this).data(Kt, e)), 
                "string" == typeof n)) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]();
                }
            });
        }, s(i, null, [ {
            key: "VERSION",
            get: function() {
                return "4.3.1";
            }
        }, {
            key: "Default",
            get: function() {
                return Zt;
            }
        }, {
            key: "NAME",
            get: function() {
                return $t;
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Kt;
            }
        }, {
            key: "Event",
            get: function() {
                return on;
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return zt;
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Jt;
            }
        } ]), i;
    }(Ut);
    p.fn[$t] = sn._jQueryInterface, p.fn[$t].Constructor = sn, p.fn[$t].noConflict = function() {
        return p.fn[$t] = Qt, sn._jQueryInterface;
    };
    var an = "scrollspy", ln = "bs.scrollspy", cn = "." + ln, un = p.fn[an], fn = {
        offset: 10,
        method: "auto",
        target: ""
    }, dn = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }, hn = {
        ACTIVATE: "activate" + cn,
        SCROLL: "scroll" + cn,
        LOAD_DATA_API: "load" + cn + ".data-api"
    }, pn = "dropdown-item", gn = "active", mn = '[data-spy="scroll"]', vn = ".nav, .list-group", yn = ".nav-link", bn = ".nav-item", _n = ".list-group-item", wn = ".dropdown", En = ".dropdown-item", xn = ".dropdown-toggle", Tn = "offset", Cn = "position", Sn = function() {
        function n(e, t) {
            var n = this;
            this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), 
            this._selector = this._config.target + " " + yn + "," + this._config.target + " " + _n + "," + this._config.target + " " + En, 
            this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, 
            p(this._scrollElement).on(hn.SCROLL, function(e) {
                return n._process(e);
            }), this.refresh(), this._process();
        }
        var e = n.prototype;
        return e.refresh = function() {
            var t = this, e = this._scrollElement === this._scrollElement.window ? Tn : Cn, r = "auto" === this._config.method ? e : this._config.method, o = r === Cn ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), 
            [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                var t, n = g.getSelectorFromElement(e);
                if (n && (t = document.querySelector(n)), t) {
                    var i = t.getBoundingClientRect();
                    if (i.width || i.height) return [ p(t)[r]().top + o, n ];
                }
                return null;
            }).filter(function(e) {
                return e;
            }).sort(function(e, t) {
                return e[0] - t[0];
            }).forEach(function(e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
            });
        }, e.dispose = function() {
            p.removeData(this._element, ln), p(this._scrollElement).off(cn), this._element = null, 
            this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, 
            this._targets = null, this._activeTarget = null, this._scrollHeight = null;
        }, e._getConfig = function(e) {
            if ("string" != typeof (e = l({}, fn, "object" == typeof e && e ? e : {})).target) {
                var t = p(e.target).attr("id");
                t || (t = g.getUID(an), p(e.target).attr("id", t)), e.target = "#" + t;
            }
            return g.typeCheckConfig(an, e, dn), e;
        }, e._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
        }, e._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        }, e._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
        }, e._process = function() {
            var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(), n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(), n <= e) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i);
            } else {
                if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, 
                void this._clear();
                for (var r = this._offsets.length; r--; ) {
                    this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]);
                }
            }
        }, e._activate = function(t) {
            this._activeTarget = t, this._clear();
            var e = this._selector.split(",").map(function(e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
            }), n = p([].slice.call(document.querySelectorAll(e.join(","))));
            n.hasClass(pn) ? (n.closest(wn).find(xn).addClass(gn), n.addClass(gn)) : (n.addClass(gn), 
            n.parents(vn).prev(yn + ", " + _n).addClass(gn), n.parents(vn).prev(bn).children(yn).addClass(gn)), 
            p(this._scrollElement).trigger(hn.ACTIVATE, {
                relatedTarget: t
            });
        }, e._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                return e.classList.contains(gn);
            }).forEach(function(e) {
                return e.classList.remove(gn);
            });
        }, n._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(ln);
                if (e || (e = new n(this, "object" == typeof t && t), p(this).data(ln, e)), "string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]();
                }
            });
        }, s(n, null, [ {
            key: "VERSION",
            get: function() {
                return "4.3.1";
            }
        }, {
            key: "Default",
            get: function() {
                return fn;
            }
        } ]), n;
    }();
    p(window).on(hn.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(mn)), t = e.length; t--; ) {
            var n = p(e[t]);
            Sn._jQueryInterface.call(n, n.data());
        }
    }), p.fn[an] = Sn._jQueryInterface, p.fn[an].Constructor = Sn, p.fn[an].noConflict = function() {
        return p.fn[an] = un, Sn._jQueryInterface;
    };
    var An = "bs.tab", Dn = "." + An, kn = p.fn.tab, Nn = {
        HIDE: "hide" + Dn,
        HIDDEN: "hidden" + Dn,
        SHOW: "show" + Dn,
        SHOWN: "shown" + Dn,
        CLICK_DATA_API: "click" + Dn + ".data-api"
    }, In = "dropdown-menu", On = "active", Ln = "disabled", jn = "fade", Pn = "show", Hn = ".dropdown", Rn = ".nav, .list-group", Fn = ".active", Wn = "> li > .active", Mn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', qn = ".dropdown-toggle", Yn = "> .dropdown-menu .active", Xn = function() {
        function i(e) {
            this._element = e;
        }
        var e = i.prototype;
        return e.show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(On) || p(this._element).hasClass(Ln))) {
                var e, i, t = p(this._element).closest(Rn)[0], r = g.getSelectorFromElement(this._element);
                if (t) {
                    var o = "UL" === t.nodeName || "OL" === t.nodeName ? Wn : Fn;
                    i = (i = p.makeArray(p(t).find(o)))[i.length - 1];
                }
                var s = p.Event(Nn.HIDE, {
                    relatedTarget: this._element
                }), a = p.Event(Nn.SHOW, {
                    relatedTarget: i
                });
                if (i && p(i).trigger(s), p(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    r && (e = document.querySelector(r)), this._activate(this._element, t);
                    var l = function() {
                        var e = p.Event(Nn.HIDDEN, {
                            relatedTarget: n._element
                        }), t = p.Event(Nn.SHOWN, {
                            relatedTarget: i
                        });
                        p(i).trigger(e), p(n._element).trigger(t);
                    };
                    e ? this._activate(e, e.parentNode, l) : l();
                }
            }
        }, e.dispose = function() {
            p.removeData(this._element, An), this._element = null;
        }, e._activate = function(e, t, n) {
            function i() {
                return r._transitionComplete(e, o, n);
            }
            var r = this, o = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? p(t).children(Fn) : p(t).find(Wn))[0], s = n && o && p(o).hasClass(jn);
            if (o && s) {
                var a = g.getTransitionDurationFromElement(o);
                p(o).removeClass(Pn).one(g.TRANSITION_END, i).emulateTransitionEnd(a);
            } else i();
        }, e._transitionComplete = function(e, t, n) {
            if (t) {
                p(t).removeClass(On);
                var i = p(t.parentNode).find(Yn)[0];
                i && p(i).removeClass(On), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
            }
            if (p(e).addClass(On), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), 
            g.reflow(e), e.classList.contains(jn) && e.classList.add(Pn), e.parentNode && p(e.parentNode).hasClass(In)) {
                var r = p(e).closest(Hn)[0];
                if (r) {
                    var o = [].slice.call(r.querySelectorAll(qn));
                    p(o).addClass(On);
                }
                e.setAttribute("aria-expanded", !0);
            }
            n && n();
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this), t = e.data(An);
                if (t || (t = new i(this), e.data(An, t)), "string" == typeof n) {
                    if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]();
                }
            });
        }, s(i, null, [ {
            key: "VERSION",
            get: function() {
                return "4.3.1";
            }
        } ]), i;
    }();
    p(document).on(Nn.CLICK_DATA_API, Mn, function(e) {
        e.preventDefault(), Xn._jQueryInterface.call(p(this), "show");
    }), p.fn.tab = Xn._jQueryInterface, p.fn.tab.Constructor = Xn, p.fn.tab.noConflict = function() {
        return p.fn.tab = kn, Xn._jQueryInterface;
    };
    var Bn = "toast", Un = "bs.toast", $n = "." + Un, Kn = p.fn[Bn], zn = {
        CLICK_DISMISS: "click.dismiss" + $n,
        HIDE: "hide" + $n,
        HIDDEN: "hidden" + $n,
        SHOW: "show" + $n,
        SHOWN: "shown" + $n
    }, Qn = "fade", Vn = "hide", Gn = "show", Zn = "showing", Jn = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, ei = {
        animation: !0,
        autohide: !0,
        delay: 500
    }, ti = '[data-dismiss="toast"]', ni = function() {
        function i(e, t) {
            this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners();
        }
        var e = i.prototype;
        return e.show = function() {
            var e = this;
            p(this._element).trigger(zn.SHOW), this._config.animation && this._element.classList.add(Qn);
            function t() {
                e._element.classList.remove(Zn), e._element.classList.add(Gn), p(e._element).trigger(zn.SHOWN), 
                e._config.autohide && e.hide();
            }
            if (this._element.classList.remove(Vn), this._element.classList.add(Zn), this._config.animation) {
                var n = g.getTransitionDurationFromElement(this._element);
                p(this._element).one(g.TRANSITION_END, t).emulateTransitionEnd(n);
            } else t();
        }, e.hide = function(e) {
            var t = this;
            this._element.classList.contains(Gn) && (p(this._element).trigger(zn.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
                t._close();
            }, this._config.delay));
        }, e.dispose = function() {
            clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Gn) && this._element.classList.remove(Gn), 
            p(this._element).off(zn.CLICK_DISMISS), p.removeData(this._element, Un), this._element = null, 
            this._config = null;
        }, e._getConfig = function(e) {
            return e = l({}, ei, p(this._element).data(), "object" == typeof e && e ? e : {}), 
            g.typeCheckConfig(Bn, e, this.constructor.DefaultType), e;
        }, e._setListeners = function() {
            var e = this;
            p(this._element).on(zn.CLICK_DISMISS, ti, function() {
                return e.hide(!0);
            });
        }, e._close = function() {
            function e() {
                t._element.classList.add(Vn), p(t._element).trigger(zn.HIDDEN);
            }
            var t = this;
            if (this._element.classList.remove(Gn), this._config.animation) {
                var n = g.getTransitionDurationFromElement(this._element);
                p(this._element).one(g.TRANSITION_END, e).emulateTransitionEnd(n);
            } else e();
        }, i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this), t = e.data(Un);
                if (t || (t = new i(this, "object" == typeof n && n), e.data(Un, t)), "string" == typeof n) {
                    if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n](this);
                }
            });
        }, s(i, null, [ {
            key: "VERSION",
            get: function() {
                return "4.3.1";
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Jn;
            }
        }, {
            key: "Default",
            get: function() {
                return ei;
            }
        } ]), i;
    }();
    p.fn[Bn] = ni._jQueryInterface, p.fn[Bn].Constructor = ni, p.fn[Bn].noConflict = function() {
        return p.fn[Bn] = Kn, ni._jQueryInterface;
    }, function() {
        if (void 0 === p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = p.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }(), e.Util = g, e.Alert = v, e.Button = O, e.Carousel = le, e.Collapse = Te, e.Dropdown = Ze, 
    e.Modal = yt, e.Popover = sn, e.Scrollspy = Sn, e.Tab = Xn, e.Toast = ni, e.Tooltip = Ut, 
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
}), function o(s, a, l) {
    function c(n, e) {
        if (!a[n]) {
            if (!s[n]) {
                var t = "function" == typeof require && require;
                if (!e && t) return t(n, !0);
                if (u) return u(n, !0);
                var i = new Error("Cannot find module '" + n + "'");
                throw i.code = "MODULE_NOT_FOUND", i;
            }
            var r = a[n] = {
                exports: {}
            };
            s[n][0].call(r.exports, function(e) {
                var t = s[n][1][e];
                return c(t || e);
            }, r, r.exports, o, s, a, l);
        }
        return a[n].exports;
    }
    for (var u = "function" == typeof require && require, e = 0; e < l.length; e++) c(l[e]);
    return c;
}({
    1: [ function(e, t, n) {
        "use strict";
        var i = e("../main"), r = e("../plugin/instances");
        function o(e) {
            e.fn.perfectScrollbar = function(n) {
                return this.each(function() {
                    if ("object" == typeof n || void 0 === n) {
                        var e = n;
                        r.get(this) || i.initialize(this, e);
                    } else {
                        var t = n;
                        "update" === t ? i.update(this) : "destroy" === t && i.destroy(this);
                    }
                });
            };
        }
        
            var s = window.jQuery ? window.jQuery : window.$;
            void 0 !== s && o(s);
        
        t.exports = o;
    }, {
        "../main": 7,
        "../plugin/instances": 18
    } ],
    2: [ function(e, t, n) {
        "use strict";
        n.add = function(e, t) {
            e.classList ? e.classList.add(t) : function(e, t) {
                var n = e.className.split(" ");
                n.indexOf(t) < 0 && n.push(t), e.className = n.join(" ");
            }(e, t);
        }, n.remove = function(e, t) {
            e.classList ? e.classList.remove(t) : function(e, t) {
                var n = e.className.split(" "), i = n.indexOf(t);
                0 <= i && n.splice(i, 1), e.className = n.join(" ");
            }(e, t);
        }, n.list = function(e) {
            return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ");
        };
    }, {} ],
    3: [ function(e, t, n) {
        "use strict";
        var i = {};
        i.e = function(e, t) {
            var n = document.createElement(e);
            return n.className = t, n;
        }, i.appendTo = function(e, t) {
            return t.appendChild(e), e;
        }, i.css = function(e, t, n) {
            return "object" == typeof t ? function(e, t) {
                for (var n in t) {
                    var i = t[n];
                    "number" == typeof i && (i = i.toString() + "px"), e.style[n] = i;
                }
                return e;
            }(e, t) : void 0 === n ? function(e, t) {
                return window.getComputedStyle(e)[t];
            }(e, t) : function(e, t, n) {
                return "number" == typeof n && (n = n.toString() + "px"), e.style[t] = n, e;
            }(e, t, n);
        }, i.matches = function(e, t) {
            return void 0 !== e.matches ? e.matches(t) : void 0 !== e.matchesSelector ? e.matchesSelector(t) : void 0 !== e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : void 0 !== e.mozMatchesSelector ? e.mozMatchesSelector(t) : void 0 !== e.msMatchesSelector ? e.msMatchesSelector(t) : void 0;
        }, i.remove = function(e) {
            void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e);
        }, i.queryChildren = function(e, t) {
            return Array.prototype.filter.call(e.childNodes, function(e) {
                return i.matches(e, t);
            });
        }, t.exports = i;
    }, {} ],
    4: [ function(e, t, n) {
        "use strict";
        function i(e) {
            this.element = e, this.events = {};
        }
        i.prototype.bind = function(e, t) {
            void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1);
        }, i.prototype.unbind = function(t, n) {
            var i = void 0 !== n;
            this.events[t] = this.events[t].filter(function(e) {
                return i && e !== n || (this.element.removeEventListener(t, e, !1), !1);
            }, this);
        }, i.prototype.unbindAll = function() {
            for (var e in this.events) this.unbind(e);
        };
        function r() {
            this.eventElements = [];
        }
        r.prototype.eventElement = function(t) {
            var e = this.eventElements.filter(function(e) {
                return e.element === t;
            })[0];
            return void 0 === e && (e = new i(t), this.eventElements.push(e)), e;
        }, r.prototype.bind = function(e, t, n) {
            this.eventElement(e).bind(t, n);
        }, r.prototype.unbind = function(e, t, n) {
            this.eventElement(e).unbind(t, n);
        }, r.prototype.unbindAll = function() {
            for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll();
        }, r.prototype.once = function(e, t, n) {
            var i = this.eventElement(e), r = function(e) {
                i.unbind(t, r), n(e);
            };
            i.bind(t, r);
        }, t.exports = r;
    }, {} ],
    5: [ function(e, t, n) {
        "use strict";
        function i() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        }
        t.exports = function() {
            return i() + i() + "-" + i() + "-" + i() + "-" + i() + "-" + i() + i() + i();
        };
    }, {} ],
    6: [ function(e, t, n) {
        "use strict";
        var r = e("./class"), i = e("./dom"), o = n.toInt = function(e) {
            return parseInt(e, 10) || 0;
        }, s = n.clone = function(e) {
            if (e) {
                if (e.constructor === Array) return e.map(s);
                if ("object" != typeof e) return e;
                var t = {};
                for (var n in e) t[n] = s(e[n]);
                return t;
            }
            return null;
        };
        n.extend = function(e, t) {
            var n = s(e);
            for (var i in t) n[i] = s(t[i]);
            return n;
        }, n.isEditable = function(e) {
            return i.matches(e, "input,[contenteditable]") || i.matches(e, "select,[contenteditable]") || i.matches(e, "textarea,[contenteditable]") || i.matches(e, "button,[contenteditable]");
        }, n.removePsClasses = function(e) {
            for (var t = r.list(e), n = 0; n < t.length; n++) {
                var i = t[n];
                0 === i.indexOf("ps-") && r.remove(e, i);
            }
        }, n.outerWidth = function(e) {
            return o(i.css(e, "width")) + o(i.css(e, "paddingLeft")) + o(i.css(e, "paddingRight")) + o(i.css(e, "borderLeftWidth")) + o(i.css(e, "borderRightWidth"));
        }, n.startScrolling = function(e, t) {
            r.add(e, "ps-in-scrolling"), void 0 !== t ? r.add(e, "ps-" + t) : (r.add(e, "ps-x"), 
            r.add(e, "ps-y"));
        }, n.stopScrolling = function(e, t) {
            r.remove(e, "ps-in-scrolling"), void 0 !== t ? r.remove(e, "ps-" + t) : (r.remove(e, "ps-x"), 
            r.remove(e, "ps-y"));
        }, n.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            supportsIePointer: null !== window.navigator.msMaxTouchPoints
        };
    }, {
        "./class": 2,
        "./dom": 3
    } ],
    7: [ function(e, t, n) {
        "use strict";
        var i = e("./plugin/destroy"), r = e("./plugin/initialize"), o = e("./plugin/update");
        t.exports = {
            initialize: r,
            update: o,
            destroy: i
        };
    }, {
        "./plugin/destroy": 9,
        "./plugin/initialize": 17,
        "./plugin/update": 21
    } ],
    8: [ function(e, t, n) {
        "use strict";
        t.exports = {
            handlers: [ "click-rail", "drag-scrollbar", "keyboard", "wheel", "touch" ],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default"
        };
    }, {} ],
    9: [ function(e, t, n) {
        "use strict";
        var i = e("../lib/helper"), r = e("../lib/dom"), o = e("./instances");
        t.exports = function(e) {
            var t = o.get(e);
            t && (t.event.unbindAll(), r.remove(t.scrollbarX), r.remove(t.scrollbarY), r.remove(t.scrollbarXRail), 
            r.remove(t.scrollbarYRail), i.removePsClasses(e), o.remove(e));
        };
    }, {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18
    } ],
    10: [ function(e, t, n) {
        "use strict";
        var i = e("../instances"), o = e("../update-geometry"), s = e("../update-scroll");
        t.exports = function(e) {
            !function(n, i) {
                function r(e) {
                    return e.getBoundingClientRect();
                }
                function e(e) {
                    e.stopPropagation();
                }
                i.event.bind(i.scrollbarY, "click", e), i.event.bind(i.scrollbarYRail, "click", function(e) {
                    var t = e.pageY - window.pageYOffset - r(i.scrollbarYRail).top > i.scrollbarYTop ? 1 : -1;
                    s(n, "top", n.scrollTop + t * i.containerHeight), o(n), e.stopPropagation();
                }), i.event.bind(i.scrollbarX, "click", e), i.event.bind(i.scrollbarXRail, "click", function(e) {
                    var t = e.pageX - window.pageXOffset - r(i.scrollbarXRail).left > i.scrollbarXLeft ? 1 : -1;
                    s(n, "left", n.scrollLeft + t * i.containerWidth), o(n), e.stopPropagation();
                });
            }(e, i.get(e));
        };
    }, {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    } ],
    11: [ function(e, t, n) {
        "use strict";
        var a = e("../../lib/helper"), l = e("../../lib/dom"), i = e("../instances"), c = e("../update-geometry"), u = e("../update-scroll");
        function r(r, o) {
            var s = null, t = null;
            function n(e) {
                !function(e) {
                    var t = s + e * o.railXRatio, n = Math.max(0, o.scrollbarXRail.getBoundingClientRect().left) + o.railXRatio * (o.railXWidth - o.scrollbarXWidth);
                    o.scrollbarXLeft = t < 0 ? 0 : n < t ? n : t;
                    var i = a.toInt(o.scrollbarXLeft * (o.contentWidth - o.containerWidth) / (o.containerWidth - o.railXRatio * o.scrollbarXWidth)) - o.negativeScrollAdjustment;
                    u(r, "left", i);
                }(e.pageX - t), c(r), e.stopPropagation(), e.preventDefault();
            }
            function i() {
                a.stopScrolling(r, "x"), o.event.unbind(o.ownerDocument, "mousemove", n);
            }
            o.event.bind(o.scrollbarX, "mousedown", function(e) {
                t = e.pageX, s = a.toInt(l.css(o.scrollbarX, "left")) * o.railXRatio, a.startScrolling(r, "x"), 
                o.event.bind(o.ownerDocument, "mousemove", n), o.event.once(o.ownerDocument, "mouseup", i), 
                e.stopPropagation(), e.preventDefault();
            });
        }
        function o(r, o) {
            var s = null, t = null;
            function n(e) {
                !function(e) {
                    var t = s + e * o.railYRatio, n = Math.max(0, o.scrollbarYRail.getBoundingClientRect().top) + o.railYRatio * (o.railYHeight - o.scrollbarYHeight);
                    o.scrollbarYTop = t < 0 ? 0 : n < t ? n : t;
                    var i = a.toInt(o.scrollbarYTop * (o.contentHeight - o.containerHeight) / (o.containerHeight - o.railYRatio * o.scrollbarYHeight));
                    u(r, "top", i);
                }(e.pageY - t), c(r), e.stopPropagation(), e.preventDefault();
            }
            function i() {
                a.stopScrolling(r, "y"), o.event.unbind(o.ownerDocument, "mousemove", n);
            }
            o.event.bind(o.scrollbarY, "mousedown", function(e) {
                t = e.pageY, s = a.toInt(l.css(o.scrollbarY, "top")) * o.railYRatio, a.startScrolling(r, "y"), 
                o.event.bind(o.ownerDocument, "mousemove", n), o.event.once(o.ownerDocument, "mouseup", i), 
                e.stopPropagation(), e.preventDefault();
            });
        }
        t.exports = function(e) {
            var t = i.get(e);
            r(e, t), o(e, t);
        };
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    } ],
    12: [ function(e, t, n) {
        "use strict";
        var l = e("../../lib/helper"), c = e("../../lib/dom"), i = e("../instances"), u = e("../update-geometry"), f = e("../update-scroll");
        function r(o, s) {
            var a = !1;
            s.event.bind(o, "mouseenter", function() {
                a = !0;
            }), s.event.bind(o, "mouseleave", function() {
                a = !1;
            });
            s.event.bind(s.ownerDocument, "keydown", function(e) {
                if (!(e.isDefaultPrevented && e.isDefaultPrevented() || e.defaultPrevented)) {
                    var t = c.matches(s.scrollbarX, ":focus") || c.matches(s.scrollbarY, ":focus");
                    if (a || t) {
                        var n = document.activeElement ? document.activeElement : s.ownerDocument.activeElement;
                        if (n) {
                            if ("IFRAME" === n.tagName) n = n.contentDocument.activeElement; else for (;n.shadowRoot; ) n = n.shadowRoot.activeElement;
                            if (l.isEditable(n)) return;
                        }
                        var i = 0, r = 0;
                        switch (e.which) {
                          case 37:
                            i = e.metaKey ? -s.contentWidth : e.altKey ? -s.containerWidth : -30;
                            break;

                          case 38:
                            r = e.metaKey ? s.contentHeight : e.altKey ? s.containerHeight : 30;
                            break;

                          case 39:
                            i = e.metaKey ? s.contentWidth : e.altKey ? s.containerWidth : 30;
                            break;

                          case 40:
                            r = e.metaKey ? -s.contentHeight : e.altKey ? -s.containerHeight : -30;
                            break;

                          case 33:
                            r = 90;
                            break;

                          case 32:
                            r = e.shiftKey ? 90 : -90;
                            break;

                          case 34:
                            r = -90;
                            break;

                          case 35:
                            r = e.ctrlKey ? -s.contentHeight : -s.containerHeight;
                            break;

                          case 36:
                            r = e.ctrlKey ? o.scrollTop : s.containerHeight;
                            break;

                          default:
                            return;
                        }
                        f(o, "top", o.scrollTop - r), f(o, "left", o.scrollLeft + i), u(o), function(e, t) {
                            var n = o.scrollTop;
                            if (0 === e) {
                                if (!s.scrollbarYActive) return !1;
                                if (0 === n && 0 < t || n >= s.contentHeight - s.containerHeight && t < 0) return !s.settings.wheelPropagation;
                            }
                            var i = o.scrollLeft;
                            if (0 === t) {
                                if (!s.scrollbarXActive) return !1;
                                if (0 === i && e < 0 || i >= s.contentWidth - s.containerWidth && 0 < e) return !s.settings.wheelPropagation;
                            }
                            return !0;
                        }(i, r) && e.preventDefault();
                    }
                }
            });
        }
        t.exports = function(e) {
            r(e, i.get(e));
        };
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    } ],
    13: [ function(e, t, n) {
        "use strict";
        var i = e("../instances"), a = e("../update-geometry"), l = e("../update-scroll");
        function r(o, r) {
            var s = !1;
            function e(e) {
                var t = function(e) {
                    var t = e.deltaX, n = -1 * e.deltaY;
                    return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), 
                    e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, 
                    n = e.wheelDelta), e.shiftKey ? [ -n, -t ] : [ t, n ];
                }(e), n = t[0], i = t[1];
                !function(e, t) {
                    var n = o.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                    if (n) {
                        if (!window.getComputedStyle(n).overflow.match(/(scroll|auto)/)) return !1;
                        var i = n.scrollHeight - n.clientHeight;
                        if (0 < i && !(0 === n.scrollTop && 0 < t || n.scrollTop === i && t < 0)) return !0;
                        var r = n.scrollLeft - n.clientWidth;
                        if (0 < r && !(0 === n.scrollLeft && e < 0 || n.scrollLeft === r && 0 < e)) return !0;
                    }
                    return !1;
                }(n, i) && (s = !1, r.settings.useBothWheelAxes ? r.scrollbarYActive && !r.scrollbarXActive ? (l(o, "top", i ? o.scrollTop - i * r.settings.wheelSpeed : o.scrollTop + n * r.settings.wheelSpeed), 
                s = !0) : r.scrollbarXActive && !r.scrollbarYActive && (l(o, "left", n ? o.scrollLeft + n * r.settings.wheelSpeed : o.scrollLeft - i * r.settings.wheelSpeed), 
                s = !0) : (l(o, "top", o.scrollTop - i * r.settings.wheelSpeed), l(o, "left", o.scrollLeft + n * r.settings.wheelSpeed)), 
                a(o), (s = s || function(e, t) {
                    var n = o.scrollTop;
                    if (0 === e) {
                        if (!r.scrollbarYActive) return !1;
                        if (0 === n && 0 < t || n >= r.contentHeight - r.containerHeight && t < 0) return !r.settings.wheelPropagation;
                    }
                    var i = o.scrollLeft;
                    if (0 === t) {
                        if (!r.scrollbarXActive) return !1;
                        if (0 === i && e < 0 || i >= r.contentWidth - r.containerWidth && 0 < e) return !r.settings.wheelPropagation;
                    }
                    return !0;
                }(n, i)) && (e.stopPropagation(), e.preventDefault()));
            }
            void 0 !== window.onwheel ? r.event.bind(o, "wheel", e) : void 0 !== window.onmousewheel && r.event.bind(o, "mousewheel", e);
        }
        t.exports = function(e) {
            r(e, i.get(e));
        };
    }, {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    } ],
    14: [ function(e, t, n) {
        "use strict";
        var i = e("../instances"), r = e("../update-geometry");
        t.exports = function(e) {
            !function(e, t) {
                t.event.bind(e, "scroll", function() {
                    r(e);
                });
            }(e, i.get(e));
        };
    }, {
        "../instances": 18,
        "../update-geometry": 19
    } ],
    15: [ function(e, t, n) {
        "use strict";
        var d = e("../../lib/helper"), h = e("../instances"), p = e("../update-geometry"), g = e("../update-scroll");
        function i(a, e) {
            var l = null, c = {
                top: 0,
                left: 0
            };
            function u() {
                l && (clearInterval(l), l = null), d.stopScrolling(a);
            }
            var f = !1;
            e.event.bind(e.ownerDocument, "selectionchange", function() {
                a.contains(function() {
                    var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                    return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer;
                }()) ? f = !0 : (f = !1, u());
            }), e.event.bind(window, "mouseup", function() {
                f && (f = !1, u());
            }), e.event.bind(window, "keyup", function() {
                f && (f = !1, u());
            }), e.event.bind(window, "mousemove", function(e) {
                if (f) {
                    var t = e.pageX, n = e.pageY, i = a.offsetLeft, r = a.offsetLeft + a.offsetWidth, o = a.offsetTop, s = a.offsetTop + a.offsetHeight;
                    t < i + 3 ? (c.left = -5, d.startScrolling(a, "x")) : r - 3 < t ? (c.left = 5, d.startScrolling(a, "x")) : c.left = 0, 
                    n < o + 3 ? (c.top = o + 3 - n < 5 ? -5 : -20, d.startScrolling(a, "y")) : s - 3 < n ? (c.top = n - s + 3 < 5 ? 5 : 20, 
                    d.startScrolling(a, "y")) : c.top = 0, 0 === c.top && 0 === c.left ? u() : l = l || setInterval(function() {
                        h.get(a) ? (g(a, "top", a.scrollTop + c.top), g(a, "left", a.scrollLeft + c.left), 
                        p(a)) : clearInterval(l);
                    }, 50);
                }
            });
        }
        t.exports = function(e) {
            i(e, h.get(e));
        };
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    } ],
    16: [ function(e, t, n) {
        "use strict";
        var i = e("../../lib/helper"), y = e("../instances"), b = e("../update-geometry"), _ = e("../update-scroll");
        function r(a, l, e, t) {
            function c(e, t) {
                _(a, "top", a.scrollTop - t), _(a, "left", a.scrollLeft - e), b(a);
            }
            var u = {}, f = 0, d = {}, n = null, h = !1, p = !1;
            function i() {
                h = !0;
            }
            function r() {
                h = !1;
            }
            function g(e) {
                return e.targetTouches ? e.targetTouches[0] : e;
            }
            function m(e) {
                return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE);
            }
            function v(e) {
                if (m(e)) {
                    p = !0;
                    var t = g(e);
                    u.pageX = t.pageX, u.pageY = t.pageY, f = new Date().getTime(), null !== n && clearInterval(n), 
                    e.stopPropagation();
                }
            }
            function o(e) {
                if (!p && l.settings.swipePropagation && v(e), !h && p && m(e)) {
                    var t = g(e), n = {
                        pageX: t.pageX,
                        pageY: t.pageY
                    }, i = n.pageX - u.pageX, r = n.pageY - u.pageY;
                    c(i, r), u = n;
                    var o = new Date().getTime(), s = o - f;
                    0 < s && (d.x = i / s, d.y = r / s, f = o), function(e, t) {
                        var n = a.scrollTop, i = a.scrollLeft, r = Math.abs(e), o = Math.abs(t);
                        if (r < o) {
                            if (t < 0 && n === l.contentHeight - l.containerHeight || 0 < t && 0 === n) return !l.settings.swipePropagation;
                        } else if (o < r && (e < 0 && i === l.contentWidth - l.containerWidth || 0 < e && 0 === i)) return !l.settings.swipePropagation;
                        return !0;
                    }(i, r) && (e.stopPropagation(), e.preventDefault());
                }
            }
            function s() {
                !h && p && (p = !1, clearInterval(n), n = setInterval(function() {
                    y.get(a) && (d.x || d.y) ? Math.abs(d.x) < .01 && Math.abs(d.y) < .01 ? clearInterval(n) : (c(30 * d.x, 30 * d.y), 
                    d.x *= .8, d.y *= .8) : clearInterval(n);
                }, 10));
            }
            e ? (l.event.bind(window, "touchstart", i), l.event.bind(window, "touchend", r), 
            l.event.bind(a, "touchstart", v), l.event.bind(a, "touchmove", o), l.event.bind(a, "touchend", s)) : t && (window.PointerEvent ? (l.event.bind(window, "pointerdown", i), 
            l.event.bind(window, "pointerup", r), l.event.bind(a, "pointerdown", v), l.event.bind(a, "pointermove", o), 
            l.event.bind(a, "pointerup", s)) : window.MSPointerEvent && (l.event.bind(window, "MSPointerDown", i), 
            l.event.bind(window, "MSPointerUp", r), l.event.bind(a, "MSPointerDown", v), l.event.bind(a, "MSPointerMove", o), 
            l.event.bind(a, "MSPointerUp", s)));
        }
        t.exports = function(e) {
            (i.env.supportsTouch || i.env.supportsIePointer) && r(e, y.get(e), i.env.supportsTouch, i.env.supportsIePointer);
        };
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    } ],
    17: [ function(e, t, n) {
        "use strict";
        var i = e("../lib/helper"), r = e("../lib/class"), o = e("./instances"), s = e("./update-geometry"), a = {
            "click-rail": e("./handler/click-rail"),
            "drag-scrollbar": e("./handler/drag-scrollbar"),
            keyboard: e("./handler/keyboard"),
            wheel: e("./handler/mouse-wheel"),
            touch: e("./handler/touch"),
            selection: e("./handler/selection")
        }, l = e("./handler/native-scroll");
        t.exports = function(t, e) {
            e = "object" == typeof e ? e : {}, r.add(t, "ps-container");
            var n = o.add(t);
            n.settings = i.extend(n.settings, e), r.add(t, "ps-theme-" + n.settings.theme), 
            n.settings.handlers.forEach(function(e) {
                a[e](t);
            }), l(t), s(t);
        };
    }, {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    } ],
    18: [ function(e, t, n) {
        "use strict";
        var s = e("../lib/helper"), a = e("../lib/class"), l = e("./default-setting"), c = e("../lib/dom"), u = e("../lib/event-manager"), i = e("../lib/guid"), r = {};
        function o(e) {
            var t, n, i = this;
            function r() {
                a.add(e, "ps-focus");
            }
            function o() {
                a.remove(e, "ps-focus");
            }
            i.settings = s.clone(l), i.containerWidth = null, i.containerHeight = null, i.contentWidth = null, 
            i.contentHeight = null, i.isRtl = "rtl" === c.css(e, "direction"), i.isNegativeScroll = (n = e.scrollLeft, 
            e.scrollLeft = -1, t = e.scrollLeft < 0, e.scrollLeft = n, t), i.negativeScrollAdjustment = i.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, 
            i.event = new u(), i.ownerDocument = e.ownerDocument || document, i.scrollbarXRail = c.appendTo(c.e("div", "ps-scrollbar-x-rail"), e), 
            i.scrollbarX = c.appendTo(c.e("div", "ps-scrollbar-x"), i.scrollbarXRail), i.scrollbarX.setAttribute("tabindex", 0), 
            i.event.bind(i.scrollbarX, "focus", r), i.event.bind(i.scrollbarX, "blur", o), i.scrollbarXActive = null, 
            i.scrollbarXWidth = null, i.scrollbarXLeft = null, i.scrollbarXBottom = s.toInt(c.css(i.scrollbarXRail, "bottom")), 
            i.isScrollbarXUsingBottom = i.scrollbarXBottom == i.scrollbarXBottom, i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : s.toInt(c.css(i.scrollbarXRail, "top")), 
            i.railBorderXWidth = s.toInt(c.css(i.scrollbarXRail, "borderLeftWidth")) + s.toInt(c.css(i.scrollbarXRail, "borderRightWidth")), 
            c.css(i.scrollbarXRail, "display", "block"), i.railXMarginWidth = s.toInt(c.css(i.scrollbarXRail, "marginLeft")) + s.toInt(c.css(i.scrollbarXRail, "marginRight")), 
            c.css(i.scrollbarXRail, "display", ""), i.railXWidth = null, i.railXRatio = null, 
            i.scrollbarYRail = c.appendTo(c.e("div", "ps-scrollbar-y-rail"), e), i.scrollbarY = c.appendTo(c.e("div", "ps-scrollbar-y"), i.scrollbarYRail), 
            i.scrollbarY.setAttribute("tabindex", 0), i.event.bind(i.scrollbarY, "focus", r), 
            i.event.bind(i.scrollbarY, "blur", o), i.scrollbarYActive = null, i.scrollbarYHeight = null, 
            i.scrollbarYTop = null, i.scrollbarYRight = s.toInt(c.css(i.scrollbarYRail, "right")), 
            i.isScrollbarYUsingRight = i.scrollbarYRight == i.scrollbarYRight, i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : s.toInt(c.css(i.scrollbarYRail, "left")), 
            i.scrollbarYOuterWidth = i.isRtl ? s.outerWidth(i.scrollbarY) : null, i.railBorderYWidth = s.toInt(c.css(i.scrollbarYRail, "borderTopWidth")) + s.toInt(c.css(i.scrollbarYRail, "borderBottomWidth")), 
            c.css(i.scrollbarYRail, "display", "block"), i.railYMarginHeight = s.toInt(c.css(i.scrollbarYRail, "marginTop")) + s.toInt(c.css(i.scrollbarYRail, "marginBottom")), 
            c.css(i.scrollbarYRail, "display", ""), i.railYHeight = null, i.railYRatio = null;
        }
        function f(e) {
            return e.getAttribute("data-ps-id");
        }
        n.add = function(e) {
            var t = i();
            return function(e, t) {
                e.setAttribute("data-ps-id", t);
            }(e, t), r[t] = new o(e), r[t];
        }, n.remove = function(e) {
            delete r[f(e)], function(e) {
                e.removeAttribute("data-ps-id");
            }(e);
        }, n.get = function(e) {
            return r[f(e)];
        };
    }, {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8
    } ],
    19: [ function(e, t, n) {
        "use strict";
        var i = e("../lib/helper"), r = e("../lib/class"), o = e("../lib/dom"), s = e("./instances"), a = e("./update-scroll");
        function l(e, t) {
            return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), 
            e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), 
            t;
        }
        t.exports = function(e) {
            var t, n = s.get(e);
            n.containerWidth = e.clientWidth, n.containerHeight = e.clientHeight, n.contentWidth = e.scrollWidth, 
            n.contentHeight = e.scrollHeight, e.contains(n.scrollbarXRail) || (0 < (t = o.queryChildren(e, ".ps-scrollbar-x-rail")).length && t.forEach(function(e) {
                o.remove(e);
            }), o.appendTo(n.scrollbarXRail, e)), e.contains(n.scrollbarYRail) || (0 < (t = o.queryChildren(e, ".ps-scrollbar-y-rail")).length && t.forEach(function(e) {
                o.remove(e);
            }), o.appendTo(n.scrollbarYRail, e)), !n.settings.suppressScrollX && n.containerWidth + n.settings.scrollXMarginOffset < n.contentWidth ? (n.scrollbarXActive = !0, 
            n.railXWidth = n.containerWidth - n.railXMarginWidth, n.railXRatio = n.containerWidth / n.railXWidth, 
            n.scrollbarXWidth = l(n, i.toInt(n.railXWidth * n.containerWidth / n.contentWidth)), 
            n.scrollbarXLeft = i.toInt((n.negativeScrollAdjustment + e.scrollLeft) * (n.railXWidth - n.scrollbarXWidth) / (n.contentWidth - n.containerWidth))) : n.scrollbarXActive = !1, 
            !n.settings.suppressScrollY && n.containerHeight + n.settings.scrollYMarginOffset < n.contentHeight ? (n.scrollbarYActive = !0, 
            n.railYHeight = n.containerHeight - n.railYMarginHeight, n.railYRatio = n.containerHeight / n.railYHeight, 
            n.scrollbarYHeight = l(n, i.toInt(n.railYHeight * n.containerHeight / n.contentHeight)), 
            n.scrollbarYTop = i.toInt(e.scrollTop * (n.railYHeight - n.scrollbarYHeight) / (n.contentHeight - n.containerHeight))) : n.scrollbarYActive = !1, 
            n.scrollbarXLeft >= n.railXWidth - n.scrollbarXWidth && (n.scrollbarXLeft = n.railXWidth - n.scrollbarXWidth), 
            n.scrollbarYTop >= n.railYHeight - n.scrollbarYHeight && (n.scrollbarYTop = n.railYHeight - n.scrollbarYHeight), 
            function(e, t) {
                var n = {
                    width: t.railXWidth
                };
                t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : n.left = e.scrollLeft, 
                t.isScrollbarXUsingBottom ? n.bottom = t.scrollbarXBottom - e.scrollTop : n.top = t.scrollbarXTop + e.scrollTop, 
                o.css(t.scrollbarXRail, n);
                var i = {
                    top: e.scrollTop,
                    height: t.railYHeight
                };
                t.isScrollbarYUsingRight ? t.isRtl ? i.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : i.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : i.left = t.scrollbarYLeft + e.scrollLeft, 
                o.css(t.scrollbarYRail, i), o.css(t.scrollbarX, {
                    left: t.scrollbarXLeft,
                    width: t.scrollbarXWidth - t.railBorderXWidth
                }), o.css(t.scrollbarY, {
                    top: t.scrollbarYTop,
                    height: t.scrollbarYHeight - t.railBorderYWidth
                });
            }(e, n), n.scrollbarXActive ? r.add(e, "ps-active-x") : (r.remove(e, "ps-active-x"), 
            n.scrollbarXWidth = 0, n.scrollbarXLeft = 0, a(e, "left", 0)), n.scrollbarYActive ? r.add(e, "ps-active-y") : (r.remove(e, "ps-active-y"), 
            n.scrollbarYHeight = 0, n.scrollbarYTop = 0, a(e, "top", 0));
        };
    }, {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-scroll": 20
    } ],
    20: [ function(e, t, n) {
        "use strict";
        function r(e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !0), t;
        }
        var o, s, a = e("./instances");
        t.exports = function(e, t, n) {
            if (void 0 === e) throw "You must provide an element to the update-scroll function";
            if (void 0 === t) throw "You must provide an axis to the update-scroll function";
            if (void 0 === n) throw "You must provide a value to the update-scroll function";
            "top" === t && n <= 0 && (e.scrollTop = n = 0, e.dispatchEvent(r("ps-y-reach-start"))), 
            "left" === t && n <= 0 && (e.scrollLeft = n = 0, e.dispatchEvent(r("ps-x-reach-start")));
            var i = a.get(e);
            "top" === t && n >= i.contentHeight - i.containerHeight && ((n = i.contentHeight - i.containerHeight) - e.scrollTop <= 1 ? n = e.scrollTop : e.scrollTop = n, 
            e.dispatchEvent(r("ps-y-reach-end"))), "left" === t && n >= i.contentWidth - i.containerWidth && ((n = i.contentWidth - i.containerWidth) - e.scrollLeft <= 1 ? n = e.scrollLeft : e.scrollLeft = n, 
            e.dispatchEvent(r("ps-x-reach-end"))), o = o || e.scrollTop, s = s || e.scrollLeft, 
            "top" === t && n < o && e.dispatchEvent(r("ps-scroll-up")), "top" === t && o < n && e.dispatchEvent(r("ps-scroll-down")), 
            "left" === t && n < s && e.dispatchEvent(r("ps-scroll-left")), "left" === t && s < n && e.dispatchEvent(r("ps-scroll-right")), 
            "top" === t && (e.scrollTop = o = n, e.dispatchEvent(r("ps-scroll-y"))), "left" === t && (e.scrollLeft = s = n, 
            e.dispatchEvent(r("ps-scroll-x")));
        };
    }, {
        "./instances": 18
    } ],
    21: [ function(e, t, n) {
        "use strict";
        var i = e("../lib/helper"), r = e("../lib/dom"), o = e("./instances"), s = e("./update-geometry"), a = e("./update-scroll");
        t.exports = function(e) {
            var t = o.get(e);
            t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, 
            r.css(t.scrollbarXRail, "display", "block"), r.css(t.scrollbarYRail, "display", "block"), 
            t.railXMarginWidth = i.toInt(r.css(t.scrollbarXRail, "marginLeft")) + i.toInt(r.css(t.scrollbarXRail, "marginRight")), 
            t.railYMarginHeight = i.toInt(r.css(t.scrollbarYRail, "marginTop")) + i.toInt(r.css(t.scrollbarYRail, "marginBottom")), 
            r.css(t.scrollbarXRail, "display", "none"), r.css(t.scrollbarYRail, "display", "none"), 
            s(e), a(e, "top", e.scrollTop), a(e, "left", e.scrollLeft), r.css(t.scrollbarXRail, "display", ""), 
            r.css(t.scrollbarYRail, "display", ""));
        };
    }, {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-geometry": 19,
        "./update-scroll": 20
    } ]
}, {}, [ 1 ]);

var _self = "undefined" != typeof window ? window : {}, Prism = function(c) {
    var u = /\blang(?:uage)?-([\w-]+)\b/i, t = 0, I = {
        manual: c.Prism && c.Prism.manual,
        disableWorkerMessageHandler: c.Prism && c.Prism.disableWorkerMessageHandler,
        util: {
            encode: function(e) {
                return e instanceof O ? new O(e.type, I.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(I.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            },
            type: function(e) {
                return Object.prototype.toString.call(e).slice(8, -1);
            },
            objId: function(e) {
                return e.__id || Object.defineProperty(e, "__id", {
                    value: ++t
                }), e.__id;
            },
            clone: function n(e, i) {
                var r, t, o = I.util.type(e);
                switch (i = i || {}, o) {
                  case "Object":
                    if (t = I.util.objId(e), i[t]) return i[t];
                    for (var s in r = {}, i[t] = r, e) e.hasOwnProperty(s) && (r[s] = n(e[s], i));
                    return r;

                  case "Array":
                    return t = I.util.objId(e), i[t] ? i[t] : (r = [], i[t] = r, e.forEach(function(e, t) {
                        r[t] = n(e, i);
                    }), r);

                  default:
                    return e;
                }
            }
        },
        languages: {
            extend: function(e, t) {
                var n = I.util.clone(I.languages[e]);
                for (var i in t) n[i] = t[i];
                return n;
            },
            insertBefore: function(n, e, t, i) {
                var r = (i = i || I.languages)[n], o = {};
                for (var s in r) if (r.hasOwnProperty(s)) {
                    if (s == e) for (var a in t) t.hasOwnProperty(a) && (o[a] = t[a]);
                    t.hasOwnProperty(s) || (o[s] = r[s]);
                }
                var l = i[n];
                return i[n] = o, I.languages.DFS(I.languages, function(e, t) {
                    t === l && e != n && (this[e] = o);
                }), o;
            },
            DFS: function e(t, n, i, r) {
                r = r || {};
                var o = I.util.objId;
                for (var s in t) if (t.hasOwnProperty(s)) {
                    n.call(t, s, t[s], i || s);
                    var a = t[s], l = I.util.type(a);
                    "Object" !== l || r[o(a)] ? "Array" !== l || r[o(a)] || (r[o(a)] = !0, e(a, n, s, r)) : (r[o(a)] = !0, 
                    e(a, n, null, r));
                }
            }
        },
        plugins: {},
        highlightAll: function(e, t) {
            I.highlightAllUnder(document, e, t);
        },
        highlightAllUnder: function(e, t, n) {
            var i = {
                callback: n,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            I.hooks.run("before-highlightall", i);
            for (var r, o = i.elements || e.querySelectorAll(i.selector), s = 0; r = o[s++]; ) I.highlightElement(r, !0 === t, i.callback);
        },
        highlightElement: function(e, t, n) {
            for (var i, r = "none", o = e; o && !u.test(o.className); ) o = o.parentNode;
            o && (r = (o.className.match(u) || [ , "none" ])[1].toLowerCase(), i = I.languages[r]), 
            e.className = e.className.replace(u, "").replace(/\s+/g, " ") + " language-" + r, 
            e.parentNode && (o = e.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(u, "").replace(/\s+/g, " ") + " language-" + r));
            function s(e) {
                a.highlightedCode = e, I.hooks.run("before-insert", a), a.element.innerHTML = a.highlightedCode, 
                I.hooks.run("after-highlight", a), I.hooks.run("complete", a), n && n.call(a.element);
            }
            var a = {
                element: e,
                language: r,
                grammar: i,
                code: e.textContent
            };
            if (I.hooks.run("before-sanity-check", a), a.code) if (I.hooks.run("before-highlight", a), 
            a.grammar) if (t && c.Worker) {
                var l = new Worker(I.filename);
                l.onmessage = function(e) {
                    s(e.data);
                }, l.postMessage(JSON.stringify({
                    language: a.language,
                    code: a.code,
                    immediateClose: !0
                }));
            } else s(I.highlight(a.code, a.grammar, a.language)); else s(I.util.encode(a.code)); else I.hooks.run("complete", a);
        },
        highlight: function(e, t, n) {
            var i = {
                code: e,
                grammar: t,
                language: n
            };
            return I.hooks.run("before-tokenize", i), i.tokens = I.tokenize(i.code, i.grammar), 
            I.hooks.run("after-tokenize", i), O.stringify(I.util.encode(i.tokens), i.language);
        },
        matchGrammar: function(e, t, n, i, r, o, s) {
            for (var a in n) if (n.hasOwnProperty(a) && n[a]) {
                if (a == s) return;
                var l = n[a];
                l = "Array" === I.util.type(l) ? l : [ l ];
                for (var c = 0; c < l.length; ++c) {
                    var u = l[c], f = u.inside, d = !!u.lookbehind, h = !!u.greedy, p = 0, g = u.alias;
                    if (h && !u.pattern.global) {
                        var m = u.pattern.toString().match(/[imuy]*$/)[0];
                        u.pattern = RegExp(u.pattern.source, m + "g");
                    }
                    u = u.pattern || u;
                    for (var v = i, y = r; v < t.length; y += t[v].length, ++v) {
                        var b = t[v];
                        if (t.length > e.length) return;
                        if (!(b instanceof O)) {
                            if (h && v != t.length - 1) {
                                if (u.lastIndex = y, !(C = u.exec(e))) break;
                                for (var _ = C.index + (d ? C[1].length : 0), w = C.index + C[0].length, E = v, x = y, T = t.length; E < T && (x < w || !t[E].type && !t[E - 1].greedy); ++E) (x += t[E].length) <= _ && (++v, 
                                y = x);
                                if (t[v] instanceof O) continue;
                                S = E - v, b = e.slice(y, x), C.index -= y;
                            } else {
                                u.lastIndex = 0;
                                var C = u.exec(b), S = 1;
                            }
                            if (C) {
                                d && (p = C[1] ? C[1].length : 0), w = (_ = C.index + p) + (C = C[0].slice(p)).length;
                                var A = b.slice(0, _), D = b.slice(w), k = [ v, S ];
                                A && (++v, y += A.length, k.push(A));
                                var N = new O(a, f ? I.tokenize(C, f) : C, g, C, h);
                                if (k.push(N), D && k.push(D), Array.prototype.splice.apply(t, k), 1 != S && I.matchGrammar(e, t, n, v, y, !0, a), 
                                o) break;
                            } else if (o) break;
                        }
                    }
                }
            }
        },
        tokenize: function(e, t) {
            var n = [ e ], i = t.rest;
            if (i) {
                for (var r in i) t[r] = i[r];
                delete t.rest;
            }
            return I.matchGrammar(e, n, t, 0, 0, !1), n;
        },
        hooks: {
            all: {},
            add: function(e, t) {
                var n = I.hooks.all;
                n[e] = n[e] || [], n[e].push(t);
            },
            run: function(e, t) {
                var n = I.hooks.all[e];
                if (n && n.length) for (var i, r = 0; i = n[r++]; ) i(t);
            }
        },
        Token: O
    };
    function O(e, t, n, i, r) {
        this.type = e, this.content = t, this.alias = n, this.length = 0 | (i || "").length, 
        this.greedy = !!r;
    }
    if (c.Prism = I, O.stringify = function(e, t) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return e.map(function(e) {
            return O.stringify(e, t);
        }).join("");
        var n = {
            type: e.type,
            content: O.stringify(e.content, t),
            tag: "span",
            classes: [ "token", e.type ],
            attributes: {},
            language: t
        };
        if (e.alias) {
            var i = Array.isArray(e.alias) ? e.alias : [ e.alias ];
            Array.prototype.push.apply(n.classes, i);
        }
        I.hooks.run("wrap", n);
        var r = Object.keys(n.attributes).map(function(e) {
            return e + '="' + (n.attributes[e] || "").replace(/"/g, "&quot;") + '"';
        }).join(" ");
        return "<" + n.tag + ' class="' + n.classes.join(" ") + '"' + (r ? " " + r : "") + ">" + n.content + "</" + n.tag + ">";
    }, !c.document) return c.addEventListener && (I.disableWorkerMessageHandler || c.addEventListener("message", function(e) {
        var t = JSON.parse(e.data), n = t.language, i = t.code, r = t.immediateClose;
        c.postMessage(I.highlight(i, I.languages[n], n)), r && c.close();
    }, !1)), I;
    var e = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    return e && (I.filename = e.src, I.manual || e.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(I.highlightAll) : window.setTimeout(I.highlightAll, 16) : document.addEventListener("DOMContentLoaded", I.highlightAll))), 
    I;
}(_self);

"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), 
Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                inside: {
                    punctuation: [ /^=/, {
                        pattern: /^(\s*)["']|["']$/,
                        lookbehind: !0
                    } ]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, 
Prism.hooks.add("wrap", function(e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function(e, t) {
        var n = {};
        n["language-" + t] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[t]
        }, n.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var i = {
            "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n
            }
        };
        i["language-" + t] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[t]
        };
        var r = {};
        r[e] = {
            pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, e), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: i
        }, Prism.languages.insertBefore("markup", "cdata", r);
    }
}), Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, 
Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, 
function(e) {
    var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    e.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
            inside: {
                rule: /@[\w-]+/
            }
        },
        url: {
            pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
            inside: {
                "function": /^url/i,
                punctuation: /^\(|\)$/
            }
        },
        selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
        string: {
            pattern: t,
            greedy: !0
        },
        property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        important: /!important\b/i,
        "function": /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:,]/
    }, e.languages.css.atrule.inside.rest = e.languages.css;
    var n = e.languages.markup;
    n && (n.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
                "attr-name": {
                    pattern: /^\s*style/i,
                    inside: n.tag.inside
                },
                punctuation: /^\s*=\s*['"]|['"]\s*$/,
                "attr-value": {
                    pattern: /.+/i,
                    inside: e.languages.css
                }
            },
            alias: "language-css"
        }
    }, n.tag));
}(Prism), Prism.languages.clike = {
    comment: [ {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    } ],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    "boolean": /\b(?:true|false)\b/,
    "function": /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [ Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: !0
    } ],
    keyword: [ {
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: !0
    }, {
        pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
    } ],
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    "function": /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, 
Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
        alias: "function"
    },
    parameter: [ {
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
    }, {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    } ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|[^\\`])*`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\${|}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    }
}), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), 
Prism.languages.js = Prism.languages.javascript;