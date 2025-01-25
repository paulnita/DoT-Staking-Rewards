        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function(n, r) {
        "use strict";
        var a = [],
            o = n.document,
            l = Object.getPrototypeOf,
            s = a.slice,
            d = a.concat,
            u = a.push,
            c = a.indexOf,
            h = {},
            p = h.toString,
            f = h.hasOwnProperty,
            m = f.toString,
            g = m.call(Object),
            _ = {},
            y = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            },
            v = function(e) {
                return null != e && e === e.window
            },
            M = {
                type: !0,
                src: !0,
                noModule: !0
            };

        function b(e, t, n) {
            var i, r = (t = t || o).createElement("script");
            if (r.text = e, n)
                for (i in M) n[i] && (r[i] = n[i]);
            t.head.appendChild(r).parentNode.removeChild(r)
        }

        function w(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? h[p.call(e)] || "object" : typeof e
        }
        var L = function(e, t) {
                return new L.fn.init(e, t)
            },
            D = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function T(e) {
            var t = !!e && "length" in e && e.length,
                n = w(e);
            return !y(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        L.fn = L.prototype = {
            jquery: "3.3.1",
            constructor: L,
            length: 0,
            toArray: function() {
                return s.call(this)
            },
            get: function(e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = L.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return L.each(this, e)
            },
            map: function(e) {
                return this.pushStack(L.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(s.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: a.sort,
            splice: a.splice
        }, L.extend = L.fn.extend = function() {
            var e, t, n, i, r, a, o = arguments[0] || {},
                l = 1,
                s = arguments.length,
                d = !1;
            for ("boolean" == typeof o && (d = o, o = arguments[l] || {}, l++), "object" == typeof o || y(o) || (o = {}), l === s && (o = this, l--); l < s; l++)
                if (null != (e = arguments[l]))
                    for (t in e) n = o[t], o !== (i = e[t]) && (d && i && (L.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, a = n && Array.isArray(n) ? n : []) : a = n && L.isPlainObject(n) ? n : {}, o[t] = L.extend(d, a, i)) : void 0 !== i && (o[t] = i));
            return o
        }, L.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== p.call(e)) && (!(t = l(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && m.call(n) === g)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            globalEval: function(e) {
                b(e)
            },
            each: function(e, t) {
                var n, i = 0;
                if (T(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(D, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (T(Object(e)) ? L.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : c.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i = [], r = 0, a = e.length, o = !n; r < a; r++) !t(e[r], r) !== o && i.push(e[r]);
                return i
            },
            map: function(e, t, n) {
                var i, r, a = 0,
                    o = [];
                if (T(e))
                    for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && o.push(r);
                else
                    for (a in e) null != (r = t(e[a], a, n)) && o.push(r);
                return d.apply([], o)
            },
            guid: 1,
            support: _
        }), "function" == typeof Symbol && (L.fn[Symbol.iterator] = a[Symbol.iterator]), L.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            h["[object " + t + "]"] = t.toLowerCase()
        });
        var k =
            /*!
             * Sizzle CSS Selector Engine v2.3.3
             * https://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2016-08-08
             */
            function(e) {
                var t, n, i, r, a, o, l, s, d, u, c, h, p, f, m, g, _, y, v, M = "sizzle" + 1 * new Date,
                    b = e.document,
                    w = 0,
                    L = 0,
                    D = oe(),
                    T = oe(),
                    k = oe(),
                    S = function(e, t) {
                        return e === t && (c = !0), 0
                    },
                    x = {}.hasOwnProperty,
                    Y = [],
                    E = Y.pop,
                    C = Y.push,
                    H = Y.push,
                    P = Y.slice,
                    O = function(e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    A = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    I = "[\\x20\\t\\r\\n\\f]",
                    R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    j = "\\[" + I + "*(" + R + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + I + "*\\]",
                    F = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
                    N = new RegExp(I + "+", "g"),
                    W = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
                    z = new RegExp("^" + I + "*," + I + "*"),
                    B = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
                    V = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
                    G = new RegExp(F),
                    U = new RegExp("^" + R + "$"),
                    Z = {
                        ID: new RegExp("^#(" + R + ")"),
                        CLASS: new RegExp("^\\.(" + R + ")"),
                        TAG: new RegExp("^(" + R + "|[*])"),
                        ATTR: new RegExp("^" + j),
                        PSEUDO: new RegExp("^" + F),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + A + ")$", "i"),
                        needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
                    },
                    q = /^(?:input|select|textarea|button)$/i,
                    X = /^h\d$/i,
                    J = /^[^{]+\{\s*\[native \w/,
                    $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    K = /[+~]/,
                    Q = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
                    ee = function(e, t, n) {
                        var i = "0x" + t - 65536;
                        return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ne = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    ie = function() {
                        h()
                    },
                    re = ye(function(e) {
                        return !0 === e.disabled && ("form" in e || "label" in e)
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    H.apply(Y = P.call(b.childNodes), b.childNodes), Y[b.childNodes.length].nodeType
                } catch (e) {
                    H = {
                        apply: Y.length ? function(e, t) {
                            C.apply(e, P.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }

                function ae(e, t, i, r) {
                    var a, l, d, u, c, f, _, y = t && t.ownerDocument,
                        w = t ? t.nodeType : 9;
                    if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return i;
                    if (!r && ((t ? t.ownerDocument || t : b) !== p && h(t), t = t || p, m)) {
                        if (11 !== w && (c = $.exec(e)))
                            if (a = c[1]) {
                                if (9 === w) {
                                    if (!(d = t.getElementById(a))) return i;
                                    if (d.id === a) return i.push(d), i
                                } else if (y && (d = y.getElementById(a)) && v(t, d) && d.id === a) return i.push(d), i
                            } else {
                                if (c[2]) return H.apply(i, t.getElementsByTagName(e)), i;
                                if ((a = c[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(i, t.getElementsByClassName(a)), i
                            }
                        if (n.qsa && !k[e + " "] && (!g || !g.test(e))) {
                            if (1 !== w) y = t, _ = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = M), l = (f = o(e)).length; l--;) f[l] = "#" + u + " " + _e(f[l]);
                                _ = f.join(","), y = K.test(e) && me(t.parentNode) || t
                            }
                            if (_) try {
                                return H.apply(i, y.querySelectorAll(_)), i
                            } catch (e) {} finally {
                                u === M && t.removeAttribute("id")
                            }
                        }
                    }
                    return s(e.replace(W, "$1"), t, i, r)
                }

                function oe() {
                    var e = [];
                    return function t(n, r) {
                        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
                    }
                }

                function le(e) {
                    return e[M] = !0, e
                }

                function se(e) {
                    var t = p.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function de(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
                }

                function ue(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function ce(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function he(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function pe(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function fe(e) {
                    return le(function(t) {
                        return t = +t, le(function(n, i) {
                            for (var r, a = e([], n.length, t), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function me(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = ae.support = {}, a = ae.isXML = function(e) {
                        var t = e && (e.ownerDocument || e).documentElement;
                        return !!t && "HTML" !== t.nodeName
                    }, h = ae.setDocument = function(e) {
                        var t, r, o = e ? e.ownerDocument || e : b;
                        return o !== p && 9 === o.nodeType && o.documentElement ? (f = (p = o).documentElement, m = !a(p), b !== p && (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = se(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), n.getElementsByTagName = se(function(e) {
                            return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                        }), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = se(function(e) {
                            return f.appendChild(e).id = M, !p.getElementsByName || !p.getElementsByName(M).length
                        }), n.getById ? (i.filter.ID = function(e) {
                            var t = e.replace(Q, ee);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, i.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (i.filter.ID = function(e) {
                            var t = e.replace(Q, ee);
                            return function(e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, i.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && m) {
                                var n, i, r, a = t.getElementById(e);
                                if (a) {
                                    if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                                    for (r = t.getElementsByName(e), i = 0; a = r[i++];)
                                        if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
                                }
                                return []
                            }
                        }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, i = [],
                                r = 0,
                                a = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                                return i
                            }
                            return a
                        }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                        }, _ = [], g = [], (n.qsa = J.test(p.querySelectorAll)) && (se(function(e) {
                            f.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + A + ")"), e.querySelectorAll("[id~=" + M + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || g.push(".#.+[+~]")
                        }), se(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = p.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                        })), (n.matchesSelector = J.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && se(function(e) {
                            n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), _.push("!=", F)
                        }), g = g.length && new RegExp(g.join("|")), _ = _.length && new RegExp(_.join("|")), t = J.test(f.compareDocumentPosition), v = t || J.test(f.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, S = t ? function(e, t) {
                            if (e === t) return c = !0, 0;
                            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === p || e.ownerDocument === b && v(b, e) ? -1 : t === p || t.ownerDocument === b && v(b, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & i ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return c = !0, 0;
                            var n, i = 0,
                                r = e.parentNode,
                                a = t.parentNode,
                                o = [e],
                                l = [t];
                            if (!r || !a) return e === p ? -1 : t === p ? 1 : r ? -1 : a ? 1 : u ? O(u, e) - O(u, t) : 0;
                            if (r === a) return ue(e, t);
                            for (n = e; n = n.parentNode;) o.unshift(n);
                            for (n = t; n = n.parentNode;) l.unshift(n);
                            for (; o[i] === l[i];) i++;
                            return i ? ue(o[i], l[i]) : o[i] === b ? -1 : l[i] === b ? 1 : 0
                        }, p) : p
                    }, ae.matches = function(e, t) {
                        return ae(e, null, null, t)
                    }, ae.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== p && h(e), t = t.replace(V, "='$1']"), n.matchesSelector && m && !k[t + " "] && (!_ || !_.test(t)) && (!g || !g.test(t))) try {
                            var i = y.call(e, t);
                            if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                        } catch (e) {}
                        return ae(t, p, null, [e]).length > 0
                    }, ae.contains = function(e, t) {
                        return (e.ownerDocument || e) !== p && h(e), v(e, t)
                    }, ae.attr = function(e, t) {
                        (e.ownerDocument || e) !== p && h(e);
                        var r = i.attrHandle[t.toLowerCase()],
                            a = r && x.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
                        return void 0 !== a ? a : n.attributes || !m ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
                    }, ae.escape = function(e) {
                        return (e + "").replace(te, ne)
                    }, ae.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, ae.uniqueSort = function(e) {
                        var t, i = [],
                            r = 0,
                            a = 0;
                        if (c = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(S), c) {
                            for (; t = e[a++];) t === e[a] && (r = i.push(a));
                            for (; r--;) e.splice(i[r], 1)
                        }
                        return u = null, e
                    }, r = ae.getText = function(e) {
                        var t, n = "",
                            i = 0,
                            a = e.nodeType;
                        if (a) {
                            if (1 === a || 9 === a || 11 === a) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                            } else if (3 === a || 4 === a) return e.nodeValue
                        } else
                            for (; t = e[i++];) n += r(t);
                        return n
                    }, (i = ae.selectors = {
                        cacheLength: 50,
                        createPseudo: le,
                        match: Z,
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
                                return e[1] = e[1].replace(Q, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Q, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return Z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(Q, ee).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = D[e + " "];
                                return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && D(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(e, t, n) {
                                return function(i) {
                                    var r = ae.attr(i, e);
                                    return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(N, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(e, t, n, i, r) {
                                var a = "nth" !== e.slice(0, 3),
                                    o = "last" !== e.slice(-4),
                                    l = "of-type" === t;
                                return 1 === i && 0 === r ? function(e) {
                                    return !!e.parentNode
                                } : function(t, n, s) {
                                    var d, u, c, h, p, f, m = a !== o ? "nextSibling" : "previousSibling",
                                        g = t.parentNode,
                                        _ = l && t.nodeName.toLowerCase(),
                                        y = !s && !l,
                                        v = !1;
                                    if (g) {
                                        if (a) {
                                            for (; m;) {
                                                for (h = t; h = h[m];)
                                                    if (l ? h.nodeName.toLowerCase() === _ : 1 === h.nodeType) return !1;
                                                f = m = "only" === e && !f && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (f = [o ? g.firstChild : g.lastChild], o && y) {
                                            for (v = (p = (d = (u = (c = (h = g)[M] || (h[M] = {}))[h.uniqueID] || (c[h.uniqueID] = {}))[e] || [])[0] === w && d[1]) && d[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (v = p = 0) || f.pop();)
                                                if (1 === h.nodeType && ++v && h === t) {
                                                    u[e] = [w, p, v];
                                                    break
                                                }
                                        } else if (y && (v = p = (d = (u = (c = (h = t)[M] || (h[M] = {}))[h.uniqueID] || (c[h.uniqueID] = {}))[e] || [])[0] === w && d[1]), !1 === v)
                                            for (;
                                                (h = ++p && h && h[m] || (v = p = 0) || f.pop()) && ((l ? h.nodeName.toLowerCase() !== _ : 1 !== h.nodeType) || !++v || (y && ((u = (c = h[M] || (h[M] = {}))[h.uniqueID] || (c[h.uniqueID] = {}))[e] = [w, v]), h !== t)););
                                        return (v -= r) === i || v % i == 0 && v / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) {
                                var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                return r[M] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
                                    for (var i, a = r(e, t), o = a.length; o--;) e[i = O(e, a[o])] = !(n[i] = a[o])
                                }) : function(e) {
                                    return r(e, 0, n)
                                }) : r
                            }
                        },
                        pseudos: {
                            not: le(function(e) {
                                var t = [],
                                    n = [],
                                    i = l(e.replace(W, "$1"));
                                return i[M] ? le(function(e, t, n, r) {
                                    for (var a, o = i(e, null, r, []), l = e.length; l--;)(a = o[l]) && (e[l] = !(t[l] = a))
                                }) : function(e, r, a) {
                                    return t[0] = e, i(t, null, a, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: le(function(e) {
                                return function(t) {
                                    return ae(e, t).length > 0
                                }
                            }),
                            contains: le(function(e) {
                                return e = e.replace(Q, ee),
                                    function(t) {
                                        return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                                    }
                            }),
                            lang: le(function(e) {
                                return U.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(Q, ee).toLowerCase(),
                                    function(t) {
                                        var n;
                                        do {
                                            if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function(e) {
                                return e === f
                            },
                            focus: function(e) {
                                return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: pe(!1),
                            disabled: pe(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !i.pseudos.empty(e)
                            },
                            header: function(e) {
                                return X.test(e.nodeName)
                            },
                            input: function(e) {
                                return q.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: fe(function() {
                                return [0]
                            }),
                            last: fe(function(e, t) {
                                return [t - 1]
                            }),
                            eq: fe(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: fe(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: fe(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: fe(function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                                return e
                            }),
                            gt: fe(function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                return e
                            })
                        }
                    }).pseudos.nth = i.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) i.pseudos[t] = ce(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) i.pseudos[t] = he(t);

                function ge() {}

                function _e(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i
                }

                function ye(e, t, n) {
                    var i = t.dir,
                        r = t.next,
                        a = r || i,
                        o = n && "parentNode" === a,
                        l = L++;
                    return t.first ? function(t, n, r) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) return e(t, n, r);
                        return !1
                    } : function(t, n, s) {
                        var d, u, c, h = [w, l];
                        if (s) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || o)
                                    if (u = (c = t[M] || (t[M] = {}))[t.uniqueID] || (c[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                                    else {
                                        if ((d = u[a]) && d[0] === w && d[1] === l) return h[2] = d[2];
                                        if (u[a] = h, h[2] = e(t, n, s)) return !0
                                    } return !1
                    }
                }

                function ve(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function Me(e, t, n, i, r) {
                    for (var a, o = [], l = 0, s = e.length, d = null != t; l < s; l++)(a = e[l]) && (n && !n(a, i, r) || (o.push(a), d && t.push(l)));
                    return o
                }

                function be(e, t, n, i, r, a) {
                    return i && !i[M] && (i = be(i)), r && !r[M] && (r = be(r, a)), le(function(a, o, l, s) {
                        var d, u, c, h = [],
                            p = [],
                            f = o.length,
                            m = a || function(e, t, n) {
                                for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                                return n
                            }(t || "*", l.nodeType ? [l] : l, []),
                            g = !e || !a && t ? m : Me(m, h, e, l, s),
                            _ = n ? r || (a ? e : f || i) ? [] : o : g;
                        if (n && n(g, _, l, s), i)
                            for (d = Me(_, p), i(d, [], l, s), u = d.length; u--;)(c = d[u]) && (_[p[u]] = !(g[p[u]] = c));
                        if (a) {
                            if (r || e) {
                                if (r) {
                                    for (d = [], u = _.length; u--;)(c = _[u]) && d.push(g[u] = c);
                                    r(null, _ = [], d, s)
                                }
                                for (u = _.length; u--;)(c = _[u]) && (d = r ? O(a, c) : h[u]) > -1 && (a[d] = !(o[d] = c))
                            }
                        } else _ = Me(_ === o ? _.splice(f, _.length) : _), r ? r(null, o, _, s) : H.apply(o, _)
                    })
                }

                function we(e) {
                    for (var t, n, r, a = e.length, o = i.relative[e[0].type], l = o || i.relative[" "], s = o ? 1 : 0, u = ye(function(e) {
                            return e === t
                        }, l, !0), c = ye(function(e) {
                            return O(t, e) > -1
                        }, l, !0), h = [function(e, n, i) {
                            var r = !o && (i || n !== d) || ((t = n).nodeType ? u(e, n, i) : c(e, n, i));
                            return t = null, r
                        }]; s < a; s++)
                        if (n = i.relative[e[s].type]) h = [ye(ve(h), n)];
                        else {
                            if ((n = i.filter[e[s].type].apply(null, e[s].matches))[M]) {
                                for (r = ++s; r < a && !i.relative[e[r].type]; r++);
                                return be(s > 1 && ve(h), s > 1 && _e(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(W, "$1"), n, s < r && we(e.slice(s, r)), r < a && we(e = e.slice(r)), r < a && _e(e))
                            }
                            h.push(n)
                        }
                    return ve(h)
                }
                return ge.prototype = i.filters = i.pseudos, i.setFilters = new ge, o = ae.tokenize = function(e, t) {
                    var n, r, a, o, l, s, d, u = T[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (l = e, s = [], d = i.preFilter; l;) {
                        for (o in n && !(r = z.exec(l)) || (r && (l = l.slice(r[0].length) || l), s.push(a = [])), n = !1, (r = B.exec(l)) && (n = r.shift(), a.push({
                                value: n,
                                type: r[0].replace(W, " ")
                            }), l = l.slice(n.length)), i.filter) !(r = Z[o].exec(l)) || d[o] && !(r = d[o](r)) || (n = r.shift(), a.push({
                            value: n,
                            type: o,
                            matches: r
                        }), l = l.slice(n.length));
                        if (!n) break
                    }
                    return t ? l.length : l ? ae.error(e) : T(e, s).slice(0)
                }, l = ae.compile = function(e, t) {
                    var n, r = [],
                        a = [],
                        l = k[e + " "];
                    if (!l) {
                        for (t || (t = o(e)), n = t.length; n--;)(l = we(t[n]))[M] ? r.push(l) : a.push(l);
                        (l = k(e, function(e, t) {
                            var n = t.length > 0,
                                r = e.length > 0,
                                a = function(a, o, l, s, u) {
                                    var c, f, g, _ = 0,
                                        y = "0",
                                        v = a && [],
                                        M = [],
                                        b = d,
                                        L = a || r && i.find.TAG("*", u),
                                        D = w += null == b ? 1 : Math.random() || .1,
                                        T = L.length;
                                    for (u && (d = o === p || o || u); y !== T && null != (c = L[y]); y++) {
                                        if (r && c) {
                                            for (f = 0, o || c.ownerDocument === p || (h(c), l = !m); g = e[f++];)
                                                if (g(c, o || p, l)) {
                                                    s.push(c);
                                                    break
                                                }
                                            u && (w = D)
                                        }
                                        n && ((c = !g && c) && _--, a && v.push(c))
                                    }
                                    if (_ += y, n && y !== _) {
                                        for (f = 0; g = t[f++];) g(v, M, o, l);
                                        if (a) {
                                            if (_ > 0)
                                                for (; y--;) v[y] || M[y] || (M[y] = E.call(s));
                                            M = Me(M)
                                        }
                                        H.apply(s, M), u && !a && M.length > 0 && _ + t.length > 1 && ae.uniqueSort(s)
                                    }
                                    return u && (w = D, d = b), v
                                };
                            return n ? le(a) : a
                        }(a, r))).selector = e
                    }
                    return l
                }, s = ae.select = function(e, t, n, r) {
                    var a, s, d, u, c, h = "function" == typeof e && e,
                        p = !r && o(e = h.selector || e);
                    if (n = n || [], 1 === p.length) {
                        if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (d = s[0]).type && 9 === t.nodeType && m && i.relative[s[1].type]) {
                            if (!(t = (i.find.ID(d.matches[0].replace(Q, ee), t) || [])[0])) return n;
                            h && (t = t.parentNode), e = e.slice(s.shift().value.length)
                        }
                        for (a = Z.needsContext.test(e) ? 0 : s.length; a-- && (d = s[a], !i.relative[u = d.type]);)
                            if ((c = i.find[u]) && (r = c(d.matches[0].replace(Q, ee), K.test(s[0].type) && me(t.parentNode) || t))) {
                                if (s.splice(a, 1), !(e = r.length && _e(s))) return H.apply(n, r), n;
                                break
                            }
                    }
                    return (h || l(e, p))(r, t, !m, n, !t || K.test(e) && me(t.parentNode) || t), n
                }, n.sortStable = M.split("").sort(S).join("") === M, n.detectDuplicates = !!c, h(), n.sortDetached = se(function(e) {
                    return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                }), se(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || de("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && se(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || de("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), se(function(e) {
                    return null == e.getAttribute("disabled")
                }) || de(A, function(e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), ae
            }(n);
        L.find = k, L.expr = k.selectors, L.expr[":"] = L.expr.pseudos, L.uniqueSort = L.unique = k.uniqueSort, L.text = k.getText, L.isXMLDoc = k.isXML, L.contains = k.contains, L.escapeSelector = k.escape;
        var S = function(e, t, n) {
                for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && L(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            x = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            Y = L.expr.match.needsContext;

        function E(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function H(e, t, n) {
            return y(t) ? L.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            }) : t.nodeType ? L.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? L.grep(e, function(e) {
                return c.call(t, e) > -1 !== n
            }) : L.filter(t, e, n)
        }
        L.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? L.find.matchesSelector(i, e) ? [i] : [] : L.find.matches(e, L.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, L.fn.extend({
            find: function(e) {
                var t, n, i = this.length,
                    r = this;
                if ("string" != typeof e) return this.pushStack(L(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (L.contains(r[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++) L.find(e, r[t], n);
                return i > 1 ? L.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(H(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(H(this, e || [], !0))
            },
            is: function(e) {
                return !!H(this, "string" == typeof e && Y.test(e) ? L(e) : e || [], !1).length
            }
        });
        var P, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (L.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || P, "string" == typeof e) {
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof L ? t[0] : t, L.merge(this, L.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), C.test(i[1]) && L.isPlainObject(t))
                        for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return (r = o.getElementById(i[2])) && (this[0] = r, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(L) : L.makeArray(e, this)
        }).prototype = L.fn, P = L(o);
        var A = /^(?:parents|prev(?:Until|All))/,
            I = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function R(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        L.fn.extend({
            has: function(e) {
                var t = L(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (L.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, i = 0,
                    r = this.length,
                    a = [],
                    o = "string" != typeof e && L(e);
                if (!Y.test(e))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && L.find.matchesSelector(n, e))) {
                                a.push(n);
                                break
                            }
                return this.pushStack(a.length > 1 ? L.uniqueSort(a) : a)
            },
            index: function(e) {
                return e ? "string" == typeof e ? c.call(L(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(L.uniqueSort(L.merge(this.get(), L(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), L.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return S(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return S(e, "parentNode", n)
            },
            next: function(e) {
                return R(e, "nextSibling")
            },
            prev: function(e) {
                return R(e, "previousSibling")
            },
            nextAll: function(e) {
                return S(e, "nextSibling")
            },
            prevAll: function(e) {
                return S(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return S(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return S(e, "previousSibling", n)
            },
            siblings: function(e) {
                return x((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return x(e.firstChild)
            },
            contents: function(e) {
                return E(e, "iframe") ? e.contentDocument : (E(e, "template") && (e = e.content || e), L.merge([], e.childNodes))
            }
        }, function(e, t) {
            L.fn[e] = function(n, i) {
                var r = L.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = L.filter(i, r)), this.length > 1 && (I[e] || L.uniqueSort(r), A.test(e) && r.reverse()), this.pushStack(r)
            }
        });
        var j = /[^\x20\t\r\n\f]+/g;

        function F(e) {
            return e
        }

        function N(e) {
            throw e
        }

        function W(e, t, n, i) {
            var r;
            try {
                e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        L.Callbacks = function(e) {
            e = "string" == typeof e ? function(e) {
                var t = {};
                return L.each(e.match(j) || [], function(e, n) {
                    t[n] = !0
                }), t
            }(e) : L.extend({}, e);
            var t, n, i, r, a = [],
                o = [],
                l = -1,
                s = function() {
                    for (r = r || e.once, i = t = !0; o.length; l = -1)
                        for (n = o.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
                },
                d = {
                    add: function() {
                        return a && (n && !t && (l = a.length - 1, o.push(n)), function t(n) {
                            L.each(n, function(n, i) {
                                y(i) ? e.unique && d.has(i) || a.push(i) : i && i.length && "string" !== w(i) && t(i)
                            })
                        }(arguments), n && !t && s()), this
                    },
                    remove: function() {
                        return L.each(arguments, function(e, t) {
                            for (var n;
                                (n = L.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? L.inArray(e, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return r = o = [], a = n = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return r = o = [], n || t || (a = n = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(e, n) {
                        return r || (n = [e, (n = n || []).slice ? n.slice() : n], o.push(n), t || s()), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, L.extend({
            Deferred: function(e) {
                var t = [
                        ["notify", "progress", L.Callbacks("memory"), L.Callbacks("memory"), 2],
                        ["resolve", "done", L.Callbacks("once memory"), L.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", L.Callbacks("once memory"), L.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    r = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return r.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return L.Deferred(function(n) {
                                L.each(t, function(t, i) {
                                    var r = y(e[i[4]]) && e[i[4]];
                                    a[i[1]](function() {
                                        var e = r && r.apply(this, arguments);
                                        e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(e, i, r) {
                            var a = 0;

                            function o(e, t, i, r) {
                                return function() {
                                    var l = this,
                                        s = arguments,
                                        d = function() {
                                            var n, d;
                                            if (!(e < a)) {
                                                if ((n = i.apply(l, s)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                d = n && ("object" == typeof n || "function" == typeof n) && n.then, y(d) ? r ? d.call(n, o(a, t, F, r), o(a, t, N, r)) : (a++, d.call(n, o(a, t, F, r), o(a, t, N, r), o(a, t, F, t.notifyWith))) : (i !== F && (l = void 0, s = [n]), (r || t.resolveWith)(l, s))
                                            }
                                        },
                                        u = r ? d : function() {
                                            try {
                                                d()
                                            } catch (n) {
                                                L.Deferred.exceptionHook && L.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= a && (i !== N && (l = void 0, s = [n]), t.rejectWith(l, s))
                                            }
                                        };
                                    e ? u() : (L.Deferred.getStackHook && (u.stackTrace = L.Deferred.getStackHook()), n.setTimeout(u))
                                }
                            }
                            return L.Deferred(function(n) {
                                t[0][3].add(o(0, n, y(r) ? r : F, n.notifyWith)), t[1][3].add(o(0, n, y(e) ? e : F)), t[2][3].add(o(0, n, y(i) ? i : N))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? L.extend(e, r) : r
                        }
                    },
                    a = {};
                return L.each(t, function(e, n) {
                    var o = n[2],
                        l = n[5];
                    r[n[1]] = o.add, l && o.add(function() {
                        i = l
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), o.add(n[3].fire), a[n[0]] = function() {
                        return a[n[0] + "With"](this === a ? void 0 : this, arguments), this
                    }, a[n[0] + "With"] = o.fireWith
                }), r.promise(a), e && e.call(a, a), a
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    r = s.call(arguments),
                    a = L.Deferred(),
                    o = function(e) {
                        return function(n) {
                            i[e] = this, r[e] = arguments.length > 1 ? s.call(arguments) : n, --t || a.resolveWith(i, r)
                        }
                    };
                if (t <= 1 && (W(e, a.done(o(n)).resolve, a.reject, !t), "pending" === a.state() || y(r[n] && r[n].then))) return a.then();
                for (; n--;) W(r[n], o(n), a.reject);
                return a.promise()
            }
        });
        var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        L.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && z.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, L.readyException = function(e) {
            n.setTimeout(function() {
                throw e
            })
        };
        var B = L.Deferred();

        function V() {
            o.removeEventListener("DOMContentLoaded", V), n.removeEventListener("load", V), L.ready()
        }
        L.fn.ready = function(e) {
            return B.then(e).catch(function(e) {
                L.readyException(e)
            }), this
        }, L.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --L.readyWait : L.isReady) || (L.isReady = !0, !0 !== e && --L.readyWait > 0 || B.resolveWith(o, [L]))
            }
        }), L.ready.then = B.then, "complete" === o.readyState || "loading" !== o.readyState && !o.documentElement.doScroll ? n.setTimeout(L.ready) : (o.addEventListener("DOMContentLoaded", V), n.addEventListener("load", V));
        var G = function(e, t, n, i, r, a, o) {
                var l = 0,
                    s = e.length,
                    d = null == n;
                if ("object" === w(n))
                    for (l in r = !0, n) G(e, t, l, n[l], !0, a, o);
                else if (void 0 !== i && (r = !0, y(i) || (o = !0), d && (o ? (t.call(e, i), t = null) : (d = t, t = function(e, t, n) {
                        return d.call(L(e), n)
                    })), t))
                    for (; l < s; l++) t(e[l], n, o ? i : i.call(e[l], l, t(e[l], n)));
                return r ? e : d ? t.call(e) : s ? t(e[0], n) : a
            },
            U = /^-ms-/,
            Z = /-([a-z])/g;

        function q(e, t) {
            return t.toUpperCase()
        }

        function X(e) {
            return e.replace(U, "ms-").replace(Z, q)
        }
        var J = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function $() {
            this.expando = L.expando + $.uid++
        }
        $.uid = 1, $.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, J(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var i, r = this.cache(e);
                if ("string" == typeof t) r[X(t)] = n;
                else
                    for (i in t) r[X(i)] = t[i];
                return r
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(j) || []).length;
                        for (; n--;) delete i[t[n]]
                    }(void 0 === t || L.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !L.isEmptyObject(t)
            }
        };
        var K = new $,
            Q = new $,
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;

        function ne(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = function(e) {
                            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                        }(n)
                    } catch (e) {}
                    Q.set(e, t, n)
                } else n = void 0;
            return n
        }
        L.extend({
            hasData: function(e) {
                return Q.hasData(e) || K.hasData(e)
            },
            data: function(e, t, n) {
                return Q.access(e, t, n)
            },
            removeData: function(e, t) {
                Q.remove(e, t)
            },
            _data: function(e, t, n) {
                return K.access(e, t, n)
            },
            _removeData: function(e, t) {
                K.remove(e, t)
            }
        }), L.fn.extend({
            data: function(e, t) {
                var n, i, r, a = this[0],
                    o = a && a.attributes;
                if (void 0 === e) {
                    if (this.length && (r = Q.get(a), 1 === a.nodeType && !K.get(a, "hasDataAttrs"))) {
                        for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = X(i.slice(5)), ne(a, i, r[i]));
                        K.set(a, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    Q.set(this, e)
                }) : G(this, function(t) {
                    var n;
                    if (a && void 0 === t) return void 0 !== (n = Q.get(a, e)) ? n : void 0 !== (n = ne(a, e)) ? n : void 0;
                    this.each(function() {
                        Q.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Q.remove(this, e)
                })
            }
        }), L.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, L.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = L.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    a = L._queueHooks(e, t);
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, function() {
                    L.dequeue(e, t)
                }, a)), !i && a && a.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return K.get(e, n) || K.access(e, n, {
                    empty: L.Callbacks("once memory").add(function() {
                        K.remove(e, [t + "queue", n])
                    })
                })
            }
        }), L.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? L.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = L.queue(this, e, t);
                    L._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && L.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    L.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = L.Deferred(),
                    a = this,
                    o = this.length,
                    l = function() {
                        --i || r.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = K.get(a[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(l));
                return l(), r.promise(t)
            }
        });
        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
            ae = ["Top", "Right", "Bottom", "Left"],
            oe = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && L.contains(e.ownerDocument, e) && "none" === L.css(e, "display")
            },
            le = function(e, t, n, i) {
                var r, a, o = {};
                for (a in t) o[a] = e.style[a], e.style[a] = t[a];
                for (a in r = n.apply(e, i || []), t) e.style[a] = o[a];
                return r
            };

        function se(e, t, n, i) {
            var r, a, o = 20,
                l = i ? function() {
                    return i.cur()
                } : function() {
                    return L.css(e, t, "")
                },
                s = l(),
                d = n && n[3] || (L.cssNumber[t] ? "" : "px"),
                u = (L.cssNumber[t] || "px" !== d && +s) && re.exec(L.css(e, t));
            if (u && u[3] !== d) {
                for (s /= 2, d = d || u[3], u = +s || 1; o--;) L.style(e, t, u + d), (1 - a) * (1 - (a = l() / s || .5)) <= 0 && (o = 0), u /= a;
                u *= 2, L.style(e, t, u + d), n = n || []
            }
            return n && (u = +u || +s || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = u, i.end = r)), r
        }
        var de = {};

        function ue(e) {
            var t, n = e.ownerDocument,
                i = e.nodeName,
                r = de[i];
            return r || (t = n.body.appendChild(n.createElement(i)), r = L.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), de[i] = r, r)
        }

        function ce(e, t) {
            for (var n, i, r = [], a = 0, o = e.length; a < o; a++)(i = e[a]).style && (n = i.style.display, t ? ("none" === n && (r[a] = K.get(i, "display") || null, r[a] || (i.style.display = "")), "" === i.style.display && oe(i) && (r[a] = ue(i))) : "none" !== n && (r[a] = "none", K.set(i, "display", n)));
            for (a = 0; a < o; a++) null != r[a] && (e[a].style.display = r[a]);
            return e
        }
        L.fn.extend({
            show: function() {
                return ce(this, !0)
            },
            hide: function() {
                return ce(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    oe(this) ? L(this).show() : L(this).hide()
                })
            }
        });
        var he = /^(?:checkbox|radio)$/i,
            pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            fe = /^$|^module$|\/(?:java|ecma)script/i,
            me = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function ge(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? L.merge([e], n) : n
        }

        function _e(e, t) {
            for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
        }
        me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td;
        var ye, ve, Me = /<|&#?\w+;/;

        function be(e, t, n, i, r) {
            for (var a, o, l, s, d, u, c = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
                if ((a = e[p]) || 0 === a)
                    if ("object" === w(a)) L.merge(h, a.nodeType ? [a] : a);
                    else if (Me.test(a)) {
                for (o = o || c.appendChild(t.createElement("div")), l = (pe.exec(a) || ["", ""])[1].toLowerCase(), s = me[l] || me._default, o.innerHTML = s[1] + L.htmlPrefilter(a) + s[2], u = s[0]; u--;) o = o.lastChild;
                L.merge(h, o.childNodes), (o = c.firstChild).textContent = ""
            } else h.push(t.createTextNode(a));
            for (c.textContent = "", p = 0; a = h[p++];)
                if (i && L.inArray(a, i) > -1) r && r.push(a);
                else if (d = L.contains(a.ownerDocument, a), o = ge(c.appendChild(a), "script"), d && _e(o), n)
                for (u = 0; a = o[u++];) fe.test(a.type || "") && n.push(a);
            return c
        }
        ye = o.createDocumentFragment().appendChild(o.createElement("div")), (ve = o.createElement("input")).setAttribute("type", "radio"), ve.setAttribute("checked", "checked"), ve.setAttribute("name", "t"), ye.appendChild(ve), _.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", _.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
        var we = o.documentElement,
            Le = /^key/,
            De = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Te = /^([^.]*)(?:\.(.+)|)/;

        function ke() {
            return !0
        }

        function Se() {
            return !1
        }

        function xe() {
            try {
                return o.activeElement
            } catch (e) {}
        }

        function Ye(e, t, n, i, r, a) {
            var o, l;
            if ("object" == typeof t) {
                for (l in "string" != typeof n && (i = i || n, n = void 0), t) Ye(e, l, n, i, t[l], a);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Se;
            else if (!r) return e;
            return 1 === a && (o = r, (r = function(e) {
                return L().off(e), o.apply(this, arguments)
            }).guid = o.guid || (o.guid = L.guid++)), e.each(function() {
                L.event.add(this, t, r, i, n)
            })
        }
        L.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var a, o, l, s, d, u, c, h, p, f, m, g = K.get(e);
                if (g)
                    for (n.handler && (n = (a = n).handler, r = a.selector), r && L.find.matchesSelector(we, r), n.guid || (n.guid = L.guid++), (s = g.events) || (s = g.events = {}), (o = g.handle) || (o = g.handle = function(t) {
                            return void 0 !== L && L.event.triggered !== t.type ? L.event.dispatch.apply(e, arguments) : void 0
                        }), d = (t = (t || "").match(j) || [""]).length; d--;) p = m = (l = Te.exec(t[d]) || [])[1], f = (l[2] || "").split(".").sort(), p && (c = L.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = L.event.special[p] || {}, u = L.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && L.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, a), (h = s[p]) || ((h = s[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, f, o) || e.addEventListener && e.addEventListener(p, o)), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), L.event.global[p] = !0)
            },
            remove: function(e, t, n, i, r) {
                var a, o, l, s, d, u, c, h, p, f, m, g = K.hasData(e) && K.get(e);
                if (g && (s = g.events)) {
                    for (d = (t = (t || "").match(j) || [""]).length; d--;)
                        if (p = m = (l = Te.exec(t[d]) || [])[1], f = (l[2] || "").split(".").sort(), p) {
                            for (c = L.event.special[p] || {}, h = s[p = (i ? c.delegateType : c.bindType) || p] || [], l = l[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = h.length; a--;) u = h[a], !r && m !== u.origType || n && n.guid !== u.guid || l && !l.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(a, 1), u.selector && h.delegateCount--, c.remove && c.remove.call(e, u));
                            o && !h.length && (c.teardown && !1 !== c.teardown.call(e, f, g.handle) || L.removeEvent(e, p, g.handle), delete s[p])
                        } else
                            for (p in s) L.event.remove(e, p + t[d], n, i, !0);
                    L.isEmptyObject(s) && K.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, r, a, o, l = L.event.fix(e),
                    s = new Array(arguments.length),
                    d = (K.get(this, "events") || {})[l.type] || [],
                    u = L.event.special[l.type] || {};
                for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                    for (o = L.event.handlers.call(this, l, d), t = 0;
                        (r = o[t++]) && !l.isPropagationStopped();)
                        for (l.currentTarget = r.elem, n = 0;
                            (a = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !l.rnamespace.test(a.namespace) || (l.handleObj = a, l.data = a.data, void 0 !== (i = ((L.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, s)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, l), l.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, a, o, l = [],
                    s = t.delegateCount,
                    d = e.target;
                if (s && d.nodeType && !("click" === e.type && e.button >= 1))
                    for (; d !== this; d = d.parentNode || this)
                        if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                            for (a = [], o = {}, n = 0; n < s; n++) void 0 === o[r = (i = t[n]).selector + " "] && (o[r] = i.needsContext ? L(r, this).index(d) > -1 : L.find(r, this, null, [d]).length), o[r] && a.push(i);
                            a.length && l.push({
                                elem: d,
                                handlers: a
                            })
                        }
                return d = this, s < t.length && l.push({
                    elem: d,
                    handlers: t.slice(s)
                }), l
            },
            addProp: function(e, t) {
                Object.defineProperty(L.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[L.expando] ? e : new L.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== xe() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === xe() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return E(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, L.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, L.Event = function(e, t) {
            if (!(this instanceof L.Event)) return new L.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && L.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[L.expando] = !0
        }, L.Event.prototype = {
            constructor: L.Event,
            isDefaultPrevented: Se,
            isPropagationStopped: Se,
            isImmediatePropagationStopped: Se,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, L.each({
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
            char: !0,
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
                return null == e.which && Le.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && De.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, L.event.addProp), L.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            L.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = e.relatedTarget,
                        r = e.handleObj;
                    return i && (i === this || L.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), L.fn.extend({
            on: function(e, t, n, i) {
                return Ye(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return Ye(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, L(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                    L.event.remove(this, e, n, t)
                })
            }
        });
        var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Ce = /<script|<style|<link/i,
            He = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Oe(e, t) {
            return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && L(e).children("tbody")[0] || e
        }

        function Ae(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Ie(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Re(e, t) {
            var n, i, r, a, o, l, s, d;
            if (1 === t.nodeType) {
                if (K.hasData(e) && (a = K.access(e), o = K.set(t, a), d = a.events))
                    for (r in delete o.handle, o.events = {}, d)
                        for (n = 0, i = d[r].length; n < i; n++) L.event.add(t, r, d[r][n]);
                Q.hasData(e) && (l = Q.access(e), s = L.extend({}, l), Q.set(t, s))
            }
        }

        function je(e, t, n, i) {
            t = d.apply([], t);
            var r, a, o, l, s, u, c = 0,
                h = e.length,
                p = h - 1,
                f = t[0],
                m = y(f);
            if (m || h > 1 && "string" == typeof f && !_.checkClone && He.test(f)) return e.each(function(r) {
                var a = e.eq(r);
                m && (t[0] = f.call(this, r, a.html())), je(a, t, n, i)
            });
            if (h && (a = (r = be(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
                for (l = (o = L.map(ge(r, "script"), Ae)).length; c < h; c++) s = r, c !== p && (s = L.clone(s, !0, !0), l && L.merge(o, ge(s, "script"))), n.call(e[c], s, c);
                if (l)
                    for (u = o[o.length - 1].ownerDocument, L.map(o, Ie), c = 0; c < l; c++) s = o[c], fe.test(s.type || "") && !K.access(s, "globalEval") && L.contains(u, s) && (s.src && "module" !== (s.type || "").toLowerCase() ? L._evalUrl && L._evalUrl(s.src) : b(s.textContent.replace(Pe, ""), u, s))
            }
            return e
        }

        function Fe(e, t, n) {
            for (var i, r = t ? L.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || L.cleanData(ge(i)), i.parentNode && (n && L.contains(i.ownerDocument, i) && _e(ge(i, "script")), i.parentNode.removeChild(i));
            return e
        }
        L.extend({
            htmlPrefilter: function(e) {
                return e.replace(Ee, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, a, o, l, s, d, u = e.cloneNode(!0),
                    c = L.contains(e.ownerDocument, e);
                if (!(_.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || L.isXMLDoc(e)))
                    for (o = ge(u), i = 0, r = (a = ge(e)).length; i < r; i++) l = a[i], s = o[i], d = void 0, "input" === (d = s.nodeName.toLowerCase()) && he.test(l.type) ? s.checked = l.checked : "input" !== d && "textarea" !== d || (s.defaultValue = l.defaultValue);
                if (t)
                    if (n)
                        for (a = a || ge(e), o = o || ge(u), i = 0, r = a.length; i < r; i++) Re(a[i], o[i]);
                    else Re(e, u);
                return (o = ge(u, "script")).length > 0 && _e(o, !c && ge(e, "script")), u
            },
            cleanData: function(e) {
                for (var t, n, i, r = L.event.special, a = 0; void 0 !== (n = e[a]); a++)
                    if (J(n)) {
                        if (t = n[K.expando]) {
                            if (t.events)
                                for (i in t.events) r[i] ? L.event.remove(n, i) : L.removeEvent(n, i, t.handle);
                            n[K.expando] = void 0
                        }
                        n[Q.expando] && (n[Q.expando] = void 0)
                    }
            }
        }), L.fn.extend({
            detach: function(e) {
                return Fe(this, e, !0)
            },
            remove: function(e) {
                return Fe(this, e)
            },
            text: function(e) {
                return G(this, function(e) {
                    return void 0 === e ? L.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return je(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return je(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Oe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return je(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return je(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (L.cleanData(ge(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return L.clone(this, e, t)
                })
            },
            html: function(e) {
                return G(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Ce.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = L.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (L.cleanData(ge(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return je(this, arguments, function(t) {
                    var n = this.parentNode;
                    L.inArray(this, e) < 0 && (L.cleanData(ge(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), L.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            L.fn[e] = function(e) {
                for (var n, i = [], r = L(e), a = r.length - 1, o = 0; o <= a; o++) n = o === a ? this : this.clone(!0), L(r[o])[t](n), u.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Ne = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
            We = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = n), t.getComputedStyle(e)
            },
            ze = new RegExp(ae.join("|"), "i");

        function Be(e, t, n) {
            var i, r, a, o, l = e.style;
            return (n = n || We(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || L.contains(e.ownerDocument, e) || (o = L.style(e, t)), !_.pixelBoxStyles() && Ne.test(o) && ze.test(t) && (i = l.width, r = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = o, o = n.width, l.width = i, l.minWidth = r, l.maxWidth = a)), void 0 !== o ? o + "" : o
        }

        function Ve(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function e() {
                if (u) {
                    d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", we.appendChild(d).appendChild(u);
                    var e = n.getComputedStyle(u);
                    i = "1%" !== e.top, s = 12 === t(e.marginLeft), u.style.right = "60%", l = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", a = 36 === u.offsetWidth || "absolute", we.removeChild(d), u = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }
            var i, r, a, l, s, d = o.createElement("div"),
                u = o.createElement("div");
            u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", _.clearCloneStyle = "content-box" === u.style.backgroundClip, L.extend(_, {
                boxSizingReliable: function() {
                    return e(), r
                },
                pixelBoxStyles: function() {
                    return e(), l
                },
                pixelPosition: function() {
                    return e(), i
                },
                reliableMarginLeft: function() {
                    return e(), s
                },
                scrollboxSize: function() {
                    return e(), a
                }
            }))
        }();
        var Ge = /^(none|table(?!-c[ea]).+)/,
            Ue = /^--/,
            Ze = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            qe = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Xe = ["Webkit", "Moz", "ms"],
            Je = o.createElement("div").style;

        function $e(e) {
            var t = L.cssProps[e];
            return t || (t = L.cssProps[e] = function(e) {
                if (e in Je) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                    if ((e = Xe[n] + t) in Je) return e
            }(e) || e), t
        }

        function Ke(e, t, n) {
            var i = re.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function Qe(e, t, n, i, r, a) {
            var o = "width" === t ? 1 : 0,
                l = 0,
                s = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; o < 4; o += 2) "margin" === n && (s += L.css(e, n + ae[o], !0, r)), i ? ("content" === n && (s -= L.css(e, "padding" + ae[o], !0, r)), "margin" !== n && (s -= L.css(e, "border" + ae[o] + "Width", !0, r))) : (s += L.css(e, "padding" + ae[o], !0, r), "padding" !== n ? s += L.css(e, "border" + ae[o] + "Width", !0, r) : l += L.css(e, "border" + ae[o] + "Width", !0, r));
            return !i && a >= 0 && (s += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - s - l - .5))), s
        }

        function et(e, t, n) {
            var i = We(e),
                r = Be(e, t, i),
                a = "border-box" === L.css(e, "boxSizing", !1, i),
                o = a;
            if (Ne.test(r)) {
                if (!n) return r;
                r = "auto"
            }
            return o = o && (_.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === L.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], o = !0), (r = parseFloat(r) || 0) + Qe(e, t, n || (a ? "border" : "content"), o, i, r) + "px"
        }

        function tt(e, t, n, i, r) {
            return new tt.prototype.init(e, t, n, i, r)
        }
        L.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Be(e, "opacity");
                            return "" === n ? "1" : n
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
                    var r, a, o, l = X(t),
                        s = Ue.test(t),
                        d = e.style;
                    if (s || (t = $e(l)), o = L.cssHooks[t] || L.cssHooks[l], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : d[t];
                    "string" === (a = typeof n) && (r = re.exec(n)) && r[1] && (n = se(e, t, r), a = "number"), null != n && n == n && ("number" === a && (n += r && r[3] || (L.cssNumber[l] ? "" : "px")), _.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (s ? d.setProperty(t, n) : d[t] = n))
                }
            },
            css: function(e, t, n, i) {
                var r, a, o, l = X(t);
                return Ue.test(t) || (t = $e(l)), (o = L.cssHooks[t] || L.cssHooks[l]) && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = Be(e, t, i)), "normal" === r && t in qe && (r = qe[t]), "" === n || n ? (a = parseFloat(r), !0 === n || isFinite(a) ? a || 0 : r) : r
            }
        }), L.each(["height", "width"], function(e, t) {
            L.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n) return !Ge.test(L.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, i) : le(e, Ze, function() {
                        return et(e, t, i)
                    })
                },
                set: function(e, n, i) {
                    var r, a = We(e),
                        o = "border-box" === L.css(e, "boxSizing", !1, a),
                        l = i && Qe(e, t, i, o, a);
                    return o && _.scrollboxSize() === a.position && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - Qe(e, t, "border", !1, a) - .5)), l && (r = re.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = L.css(e, t)), Ke(0, n, l)
                }
            }
        }), L.cssHooks.marginLeft = Ve(_.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), L.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            L.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ae[i] + t] = a[i] || a[i - 2] || a[0];
                    return r
                }
            }, "margin" !== e && (L.cssHooks[e + t].set = Ke)
        }), L.fn.extend({
            css: function(e, t) {
                return G(this, function(e, t, n) {
                    var i, r, a = {},
                        o = 0;
                    if (Array.isArray(t)) {
                        for (i = We(e), r = t.length; o < r; o++) a[t[o]] = L.css(e, t[o], !1, i);
                        return a
                    }
                    return void 0 !== n ? L.style(e, t, n) : L.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), L.Tween = tt, tt.prototype = {
            constructor: tt,
            init: function(e, t, n, i, r, a) {
                this.elem = e, this.prop = n, this.easing = r || L.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (L.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = tt.propHooks[this.prop];
                return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = tt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = L.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
            }
        }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = L.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    L.fx.step[e.prop] ? L.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[L.cssProps[e.prop]] && !L.cssHooks[e.prop] ? e.elem[e.prop] = e.now : L.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, L.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, L.fx = tt.prototype.init, L.fx.step = {};
        var nt, it, rt = /^(?:toggle|show|hide)$/,
            at = /queueHooks$/;

        function ot() {
            it && (!1 === o.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ot) : n.setTimeout(ot, L.fx.interval), L.fx.tick())
        }

        function lt() {
            return n.setTimeout(function() {
                nt = void 0
            }), nt = Date.now()
        }

        function st(e, t) {
            var n, i = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ae[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function dt(e, t, n) {
            for (var i, r = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), a = 0, o = r.length; a < o; a++)
                if (i = r[a].call(n, t, e)) return i
        }

        function ut(e, t, n) {
            var i, r, a = 0,
                o = ut.prefilters.length,
                l = L.Deferred().always(function() {
                    delete s.elem
                }),
                s = function() {
                    if (r) return !1;
                    for (var t = nt || lt(), n = Math.max(0, d.startTime + d.duration - t), i = 1 - (n / d.duration || 0), a = 0, o = d.tweens.length; a < o; a++) d.tweens[a].run(i);
                    return l.notifyWith(e, [d, i, n]), i < 1 && o ? n : (o || l.notifyWith(e, [d, 1, 0]), l.resolveWith(e, [d]), !1)
                },
                d = l.promise({
                    elem: e,
                    props: L.extend({}, t),
                    opts: L.extend(!0, {
                        specialEasing: {},
                        easing: L.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: nt || lt(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = L.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                        return d.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? d.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) d.tweens[n].run(1);
                        return t ? (l.notifyWith(e, [d, 1, 0]), l.resolveWith(e, [d, t])) : l.rejectWith(e, [d, t]), this
                    }
                }),
                u = d.props;
            for (! function(e, t) {
                    var n, i, r, a, o;
                    for (n in e)
                        if (r = t[i = X(n)], a = e[n], Array.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (o = L.cssHooks[i]) && "expand" in o)
                            for (n in a = o.expand(a), delete e[i], a) n in e || (e[n] = a[n], t[n] = r);
                        else t[i] = r
                }(u, d.opts.specialEasing); a < o; a++)
                if (i = ut.prefilters[a].call(d, e, u, d.opts)) return y(i.stop) && (L._queueHooks(d.elem, d.opts.queue).stop = i.stop.bind(i)), i;
            return L.map(u, dt, d), y(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), L.fx.timer(L.extend(s, {
                elem: e,
                anim: d,
                queue: d.opts.queue
            })), d
        }
        L.Animation = L.extend(ut, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return se(n.elem, e, re.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    y(e) ? (t = e, e = ["*"]) : e = e.match(j);
                    for (var n, i = 0, r = e.length; i < r; i++) n = e[i], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var i, r, a, o, l, s, d, u, c = "width" in t || "height" in t,
                        h = this,
                        p = {},
                        f = e.style,
                        m = e.nodeType && oe(e),
                        g = K.get(e, "fxshow");
                    for (i in n.queue || (null == (o = L._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() {
                            o.unqueued || l()
                        }), o.unqueued++, h.always(function() {
                            h.always(function() {
                                o.unqueued--, L.queue(e, "fx").length || o.empty.fire()
                            })
                        })), t)
                        if (r = t[i], rt.test(r)) {
                            if (delete t[i], a = a || "toggle" === r, r === (m ? "hide" : "show")) {
                                if ("show" !== r || !g || void 0 === g[i]) continue;
                                m = !0
                            }
                            p[i] = g && g[i] || L.style(e, i)
                        }
                    if ((s = !L.isEmptyObject(t)) || !L.isEmptyObject(p))
                        for (i in c && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (d = g && g.display) && (d = K.get(e, "display")), "none" === (u = L.css(e, "display")) && (d ? u = d : (ce([e], !0), d = e.style.display || d, u = L.css(e, "display"), ce([e]))), ("inline" === u || "inline-block" === u && null != d) && "none" === L.css(e, "float") && (s || (h.done(function() {
                                f.display = d
                            }), null == d && (u = f.display, d = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function() {
                                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                            })), s = !1, p) s || (g ? "hidden" in g && (m = g.hidden) : g = K.access(e, "fxshow", {
                            display: d
                        }), a && (g.hidden = !m), m && ce([e], !0), h.done(function() {
                            for (i in m || ce([e]), K.remove(e, "fxshow"), p) L.style(e, i, p[i])
                        })), s = dt(m ? g[i] : 0, i, h), i in g || (g[i] = s.start, m && (s.end = s.start, s.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
                }
            }), L.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? L.extend({}, e) : {
                    complete: n || !n && t || y(e) && e,
                    duration: e,
                    easing: n && t || t && !y(t) && t
                };
                return L.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in L.fx.speeds ? i.duration = L.fx.speeds[i.duration] : i.duration = L.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    y(i.old) && i.old.call(this), i.queue && L.dequeue(this, i.queue)
                }, i
            }, L.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(oe).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = L.isEmptyObject(e),
                        a = L.speed(t, n, i),
                        o = function() {
                            var t = ut(this, L.extend({}, e), a);
                            (r || K.get(this, "finish")) && t.stop(!0)
                        };
                    return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            a = L.timers,
                            o = K.get(this);
                        if (r) o[r] && o[r].stop && i(o[r]);
                        else
                            for (r in o) o[r] && o[r].stop && at.test(r) && i(o[r]);
                        for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
                        !t && n || L.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = K.get(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            a = L.timers,
                            o = i ? i.length : 0;
                        for (n.finish = !0, L.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                        for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), L.each(["toggle", "show", "hide"], function(e, t) {
                var n = L.fn[t];
                L.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, i, r)
                }
            }), L.each({
                slideDown: st("show"),
                slideUp: st("hide"),
                slideToggle: st("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                L.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), L.timers = [], L.fx.tick = function() {
                var e, t = 0,
                    n = L.timers;
                for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || L.fx.stop(), nt = void 0
            }, L.fx.timer = function(e) {
                L.timers.push(e), L.fx.start()
            }, L.fx.interval = 13, L.fx.start = function() {
                it || (it = !0, ot())
            }, L.fx.stop = function() {
                it = null
            }, L.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, L.fn.delay = function(e, t) {
                return e = L.fx && L.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, i) {
                    var r = n.setTimeout(t, e);
                    i.stop = function() {
                        n.clearTimeout(r)
                    }
                })
            },
            function() {
                var e = o.createElement("input"),
                    t = o.createElement("select").appendChild(o.createElement("option"));
                e.type = "checkbox", _.checkOn = "" !== e.value, _.optSelected = t.selected, (e = o.createElement("input")).value = "t", e.type = "radio", _.radioValue = "t" === e.value
            }();
        var ct, ht = L.expr.attrHandle;
        L.fn.extend({
            attr: function(e, t) {
                return G(this, L.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    L.removeAttr(this, e)
                })
            }
        }), L.extend({
            attr: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? L.prop(e, t, n) : (1 === a && L.isXMLDoc(e) || (r = L.attrHooks[t.toLowerCase()] || (L.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void L.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = L.find.attr(e, t)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!_.radioValue && "radio" === t && E(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0,
                    r = t && t.match(j);
                if (r && 1 === e.nodeType)
                    for (; n = r[i++];) e.removeAttribute(n)
            }
        }), ct = {
            set: function(e, t, n) {
                return !1 === t ? L.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, L.each(L.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = ht[t] || L.find.attr;
            ht[t] = function(e, t, i) {
                var r, a, o = t.toLowerCase();
                return i || (a = ht[o], ht[o] = r, r = null != n(e, t, i) ? o : null, ht[o] = a), r
            }
        });
        var pt = /^(?:input|select|textarea|button)$/i,
            ft = /^(?:a|area)$/i;

        function mt(e) {
            return (e.match(j) || []).join(" ")
        }

        function gt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function _t(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || []
        }
        L.fn.extend({
            prop: function(e, t) {
                return G(this, L.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[L.propFix[e] || e]
                })
            }
        }), L.extend({
            prop: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a) return 1 === a && L.isXMLDoc(e) || (t = L.propFix[t] || t, r = L.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = L.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : pt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), _.optSelected || (L.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), L.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            L.propFix[this.toLowerCase()] = this
        }), L.fn.extend({
            addClass: function(e) {
                var t, n, i, r, a, o, l, s = 0;
                if (y(e)) return this.each(function(t) {
                    L(this).addClass(e.call(this, t, gt(this)))
                });
                if ((t = _t(e)).length)
                    for (; n = this[s++];)
                        if (r = gt(n), i = 1 === n.nodeType && " " + mt(r) + " ") {
                            for (o = 0; a = t[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                            r !== (l = mt(i)) && n.setAttribute("class", l)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, a, o, l, s = 0;
                if (y(e)) return this.each(function(t) {
                    L(this).removeClass(e.call(this, t, gt(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = _t(e)).length)
                    for (; n = this[s++];)
                        if (r = gt(n), i = 1 === n.nodeType && " " + mt(r) + " ") {
                            for (o = 0; a = t[o++];)
                                for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                            r !== (l = mt(i)) && n.setAttribute("class", l)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function(n) {
                    L(this).toggleClass(e.call(this, n, gt(this), t), t)
                }) : this.each(function() {
                    var t, r, a, o;
                    if (i)
                        for (r = 0, a = L(this), o = _t(e); t = o[r++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                    else void 0 !== e && "boolean" !== n || ((t = gt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + mt(gt(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var yt = /\r/g;
        L.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0];
                return arguments.length ? (i = y(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (null == (r = i ? e.call(this, n, L(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = L.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = L.valHooks[this.type] || L.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                })) : r ? (t = L.valHooks[r.type] || L.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
            }
        }), L.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = L.find.attr(e, "value");
                        return null != t ? t : mt(L.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, r = e.options,
                            a = e.selectedIndex,
                            o = "select-one" === e.type,
                            l = o ? null : [],
                            s = o ? a + 1 : r.length;
                        for (i = a < 0 ? s : o ? a : 0; i < s; i++)
                            if (((n = r[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
                                if (t = L(n).val(), o) return t;
                                l.push(t)
                            }
                        return l
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, a = L.makeArray(t), o = r.length; o--;)((i = r[o]).selected = L.inArray(L.valHooks.option.get(i), a) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), a
                    }
                }
            }
        }), L.each(["radio", "checkbox"], function() {
            L.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = L.inArray(L(e).val(), t) > -1
                }
            }, _.checkOn || (L.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), _.focusin = "onfocusin" in n;
        var vt = /^(?:focusinfocus|focusoutblur)$/,
            Mt = function(e) {
                e.stopPropagation()
            };
        L.extend(L.event, {
            trigger: function(e, t, i, r) {
                var a, l, s, d, u, c, h, p, m = [i || o],
                    g = f.call(e, "type") ? e.type : e,
                    _ = f.call(e, "namespace") ? e.namespace.split(".") : [];
                if (l = p = s = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !vt.test(g + L.event.triggered) && (g.indexOf(".") > -1 && (_ = g.split("."), g = _.shift(), _.sort()), u = g.indexOf(":") < 0 && "on" + g, (e = e[L.expando] ? e : new L.Event(g, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = _.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : L.makeArray(t, [e]), h = L.event.special[g] || {}, r || !h.trigger || !1 !== h.trigger.apply(i, t))) {
                    if (!r && !h.noBubble && !v(i)) {
                        for (d = h.delegateType || g, vt.test(d + g) || (l = l.parentNode); l; l = l.parentNode) m.push(l), s = l;
                        s === (i.ownerDocument || o) && m.push(s.defaultView || s.parentWindow || n)
                    }
                    for (a = 0;
                        (l = m[a++]) && !e.isPropagationStopped();) p = l, e.type = a > 1 ? d : h.bindType || g, (c = (K.get(l, "events") || {})[e.type] && K.get(l, "handle")) && c.apply(l, t), (c = u && l[u]) && c.apply && J(l) && (e.result = c.apply(l, t), !1 === e.result && e.preventDefault());
                    return e.type = g, r || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(m.pop(), t) || !J(i) || u && y(i[g]) && !v(i) && ((s = i[u]) && (i[u] = null), L.event.triggered = g, e.isPropagationStopped() && p.addEventListener(g, Mt), i[g](), e.isPropagationStopped() && p.removeEventListener(g, Mt), L.event.triggered = void 0, s && (i[u] = s)), e.result
                }
            },
            simulate: function(e, t, n) {
                var i = L.extend(new L.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                L.event.trigger(i, null, t)
            }
        }), L.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    L.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return L.event.trigger(e, t, n, !0)
            }
        }), _.focusin || L.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                L.event.simulate(t, e.target, L.event.fix(e))
            };
            L.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = K.access(i, t);
                    r || i.addEventListener(e, n, !0), K.access(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = K.access(i, t) - 1;
                    r ? K.access(i, t, r) : (i.removeEventListener(e, n, !0), K.remove(i, t))
                }
            }
        });
        var bt = n.location,
            wt = Date.now(),
            Lt = /\?/;
        L.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || L.error("Invalid XML: " + e), t
        };
        var Dt = /\[\]$/,
            Tt = /\r?\n/g,
            kt = /^(?:submit|button|image|reset|file)$/i,
            St = /^(?:input|select|textarea|keygen)/i;

        function xt(e, t, n, i) {
            var r;
            if (Array.isArray(t)) L.each(t, function(t, r) {
                n || Dt.test(e) ? i(e, r) : xt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== w(t)) i(e, t);
            else
                for (r in t) xt(e + "[" + r + "]", t[r], n, i)
        }
        L.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    var n = y(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(e) || e.jquery && !L.isPlainObject(e)) L.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) xt(n, e[n], t, r);
            return i.join("&")
        }, L.fn.extend({
            serialize: function() {
                return L.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = L.prop(this, "elements");
                    return e ? L.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !L(this).is(":disabled") && St.test(this.nodeName) && !kt.test(e) && (this.checked || !he.test(e))
                }).map(function(e, t) {
                    var n = L(this).val();
                    return null == n ? null : Array.isArray(n) ? L.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Tt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Tt, "\r\n")
                    }
                }).get()
            }
        });
        var Yt = /%20/g,
            Et = /#.*$/,
            Ct = /([?&])_=[^&]*/,
            Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Pt = /^(?:GET|HEAD)$/,
            Ot = /^\/\//,
            At = {},
            It = {},
            Rt = "*/".concat("*"),
            jt = o.createElement("a");

        function Ft(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    a = t.toLowerCase().match(j) || [];
                if (y(n))
                    for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function Nt(e, t, n, i) {
            var r = {},
                a = e === It;

            function o(l) {
                var s;
                return r[l] = !0, L.each(e[l] || [], function(e, l) {
                    var d = l(t, n, i);
                    return "string" != typeof d || a || r[d] ? a ? !(s = d) : void 0 : (t.dataTypes.unshift(d), o(d), !1)
                }), s
            }
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function Wt(e, t) {
            var n, i, r = L.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && L.extend(!0, e, i), e
        }
        jt.href = bt.href, L.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: bt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Rt,
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
                    "text xml": L.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Wt(Wt(e, L.ajaxSettings), t) : Wt(L.ajaxSettings, e)
            },
            ajaxPrefilter: Ft(At),
            ajaxTransport: Ft(It),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, r, a, l, s, d, u, c, h, p, f = L.ajaxSetup({}, t),
                    m = f.context || f,
                    g = f.context && (m.nodeType || m.jquery) ? L(m) : L.event,
                    _ = L.Deferred(),
                    y = L.Callbacks("once memory"),
                    v = f.statusCode || {},
                    M = {},
                    b = {},
                    w = "canceled",
                    D = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (u) {
                                if (!l)
                                    for (l = {}; t = Ht.exec(a);) l[t[1].toLowerCase()] = t[2];
                                t = l[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return u ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == u && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, M[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == u && (f.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (u) D.always(e[D.status]);
                                else
                                    for (t in e) v[t] = [v[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return i && i.abort(t), T(0, t), this
                        }
                    };
                if (_.promise(D), f.url = ((e || f.url || bt.href) + "").replace(Ot, bt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(j) || [""], null == f.crossDomain) {
                    d = o.createElement("a");
                    try {
                        d.href = f.url, d.href = d.href, f.crossDomain = jt.protocol + "//" + jt.host != d.protocol + "//" + d.host
                    } catch (e) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = L.param(f.data, f.traditional)), Nt(At, f, t, D), u) return D;
                for (h in (c = L.event && f.global) && 0 == L.active++ && L.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Pt.test(f.type), r = f.url.replace(Et, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Yt, "+")) : (p = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (Lt.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Ct, "$1"), p = (Lt.test(r) ? "&" : "?") + "_=" + wt++ + p), f.url = r + p), f.ifModified && (L.lastModified[r] && D.setRequestHeader("If-Modified-Since", L.lastModified[r]), L.etag[r] && D.setRequestHeader("If-None-Match", L.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && D.setRequestHeader("Content-Type", f.contentType), D.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : f.accepts["*"]), f.headers) D.setRequestHeader(h, f.headers[h]);
                if (f.beforeSend && (!1 === f.beforeSend.call(m, D, f) || u)) return D.abort();
                if (w = "abort", y.add(f.complete), D.done(f.success), D.fail(f.error), i = Nt(It, f, t, D)) {
                    if (D.readyState = 1, c && g.trigger("ajaxSend", [D, f]), u) return D;
                    f.async && f.timeout > 0 && (s = n.setTimeout(function() {
                        D.abort("timeout")
                    }, f.timeout));
                    try {
                        u = !1, i.send(M, T)
                    } catch (e) {
                        if (u) throw e;
                        T(-1, e)
                    }
                } else T(-1, "No Transport");

                function T(e, t, o, l) {
                    var d, h, p, M, b, w = t;
                    u || (u = !0, s && n.clearTimeout(s), i = void 0, a = l || "", D.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, o && (M = function(e, t, n) {
                        for (var i, r, a, o, l = e.contents, s = e.dataTypes;
                            "*" === s[0];) s.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                            for (r in l)
                                if (l[r] && l[r].test(i)) {
                                    s.unshift(r);
                                    break
                                }
                        if (s[0] in n) a = s[0];
                        else {
                            for (r in n) {
                                if (!s[0] || e.converters[r + " " + s[0]]) {
                                    a = r;
                                    break
                                }
                                o || (o = r)
                            }
                            a = a || o
                        }
                        if (a) return a !== s[0] && s.unshift(a), n[a]
                    }(f, D, o)), M = function(e, t, n, i) {
                        var r, a, o, l, s, d = {},
                            u = e.dataTypes.slice();
                        if (u[1])
                            for (o in e.converters) d[o.toLowerCase()] = e.converters[o];
                        for (a = u.shift(); a;)
                            if (e.responseFields[a] && (n[e.responseFields[a]] = t), !s && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = a, a = u.shift())
                                if ("*" === a) a = s;
                                else if ("*" !== s && s !== a) {
                            if (!(o = d[s + " " + a] || d["* " + a]))
                                for (r in d)
                                    if ((l = r.split(" "))[1] === a && (o = d[s + " " + l[0]] || d["* " + l[0]])) {
                                        !0 === o ? o = d[r] : !0 !== d[r] && (a = l[0], u.unshift(l[1]));
                                        break
                                    }
                            if (!0 !== o)
                                if (o && e.throws) t = o(t);
                                else try {
                                    t = o(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: o ? e : "No conversion from " + s + " to " + a
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(f, M, D, d), d ? (f.ifModified && ((b = D.getResponseHeader("Last-Modified")) && (L.lastModified[r] = b), (b = D.getResponseHeader("etag")) && (L.etag[r] = b)), 204 === e || "HEAD" === f.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = M.state, h = M.data, d = !(p = M.error))) : (p = w, !e && w || (w = "error", e < 0 && (e = 0))), D.status = e, D.statusText = (t || w) + "", d ? _.resolveWith(m, [h, w, D]) : _.rejectWith(m, [D, w, p]), D.statusCode(v), v = void 0, c && g.trigger(d ? "ajaxSuccess" : "ajaxError", [D, f, d ? h : p]), y.fireWith(m, [D, w]), c && (g.trigger("ajaxComplete", [D, f]), --L.active || L.event.trigger("ajaxStop")))
                }
                return D
            },
            getJSON: function(e, t, n) {
                return L.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return L.get(e, void 0, t, "script")
            }
        }), L.each(["get", "post"], function(e, t) {
            L[t] = function(e, n, i, r) {
                return y(n) && (r = r || i, i = n, n = void 0), L.ajax(L.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, L.isPlainObject(e) && e))
            }
        }), L._evalUrl = function(e) {
            return L.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }, L.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (y(e) && (e = e.call(this[0])), t = L(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return y(e) ? this.each(function(t) {
                    L(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = L(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = y(e);
                return this.each(function(n) {
                    L(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    L(this).replaceWith(this.childNodes)
                }), this
            }
        }), L.expr.pseudos.hidden = function(e) {
            return !L.expr.pseudos.visible(e)
        }, L.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, L.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        };
        var zt = {
                0: 200,
                1223: 204
            },
            Bt = L.ajaxSettings.xhr();
        _.cors = !!Bt && "withCredentials" in Bt, _.ajax = Bt = !!Bt, L.ajaxTransport(function(e) {
            var t, i;
            if (_.cors || Bt && !e.crossDomain) return {
                send: function(r, a) {
                    var o, l = e.xhr();
                    if (l.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) l[o] = e.xhrFields[o];
                    for (o in e.mimeType && l.overrideMimeType && l.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) l.setRequestHeader(o, r[o]);
                    t = function(e) {
                        return function() {
                            t && (t = i = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null, "abort" === e ? l.abort() : "error" === e ? "number" != typeof l.status ? a(0, "error") : a(l.status, l.statusText) : a(zt[l.status] || l.status, l.statusText, "text" !== (l.responseType || "text") || "string" != typeof l.responseText ? {
                                binary: l.response
                            } : {
                                text: l.responseText
                            }, l.getAllResponseHeaders()))
                        }
                    }, l.onload = t(), i = l.onerror = l.ontimeout = t("error"), void 0 !== l.onabort ? l.onabort = i : l.onreadystatechange = function() {
                        4 === l.readyState && n.setTimeout(function() {
                            t && i()
                        })
                    }, t = t("abort");
                    try {
                        l.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
        }), L.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), L.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return L.globalEval(e), e
                }
            }
        }), L.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), L.ajaxTransport("script", function(e) {
            var t, n;
            if (e.crossDomain) return {
                send: function(i, r) {
                    t = L("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), o.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        });
        var Vt, Gt = [],
            Ut = /(=)\?(?=&|$)|\?\?/;
        L.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Gt.pop() || L.expando + "_" + wt++;
                return this[e] = !0, e
            }
        }), L.ajaxPrefilter("json jsonp", function(e, t, i) {
            var r, a, o, l = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
            if (l || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, l ? e[l] = e[l].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return o || L.error(r + " was not called"), o[0]
            }, e.dataTypes[0] = "json", a = n[r], n[r] = function() {
                o = arguments
            }, i.always(function() {
                void 0 === a ? L(n).removeProp(r) : n[r] = a, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && y(a) && a(o[0]), o = a = void 0
            }), "script"
        }), _.createHTMLDocument = ((Vt = o.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), L.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (_.createHTMLDocument ? ((i = (t = o.implementation.createHTMLDocument("")).createElement("base")).href = o.location.href, t.head.appendChild(i)) : t = o), a = !n && [], (r = C.exec(e)) ? [t.createElement(r[1])] : (r = be([e], t, a), a && a.length && L(a).remove(), L.merge([], r.childNodes)));
            var i, r, a
        }, L.fn.load = function(e, t, n) {
            var i, r, a, o = this,
                l = e.indexOf(" ");
            return l > -1 && (i = mt(e.slice(l)), e = e.slice(0, l)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && L.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                a = arguments, o.html(i ? L("<div>").append(L.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                o.each(function() {
                    n.apply(this, a || [e.responseText, t, e])
                })
            }), this
        }, L.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            L.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), L.expr.pseudos.animated = function(e) {
            return L.grep(L.timers, function(t) {
                return e === t.elem
            }).length
        }, L.offset = {
            setOffset: function(e, t, n) {
                var i, r, a, o, l, s, d = L.css(e, "position"),
                    u = L(e),
                    c = {};
                "static" === d && (e.style.position = "relative"), l = u.offset(), a = L.css(e, "top"), s = L.css(e, "left"), ("absolute" === d || "fixed" === d) && (a + s).indexOf("auto") > -1 ? (o = (i = u.position()).top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(s) || 0), y(t) && (t = t.call(e, n, L.extend({}, l))), null != t.top && (c.top = t.top - l.top + o), null != t.left && (c.left = t.left - l.left + r), "using" in t ? t.using.call(e, c) : u.css(c)
            }
        }, L.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    L.offset.setOffset(this, e, t)
                });
                var t, n, i = this[0];
                return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, i = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === L.css(i, "position")) t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === L.css(e, "position");) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && ((r = L(e).offset()).top += L.css(e, "borderTopWidth", !0), r.left += L.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - r.top - L.css(i, "marginTop", !0),
                        left: t.left - r.left - L.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === L.css(e, "position");) e = e.offsetParent;
                    return e || we
                })
            }
        }), L.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            L.fn[e] = function(i) {
                return G(this, function(e, i, r) {
                    var a;
                    if (v(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === r) return a ? a[t] : e[i];
                    a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : e[i] = r
                }, e, i, arguments.length)
            }
        }), L.each(["top", "left"], function(e, t) {
            L.cssHooks[t] = Ve(_.pixelPosition, function(e, n) {
                if (n) return n = Be(e, t), Ne.test(n) ? L(e).position()[t] + "px" : n
            })
        }), L.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            L.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                L.fn[i] = function(r, a) {
                    var o = arguments.length && (n || "boolean" != typeof r),
                        l = n || (!0 === r || !0 === a ? "margin" : "border");
                    return G(this, function(t, n, r) {
                        var a;
                        return v(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? L.css(t, n, l) : L.style(t, n, r, l)
                    }, t, o ? r : void 0, o)
                }
            })
        }), L.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            L.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), L.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), L.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), L.proxy = function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = s.call(arguments, 2), (r = function() {
                return e.apply(t || this, i.concat(s.call(arguments)))
            }).guid = e.guid = e.guid || L.guid++, r
        }, L.holdReady = function(e) {
            e ? L.readyWait++ : L.ready(!0)
        }, L.isArray = Array.isArray, L.parseJSON = JSON.parse, L.nodeName = E, L.isFunction = y, L.isWindow = v, L.camelCase = X, L.type = w, L.now = Date.now, L.isNumeric = function(e) {
            var t = L.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, void 0 === (i = function() {
            return L
        }.apply(t, [])) || (e.exports = i);
        var Zt = n.jQuery,
            qt = n.$;
        return L.noConflict = function(e) {
            return n.$ === L && (n.$ = qt), e && n.jQuery === L && (n.jQuery = Zt), L
        }, r || (n.jQuery = n.$ = L), L
    })