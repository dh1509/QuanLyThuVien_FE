/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [], E = C.document, r = Object.getPrototypeOf, s = t.slice, g = t.concat, u = t.push, i = t.indexOf, n = {},
    o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType
    }, x = function (e) {
      return null != e && e === e.window
    }, c = {type: !0, src: !0, nonce: !0, noModule: !0};

  function b(e, t, n) {
    var r, i, o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o)
  }

  function w(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
  }

  var f = "3.4.1", k = function (e, t) {
    return new k.fn.init(e, t)
  }, p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function d(e) {
    var t = !!e && "length" in e && e.length, n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }

  k.fn = k.prototype = {
    jquery: f, constructor: k, length: 0, toArray: function () {
      return s.call(this)
    }, get: function (e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
    }, pushStack: function (e) {
      var t = k.merge(this.constructor(), e);
      return t.prevObject = this, t
    }, each: function (e) {
      return k.each(this, e)
    }, map: function (n) {
      return this.pushStack(k.map(this, function (e, t) {
        return n.call(e, t, e)
      }))
    }, slice: function () {
      return this.pushStack(s.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (e) {
      var t = this.length, n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : [])
    }, end: function () {
      return this.prevObject || this.constructor()
    }, push: u, sort: t.sort, splice: t.splice
  }, k.extend = k.fn.extend = function () {
    var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a
  }, k.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
      throw new Error(e)
    }, noop: function () {
    }, isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
    }, isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    }, globalEval: function (e, t) {
      b(e, {nonce: t && t.nonce})
    }, each: function (e, t) {
      var n, r = 0;
      if (d(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
      return e
    }, trim: function (e) {
      return null == e ? "" : (e + "").replace(p, "")
    }, makeArray: function (e, t) {
      var n = t || [];
      return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
    }, inArray: function (e, t, n) {
      return null == t ? -1 : i.call(t, e, n)
    }, merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e
    }, grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r
    }, map: function (e, t, n) {
      var r, i, o = 0, a = [];
      if (d(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g.apply([], a)
    }, guid: 1, support: y
  }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase()
  });
  var h = function (n) {
    var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date, m = n.document, S = 0,
      r = 0, p = ue(), x = ue(), N = ue(), A = ue(), D = function (e, t) {
        return e === t && (l = !0), 0
      }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1
      },
      R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
      $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
      F = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + $),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
      }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
      te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ne = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      }, oe = function () {
        T()
      }, ae = be(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
      }, {dir: "parentNode", next: "legend"});
    try {
      H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t))
        } : function (e, t) {
          var n = e.length, r = 0;
          while (e[n++] = t[r++]) ;
          e.length = n - 1
        }
      }
    }

    function se(t, e, n, r) {
      var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
        }
        if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && U.test(t)) {
            (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length;
            while (o--) l[o] = "#" + s + " " + xe(l[o]);
            c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n
          } catch (e) {
            A(t, !0)
          } finally {
            s === k && e.removeAttribute("id")
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r)
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
      }
    }

    function le(e) {
      return e[k] = !0, e
    }

    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function fe(e, t) {
      var n = e.split("|"), r = n.length;
      while (r--) b.attrHandle[n[r]] = t
    }

    function pe(e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) if (n === t) return -1;
      return e ? 1 : -1
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t
      }
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n
      }
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
      }
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n, r = a([], e.length, o), i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
        })
      })
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML")
    }, T = se.setDocument = function (e) {
      var t, n, r = e ? e.ownerDocument || e : m;
      return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className")
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : []
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n
        }
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n, r, i, o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;
            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
          }
          return []
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
      } : function (e, t) {
        var n, r = [], i = 0, o = t.getElementsByTagName(e);
        if ("*" === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);
          return r
        }
        return o
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $)
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      } : function (e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;
        return !1
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
        if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;
        while (n = n.parentNode) a.unshift(n);
        n = t;
        while (n = n.parentNode) s.unshift(n);
        while (a[r] === s[r]) r++;
        return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
      }), C
    }, se.matches = function (e, t) {
      return se(e, null, null, t)
    }, se.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
      } catch (e) {
        A(t, !0)
      }
      return 0 < se(t, C, null, [e]).length
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t)
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()], r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }, se.escape = function (e) {
      return (e + "").replace(re, ie)
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, se.uniqueSort = function (e) {
      var t, n = [], r = 0, i = 0;
      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1)
      }
      return u = null, e
    }, o = se.getText = function (e) {
      var t, n = "", r = 0, i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
        } else if (3 === i || 4 === i) return e.nodeValue
      } else while (t = e[r++]) n += o(t);
      return n
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {dir: "parentNode", first: !0},
        " ": {dir: "parentNode"},
        "+": {dir: "previousSibling", first: !0},
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
        }, PSEUDO: function (e) {
          var t, n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        }, CLASS: function (e) {
          var t = p[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
          })
        }, ATTR: function (n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
          }
        }, CHILD: function (h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode
          } : function (e, t, n) {
            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode,
              f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
            if (c) {
              if (y) {
                while (l) {
                  a = e;
                  while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  u = l = "only" === h && !u && "nextSibling"
                }
                return !0
              }
              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];
                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                  i[h] = [S, s, d];
                  break
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
              return (d -= v) === g || d % g == 0 && 0 <= d / g
            }
          }
        }, PSEUDO: function (e, o) {
          var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n, r = a(e, o), i = r.length;
            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
          }) : function (e) {
            return a(e, 0, t)
          }) : a
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [], i = [], s = f(e.replace(B, "$1"));
          return s[k] ? le(function (e, t, n, r) {
            var i, o = s(e, null, r, []), a = e.length;
            while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
          }
        }), has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length
          }
        }), contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t)
          }
        }), lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;
            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
            } while ((e = e.parentNode) && 1 === e.nodeType);
            return !1
          }
        }), target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id
        }, root: function (e) {
          return e === a
        }, focus: function (e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
          return !0
        }, parent: function (e) {
          return !b.pseudos.empty(e)
        }, header: function (e) {
          return J.test(e.nodeName)
        }, input: function (e) {
          return Q.test(e.nodeName)
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        }, first: ve(function () {
          return [0]
        }), last: ve(function (e, t) {
          return [t - 1]
        }), eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n]
        }), even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e
        }), odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e
        }), lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
          return e
        }), gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
          return e
        })
      }
    }).pseudos.nth = b.pseudos.eq, {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) b.pseudos[e] = de(e);
    for (e in {submit: !0, reset: !0}) b.pseudos[e] = he(e);

    function me() {
    }

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r
    }

    function be(s, e, t) {
      var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
        return !1
      } : function (e, t, n) {
        var r, i, o, a = [S, p];
        if (n) {
          while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0
        } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
          if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
          if ((i[c] = a)[2] = s(e, t, n)) return !0
        }
        return !1
      }
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;
        while (r--) if (!i[r](e, t, n)) return !1;
        return !0
      } : i[0]
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i, o, a, s = [], u = [], l = t.length, c = e || function (e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
            return n
          }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r),
          p = g ? y || (e ? d : l || v) ? [] : t : f;
        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;
          while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;
              while (o--) (a = p[o]) && i.push(f[o] = a);
              y(null, p = [], i, r)
            }
            o = p.length;
            while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
      })
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e)
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r
      }]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)]; else {
        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
          for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
          return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
        }
        c.push(t)
      }
      return we(c)
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
      var n, r, i, o, a, s, u, l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(B, " ")
        }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break
      }
      return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
    }, f = se.compile = function (e, t) {
      var n, v, y, m, x, r, i = [], o = [], a = N[e + " "];
      if (!a) {
        t || (t = h(e)), n = t.length;
        while (n--) (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
        (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
          var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i),
            h = S += null == p ? 1 : Math.random() || .1, g = d.length;
          for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument === C || (T(o), n = !E);
              while (s = v[a++]) if (s(o, t || C, n)) {
                r.push(o);
                break
              }
              i && (S = h)
            }
            m && ((o = !s && o) && u--, e && c.push(o))
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
              f = Te(f)
            }
            H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
          }
          return i && (S = h, w = p), c
        }, m ? le(r) : r))).selector = e
      }
      return a
    }, g = se.select = function (e, t, n, r) {
      var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        i = G.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break
          }
        }
      }
      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
    }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), ce(function (e) {
      return null == e.getAttribute("disabled")
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }), se
  }(C);
  k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
  var T = function (e, t, n) {
    var r = [], i = void 0 !== n;
    while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
      if (i && k(e).is(n)) break;
      r.push(e)
    }
    return r
  }, S = function (e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n
  }, N = k.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }

  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? k.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r
    }) : n.nodeType ? k.grep(e, function (e) {
      return e === n !== r
    }) : "string" != typeof n ? k.grep(e, function (e) {
      return -1 < i.call(n, e) !== r
    }) : k.filter(n, e, r)
  }

  k.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, k.fn.extend({
    find: function (e) {
      var t, n, r = this.length, i = this;
      if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
        for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
      return 1 < r ? k.uniqueSort(n) : n
    }, filter: function (e) {
      return this.pushStack(j(this, e || [], !1))
    }, not: function (e) {
      return this.pushStack(j(this, e || [], !0))
    }, is: function (e) {
      return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length
    }
  });
  var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || q, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this
      }
      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
  }).prototype = k.fn, q = k(E);
  var H = /^(?:parents|prev(?:Until|All))/, O = {children: !0, contents: !0, next: !0, prev: !0};

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) ;
    return e
  }

  k.fn.extend({
    has: function (e) {
      var t = k(e, this), n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0
      })
    }, closest: function (e, t) {
      var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e);
      if (!N.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
        o.push(n);
        break
      }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
    }, index: function (e) {
      return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), k.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
      return T(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
      return T(e, "parentNode", n)
    }, next: function (e) {
      return P(e, "nextSibling")
    }, prev: function (e) {
      return P(e, "previousSibling")
    }, nextAll: function (e) {
      return T(e, "nextSibling")
    }, prevAll: function (e) {
      return T(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
      return T(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
      return T(e, "previousSibling", n)
    }, siblings: function (e) {
      return S((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
      return S(e.firstChild)
    }, contents: function (e) {
      return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
    }
  }, function (r, i) {
    k.fn[r] = function (e, t) {
      var n = k.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n)
    }
  });
  var R = /[^\x20\t\r\n\f]+/g;

  function M(e) {
    return e
  }

  function I(e) {
    throw e
  }

  function W(e, t, n, r) {
    var i;
    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }

  k.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
      n[t] = !0
    }), n) : k.extend({}, r);
    var i, t, o, a, s = [], u = [], l = -1, c = function () {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();
        while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
      }
      r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
    }, f = {
      add: function () {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          k.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
          })
        }(arguments), t && !i && c()), this
      }, remove: function () {
        return k.each(arguments, function (e, t) {
          var n;
          while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
        }), this
      }, has: function (e) {
        return e ? -1 < k.inArray(e, s) : 0 < s.length
      }, empty: function () {
        return s && (s = []), this
      }, disable: function () {
        return a = u = [], s = t = "", this
      }, disabled: function () {
        return !s
      }, lock: function () {
        return a = u = [], t || i || (s = t = ""), this
      }, locked: function () {
        return !!a
      }, fireWith: function (e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
      }, fire: function () {
        return f.fireWith(this, arguments), this
      }, fired: function () {
        return !!o
      }
    };
    return f
  }, k.extend({
    Deferred: function (e) {
      var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
        i = "pending", a = {
          state: function () {
            return i
          }, always: function () {
            return s.done(arguments).fail(arguments), this
          }, "catch": function (e) {
            return a.then(null, e)
          }, pipe: function () {
            var i = arguments;
            return k.Deferred(function (r) {
              k.each(o, function (e, t) {
                var n = m(i[t[4]]) && i[t[4]];
                s[t[1]](function () {
                  var e = n && n.apply(this, arguments);
                  e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                })
              }), i = null
            }).promise()
          }, then: function (t, n, r) {
            var u = 0;

            function l(i, o, a, s) {
              return function () {
                var n = this, r = arguments, e = function () {
                  var e, t;
                  if (!(i < u)) {
                    if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                  }
                }, t = s ? e : function () {
                  try {
                    e()
                  } catch (e) {
                    k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r))
                  }
                };
                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
              }
            }

            return k.Deferred(function (e) {
              o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I))
            }).promise()
          }, promise: function (e) {
            return null != e ? k.extend(e, a) : a
          }
        }, s = {};
      return k.each(o, function (e, t) {
        var n = t[2], r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
        }, s[t[0] + "With"] = n.fireWith
      }), a.promise(s), e && e.call(s, s), s
    }, when: function (e) {
      var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = k.Deferred(), a = function (t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
        }
      };
      if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
      while (t--) W(i[t], a(t), o.reject);
      return o.promise()
    }
  });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  k.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
  }, k.readyException = function (e) {
    C.setTimeout(function () {
      throw e
    })
  };
  var F = k.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready()
  }

  k.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      k.readyException(e)
    }), this
  }, k.extend({
    isReady: !1, readyWait: 1, ready: function (e) {
      (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
    }
  }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
  var _ = function (e, t, n, r, i, o, a) {
    var s = 0, u = e.length, l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) _(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
      return l.call(k(e), n)
    })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
  }, z = /^-ms-/, U = /-([a-z])/g;

  function X(e, t) {
    return t.toUpperCase()
  }

  function V(e) {
    return e.replace(z, "ms-").replace(U, X)
  }

  var G = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function Y() {
    this.expando = k.expando + Y.uid++
  }

  Y.uid = 1, Y.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    }, set: function (e, t, n) {
      var r, i = this.cache(e);
      if ("string" == typeof t) i[V(t)] = n; else for (r in t) i[V(r)] = t[r];
      return i
    }, get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
    }, access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    }, remove: function (e, t) {
      var n, r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
          while (n--) delete r[t[n]]
        }
        (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    }, hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !k.isEmptyObject(t)
    }
  };
  var Q = new Y, J = new Y, K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Z = /[A-Z]/g;

  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
      } catch (e) {
      }
      J.set(e, t, n)
    } else n = void 0;
    return n
  }

  k.extend({
    hasData: function (e) {
      return J.hasData(e) || Q.hasData(e)
    }, data: function (e, t, n) {
      return J.access(e, t, n)
    }, removeData: function (e, t) {
      J.remove(e, t)
    }, _data: function (e, t, n) {
      return Q.access(e, t, n)
    }, _removeData: function (e, t) {
      Q.remove(e, t)
    }
  }), k.fn.extend({
    data: function (n, e) {
      var t, r, i, o = this[0], a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
          Q.set(o, "hasDataAttrs", !0)
        }
        return i
      }
      return "object" == typeof n ? this.each(function () {
        J.set(this, n)
      }) : _(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
        this.each(function () {
          J.set(this, n, e)
        })
      }, null, e, 1 < arguments.length, null, !0)
    }, removeData: function (e) {
      return this.each(function () {
        J.remove(this, e)
      })
    }
  }), k.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || []
    }, dequeue: function (e, t) {
      t = t || "fx";
      var n = k.queue(e, t), r = n.length, i = n.shift(), o = k._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        k.dequeue(e, t)
      }, o)), !r && o && o.empty.fire()
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return Q.get(e, n) || Q.access(e, n, {
        empty: k.Callbacks("once memory").add(function () {
          Q.remove(e, [t + "queue", n])
        })
      })
    }
  }), k.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = k.queue(this, t, n);
        k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
      })
    }, dequeue: function (e) {
      return this.each(function () {
        k.dequeue(this, e)
      })
    }, clearQueue: function (e) {
      return this.queue(e || "fx", [])
    }, promise: function (e, t) {
      var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function () {
        --r || i.resolveWith(o, [o])
      };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--) (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t)
    }
  });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    re = ["Top", "Right", "Bottom", "Left"], ie = E.documentElement, oe = function (e) {
      return k.contains(e.ownerDocument, e)
    }, ae = {composed: !0};
  ie.getRootNode && (oe = function (e) {
    return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
  });
  var se = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
  }, ue = function (e, t, n, r) {
    var i, o, a = {};
    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
    for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
    return i
  };

  function le(e, t, n, r) {
    var i, o, a = 20, s = r ? function () {
        return r.cur()
      } : function () {
        return k.css(e, t, "")
      }, u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, k.style(e, t, c + l), n = n || []
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
  }

  var ce = {};

  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e
  }

  k.fn.extend({
    show: function () {
      return fe(this, !0)
    }, hide: function () {
      return fe(this)
    }, toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        se(this) ? k(this).show() : k(this).hide()
      })
    }
  });
  var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
  }

  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
  var me, xe, be = /<|&#?\w+;/;

  function we(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o); else if (be.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
    } else p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++]) if (r && -1 < k.inArray(o, r)) i && i.push(o); else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
      c = 0;
      while (o = a[c++]) he.test(o.type || "") && n.push(o)
    }
    return f
  }

  me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
  var Te = /^key/, Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ee = /^([^.]*)(?:\.(.+)|)/;

  function ke() {
    return !0
  }

  function Se() {
    return !1
  }

  function Ne(e, t) {
    return e === function () {
      try {
        return E.activeElement
      } catch (e) {
      }
    }() == ("focus" === t)
  }

  function Ae(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);
      return e
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se; else if (!i) return e;
    return 1 === o && (a = i, (i = function (e) {
      return k().off(e), a.apply(this, arguments)
    }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
      k.event.add(this, t, i, r, n)
    })
  }

  function De(e, i, o) {
    o ? (Q.set(e, i, !1), k.event.add(e, i, {
      namespace: !1, handler: function (e) {
        var t, n, r = Q.get(this, i);
        if (1 & e.isTrigger && this[i]) {
          if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
        } else r.length && (Q.set(this, i, {value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)}), e.stopImmediatePropagation())
      }
    })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
  }

  k.event = {
    global: {}, add: function (t, e, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
      if (v) {
        n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
        }), l = (e = (e || "").match(R) || [""]).length;
        while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && k.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
      }
    }, remove: function (e, t, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;
        while (l--) if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
          f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
          while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
        } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
        k.isEmptyObject(u) && Q.remove(e, "handle events")
      }
    }, dispatch: function (e) {
      var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length),
        l = (Q.get(this, "events") || {})[s.type] || [], c = k.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        a = k.event.handlers.call(this, s, l), t = 0;
        while ((i = a[t++]) && !s.isPropagationStopped()) {
          s.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, s), s.result
      }
    }, handlers: function (e, t) {
      var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
        o.length && s.push({elem: l, handlers: o})
      }
      return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
    }, addProp: function (t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0, configurable: !0, get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent)
        } : function () {
          if (this.originalEvent) return this.originalEvent[t]
        }, set: function (e) {
          Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
        }
      })
    }, fix: function (e) {
      return e[k.expando] ? e : new k.Event(e)
    }, special: {
      load: {noBubble: !0}, click: {
        setup: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1
        }, trigger: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
        }, _default: function (e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
        }
      }, beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, k.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, k.Event = function (e, t) {
    if (!(this instanceof k.Event)) return new k.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
  }, k.Event.prototype = {
    constructor: k.Event,
    isDefaultPrevented: Se,
    isPropagationStopped: Se,
    isImmediatePropagationStopped: Se,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, k.each({
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
    which: function (e) {
      var t = e.button;
      return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, k.event.addProp), k.each({focus: "focusin", blur: "focusout"}, function (e, t) {
    k.event.special[e] = {
      setup: function () {
        return De(this, e, Ne), !1
      }, trigger: function () {
        return De(this, e), !0
      }, delegateType: t
    }
  }), k.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    k.event.special[e] = {
      delegateType: i, bindType: i, handle: function (e) {
        var t, n = e.relatedTarget, r = e.handleObj;
        return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
      }
    }
  }), k.fn.extend({
    on: function (e, t, n, r) {
      return Ae(this, e, t, n, r)
    }, one: function (e, t, n, r) {
      return Ae(this, e, t, n, r, 1)
    }, off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
        k.event.remove(this, e, n, t)
      })
    }
  });
  var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    qe = /<script|<style|<link/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
    He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Oe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
  }

  function Pe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function Re(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function Me(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
      J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u))
    }
  }

  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o)
    });
    if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {nonce: u.nonce || u.getAttribute("nonce")}) : b(u.textContent.replace(He, ""), u, l))
    }
    return n
  }

  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e
  }

  k.extend({
    htmlPrefilter: function (e) {
      return e.replace(je, "<$1></$2>")
    }, clone: function (e, t, n) {
      var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]); else Me(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
    }, cleanData: function (e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) if (G(n)) {
        if (t = n[Q.expando]) {
          if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
          n[Q.expando] = void 0
        }
        n[J.expando] && (n[J.expando] = void 0)
      }
    }
  }), k.fn.extend({
    detach: function (e) {
      return We(this, e, !0)
    }, remove: function (e) {
      return We(this, e)
    }, text: function (e) {
      return _(this, function (e) {
        return void 0 === e ? k.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    }, append: function () {
      return Ie(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
      })
    }, prepend: function () {
      return Ie(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Oe(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    }, before: function () {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    }, after: function () {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    }, empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
      return this
    }, clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return k.clone(this, e, t)
      })
    }, html: function (e) {
      return _(this, function (e) {
        var t = this[0] || {}, n = 0, r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = k.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {
          }
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    }, replaceWith: function () {
      var n = [];
      return Ie(this, arguments, function (e) {
        var t = this.parentNode;
        k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this))
      }, n)
    }
  }), k.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    k.fn[e] = function (e) {
      for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
      return this.pushStack(n)
    }
  });
  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"), Fe = function (e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e)
  }, Be = new RegExp(re.join("|"), "i");

  function _e(e, t, n) {
    var r, i, o, a, s = e.style;
    return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
  }

  function ze(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }

  !function () {
    function e() {
      if (u) {
        s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null
      }
    }

    function t(e) {
      return Math.round(parseFloat(e))
    }

    var n, r, i, o, a, s = E.createElement("div"), u = E.createElement("div");
    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
      boxSizingReliable: function () {
        return e(), r
      }, pixelBoxStyles: function () {
        return e(), o
      }, pixelPosition: function () {
        return e(), n
      }, reliableMarginLeft: function () {
        return e(), a
      }, scrollboxSize: function () {
        return e(), i
      }
    }))
  }();
  var Ue = ["Webkit", "Moz", "ms"], Xe = E.createElement("div").style, Ve = {};

  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return t || (e in Xe ? e : Ve[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
      while (n--) if ((e = Ue[n] + t) in Xe) return e
    }(e) || e)
  }

  var Ye = /^(none|table(?!-c[ea]).+)/, Qe = /^--/, Je = {position: "absolute", visibility: "hidden", display: "block"},
    Ke = {letterSpacing: "0", fontWeight: "400"};

  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }

  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0, s = 0, u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
  }

  function tt(e, t, n) {
    var r = Fe(e), i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r), o = i,
      a = _e(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
    if ($e.test(a)) {
      if (!n) return a;
      a = "auto"
    }
    return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
  }

  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i)
  }

  k.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = _e(e, "opacity");
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
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = V(t), u = Qe.test(t), l = e.style;
        if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
      }
    },
    css: function (e, t, n, r) {
      var i, o, a, s = V(t);
      return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
    }
  }), k.each(["height", "width"], function (e, u) {
    k.cssHooks[u] = {
      get: function (e, t, n) {
        if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
          return tt(e, u, n)
        })
      }, set: function (e, t, n) {
        var r, i = Fe(e), o = !y.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i), s = n ? et(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s)
      }
    }
  }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {marginLeft: 0}, function () {
      return e.getBoundingClientRect().left
    })) + "px"
  }), k.each({margin: "", padding: "", border: "Width"}, function (i, o) {
    k.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
        return n
      }
    }, "margin" !== i && (k.cssHooks[i + o].set = Ze)
  }), k.fn.extend({
    css: function (e, t) {
      return _(this, function (e, t, n) {
        var r, i, o = {}, a = 0;
        if (Array.isArray(t)) {
          for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
          return o
        }
        return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
      }, e, t, 1 < arguments.length)
    }
  }), ((k.Tween = nt).prototype = {
    constructor: nt, init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
    }, cur: function () {
      var e = nt.propHooks[this.prop];
      return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
    }, run: function (e) {
      var t, n = nt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
    }
  }).init.prototype = nt.prototype, (nt.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      }, set: function (e) {
        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }).scrollTop = nt.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, k.easing = {
    linear: function (e) {
      return e
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }, _default: "swing"
  }, k.fx = nt.prototype.init, k.fx.step = {};
  var rt, it, ot, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;

  function lt() {
    it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick())
  }

  function ct() {
    return C.setTimeout(function () {
      rt = void 0
    }), rt = Date.now()
  }

  function ft(e, t) {
    var n, r = 0, i = {height: e};
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function pt(e, t, n) {
    for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
  }

  function dt(o, e, t) {
    var n, a, r = 0, i = dt.prefilters.length, s = k.Deferred().always(function () {
      delete u.elem
    }), u = function () {
      if (a) return !1;
      for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
    }, l = s.promise({
      elem: o,
      props: k.extend({}, e),
      opts: k.extend(!0, {specialEasing: {}, easing: k.easing._default}, t),
      originalProperties: e,
      originalOptions: t,
      startTime: rt || ct(),
      duration: t.duration,
      tweens: [],
      createTween: function (e, t) {
        var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n
      },
      stop: function (e) {
        var t = 0, n = e ? l.tweens.length : 0;
        if (a) return this;
        for (a = !0; t < n; t++) l.tweens[t].run(1);
        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
      }
    }), c = l.props;
    for (!function (e, t) {
      var n, r, i, o, a;
      for (n in e) if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
    }(c, l.opts.specialEasing); r < i; r++) if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l
  }

  k.Animation = k.extend(dt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return le(n.elem, e, ne.exec(t), n), n
      }]
    }, tweener: function (e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(R);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
    }, prefilters: [function (e, t, n) {
      var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
        g = e.nodeType && se(e), v = Q.get(e, "fxshow");
      for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s()
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
        })
      })), t) if (i = t[r], st.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0
        }
        d[r] = v && v[r] || k.style(e, r)
      }
      if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
        h.display = l
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
      })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {display: l}), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
        for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r])
      })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
    }], prefilter: function (e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
    }
  }), k.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? k.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
    }, r
  }, k.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(se).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
    }, animate: function (t, e, n, r) {
      var i = k.isEmptyObject(t), o = k.speed(e, n, r), a = function () {
        var e = dt(this, k.extend({}, t), o);
        (i || Q.get(this, "finish")) && e.stop(!0)
      };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
    }, stop: function (i, e, o) {
      var a = function (e) {
        var t = e.stop;
        delete e.stop, t(o)
      };
      return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
        var e = !0, t = null != i && i + "queueHooks", n = k.timers, r = Q.get(this);
        if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || k.dequeue(this, i)
      })
    }, finish: function (a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e, t = Q.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0;
        for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }), k.each(["toggle", "show", "hide"], function (e, r) {
    var i = k.fn[r];
    k.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
    }
  }), k.each({
    slideDown: ft("show"),
    slideUp: ft("hide"),
    slideToggle: ft("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (e, r) {
    k.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n)
    }
  }), k.timers = [], k.fx.tick = function () {
    var e, t = 0, n = k.timers;
    for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || k.fx.stop(), rt = void 0
  }, k.fx.timer = function (e) {
    k.timers.push(e), k.fx.start()
  }, k.fx.interval = 13, k.fx.start = function () {
    it || (it = !0, lt())
  }, k.fx.stop = function () {
    it = null
  }, k.fx.speeds = {slow: 600, fast: 200, _default: 400}, k.fn.delay = function (r, e) {
    return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);
      t.stop = function () {
        C.clearTimeout(n)
      }
    })
  }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
  var ht, gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function (e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length)
    }, removeAttr: function (e) {
      return this.each(function () {
        k.removeAttr(this, e)
      })
    }
  }), k.extend({
    attr: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
    }, attrHooks: {
      type: {
        set: function (e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }, removeAttr: function (e, t) {
      var n, r = 0, i = t && t.match(R);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
    }
  }), ht = {
    set: function (e, t, n) {
      return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = gt[t] || k.find.attr;
    gt[t] = function (e, t, n) {
      var r, i, o = t.toLowerCase();
      return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r
    }
  });
  var vt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;

  function mt(e) {
    return (e.match(R) || []).join(" ")
  }

  function xt(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function bt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
  }

  k.fn.extend({
    prop: function (e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length)
    }, removeProp: function (e) {
      return this.each(function () {
        delete this[k.propFix[e] || e]
      })
    }
  }), k.extend({
    prop: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    }, propHooks: {
      tabIndex: {
        get: function (e) {
          var t = k.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }, propFix: {"for": "htmlFor", "class": "className"}
  }), y.optSelected || (k.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    }, set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    k.propFix[this.toLowerCase()] = this
  }), k.fn.extend({
    addClass: function (t) {
      var e, n, r, i, o, a, s, u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).addClass(t.call(this, e, xt(this)))
      });
      if ((e = bt(t)).length) while (n = this[u++]) if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
        a = 0;
        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
        i !== (s = mt(r)) && n.setAttribute("class", s)
      }
      return this
    }, removeClass: function (t) {
      var e, n, r, i, o, a, s, u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).removeClass(t.call(this, e, xt(this)))
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = bt(t)).length) while (n = this[u++]) if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
        a = 0;
        while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
        i !== (s = mt(r)) && n.setAttribute("class", s)
      }
      return this
    }, toggleClass: function (i, t) {
      var o = typeof i, a = "string" === o || Array.isArray(i);
      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        k(this).toggleClass(i.call(this, e, xt(this), t), t)
      }) : this.each(function () {
        var e, t, n, r;
        if (a) {
          t = 0, n = k(this), r = bt(i);
          while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
        } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
      })
    }, hasClass: function (e) {
      var t, n, r = 0;
      t = " " + e + " ";
      while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
      return !1
    }
  });
  var wt = /\r/g;
  k.fn.extend({
    val: function (n) {
      var r, e, i, t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
          return null == e ? "" : e + ""
        })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
      })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
    }
  }), k.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = k.find.attr(e, "value");
          return null != t ? t : mt(k.text(e))
        }
      }, select: {
        get: function (e) {
          var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
            if (t = k(n).val(), a) return t;
            s.push(t)
          }
          return s
        }, set: function (e, t) {
          var n, r, i = e.options, o = k.makeArray(t), a = i.length;
          while (a--) ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), k.each(["radio", "checkbox"], function () {
    k.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
      }
    }, y.checkOn || (k.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), y.focusin = "onfocusin" in C;
  var Tt = /^(?:focusinfocus|focusoutblur)$/, Ct = function (e) {
    e.stopPropagation()
  };
  k.extend(k.event, {
    trigger: function (e, t, n, r) {
      var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result
      }
    }, simulate: function (e, t, n) {
      var r = k.extend(new k.Event, n, {type: e, isSimulated: !0});
      k.event.trigger(r, null, t)
    }
  }), k.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        k.event.trigger(e, t, this)
      })
    }, triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return k.event.trigger(e, t, n, !0)
    }
  }), y.focusin || k.each({focus: "focusin", blur: "focusout"}, function (n, r) {
    var i = function (e) {
      k.event.simulate(r, e.target, k.event.fix(e))
    };
    k.event.special[r] = {
      setup: function () {
        var e = this.ownerDocument || this, t = Q.access(e, r);
        t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1)
      }, teardown: function () {
        var e = this.ownerDocument || this, t = Q.access(e, r) - 1;
        t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r))
      }
    }
  });
  var Et = C.location, kt = Date.now(), St = /\?/;
  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = (new C.DOMParser).parseFromString(e, "text/xml")
    } catch (e) {
      t = void 0
    }
    return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
  };
  var Nt = /\[\]$/, At = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;

  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) k.each(e, function (e, t) {
      r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
    }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) qt(n + "[" + t + "]", e[t], r, i)
  }

  k.param = function (e, t) {
    var n, r = [], i = function (e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
    };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
      i(this.name, this.value)
    }); else for (n in e) qt(n, e[n], t, i);
    return r.join("&")
  }, k.fn.extend({
    serialize: function () {
      return k.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var e = k.prop(this, "elements");
        return e ? k.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
      }).map(function (e, t) {
        var n = k(this).val();
        return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
          return {name: t.name, value: e.replace(At, "\r\n")}
        }) : {name: t.name, value: n.replace(At, "\r\n")}
      }).get()
    }
  });
  var Lt = /%20/g, Ht = /#.*$/, Ot = /([?&])_=[^&]*/, Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Rt = /^(?:GET|HEAD)$/,
    Mt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Ft = E.createElement("a");

  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n, r = 0, i = e.toLowerCase().match(R) || [];
      if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
    }
  }

  function _t(t, i, o, a) {
    var s = {}, u = t === Wt;

    function l(e) {
      var r;
      return s[e] = !0, k.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
      }), r
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*")
  }

  function zt(e, t) {
    var n, r, i = k.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && k.extend(!0, e, r), e
  }

  Ft.href = Et.href, k.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
      responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
      converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML},
      flatOptions: {url: !0, context: !0}
    },
    ajaxSetup: function (e, t) {
      return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
    },
    ajaxPrefilter: Bt(It),
    ajaxTransport: Bt(Wt),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), y = v.context || v,
        m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"),
        w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
          readyState: 0, getResponseHeader: function (e) {
            var t;
            if (h) {
              if (!n) {
                n = {};
                while (t = Pt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
              }
              t = n[e.toLowerCase() + " "]
            }
            return null == t ? null : t.join(", ")
          }, getAllResponseHeaders: function () {
            return h ? p : null
          }, setRequestHeader: function (e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
          }, overrideMimeType: function (e) {
            return null == h && (v.mimeType = e), this
          }, statusCode: function (e) {
            var t;
            if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];
            return this
          }, abort: function (e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this
          }
        };
      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
        r = E.createElement("a");
        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
        } catch (e) {
          v.crossDomain = !0
        }
      }
      if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;
      for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout")
        }, v.timeout));
        try {
          h = !1, c.send(a, l)
        } catch (e) {
          if (h) throw e;
          l(-1, e)
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i, o, a, s, u, l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r, i, o, a, s = e.contents, u = e.dataTypes;
          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break
          }
          if (u[0] in n) o = u[0]; else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break
              }
              a || (a = i)
            }
            o = o || a
          }
          if (o) return o !== u[0] && u.unshift(o), n[o]
        }(v, T, n)), s = function (e, t, n, r) {
          var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
              break
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
              t = a(t)
            } catch (e) {
              return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
            }
          }
          return {state: "success", data: t}
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")))
      }

      return T
    },
    getJSON: function (e, t, n) {
      return k.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return k.get(e, void 0, t, "script")
    }
  }), k.each(["get", "post"], function (e, i) {
    k[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, k.isPlainObject(e) && e))
    }
  }), k._evalUrl = function (e, t) {
    return k.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function () {
        }
      },
      dataFilter: function (e) {
        k.globalEval(e, t)
      }
    })
  }, k.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e
      }).append(this)), this
    }, wrapInner: function (n) {
      return m(n) ? this.each(function (e) {
        k(this).wrapInner(n.call(this, e))
      }) : this.each(function () {
        var e = k(this), t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n)
      })
    }, wrap: function (t) {
      var n = m(t);
      return this.each(function (e) {
        k(this).wrapAll(n ? t.call(this, e) : t)
      })
    }, unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        k(this).replaceWith(this.childNodes)
      }), this
    }
  }), k.expr.pseudos.hidden = function (e) {
    return !k.expr.pseudos.visible(e)
  }, k.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, k.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest
    } catch (e) {
    }
  };
  var Ut = {0: 200, 1223: 204}, Xt = k.ajaxSettings.xhr();
  y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
    var o, a;
    if (y.cors || Xt && !i.crossDomain) return {
      send: function (e, t) {
        var n, r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
        o = function (e) {
          return function () {
            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
          }
        }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            o && a()
          })
        }, o = o("abort");
        try {
          r.send(i.hasContent && i.data || null)
        } catch (e) {
          if (o) throw e
        }
      }, abort: function () {
        o && o()
      }
    }
  }), k.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }), k.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
    contents: {script: /\b(?:java|ecma)script\b/},
    converters: {
      "text script": function (e) {
        return k.globalEval(e), e
      }
    }
  }), k.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), k.ajaxTransport("script", function (n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function (e, t) {
        r = k("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", i = function (e) {
          r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
        }), E.head.appendChild(r[0])
      }, abort: function () {
        i && i()
      }
    }
  });
  var Vt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return this[e] = !0, e
    }
  }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r, i, o,
      a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || k.error(r + " was not called"), o[0]
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments
    }, n.always(function () {
      void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0
    }), "script"
  }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
    var r, i, o
  }, k.fn.load = function (e, t, n) {
    var r, i, o, a = this, s = e.indexOf(" ");
    return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    k.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), k.expr.pseudos.animated = function (t) {
    return k.grep(k.timers, function (e) {
      return t === e.elem
    }).length
  }, k.offset = {
    setOffset: function (e, t, n) {
      var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
    }
  }, k.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        k.offset.setOffset(this, t, e)
      });
      var e, n, r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {top: 0, left: 0} : void 0
    }, position: function () {
      if (this[0]) {
        var e, t, n, r = this[0], i = {top: 0, left: 0};
        if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect(); else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
        }
        return {top: t.top - i.top - k.css(r, "marginTop", !0), left: t.left - i.left - k.css(r, "marginLeft", !0)}
      }
    }, offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent;
        while (e && "static" === k.css(e, "position")) e = e.offsetParent;
        return e || ie
      })
    }
  }), k.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
    var o = "pageYOffset" === i;
    k.fn[t] = function (e) {
      return _(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
      }, t, e, arguments.length)
    }
  }), k.each(["top", "left"], function (e, n) {
    k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
      if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t
    })
  }), k.each({Height: "height", Width: "width"}, function (a, s) {
    k.each({padding: "inner" + a, content: s, "": "outer" + a}, function (r, o) {
      k.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border");
        return _(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
        }, s, n ? e : void 0, n)
      }
    })
  }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    k.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
  }), k.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), k.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    }, unbind: function (e, t) {
      return this.off(e, null, t)
    }, delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  }), k.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
      return e.apply(t || this, r.concat(s.call(arguments)))
    }).guid = e.guid = e.guid || k.guid++, i
  }, k.holdReady = function (e) {
    e ? k.readyWait++ : k.ready(!0)
  }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
    var t = k.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return k
  });
  var Qt = C.jQuery, Jt = C.$;
  return k.noConflict = function (e) {
    return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k
  }, e || (C.jQuery = C.$ = k), k
});

/*!
  * Bootstrap v5.0.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, (function () {
  "use strict";
  const t = t => {
      do {
        t += Math.floor(1e6 * Math.random())
      } while (document.getElementById(t));
      return t
    }, e = t => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || !i.includes("#") && !i.startsWith(".")) return null;
        i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]), e = i && "#" !== i ? i.trim() : null
      }
      return e
    }, i = t => {
      const i = e(t);
      return i && document.querySelector(i) ? i : null
    }, n = t => {
      const i = e(t);
      return i ? document.querySelector(i) : null
    }, s = t => {
      if (!t) return 0;
      let {transitionDuration: e, transitionDelay: i} = window.getComputedStyle(t);
      const n = Number.parseFloat(e), s = Number.parseFloat(i);
      return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
    }, o = t => {
      t.dispatchEvent(new Event("transitionend"))
    }, r = t => (t[0] || t).nodeType, a = (t, e) => {
      let i = !1;
      const n = e + 5;
      t.addEventListener("transitionend", (function e() {
        i = !0, t.removeEventListener("transitionend", e)
      })), setTimeout(() => {
        i || o(t)
      }, n)
    }, l = (t, e, i) => {
      Object.keys(i).forEach(n => {
        const s = i[n], o = e[n],
          a = o && r(o) ? "element" : null == (l = o) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
        var l;
        if (!new RegExp(s).test(a)) throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)
      })
    }, c = t => {
      if (!t) return !1;
      if (t.style && t.parentNode && t.parentNode.style) {
        const e = getComputedStyle(t), i = getComputedStyle(t.parentNode);
        return "none" !== e.display && "none" !== i.display && "hidden" !== e.visibility
      }
      return !1
    },
    d = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    h = t => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null
      }
      return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null
    }, u = () => {
    }, f = t => t.offsetHeight, p = () => {
      const {jQuery: t} = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    }, g = () => "rtl" === document.documentElement.dir, m = (t, e) => {
      var i;
      i = () => {
        const i = p();
        if (i) {
          const n = i.fn[t];
          i.fn[t] = e.jQueryInterface, i.fn[t].Constructor = e, i.fn[t].noConflict = () => (i.fn[t] = n, e.jQueryInterface)
        }
      }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", i) : i()
    }, _ = t => {
      "function" == typeof t && t()
    }, b = new Map;
  var v = {
    set(t, e, i) {
      b.has(t) || b.set(t, new Map);
      const n = b.get(t);
      n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
    }, get: (t, e) => b.has(t) && b.get(t).get(e) || null, remove(t, e) {
      if (!b.has(t)) return;
      const i = b.get(t);
      i.delete(e), 0 === i.size && b.delete(t)
    }
  };
  const y = /[^.]*(?=\..*)\.|.*/, w = /\..*/, E = /::\d+$/, T = {};
  let A = 1;
  const L = {mouseenter: "mouseover", mouseleave: "mouseout"}, O = /^(mouseenter|mouseleave)/i,
    k = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function D(t, e) {
    return e && `${e}::${A++}` || t.uidEvent || A++
  }

  function x(t) {
    const e = D(t);
    return t.uidEvent = e, T[e] = T[e] || {}, T[e]
  }

  function C(t, e, i = null) {
    const n = Object.keys(t);
    for (let s = 0, o = n.length; s < o; s++) {
      const o = t[n[s]];
      if (o.originalHandler === e && o.delegationSelector === i) return o
    }
    return null
  }

  function S(t, e, i) {
    const n = "string" == typeof e, s = n ? i : e;
    let o = P(t);
    return k.has(o) || (o = t), [n, s, o]
  }

  function N(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    if (i || (i = n, n = null), O.test(e)) {
      const t = t => function (e) {
        if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
      };
      n ? n = t(n) : i = t(i)
    }
    const [o, r, a] = S(e, i, n), l = x(t), c = l[a] || (l[a] = {}), d = C(c, r, o ? i : null);
    if (d) return void (d.oneOff = d.oneOff && s);
    const h = D(r, e.replace(y, "")), u = o ? function (t, e, i) {
      return function n(s) {
        const o = t.querySelectorAll(e);
        for (let {target: r} = s; r && r !== this; r = r.parentNode) for (let a = o.length; a--;) if (o[a] === r) return s.delegateTarget = r, n.oneOff && I.off(t, s.type, e, i), i.apply(r, [s]);
        return null
      }
    }(t, i, n) : function (t, e) {
      return function i(n) {
        return n.delegateTarget = t, i.oneOff && I.off(t, n.type, e), e.apply(t, [n])
      }
    }(t, i);
    u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = h, c[h] = u, t.addEventListener(a, u, o)
  }

  function j(t, e, i, n, s) {
    const o = C(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
  }

  function P(t) {
    return t = t.replace(w, ""), L[t] || t
  }

  const I = {
    on(t, e, i, n) {
      N(t, e, i, n, !1)
    }, one(t, e, i, n) {
      N(t, e, i, n, !0)
    }, off(t, e, i, n) {
      if ("string" != typeof e || !t) return;
      const [s, o, r] = S(e, i, n), a = r !== e, l = x(t), c = e.startsWith(".");
      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void j(t, l, r, o, s ? i : null)
      }
      c && Object.keys(l).forEach(i => {
        !function (t, e, i, n) {
          const s = e[i] || {};
          Object.keys(s).forEach(o => {
            if (o.includes(n)) {
              const n = s[o];
              j(t, e, i, n.originalHandler, n.delegationSelector)
            }
          })
        }(t, l, i, e.slice(1))
      });
      const d = l[r] || {};
      Object.keys(d).forEach(i => {
        const n = i.replace(E, "");
        if (!a || e.includes(n)) {
          const e = d[i];
          j(t, l, r, e.originalHandler, e.delegationSelector)
        }
      })
    }, trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      const n = p(), s = P(e), o = e !== s, r = k.has(s);
      let a, l = !0, c = !0, d = !1, h = null;
      return o && n && (a = n.Event(e, i), n(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), d = a.isDefaultPrevented()), r ? (h = document.createEvent("HTMLEvents"), h.initEvent(s, l, !0)) : h = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== i && Object.keys(i).forEach(t => {
        Object.defineProperty(h, t, {get: () => i[t]})
      }), d && h.preventDefault(), c && t.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h
    }
  };

  class M {
    constructor(t) {
      (t = "string" == typeof t ? document.querySelector(t) : t) && (this._element = t, v.set(this._element, this.constructor.DATA_KEY, this))
    }

    dispose() {
      v.remove(this._element, this.constructor.DATA_KEY), I.off(this._element, "." + this.constructor.DATA_KEY), this._element = null
    }

    static getInstance(t) {
      return v.get(t, this.DATA_KEY)
    }

    static get VERSION() {
      return "5.0.0"
    }
  }

  class H extends M {
    static get DATA_KEY() {
      return "bs.alert"
    }

    close(t) {
      const e = t ? this._getRootElement(t) : this._element, i = this._triggerCloseEvent(e);
      null === i || i.defaultPrevented || this._removeElement(e)
    }

    _getRootElement(t) {
      return n(t) || t.closest(".alert")
    }

    _triggerCloseEvent(t) {
      return I.trigger(t, "close.bs.alert")
    }

    _removeElement(t) {
      if (t.classList.remove("show"), !t.classList.contains("fade")) return void this._destroyElement(t);
      const e = s(t);
      I.one(t, "transitionend", () => this._destroyElement(t)), a(t, e)
    }

    _destroyElement(t) {
      t.parentNode && t.parentNode.removeChild(t), I.trigger(t, "closed.bs.alert")
    }

    static jQueryInterface(t) {
      return this.each((function () {
        let e = v.get(this, "bs.alert");
        e || (e = new H(this)), "close" === t && e[t](this)
      }))
    }

    static handleDismiss(t) {
      return function (e) {
        e && e.preventDefault(), t.close(this)
      }
    }
  }

  I.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', H.handleDismiss(new H)), m("alert", H);

  class R extends M {
    static get DATA_KEY() {
      return "bs.button"
    }

    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
    }

    static jQueryInterface(t) {
      return this.each((function () {
        let e = v.get(this, "bs.button");
        e || (e = new R(this)), "toggle" === t && e[t]()
      }))
    }
  }

  function B(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
  }

  function W(t) {
    return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
  }

  I.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
    t.preventDefault();
    const e = t.target.closest('[data-bs-toggle="button"]');
    let i = v.get(e, "bs.button");
    i || (i = new R(e)), i.toggle()
  }), m("button", R);
  const z = {
    setDataAttribute(t, e, i) {
      t.setAttribute("data-bs-" + W(e), i)
    }, removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + W(e))
    }, getDataAttributes(t) {
      if (!t) return {};
      const e = {};
      return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(i => {
        let n = i.replace(/^bs/, "");
        n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = B(t.dataset[i])
      }), e
    }, getDataAttribute: (t, e) => B(t.getAttribute("data-bs-" + W(e))), offset(t) {
      const e = t.getBoundingClientRect();
      return {top: e.top + document.body.scrollTop, left: e.left + document.body.scrollLeft}
    }, position: t => ({top: t.offsetTop, left: t.offsetLeft})
  }, U = {
    find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
    findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
    children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
    parents(t, e) {
      const i = [];
      let n = t.parentNode;
      for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;) n.matches(e) && i.push(n), n = n.parentNode;
      return i
    },
    prev(t, e) {
      let i = t.previousElementSibling;
      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.previousElementSibling
      }
      return []
    },
    next(t, e) {
      let i = t.nextElementSibling;
      for (; i;) {
        if (i.matches(e)) return [i];
        i = i.nextElementSibling
      }
      return []
    }
  }, $ = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, F = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  }, K = "next", Y = "prev", q = "left", V = "right";

  class X extends M {
    constructor(t, e) {
      super(t), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._indicatorsElement = U.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
    }

    static get Default() {
      return $
    }

    static get DATA_KEY() {
      return "bs.carousel"
    }

    next() {
      this._isSliding || this._slide(K)
    }

    nextWhenVisible() {
      !document.hidden && c(this._element) && this.next()
    }

    prev() {
      this._isSliding || this._slide(Y)
    }

    pause(t) {
      t || (this._isPaused = !0), U.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (o(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
    }

    cycle(t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
    }

    to(t) {
      this._activeElement = U.findOne(".active.carousel-item", this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding) return void I.one(this._element, "slid.bs.carousel", () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const i = t > e ? K : Y;
      this._slide(i, this._items[t])
    }

    dispose() {
      this._items = null, this._config = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null, super.dispose()
    }

    _getConfig(t) {
      return t = {...$, ...t}, l("carousel", t, F), t
    }

    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      this.touchDeltaX = 0, e && this._slide(e > 0 ? V : q)
    }

    _addEventListeners() {
      this._config.keyboard && I.on(this._element, "keydown.bs.carousel", t => this._keydown(t)), "hover" === this._config.pause && (I.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)), I.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
    }

    _addTouchEventListeners() {
      const t = t => {
        !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
      }, e = t => {
        this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
      }, i = t => {
        !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval))
      };
      U.find(".carousel-item img", this._element).forEach(t => {
        I.on(t, "dragstart.bs.carousel", t => t.preventDefault())
      }), this._pointerEvent ? (I.on(this._element, "pointerdown.bs.carousel", e => t(e)), I.on(this._element, "pointerup.bs.carousel", t => i(t)), this._element.classList.add("pointer-event")) : (I.on(this._element, "touchstart.bs.carousel", e => t(e)), I.on(this._element, "touchmove.bs.carousel", t => e(t)), I.on(this._element, "touchend.bs.carousel", t => i(t)))
    }

    _keydown(t) {
      /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(V)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(q)))
    }

    _getItemIndex(t) {
      return this._items = t && t.parentNode ? U.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
    }

    _getItemByOrder(t, e) {
      const i = t === K, n = t === Y, s = this._getItemIndex(e), o = this._items.length - 1;
      if ((n && 0 === s || i && s === o) && !this._config.wrap) return e;
      const r = (s + (n ? -1 : 1)) % this._items.length;
      return -1 === r ? this._items[this._items.length - 1] : this._items[r]
    }

    _triggerSlideEvent(t, e) {
      const i = this._getItemIndex(t), n = this._getItemIndex(U.findOne(".active.carousel-item", this._element));
      return I.trigger(this._element, "slide.bs.carousel", {relatedTarget: t, direction: e, from: n, to: i})
    }

    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = U.findOne(".active", this._indicatorsElement);
        e.classList.remove("active"), e.removeAttribute("aria-current");
        const i = U.find("[data-bs-target]", this._indicatorsElement);
        for (let e = 0; e < i.length; e++) if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
          i[e].classList.add("active"), i[e].setAttribute("aria-current", "true");
          break
        }
      }
    }

    _updateInterval() {
      const t = this._activeElement || U.findOne(".active.carousel-item", this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
    }

    _slide(t, e) {
      const i = this._directionToOrder(t), n = U.findOne(".active.carousel-item", this._element),
        o = this._getItemIndex(n), r = e || this._getItemByOrder(i, n), l = this._getItemIndex(r),
        c = Boolean(this._interval), d = i === K, h = d ? "carousel-item-start" : "carousel-item-end",
        u = d ? "carousel-item-next" : "carousel-item-prev", p = this._orderToDirection(i);
      if (r && r.classList.contains("active")) this._isSliding = !1; else if (!this._triggerSlideEvent(r, p).defaultPrevented && n && r) {
        if (this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r, this._element.classList.contains("slide")) {
          r.classList.add(u), f(r), n.classList.add(h), r.classList.add(h);
          const t = s(n);
          I.one(n, "transitionend", () => {
            r.classList.remove(h, u), r.classList.add("active"), n.classList.remove("active", u, h), this._isSliding = !1, setTimeout(() => {
              I.trigger(this._element, "slid.bs.carousel", {relatedTarget: r, direction: p, from: o, to: l})
            }, 0)
          }), a(n, t)
        } else n.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, I.trigger(this._element, "slid.bs.carousel", {
          relatedTarget: r,
          direction: p,
          from: o,
          to: l
        });
        c && this.cycle()
      }
    }

    _directionToOrder(t) {
      return [V, q].includes(t) ? g() ? t === q ? Y : K : t === q ? K : Y : t
    }

    _orderToDirection(t) {
      return [K, Y].includes(t) ? g() ? t === Y ? q : V : t === Y ? V : q : t
    }

    static carouselInterface(t, e) {
      let i = v.get(t, "bs.carousel"), n = {...$, ...z.getDataAttributes(t)};
      "object" == typeof e && (n = {...n, ...e});
      const s = "string" == typeof e ? e : n.slide;
      if (i || (i = new X(t, n)), "number" == typeof e) i.to(e); else if ("string" == typeof s) {
        if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
        i[s]()
      } else n.interval && n.ride && (i.pause(), i.cycle())
    }

    static jQueryInterface(t) {
      return this.each((function () {
        X.carouselInterface(this, t)
      }))
    }

    static dataApiClickHandler(t) {
      const e = n(this);
      if (!e || !e.classList.contains("carousel")) return;
      const i = {...z.getDataAttributes(e), ...z.getDataAttributes(this)}, s = this.getAttribute("data-bs-slide-to");
      s && (i.interval = !1), X.carouselInterface(e, i), s && v.get(e, "bs.carousel").to(s), t.preventDefault()
    }
  }

  I.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", X.dataApiClickHandler), I.on(window, "load.bs.carousel.data-api", () => {
    const t = U.find('[data-bs-ride="carousel"]');
    for (let e = 0, i = t.length; e < i; e++) X.carouselInterface(t[e], v.get(t[e], "bs.carousel"))
  }), m("carousel", X);
  const Q = {toggle: !0, parent: ""}, G = {toggle: "boolean", parent: "(string|element)"};

  class Z extends M {
    constructor(t, e) {
      super(t), this._isTransitioning = !1, this._config = this._getConfig(e), this._triggerArray = U.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
      const n = U.find('[data-bs-toggle="collapse"]');
      for (let t = 0, e = n.length; t < e; t++) {
        const e = n[t], s = i(e), o = U.find(s).filter(t => t === this._element);
        null !== s && o.length && (this._selector = s, this._triggerArray.push(e))
      }
      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
    }

    static get Default() {
      return Q
    }

    static get DATA_KEY() {
      return "bs.collapse"
    }

    toggle() {
      this._element.classList.contains("show") ? this.hide() : this.show()
    }

    show() {
      if (this._isTransitioning || this._element.classList.contains("show")) return;
      let t, e;
      this._parent && (t = U.find(".show, .collapsing", this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")), 0 === t.length && (t = null));
      const i = U.findOne(this._selector);
      if (t) {
        const n = t.find(t => i !== t);
        if (e = n ? v.get(n, "bs.collapse") : null, e && e._isTransitioning) return
      }
      if (I.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      t && t.forEach(t => {
        i !== t && Z.collapseInterface(t, "hide"), e || v.set(t, "bs.collapse", null)
      });
      const n = this._getDimension();
      this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n] = 0, this._triggerArray.length && this._triggerArray.forEach(t => {
        t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
      }), this.setTransitioning(!0);
      const o = "scroll" + (n[0].toUpperCase() + n.slice(1)), r = s(this._element);
      I.one(this._element, "transitionend", () => {
        this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[n] = "", this.setTransitioning(!1), I.trigger(this._element, "shown.bs.collapse")
      }), a(this._element, r), this._element.style[n] = this._element[o] + "px"
    }

    hide() {
      if (this._isTransitioning || !this._element.classList.contains("show")) return;
      if (I.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", f(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
      const e = this._triggerArray.length;
      if (e > 0) for (let t = 0; t < e; t++) {
        const e = this._triggerArray[t], i = n(e);
        i && !i.classList.contains("show") && (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1))
      }
      this.setTransitioning(!0), this._element.style[t] = "";
      const i = s(this._element);
      I.one(this._element, "transitionend", () => {
        this.setTransitioning(!1), this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), I.trigger(this._element, "hidden.bs.collapse")
      }), a(this._element, i)
    }

    setTransitioning(t) {
      this._isTransitioning = t
    }

    dispose() {
      super.dispose(), this._config = null, this._parent = null, this._triggerArray = null, this._isTransitioning = null
    }

    _getConfig(t) {
      return (t = {...Q, ...t}).toggle = Boolean(t.toggle), l("collapse", t, G), t
    }

    _getDimension() {
      return this._element.classList.contains("width") ? "width" : "height"
    }

    _getParent() {
      let {parent: t} = this._config;
      r(t) ? void 0 === t.jquery && void 0 === t[0] || (t = t[0]) : t = U.findOne(t);
      const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
      return U.find(e, t).forEach(t => {
        const e = n(t);
        this._addAriaAndCollapsedClass(e, [t])
      }), t
    }

    _addAriaAndCollapsedClass(t, e) {
      if (!t || !e.length) return;
      const i = t.classList.contains("show");
      e.forEach(t => {
        i ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", i)
      })
    }

    static collapseInterface(t, e) {
      let i = v.get(t, "bs.collapse");
      const n = {...Q, ...z.getDataAttributes(t), ..."object" == typeof e && e ? e : {}};
      if (!i && n.toggle && "string" == typeof e && /show|hide/.test(e) && (n.toggle = !1), i || (i = new Z(t, n)), "string" == typeof e) {
        if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
        i[e]()
      }
    }

    static jQueryInterface(t) {
      return this.each((function () {
        Z.collapseInterface(this, t)
      }))
    }
  }

  I.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    const e = z.getDataAttributes(this), n = i(this);
    U.find(n).forEach(t => {
      const i = v.get(t, "bs.collapse");
      let n;
      i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, Z.collapseInterface(t, n)
    })
  })), m("collapse", Z);
  var J = "top", tt = "bottom", et = "right", it = "left", nt = [J, tt, et, it], st = nt.reduce((function (t, e) {
      return t.concat([e + "-start", e + "-end"])
    }), []), ot = [].concat(nt, ["auto"]).reduce((function (t, e) {
      return t.concat([e, e + "-start", e + "-end"])
    }), []),
    rt = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

  function at(t) {
    return t ? (t.nodeName || "").toLowerCase() : null
  }

  function lt(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window
    }
    return t
  }

  function ct(t) {
    return t instanceof lt(t).Element || t instanceof Element
  }

  function dt(t) {
    return t instanceof lt(t).HTMLElement || t instanceof HTMLElement
  }

  function ht(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof lt(t).ShadowRoot || t instanceof ShadowRoot)
  }

  var ut = {
    name: "applyStyles", enabled: !0, phase: "write", fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach((function (t) {
        var i = e.styles[t] || {}, n = e.attributes[t] || {}, s = e.elements[t];
        dt(s) && at(s) && (Object.assign(s.style, i), Object.keys(n).forEach((function (t) {
          var e = n[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
        })))
      }))
    }, effect: function (t) {
      var e = t.state, i = {
        popper: {position: e.options.strategy, left: "0", top: "0", margin: "0"},
        arrow: {position: "absolute"},
        reference: {}
      };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function () {
        Object.keys(e.elements).forEach((function (t) {
          var n = e.elements[t], s = e.attributes[t] || {},
            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce((function (t, e) {
              return t[e] = "", t
            }), {});
          dt(n) && at(n) && (Object.assign(n.style, o), Object.keys(s).forEach((function (t) {
            n.removeAttribute(t)
          })))
        }))
      }
    }, requires: ["computeStyles"]
  };

  function ft(t) {
    return t.split("-")[0]
  }

  function pt(t) {
    var e = t.getBoundingClientRect();
    return {
      width: e.width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top
    }
  }

  function gt(t) {
    var e = pt(t), i = t.offsetWidth, n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    }
  }

  function mt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && ht(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host
      } while (n)
    }
    return !1
  }

  function _t(t) {
    return lt(t).getComputedStyle(t)
  }

  function bt(t) {
    return ["table", "td", "th"].indexOf(at(t)) >= 0
  }

  function vt(t) {
    return ((ct(t) ? t.ownerDocument : t.document) || window.document).documentElement
  }

  function yt(t) {
    return "html" === at(t) ? t : t.assignedSlot || t.parentNode || (ht(t) ? t.host : null) || vt(t)
  }

  function wt(t) {
    return dt(t) && "fixed" !== _t(t).position ? t.offsetParent : null
  }

  function Et(t) {
    for (var e = lt(t), i = wt(t); i && bt(i) && "static" === _t(i).position;) i = wt(i);
    return i && ("html" === at(i) || "body" === at(i) && "static" === _t(i).position) ? e : i || function (t) {
      var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && dt(t) && "fixed" === _t(t).position) return null;
      for (var i = yt(t); dt(i) && ["html", "body"].indexOf(at(i)) < 0;) {
        var n = _t(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode
      }
      return null
    }(t) || e
  }

  function Tt(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
  }

  var At = Math.max, Lt = Math.min, Ot = Math.round;

  function kt(t, e, i) {
    return At(t, Lt(e, i))
  }

  function Dt(t) {
    return Object.assign({}, {top: 0, right: 0, bottom: 0, left: 0}, t)
  }

  function xt(t, e) {
    return e.reduce((function (e, i) {
      return e[i] = t, e
    }), {})
  }

  var Ct = {
    name: "arrow", enabled: !0, phase: "main", fn: function (t) {
      var e, i = t.state, n = t.name, s = t.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets,
        a = ft(i.placement), l = Tt(a), c = [it, et].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var d = function (t, e) {
            return Dt("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {placement: e.placement})) : t) ? t : xt(t, nt))
          }(s.padding, i), h = gt(o), u = "y" === l ? J : it, f = "y" === l ? tt : et,
          p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c], g = r[l] - i.rects.reference[l],
          m = Et(o), _ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0, b = p / 2 - g / 2, v = d[u],
          y = _ - h[c] - d[f], w = _ / 2 - h[c] / 2 + b, E = kt(v, w, y), T = l;
        i.modifiersData[n] = ((e = {})[T] = E, e.centerOffset = E - w, e)
      }
    }, effect: function (t) {
      var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && mt(e.elements.popper, n) && (e.elements.arrow = n)
    }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"]
  }, St = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

  function Nt(t) {
    var e, i = t.popper, n = t.popperRect, s = t.placement, o = t.offsets, r = t.position, a = t.gpuAcceleration,
      l = t.adaptive, c = t.roundOffsets, d = !0 === c ? function (t) {
        var e = t.x, i = t.y, n = window.devicePixelRatio || 1;
        return {x: Ot(Ot(e * n) / n) || 0, y: Ot(Ot(i * n) / n) || 0}
      }(o) : "function" == typeof c ? c(o) : o, h = d.x, u = void 0 === h ? 0 : h, f = d.y, p = void 0 === f ? 0 : f,
      g = o.hasOwnProperty("x"), m = o.hasOwnProperty("y"), _ = it, b = J, v = window;
    if (l) {
      var y = Et(i), w = "clientHeight", E = "clientWidth";
      y === lt(i) && "static" !== _t(y = vt(i)).position && (w = "scrollHeight", E = "scrollWidth"), y = y, s === J && (b = tt, p -= y[w] - n.height, p *= a ? 1 : -1), s === it && (_ = et, u -= y[E] - n.width, u *= a ? 1 : -1)
    }
    var T, A = Object.assign({position: r}, l && St);
    return a ? Object.assign({}, A, ((T = {})[b] = m ? "0" : "", T[_] = g ? "0" : "", T.transform = (v.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + p + "px)" : "translate3d(" + u + "px, " + p + "px, 0)", T)) : Object.assign({}, A, ((e = {})[b] = m ? p + "px" : "", e[_] = g ? u + "px" : "", e.transform = "", e))
  }

  var jt = {
    name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function (t) {
      var e = t.state, i = t.options, n = i.gpuAcceleration, s = void 0 === n || n, o = i.adaptive,
        r = void 0 === o || o, a = i.roundOffsets, l = void 0 === a || a,
        c = {placement: ft(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: s};
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, Nt(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, Nt(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {"data-popper-placement": e.placement})
    }, data: {}
  }, Pt = {passive: !0}, It = {
    name: "eventListeners", enabled: !0, phase: "write", fn: function () {
    }, effect: function (t) {
      var e = t.state, i = t.instance, n = t.options, s = n.scroll, o = void 0 === s || s, r = n.resize,
        a = void 0 === r || r, l = lt(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach((function (t) {
        t.addEventListener("scroll", i.update, Pt)
      })), a && l.addEventListener("resize", i.update, Pt), function () {
        o && c.forEach((function (t) {
          t.removeEventListener("scroll", i.update, Pt)
        })), a && l.removeEventListener("resize", i.update, Pt)
      }
    }, data: {}
  }, Mt = {left: "right", right: "left", bottom: "top", top: "bottom"};

  function Ht(t) {
    return t.replace(/left|right|bottom|top/g, (function (t) {
      return Mt[t]
    }))
  }

  var Rt = {start: "end", end: "start"};

  function Bt(t) {
    return t.replace(/start|end/g, (function (t) {
      return Rt[t]
    }))
  }

  function Wt(t) {
    var e = lt(t);
    return {scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset}
  }

  function zt(t) {
    return pt(vt(t)).left + Wt(t).scrollLeft
  }

  function Ut(t) {
    var e = _t(t), i = e.overflow, n = e.overflowX, s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n)
  }

  function $t(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = function t(e) {
        return ["html", "body", "#document"].indexOf(at(e)) >= 0 ? e.ownerDocument.body : dt(e) && Ut(e) ? e : t(yt(e))
      }(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body), o = lt(n),
      r = s ? [o].concat(o.visualViewport || [], Ut(n) ? n : []) : n, a = e.concat(r);
    return s ? a : a.concat($t(yt(r)))
  }

  function Ft(t) {
    return Object.assign({}, t, {left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height})
  }

  function Kt(t, e) {
    return "viewport" === e ? Ft(function (t) {
      var e = lt(t), i = vt(t), n = e.visualViewport, s = i.clientWidth, o = i.clientHeight, r = 0, a = 0;
      return n && (s = n.width, o = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = n.offsetLeft, a = n.offsetTop)), {
        width: s,
        height: o,
        x: r + zt(t),
        y: a
      }
    }(t)) : dt(e) ? function (t) {
      var e = pt(t);
      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
    }(e) : Ft(function (t) {
      var e, i = vt(t), n = Wt(t), s = null == (e = t.ownerDocument) ? void 0 : e.body,
        o = At(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
        r = At(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
        a = -n.scrollLeft + zt(t), l = -n.scrollTop;
      return "rtl" === _t(s || i).direction && (a += At(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      }
    }(vt(t)))
  }

  function Yt(t) {
    return t.split("-")[1]
  }

  function qt(t) {
    var e, i = t.reference, n = t.element, s = t.placement, o = s ? ft(s) : null, r = s ? Yt(s) : null,
      a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case J:
        e = {x: a, y: i.y - n.height};
        break;
      case tt:
        e = {x: a, y: i.y + i.height};
        break;
      case et:
        e = {x: i.x + i.width, y: l};
        break;
      case it:
        e = {x: i.x - n.width, y: l};
        break;
      default:
        e = {x: i.x, y: i.y}
    }
    var c = o ? Tt(o) : null;
    if (null != c) {
      var d = "y" === c ? "height" : "width";
      switch (r) {
        case"start":
          e[c] = e[c] - (i[d] / 2 - n[d] / 2);
          break;
        case"end":
          e[c] = e[c] + (i[d] / 2 - n[d] / 2)
      }
    }
    return e
  }

  function Vt(t, e) {
    void 0 === e && (e = {});
    var i = e, n = i.placement, s = void 0 === n ? t.placement : n, o = i.boundary,
      r = void 0 === o ? "clippingParents" : o, a = i.rootBoundary, l = void 0 === a ? "viewport" : a,
      c = i.elementContext, d = void 0 === c ? "popper" : c, h = i.altBoundary, u = void 0 !== h && h, f = i.padding,
      p = void 0 === f ? 0 : f, g = Dt("number" != typeof p ? p : xt(p, nt)),
      m = "popper" === d ? "reference" : "popper", _ = t.elements.reference, b = t.rects.popper,
      v = t.elements[u ? m : d], y = function (t, e, i) {
        var n = "clippingParents" === e ? function (t) {
          var e = $t(yt(t)), i = ["absolute", "fixed"].indexOf(_t(t).position) >= 0 && dt(t) ? Et(t) : t;
          return ct(i) ? e.filter((function (t) {
            return ct(t) && mt(t, i) && "body" !== at(t)
          })) : []
        }(t) : [].concat(e), s = [].concat(n, [i]), o = s[0], r = s.reduce((function (e, i) {
          var n = Kt(t, i);
          return e.top = At(n.top, e.top), e.right = Lt(n.right, e.right), e.bottom = Lt(n.bottom, e.bottom), e.left = At(n.left, e.left), e
        }), Kt(t, o));
        return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
      }(ct(v) ? v : v.contextElement || vt(t.elements.popper), r, l), w = pt(_),
      E = qt({reference: w, element: b, strategy: "absolute", placement: s}), T = Ft(Object.assign({}, b, E)),
      A = "popper" === d ? T : w, L = {
        top: y.top - A.top + g.top,
        bottom: A.bottom - y.bottom + g.bottom,
        left: y.left - A.left + g.left,
        right: A.right - y.right + g.right
      }, O = t.modifiersData.offset;
    if ("popper" === d && O) {
      var k = O[s];
      Object.keys(L).forEach((function (t) {
        var e = [et, tt].indexOf(t) >= 0 ? 1 : -1, i = [J, tt].indexOf(t) >= 0 ? "y" : "x";
        L[t] += k[i] * e
      }))
    }
    return L
  }

  function Xt(t, e) {
    void 0 === e && (e = {});
    var i = e, n = i.placement, s = i.boundary, o = i.rootBoundary, r = i.padding, a = i.flipVariations,
      l = i.allowedAutoPlacements, c = void 0 === l ? ot : l, d = Yt(n), h = d ? a ? st : st.filter((function (t) {
        return Yt(t) === d
      })) : nt, u = h.filter((function (t) {
        return c.indexOf(t) >= 0
      }));
    0 === u.length && (u = h);
    var f = u.reduce((function (e, i) {
      return e[i] = Vt(t, {placement: i, boundary: s, rootBoundary: o, padding: r})[ft(i)], e
    }), {});
    return Object.keys(f).sort((function (t, e) {
      return f[t] - f[e]
    }))
  }

  var Qt = {
    name: "flip", enabled: !0, phase: "main", fn: function (t) {
      var e = t.state, i = t.options, n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, d = i.boundary, h = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, g = i.allowedAutoPlacements, m = e.options.placement, _ = ft(m), b = l || (_ !== m && p ? function (t) {
          if ("auto" === ft(t)) return [];
          var e = Ht(t);
          return [Bt(t), e, Bt(e)]
        }(m) : [Ht(m)]), v = [m].concat(b).reduce((function (t, i) {
          return t.concat("auto" === ft(i) ? Xt(e, {
            placement: i,
            boundary: d,
            rootBoundary: h,
            padding: c,
            flipVariations: p,
            allowedAutoPlacements: g
          }) : i)
        }), []), y = e.rects.reference, w = e.rects.popper, E = new Map, T = !0, A = v[0], L = 0; L < v.length; L++) {
          var O = v[L], k = ft(O), D = "start" === Yt(O), x = [J, tt].indexOf(k) >= 0, C = x ? "width" : "height",
            S = Vt(e, {placement: O, boundary: d, rootBoundary: h, altBoundary: u, padding: c}),
            N = x ? D ? et : it : D ? tt : J;
          y[C] > w[C] && (N = Ht(N));
          var j = Ht(N), P = [];
          if (o && P.push(S[k] <= 0), a && P.push(S[N] <= 0, S[j] <= 0), P.every((function (t) {
            return t
          }))) {
            A = O, T = !1;
            break
          }
          E.set(O, P)
        }
        if (T) for (var I = function (t) {
          var e = v.find((function (e) {
            var i = E.get(e);
            if (i) return i.slice(0, t).every((function (t) {
              return t
            }))
          }));
          if (e) return A = e, "break"
        }, M = p ? 3 : 1; M > 0 && "break" !== I(M); M--) ;
        e.placement !== A && (e.modifiersData[n]._skip = !0, e.placement = A, e.reset = !0)
      }
    }, requiresIfExists: ["offset"], data: {_skip: !1}
  };

  function Gt(t, e, i) {
    return void 0 === i && (i = {x: 0, y: 0}), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    }
  }

  function Zt(t) {
    return [J, et, tt, it].some((function (e) {
      return t[e] >= 0
    }))
  }

  var Jt = {
    name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function (t) {
      var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow,
        r = Vt(e, {elementContext: "reference"}), a = Vt(e, {altBoundary: !0}), l = Gt(r, n), c = Gt(a, s, o),
        d = Zt(l), h = Zt(c);
      e.modifiersData[i] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: d,
        hasPopperEscaped: h
      }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": d,
        "data-popper-escaped": h
      })
    }
  }, te = {
    name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function (t) {
      var e = t.state, i = t.options, n = t.name, s = i.offset, o = void 0 === s ? [0, 0] : s,
        r = ot.reduce((function (t, i) {
          return t[i] = function (t, e, i) {
            var n = ft(t), s = [it, J].indexOf(n) >= 0 ? -1 : 1,
              o = "function" == typeof i ? i(Object.assign({}, e, {placement: t})) : i, r = o[0], a = o[1];
            return r = r || 0, a = (a || 0) * s, [it, et].indexOf(n) >= 0 ? {x: a, y: r} : {x: r, y: a}
          }(i, e.rects, o), t
        }), {}), a = r[e.placement], l = a.x, c = a.y;
      null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
    }
  }, ee = {
    name: "popperOffsets", enabled: !0, phase: "read", fn: function (t) {
      var e = t.state, i = t.name;
      e.modifiersData[i] = qt({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
      })
    }, data: {}
  }, ie = {
    name: "preventOverflow", enabled: !0, phase: "main", fn: function (t) {
      var e = t.state, i = t.options, n = t.name, s = i.mainAxis, o = void 0 === s || s, r = i.altAxis,
        a = void 0 !== r && r, l = i.boundary, c = i.rootBoundary, d = i.altBoundary, h = i.padding, u = i.tether,
        f = void 0 === u || u, p = i.tetherOffset, g = void 0 === p ? 0 : p,
        m = Vt(e, {boundary: l, rootBoundary: c, padding: h, altBoundary: d}), _ = ft(e.placement), b = Yt(e.placement),
        v = !b, y = Tt(_), w = "x" === y ? "y" : "x", E = e.modifiersData.popperOffsets, T = e.rects.reference,
        A = e.rects.popper, L = "function" == typeof g ? g(Object.assign({}, e.rects, {placement: e.placement})) : g,
        O = {x: 0, y: 0};
      if (E) {
        if (o || a) {
          var k = "y" === y ? J : it, D = "y" === y ? tt : et, x = "y" === y ? "height" : "width", C = E[y],
            S = E[y] + m[k], N = E[y] - m[D], j = f ? -A[x] / 2 : 0, P = "start" === b ? T[x] : A[x],
            I = "start" === b ? -A[x] : -T[x], M = e.elements.arrow, H = f && M ? gt(M) : {width: 0, height: 0},
            R = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }, B = R[k], W = R[D], z = kt(0, T[x], H[x]), U = v ? T[x] / 2 - j - z - B - L : P - z - B - L,
            $ = v ? -T[x] / 2 + j + z + W + L : I + z + W + L, F = e.elements.arrow && Et(e.elements.arrow),
            K = F ? "y" === y ? F.clientTop || 0 : F.clientLeft || 0 : 0,
            Y = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0, q = E[y] + U - Y - K,
            V = E[y] + $ - Y;
          if (o) {
            var X = kt(f ? Lt(S, q) : S, C, f ? At(N, V) : N);
            E[y] = X, O[y] = X - C
          }
          if (a) {
            var Q = "x" === y ? J : it, G = "x" === y ? tt : et, Z = E[w], nt = Z + m[Q], st = Z - m[G],
              ot = kt(f ? Lt(nt, q) : nt, Z, f ? At(st, V) : st);
            E[w] = ot, O[w] = ot - Z
          }
        }
        e.modifiersData[n] = O
      }
    }, requiresIfExists: ["offset"]
  };

  function ne(t, e, i) {
    void 0 === i && (i = !1);
    var n, s, o = vt(e), r = pt(t), a = dt(e), l = {scrollLeft: 0, scrollTop: 0}, c = {x: 0, y: 0};
    return (a || !a && !i) && (("body" !== at(e) || Ut(o)) && (l = (n = e) !== lt(n) && dt(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : Wt(n)), dt(e) ? ((c = pt(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = zt(o))), {
      x: r.left + l.scrollLeft - c.x,
      y: r.top + l.scrollTop - c.y,
      width: r.width,
      height: r.height
    }
  }

  var se = {placement: "bottom", modifiers: [], strategy: "absolute"};

  function oe() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    return !e.some((function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect)
    }))
  }

  function re(t) {
    void 0 === t && (t = {});
    var e = t, i = e.defaultModifiers, n = void 0 === i ? [] : i, s = e.defaultOptions, o = void 0 === s ? se : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s, r, a = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, se, o),
        modifiersData: {},
        elements: {reference: t, popper: e},
        attributes: {},
        styles: {}
      }, l = [], c = !1, d = {
        state: a, setOptions: function (i) {
          h(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = {
            reference: ct(t) ? $t(t) : t.contextElement ? $t(t.contextElement) : [],
            popper: $t(e)
          };
          var s, r, c = function (t) {
            var e = function (t) {
              var e = new Map, i = new Set, n = [];
              return t.forEach((function (t) {
                e.set(t.name, t)
              })), t.forEach((function (t) {
                i.has(t.name) || function t(s) {
                  i.add(s.name), [].concat(s.requires || [], s.requiresIfExists || []).forEach((function (n) {
                    if (!i.has(n)) {
                      var s = e.get(n);
                      s && t(s)
                    }
                  })), n.push(s)
                }(t)
              })), n
            }(t);
            return rt.reduce((function (t, i) {
              return t.concat(e.filter((function (t) {
                return t.phase === i
              })))
            }), [])
          }((s = [].concat(n, a.options.modifiers), r = s.reduce((function (t, e) {
            var i = t[e.name];
            return t[e.name] = i ? Object.assign({}, i, e, {
              options: Object.assign({}, i.options, e.options),
              data: Object.assign({}, i.data, e.data)
            }) : e, t
          }), {}), Object.keys(r).map((function (t) {
            return r[t]
          }))));
          return a.orderedModifiers = c.filter((function (t) {
            return t.enabled
          })), a.orderedModifiers.forEach((function (t) {
            var e = t.name, i = t.options, n = void 0 === i ? {} : i, s = t.effect;
            if ("function" == typeof s) {
              var o = s({state: a, name: e, instance: d, options: n});
              l.push(o || function () {
              })
            }
          })), d.update()
        }, forceUpdate: function () {
          if (!c) {
            var t = a.elements, e = t.reference, i = t.popper;
            if (oe(e, i)) {
              a.rects = {
                reference: ne(e, Et(i), "fixed" === a.options.strategy),
                popper: gt(i)
              }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (t) {
                return a.modifiersData[t.name] = Object.assign({}, t.data)
              }));
              for (var n = 0; n < a.orderedModifiers.length; n++) if (!0 !== a.reset) {
                var s = a.orderedModifiers[n], o = s.fn, r = s.options, l = void 0 === r ? {} : r, h = s.name;
                "function" == typeof o && (a = o({state: a, options: l, name: h, instance: d}) || a)
              } else a.reset = !1, n = -1
            }
          }
        }, update: (s = function () {
          return new Promise((function (t) {
            d.forceUpdate(), t(a)
          }))
        }, function () {
          return r || (r = new Promise((function (t) {
            Promise.resolve().then((function () {
              r = void 0, t(s())
            }))
          }))), r
        }), destroy: function () {
          h(), c = !0
        }
      };
      if (!oe(t, e)) return d;

      function h() {
        l.forEach((function (t) {
          return t()
        })), l = []
      }

      return d.setOptions(i).then((function (t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t)
      })), d
    }
  }

  var ae = re(), le = re({defaultModifiers: [It, ee, jt, ut]}),
    ce = re({defaultModifiers: [It, ee, jt, ut, te, Qt, ie, Ct, Jt]}), de = Object.freeze({
      __proto__: null,
      popperGenerator: re,
      detectOverflow: Vt,
      createPopperBase: ae,
      createPopper: ce,
      createPopperLite: le,
      top: J,
      bottom: tt,
      right: et,
      left: it,
      auto: "auto",
      basePlacements: nt,
      start: "start",
      end: "end",
      clippingParents: "clippingParents",
      viewport: "viewport",
      popper: "popper",
      reference: "reference",
      variationPlacements: st,
      placements: ot,
      beforeRead: "beforeRead",
      read: "read",
      afterRead: "afterRead",
      beforeMain: "beforeMain",
      main: "main",
      afterMain: "afterMain",
      beforeWrite: "beforeWrite",
      write: "write",
      afterWrite: "afterWrite",
      modifierPhases: rt,
      applyStyles: ut,
      arrow: Ct,
      computeStyles: jt,
      eventListeners: It,
      flip: Qt,
      hide: Jt,
      offset: te,
      popperOffsets: ee,
      preventOverflow: ie
    });
  const he = new RegExp("ArrowUp|ArrowDown|Escape"), ue = g() ? "top-end" : "top-start",
    fe = g() ? "top-start" : "top-end", pe = g() ? "bottom-end" : "bottom-start",
    ge = g() ? "bottom-start" : "bottom-end", me = g() ? "left-start" : "right-start",
    _e = g() ? "right-start" : "left-start", be = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0
    }, ve = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)"
    };

  class ye extends M {
    constructor(t, e) {
      super(t), this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
    }

    static get Default() {
      return be
    }

    static get DefaultType() {
      return ve
    }

    static get DATA_KEY() {
      return "bs.dropdown"
    }

    toggle() {
      d(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show())
    }

    show() {
      if (d(this._element) || this._menu.classList.contains("show")) return;
      const t = ye.getParentFromElement(this._element), e = {relatedTarget: this._element};
      if (!I.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
        if (this._inNavbar) z.setDataAttribute(this._menu, "popper", "none"); else {
          if (void 0 === de) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
          let e = this._element;
          "parent" === this._config.reference ? e = t : r(this._config.reference) ? (e = this._config.reference, void 0 !== this._config.reference.jquery && (e = this._config.reference[0])) : "object" == typeof this._config.reference && (e = this._config.reference);
          const i = this._getPopperConfig(), n = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
          this._popper = ce(e, this._menu, i), n && z.setDataAttribute(this._menu, "popper", "static")
        }
        "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => I.on(t, "mouseover", u)), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), I.trigger(this._element, "shown.bs.dropdown", e)
      }
    }

    hide() {
      if (d(this._element) || !this._menu.classList.contains("show")) return;
      const t = {relatedTarget: this._element};
      this._completeHide(t)
    }

    dispose() {
      this._menu = null, this._popper && (this._popper.destroy(), this._popper = null), super.dispose()
    }

    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
    }

    _addEventListeners() {
      I.on(this._element, "click.bs.dropdown", t => {
        t.preventDefault(), this.toggle()
      })
    }

    _completeHide(t) {
      I.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => I.off(t, "mouseover", u)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), z.removeDataAttribute(this._menu, "popper"), I.trigger(this._element, "hidden.bs.dropdown", t))
    }

    _getConfig(t) {
      if (t = {...this.constructor.Default, ...z.getDataAttributes(this._element), ...t}, l("dropdown", t, this.constructor.DefaultType), "object" == typeof t.reference && !r(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
      return t
    }

    _getMenuElement() {
      return U.next(this._element, ".dropdown-menu")[0]
    }

    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return me;
      if (t.classList.contains("dropstart")) return _e;
      const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? e ? fe : ue : e ? ge : pe
    }

    _detectNavbar() {
      return null !== this._element.closest(".navbar")
    }

    _getOffset() {
      const {offset: t} = this._config;
      return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
    }

    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [{name: "preventOverflow", options: {boundary: this._config.boundary}}, {
          name: "offset",
          options: {offset: this._getOffset()}
        }]
      };
      return "static" === this._config.display && (t.modifiers = [{
        name: "applyStyles",
        enabled: !1
      }]), {...t, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig}
    }

    _selectMenuItem(t) {
      const e = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(c);
      if (!e.length) return;
      let i = e.indexOf(t.target);
      "ArrowUp" === t.key && i > 0 && i--, "ArrowDown" === t.key && i < e.length - 1 && i++, i = -1 === i ? 0 : i, e[i].focus()
    }

    static dropdownInterface(t, e) {
      let i = v.get(t, "bs.dropdown");
      if (i || (i = new ye(t, "object" == typeof e ? e : null)), "string" == typeof e) {
        if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
        i[e]()
      }
    }

    static jQueryInterface(t) {
      return this.each((function () {
        ye.dropdownInterface(this, t)
      }))
    }

    static clearMenus(t) {
      if (t) {
        if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
        if (/input|select|option|textarea|form/i.test(t.target.tagName)) return
      }
      const e = U.find('[data-bs-toggle="dropdown"]');
      for (let i = 0, n = e.length; i < n; i++) {
        const n = v.get(e[i], "bs.dropdown");
        if (!n || !1 === n._config.autoClose) continue;
        if (!n._element.classList.contains("show")) continue;
        const s = {relatedTarget: n._element};
        if (t) {
          const e = t.composedPath(), i = e.includes(n._menu);
          if (e.includes(n._element) || "inside" === n._config.autoClose && !i || "outside" === n._config.autoClose && i) continue;
          if ("keyup" === t.type && "Tab" === t.key && n._menu.contains(t.target)) continue;
          "click" === t.type && (s.clickEvent = t)
        }
        n._completeHide(s)
      }
    }

    static getParentFromElement(t) {
      return n(t) || t.parentNode
    }

    static dataApiKeydownHandler(t) {
      if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !he.test(t.key)) return;
      const e = this.classList.contains("show");
      if (!e && "Escape" === t.key) return;
      if (t.preventDefault(), t.stopPropagation(), d(this)) return;
      const i = () => this.matches('[data-bs-toggle="dropdown"]') ? this : U.prev(this, '[data-bs-toggle="dropdown"]')[0];
      if ("Escape" === t.key) return i().focus(), void ye.clearMenus();
      e || "ArrowUp" !== t.key && "ArrowDown" !== t.key ? e && "Space" !== t.key ? ye.getInstance(i())._selectMenuItem(t) : ye.clearMenus() : i().click()
    }
  }

  I.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', ye.dataApiKeydownHandler), I.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", ye.dataApiKeydownHandler), I.on(document, "click.bs.dropdown.data-api", ye.clearMenus), I.on(document, "keyup.bs.dropdown.data-api", ye.clearMenus), I.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function (t) {
    t.preventDefault(), ye.dropdownInterface(this)
  })), m("dropdown", ye);
  const we = () => {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t)
    }, Ee = (t = we()) => {
      Te(), Ae("body", "paddingRight", e => e + t), Ae(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", e => e + t), Ae(".sticky-top", "marginRight", e => e - t)
    }, Te = () => {
      const t = document.body.style.overflow;
      t && z.setDataAttribute(document.body, "overflow", t), document.body.style.overflow = "hidden"
    }, Ae = (t, e, i) => {
      const n = we();
      U.find(t).forEach(t => {
        if (t !== document.body && window.innerWidth > t.clientWidth + n) return;
        const s = t.style[e], o = window.getComputedStyle(t)[e];
        z.setDataAttribute(t, e, s), t.style[e] = i(Number.parseFloat(o)) + "px"
      })
    }, Le = () => {
      Oe("body", "overflow"), Oe("body", "paddingRight"), Oe(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), Oe(".sticky-top", "marginRight")
    }, Oe = (t, e) => {
      U.find(t).forEach(t => {
        const i = z.getDataAttribute(t, e);
        void 0 === i ? t.style.removeProperty(e) : (z.removeDataAttribute(t, e), t.style[e] = i)
      })
    }, ke = {isVisible: !0, isAnimated: !1, rootElement: document.body, clickCallback: null},
    De = {isVisible: "boolean", isAnimated: "boolean", rootElement: "element", clickCallback: "(function|null)"};

  class xe {
    constructor(t) {
      this._config = this._getConfig(t), this._isAppended = !1, this._element = null
    }

    show(t) {
      this._config.isVisible ? (this._append(), this._config.isAnimated && f(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
        _(t)
      })) : _(t)
    }

    hide(t) {
      this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
        this.dispose(), _(t)
      })) : _(t)
    }

    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        t.className = "modal-backdrop", this._config.isAnimated && t.classList.add("fade"), this._element = t
      }
      return this._element
    }

    _getConfig(t) {
      return t = {...ke, ..."object" == typeof t ? t : {}}, l("backdrop", t, De), t
    }

    _append() {
      this._isAppended || (this._config.rootElement.appendChild(this._getElement()), I.on(this._getElement(), "mousedown.bs.backdrop", () => {
        _(this._config.clickCallback)
      }), this._isAppended = !0)
    }

    dispose() {
      this._isAppended && (I.off(this._element, "mousedown.bs.backdrop"), this._getElement().parentNode.removeChild(this._element), this._isAppended = !1)
    }

    _emulateAnimation(t) {
      if (!this._config.isAnimated) return void _(t);
      const e = s(this._getElement());
      I.one(this._getElement(), "transitionend", () => _(t)), a(this._getElement(), e)
    }
  }

  const Ce = {backdrop: !0, keyboard: !0, focus: !0},
    Se = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean"};

  class Ne extends M {
    constructor(t, e) {
      super(t), this._config = this._getConfig(e), this._dialog = U.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1
    }

    static get Default() {
      return Ce
    }

    static get DATA_KEY() {
      return "bs.modal"
    }

    toggle(t) {
      return this._isShown ? this.hide() : this.show(t)
    }

    show(t) {
      if (this._isShown || this._isTransitioning) return;
      this._isAnimated() && (this._isTransitioning = !0);
      const e = I.trigger(this._element, "show.bs.modal", {relatedTarget: t});
      this._isShown || e.defaultPrevented || (this._isShown = !0, Ee(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), I.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', t => this.hide(t)), I.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
        I.one(this._element, "mouseup.dismiss.bs.modal", t => {
          t.target === this._element && (this._ignoreBackdropClick = !0)
        })
      }), this._showBackdrop(() => this._showElement(t)))
    }

    hide(t) {
      if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return;
      if (I.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;
      const e = this._isAnimated();
      if (e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), I.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), I.off(this._element, "click.dismiss.bs.modal"), I.off(this._dialog, "mousedown.dismiss.bs.modal"), e) {
        const t = s(this._element);
        I.one(this._element, "transitionend", t => this._hideModal(t)), a(this._element, t)
      } else this._hideModal()
    }

    dispose() {
      [window, this._dialog].forEach(t => I.off(t, ".bs.modal")), super.dispose(), I.off(document, "focusin.bs.modal"), this._config = null, this._dialog = null, this._backdrop.dispose(), this._backdrop = null, this._isShown = null, this._ignoreBackdropClick = null, this._isTransitioning = null
    }

    handleUpdate() {
      this._adjustDialog()
    }

    _initializeBackDrop() {
      return new xe({isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated()})
    }

    _getConfig(t) {
      return t = {...Ce, ...z.getDataAttributes(this._element), ...t}, l("modal", t, Se), t
    }

    _showElement(t) {
      const e = this._isAnimated(), i = U.findOne(".modal-body", this._dialog);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), e && f(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();
      const n = () => {
        this._config.focus && this._element.focus(), this._isTransitioning = !1, I.trigger(this._element, "shown.bs.modal", {relatedTarget: t})
      };
      if (e) {
        const t = s(this._dialog);
        I.one(this._dialog, "transitionend", n), a(this._dialog, t)
      } else n()
    }

    _enforceFocus() {
      I.off(document, "focusin.bs.modal"), I.on(document, "focusin.bs.modal", t => {
        document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus()
      })
    }

    _setEscapeEvent() {
      this._isShown ? I.on(this._element, "keydown.dismiss.bs.modal", t => {
        this._config.keyboard && "Escape" === t.key ? (t.preventDefault(), this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition()
      }) : I.off(this._element, "keydown.dismiss.bs.modal")
    }

    _setResizeEvent() {
      this._isShown ? I.on(window, "resize.bs.modal", () => this._adjustDialog()) : I.off(window, "resize.bs.modal")
    }

    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
        document.body.classList.remove("modal-open"), this._resetAdjustments(), Le(), I.trigger(this._element, "hidden.bs.modal")
      })
    }

    _showBackdrop(t) {
      I.on(this._element, "click.dismiss.bs.modal", t => {
        this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
      }), this._backdrop.show(t)
    }

    _isAnimated() {
      return this._element.classList.contains("fade")
    }

    _triggerBackdropTransition() {
      if (I.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
      const t = this._element.scrollHeight > document.documentElement.clientHeight;
      t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
      const e = s(this._dialog);
      I.off(this._element, "transitionend"), I.one(this._element, "transitionend", () => {
        this._element.classList.remove("modal-static"), t || (I.one(this._element, "transitionend", () => {
          this._element.style.overflowY = ""
        }), a(this._element, e))
      }), a(this._element, e), this._element.focus()
    }

    _adjustDialog() {
      const t = this._element.scrollHeight > document.documentElement.clientHeight, e = we(), i = e > 0;
      (!i && t && !g() || i && !t && g()) && (this._element.style.paddingLeft = e + "px"), (i && !t && !g() || !i && t && g()) && (this._element.style.paddingRight = e + "px")
    }

    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
    }

    static jQueryInterface(t, e) {
      return this.each((function () {
        const i = Ne.getInstance(this) || new Ne(this, "object" == typeof t ? t : {});
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e)
        }
      }))
    }
  }

  I.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function (t) {
    const e = n(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), I.one(e, "show.bs.modal", t => {
      t.defaultPrevented || I.one(e, "hidden.bs.modal", () => {
        c(this) && this.focus()
      })
    }), (Ne.getInstance(e) || new Ne(e)).toggle(this)
  })), m("modal", Ne);
  const je = {backdrop: !0, keyboard: !0, scroll: !1},
    Pe = {backdrop: "boolean", keyboard: "boolean", scroll: "boolean"};

  class Ie extends M {
    constructor(t, e) {
      super(t), this._config = this._getConfig(e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._addEventListeners()
    }

    static get Default() {
      return je
    }

    static get DATA_KEY() {
      return "bs.offcanvas"
    }

    toggle(t) {
      return this._isShown ? this.hide() : this.show(t)
    }

    show(t) {
      if (this._isShown) return;
      if (I.trigger(this._element, "show.bs.offcanvas", {relatedTarget: t}).defaultPrevented) return;
      this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (Ee(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show");
      const e = s(this._element);
      I.one(this._element, "transitionend", () => {
        I.trigger(this._element, "shown.bs.offcanvas", {relatedTarget: t})
      }), a(this._element, e)
    }

    hide() {
      if (!this._isShown) return;
      if (I.trigger(this._element, "hide.bs.offcanvas").defaultPrevented) return;
      I.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide();
      const t = s(this._element);
      I.one(this._element, "transitionend", () => {
        this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || Le(), I.trigger(this._element, "hidden.bs.offcanvas")
      }), a(this._element, t)
    }

    dispose() {
      this._backdrop.dispose(), super.dispose(), I.off(document, "focusin.bs.offcanvas"), this._config = null, this._backdrop = null
    }

    _getConfig(t) {
      return t = {...je, ...z.getDataAttributes(this._element), ..."object" == typeof t ? t : {}}, l("offcanvas", t, Pe), t
    }

    _initializeBackDrop() {
      return new xe({
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide()
      })
    }

    _enforceFocusOnElement(t) {
      I.off(document, "focusin.bs.offcanvas"), I.on(document, "focusin.bs.offcanvas", e => {
        document === e.target || t === e.target || t.contains(e.target) || t.focus()
      }), t.focus()
    }

    _addEventListeners() {
      I.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()), I.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
        this._config.keyboard && "Escape" === t.key && this.hide()
      })
    }

    static jQueryInterface(t) {
      return this.each((function () {
        const e = v.get(this, "bs.offcanvas") || new Ie(this, "object" == typeof t ? t : {});
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
          e[t](this)
        }
      }))
    }
  }

  I.on(document, "click.bs.offcanvas.data-api", '[data-toggle="offcanvas"]', (function (t) {
    const e = n(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)) return;
    I.one(e, "hidden.bs.offcanvas", () => {
      c(this) && this.focus()
    });
    const i = U.findOne(".offcanvas.show");
    i && i !== e && Ie.getInstance(i).hide(), (v.get(e, "bs.offcanvas") || new Ie(e)).toggle(this)
  })), I.on(window, "load.bs.offcanvas.data-api", () => {
    U.find(".offcanvas.show").forEach(t => (v.get(t, "bs.offcanvas") || new Ie(t)).show())
  }), m("offcanvas", Ie);
  const Me = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    He = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
    Re = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Be = (t, e) => {
      const i = t.nodeName.toLowerCase();
      if (e.includes(i)) return !Me.has(i) || Boolean(He.test(t.nodeValue) || Re.test(t.nodeValue));
      const n = e.filter(t => t instanceof RegExp);
      for (let t = 0, e = n.length; t < e; t++) if (n[t].test(i)) return !0;
      return !1
    };

  function We(t, e, i) {
    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);
    const n = (new window.DOMParser).parseFromString(t, "text/html"), s = Object.keys(e),
      o = [].concat(...n.body.querySelectorAll("*"));
    for (let t = 0, i = o.length; t < i; t++) {
      const i = o[t], n = i.nodeName.toLowerCase();
      if (!s.includes(n)) {
        i.parentNode.removeChild(i);
        continue
      }
      const r = [].concat(...i.attributes), a = [].concat(e["*"] || [], e[n] || []);
      r.forEach(t => {
        Be(t, a) || i.removeAttribute(t.nodeName)
      })
    }
    return n.body.innerHTML
  }

  const ze = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), Ue = new Set(["sanitize", "allowList", "sanitizeFn"]), $e = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)"
    }, Fe = {AUTO: "auto", TOP: "top", RIGHT: g() ? "left" : "right", BOTTOM: "bottom", LEFT: g() ? "right" : "left"},
    Ke = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
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
        img: ["src", "srcset", "alt", "title", "width", "height"],
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
      },
      popperConfig: null
    }, Ye = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip"
    };

  class qe extends M {
    constructor(t, e) {
      if (void 0 === de) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.config = this._getConfig(e), this.tip = null, this._setListeners()
    }

    static get Default() {
      return Ke
    }

    static get NAME() {
      return "tooltip"
    }

    static get DATA_KEY() {
      return "bs.tooltip"
    }

    static get Event() {
      return Ye
    }

    static get EVENT_KEY() {
      return ".bs.tooltip"
    }

    static get DefaultType() {
      return $e
    }

    enable() {
      this._isEnabled = !0
    }

    disable() {
      this._isEnabled = !1
    }

    toggleEnabled() {
      this._isEnabled = !this._isEnabled
    }

    toggle(t) {
      if (this._isEnabled) if (t) {
        const e = this._initializeOnDelegatedTarget(t);
        e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
      } else {
        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
        this._enter(null, this)
      }
    }

    dispose() {
      clearTimeout(this._timeout), I.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.config = null, this.tip = null, super.dispose()
    }

    show() {
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const e = I.trigger(this._element, this.constructor.Event.SHOW), i = h(this._element),
        n = null === i ? this._element.ownerDocument.documentElement.contains(this._element) : i.contains(this._element);
      if (e.defaultPrevented || !n) return;
      const o = this.getTipElement(), r = t(this.constructor.NAME);
      o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && o.classList.add("fade");
      const l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this._element) : this.config.placement,
        c = this._getAttachment(l);
      this._addAttachmentClass(c);
      const d = this._getContainer();
      v.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (d.appendChild(o), I.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = ce(this._element, o, this._getPopperConfig(c)), o.classList.add("show");
      const f = "function" == typeof this.config.customClass ? this.config.customClass() : this.config.customClass;
      f && o.classList.add(...f.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => {
        I.on(t, "mouseover", u)
      });
      const p = () => {
        const t = this._hoverState;
        this._hoverState = null, I.trigger(this._element, this.constructor.Event.SHOWN), "out" === t && this._leave(null, this)
      };
      if (this.tip.classList.contains("fade")) {
        const t = s(this.tip);
        I.one(this.tip, "transitionend", p), a(this.tip, t)
      } else p()
    }

    hide() {
      if (!this._popper) return;
      const t = this.getTipElement(), e = () => {
        this._isWithActiveTrigger() || ("show" !== this._hoverState && t.parentNode && t.parentNode.removeChild(t), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), I.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
      };
      if (!I.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) {
        if (t.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(t => I.off(t, "mouseover", u)), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
          const i = s(t);
          I.one(t, "transitionend", e), a(t, i)
        } else e();
        this._hoverState = ""
      }
    }

    update() {
      null !== this._popper && this._popper.update()
    }

    isWithContent() {
      return Boolean(this.getTitle())
    }

    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip
    }

    setContent() {
      const t = this.getTipElement();
      this.setElementContent(U.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show")
    }

    setElementContent(t, e) {
      if (null !== t) return "object" == typeof e && r(e) ? (e.jquery && (e = e[0]), void (this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this.config.html ? (this.config.sanitize && (e = We(e, this.config.allowList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
    }

    getTitle() {
      let t = this._element.getAttribute("data-bs-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this._element) : this.config.title), t
    }

    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t
    }

    _initializeOnDelegatedTarget(t, e) {
      const i = this.constructor.DATA_KEY;
      return (e = e || v.get(t.delegateTarget, i)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), v.set(t.delegateTarget, i, e)), e
    }

    _getOffset() {
      const {offset: t} = this.config;
      return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
    }

    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [{name: "flip", options: {fallbackPlacements: this.config.fallbackPlacements}}, {
          name: "offset",
          options: {offset: this._getOffset()}
        }, {name: "preventOverflow", options: {boundary: this.config.boundary}}, {
          name: "arrow",
          options: {element: `.${this.constructor.NAME}-arrow`}
        }, {name: "onChange", enabled: !0, phase: "afterWrite", fn: t => this._handlePopperPlacementChange(t)}],
        onFirstUpdate: t => {
          t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
        }
      };
      return {...e, ..."function" == typeof this.config.popperConfig ? this.config.popperConfig(e) : this.config.popperConfig}
    }

    _addAttachmentClass(t) {
      this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
    }

    _getContainer() {
      return !1 === this.config.container ? document.body : r(this.config.container) ? this.config.container : U.findOne(this.config.container)
    }

    _getAttachment(t) {
      return Fe[t.toUpperCase()]
    }

    _setListeners() {
      this.config.trigger.split(" ").forEach(t => {
        if ("click" === t) I.on(this._element, this.constructor.Event.CLICK, this.config.selector, t => this.toggle(t)); else if ("manual" !== t) {
          const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
            i = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          I.on(this._element, e, this.config.selector, t => this._enter(t)), I.on(this._element, i, this.config.selector, t => this._leave(t))
        }
      }), this._hideModalHandler = () => {
        this._element && this.hide()
      }, I.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = {
        ...this.config,
        trigger: "manual",
        selector: ""
      } : this._fixTitle()
    }

    _fixTitle() {
      const t = this._element.getAttribute("title"), e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
    }

    _enter(t, e) {
      e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout(() => {
        "show" === e._hoverState && e.show()
      }, e.config.delay.show) : e.show())
    }

    _leave(t, e) {
      e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(() => {
        "out" === e._hoverState && e.hide()
      }, e.config.delay.hide) : e.hide())
    }

    _isWithActiveTrigger() {
      for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
      return !1
    }

    _getConfig(t) {
      const e = z.getDataAttributes(this._element);
      return Object.keys(e).forEach(t => {
        Ue.has(t) && delete e[t]
      }), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = {...this.constructor.Default, ...e, ..."object" == typeof t && t ? t : {}}).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), l("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = We(t.template, t.allowList, t.sanitizeFn)), t
    }

    _getDelegateConfig() {
      const t = {};
      if (this.config) for (const e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      return t
    }

    _cleanTipClass() {
      const t = this.getTipElement(), e = t.getAttribute("class").match(ze);
      null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
    }

    _handlePopperPlacementChange(t) {
      const {state: e} = t;
      e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
    }

    static jQueryInterface(t) {
      return this.each((function () {
        let e = v.get(this, "bs.tooltip");
        const i = "object" == typeof t && t;
        if ((e || !/dispose|hide/.test(t)) && (e || (e = new qe(this, i)), "string" == typeof t)) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }))
    }
  }

  m("tooltip", qe);
  const Ve = new RegExp("(^|\\s)bs-popover\\S+", "g"), Xe = {
    ...qe.Default,
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }, Qe = {...qe.DefaultType, content: "(string|element|function)"}, Ge = {
    HIDE: "hide.bs.popover",
    HIDDEN: "hidden.bs.popover",
    SHOW: "show.bs.popover",
    SHOWN: "shown.bs.popover",
    INSERTED: "inserted.bs.popover",
    CLICK: "click.bs.popover",
    FOCUSIN: "focusin.bs.popover",
    FOCUSOUT: "focusout.bs.popover",
    MOUSEENTER: "mouseenter.bs.popover",
    MOUSELEAVE: "mouseleave.bs.popover"
  };

  class Ze extends qe {
    static get Default() {
      return Xe
    }

    static get NAME() {
      return "popover"
    }

    static get DATA_KEY() {
      return "bs.popover"
    }

    static get Event() {
      return Ge
    }

    static get EVENT_KEY() {
      return ".bs.popover"
    }

    static get DefaultType() {
      return Qe
    }

    isWithContent() {
      return this.getTitle() || this._getContent()
    }

    setContent() {
      const t = this.getTipElement();
      this.setElementContent(U.findOne(".popover-header", t), this.getTitle());
      let e = this._getContent();
      "function" == typeof e && (e = e.call(this._element)), this.setElementContent(U.findOne(".popover-body", t), e), t.classList.remove("fade", "show")
    }

    _addAttachmentClass(t) {
      this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
    }

    _getContent() {
      return this._element.getAttribute("data-bs-content") || this.config.content
    }

    _cleanTipClass() {
      const t = this.getTipElement(), e = t.getAttribute("class").match(Ve);
      null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
    }

    static jQueryInterface(t) {
      return this.each((function () {
        let e = v.get(this, "bs.popover");
        const i = "object" == typeof t ? t : null;
        if ((e || !/dispose|hide/.test(t)) && (e || (e = new Ze(this, i), v.set(this, "bs.popover", e)), "string" == typeof t)) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }))
    }
  }

  m("popover", Ze);
  const Je = {offset: 10, method: "auto", target: ""},
    ti = {offset: "number", method: "string", target: "(string|element)"};

  class ei extends M {
    constructor(t, e) {
      super(t), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e), this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, I.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process()
    }

    static get Default() {
      return Je
    }

    static get DATA_KEY() {
      return "bs.scrollspy"
    }

    refresh() {
      const t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
        e = "auto" === this._config.method ? t : this._config.method, n = "position" === e ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), U.find(this._selector).map(t => {
        const s = i(t), o = s ? U.findOne(s) : null;
        if (o) {
          const t = o.getBoundingClientRect();
          if (t.width || t.height) return [z[e](o).top + n, s]
        }
        return null
      }).filter(t => t).sort((t, e) => t[0] - e[0]).forEach(t => {
        this._offsets.push(t[0]), this._targets.push(t[1])
      })
    }

    dispose() {
      super.dispose(), I.off(this._scrollElement, ".bs.scrollspy"), this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
    }

    _getConfig(e) {
      if ("string" != typeof (e = {...Je, ...z.getDataAttributes(this._element), ..."object" == typeof e && e ? e : {}}).target && r(e.target)) {
        let {id: i} = e.target;
        i || (i = t("scrollspy"), e.target.id = i), e.target = "#" + i
      }
      return l("scrollspy", e, ti), e
    }

    _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
    }

    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    }

    _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
    }

    _process() {
      const t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(),
        i = this._config.offset + e - this._getOffsetHeight();
      if (this._scrollHeight !== e && this.refresh(), t >= i) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t)
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
        for (let e = this._offsets.length; e--;) this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
      }
    }

    _activate(t) {
      this._activeTarget = t, this._clear();
      const e = this._selector.split(",").map(e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
        i = U.findOne(e.join(","));
      i.classList.contains("dropdown-item") ? (U.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add("active"), i.classList.add("active")) : (i.classList.add("active"), U.parents(i, ".nav, .list-group").forEach(t => {
        U.prev(t, ".nav-link, .list-group-item").forEach(t => t.classList.add("active")), U.prev(t, ".nav-item").forEach(t => {
          U.children(t, ".nav-link").forEach(t => t.classList.add("active"))
        })
      })), I.trigger(this._scrollElement, "activate.bs.scrollspy", {relatedTarget: t})
    }

    _clear() {
      U.find(this._selector).filter(t => t.classList.contains("active")).forEach(t => t.classList.remove("active"))
    }

    static jQueryInterface(t) {
      return this.each((function () {
        const e = ei.getInstance(this) || new ei(this, "object" == typeof t ? t : {});
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }))
    }
  }

  I.on(window, "load.bs.scrollspy.data-api", () => {
    U.find('[data-bs-spy="scroll"]').forEach(t => new ei(t))
  }), m("scrollspy", ei);

  class ii extends M {
    static get DATA_KEY() {
      return "bs.tab"
    }

    show() {
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
      let t;
      const e = n(this._element), i = this._element.closest(".nav, .list-group");
      if (i) {
        const e = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
        t = U.find(e, i), t = t[t.length - 1]
      }
      const s = t ? I.trigger(t, "hide.bs.tab", {relatedTarget: this._element}) : null;
      if (I.trigger(this._element, "show.bs.tab", {relatedTarget: t}).defaultPrevented || null !== s && s.defaultPrevented) return;
      this._activate(this._element, i);
      const o = () => {
        I.trigger(t, "hidden.bs.tab", {relatedTarget: this._element}), I.trigger(this._element, "shown.bs.tab", {relatedTarget: t})
      };
      e ? this._activate(e, e.parentNode, o) : o()
    }

    _activate(t, e, i) {
      const n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? U.children(e, ".active") : U.find(":scope > li > .active", e))[0],
        o = i && n && n.classList.contains("fade"), r = () => this._transitionComplete(t, n, i);
      if (n && o) {
        const t = s(n);
        n.classList.remove("show"), I.one(n, "transitionend", r), a(n, t)
      } else r()
    }

    _transitionComplete(t, e, i) {
      if (e) {
        e.classList.remove("active");
        const t = U.findOne(":scope > .dropdown-menu .active", e.parentNode);
        t && t.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
      }
      t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), f(t), t.classList.contains("fade") && t.classList.add("show");
      let n = t.parentNode;
      if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
        const e = t.closest(".dropdown");
        e && U.find(".dropdown-toggle", e).forEach(t => t.classList.add("active")), t.setAttribute("aria-expanded", !0)
      }
      i && i()
    }

    static jQueryInterface(t) {
      return this.each((function () {
        const e = v.get(this, "bs.tab") || new ii(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      }))
    }
  }

  I.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this) || (v.get(this, "bs.tab") || new ii(this)).show()
  })), m("tab", ii);
  const ni = {animation: "boolean", autohide: "boolean", delay: "number"},
    si = {animation: !0, autohide: !0, delay: 5e3};

  class oi extends M {
    constructor(t, e) {
      super(t), this._config = this._getConfig(e), this._timeout = null, this._setListeners()
    }

    static get DefaultType() {
      return ni
    }

    static get Default() {
      return si
    }

    static get DATA_KEY() {
      return "bs.toast"
    }

    show() {
      if (I.trigger(this._element, "show.bs.toast").defaultPrevented) return;
      this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
      const t = () => {
        this._element.classList.remove("showing"), this._element.classList.add("show"), I.trigger(this._element, "shown.bs.toast"), this._config.autohide && (this._timeout = setTimeout(() => {
          this.hide()
        }, this._config.delay))
      };
      if (this._element.classList.remove("hide"), f(this._element), this._element.classList.add("showing"), this._config.animation) {
        const e = s(this._element);
        I.one(this._element, "transitionend", t), a(this._element, e)
      } else t()
    }

    hide() {
      if (!this._element.classList.contains("show")) return;
      if (I.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
      const t = () => {
        this._element.classList.add("hide"), I.trigger(this._element, "hidden.bs.toast")
      };
      if (this._element.classList.remove("show"), this._config.animation) {
        const e = s(this._element);
        I.one(this._element, "transitionend", t), a(this._element, e)
      } else t()
    }

    dispose() {
      this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose(), this._config = null
    }

    _getConfig(t) {
      return t = {...si, ...z.getDataAttributes(this._element), ..."object" == typeof t && t ? t : {}}, l("toast", t, this.constructor.DefaultType), t
    }

    _setListeners() {
      I.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide())
    }

    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null
    }

    static jQueryInterface(t) {
      return this.each((function () {
        let e = v.get(this, "bs.toast");
        if (e || (e = new oi(this, "object" == typeof t && t)), "string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this)
        }
      }))
    }
  }

  return m("toast", oi), {
    Alert: H,
    Button: R,
    Carousel: X,
    Collapse: Z,
    Dropdown: ye,
    Modal: Ne,
    Offcanvas: Ie,
    Popover: Ze,
    ScrollSpy: ei,
    Tab: ii,
    Toast: oi,
    Tooltip: qe
  }
}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
(function (a, b) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : (a = a || self, a.PerfectScrollbar = b())
})(this, function () {
  'use strict';
  var u = Math.abs, v = Math.floor;

  function a(a) {
    return getComputedStyle(a)
  }

  function b(a, b) {
    for (var c in b) {
      var d = b[c];
      "number" == typeof d && (d += "px"), a.style[c] = d
    }
    return a
  }

  function c(a) {
    var b = document.createElement("div");
    return b.className = a, b
  }

  function d(a, b) {
    if (!w) throw new Error("No element matching method supported");
    return w.call(a, b)
  }

  function e(a) {
    a.remove ? a.remove() : a.parentNode && a.parentNode.removeChild(a)
  }

  function f(a, b) {
    return Array.prototype.filter.call(a.children, function (a) {
      return d(a, b)
    })
  }

  function g(a, b) {
    var c = a.element.classList, d = z.state.scrolling(b);
    c.contains(d) ? clearTimeout(A[b]) : c.add(d)
  }

  function h(a, b) {
    A[b] = setTimeout(function () {
      return a.isAlive && a.element.classList.remove(z.state.scrolling(b))
    }, a.settings.scrollingThreshold)
  }

  function j(a, b) {
    g(a, b), h(a, b)
  }

  function k(a) {
    if ("function" == typeof window.CustomEvent) return new CustomEvent(a);
    var b = document.createEvent("CustomEvent");
    return b.initCustomEvent(a, !1, !1, void 0), b
  }

  function l(a, b, c, d, e) {
    void 0 === d && (d = !0), void 0 === e && (e = !1);
    var f;
    if ("top" === b) f = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"]; else if ("left" === b) f = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]; else throw new Error("A proper axis should be provided");
    m(a, c, f, d, e)
  }

  function m(a, b, c, d, e) {
    var f = c[0], g = c[1], h = c[2], i = c[3], l = c[4], m = c[5];
    void 0 === d && (d = !0), void 0 === e && (e = !1);
    var n = a.element;// reset reach
    a.reach[i] = null, 1 > n[h] && (a.reach[i] = "start"), n[h] > a[f] - a[g] - 1 && (a.reach[i] = "end"), b && (n.dispatchEvent(k("ps-scroll-" + i)), 0 > b ? n.dispatchEvent(k("ps-scroll-" + l)) : 0 < b && n.dispatchEvent(k("ps-scroll-" + m)), d && j(a, i)), a.reach[i] && (b || e) && n.dispatchEvent(k("ps-" + i + "-reach-" + a.reach[i]))
  }

  function n(a) {
    return parseInt(a, 10) || 0
  }

  function o(a) {
    return d(a, "input,[contenteditable]") || d(a, "select,[contenteditable]") || d(a, "textarea,[contenteditable]") || d(a, "button,[contenteditable]")
  }

  function p(b) {
    var c = a(b);
    return n(c.width) + n(c.paddingLeft) + n(c.paddingRight) + n(c.borderLeftWidth) + n(c.borderRightWidth)
  }

  function q(a) {
    var b = Math.ceil, c = a.element, d = v(c.scrollTop), g = c.getBoundingClientRect();
    a.containerWidth = b(g.width), a.containerHeight = b(g.height), a.contentWidth = c.scrollWidth, a.contentHeight = c.scrollHeight, c.contains(a.scrollbarXRail) || (f(c, z.element.rail("x")).forEach(function (a) {
      return e(a)
    }), c.appendChild(a.scrollbarXRail)), c.contains(a.scrollbarYRail) || (f(c, z.element.rail("y")).forEach(function (a) {
      return e(a)
    }), c.appendChild(a.scrollbarYRail)), !a.settings.suppressScrollX && a.containerWidth + a.settings.scrollXMarginOffset < a.contentWidth ? (a.scrollbarXActive = !0, a.railXWidth = a.containerWidth - a.railXMarginWidth, a.railXRatio = a.containerWidth / a.railXWidth, a.scrollbarXWidth = r(a, n(a.railXWidth * a.containerWidth / a.contentWidth)), a.scrollbarXLeft = n((a.negativeScrollAdjustment + c.scrollLeft) * (a.railXWidth - a.scrollbarXWidth) / (a.contentWidth - a.containerWidth))) : a.scrollbarXActive = !1, !a.settings.suppressScrollY && a.containerHeight + a.settings.scrollYMarginOffset < a.contentHeight ? (a.scrollbarYActive = !0, a.railYHeight = a.containerHeight - a.railYMarginHeight, a.railYRatio = a.containerHeight / a.railYHeight, a.scrollbarYHeight = r(a, n(a.railYHeight * a.containerHeight / a.contentHeight)), a.scrollbarYTop = n(d * (a.railYHeight - a.scrollbarYHeight) / (a.contentHeight - a.containerHeight))) : a.scrollbarYActive = !1, a.scrollbarXLeft >= a.railXWidth - a.scrollbarXWidth && (a.scrollbarXLeft = a.railXWidth - a.scrollbarXWidth), a.scrollbarYTop >= a.railYHeight - a.scrollbarYHeight && (a.scrollbarYTop = a.railYHeight - a.scrollbarYHeight), s(c, a), a.scrollbarXActive ? c.classList.add(z.state.active("x")) : (c.classList.remove(z.state.active("x")), a.scrollbarXWidth = 0, a.scrollbarXLeft = 0, c.scrollLeft = !0 === a.isRtl ? a.contentWidth : 0), a.scrollbarYActive ? c.classList.add(z.state.active("y")) : (c.classList.remove(z.state.active("y")), a.scrollbarYHeight = 0, a.scrollbarYTop = 0, c.scrollTop = 0)
  }

  function r(a, b) {
    var c = Math.min, d = Math.max;
    return a.settings.minScrollbarLength && (b = d(b, a.settings.minScrollbarLength)), a.settings.maxScrollbarLength && (b = c(b, a.settings.maxScrollbarLength)), b
  }

  function s(a, c) {
    var d = {width: c.railXWidth}, e = v(a.scrollTop);
    d.left = c.isRtl ? c.negativeScrollAdjustment + a.scrollLeft + c.containerWidth - c.contentWidth : a.scrollLeft, c.isScrollbarXUsingBottom ? d.bottom = c.scrollbarXBottom - e : d.top = c.scrollbarXTop + e, b(c.scrollbarXRail, d);
    var f = {top: e, height: c.railYHeight};
    c.isScrollbarYUsingRight ? c.isRtl ? f.right = c.contentWidth - (c.negativeScrollAdjustment + a.scrollLeft) - c.scrollbarYRight - c.scrollbarYOuterWidth - 9 : f.right = c.scrollbarYRight - a.scrollLeft : c.isRtl ? f.left = c.negativeScrollAdjustment + a.scrollLeft + 2 * c.containerWidth - c.contentWidth - c.scrollbarYLeft - c.scrollbarYOuterWidth : f.left = c.scrollbarYLeft + a.scrollLeft, b(c.scrollbarYRail, f), b(c.scrollbarX, {
      left: c.scrollbarXLeft,
      width: c.scrollbarXWidth - c.railBorderXWidth
    }), b(c.scrollbarY, {top: c.scrollbarYTop, height: c.scrollbarYHeight - c.railBorderYWidth})
  }

  function t(a, b) {
    function c(b) {
      b.touches && b.touches[0] && (b[k] = b.touches[0].pageY), s[o] = t + v * (b[k] - u), g(a, p), q(a), b.stopPropagation(), b.preventDefault()
    }

    function d() {
      h(a, p), a[r].classList.remove(z.state.clicking), a.event.unbind(a.ownerDocument, "mousemove", c)
    }

    function f(b, e) {
      t = s[o], e && b.touches && (b[k] = b.touches[0].pageY), u = b[k], v = (a[j] - a[i]) / (a[l] - a[n]), e ? a.event.bind(a.ownerDocument, "touchmove", c) : (a.event.bind(a.ownerDocument, "mousemove", c), a.event.once(a.ownerDocument, "mouseup", d), b.preventDefault()), a[r].classList.add(z.state.clicking), b.stopPropagation()
    }

    var i = b[0], j = b[1], k = b[2], l = b[3], m = b[4], n = b[5], o = b[6], p = b[7], r = b[8], s = a.element,
      t = null, u = null, v = null;
    a.event.bind(a[m], "mousedown", function (a) {
      f(a)
    }), a.event.bind(a[m], "touchstart", function (a) {
      f(a, !0)
    })
  }

  var w = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
    z = {
      main: "ps", rtl: "ps__rtl", element: {
        thumb: function (a) {
          return "ps__thumb-" + a
        }, rail: function (a) {
          return "ps__rail-" + a
        }, consuming: "ps__child--consume"
      }, state: {
        focus: "ps--focus", clicking: "ps--clicking", active: function (a) {
          return "ps--active-" + a
        }, scrolling: function (a) {
          return "ps--scrolling-" + a
        }
      }
    }, A = {x: null, y: null}, B = function (a) {
      this.element = a, this.handlers = {}
    }, C = {isEmpty: {configurable: !0}};
  B.prototype.bind = function (a, b) {
    "undefined" == typeof this.handlers[a] && (this.handlers[a] = []), this.handlers[a].push(b), this.element.addEventListener(a, b, !1)
  }, B.prototype.unbind = function (a, b) {
    var c = this;
    this.handlers[a] = this.handlers[a].filter(function (d) {
      return !!(b && d !== b) || (c.element.removeEventListener(a, d, !1), !1)
    })
  }, B.prototype.unbindAll = function () {
    for (var a in this.handlers) this.unbind(a)
  }, C.isEmpty.get = function () {
    var a = this;
    return Object.keys(this.handlers).every(function (b) {
      return 0 === a.handlers[b].length
    })
  }, Object.defineProperties(B.prototype, C);
  var D = function () {
    this.eventElements = []
  };
  D.prototype.eventElement = function (a) {
    var b = this.eventElements.filter(function (b) {
      return b.element === a
    })[0];
    return b || (b = new B(a), this.eventElements.push(b)), b
  }, D.prototype.bind = function (a, b, c) {
    this.eventElement(a).bind(b, c)
  }, D.prototype.unbind = function (a, b, c) {
    var d = this.eventElement(a);
    d.unbind(b, c), d.isEmpty && this.eventElements.splice(this.eventElements.indexOf(d), 1)
  }, D.prototype.unbindAll = function () {
    this.eventElements.forEach(function (a) {
      return a.unbindAll()
    }), this.eventElements = []
  }, D.prototype.once = function (a, b, c) {
    var d = this.eventElement(a), e = function (a) {
      d.unbind(b, e), c(a)
    };
    d.bind(b, e)
  };
  var E = {
    isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
    supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && 0 < window.navigator.maxTouchPoints || window.DocumentTouch && document instanceof window.DocumentTouch),
    supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
    isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
  }, F = function () {
    return {
      handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollingThreshold: 1e3,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipeEasing: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !0,
      wheelSpeed: 1
    }
  }, G = {
    "click-rail": function (a) {
      a.element;
      a.event.bind(a.scrollbarY, "mousedown", function (a) {
        return a.stopPropagation()
      }), a.event.bind(a.scrollbarYRail, "mousedown", function (b) {
        var c = b.pageY - window.pageYOffset - a.scrollbarYRail.getBoundingClientRect().top,
          d = c > a.scrollbarYTop ? 1 : -1;
        a.element.scrollTop += d * a.containerHeight, q(a), b.stopPropagation()
      }), a.event.bind(a.scrollbarX, "mousedown", function (a) {
        return a.stopPropagation()
      }), a.event.bind(a.scrollbarXRail, "mousedown", function (b) {
        var c = b.pageX - window.pageXOffset - a.scrollbarXRail.getBoundingClientRect().left,
          d = c > a.scrollbarXLeft ? 1 : -1;
        a.element.scrollLeft += d * a.containerWidth, q(a), b.stopPropagation()
      })
    }, "drag-thumb": function (a) {
      t(a, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), t(a, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
    }, keyboard: function (a) {
      function b(b, d) {
        var e = v(c.scrollTop);
        if (0 === b) {
          if (!a.scrollbarYActive) return !1;
          if (0 === e && 0 < d || e >= a.contentHeight - a.containerHeight && 0 > d) return !a.settings.wheelPropagation
        }
        var f = c.scrollLeft;
        if (0 === d) {
          if (!a.scrollbarXActive) return !1;
          if (0 === f && 0 > b || f >= a.contentWidth - a.containerWidth && 0 < b) return !a.settings.wheelPropagation
        }
        return !0
      }

      var c = a.element, f = function () {
        return d(c, ":hover")
      }, g = function () {
        return d(a.scrollbarX, ":focus") || d(a.scrollbarY, ":focus")
      };
      a.event.bind(a.ownerDocument, "keydown", function (d) {
        if (!(d.isDefaultPrevented && d.isDefaultPrevented() || d.defaultPrevented) && (f() || g())) {
          var e = document.activeElement ? document.activeElement : a.ownerDocument.activeElement;
          if (e) {
            if ("IFRAME" === e.tagName) e = e.contentDocument.activeElement; else// go deeper if element is a webcomponent
              for (; e.shadowRoot;) e = e.shadowRoot.activeElement;
            if (o(e)) return
          }
          var h = 0, i = 0;
          switch (d.which) {
            case 37:
              h = d.metaKey ? -a.contentWidth : d.altKey ? -a.containerWidth : -30;
              break;
            case 38:
              i = d.metaKey ? a.contentHeight : d.altKey ? a.containerHeight : 30;
              break;
            case 39:
              h = d.metaKey ? a.contentWidth : d.altKey ? a.containerWidth : 30;
              break;
            case 40:
              i = d.metaKey ? -a.contentHeight : d.altKey ? -a.containerHeight : -30;
              break;
            case 32:
              i = d.shiftKey ? a.containerHeight : -a.containerHeight;
              break;
            case 33:
              i = a.containerHeight;
              break;
            case 34:
              i = -a.containerHeight;
              break;
            case 36:
              i = a.contentHeight;
              break;
            case 35:
              i = -a.contentHeight;
              break;
            default:
              return;
          }
          a.settings.suppressScrollX && 0 !== h || a.settings.suppressScrollY && 0 !== i || (c.scrollTop -= i, c.scrollLeft += h, q(a), b(h, i) && d.preventDefault())
        }
      })
    }, wheel: function (b) {
      function c(a, c) {
        var d, e = v(h.scrollTop), f = 0 === h.scrollTop, g = e + h.offsetHeight === h.scrollHeight,
          i = 0 === h.scrollLeft, j = h.scrollLeft + h.offsetWidth === h.scrollWidth;
        return d = u(c) > u(a) ? f || g : i || j, !d || !b.settings.wheelPropagation
      }

      function d(a) {
        var b = a.deltaX, c = -1 * a.deltaY;
        return ("undefined" == typeof b || "undefined" == typeof c) && (b = -1 * a.wheelDeltaX / 6, c = a.wheelDeltaY / 6), a.deltaMode && 1 === a.deltaMode && (b *= 10, c *= 10), b !== b && c !== c/* NaN checks */ && (b = 0, c = a.wheelDelta), a.shiftKey ? [-c, -b] : [b, c]
      }

      function f(b, c, d) {// FIXME: this is a workaround for <select> issue in FF and IE #571
        if (!E.isWebKit && h.querySelector("select:focus")) return !0;
        if (!h.contains(b)) return !1;
        for (var e = b; e && e !== h;) {
          if (e.classList.contains(z.element.consuming)) return !0;
          var f = a(e);// if deltaY && vertical scrollable
          if (d && f.overflowY.match(/(scroll|auto)/)) {
            var g = e.scrollHeight - e.clientHeight;
            if (0 < g && (0 < e.scrollTop && 0 > d || e.scrollTop < g && 0 < d)) return !0
          }// if deltaX && horizontal scrollable
          if (c && f.overflowX.match(/(scroll|auto)/)) {
            var i = e.scrollWidth - e.clientWidth;
            if (0 < i && (0 < e.scrollLeft && 0 > c || e.scrollLeft < i && 0 < c)) return !0
          }
          e = e.parentNode
        }
        return !1
      }

      function g(a) {
        var e = d(a), g = e[0], i = e[1];
        if (!f(a.target, g, i)) {
          var j = !1;
          b.settings.useBothWheelAxes ? b.scrollbarYActive && !b.scrollbarXActive ? (i ? h.scrollTop -= i * b.settings.wheelSpeed : h.scrollTop += g * b.settings.wheelSpeed, j = !0) : b.scrollbarXActive && !b.scrollbarYActive && (g ? h.scrollLeft += g * b.settings.wheelSpeed : h.scrollLeft -= i * b.settings.wheelSpeed, j = !0) : (h.scrollTop -= i * b.settings.wheelSpeed, h.scrollLeft += g * b.settings.wheelSpeed), q(b), j = j || c(g, i), j && !a.ctrlKey && (a.stopPropagation(), a.preventDefault())
        }
      }

      var h = b.element;
      "undefined" == typeof window.onwheel ? "undefined" != typeof window.onmousewheel && b.event.bind(h, "mousewheel", g) : b.event.bind(h, "wheel", g)
    }, touch: function (b) {
      function c(a, c) {
        var d = v(l.scrollTop), e = l.scrollLeft, f = u(a), g = u(c);
        if (g > f) {// user is perhaps trying to swipe up/down the page
          if (0 > c && d === b.contentHeight - b.containerHeight || 0 < c && 0 === d)// set prevent for mobile Chrome refresh
            return 0 === window.scrollY && 0 < c && E.isChrome;
        } else if (f > g && (0 > a && e === b.contentWidth - b.containerWidth || 0 < a && 0 === e))// user is perhaps trying to swipe left/right across the page
          return !0;
        return !0
      }

      function d(a, c) {
        l.scrollTop -= c, l.scrollLeft -= a, q(b)
      }

      function f(a) {
        return a.targetTouches ? a.targetTouches[0] : a
      }

      function g(a) {
        return !(a.pointerType && "pen" === a.pointerType && 0 === a.buttons) && (!!(a.targetTouches && 1 === a.targetTouches.length) || !!(a.pointerType && "mouse" !== a.pointerType && a.pointerType !== a.MSPOINTER_TYPE_MOUSE))
      }

      function h(a) {
        if (g(a)) {
          var b = f(a);
          m.pageX = b.pageX, m.pageY = b.pageY, n = new Date().getTime(), null !== p && clearInterval(p)
        }
      }

      function i(b, c, d) {
        if (!l.contains(b)) return !1;
        for (var e = b; e && e !== l;) {
          if (e.classList.contains(z.element.consuming)) return !0;
          var f = a(e);// if deltaY && vertical scrollable
          if (d && f.overflowY.match(/(scroll|auto)/)) {
            var g = e.scrollHeight - e.clientHeight;
            if (0 < g && (0 < e.scrollTop && 0 > d || e.scrollTop < g && 0 < d)) return !0
          }// if deltaX && horizontal scrollable
          if (c && f.overflowX.match(/(scroll|auto)/)) {
            var h = e.scrollWidth - e.clientWidth;
            if (0 < h && (0 < e.scrollLeft && 0 > c || e.scrollLeft < h && 0 < c)) return !0
          }
          e = e.parentNode
        }
        return !1
      }

      function j(a) {
        if (g(a)) {
          var b = f(a), e = {pageX: b.pageX, pageY: b.pageY}, h = e.pageX - m.pageX, j = e.pageY - m.pageY;
          if (i(a.target, h, j)) return;
          d(h, j), m = e;
          var k = new Date().getTime(), l = k - n;
          0 < l && (o.x = h / l, o.y = j / l, n = k), c(h, j) && a.preventDefault()
        }
      }

      function k() {
        b.settings.swipeEasing && (clearInterval(p), p = setInterval(function () {
          return b.isInitialized ? void clearInterval(p) : o.x || o.y ? .01 > u(o.x) && .01 > u(o.y) ? void clearInterval(p) : void (d(30 * o.x, 30 * o.y), o.x *= .8, o.y *= .8) : void clearInterval(p)
        }, 10))
      }

      if (E.supportsTouch || E.supportsIePointer) {
        var l = b.element, m = {}, n = 0, o = {}, p = null;
        E.supportsTouch ? (b.event.bind(l, "touchstart", h), b.event.bind(l, "touchmove", j), b.event.bind(l, "touchend", k)) : E.supportsIePointer && (window.PointerEvent ? (b.event.bind(l, "pointerdown", h), b.event.bind(l, "pointermove", j), b.event.bind(l, "pointerup", k)) : window.MSPointerEvent && (b.event.bind(l, "MSPointerDown", h), b.event.bind(l, "MSPointerMove", j), b.event.bind(l, "MSPointerUp", k)))
      }
    }
  }, H = function (d, e) {
    var f = this;
    if (void 0 === e && (e = {}), "string" == typeof d && (d = document.querySelector(d)), !d || !d.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
    for (var g in this.element = d, d.classList.add(z.main), this.settings = F(), e) this.settings[g] = e[g];
    this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
    var h = function () {
      return d.classList.add(z.state.focus)
    }, i = function () {
      return d.classList.remove(z.state.focus)
    };
    this.isRtl = "rtl" === a(d).direction, !0 === this.isRtl && d.classList.add(z.rtl), this.isNegativeScroll = function () {
      var a = d.scrollLeft, b = null;
      return d.scrollLeft = -1, b = 0 > d.scrollLeft, d.scrollLeft = a, b
    }(), this.negativeScrollAdjustment = this.isNegativeScroll ? d.scrollWidth - d.clientWidth : 0, this.event = new D, this.ownerDocument = d.ownerDocument || document, this.scrollbarXRail = c(z.element.rail("x")), d.appendChild(this.scrollbarXRail), this.scrollbarX = c(z.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", h), this.event.bind(this.scrollbarX, "blur", i), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
    var j = a(this.scrollbarXRail);
    this.scrollbarXBottom = parseInt(j.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = n(j.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = n(j.borderLeftWidth) + n(j.borderRightWidth), b(this.scrollbarXRail, {display: "block"}), this.railXMarginWidth = n(j.marginLeft) + n(j.marginRight), b(this.scrollbarXRail, {display: ""}), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = c(z.element.rail("y")), d.appendChild(this.scrollbarYRail), this.scrollbarY = c(z.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", h), this.event.bind(this.scrollbarY, "blur", i), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
    var k = a(this.scrollbarYRail);
    this.scrollbarYRight = parseInt(k.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = n(k.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? p(this.scrollbarY) : null, this.railBorderYWidth = n(k.borderTopWidth) + n(k.borderBottomWidth), b(this.scrollbarYRail, {display: "block"}), this.railYMarginHeight = n(k.marginTop) + n(k.marginBottom), b(this.scrollbarYRail, {display: ""}), this.railYHeight = null, this.railYRatio = null, this.reach = {
      x: 0 >= d.scrollLeft ? "start" : d.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
      y: 0 >= d.scrollTop ? "start" : d.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
    }, this.isAlive = !0, this.settings.handlers.forEach(function (a) {
      return G[a](f)
    }), this.lastScrollTop = v(d.scrollTop), this.lastScrollLeft = d.scrollLeft, this.event.bind(this.element, "scroll", function (a) {
      return f.onScroll(a)
    }), q(this)
  };
  return H.prototype.update = function () {
    this.isAlive && (// Recalcuate negative scrollLeft adjustment
// Recalculate rail margins
// Hide scrollbars not to affect scrollWidth and scrollHeight
      this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, b(this.scrollbarXRail, {display: "block"}), b(this.scrollbarYRail, {display: "block"}), this.railXMarginWidth = n(a(this.scrollbarXRail).marginLeft) + n(a(this.scrollbarXRail).marginRight), this.railYMarginHeight = n(a(this.scrollbarYRail).marginTop) + n(a(this.scrollbarYRail).marginBottom), b(this.scrollbarXRail, {display: "none"}), b(this.scrollbarYRail, {display: "none"}), q(this), l(this, "top", 0, !1, !0), l(this, "left", 0, !1, !0), b(this.scrollbarXRail, {display: ""}), b(this.scrollbarYRail, {display: ""}))
  }, H.prototype.onScroll = function () {
    this.isAlive && (q(this), l(this, "top", this.element.scrollTop - this.lastScrollTop), l(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = v(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
  }, H.prototype.destroy = function () {
    this.isAlive && (// unset elements
      this.event.unbindAll(), e(this.scrollbarX), e(this.scrollbarY), e(this.scrollbarXRail), e(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
  }, H.prototype.removePsClasses = function () {
    this.element.className = this.element.className.split(" ").filter(function (a) {
      return !a.match(/^ps([-_].+|)$/)
    }).join(" ")
  }, H
});
//# sourceMappingURL=perfect-scrollbar.min.js.map