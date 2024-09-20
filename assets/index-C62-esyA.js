var Up = Object.defineProperty;
var Yp = (t, e, n) => e in t ? Up(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var z = (t, e, n) => Yp(t, typeof e != "symbol" ? e + "" : e, n);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        i(r);
    new MutationObserver(r => {
        for (const s of r)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && i(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(r) {
        const s = {};
        return r.integrity && (s.integrity = r.integrity),
        r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function i(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const s = n(r);
        fetch(r.href, s)
    }
}
)();
function Xp(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Uf = {
    exports: {}
}
  , oo = {}
  , Yf = {
    exports: {}
}
  , j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wr = Symbol.for("react.element")
  , Kp = Symbol.for("react.portal")
  , Qp = Symbol.for("react.fragment")
  , Gp = Symbol.for("react.strict_mode")
  , Zp = Symbol.for("react.profiler")
  , Jp = Symbol.for("react.provider")
  , qp = Symbol.for("react.context")
  , $p = Symbol.for("react.forward_ref")
  , eg = Symbol.for("react.suspense")
  , tg = Symbol.for("react.memo")
  , ng = Symbol.for("react.lazy")
  , xu = Symbol.iterator;
function ig(t) {
    return t === null || typeof t != "object" ? null : (t = xu && t[xu] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var Xf = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Kf = Object.assign
  , Qf = {};
function di(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = Qf,
    this.updater = n || Xf
}
di.prototype.isReactComponent = {};
di.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}
;
di.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
;
function Gf() {}
Gf.prototype = di.prototype;
function aa(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = Qf,
    this.updater = n || Xf
}
var ua = aa.prototype = new Gf;
ua.constructor = aa;
Kf(ua, di.prototype);
ua.isPureReactComponent = !0;
var wu = Array.isArray
  , Zf = Object.prototype.hasOwnProperty
  , ca = {
    current: null
}
  , Jf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function qf(t, e, n) {
    var i, r = {}, s = null, o = null;
    if (e != null)
        for (i in e.ref !== void 0 && (o = e.ref),
        e.key !== void 0 && (s = "" + e.key),
        e)
            Zf.call(e, i) && !Jf.hasOwnProperty(i) && (r[i] = e[i]);
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    if (t && t.defaultProps)
        for (i in l = t.defaultProps,
        l)
            r[i] === void 0 && (r[i] = l[i]);
    return {
        $$typeof: wr,
        type: t,
        key: s,
        ref: o,
        props: r,
        _owner: ca.current
    }
}
function rg(t, e) {
    return {
        $$typeof: wr,
        type: t.type,
        key: e,
        ref: t.ref,
        props: t.props,
        _owner: t._owner
    }
}
function fa(t) {
    return typeof t == "object" && t !== null && t.$$typeof === wr
}
function sg(t) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + t.replace(/[=:]/g, function(n) {
        return e[n]
    })
}
var ku = /\/+/g;
function Eo(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? sg("" + t.key) : e.toString(36)
}
function ss(t, e, n, i, r) {
    var s = typeof t;
    (s === "undefined" || s === "boolean") && (t = null);
    var o = !1;
    if (t === null)
        o = !0;
    else
        switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (t.$$typeof) {
            case wr:
            case Kp:
                o = !0
            }
        }
    if (o)
        return o = t,
        r = r(o),
        t = i === "" ? "." + Eo(o, 0) : i,
        wu(r) ? (n = "",
        t != null && (n = t.replace(ku, "$&/") + "/"),
        ss(r, e, n, "", function(u) {
            return u
        })) : r != null && (fa(r) && (r = rg(r, n + (!r.key || o && o.key === r.key ? "" : ("" + r.key).replace(ku, "$&/") + "/") + t)),
        e.push(r)),
        1;
    if (o = 0,
    i = i === "" ? "." : i + ":",
    wu(t))
        for (var l = 0; l < t.length; l++) {
            s = t[l];
            var a = i + Eo(s, l);
            o += ss(s, e, n, a, r)
        }
    else if (a = ig(t),
    typeof a == "function")
        for (t = a.call(t),
        l = 0; !(s = t.next()).done; )
            s = s.value,
            a = i + Eo(s, l++),
            o += ss(s, e, n, a, r);
    else if (s === "object")
        throw e = String(t),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function Er(t, e, n) {
    if (t == null)
        return t;
    var i = []
      , r = 0;
    return ss(t, i, "", "", function(s) {
        return e.call(n, s, r++)
    }),
    i
}
function og(t) {
    if (t._status === -1) {
        var e = t._result;
        e = e(),
        e.then(function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 1,
            t._result = n)
        }, function(n) {
            (t._status === 0 || t._status === -1) && (t._status = 2,
            t._result = n)
        }),
        t._status === -1 && (t._status = 0,
        t._result = e)
    }
    if (t._status === 1)
        return t._result.default;
    throw t._result
}
var De = {
    current: null
}
  , os = {
    transition: null
}
  , lg = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: os,
    ReactCurrentOwner: ca
};
function $f() {
    throw Error("act(...) is not supported in production builds of React.")
}
j.Children = {
    map: Er,
    forEach: function(t, e, n) {
        Er(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return Er(t, function() {
            e++
        }),
        e
    },
    toArray: function(t) {
        return Er(t, function(e) {
            return e
        }) || []
    },
    only: function(t) {
        if (!fa(t))
            throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
};
j.Component = di;
j.Fragment = Qp;
j.Profiler = Zp;
j.PureComponent = aa;
j.StrictMode = Gp;
j.Suspense = eg;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lg;
j.act = $f;
j.cloneElement = function(t, e, n) {
    if (t == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var i = Kf({}, t.props)
      , r = t.key
      , s = t.ref
      , o = t._owner;
    if (e != null) {
        if (e.ref !== void 0 && (s = e.ref,
        o = ca.current),
        e.key !== void 0 && (r = "" + e.key),
        t.type && t.type.defaultProps)
            var l = t.type.defaultProps;
        for (a in e)
            Zf.call(e, a) && !Jf.hasOwnProperty(a) && (i[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    return {
        $$typeof: wr,
        type: t.type,
        key: r,
        ref: s,
        props: i,
        _owner: o
    }
}
;
j.createContext = function(t) {
    return t = {
        $$typeof: qp,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    t.Provider = {
        $$typeof: Jp,
        _context: t
    },
    t.Consumer = t
}
;
j.createElement = qf;
j.createFactory = function(t) {
    var e = qf.bind(null, t);
    return e.type = t,
    e
}
;
j.createRef = function() {
    return {
        current: null
    }
}
;
j.forwardRef = function(t) {
    return {
        $$typeof: $p,
        render: t
    }
}
;
j.isValidElement = fa;
j.lazy = function(t) {
    return {
        $$typeof: ng,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: og
    }
}
;
j.memo = function(t, e) {
    return {
        $$typeof: tg,
        type: t,
        compare: e === void 0 ? null : e
    }
}
;
j.startTransition = function(t) {
    var e = os.transition;
    os.transition = {};
    try {
        t()
    } finally {
        os.transition = e
    }
}
;
j.unstable_act = $f;
j.useCallback = function(t, e) {
    return De.current.useCallback(t, e)
}
;
j.useContext = function(t) {
    return De.current.useContext(t)
}
;
j.useDebugValue = function() {}
;
j.useDeferredValue = function(t) {
    return De.current.useDeferredValue(t)
}
;
j.useEffect = function(t, e) {
    return De.current.useEffect(t, e)
}
;
j.useId = function() {
    return De.current.useId()
}
;
j.useImperativeHandle = function(t, e, n) {
    return De.current.useImperativeHandle(t, e, n)
}
;
j.useInsertionEffect = function(t, e) {
    return De.current.useInsertionEffect(t, e)
}
;
j.useLayoutEffect = function(t, e) {
    return De.current.useLayoutEffect(t, e)
}
;
j.useMemo = function(t, e) {
    return De.current.useMemo(t, e)
}
;
j.useReducer = function(t, e, n) {
    return De.current.useReducer(t, e, n)
}
;
j.useRef = function(t) {
    return De.current.useRef(t)
}
;
j.useState = function(t) {
    return De.current.useState(t)
}
;
j.useSyncExternalStore = function(t, e, n) {
    return De.current.useSyncExternalStore(t, e, n)
}
;
j.useTransition = function() {
    return De.current.useTransition()
}
;
j.version = "18.3.1";
Yf.exports = j;
var q = Yf.exports;
const Pt = Xp(q);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ag = q
  , ug = Symbol.for("react.element")
  , cg = Symbol.for("react.fragment")
  , fg = Object.prototype.hasOwnProperty
  , dg = ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , hg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ed(t, e, n) {
    var i, r = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
    for (i in e)
        fg.call(e, i) && !hg.hasOwnProperty(i) && (r[i] = e[i]);
    if (t && t.defaultProps)
        for (i in e = t.defaultProps,
        e)
            r[i] === void 0 && (r[i] = e[i]);
    return {
        $$typeof: ug,
        type: t,
        key: s,
        ref: o,
        props: r,
        _owner: dg.current
    }
}
oo.Fragment = cg;
oo.jsx = ed;
oo.jsxs = ed;
Uf.exports = oo;
var _ = Uf.exports
  , td = {
    exports: {}
}
  , Qe = {}
  , nd = {
    exports: {}
}
  , id = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(t) {
    function e(M, O) {
        var R = M.length;
        M.push(O);
        e: for (; 0 < R; ) {
            var N = R - 1 >>> 1
              , U = M[N];
            if (0 < r(U, O))
                M[N] = O,
                M[R] = U,
                R = N;
            else
                break e
        }
    }
    function n(M) {
        return M.length === 0 ? null : M[0]
    }
    function i(M) {
        if (M.length === 0)
            return null;
        var O = M[0]
          , R = M.pop();
        if (R !== O) {
            M[0] = R;
            e: for (var N = 0, U = M.length, ye = U >>> 1; N < ye; ) {
                var ee = 2 * (N + 1) - 1
                  , wt = M[ee]
                  , Pe = ee + 1
                  , Mr = M[Pe];
                if (0 > r(wt, R))
                    Pe < U && 0 > r(Mr, wt) ? (M[N] = Mr,
                    M[Pe] = R,
                    N = Pe) : (M[N] = wt,
                    M[ee] = R,
                    N = ee);
                else if (Pe < U && 0 > r(Mr, R))
                    M[N] = Mr,
                    M[Pe] = R,
                    N = Pe;
                else
                    break e
            }
        }
        return O
    }
    function r(M, O) {
        var R = M.sortIndex - O.sortIndex;
        return R !== 0 ? R : M.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        t.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , l = o.now();
        t.unstable_now = function() {
            return o.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , f = null
      , d = 3
      , h = !1
      , m = !1
      , v = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(M) {
        for (var O = n(u); O !== null; ) {
            if (O.callback === null)
                i(u);
            else if (O.startTime <= M)
                i(u),
                O.sortIndex = O.expirationTime,
                e(a, O);
            else
                break;
            O = n(u)
        }
    }
    function w(M) {
        if (v = !1,
        y(M),
        !m)
            if (n(a) !== null)
                m = !0,
                H(k);
            else {
                var O = n(u);
                O !== null && K(w, O.startTime - M)
            }
    }
    function k(M, O) {
        m = !1,
        v && (v = !1,
        g(b),
        b = -1),
        h = !0;
        var R = d;
        try {
            for (y(O),
            f = n(a); f !== null && (!(f.expirationTime > O) || M && !T()); ) {
                var N = f.callback;
                if (typeof N == "function") {
                    f.callback = null,
                    d = f.priorityLevel;
                    var U = N(f.expirationTime <= O);
                    O = t.unstable_now(),
                    typeof U == "function" ? f.callback = U : f === n(a) && i(a),
                    y(O)
                } else
                    i(a);
                f = n(a)
            }
            if (f !== null)
                var ye = !0;
            else {
                var ee = n(u);
                ee !== null && K(w, ee.startTime - O),
                ye = !1
            }
            return ye
        } finally {
            f = null,
            d = R,
            h = !1
        }
    }
    var S = !1
      , C = null
      , b = -1
      , P = 5
      , E = -1;
    function T() {
        return !(t.unstable_now() - E < P)
    }
    function D() {
        if (C !== null) {
            var M = t.unstable_now();
            E = M;
            var O = !0;
            try {
                O = C(!0, M)
            } finally {
                O ? V() : (S = !1,
                C = null)
            }
        } else
            S = !1
    }
    var V;
    if (typeof p == "function")
        V = function() {
            p(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var se = new MessageChannel
          , I = se.port2;
        se.port1.onmessage = D,
        V = function() {
            I.postMessage(null)
        }
    } else
        V = function() {
            x(D, 0)
        }
        ;
    function H(M) {
        C = M,
        S || (S = !0,
        V())
    }
    function K(M, O) {
        b = x(function() {
            M(t.unstable_now())
        }, O)
    }
    t.unstable_IdlePriority = 5,
    t.unstable_ImmediatePriority = 1,
    t.unstable_LowPriority = 4,
    t.unstable_NormalPriority = 3,
    t.unstable_Profiling = null,
    t.unstable_UserBlockingPriority = 2,
    t.unstable_cancelCallback = function(M) {
        M.callback = null
    }
    ,
    t.unstable_continueExecution = function() {
        m || h || (m = !0,
        H(k))
    }
    ,
    t.unstable_forceFrameRate = function(M) {
        0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < M ? Math.floor(1e3 / M) : 5
    }
    ,
    t.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    t.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    t.unstable_next = function(M) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var O = 3;
            break;
        default:
            O = d
        }
        var R = d;
        d = O;
        try {
            return M()
        } finally {
            d = R
        }
    }
    ,
    t.unstable_pauseExecution = function() {}
    ,
    t.unstable_requestPaint = function() {}
    ,
    t.unstable_runWithPriority = function(M, O) {
        switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            M = 3
        }
        var R = d;
        d = M;
        try {
            return O()
        } finally {
            d = R
        }
    }
    ,
    t.unstable_scheduleCallback = function(M, O, R) {
        var N = t.unstable_now();
        switch (typeof R == "object" && R !== null ? (R = R.delay,
        R = typeof R == "number" && 0 < R ? N + R : N) : R = N,
        M) {
        case 1:
            var U = -1;
            break;
        case 2:
            U = 250;
            break;
        case 5:
            U = 1073741823;
            break;
        case 4:
            U = 1e4;
            break;
        default:
            U = 5e3
        }
        return U = R + U,
        M = {
            id: c++,
            callback: O,
            priorityLevel: M,
            startTime: R,
            expirationTime: U,
            sortIndex: -1
        },
        R > N ? (M.sortIndex = R,
        e(u, M),
        n(a) === null && M === n(u) && (v ? (g(b),
        b = -1) : v = !0,
        K(w, R - N))) : (M.sortIndex = U,
        e(a, M),
        m || h || (m = !0,
        H(k))),
        M
    }
    ,
    t.unstable_shouldYield = T,
    t.unstable_wrapCallback = function(M) {
        var O = d;
        return function() {
            var R = d;
            d = O;
            try {
                return M.apply(this, arguments)
            } finally {
                d = R
            }
        }
    }
}
)(id);
nd.exports = id;
var pg = nd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gg = q
  , Ke = pg;
function A(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var rd = new Set
  , qi = {};
function Ln(t, e) {
    ii(t, e),
    ii(t + "Capture", e)
}
function ii(t, e) {
    for (qi[t] = e,
    t = 0; t < e.length; t++)
        rd.add(e[t])
}
var Ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , al = Object.prototype.hasOwnProperty
  , mg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , _u = {}
  , Su = {};
function yg(t) {
    return al.call(Su, t) ? !0 : al.call(_u, t) ? !1 : mg.test(t) ? Su[t] = !0 : (_u[t] = !0,
    !1)
}
function vg(t, e, n, i) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof e) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return i ? !1 : n !== null ? !n.acceptsBooleans : (t = t.toLowerCase().slice(0, 5),
        t !== "data-" && t !== "aria-");
    default:
        return !1
    }
}
function xg(t, e, n, i) {
    if (e === null || typeof e > "u" || vg(t, e, n, i))
        return !0;
    if (i)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
        }
    return !1
}
function Re(t, e, n, i, r, s, o) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4,
    this.attributeName = i,
    this.attributeNamespace = r,
    this.mustUseProperty = n,
    this.propertyName = t,
    this.type = e,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    Ce[t] = new Re(t,0,!1,t,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var e = t[0];
    Ce[e] = new Re(e,1,!1,t[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    Ce[t] = new Re(t,2,!1,t.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    Ce[t] = new Re(t,2,!1,t,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    Ce[t] = new Re(t,3,!1,t.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(t) {
    Ce[t] = new Re(t,3,!0,t,null,!1,!1)
});
["capture", "download"].forEach(function(t) {
    Ce[t] = new Re(t,4,!1,t,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(t) {
    Ce[t] = new Re(t,6,!1,t,null,!1,!1)
});
["rowSpan", "start"].forEach(function(t) {
    Ce[t] = new Re(t,5,!1,t.toLowerCase(),null,!1,!1)
});
var da = /[\-:]([a-z])/g;
function ha(t) {
    return t[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var e = t.replace(da, ha);
    Ce[e] = new Re(e,1,!1,t,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var e = t.replace(da, ha);
    Ce[e] = new Re(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var e = t.replace(da, ha);
    Ce[e] = new Re(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(t) {
    Ce[t] = new Re(t,1,!1,t.toLowerCase(),null,!1,!1)
});
Ce.xlinkHref = new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(t) {
    Ce[t] = new Re(t,1,!1,t.toLowerCase(),null,!0,!0)
});
function pa(t, e, n, i) {
    var r = Ce.hasOwnProperty(e) ? Ce[e] : null;
    (r !== null ? r.type !== 0 : i || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (xg(e, n, r, i) && (n = null),
    i || r === null ? yg(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : r.mustUseProperty ? t[r.propertyName] = n === null ? r.type === 3 ? !1 : "" : n : (e = r.attributeName,
    i = r.attributeNamespace,
    n === null ? t.removeAttribute(e) : (r = r.type,
    n = r === 3 || r === 4 && n === !0 ? "" : "" + n,
    i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))))
}
var zt = gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Pr = Symbol.for("react.element")
  , Nn = Symbol.for("react.portal")
  , jn = Symbol.for("react.fragment")
  , ga = Symbol.for("react.strict_mode")
  , ul = Symbol.for("react.profiler")
  , sd = Symbol.for("react.provider")
  , od = Symbol.for("react.context")
  , ma = Symbol.for("react.forward_ref")
  , cl = Symbol.for("react.suspense")
  , fl = Symbol.for("react.suspense_list")
  , ya = Symbol.for("react.memo")
  , Ft = Symbol.for("react.lazy")
  , ld = Symbol.for("react.offscreen")
  , Cu = Symbol.iterator;
function mi(t) {
    return t === null || typeof t != "object" ? null : (t = Cu && t[Cu] || t["@@iterator"],
    typeof t == "function" ? t : null)
}
var re = Object.assign, Po;
function Pi(t) {
    if (Po === void 0)
        try {
            throw Error()
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            Po = e && e[1] || ""
        }
    return `
` + Po + t
}
var Lo = !1;
function Oo(t, e) {
    if (!t || Lo)
        return "";
    Lo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                throw Error()
            }
            ,
            Object.defineProperty(e.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (u) {
                    var i = u
                }
                Reflect.construct(t, [], e)
            } else {
                try {
                    e.call()
                } catch (u) {
                    i = u
                }
                t.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                i = u
            }
            t()
        }
    } catch (u) {
        if (u && i && typeof u.stack == "string") {
            for (var r = u.stack.split(`
`), s = i.stack.split(`
`), o = r.length - 1, l = s.length - 1; 1 <= o && 0 <= l && r[o] !== s[l]; )
                l--;
            for (; 1 <= o && 0 <= l; o--,
            l--)
                if (r[o] !== s[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--,
                            l--,
                            0 > l || r[o] !== s[l]) {
                                var a = `
` + r[o].replace(" at new ", " at ");
                                return t.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", t.displayName)),
                                a
                            }
                        while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        Lo = !1,
        Error.prepareStackTrace = n
    }
    return (t = t ? t.displayName || t.name : "") ? Pi(t) : ""
}
function wg(t) {
    switch (t.tag) {
    case 5:
        return Pi(t.type);
    case 16:
        return Pi("Lazy");
    case 13:
        return Pi("Suspense");
    case 19:
        return Pi("SuspenseList");
    case 0:
    case 2:
    case 15:
        return t = Oo(t.type, !1),
        t;
    case 11:
        return t = Oo(t.type.render, !1),
        t;
    case 1:
        return t = Oo(t.type, !0),
        t;
    default:
        return ""
    }
}
function dl(t) {
    if (t == null)
        return null;
    if (typeof t == "function")
        return t.displayName || t.name || null;
    if (typeof t == "string")
        return t;
    switch (t) {
    case jn:
        return "Fragment";
    case Nn:
        return "Portal";
    case ul:
        return "Profiler";
    case ga:
        return "StrictMode";
    case cl:
        return "Suspense";
    case fl:
        return "SuspenseList"
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
        case od:
            return (t.displayName || "Context") + ".Consumer";
        case sd:
            return (t._context.displayName || "Context") + ".Provider";
        case ma:
            var e = t.render;
            return t = t.displayName,
            t || (t = e.displayName || e.name || "",
            t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
            t;
        case ya:
            return e = t.displayName || null,
            e !== null ? e : dl(t.type) || "Memo";
        case Ft:
            e = t._payload,
            t = t._init;
            try {
                return dl(t(e))
            } catch {}
        }
    return null
}
function kg(t) {
    var e = t.type;
    switch (t.tag) {
    case 24:
        return "Cache";
    case 9:
        return (e.displayName || "Context") + ".Consumer";
    case 10:
        return (e._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return t = e.render,
        t = t.displayName || t.name || "",
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return e;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return dl(e);
    case 8:
        return e === ga ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e
    }
    return null
}
function rn(t) {
    switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return t;
    case "object":
        return t;
    default:
        return ""
    }
}
function ad(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function _g(t) {
    var e = ad(t) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e)
      , i = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var r = n.get
          , s = n.set;
        return Object.defineProperty(t, e, {
            configurable: !0,
            get: function() {
                return r.call(this)
            },
            set: function(o) {
                i = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(t, e, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return i
            },
            setValue: function(o) {
                i = "" + o
            },
            stopTracking: function() {
                t._valueTracker = null,
                delete t[e]
            }
        }
    }
}
function Lr(t) {
    t._valueTracker || (t._valueTracker = _g(t))
}
function ud(t) {
    if (!t)
        return !1;
    var e = t._valueTracker;
    if (!e)
        return !0;
    var n = e.getValue()
      , i = "";
    return t && (i = ad(t) ? t.checked ? "true" : "false" : t.value),
    t = i,
    t !== n ? (e.setValue(t),
    !0) : !1
}
function ws(t) {
    if (t = t || (typeof document < "u" ? document : void 0),
    typeof t > "u")
        return null;
    try {
        return t.activeElement || t.body
    } catch {
        return t.body
    }
}
function hl(t, e) {
    var n = e.checked;
    return re({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked
    })
}
function bu(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue
      , i = e.checked != null ? e.checked : e.defaultChecked;
    n = rn(e.value != null ? e.value : n),
    t._wrapperState = {
        initialChecked: i,
        initialValue: n,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}
function cd(t, e) {
    e = e.checked,
    e != null && pa(t, "checked", e, !1)
}
function pl(t, e) {
    cd(t, e);
    var n = rn(e.value)
      , i = e.type;
    if (n != null)
        i === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n);
    else if (i === "submit" || i === "reset") {
        t.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? gl(t, e.type, n) : e.hasOwnProperty("defaultValue") && gl(t, e.type, rn(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked)
}
function Au(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var i = e.type;
        if (!(i !== "submit" && i !== "reset" || e.value !== void 0 && e.value !== null))
            return;
        e = "" + t._wrapperState.initialValue,
        n || e === t.value || (t.value = e),
        t.defaultValue = e
    }
    n = t.name,
    n !== "" && (t.name = ""),
    t.defaultChecked = !!t._wrapperState.initialChecked,
    n !== "" && (t.name = n)
}
function gl(t, e, n) {
    (e !== "number" || ws(t.ownerDocument) !== t) && (n == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
}
var Li = Array.isArray;
function Gn(t, e, n, i) {
    if (t = t.options,
    e) {
        e = {};
        for (var r = 0; r < n.length; r++)
            e["$" + n[r]] = !0;
        for (n = 0; n < t.length; n++)
            r = e.hasOwnProperty("$" + t[n].value),
            t[n].selected !== r && (t[n].selected = r),
            r && i && (t[n].defaultSelected = !0)
    } else {
        for (n = "" + rn(n),
        e = null,
        r = 0; r < t.length; r++) {
            if (t[r].value === n) {
                t[r].selected = !0,
                i && (t[r].defaultSelected = !0);
                return
            }
            e !== null || t[r].disabled || (e = t[r])
        }
        e !== null && (e.selected = !0)
    }
}
function ml(t, e) {
    if (e.dangerouslySetInnerHTML != null)
        throw Error(A(91));
    return re({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + t._wrapperState.initialValue
    })
}
function Mu(t, e) {
    var n = e.value;
    if (n == null) {
        if (n = e.children,
        e = e.defaultValue,
        n != null) {
            if (e != null)
                throw Error(A(92));
            if (Li(n)) {
                if (1 < n.length)
                    throw Error(A(93));
                n = n[0]
            }
            e = n
        }
        e == null && (e = ""),
        n = e
    }
    t._wrapperState = {
        initialValue: rn(n)
    }
}
function fd(t, e) {
    var n = rn(e.value)
      , i = rn(e.defaultValue);
    n != null && (n = "" + n,
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    i != null && (t.defaultValue = "" + i)
}
function Eu(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e)
}
function dd(t) {
    switch (t) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function yl(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? dd(e) : t === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t
}
var Or, hd = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, n, i, r) {
        MSApp.execUnsafeLocalFunction(function() {
            return t(e, n, i, r)
        })
    }
    : t
}(function(t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in t)
        t.innerHTML = e;
    else {
        for (Or = Or || document.createElement("div"),
        Or.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
        e = Or.firstChild; t.firstChild; )
            t.removeChild(t.firstChild);
        for (; e.firstChild; )
            t.appendChild(e.firstChild)
    }
});
function $i(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return
        }
    }
    t.textContent = e
}
var Fi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Sg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fi).forEach(function(t) {
    Sg.forEach(function(e) {
        e = e + t.charAt(0).toUpperCase() + t.substring(1),
        Fi[e] = Fi[t]
    })
});
function pd(t, e, n) {
    return e == null || typeof e == "boolean" || e === "" ? "" : n || typeof e != "number" || e === 0 || Fi.hasOwnProperty(t) && Fi[t] ? ("" + e).trim() : e + "px"
}
function gd(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var i = n.indexOf("--") === 0
              , r = pd(n, e[n], i);
            n === "float" && (n = "cssFloat"),
            i ? t.setProperty(n, r) : t[n] = r
        }
}
var Cg = re({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function vl(t, e) {
    if (e) {
        if (Cg[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(A(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null)
                throw Error(A(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html"in e.dangerouslySetInnerHTML))
                throw Error(A(61))
        }
        if (e.style != null && typeof e.style != "object")
            throw Error(A(62))
    }
}
function xl(t, e) {
    if (t.indexOf("-") === -1)
        return typeof e.is == "string";
    switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var wl = null;
function va(t) {
    return t = t.target || t.srcElement || window,
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
}
var kl = null
  , Zn = null
  , Jn = null;
function Pu(t) {
    if (t = Sr(t)) {
        if (typeof kl != "function")
            throw Error(A(280));
        var e = t.stateNode;
        e && (e = fo(e),
        kl(t.stateNode, t.type, e))
    }
}
function md(t) {
    Zn ? Jn ? Jn.push(t) : Jn = [t] : Zn = t
}
function yd() {
    if (Zn) {
        var t = Zn
          , e = Jn;
        if (Jn = Zn = null,
        Pu(t),
        e)
            for (t = 0; t < e.length; t++)
                Pu(e[t])
    }
}
function vd(t, e) {
    return t(e)
}
function xd() {}
var To = !1;
function wd(t, e, n) {
    if (To)
        return t(e, n);
    To = !0;
    try {
        return vd(t, e, n)
    } finally {
        To = !1,
        (Zn !== null || Jn !== null) && (xd(),
        yd())
    }
}
function er(t, e) {
    var n = t.stateNode;
    if (n === null)
        return null;
    var i = fo(n);
    if (i === null)
        return null;
    n = i[e];
    e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (i = !i.disabled) || (t = t.type,
        i = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
        t = !i;
        break e;
    default:
        t = !1
    }
    if (t)
        return null;
    if (n && typeof n != "function")
        throw Error(A(231, e, typeof n));
    return n
}
var _l = !1;
if (Ot)
    try {
        var yi = {};
        Object.defineProperty(yi, "passive", {
            get: function() {
                _l = !0
            }
        }),
        window.addEventListener("test", yi, yi),
        window.removeEventListener("test", yi, yi)
    } catch {
        _l = !1
    }
function bg(t, e, n, i, r, s, o, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Bi = !1
  , ks = null
  , _s = !1
  , Sl = null
  , Ag = {
    onError: function(t) {
        Bi = !0,
        ks = t
    }
};
function Mg(t, e, n, i, r, s, o, l, a) {
    Bi = !1,
    ks = null,
    bg.apply(Ag, arguments)
}
function Eg(t, e, n, i, r, s, o, l, a) {
    if (Mg.apply(this, arguments),
    Bi) {
        if (Bi) {
            var u = ks;
            Bi = !1,
            ks = null
        } else
            throw Error(A(198));
        _s || (_s = !0,
        Sl = u)
    }
}
function On(t) {
    var e = t
      , n = t;
    if (t.alternate)
        for (; e.return; )
            e = e.return;
    else {
        t = e;
        do
            e = t,
            e.flags & 4098 && (n = e.return),
            t = e.return;
        while (t)
    }
    return e.tag === 3 ? n : null
}
function kd(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate,
        t !== null && (e = t.memoizedState)),
        e !== null)
            return e.dehydrated
    }
    return null
}
function Lu(t) {
    if (On(t) !== t)
        throw Error(A(188))
}
function Pg(t) {
    var e = t.alternate;
    if (!e) {
        if (e = On(t),
        e === null)
            throw Error(A(188));
        return e !== t ? null : t
    }
    for (var n = t, i = e; ; ) {
        var r = n.return;
        if (r === null)
            break;
        var s = r.alternate;
        if (s === null) {
            if (i = r.return,
            i !== null) {
                n = i;
                continue
            }
            break
        }
        if (r.child === s.child) {
            for (s = r.child; s; ) {
                if (s === n)
                    return Lu(r),
                    t;
                if (s === i)
                    return Lu(r),
                    e;
                s = s.sibling
            }
            throw Error(A(188))
        }
        if (n.return !== i.return)
            n = r,
            i = s;
        else {
            for (var o = !1, l = r.child; l; ) {
                if (l === n) {
                    o = !0,
                    n = r,
                    i = s;
                    break
                }
                if (l === i) {
                    o = !0,
                    i = r,
                    n = s;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = s.child; l; ) {
                    if (l === n) {
                        o = !0,
                        n = s,
                        i = r;
                        break
                    }
                    if (l === i) {
                        o = !0,
                        i = s,
                        n = r;
                        break
                    }
                    l = l.sibling
                }
                if (!o)
                    throw Error(A(189))
            }
        }
        if (n.alternate !== i)
            throw Error(A(190))
    }
    if (n.tag !== 3)
        throw Error(A(188));
    return n.stateNode.current === n ? t : e
}
function _d(t) {
    return t = Pg(t),
    t !== null ? Sd(t) : null
}
function Sd(t) {
    if (t.tag === 5 || t.tag === 6)
        return t;
    for (t = t.child; t !== null; ) {
        var e = Sd(t);
        if (e !== null)
            return e;
        t = t.sibling
    }
    return null
}
var Cd = Ke.unstable_scheduleCallback
  , Ou = Ke.unstable_cancelCallback
  , Lg = Ke.unstable_shouldYield
  , Og = Ke.unstable_requestPaint
  , ce = Ke.unstable_now
  , Tg = Ke.unstable_getCurrentPriorityLevel
  , xa = Ke.unstable_ImmediatePriority
  , bd = Ke.unstable_UserBlockingPriority
  , Ss = Ke.unstable_NormalPriority
  , Dg = Ke.unstable_LowPriority
  , Ad = Ke.unstable_IdlePriority
  , lo = null
  , vt = null;
function Rg(t) {
    if (vt && typeof vt.onCommitFiberRoot == "function")
        try {
            vt.onCommitFiberRoot(lo, t, void 0, (t.current.flags & 128) === 128)
        } catch {}
}
var at = Math.clz32 ? Math.clz32 : jg
  , zg = Math.log
  , Ng = Math.LN2;
function jg(t) {
    return t >>>= 0,
    t === 0 ? 32 : 31 - (zg(t) / Ng | 0) | 0
}
var Tr = 64
  , Dr = 4194304;
function Oi(t) {
    switch (t & -t) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return t & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return t
    }
}
function Cs(t, e) {
    var n = t.pendingLanes;
    if (n === 0)
        return 0;
    var i = 0
      , r = t.suspendedLanes
      , s = t.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var l = o & ~r;
        l !== 0 ? i = Oi(l) : (s &= o,
        s !== 0 && (i = Oi(s)))
    } else
        o = n & ~r,
        o !== 0 ? i = Oi(o) : s !== 0 && (i = Oi(s));
    if (i === 0)
        return 0;
    if (e !== 0 && e !== i && !(e & r) && (r = i & -i,
    s = e & -e,
    r >= s || r === 16 && (s & 4194240) !== 0))
        return e;
    if (i & 4 && (i |= n & 16),
    e = t.entangledLanes,
    e !== 0)
        for (t = t.entanglements,
        e &= i; 0 < e; )
            n = 31 - at(e),
            r = 1 << n,
            i |= t[n],
            e &= ~r;
    return i
}
function Ig(t, e) {
    switch (t) {
    case 1:
    case 2:
    case 4:
        return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Fg(t, e) {
    for (var n = t.suspendedLanes, i = t.pingedLanes, r = t.expirationTimes, s = t.pendingLanes; 0 < s; ) {
        var o = 31 - at(s)
          , l = 1 << o
          , a = r[o];
        a === -1 ? (!(l & n) || l & i) && (r[o] = Ig(l, e)) : a <= e && (t.expiredLanes |= l),
        s &= ~l
    }
}
function Cl(t) {
    return t = t.pendingLanes & -1073741825,
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
}
function Md() {
    var t = Tr;
    return Tr <<= 1,
    !(Tr & 4194240) && (Tr = 64),
    t
}
function Do(t) {
    for (var e = [], n = 0; 31 > n; n++)
        e.push(t);
    return e
}
function kr(t, e, n) {
    t.pendingLanes |= e,
    e !== 536870912 && (t.suspendedLanes = 0,
    t.pingedLanes = 0),
    t = t.eventTimes,
    e = 31 - at(e),
    t[e] = n
}
function Bg(t, e) {
    var n = t.pendingLanes & ~e;
    t.pendingLanes = e,
    t.suspendedLanes = 0,
    t.pingedLanes = 0,
    t.expiredLanes &= e,
    t.mutableReadLanes &= e,
    t.entangledLanes &= e,
    e = t.entanglements;
    var i = t.eventTimes;
    for (t = t.expirationTimes; 0 < n; ) {
        var r = 31 - at(n)
          , s = 1 << r;
        e[r] = 0,
        i[r] = -1,
        t[r] = -1,
        n &= ~s
    }
}
function wa(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
        var i = 31 - at(n)
          , r = 1 << i;
        r & e | t[i] & e && (t[i] |= e),
        n &= ~r
    }
}
var X = 0;
function Ed(t) {
    return t &= -t,
    1 < t ? 4 < t ? t & 268435455 ? 16 : 536870912 : 4 : 1
}
var Pd, ka, Ld, Od, Td, bl = !1, Rr = [], Qt = null, Gt = null, Zt = null, tr = new Map, nr = new Map, Ht = [], Hg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Tu(t, e) {
    switch (t) {
    case "focusin":
    case "focusout":
        Qt = null;
        break;
    case "dragenter":
    case "dragleave":
        Gt = null;
        break;
    case "mouseover":
    case "mouseout":
        Zt = null;
        break;
    case "pointerover":
    case "pointerout":
        tr.delete(e.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        nr.delete(e.pointerId)
    }
}
function vi(t, e, n, i, r, s) {
    return t === null || t.nativeEvent !== s ? (t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [r]
    },
    e !== null && (e = Sr(e),
    e !== null && ka(e)),
    t) : (t.eventSystemFlags |= i,
    e = t.targetContainers,
    r !== null && e.indexOf(r) === -1 && e.push(r),
    t)
}
function Wg(t, e, n, i, r) {
    switch (e) {
    case "focusin":
        return Qt = vi(Qt, t, e, n, i, r),
        !0;
    case "dragenter":
        return Gt = vi(Gt, t, e, n, i, r),
        !0;
    case "mouseover":
        return Zt = vi(Zt, t, e, n, i, r),
        !0;
    case "pointerover":
        var s = r.pointerId;
        return tr.set(s, vi(tr.get(s) || null, t, e, n, i, r)),
        !0;
    case "gotpointercapture":
        return s = r.pointerId,
        nr.set(s, vi(nr.get(s) || null, t, e, n, i, r)),
        !0
    }
    return !1
}
function Dd(t) {
    var e = yn(t.target);
    if (e !== null) {
        var n = On(e);
        if (n !== null) {
            if (e = n.tag,
            e === 13) {
                if (e = kd(n),
                e !== null) {
                    t.blockedOn = e,
                    Td(t.priority, function() {
                        Ld(n)
                    });
                    return
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    t.blockedOn = null
}
function ls(t) {
    if (t.blockedOn !== null)
        return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = Al(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var i = new n.constructor(n.type,n);
            wl = i,
            n.target.dispatchEvent(i),
            wl = null
        } else
            return e = Sr(n),
            e !== null && ka(e),
            t.blockedOn = n,
            !1;
        e.shift()
    }
    return !0
}
function Du(t, e, n) {
    ls(t) && n.delete(e)
}
function Vg() {
    bl = !1,
    Qt !== null && ls(Qt) && (Qt = null),
    Gt !== null && ls(Gt) && (Gt = null),
    Zt !== null && ls(Zt) && (Zt = null),
    tr.forEach(Du),
    nr.forEach(Du)
}
function xi(t, e) {
    t.blockedOn === e && (t.blockedOn = null,
    bl || (bl = !0,
    Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, Vg)))
}
function ir(t) {
    function e(r) {
        return xi(r, t)
    }
    if (0 < Rr.length) {
        xi(Rr[0], t);
        for (var n = 1; n < Rr.length; n++) {
            var i = Rr[n];
            i.blockedOn === t && (i.blockedOn = null)
        }
    }
    for (Qt !== null && xi(Qt, t),
    Gt !== null && xi(Gt, t),
    Zt !== null && xi(Zt, t),
    tr.forEach(e),
    nr.forEach(e),
    n = 0; n < Ht.length; n++)
        i = Ht[n],
        i.blockedOn === t && (i.blockedOn = null);
    for (; 0 < Ht.length && (n = Ht[0],
    n.blockedOn === null); )
        Dd(n),
        n.blockedOn === null && Ht.shift()
}
var qn = zt.ReactCurrentBatchConfig
  , bs = !0;
function Ug(t, e, n, i) {
    var r = X
      , s = qn.transition;
    qn.transition = null;
    try {
        X = 1,
        _a(t, e, n, i)
    } finally {
        X = r,
        qn.transition = s
    }
}
function Yg(t, e, n, i) {
    var r = X
      , s = qn.transition;
    qn.transition = null;
    try {
        X = 4,
        _a(t, e, n, i)
    } finally {
        X = r,
        qn.transition = s
    }
}
function _a(t, e, n, i) {
    if (bs) {
        var r = Al(t, e, n, i);
        if (r === null)
            Vo(t, e, i, As, n),
            Tu(t, i);
        else if (Wg(r, t, e, n, i))
            i.stopPropagation();
        else if (Tu(t, i),
        e & 4 && -1 < Hg.indexOf(t)) {
            for (; r !== null; ) {
                var s = Sr(r);
                if (s !== null && Pd(s),
                s = Al(t, e, n, i),
                s === null && Vo(t, e, i, As, n),
                s === r)
                    break;
                r = s
            }
            r !== null && i.stopPropagation()
        } else
            Vo(t, e, i, null, n)
    }
}
var As = null;
function Al(t, e, n, i) {
    if (As = null,
    t = va(i),
    t = yn(t),
    t !== null)
        if (e = On(t),
        e === null)
            t = null;
        else if (n = e.tag,
        n === 13) {
            if (t = kd(e),
            t !== null)
                return t;
            t = null
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null
        } else
            e !== t && (t = null);
    return As = t,
    null
}
function Rd(t) {
    switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Tg()) {
        case xa:
            return 1;
        case bd:
            return 4;
        case Ss:
        case Dg:
            return 16;
        case Ad:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Vt = null
  , Sa = null
  , as = null;
function zd() {
    if (as)
        return as;
    var t, e = Sa, n = e.length, i, r = "value"in Vt ? Vt.value : Vt.textContent, s = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++)
        ;
    var o = n - t;
    for (i = 1; i <= o && e[n - i] === r[s - i]; i++)
        ;
    return as = r.slice(t, 1 < i ? 1 - i : void 0)
}
function us(t) {
    var e = t.keyCode;
    return "charCode"in t ? (t = t.charCode,
    t === 0 && e === 13 && (t = 13)) : t = e,
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
}
function zr() {
    return !0
}
function Ru() {
    return !1
}
function Ge(t) {
    function e(n, i, r, s, o) {
        this._reactName = n,
        this._targetInst = r,
        this.type = i,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var l in t)
            t.hasOwnProperty(l) && (n = t[l],
            this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? zr : Ru,
        this.isPropagationStopped = Ru,
        this
    }
    return re(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = zr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = zr)
        },
        persist: function() {},
        isPersistent: zr
    }),
    e
}
var hi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
        return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ca = Ge(hi), _r = re({}, hi, {
    view: 0,
    detail: 0
}), Xg = Ge(_r), Ro, zo, wi, ao = re({}, _r, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ba,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function(t) {
        return "movementX"in t ? t.movementX : (t !== wi && (wi && t.type === "mousemove" ? (Ro = t.screenX - wi.screenX,
        zo = t.screenY - wi.screenY) : zo = Ro = 0,
        wi = t),
        Ro)
    },
    movementY: function(t) {
        return "movementY"in t ? t.movementY : zo
    }
}), zu = Ge(ao), Kg = re({}, ao, {
    dataTransfer: 0
}), Qg = Ge(Kg), Gg = re({}, _r, {
    relatedTarget: 0
}), No = Ge(Gg), Zg = re({}, hi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Jg = Ge(Zg), qg = re({}, hi, {
    clipboardData: function(t) {
        return "clipboardData"in t ? t.clipboardData : window.clipboardData
    }
}), $g = Ge(qg), em = re({}, hi, {
    data: 0
}), Nu = Ge(em), tm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, nm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, im = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function rm(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = im[t]) ? !!e[t] : !1
}
function ba() {
    return rm
}
var sm = re({}, _r, {
    key: function(t) {
        if (t.key) {
            var e = tm[t.key] || t.key;
            if (e !== "Unidentified")
                return e
        }
        return t.type === "keypress" ? (t = us(t),
        t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? nm[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ba,
    charCode: function(t) {
        return t.type === "keypress" ? us(t) : 0
    },
    keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function(t) {
        return t.type === "keypress" ? us(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
})
  , om = Ge(sm)
  , lm = re({}, ao, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , ju = Ge(lm)
  , am = re({}, _r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ba
})
  , um = Ge(am)
  , cm = re({}, hi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , fm = Ge(cm)
  , dm = re({}, ao, {
    deltaX: function(t) {
        return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
    },
    deltaY: function(t) {
        return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , hm = Ge(dm)
  , pm = [9, 13, 27, 32]
  , Aa = Ot && "CompositionEvent"in window
  , Hi = null;
Ot && "documentMode"in document && (Hi = document.documentMode);
var gm = Ot && "TextEvent"in window && !Hi
  , Nd = Ot && (!Aa || Hi && 8 < Hi && 11 >= Hi)
  , Iu = " "
  , Fu = !1;
function jd(t, e) {
    switch (t) {
    case "keyup":
        return pm.indexOf(e.keyCode) !== -1;
    case "keydown":
        return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Id(t) {
    return t = t.detail,
    typeof t == "object" && "data"in t ? t.data : null
}
var In = !1;
function mm(t, e) {
    switch (t) {
    case "compositionend":
        return Id(e);
    case "keypress":
        return e.which !== 32 ? null : (Fu = !0,
        Iu);
    case "textInput":
        return t = e.data,
        t === Iu && Fu ? null : t;
    default:
        return null
    }
}
function ym(t, e) {
    if (In)
        return t === "compositionend" || !Aa && jd(t, e) ? (t = zd(),
        as = Sa = Vt = null,
        In = !1,
        t) : null;
    switch (t) {
    case "paste":
        return null;
    case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
                return e.char;
            if (e.which)
                return String.fromCharCode(e.which)
        }
        return null;
    case "compositionend":
        return Nd && e.locale !== "ko" ? null : e.data;
    default:
        return null
    }
}
var vm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Bu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!vm[t.type] : e === "textarea"
}
function Fd(t, e, n, i) {
    md(i),
    e = Ms(e, "onChange"),
    0 < e.length && (n = new Ca("onChange","change",null,n,i),
    t.push({
        event: n,
        listeners: e
    }))
}
var Wi = null
  , rr = null;
function xm(t) {
    Zd(t, 0)
}
function uo(t) {
    var e = Hn(t);
    if (ud(e))
        return t
}
function wm(t, e) {
    if (t === "change")
        return e
}
var Bd = !1;
if (Ot) {
    var jo;
    if (Ot) {
        var Io = "oninput"in document;
        if (!Io) {
            var Hu = document.createElement("div");
            Hu.setAttribute("oninput", "return;"),
            Io = typeof Hu.oninput == "function"
        }
        jo = Io
    } else
        jo = !1;
    Bd = jo && (!document.documentMode || 9 < document.documentMode)
}
function Wu() {
    Wi && (Wi.detachEvent("onpropertychange", Hd),
    rr = Wi = null)
}
function Hd(t) {
    if (t.propertyName === "value" && uo(rr)) {
        var e = [];
        Fd(e, rr, t, va(t)),
        wd(xm, e)
    }
}
function km(t, e, n) {
    t === "focusin" ? (Wu(),
    Wi = e,
    rr = n,
    Wi.attachEvent("onpropertychange", Hd)) : t === "focusout" && Wu()
}
function _m(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
        return uo(rr)
}
function Sm(t, e) {
    if (t === "click")
        return uo(e)
}
function Cm(t, e) {
    if (t === "input" || t === "change")
        return uo(e)
}
function bm(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
}
var ct = typeof Object.is == "function" ? Object.is : bm;
function sr(t, e) {
    if (ct(t, e))
        return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
        return !1;
    var n = Object.keys(t)
      , i = Object.keys(e);
    if (n.length !== i.length)
        return !1;
    for (i = 0; i < n.length; i++) {
        var r = n[i];
        if (!al.call(e, r) || !ct(t[r], e[r]))
            return !1
    }
    return !0
}
function Vu(t) {
    for (; t && t.firstChild; )
        t = t.firstChild;
    return t
}
function Uu(t, e) {
    var n = Vu(t);
    t = 0;
    for (var i; n; ) {
        if (n.nodeType === 3) {
            if (i = t + n.textContent.length,
            t <= e && i >= e)
                return {
                    node: n,
                    offset: e - t
                };
            t = i
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Vu(n)
    }
}
function Wd(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Wd(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
}
function Vd() {
    for (var t = window, e = ws(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var n = typeof e.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            t = e.contentWindow;
        else
            break;
        e = ws(t.document)
    }
    return e
}
function Ma(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
}
function Am(t) {
    var e = Vd()
      , n = t.focusedElem
      , i = t.selectionRange;
    if (e !== n && n && n.ownerDocument && Wd(n.ownerDocument.documentElement, n)) {
        if (i !== null && Ma(n)) {
            if (e = i.start,
            t = i.end,
            t === void 0 && (t = e),
            "selectionStart"in n)
                n.selectionStart = e,
                n.selectionEnd = Math.min(t, n.value.length);
            else if (t = (e = n.ownerDocument || document) && e.defaultView || window,
            t.getSelection) {
                t = t.getSelection();
                var r = n.textContent.length
                  , s = Math.min(i.start, r);
                i = i.end === void 0 ? s : Math.min(i.end, r),
                !t.extend && s > i && (r = i,
                i = s,
                s = r),
                r = Uu(n, s);
                var o = Uu(n, i);
                r && o && (t.rangeCount !== 1 || t.anchorNode !== r.node || t.anchorOffset !== r.offset || t.focusNode !== o.node || t.focusOffset !== o.offset) && (e = e.createRange(),
                e.setStart(r.node, r.offset),
                t.removeAllRanges(),
                s > i ? (t.addRange(e),
                t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset),
                t.addRange(e)))
            }
        }
        for (e = [],
        t = n; t = t.parentNode; )
            t.nodeType === 1 && e.push({
                element: t,
                left: t.scrollLeft,
                top: t.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < e.length; n++)
            t = e[n],
            t.element.scrollLeft = t.left,
            t.element.scrollTop = t.top
    }
}
var Mm = Ot && "documentMode"in document && 11 >= document.documentMode
  , Fn = null
  , Ml = null
  , Vi = null
  , El = !1;
function Yu(t, e, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    El || Fn == null || Fn !== ws(i) || (i = Fn,
    "selectionStart"in i && Ma(i) ? i = {
        start: i.selectionStart,
        end: i.selectionEnd
    } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(),
    i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
    }),
    Vi && sr(Vi, i) || (Vi = i,
    i = Ms(Ml, "onSelect"),
    0 < i.length && (e = new Ca("onSelect","select",null,e,n),
    t.push({
        event: e,
        listeners: i
    }),
    e.target = Fn)))
}
function Nr(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(),
    n["Webkit" + t] = "webkit" + e,
    n["Moz" + t] = "moz" + e,
    n
}
var Bn = {
    animationend: Nr("Animation", "AnimationEnd"),
    animationiteration: Nr("Animation", "AnimationIteration"),
    animationstart: Nr("Animation", "AnimationStart"),
    transitionend: Nr("Transition", "TransitionEnd")
}
  , Fo = {}
  , Ud = {};
Ot && (Ud = document.createElement("div").style,
"AnimationEvent"in window || (delete Bn.animationend.animation,
delete Bn.animationiteration.animation,
delete Bn.animationstart.animation),
"TransitionEvent"in window || delete Bn.transitionend.transition);
function co(t) {
    if (Fo[t])
        return Fo[t];
    if (!Bn[t])
        return t;
    var e = Bn[t], n;
    for (n in e)
        if (e.hasOwnProperty(n) && n in Ud)
            return Fo[t] = e[n];
    return t
}
var Yd = co("animationend")
  , Xd = co("animationiteration")
  , Kd = co("animationstart")
  , Qd = co("transitionend")
  , Gd = new Map
  , Xu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ln(t, e) {
    Gd.set(t, e),
    Ln(e, [t])
}
for (var Bo = 0; Bo < Xu.length; Bo++) {
    var Ho = Xu[Bo]
      , Em = Ho.toLowerCase()
      , Pm = Ho[0].toUpperCase() + Ho.slice(1);
    ln(Em, "on" + Pm)
}
ln(Yd, "onAnimationEnd");
ln(Xd, "onAnimationIteration");
ln(Kd, "onAnimationStart");
ln("dblclick", "onDoubleClick");
ln("focusin", "onFocus");
ln("focusout", "onBlur");
ln(Qd, "onTransitionEnd");
ii("onMouseEnter", ["mouseout", "mouseover"]);
ii("onMouseLeave", ["mouseout", "mouseover"]);
ii("onPointerEnter", ["pointerout", "pointerover"]);
ii("onPointerLeave", ["pointerout", "pointerover"]);
Ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ti = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Lm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ti));
function Ku(t, e, n) {
    var i = t.type || "unknown-event";
    t.currentTarget = n,
    Eg(i, e, void 0, t),
    t.currentTarget = null
}
function Zd(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var i = t[n]
          , r = i.event;
        i = i.listeners;
        e: {
            var s = void 0;
            if (e)
                for (var o = i.length - 1; 0 <= o; o--) {
                    var l = i[o]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== s && r.isPropagationStopped())
                        break e;
                    Ku(r, l, u),
                    s = a
                }
            else
                for (o = 0; o < i.length; o++) {
                    if (l = i[o],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== s && r.isPropagationStopped())
                        break e;
                    Ku(r, l, u),
                    s = a
                }
        }
    }
    if (_s)
        throw t = Sl,
        _s = !1,
        Sl = null,
        t
}
function Z(t, e) {
    var n = e[Dl];
    n === void 0 && (n = e[Dl] = new Set);
    var i = t + "__bubble";
    n.has(i) || (Jd(e, t, 2, !1),
    n.add(i))
}
function Wo(t, e, n) {
    var i = 0;
    e && (i |= 4),
    Jd(n, t, i, e)
}
var jr = "_reactListening" + Math.random().toString(36).slice(2);
function or(t) {
    if (!t[jr]) {
        t[jr] = !0,
        rd.forEach(function(n) {
            n !== "selectionchange" && (Lm.has(n) || Wo(n, !1, t),
            Wo(n, !0, t))
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[jr] || (e[jr] = !0,
        Wo("selectionchange", !1, e))
    }
}
function Jd(t, e, n, i) {
    switch (Rd(e)) {
    case 1:
        var r = Ug;
        break;
    case 4:
        r = Yg;
        break;
    default:
        r = _a
    }
    n = r.bind(null, e, n, t),
    r = void 0,
    !_l || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0),
    i ? r !== void 0 ? t.addEventListener(e, n, {
        capture: !0,
        passive: r
    }) : t.addEventListener(e, n, !0) : r !== void 0 ? t.addEventListener(e, n, {
        passive: r
    }) : t.addEventListener(e, n, !1)
}
function Vo(t, e, n, i, r) {
    var s = i;
    if (!(e & 1) && !(e & 2) && i !== null)
        e: for (; ; ) {
            if (i === null)
                return;
            var o = i.tag;
            if (o === 3 || o === 4) {
                var l = i.stateNode.containerInfo;
                if (l === r || l.nodeType === 8 && l.parentNode === r)
                    break;
                if (o === 4)
                    for (o = i.return; o !== null; ) {
                        var a = o.tag;
                        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo,
                        a === r || a.nodeType === 8 && a.parentNode === r))
                            return;
                        o = o.return
                    }
                for (; l !== null; ) {
                    if (o = yn(l),
                    o === null)
                        return;
                    if (a = o.tag,
                    a === 5 || a === 6) {
                        i = s = o;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            i = i.return
        }
    wd(function() {
        var u = s
          , c = va(n)
          , f = [];
        e: {
            var d = Gd.get(t);
            if (d !== void 0) {
                var h = Ca
                  , m = t;
                switch (t) {
                case "keypress":
                    if (us(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = om;
                    break;
                case "focusin":
                    m = "focus",
                    h = No;
                    break;
                case "focusout":
                    m = "blur",
                    h = No;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = No;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = zu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = Qg;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = um;
                    break;
                case Yd:
                case Xd:
                case Kd:
                    h = Jg;
                    break;
                case Qd:
                    h = fm;
                    break;
                case "scroll":
                    h = Xg;
                    break;
                case "wheel":
                    h = hm;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = $g;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = ju
                }
                var v = (e & 4) !== 0
                  , x = !v && t === "scroll"
                  , g = v ? d !== null ? d + "Capture" : null : d;
                v = [];
                for (var p = u, y; p !== null; ) {
                    y = p;
                    var w = y.stateNode;
                    if (y.tag === 5 && w !== null && (y = w,
                    g !== null && (w = er(p, g),
                    w != null && v.push(lr(p, w, y)))),
                    x)
                        break;
                    p = p.return
                }
                0 < v.length && (d = new h(d,m,null,n,c),
                f.push({
                    event: d,
                    listeners: v
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (d = t === "mouseover" || t === "pointerover",
                h = t === "mouseout" || t === "pointerout",
                d && n !== wl && (m = n.relatedTarget || n.fromElement) && (yn(m) || m[Tt]))
                    break e;
                if ((h || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                h ? (m = n.relatedTarget || n.toElement,
                h = u,
                m = m ? yn(m) : null,
                m !== null && (x = On(m),
                m !== x || m.tag !== 5 && m.tag !== 6) && (m = null)) : (h = null,
                m = u),
                h !== m)) {
                    if (v = zu,
                    w = "onMouseLeave",
                    g = "onMouseEnter",
                    p = "mouse",
                    (t === "pointerout" || t === "pointerover") && (v = ju,
                    w = "onPointerLeave",
                    g = "onPointerEnter",
                    p = "pointer"),
                    x = h == null ? d : Hn(h),
                    y = m == null ? d : Hn(m),
                    d = new v(w,p + "leave",h,n,c),
                    d.target = x,
                    d.relatedTarget = y,
                    w = null,
                    yn(c) === u && (v = new v(g,p + "enter",m,n,c),
                    v.target = y,
                    v.relatedTarget = x,
                    w = v),
                    x = w,
                    h && m)
                        t: {
                            for (v = h,
                            g = m,
                            p = 0,
                            y = v; y; y = Dn(y))
                                p++;
                            for (y = 0,
                            w = g; w; w = Dn(w))
                                y++;
                            for (; 0 < p - y; )
                                v = Dn(v),
                                p--;
                            for (; 0 < y - p; )
                                g = Dn(g),
                                y--;
                            for (; p--; ) {
                                if (v === g || g !== null && v === g.alternate)
                                    break t;
                                v = Dn(v),
                                g = Dn(g)
                            }
                            v = null
                        }
                    else
                        v = null;
                    h !== null && Qu(f, d, h, v, !1),
                    m !== null && x !== null && Qu(f, x, m, v, !0)
                }
            }
            e: {
                if (d = u ? Hn(u) : window,
                h = d.nodeName && d.nodeName.toLowerCase(),
                h === "select" || h === "input" && d.type === "file")
                    var k = wm;
                else if (Bu(d))
                    if (Bd)
                        k = Cm;
                    else {
                        k = _m;
                        var S = km
                    }
                else
                    (h = d.nodeName) && h.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (k = Sm);
                if (k && (k = k(t, u))) {
                    Fd(f, k, n, c);
                    break e
                }
                S && S(t, d, u),
                t === "focusout" && (S = d._wrapperState) && S.controlled && d.type === "number" && gl(d, "number", d.value)
            }
            switch (S = u ? Hn(u) : window,
            t) {
            case "focusin":
                (Bu(S) || S.contentEditable === "true") && (Fn = S,
                Ml = u,
                Vi = null);
                break;
            case "focusout":
                Vi = Ml = Fn = null;
                break;
            case "mousedown":
                El = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                El = !1,
                Yu(f, n, c);
                break;
            case "selectionchange":
                if (Mm)
                    break;
            case "keydown":
            case "keyup":
                Yu(f, n, c)
            }
            var C;
            if (Aa)
                e: {
                    switch (t) {
                    case "compositionstart":
                        var b = "onCompositionStart";
                        break e;
                    case "compositionend":
                        b = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        b = "onCompositionUpdate";
                        break e
                    }
                    b = void 0
                }
            else
                In ? jd(t, n) && (b = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
            b && (Nd && n.locale !== "ko" && (In || b !== "onCompositionStart" ? b === "onCompositionEnd" && In && (C = zd()) : (Vt = c,
            Sa = "value"in Vt ? Vt.value : Vt.textContent,
            In = !0)),
            S = Ms(u, b),
            0 < S.length && (b = new Nu(b,t,null,n,c),
            f.push({
                event: b,
                listeners: S
            }),
            C ? b.data = C : (C = Id(n),
            C !== null && (b.data = C)))),
            (C = gm ? mm(t, n) : ym(t, n)) && (u = Ms(u, "onBeforeInput"),
            0 < u.length && (c = new Nu("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = C))
        }
        Zd(f, e)
    })
}
function lr(t, e, n) {
    return {
        instance: t,
        listener: e,
        currentTarget: n
    }
}
function Ms(t, e) {
    for (var n = e + "Capture", i = []; t !== null; ) {
        var r = t
          , s = r.stateNode;
        r.tag === 5 && s !== null && (r = s,
        s = er(t, n),
        s != null && i.unshift(lr(t, s, r)),
        s = er(t, e),
        s != null && i.push(lr(t, s, r))),
        t = t.return
    }
    return i
}
function Dn(t) {
    if (t === null)
        return null;
    do
        t = t.return;
    while (t && t.tag !== 5);
    return t || null
}
function Qu(t, e, n, i, r) {
    for (var s = e._reactName, o = []; n !== null && n !== i; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === i)
            break;
        l.tag === 5 && u !== null && (l = u,
        r ? (a = er(n, s),
        a != null && o.unshift(lr(n, a, l))) : r || (a = er(n, s),
        a != null && o.push(lr(n, a, l)))),
        n = n.return
    }
    o.length !== 0 && t.push({
        event: e,
        listeners: o
    })
}
var Om = /\r\n?/g
  , Tm = /\u0000|\uFFFD/g;
function Gu(t) {
    return (typeof t == "string" ? t : "" + t).replace(Om, `
`).replace(Tm, "")
}
function Ir(t, e, n) {
    if (e = Gu(e),
    Gu(t) !== e && n)
        throw Error(A(425))
}
function Es() {}
var Pl = null
  , Ll = null;
function Ol(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var Tl = typeof setTimeout == "function" ? setTimeout : void 0
  , Dm = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Zu = typeof Promise == "function" ? Promise : void 0
  , Rm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zu < "u" ? function(t) {
    return Zu.resolve(null).then(t).catch(zm)
}
: Tl;
function zm(t) {
    setTimeout(function() {
        throw t
    })
}
function Uo(t, e) {
    var n = e
      , i = 0;
    do {
        var r = n.nextSibling;
        if (t.removeChild(n),
        r && r.nodeType === 8)
            if (n = r.data,
            n === "/$") {
                if (i === 0) {
                    t.removeChild(r),
                    ir(e);
                    return
                }
                i--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || i++;
        n = r
    } while (n);
    ir(e)
}
function Jt(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = t.data,
            e === "$" || e === "$!" || e === "$?")
                break;
            if (e === "/$")
                return null
        }
    }
    return t
}
function Ju(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0)
                    return t;
                e--
            } else
                n === "/$" && e++
        }
        t = t.previousSibling
    }
    return null
}
var pi = Math.random().toString(36).slice(2)
  , mt = "__reactFiber$" + pi
  , ar = "__reactProps$" + pi
  , Tt = "__reactContainer$" + pi
  , Dl = "__reactEvents$" + pi
  , Nm = "__reactListeners$" + pi
  , jm = "__reactHandles$" + pi;
function yn(t) {
    var e = t[mt];
    if (e)
        return e;
    for (var n = t.parentNode; n; ) {
        if (e = n[Tt] || n[mt]) {
            if (n = e.alternate,
            e.child !== null || n !== null && n.child !== null)
                for (t = Ju(t); t !== null; ) {
                    if (n = t[mt])
                        return n;
                    t = Ju(t)
                }
            return e
        }
        t = n,
        n = t.parentNode
    }
    return null
}
function Sr(t) {
    return t = t[mt] || t[Tt],
    !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t
}
function Hn(t) {
    if (t.tag === 5 || t.tag === 6)
        return t.stateNode;
    throw Error(A(33))
}
function fo(t) {
    return t[ar] || null
}
var Rl = []
  , Wn = -1;
function an(t) {
    return {
        current: t
    }
}
function J(t) {
    0 > Wn || (t.current = Rl[Wn],
    Rl[Wn] = null,
    Wn--)
}
function G(t, e) {
    Wn++,
    Rl[Wn] = t.current,
    t.current = e
}
var sn = {}
  , Ee = an(sn)
  , Fe = an(!1)
  , Sn = sn;
function ri(t, e) {
    var n = t.type.contextTypes;
    if (!n)
        return sn;
    var i = t.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
        return i.__reactInternalMemoizedMaskedChildContext;
    var r = {}, s;
    for (s in n)
        r[s] = e[s];
    return i && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = e,
    t.__reactInternalMemoizedMaskedChildContext = r),
    r
}
function Be(t) {
    return t = t.childContextTypes,
    t != null
}
function Ps() {
    J(Fe),
    J(Ee)
}
function qu(t, e, n) {
    if (Ee.current !== sn)
        throw Error(A(168));
    G(Ee, e),
    G(Fe, n)
}
function qd(t, e, n) {
    var i = t.stateNode;
    if (e = e.childContextTypes,
    typeof i.getChildContext != "function")
        return n;
    i = i.getChildContext();
    for (var r in i)
        if (!(r in e))
            throw Error(A(108, kg(t) || "Unknown", r));
    return re({}, n, i)
}
function Ls(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || sn,
    Sn = Ee.current,
    G(Ee, t),
    G(Fe, Fe.current),
    !0
}
function $u(t, e, n) {
    var i = t.stateNode;
    if (!i)
        throw Error(A(169));
    n ? (t = qd(t, e, Sn),
    i.__reactInternalMemoizedMergedChildContext = t,
    J(Fe),
    J(Ee),
    G(Ee, t)) : J(Fe),
    G(Fe, n)
}
var bt = null
  , ho = !1
  , Yo = !1;
function $d(t) {
    bt === null ? bt = [t] : bt.push(t)
}
function Im(t) {
    ho = !0,
    $d(t)
}
function un() {
    if (!Yo && bt !== null) {
        Yo = !0;
        var t = 0
          , e = X;
        try {
            var n = bt;
            for (X = 1; t < n.length; t++) {
                var i = n[t];
                do
                    i = i(!0);
                while (i !== null)
            }
            bt = null,
            ho = !1
        } catch (r) {
            throw bt !== null && (bt = bt.slice(t + 1)),
            Cd(xa, un),
            r
        } finally {
            X = e,
            Yo = !1
        }
    }
    return null
}
var Vn = []
  , Un = 0
  , Os = null
  , Ts = 0
  , Je = []
  , qe = 0
  , Cn = null
  , Mt = 1
  , Et = "";
function pn(t, e) {
    Vn[Un++] = Ts,
    Vn[Un++] = Os,
    Os = t,
    Ts = e
}
function eh(t, e, n) {
    Je[qe++] = Mt,
    Je[qe++] = Et,
    Je[qe++] = Cn,
    Cn = t;
    var i = Mt;
    t = Et;
    var r = 32 - at(i) - 1;
    i &= ~(1 << r),
    n += 1;
    var s = 32 - at(e) + r;
    if (30 < s) {
        var o = r - r % 5;
        s = (i & (1 << o) - 1).toString(32),
        i >>= o,
        r -= o,
        Mt = 1 << 32 - at(e) + r | n << r | i,
        Et = s + t
    } else
        Mt = 1 << s | n << r | i,
        Et = t
}
function Ea(t) {
    t.return !== null && (pn(t, 1),
    eh(t, 1, 0))
}
function Pa(t) {
    for (; t === Os; )
        Os = Vn[--Un],
        Vn[Un] = null,
        Ts = Vn[--Un],
        Vn[Un] = null;
    for (; t === Cn; )
        Cn = Je[--qe],
        Je[qe] = null,
        Et = Je[--qe],
        Je[qe] = null,
        Mt = Je[--qe],
        Je[qe] = null
}
var Xe = null
  , Ye = null
  , $ = !1
  , lt = null;
function th(t, e) {
    var n = $e(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = e,
    n.return = t,
    e = t.deletions,
    e === null ? (t.deletions = [n],
    t.flags |= 16) : e.push(n)
}
function ec(t, e) {
    switch (t.tag) {
    case 5:
        var n = t.type;
        return e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e,
        e !== null ? (t.stateNode = e,
        Xe = t,
        Ye = Jt(e.firstChild),
        !0) : !1;
    case 6:
        return e = t.pendingProps === "" || e.nodeType !== 3 ? null : e,
        e !== null ? (t.stateNode = e,
        Xe = t,
        Ye = null,
        !0) : !1;
    case 13:
        return e = e.nodeType !== 8 ? null : e,
        e !== null ? (n = Cn !== null ? {
            id: Mt,
            overflow: Et
        } : null,
        t.memoizedState = {
            dehydrated: e,
            treeContext: n,
            retryLane: 1073741824
        },
        n = $e(18, null, null, 0),
        n.stateNode = e,
        n.return = t,
        t.child = n,
        Xe = t,
        Ye = null,
        !0) : !1;
    default:
        return !1
    }
}
function zl(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0
}
function Nl(t) {
    if ($) {
        var e = Ye;
        if (e) {
            var n = e;
            if (!ec(t, e)) {
                if (zl(t))
                    throw Error(A(418));
                e = Jt(n.nextSibling);
                var i = Xe;
                e && ec(t, e) ? th(i, n) : (t.flags = t.flags & -4097 | 2,
                $ = !1,
                Xe = t)
            }
        } else {
            if (zl(t))
                throw Error(A(418));
            t.flags = t.flags & -4097 | 2,
            $ = !1,
            Xe = t
        }
    }
}
function tc(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
        t = t.return;
    Xe = t
}
function Fr(t) {
    if (t !== Xe)
        return !1;
    if (!$)
        return tc(t),
        $ = !0,
        !1;
    var e;
    if ((e = t.tag !== 3) && !(e = t.tag !== 5) && (e = t.type,
    e = e !== "head" && e !== "body" && !Ol(t.type, t.memoizedProps)),
    e && (e = Ye)) {
        if (zl(t))
            throw nh(),
            Error(A(418));
        for (; e; )
            th(t, e),
            e = Jt(e.nextSibling)
    }
    if (tc(t),
    t.tag === 13) {
        if (t = t.memoizedState,
        t = t !== null ? t.dehydrated : null,
        !t)
            throw Error(A(317));
        e: {
            for (t = t.nextSibling,
            e = 0; t; ) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            Ye = Jt(t.nextSibling);
                            break e
                        }
                        e--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || e++
                }
                t = t.nextSibling
            }
            Ye = null
        }
    } else
        Ye = Xe ? Jt(t.stateNode.nextSibling) : null;
    return !0
}
function nh() {
    for (var t = Ye; t; )
        t = Jt(t.nextSibling)
}
function si() {
    Ye = Xe = null,
    $ = !1
}
function La(t) {
    lt === null ? lt = [t] : lt.push(t)
}
var Fm = zt.ReactCurrentBatchConfig;
function ki(t, e, n) {
    if (t = n.ref,
    t !== null && typeof t != "function" && typeof t != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(A(309));
                var i = n.stateNode
            }
            if (!i)
                throw Error(A(147, t));
            var r = i
              , s = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === s ? e.ref : (e = function(o) {
                var l = r.refs;
                o === null ? delete l[s] : l[s] = o
            }
            ,
            e._stringRef = s,
            e)
        }
        if (typeof t != "string")
            throw Error(A(284));
        if (!n._owner)
            throw Error(A(290, t))
    }
    return t
}
function Br(t, e) {
    throw t = Object.prototype.toString.call(e),
    Error(A(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))
}
function nc(t) {
    var e = t._init;
    return e(t._payload)
}
function ih(t) {
    function e(g, p) {
        if (t) {
            var y = g.deletions;
            y === null ? (g.deletions = [p],
            g.flags |= 16) : y.push(p)
        }
    }
    function n(g, p) {
        if (!t)
            return null;
        for (; p !== null; )
            e(g, p),
            p = p.sibling;
        return null
    }
    function i(g, p) {
        for (g = new Map; p !== null; )
            p.key !== null ? g.set(p.key, p) : g.set(p.index, p),
            p = p.sibling;
        return g
    }
    function r(g, p) {
        return g = tn(g, p),
        g.index = 0,
        g.sibling = null,
        g
    }
    function s(g, p, y) {
        return g.index = y,
        t ? (y = g.alternate,
        y !== null ? (y = y.index,
        y < p ? (g.flags |= 2,
        p) : y) : (g.flags |= 2,
        p)) : (g.flags |= 1048576,
        p)
    }
    function o(g) {
        return t && g.alternate === null && (g.flags |= 2),
        g
    }
    function l(g, p, y, w) {
        return p === null || p.tag !== 6 ? (p = qo(y, g.mode, w),
        p.return = g,
        p) : (p = r(p, y),
        p.return = g,
        p)
    }
    function a(g, p, y, w) {
        var k = y.type;
        return k === jn ? c(g, p, y.props.children, w, y.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Ft && nc(k) === p.type) ? (w = r(p, y.props),
        w.ref = ki(g, p, y),
        w.return = g,
        w) : (w = ms(y.type, y.key, y.props, null, g.mode, w),
        w.ref = ki(g, p, y),
        w.return = g,
        w)
    }
    function u(g, p, y, w) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== y.containerInfo || p.stateNode.implementation !== y.implementation ? (p = $o(y, g.mode, w),
        p.return = g,
        p) : (p = r(p, y.children || []),
        p.return = g,
        p)
    }
    function c(g, p, y, w, k) {
        return p === null || p.tag !== 7 ? (p = kn(y, g.mode, w, k),
        p.return = g,
        p) : (p = r(p, y),
        p.return = g,
        p)
    }
    function f(g, p, y) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = qo("" + p, g.mode, y),
            p.return = g,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Pr:
                return y = ms(p.type, p.key, p.props, null, g.mode, y),
                y.ref = ki(g, null, p),
                y.return = g,
                y;
            case Nn:
                return p = $o(p, g.mode, y),
                p.return = g,
                p;
            case Ft:
                var w = p._init;
                return f(g, w(p._payload), y)
            }
            if (Li(p) || mi(p))
                return p = kn(p, g.mode, y, null),
                p.return = g,
                p;
            Br(g, p)
        }
        return null
    }
    function d(g, p, y, w) {
        var k = p !== null ? p.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return k !== null ? null : l(g, p, "" + y, w);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Pr:
                return y.key === k ? a(g, p, y, w) : null;
            case Nn:
                return y.key === k ? u(g, p, y, w) : null;
            case Ft:
                return k = y._init,
                d(g, p, k(y._payload), w)
            }
            if (Li(y) || mi(y))
                return k !== null ? null : c(g, p, y, w, null);
            Br(g, y)
        }
        return null
    }
    function h(g, p, y, w, k) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return g = g.get(y) || null,
            l(p, g, "" + w, k);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case Pr:
                return g = g.get(w.key === null ? y : w.key) || null,
                a(p, g, w, k);
            case Nn:
                return g = g.get(w.key === null ? y : w.key) || null,
                u(p, g, w, k);
            case Ft:
                var S = w._init;
                return h(g, p, y, S(w._payload), k)
            }
            if (Li(w) || mi(w))
                return g = g.get(y) || null,
                c(p, g, w, k, null);
            Br(p, w)
        }
        return null
    }
    function m(g, p, y, w) {
        for (var k = null, S = null, C = p, b = p = 0, P = null; C !== null && b < y.length; b++) {
            C.index > b ? (P = C,
            C = null) : P = C.sibling;
            var E = d(g, C, y[b], w);
            if (E === null) {
                C === null && (C = P);
                break
            }
            t && C && E.alternate === null && e(g, C),
            p = s(E, p, b),
            S === null ? k = E : S.sibling = E,
            S = E,
            C = P
        }
        if (b === y.length)
            return n(g, C),
            $ && pn(g, b),
            k;
        if (C === null) {
            for (; b < y.length; b++)
                C = f(g, y[b], w),
                C !== null && (p = s(C, p, b),
                S === null ? k = C : S.sibling = C,
                S = C);
            return $ && pn(g, b),
            k
        }
        for (C = i(g, C); b < y.length; b++)
            P = h(C, g, b, y[b], w),
            P !== null && (t && P.alternate !== null && C.delete(P.key === null ? b : P.key),
            p = s(P, p, b),
            S === null ? k = P : S.sibling = P,
            S = P);
        return t && C.forEach(function(T) {
            return e(g, T)
        }),
        $ && pn(g, b),
        k
    }
    function v(g, p, y, w) {
        var k = mi(y);
        if (typeof k != "function")
            throw Error(A(150));
        if (y = k.call(y),
        y == null)
            throw Error(A(151));
        for (var S = k = null, C = p, b = p = 0, P = null, E = y.next(); C !== null && !E.done; b++,
        E = y.next()) {
            C.index > b ? (P = C,
            C = null) : P = C.sibling;
            var T = d(g, C, E.value, w);
            if (T === null) {
                C === null && (C = P);
                break
            }
            t && C && T.alternate === null && e(g, C),
            p = s(T, p, b),
            S === null ? k = T : S.sibling = T,
            S = T,
            C = P
        }
        if (E.done)
            return n(g, C),
            $ && pn(g, b),
            k;
        if (C === null) {
            for (; !E.done; b++,
            E = y.next())
                E = f(g, E.value, w),
                E !== null && (p = s(E, p, b),
                S === null ? k = E : S.sibling = E,
                S = E);
            return $ && pn(g, b),
            k
        }
        for (C = i(g, C); !E.done; b++,
        E = y.next())
            E = h(C, g, b, E.value, w),
            E !== null && (t && E.alternate !== null && C.delete(E.key === null ? b : E.key),
            p = s(E, p, b),
            S === null ? k = E : S.sibling = E,
            S = E);
        return t && C.forEach(function(D) {
            return e(g, D)
        }),
        $ && pn(g, b),
        k
    }
    function x(g, p, y, w) {
        if (typeof y == "object" && y !== null && y.type === jn && y.key === null && (y = y.props.children),
        typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Pr:
                e: {
                    for (var k = y.key, S = p; S !== null; ) {
                        if (S.key === k) {
                            if (k = y.type,
                            k === jn) {
                                if (S.tag === 7) {
                                    n(g, S.sibling),
                                    p = r(S, y.props.children),
                                    p.return = g,
                                    g = p;
                                    break e
                                }
                            } else if (S.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Ft && nc(k) === S.type) {
                                n(g, S.sibling),
                                p = r(S, y.props),
                                p.ref = ki(g, S, y),
                                p.return = g,
                                g = p;
                                break e
                            }
                            n(g, S);
                            break
                        } else
                            e(g, S);
                        S = S.sibling
                    }
                    y.type === jn ? (p = kn(y.props.children, g.mode, w, y.key),
                    p.return = g,
                    g = p) : (w = ms(y.type, y.key, y.props, null, g.mode, w),
                    w.ref = ki(g, p, y),
                    w.return = g,
                    g = w)
                }
                return o(g);
            case Nn:
                e: {
                    for (S = y.key; p !== null; ) {
                        if (p.key === S)
                            if (p.tag === 4 && p.stateNode.containerInfo === y.containerInfo && p.stateNode.implementation === y.implementation) {
                                n(g, p.sibling),
                                p = r(p, y.children || []),
                                p.return = g,
                                g = p;
                                break e
                            } else {
                                n(g, p);
                                break
                            }
                        else
                            e(g, p);
                        p = p.sibling
                    }
                    p = $o(y, g.mode, w),
                    p.return = g,
                    g = p
                }
                return o(g);
            case Ft:
                return S = y._init,
                x(g, p, S(y._payload), w)
            }
            if (Li(y))
                return m(g, p, y, w);
            if (mi(y))
                return v(g, p, y, w);
            Br(g, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y,
        p !== null && p.tag === 6 ? (n(g, p.sibling),
        p = r(p, y),
        p.return = g,
        g = p) : (n(g, p),
        p = qo(y, g.mode, w),
        p.return = g,
        g = p),
        o(g)) : n(g, p)
    }
    return x
}
var oi = ih(!0)
  , rh = ih(!1)
  , Ds = an(null)
  , Rs = null
  , Yn = null
  , Oa = null;
function Ta() {
    Oa = Yn = Rs = null
}
function Da(t) {
    var e = Ds.current;
    J(Ds),
    t._currentValue = e
}
function jl(t, e, n) {
    for (; t !== null; ) {
        var i = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e,
        i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === n)
            break;
        t = t.return
    }
}
function $n(t, e) {
    Rs = t,
    Oa = Yn = null,
    t = t.dependencies,
    t !== null && t.firstContext !== null && (t.lanes & e && (Ie = !0),
    t.firstContext = null)
}
function nt(t) {
    var e = t._currentValue;
    if (Oa !== t)
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        Yn === null) {
            if (Rs === null)
                throw Error(A(308));
            Yn = t,
            Rs.dependencies = {
                lanes: 0,
                firstContext: t
            }
        } else
            Yn = Yn.next = t;
    return e
}
var vn = null;
function Ra(t) {
    vn === null ? vn = [t] : vn.push(t)
}
function sh(t, e, n, i) {
    var r = e.interleaved;
    return r === null ? (n.next = n,
    Ra(e)) : (n.next = r.next,
    r.next = n),
    e.interleaved = n,
    Dt(t, i)
}
function Dt(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e),
    n = t,
    t = t.return; t !== null; )
        t.childLanes |= e,
        n = t.alternate,
        n !== null && (n.childLanes |= e),
        n = t,
        t = t.return;
    return n.tag === 3 ? n.stateNode : null
}
var Bt = !1;
function za(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function oh(t, e) {
    t = t.updateQueue,
    e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects
    })
}
function Lt(t, e) {
    return {
        eventTime: t,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function qt(t, e, n) {
    var i = t.updateQueue;
    if (i === null)
        return null;
    if (i = i.shared,
    F & 2) {
        var r = i.pending;
        return r === null ? e.next = e : (e.next = r.next,
        r.next = e),
        i.pending = e,
        Dt(t, n)
    }
    return r = i.interleaved,
    r === null ? (e.next = e,
    Ra(i)) : (e.next = r.next,
    r.next = e),
    i.interleaved = e,
    Dt(t, n)
}
function cs(t, e, n) {
    if (e = e.updateQueue,
    e !== null && (e = e.shared,
    (n & 4194240) !== 0)) {
        var i = e.lanes;
        i &= t.pendingLanes,
        n |= i,
        e.lanes = n,
        wa(t, n)
    }
}
function ic(t, e) {
    var n = t.updateQueue
      , i = t.alternate;
    if (i !== null && (i = i.updateQueue,
    n === i)) {
        var r = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? r = s = o : s = s.next = o,
                n = n.next
            } while (n !== null);
            s === null ? r = s = e : s = s.next = e
        } else
            r = s = e;
        n = {
            baseState: i.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: s,
            shared: i.shared,
            effects: i.effects
        },
        t.updateQueue = n;
        return
    }
    t = n.lastBaseUpdate,
    t === null ? n.firstBaseUpdate = e : t.next = e,
    n.lastBaseUpdate = e
}
function zs(t, e, n, i) {
    var r = t.updateQueue;
    Bt = !1;
    var s = r.firstBaseUpdate
      , o = r.lastBaseUpdate
      , l = r.shared.pending;
    if (l !== null) {
        r.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        o === null ? s = u : o.next = u,
        o = a;
        var c = t.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== o && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (s !== null) {
        var f = r.baseState;
        o = 0,
        c = u = a = null,
        l = s;
        do {
            var d = l.lane
              , h = l.eventTime;
            if ((i & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var m = t
                      , v = l;
                    switch (d = e,
                    h = n,
                    v.tag) {
                    case 1:
                        if (m = v.payload,
                        typeof m == "function") {
                            f = m.call(h, f, d);
                            break e
                        }
                        f = m;
                        break e;
                    case 3:
                        m.flags = m.flags & -65537 | 128;
                    case 0:
                        if (m = v.payload,
                        d = typeof m == "function" ? m.call(h, f, d) : m,
                        d == null)
                            break e;
                        f = re({}, f, d);
                        break e;
                    case 2:
                        Bt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (t.flags |= 64,
                d = r.effects,
                d === null ? r.effects = [l] : d.push(l))
            } else
                h = {
                    eventTime: h,
                    lane: d,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = h,
                a = f) : c = c.next = h,
                o |= d;
            if (l = l.next,
            l === null) {
                if (l = r.shared.pending,
                l === null)
                    break;
                d = l,
                l = d.next,
                d.next = null,
                r.lastBaseUpdate = d,
                r.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = f),
        r.baseState = a,
        r.firstBaseUpdate = u,
        r.lastBaseUpdate = c,
        e = r.shared.interleaved,
        e !== null) {
            r = e;
            do
                o |= r.lane,
                r = r.next;
            while (r !== e)
        } else
            s === null && (r.shared.lanes = 0);
        An |= o,
        t.lanes = o,
        t.memoizedState = f
    }
}
function rc(t, e, n) {
    if (t = e.effects,
    e.effects = null,
    t !== null)
        for (e = 0; e < t.length; e++) {
            var i = t[e]
              , r = i.callback;
            if (r !== null) {
                if (i.callback = null,
                i = n,
                typeof r != "function")
                    throw Error(A(191, r));
                r.call(i)
            }
        }
}
var Cr = {}
  , xt = an(Cr)
  , ur = an(Cr)
  , cr = an(Cr);
function xn(t) {
    if (t === Cr)
        throw Error(A(174));
    return t
}
function Na(t, e) {
    switch (G(cr, e),
    G(ur, t),
    G(xt, Cr),
    t = e.nodeType,
    t) {
    case 9:
    case 11:
        e = (e = e.documentElement) ? e.namespaceURI : yl(null, "");
        break;
    default:
        t = t === 8 ? e.parentNode : e,
        e = t.namespaceURI || null,
        t = t.tagName,
        e = yl(e, t)
    }
    J(xt),
    G(xt, e)
}
function li() {
    J(xt),
    J(ur),
    J(cr)
}
function lh(t) {
    xn(cr.current);
    var e = xn(xt.current)
      , n = yl(e, t.type);
    e !== n && (G(ur, t),
    G(xt, n))
}
function ja(t) {
    ur.current === t && (J(xt),
    J(ur))
}
var te = an(0);
function Ns(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128)
                return e
        } else if (e.child !== null) {
            e.child.return = e,
            e = e.child;
            continue
        }
        if (e === t)
            break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
                return null;
            e = e.return
        }
        e.sibling.return = e.return,
        e = e.sibling
    }
    return null
}
var Xo = [];
function Ia() {
    for (var t = 0; t < Xo.length; t++)
        Xo[t]._workInProgressVersionPrimary = null;
    Xo.length = 0
}
var fs = zt.ReactCurrentDispatcher
  , Ko = zt.ReactCurrentBatchConfig
  , bn = 0
  , ie = null
  , ge = null
  , ve = null
  , js = !1
  , Ui = !1
  , fr = 0
  , Bm = 0;
function be() {
    throw Error(A(321))
}
function Fa(t, e) {
    if (e === null)
        return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
        if (!ct(t[n], e[n]))
            return !1;
    return !0
}
function Ba(t, e, n, i, r, s) {
    if (bn = s,
    ie = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    fs.current = t === null || t.memoizedState === null ? Um : Ym,
    t = n(i, r),
    Ui) {
        s = 0;
        do {
            if (Ui = !1,
            fr = 0,
            25 <= s)
                throw Error(A(301));
            s += 1,
            ve = ge = null,
            e.updateQueue = null,
            fs.current = Xm,
            t = n(i, r)
        } while (Ui)
    }
    if (fs.current = Is,
    e = ge !== null && ge.next !== null,
    bn = 0,
    ve = ge = ie = null,
    js = !1,
    e)
        throw Error(A(300));
    return t
}
function Ha() {
    var t = fr !== 0;
    return fr = 0,
    t
}
function ht() {
    var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ve === null ? ie.memoizedState = ve = t : ve = ve.next = t,
    ve
}
function it() {
    if (ge === null) {
        var t = ie.alternate;
        t = t !== null ? t.memoizedState : null
    } else
        t = ge.next;
    var e = ve === null ? ie.memoizedState : ve.next;
    if (e !== null)
        ve = e,
        ge = t;
    else {
        if (t === null)
            throw Error(A(310));
        ge = t,
        t = {
            memoizedState: ge.memoizedState,
            baseState: ge.baseState,
            baseQueue: ge.baseQueue,
            queue: ge.queue,
            next: null
        },
        ve === null ? ie.memoizedState = ve = t : ve = ve.next = t
    }
    return ve
}
function dr(t, e) {
    return typeof e == "function" ? e(t) : e
}
function Qo(t) {
    var e = it()
      , n = e.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = t;
    var i = ge
      , r = i.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (r !== null) {
            var o = r.next;
            r.next = s.next,
            s.next = o
        }
        i.baseQueue = r = s,
        n.pending = null
    }
    if (r !== null) {
        s = r.next,
        i = i.baseState;
        var l = o = null
          , a = null
          , u = s;
        do {
            var c = u.lane;
            if ((bn & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                i = u.hasEagerState ? u.eagerState : t(i, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f,
                o = i) : a = a.next = f,
                ie.lanes |= c,
                An |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        a === null ? o = i : a.next = l,
        ct(i, e.memoizedState) || (Ie = !0),
        e.memoizedState = i,
        e.baseState = o,
        e.baseQueue = a,
        n.lastRenderedState = i
    }
    if (t = n.interleaved,
    t !== null) {
        r = t;
        do
            s = r.lane,
            ie.lanes |= s,
            An |= s,
            r = r.next;
        while (r !== t)
    } else
        r === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch]
}
function Go(t) {
    var e = it()
      , n = e.queue;
    if (n === null)
        throw Error(A(311));
    n.lastRenderedReducer = t;
    var i = n.dispatch
      , r = n.pending
      , s = e.memoizedState;
    if (r !== null) {
        n.pending = null;
        var o = r = r.next;
        do
            s = t(s, o.action),
            o = o.next;
        while (o !== r);
        ct(s, e.memoizedState) || (Ie = !0),
        e.memoizedState = s,
        e.baseQueue === null && (e.baseState = s),
        n.lastRenderedState = s
    }
    return [s, i]
}
function ah() {}
function uh(t, e) {
    var n = ie
      , i = it()
      , r = e()
      , s = !ct(i.memoizedState, r);
    if (s && (i.memoizedState = r,
    Ie = !0),
    i = i.queue,
    Wa(dh.bind(null, n, i, t), [t]),
    i.getSnapshot !== e || s || ve !== null && ve.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        hr(9, fh.bind(null, n, i, r, e), void 0, null),
        we === null)
            throw Error(A(349));
        bn & 30 || ch(n, e, r)
    }
    return r
}
function ch(t, e, n) {
    t.flags |= 16384,
    t = {
        getSnapshot: e,
        value: n
    },
    e = ie.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    ie.updateQueue = e,
    e.stores = [t]) : (n = e.stores,
    n === null ? e.stores = [t] : n.push(t))
}
function fh(t, e, n, i) {
    e.value = n,
    e.getSnapshot = i,
    hh(e) && ph(t)
}
function dh(t, e, n) {
    return n(function() {
        hh(e) && ph(t)
    })
}
function hh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !ct(t, n)
    } catch {
        return !0
    }
}
function ph(t) {
    var e = Dt(t, 1);
    e !== null && ut(e, t, 1, -1)
}
function sc(t) {
    var e = ht();
    return typeof t == "function" && (t = t()),
    e.memoizedState = e.baseState = t,
    t = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: t
    },
    e.queue = t,
    t = t.dispatch = Vm.bind(null, ie, t),
    [e.memoizedState, t]
}
function hr(t, e, n, i) {
    return t = {
        tag: t,
        create: e,
        destroy: n,
        deps: i,
        next: null
    },
    e = ie.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    ie.updateQueue = e,
    e.lastEffect = t.next = t) : (n = e.lastEffect,
    n === null ? e.lastEffect = t.next = t : (i = n.next,
    n.next = t,
    t.next = i,
    e.lastEffect = t)),
    t
}
function gh() {
    return it().memoizedState
}
function ds(t, e, n, i) {
    var r = ht();
    ie.flags |= t,
    r.memoizedState = hr(1 | e, n, void 0, i === void 0 ? null : i)
}
function po(t, e, n, i) {
    var r = it();
    i = i === void 0 ? null : i;
    var s = void 0;
    if (ge !== null) {
        var o = ge.memoizedState;
        if (s = o.destroy,
        i !== null && Fa(i, o.deps)) {
            r.memoizedState = hr(e, n, s, i);
            return
        }
    }
    ie.flags |= t,
    r.memoizedState = hr(1 | e, n, s, i)
}
function oc(t, e) {
    return ds(8390656, 8, t, e)
}
function Wa(t, e) {
    return po(2048, 8, t, e)
}
function mh(t, e) {
    return po(4, 2, t, e)
}
function yh(t, e) {
    return po(4, 4, t, e)
}
function vh(t, e) {
    if (typeof e == "function")
        return t = t(),
        e(t),
        function() {
            e(null)
        }
        ;
    if (e != null)
        return t = t(),
        e.current = t,
        function() {
            e.current = null
        }
}
function xh(t, e, n) {
    return n = n != null ? n.concat([t]) : null,
    po(4, 4, vh.bind(null, e, t), n)
}
function Va() {}
function wh(t, e) {
    var n = it();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return i !== null && e !== null && Fa(e, i[1]) ? i[0] : (n.memoizedState = [t, e],
    t)
}
function kh(t, e) {
    var n = it();
    e = e === void 0 ? null : e;
    var i = n.memoizedState;
    return i !== null && e !== null && Fa(e, i[1]) ? i[0] : (t = t(),
    n.memoizedState = [t, e],
    t)
}
function _h(t, e, n) {
    return bn & 21 ? (ct(n, e) || (n = Md(),
    ie.lanes |= n,
    An |= n,
    t.baseState = !0),
    e) : (t.baseState && (t.baseState = !1,
    Ie = !0),
    t.memoizedState = n)
}
function Hm(t, e) {
    var n = X;
    X = n !== 0 && 4 > n ? n : 4,
    t(!0);
    var i = Ko.transition;
    Ko.transition = {};
    try {
        t(!1),
        e()
    } finally {
        X = n,
        Ko.transition = i
    }
}
function Sh() {
    return it().memoizedState
}
function Wm(t, e, n) {
    var i = en(t);
    if (n = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ch(t))
        bh(e, n);
    else if (n = sh(t, e, n, i),
    n !== null) {
        var r = Oe();
        ut(n, t, i, r),
        Ah(n, e, i)
    }
}
function Vm(t, e, n) {
    var i = en(t)
      , r = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ch(t))
        bh(e, r);
    else {
        var s = t.alternate;
        if (t.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer,
        s !== null))
            try {
                var o = e.lastRenderedState
                  , l = s(o, n);
                if (r.hasEagerState = !0,
                r.eagerState = l,
                ct(l, o)) {
                    var a = e.interleaved;
                    a === null ? (r.next = r,
                    Ra(e)) : (r.next = a.next,
                    a.next = r),
                    e.interleaved = r;
                    return
                }
            } catch {} finally {}
        n = sh(t, e, r, i),
        n !== null && (r = Oe(),
        ut(n, t, i, r),
        Ah(n, e, i))
    }
}
function Ch(t) {
    var e = t.alternate;
    return t === ie || e !== null && e === ie
}
function bh(t, e) {
    Ui = js = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next,
    n.next = e),
    t.pending = e
}
function Ah(t, e, n) {
    if (n & 4194240) {
        var i = e.lanes;
        i &= t.pendingLanes,
        n |= i,
        e.lanes = n,
        wa(t, n)
    }
}
var Is = {
    readContext: nt,
    useCallback: be,
    useContext: be,
    useEffect: be,
    useImperativeHandle: be,
    useInsertionEffect: be,
    useLayoutEffect: be,
    useMemo: be,
    useReducer: be,
    useRef: be,
    useState: be,
    useDebugValue: be,
    useDeferredValue: be,
    useTransition: be,
    useMutableSource: be,
    useSyncExternalStore: be,
    useId: be,
    unstable_isNewReconciler: !1
}
  , Um = {
    readContext: nt,
    useCallback: function(t, e) {
        return ht().memoizedState = [t, e === void 0 ? null : e],
        t
    },
    useContext: nt,
    useEffect: oc,
    useImperativeHandle: function(t, e, n) {
        return n = n != null ? n.concat([t]) : null,
        ds(4194308, 4, vh.bind(null, e, t), n)
    },
    useLayoutEffect: function(t, e) {
        return ds(4194308, 4, t, e)
    },
    useInsertionEffect: function(t, e) {
        return ds(4, 2, t, e)
    },
    useMemo: function(t, e) {
        var n = ht();
        return e = e === void 0 ? null : e,
        t = t(),
        n.memoizedState = [t, e],
        t
    },
    useReducer: function(t, e, n) {
        var i = ht();
        return e = n !== void 0 ? n(e) : e,
        i.memoizedState = i.baseState = e,
        t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: e
        },
        i.queue = t,
        t = t.dispatch = Wm.bind(null, ie, t),
        [i.memoizedState, t]
    },
    useRef: function(t) {
        var e = ht();
        return t = {
            current: t
        },
        e.memoizedState = t
    },
    useState: sc,
    useDebugValue: Va,
    useDeferredValue: function(t) {
        return ht().memoizedState = t
    },
    useTransition: function() {
        var t = sc(!1)
          , e = t[0];
        return t = Hm.bind(null, t[1]),
        ht().memoizedState = t,
        [e, t]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(t, e, n) {
        var i = ie
          , r = ht();
        if ($) {
            if (n === void 0)
                throw Error(A(407));
            n = n()
        } else {
            if (n = e(),
            we === null)
                throw Error(A(349));
            bn & 30 || ch(i, e, n)
        }
        r.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: e
        };
        return r.queue = s,
        oc(dh.bind(null, i, s, t), [t]),
        i.flags |= 2048,
        hr(9, fh.bind(null, i, s, n, e), void 0, null),
        n
    },
    useId: function() {
        var t = ht()
          , e = we.identifierPrefix;
        if ($) {
            var n = Et
              , i = Mt;
            n = (i & ~(1 << 32 - at(i) - 1)).toString(32) + n,
            e = ":" + e + "R" + n,
            n = fr++,
            0 < n && (e += "H" + n.toString(32)),
            e += ":"
        } else
            n = Bm++,
            e = ":" + e + "r" + n.toString(32) + ":";
        return t.memoizedState = e
    },
    unstable_isNewReconciler: !1
}
  , Ym = {
    readContext: nt,
    useCallback: wh,
    useContext: nt,
    useEffect: Wa,
    useImperativeHandle: xh,
    useInsertionEffect: mh,
    useLayoutEffect: yh,
    useMemo: kh,
    useReducer: Qo,
    useRef: gh,
    useState: function() {
        return Qo(dr)
    },
    useDebugValue: Va,
    useDeferredValue: function(t) {
        var e = it();
        return _h(e, ge.memoizedState, t)
    },
    useTransition: function() {
        var t = Qo(dr)[0]
          , e = it().memoizedState;
        return [t, e]
    },
    useMutableSource: ah,
    useSyncExternalStore: uh,
    useId: Sh,
    unstable_isNewReconciler: !1
}
  , Xm = {
    readContext: nt,
    useCallback: wh,
    useContext: nt,
    useEffect: Wa,
    useImperativeHandle: xh,
    useInsertionEffect: mh,
    useLayoutEffect: yh,
    useMemo: kh,
    useReducer: Go,
    useRef: gh,
    useState: function() {
        return Go(dr)
    },
    useDebugValue: Va,
    useDeferredValue: function(t) {
        var e = it();
        return ge === null ? e.memoizedState = t : _h(e, ge.memoizedState, t)
    },
    useTransition: function() {
        var t = Go(dr)[0]
          , e = it().memoizedState;
        return [t, e]
    },
    useMutableSource: ah,
    useSyncExternalStore: uh,
    useId: Sh,
    unstable_isNewReconciler: !1
};
function st(t, e) {
    if (t && t.defaultProps) {
        e = re({}, e),
        t = t.defaultProps;
        for (var n in t)
            e[n] === void 0 && (e[n] = t[n]);
        return e
    }
    return e
}
function Il(t, e, n, i) {
    e = t.memoizedState,
    n = n(i, e),
    n = n == null ? e : re({}, e, n),
    t.memoizedState = n,
    t.lanes === 0 && (t.updateQueue.baseState = n)
}
var go = {
    isMounted: function(t) {
        return (t = t._reactInternals) ? On(t) === t : !1
    },
    enqueueSetState: function(t, e, n) {
        t = t._reactInternals;
        var i = Oe()
          , r = en(t)
          , s = Lt(i, r);
        s.payload = e,
        n != null && (s.callback = n),
        e = qt(t, s, r),
        e !== null && (ut(e, t, r, i),
        cs(e, t, r))
    },
    enqueueReplaceState: function(t, e, n) {
        t = t._reactInternals;
        var i = Oe()
          , r = en(t)
          , s = Lt(i, r);
        s.tag = 1,
        s.payload = e,
        n != null && (s.callback = n),
        e = qt(t, s, r),
        e !== null && (ut(e, t, r, i),
        cs(e, t, r))
    },
    enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var n = Oe()
          , i = en(t)
          , r = Lt(n, i);
        r.tag = 2,
        e != null && (r.callback = e),
        e = qt(t, r, i),
        e !== null && (ut(e, t, i, n),
        cs(e, t, i))
    }
};
function lc(t, e, n, i, r, s, o) {
    return t = t.stateNode,
    typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, s, o) : e.prototype && e.prototype.isPureReactComponent ? !sr(n, i) || !sr(r, s) : !0
}
function Mh(t, e, n) {
    var i = !1
      , r = sn
      , s = e.contextType;
    return typeof s == "object" && s !== null ? s = nt(s) : (r = Be(e) ? Sn : Ee.current,
    i = e.contextTypes,
    s = (i = i != null) ? ri(t, r) : sn),
    e = new e(n,s),
    t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null,
    e.updater = go,
    t.stateNode = e,
    e._reactInternals = t,
    i && (t = t.stateNode,
    t.__reactInternalMemoizedUnmaskedChildContext = r,
    t.__reactInternalMemoizedMaskedChildContext = s),
    e
}
function ac(t, e, n, i) {
    t = e.state,
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, i),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, i),
    e.state !== t && go.enqueueReplaceState(e, e.state, null)
}
function Fl(t, e, n, i) {
    var r = t.stateNode;
    r.props = n,
    r.state = t.memoizedState,
    r.refs = {},
    za(t);
    var s = e.contextType;
    typeof s == "object" && s !== null ? r.context = nt(s) : (s = Be(e) ? Sn : Ee.current,
    r.context = ri(t, s)),
    r.state = t.memoizedState,
    s = e.getDerivedStateFromProps,
    typeof s == "function" && (Il(t, e, s, n),
    r.state = t.memoizedState),
    typeof e.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (e = r.state,
    typeof r.componentWillMount == "function" && r.componentWillMount(),
    typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(),
    e !== r.state && go.enqueueReplaceState(r, r.state, null),
    zs(t, n, r, i),
    r.state = t.memoizedState),
    typeof r.componentDidMount == "function" && (t.flags |= 4194308)
}
function ai(t, e) {
    try {
        var n = ""
          , i = e;
        do
            n += wg(i),
            i = i.return;
        while (i);
        var r = n
    } catch (s) {
        r = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: t,
        source: e,
        stack: r,
        digest: null
    }
}
function Zo(t, e, n) {
    return {
        value: t,
        source: null,
        stack: n ?? null,
        digest: e ?? null
    }
}
function Bl(t, e) {
    try {
        console.error(e.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Km = typeof WeakMap == "function" ? WeakMap : Map;
function Eh(t, e, n) {
    n = Lt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var i = e.value;
    return n.callback = function() {
        Bs || (Bs = !0,
        Zl = i),
        Bl(t, e)
    }
    ,
    n
}
function Ph(t, e, n) {
    n = Lt(-1, n),
    n.tag = 3;
    var i = t.type.getDerivedStateFromError;
    if (typeof i == "function") {
        var r = e.value;
        n.payload = function() {
            return i(r)
        }
        ,
        n.callback = function() {
            Bl(t, e)
        }
    }
    var s = t.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Bl(t, e),
        typeof i != "function" && ($t === null ? $t = new Set([this]) : $t.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function uc(t, e, n) {
    var i = t.pingCache;
    if (i === null) {
        i = t.pingCache = new Km;
        var r = new Set;
        i.set(e, r)
    } else
        r = i.get(e),
        r === void 0 && (r = new Set,
        i.set(e, r));
    r.has(n) || (r.add(n),
    t = l1.bind(null, t, e, n),
    e.then(t, t))
}
function cc(t) {
    do {
        var e;
        if ((e = t.tag === 13) && (e = t.memoizedState,
        e = e !== null ? e.dehydrated !== null : !0),
        e)
            return t;
        t = t.return
    } while (t !== null);
    return null
}
function fc(t, e, n, i, r) {
    return t.mode & 1 ? (t.flags |= 65536,
    t.lanes = r,
    t) : (t === e ? t.flags |= 65536 : (t.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (e = Lt(-1, 1),
    e.tag = 2,
    qt(n, e, 1))),
    n.lanes |= 1),
    t)
}
var Qm = zt.ReactCurrentOwner
  , Ie = !1;
function Le(t, e, n, i) {
    e.child = t === null ? rh(e, null, n, i) : oi(e, t.child, n, i)
}
function dc(t, e, n, i, r) {
    n = n.render;
    var s = e.ref;
    return $n(e, r),
    i = Ba(t, e, n, i, s, r),
    n = Ha(),
    t !== null && !Ie ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~r,
    Rt(t, e, r)) : ($ && n && Ea(e),
    e.flags |= 1,
    Le(t, e, i, r),
    e.child)
}
function hc(t, e, n, i, r) {
    if (t === null) {
        var s = n.type;
        return typeof s == "function" && !Ja(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (e.tag = 15,
        e.type = s,
        Lh(t, e, s, i, r)) : (t = ms(n.type, null, i, e, e.mode, r),
        t.ref = e.ref,
        t.return = e,
        e.child = t)
    }
    if (s = t.child,
    !(t.lanes & r)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : sr,
        n(o, i) && t.ref === e.ref)
            return Rt(t, e, r)
    }
    return e.flags |= 1,
    t = tn(s, i),
    t.ref = e.ref,
    t.return = e,
    e.child = t
}
function Lh(t, e, n, i, r) {
    if (t !== null) {
        var s = t.memoizedProps;
        if (sr(s, i) && t.ref === e.ref)
            if (Ie = !1,
            e.pendingProps = i = s,
            (t.lanes & r) !== 0)
                t.flags & 131072 && (Ie = !0);
            else
                return e.lanes = t.lanes,
                Rt(t, e, r)
    }
    return Hl(t, e, n, i, r)
}
function Oh(t, e, n) {
    var i = e.pendingProps
      , r = i.children
      , s = t !== null ? t.memoizedState : null;
    if (i.mode === "hidden")
        if (!(e.mode & 1))
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            G(Kn, Ue),
            Ue |= n;
        else {
            if (!(n & 1073741824))
                return t = s !== null ? s.baseLanes | n : n,
                e.lanes = e.childLanes = 1073741824,
                e.memoizedState = {
                    baseLanes: t,
                    cachePool: null,
                    transitions: null
                },
                e.updateQueue = null,
                G(Kn, Ue),
                Ue |= t,
                null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            i = s !== null ? s.baseLanes : n,
            G(Kn, Ue),
            Ue |= i
        }
    else
        s !== null ? (i = s.baseLanes | n,
        e.memoizedState = null) : i = n,
        G(Kn, Ue),
        Ue |= i;
    return Le(t, e, r, n),
    e.child
}
function Th(t, e) {
    var n = e.ref;
    (t === null && n !== null || t !== null && t.ref !== n) && (e.flags |= 512,
    e.flags |= 2097152)
}
function Hl(t, e, n, i, r) {
    var s = Be(n) ? Sn : Ee.current;
    return s = ri(e, s),
    $n(e, r),
    n = Ba(t, e, n, i, s, r),
    i = Ha(),
    t !== null && !Ie ? (e.updateQueue = t.updateQueue,
    e.flags &= -2053,
    t.lanes &= ~r,
    Rt(t, e, r)) : ($ && i && Ea(e),
    e.flags |= 1,
    Le(t, e, n, r),
    e.child)
}
function pc(t, e, n, i, r) {
    if (Be(n)) {
        var s = !0;
        Ls(e)
    } else
        s = !1;
    if ($n(e, r),
    e.stateNode === null)
        hs(t, e),
        Mh(e, n, i),
        Fl(e, n, i, r),
        i = !0;
    else if (t === null) {
        var o = e.stateNode
          , l = e.memoizedProps;
        o.props = l;
        var a = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = nt(u) : (u = Be(n) ? Sn : Ee.current,
        u = ri(e, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== i || a !== u) && ac(e, o, i, u),
        Bt = !1;
        var d = e.memoizedState;
        o.state = d,
        zs(e, i, o, r),
        a = e.memoizedState,
        l !== i || d !== a || Fe.current || Bt ? (typeof c == "function" && (Il(e, n, c, i),
        a = e.memoizedState),
        (l = Bt || lc(e, n, l, i, d, a, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        e.memoizedProps = i,
        e.memoizedState = a),
        o.props = i,
        o.state = a,
        o.context = u,
        i = l) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        i = !1)
    } else {
        o = e.stateNode,
        oh(t, e),
        l = e.memoizedProps,
        u = e.type === e.elementType ? l : st(e.type, l),
        o.props = u,
        f = e.pendingProps,
        d = o.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = nt(a) : (a = Be(n) ? Sn : Ee.current,
        a = ri(e, a));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== f || d !== a) && ac(e, o, i, a),
        Bt = !1,
        d = e.memoizedState,
        o.state = d,
        zs(e, i, o, r);
        var m = e.memoizedState;
        l !== f || d !== m || Fe.current || Bt ? (typeof h == "function" && (Il(e, n, h, i),
        m = e.memoizedState),
        (u = Bt || lc(e, n, u, i, d, m, a) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(i, m, a),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(i, m, a)),
        typeof o.componentDidUpdate == "function" && (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024),
        e.memoizedProps = i,
        e.memoizedState = m),
        o.props = i,
        o.state = m,
        o.context = a,
        i = u) : (typeof o.componentDidUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === t.memoizedProps && d === t.memoizedState || (e.flags |= 1024),
        i = !1)
    }
    return Wl(t, e, n, i, s, r)
}
function Wl(t, e, n, i, r, s) {
    Th(t, e);
    var o = (e.flags & 128) !== 0;
    if (!i && !o)
        return r && $u(e, n, !1),
        Rt(t, e, s);
    i = e.stateNode,
    Qm.current = e;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return e.flags |= 1,
    t !== null && o ? (e.child = oi(e, t.child, null, s),
    e.child = oi(e, null, l, s)) : Le(t, e, l, s),
    e.memoizedState = i.state,
    r && $u(e, n, !0),
    e.child
}
function Dh(t) {
    var e = t.stateNode;
    e.pendingContext ? qu(t, e.pendingContext, e.pendingContext !== e.context) : e.context && qu(t, e.context, !1),
    Na(t, e.containerInfo)
}
function gc(t, e, n, i, r) {
    return si(),
    La(r),
    e.flags |= 256,
    Le(t, e, n, i),
    e.child
}
var Vl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Ul(t) {
    return {
        baseLanes: t,
        cachePool: null,
        transitions: null
    }
}
function Rh(t, e, n) {
    var i = e.pendingProps, r = te.current, s = !1, o = (e.flags & 128) !== 0, l;
    if ((l = o) || (l = t !== null && t.memoizedState === null ? !1 : (r & 2) !== 0),
    l ? (s = !0,
    e.flags &= -129) : (t === null || t.memoizedState !== null) && (r |= 1),
    G(te, r & 1),
    t === null)
        return Nl(e),
        t = e.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null) ? (e.mode & 1 ? t.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1,
        null) : (o = i.children,
        t = i.fallback,
        s ? (i = e.mode,
        s = e.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(i & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = vo(o, i, 0, null),
        t = kn(t, i, n, null),
        s.return = e,
        t.return = e,
        s.sibling = t,
        e.child = s,
        e.child.memoizedState = Ul(n),
        e.memoizedState = Vl,
        t) : Ua(e, o));
    if (r = t.memoizedState,
    r !== null && (l = r.dehydrated,
    l !== null))
        return Gm(t, e, o, i, l, r, n);
    if (s) {
        s = i.fallback,
        o = e.mode,
        r = t.child,
        l = r.sibling;
        var a = {
            mode: "hidden",
            children: i.children
        };
        return !(o & 1) && e.child !== r ? (i = e.child,
        i.childLanes = 0,
        i.pendingProps = a,
        e.deletions = null) : (i = tn(r, a),
        i.subtreeFlags = r.subtreeFlags & 14680064),
        l !== null ? s = tn(l, s) : (s = kn(s, o, n, null),
        s.flags |= 2),
        s.return = e,
        i.return = e,
        i.sibling = s,
        e.child = i,
        i = s,
        s = e.child,
        o = t.child.memoizedState,
        o = o === null ? Ul(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = t.childLanes & ~n,
        e.memoizedState = Vl,
        i
    }
    return s = t.child,
    t = s.sibling,
    i = tn(s, {
        mode: "visible",
        children: i.children
    }),
    !(e.mode & 1) && (i.lanes = n),
    i.return = e,
    i.sibling = null,
    t !== null && (n = e.deletions,
    n === null ? (e.deletions = [t],
    e.flags |= 16) : n.push(t)),
    e.child = i,
    e.memoizedState = null,
    i
}
function Ua(t, e) {
    return e = vo({
        mode: "visible",
        children: e
    }, t.mode, 0, null),
    e.return = t,
    t.child = e
}
function Hr(t, e, n, i) {
    return i !== null && La(i),
    oi(e, t.child, null, n),
    t = Ua(e, e.pendingProps.children),
    t.flags |= 2,
    e.memoizedState = null,
    t
}
function Gm(t, e, n, i, r, s, o) {
    if (n)
        return e.flags & 256 ? (e.flags &= -257,
        i = Zo(Error(A(422))),
        Hr(t, e, o, i)) : e.memoizedState !== null ? (e.child = t.child,
        e.flags |= 128,
        null) : (s = i.fallback,
        r = e.mode,
        i = vo({
            mode: "visible",
            children: i.children
        }, r, 0, null),
        s = kn(s, r, o, null),
        s.flags |= 2,
        i.return = e,
        s.return = e,
        i.sibling = s,
        e.child = i,
        e.mode & 1 && oi(e, t.child, null, o),
        e.child.memoizedState = Ul(o),
        e.memoizedState = Vl,
        s);
    if (!(e.mode & 1))
        return Hr(t, e, o, null);
    if (r.data === "$!") {
        if (i = r.nextSibling && r.nextSibling.dataset,
        i)
            var l = i.dgst;
        return i = l,
        s = Error(A(419)),
        i = Zo(s, i, void 0),
        Hr(t, e, o, i)
    }
    if (l = (o & t.childLanes) !== 0,
    Ie || l) {
        if (i = we,
        i !== null) {
            switch (o & -o) {
            case 4:
                r = 2;
                break;
            case 16:
                r = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                r = 32;
                break;
            case 536870912:
                r = 268435456;
                break;
            default:
                r = 0
            }
            r = r & (i.suspendedLanes | o) ? 0 : r,
            r !== 0 && r !== s.retryLane && (s.retryLane = r,
            Dt(t, r),
            ut(i, t, r, -1))
        }
        return Za(),
        i = Zo(Error(A(421))),
        Hr(t, e, o, i)
    }
    return r.data === "$?" ? (e.flags |= 128,
    e.child = t.child,
    e = a1.bind(null, t),
    r._reactRetry = e,
    null) : (t = s.treeContext,
    Ye = Jt(r.nextSibling),
    Xe = e,
    $ = !0,
    lt = null,
    t !== null && (Je[qe++] = Mt,
    Je[qe++] = Et,
    Je[qe++] = Cn,
    Mt = t.id,
    Et = t.overflow,
    Cn = e),
    e = Ua(e, i.children),
    e.flags |= 4096,
    e)
}
function mc(t, e, n) {
    t.lanes |= e;
    var i = t.alternate;
    i !== null && (i.lanes |= e),
    jl(t.return, e, n)
}
function Jo(t, e, n, i, r) {
    var s = t.memoizedState;
    s === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r
    } : (s.isBackwards = e,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = i,
    s.tail = n,
    s.tailMode = r)
}
function zh(t, e, n) {
    var i = e.pendingProps
      , r = i.revealOrder
      , s = i.tail;
    if (Le(t, e, i.children, n),
    i = te.current,
    i & 2)
        i = i & 1 | 2,
        e.flags |= 128;
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && mc(t, n, e);
                else if (t.tag === 19)
                    mc(t, n, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break e;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break e;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        i &= 1
    }
    if (G(te, i),
    !(e.mode & 1))
        e.memoizedState = null;
    else
        switch (r) {
        case "forwards":
            for (n = e.child,
            r = null; n !== null; )
                t = n.alternate,
                t !== null && Ns(t) === null && (r = n),
                n = n.sibling;
            n = r,
            n === null ? (r = e.child,
            e.child = null) : (r = n.sibling,
            n.sibling = null),
            Jo(e, !1, r, n, s);
            break;
        case "backwards":
            for (n = null,
            r = e.child,
            e.child = null; r !== null; ) {
                if (t = r.alternate,
                t !== null && Ns(t) === null) {
                    e.child = r;
                    break
                }
                t = r.sibling,
                r.sibling = n,
                n = r,
                r = t
            }
            Jo(e, !0, n, null, s);
            break;
        case "together":
            Jo(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
    return e.child
}
function hs(t, e) {
    !(e.mode & 1) && t !== null && (t.alternate = null,
    e.alternate = null,
    e.flags |= 2)
}
function Rt(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies),
    An |= e.lanes,
    !(n & e.childLanes))
        return null;
    if (t !== null && e.child !== t.child)
        throw Error(A(153));
    if (e.child !== null) {
        for (t = e.child,
        n = tn(t, t.pendingProps),
        e.child = n,
        n.return = e; t.sibling !== null; )
            t = t.sibling,
            n = n.sibling = tn(t, t.pendingProps),
            n.return = e;
        n.sibling = null
    }
    return e.child
}
function Zm(t, e, n) {
    switch (e.tag) {
    case 3:
        Dh(e),
        si();
        break;
    case 5:
        lh(e);
        break;
    case 1:
        Be(e.type) && Ls(e);
        break;
    case 4:
        Na(e, e.stateNode.containerInfo);
        break;
    case 10:
        var i = e.type._context
          , r = e.memoizedProps.value;
        G(Ds, i._currentValue),
        i._currentValue = r;
        break;
    case 13:
        if (i = e.memoizedState,
        i !== null)
            return i.dehydrated !== null ? (G(te, te.current & 1),
            e.flags |= 128,
            null) : n & e.child.childLanes ? Rh(t, e, n) : (G(te, te.current & 1),
            t = Rt(t, e, n),
            t !== null ? t.sibling : null);
        G(te, te.current & 1);
        break;
    case 19:
        if (i = (n & e.childLanes) !== 0,
        t.flags & 128) {
            if (i)
                return zh(t, e, n);
            e.flags |= 128
        }
        if (r = e.memoizedState,
        r !== null && (r.rendering = null,
        r.tail = null,
        r.lastEffect = null),
        G(te, te.current),
        i)
            break;
        return null;
    case 22:
    case 23:
        return e.lanes = 0,
        Oh(t, e, n)
    }
    return Rt(t, e, n)
}
var Nh, Yl, jh, Ih;
Nh = function(t, e) {
    for (var n = e.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === e)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Yl = function() {}
;
jh = function(t, e, n, i) {
    var r = t.memoizedProps;
    if (r !== i) {
        t = e.stateNode,
        xn(xt.current);
        var s = null;
        switch (n) {
        case "input":
            r = hl(t, r),
            i = hl(t, i),
            s = [];
            break;
        case "select":
            r = re({}, r, {
                value: void 0
            }),
            i = re({}, i, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            r = ml(t, r),
            i = ml(t, i),
            s = [];
            break;
        default:
            typeof r.onClick != "function" && typeof i.onClick == "function" && (t.onclick = Es)
        }
        vl(n, i);
        var o;
        n = null;
        for (u in r)
            if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
                if (u === "style") {
                    var l = r[u];
                    for (o in l)
                        l.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (qi.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in i) {
            var a = i[u];
            if (l = r != null ? r[u] : void 0,
            i.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in a)
                            a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}),
                            n[o] = a[o])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (qi.hasOwnProperty(u) ? (a != null && u === "onScroll" && Z("scroll", t),
                    s || l === a || (s = [])) : (s = s || []).push(u, a))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (e.updateQueue = u) && (e.flags |= 4)
    }
}
;
Ih = function(t, e, n, i) {
    n !== i && (e.flags |= 4)
}
;
function _i(t, e) {
    if (!$)
        switch (t.tailMode) {
        case "hidden":
            e = t.tail;
            for (var n = null; e !== null; )
                e.alternate !== null && (n = e),
                e = e.sibling;
            n === null ? t.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = t.tail;
            for (var i = null; n !== null; )
                n.alternate !== null && (i = n),
                n = n.sibling;
            i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null
        }
}
function Ae(t) {
    var e = t.alternate !== null && t.alternate.child === t.child
      , n = 0
      , i = 0;
    if (e)
        for (var r = t.child; r !== null; )
            n |= r.lanes | r.childLanes,
            i |= r.subtreeFlags & 14680064,
            i |= r.flags & 14680064,
            r.return = t,
            r = r.sibling;
    else
        for (r = t.child; r !== null; )
            n |= r.lanes | r.childLanes,
            i |= r.subtreeFlags,
            i |= r.flags,
            r.return = t,
            r = r.sibling;
    return t.subtreeFlags |= i,
    t.childLanes = n,
    e
}
function Jm(t, e, n) {
    var i = e.pendingProps;
    switch (Pa(e),
    e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Ae(e),
        null;
    case 1:
        return Be(e.type) && Ps(),
        Ae(e),
        null;
    case 3:
        return i = e.stateNode,
        li(),
        J(Fe),
        J(Ee),
        Ia(),
        i.pendingContext && (i.context = i.pendingContext,
        i.pendingContext = null),
        (t === null || t.child === null) && (Fr(e) ? e.flags |= 4 : t === null || t.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
        lt !== null && ($l(lt),
        lt = null))),
        Yl(t, e),
        Ae(e),
        null;
    case 5:
        ja(e);
        var r = xn(cr.current);
        if (n = e.type,
        t !== null && e.stateNode != null)
            jh(t, e, n, i, r),
            t.ref !== e.ref && (e.flags |= 512,
            e.flags |= 2097152);
        else {
            if (!i) {
                if (e.stateNode === null)
                    throw Error(A(166));
                return Ae(e),
                null
            }
            if (t = xn(xt.current),
            Fr(e)) {
                i = e.stateNode,
                n = e.type;
                var s = e.memoizedProps;
                switch (i[mt] = e,
                i[ar] = s,
                t = (e.mode & 1) !== 0,
                n) {
                case "dialog":
                    Z("cancel", i),
                    Z("close", i);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    Z("load", i);
                    break;
                case "video":
                case "audio":
                    for (r = 0; r < Ti.length; r++)
                        Z(Ti[r], i);
                    break;
                case "source":
                    Z("error", i);
                    break;
                case "img":
                case "image":
                case "link":
                    Z("error", i),
                    Z("load", i);
                    break;
                case "details":
                    Z("toggle", i);
                    break;
                case "input":
                    bu(i, s),
                    Z("invalid", i);
                    break;
                case "select":
                    i._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    Z("invalid", i);
                    break;
                case "textarea":
                    Mu(i, s),
                    Z("invalid", i)
                }
                vl(n, s),
                r = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var l = s[o];
                        o === "children" ? typeof l == "string" ? i.textContent !== l && (s.suppressHydrationWarning !== !0 && Ir(i.textContent, l, t),
                        r = ["children", l]) : typeof l == "number" && i.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && Ir(i.textContent, l, t),
                        r = ["children", "" + l]) : qi.hasOwnProperty(o) && l != null && o === "onScroll" && Z("scroll", i)
                    }
                switch (n) {
                case "input":
                    Lr(i),
                    Au(i, s, !0);
                    break;
                case "textarea":
                    Lr(i),
                    Eu(i);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (i.onclick = Es)
                }
                i = r,
                e.updateQueue = i,
                i !== null && (e.flags |= 4)
            } else {
                o = r.nodeType === 9 ? r : r.ownerDocument,
                t === "http://www.w3.org/1999/xhtml" && (t = dd(n)),
                t === "http://www.w3.org/1999/xhtml" ? n === "script" ? (t = o.createElement("div"),
                t.innerHTML = "<script><\/script>",
                t = t.removeChild(t.firstChild)) : typeof i.is == "string" ? t = o.createElement(n, {
                    is: i.is
                }) : (t = o.createElement(n),
                n === "select" && (o = t,
                i.multiple ? o.multiple = !0 : i.size && (o.size = i.size))) : t = o.createElementNS(t, n),
                t[mt] = e,
                t[ar] = i,
                Nh(t, e, !1, !1),
                e.stateNode = t;
                e: {
                    switch (o = xl(n, i),
                    n) {
                    case "dialog":
                        Z("cancel", t),
                        Z("close", t),
                        r = i;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Z("load", t),
                        r = i;
                        break;
                    case "video":
                    case "audio":
                        for (r = 0; r < Ti.length; r++)
                            Z(Ti[r], t);
                        r = i;
                        break;
                    case "source":
                        Z("error", t),
                        r = i;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Z("error", t),
                        Z("load", t),
                        r = i;
                        break;
                    case "details":
                        Z("toggle", t),
                        r = i;
                        break;
                    case "input":
                        bu(t, i),
                        r = hl(t, i),
                        Z("invalid", t);
                        break;
                    case "option":
                        r = i;
                        break;
                    case "select":
                        t._wrapperState = {
                            wasMultiple: !!i.multiple
                        },
                        r = re({}, i, {
                            value: void 0
                        }),
                        Z("invalid", t);
                        break;
                    case "textarea":
                        Mu(t, i),
                        r = ml(t, i),
                        Z("invalid", t);
                        break;
                    default:
                        r = i
                    }
                    vl(n, r),
                    l = r;
                    for (s in l)
                        if (l.hasOwnProperty(s)) {
                            var a = l[s];
                            s === "style" ? gd(t, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && hd(t, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && $i(t, a) : typeof a == "number" && $i(t, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (qi.hasOwnProperty(s) ? a != null && s === "onScroll" && Z("scroll", t) : a != null && pa(t, s, a, o))
                        }
                    switch (n) {
                    case "input":
                        Lr(t),
                        Au(t, i, !1);
                        break;
                    case "textarea":
                        Lr(t),
                        Eu(t);
                        break;
                    case "option":
                        i.value != null && t.setAttribute("value", "" + rn(i.value));
                        break;
                    case "select":
                        t.multiple = !!i.multiple,
                        s = i.value,
                        s != null ? Gn(t, !!i.multiple, s, !1) : i.defaultValue != null && Gn(t, !!i.multiple, i.defaultValue, !0);
                        break;
                    default:
                        typeof r.onClick == "function" && (t.onclick = Es)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        i = !!i.autoFocus;
                        break e;
                    case "img":
                        i = !0;
                        break e;
                    default:
                        i = !1
                    }
                }
                i && (e.flags |= 4)
            }
            e.ref !== null && (e.flags |= 512,
            e.flags |= 2097152)
        }
        return Ae(e),
        null;
    case 6:
        if (t && e.stateNode != null)
            Ih(t, e, t.memoizedProps, i);
        else {
            if (typeof i != "string" && e.stateNode === null)
                throw Error(A(166));
            if (n = xn(cr.current),
            xn(xt.current),
            Fr(e)) {
                if (i = e.stateNode,
                n = e.memoizedProps,
                i[mt] = e,
                (s = i.nodeValue !== n) && (t = Xe,
                t !== null))
                    switch (t.tag) {
                    case 3:
                        Ir(i.nodeValue, n, (t.mode & 1) !== 0);
                        break;
                    case 5:
                        t.memoizedProps.suppressHydrationWarning !== !0 && Ir(i.nodeValue, n, (t.mode & 1) !== 0)
                    }
                s && (e.flags |= 4)
            } else
                i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i),
                i[mt] = e,
                e.stateNode = i
        }
        return Ae(e),
        null;
    case 13:
        if (J(te),
        i = e.memoizedState,
        t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if ($ && Ye !== null && e.mode & 1 && !(e.flags & 128))
                nh(),
                si(),
                e.flags |= 98560,
                s = !1;
            else if (s = Fr(e),
            i !== null && i.dehydrated !== null) {
                if (t === null) {
                    if (!s)
                        throw Error(A(318));
                    if (s = e.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(A(317));
                    s[mt] = e
                } else
                    si(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                Ae(e),
                s = !1
            } else
                lt !== null && ($l(lt),
                lt = null),
                s = !0;
            if (!s)
                return e.flags & 65536 ? e : null
        }
        return e.flags & 128 ? (e.lanes = n,
        e) : (i = i !== null,
        i !== (t !== null && t.memoizedState !== null) && i && (e.child.flags |= 8192,
        e.mode & 1 && (t === null || te.current & 1 ? me === 0 && (me = 3) : Za())),
        e.updateQueue !== null && (e.flags |= 4),
        Ae(e),
        null);
    case 4:
        return li(),
        Yl(t, e),
        t === null && or(e.stateNode.containerInfo),
        Ae(e),
        null;
    case 10:
        return Da(e.type._context),
        Ae(e),
        null;
    case 17:
        return Be(e.type) && Ps(),
        Ae(e),
        null;
    case 19:
        if (J(te),
        s = e.memoizedState,
        s === null)
            return Ae(e),
            null;
        if (i = (e.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (i)
                _i(s, !1);
            else {
                if (me !== 0 || t !== null && t.flags & 128)
                    for (t = e.child; t !== null; ) {
                        if (o = Ns(t),
                        o !== null) {
                            for (e.flags |= 128,
                            _i(s, !1),
                            i = o.updateQueue,
                            i !== null && (e.updateQueue = i,
                            e.flags |= 4),
                            e.subtreeFlags = 0,
                            i = n,
                            n = e.child; n !== null; )
                                s = n,
                                t = i,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = t,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                t = o.dependencies,
                                s.dependencies = t === null ? null : {
                                    lanes: t.lanes,
                                    firstContext: t.firstContext
                                }),
                                n = n.sibling;
                            return G(te, te.current & 1 | 2),
                            e.child
                        }
                        t = t.sibling
                    }
                s.tail !== null && ce() > ui && (e.flags |= 128,
                i = !0,
                _i(s, !1),
                e.lanes = 4194304)
            }
        else {
            if (!i)
                if (t = Ns(o),
                t !== null) {
                    if (e.flags |= 128,
                    i = !0,
                    n = t.updateQueue,
                    n !== null && (e.updateQueue = n,
                    e.flags |= 4),
                    _i(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !$)
                        return Ae(e),
                        null
                } else
                    2 * ce() - s.renderingStartTime > ui && n !== 1073741824 && (e.flags |= 128,
                    i = !0,
                    _i(s, !1),
                    e.lanes = 4194304);
            s.isBackwards ? (o.sibling = e.child,
            e.child = o) : (n = s.last,
            n !== null ? n.sibling = o : e.child = o,
            s.last = o)
        }
        return s.tail !== null ? (e = s.tail,
        s.rendering = e,
        s.tail = e.sibling,
        s.renderingStartTime = ce(),
        e.sibling = null,
        n = te.current,
        G(te, i ? n & 1 | 2 : n & 1),
        e) : (Ae(e),
        null);
    case 22:
    case 23:
        return Ga(),
        i = e.memoizedState !== null,
        t !== null && t.memoizedState !== null !== i && (e.flags |= 8192),
        i && e.mode & 1 ? Ue & 1073741824 && (Ae(e),
        e.subtreeFlags & 6 && (e.flags |= 8192)) : Ae(e),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(A(156, e.tag))
}
function qm(t, e) {
    switch (Pa(e),
    e.tag) {
    case 1:
        return Be(e.type) && Ps(),
        t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 3:
        return li(),
        J(Fe),
        J(Ee),
        Ia(),
        t = e.flags,
        t & 65536 && !(t & 128) ? (e.flags = t & -65537 | 128,
        e) : null;
    case 5:
        return ja(e),
        null;
    case 13:
        if (J(te),
        t = e.memoizedState,
        t !== null && t.dehydrated !== null) {
            if (e.alternate === null)
                throw Error(A(340));
            si()
        }
        return t = e.flags,
        t & 65536 ? (e.flags = t & -65537 | 128,
        e) : null;
    case 19:
        return J(te),
        null;
    case 4:
        return li(),
        null;
    case 10:
        return Da(e.type._context),
        null;
    case 22:
    case 23:
        return Ga(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Wr = !1
  , Me = !1
  , $m = typeof WeakSet == "function" ? WeakSet : Set
  , L = null;
function Xn(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (i) {
                le(t, e, i)
            }
        else
            n.current = null
}
function Xl(t, e, n) {
    try {
        n()
    } catch (i) {
        le(t, e, i)
    }
}
var yc = !1;
function e1(t, e) {
    if (Pl = bs,
    t = Vd(),
    Ma(t)) {
        if ("selectionStart"in t)
            var n = {
                start: t.selectionStart,
                end: t.selectionEnd
            };
        else
            e: {
                n = (n = t.ownerDocument) && n.defaultView || window;
                var i = n.getSelection && n.getSelection();
                if (i && i.rangeCount !== 0) {
                    n = i.anchorNode;
                    var r = i.anchorOffset
                      , s = i.focusNode;
                    i = i.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , f = t
                      , d = null;
                    t: for (; ; ) {
                        for (var h; f !== n || r !== 0 && f.nodeType !== 3 || (l = o + r),
                        f !== s || i !== 0 && f.nodeType !== 3 || (a = o + i),
                        f.nodeType === 3 && (o += f.nodeValue.length),
                        (h = f.firstChild) !== null; )
                            d = f,
                            f = h;
                        for (; ; ) {
                            if (f === t)
                                break t;
                            if (d === n && ++u === r && (l = o),
                            d === s && ++c === i && (a = o),
                            (h = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = h
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ll = {
        focusedElem: t,
        selectionRange: n
    },
    bs = !1,
    L = e; L !== null; )
        if (e = L,
        t = e.child,
        (e.subtreeFlags & 1028) !== 0 && t !== null)
            t.return = e,
            L = t;
        else
            for (; L !== null; ) {
                e = L;
                try {
                    var m = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (m !== null) {
                                var v = m.memoizedProps
                                  , x = m.memoizedState
                                  , g = e.stateNode
                                  , p = g.getSnapshotBeforeUpdate(e.elementType === e.type ? v : st(e.type, v), x);
                                g.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var y = e.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(A(163))
                        }
                } catch (w) {
                    le(e, e.return, w)
                }
                if (t = e.sibling,
                t !== null) {
                    t.return = e.return,
                    L = t;
                    break
                }
                L = e.return
            }
    return m = yc,
    yc = !1,
    m
}
function Yi(t, e, n) {
    var i = e.updateQueue;
    if (i = i !== null ? i.lastEffect : null,
    i !== null) {
        var r = i = i.next;
        do {
            if ((r.tag & t) === t) {
                var s = r.destroy;
                r.destroy = void 0,
                s !== void 0 && Xl(e, n, s)
            }
            r = r.next
        } while (r !== i)
    }
}
function mo(t, e) {
    if (e = e.updateQueue,
    e = e !== null ? e.lastEffect : null,
    e !== null) {
        var n = e = e.next;
        do {
            if ((n.tag & t) === t) {
                var i = n.create;
                n.destroy = i()
            }
            n = n.next
        } while (n !== e)
    }
}
function Kl(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
        case 5:
            t = n;
            break;
        default:
            t = n
        }
        typeof e == "function" ? e(t) : e.current = t
    }
}
function Fh(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null,
    Fh(e)),
    t.child = null,
    t.deletions = null,
    t.sibling = null,
    t.tag === 5 && (e = t.stateNode,
    e !== null && (delete e[mt],
    delete e[ar],
    delete e[Dl],
    delete e[Nm],
    delete e[jm])),
    t.stateNode = null,
    t.return = null,
    t.dependencies = null,
    t.memoizedProps = null,
    t.memoizedState = null,
    t.pendingProps = null,
    t.stateNode = null,
    t.updateQueue = null
}
function Bh(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4
}
function vc(t) {
    e: for (; ; ) {
        for (; t.sibling === null; ) {
            if (t.return === null || Bh(t.return))
                return null;
            t = t.return
        }
        for (t.sibling.return = t.return,
        t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4)
                continue e;
            t.child.return = t,
            t = t.child
        }
        if (!(t.flags & 2))
            return t.stateNode
    }
}
function Ql(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
        t = t.stateNode,
        e ? n.nodeType === 8 ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (n.nodeType === 8 ? (e = n.parentNode,
        e.insertBefore(t, n)) : (e = n,
        e.appendChild(t)),
        n = n._reactRootContainer,
        n != null || e.onclick !== null || (e.onclick = Es));
    else if (i !== 4 && (t = t.child,
    t !== null))
        for (Ql(t, e, n),
        t = t.sibling; t !== null; )
            Ql(t, e, n),
            t = t.sibling
}
function Gl(t, e, n) {
    var i = t.tag;
    if (i === 5 || i === 6)
        t = t.stateNode,
        e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (i !== 4 && (t = t.child,
    t !== null))
        for (Gl(t, e, n),
        t = t.sibling; t !== null; )
            Gl(t, e, n),
            t = t.sibling
}
var ke = null
  , ot = !1;
function Nt(t, e, n) {
    for (n = n.child; n !== null; )
        Hh(t, e, n),
        n = n.sibling
}
function Hh(t, e, n) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
        try {
            vt.onCommitFiberUnmount(lo, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Me || Xn(n, e);
    case 6:
        var i = ke
          , r = ot;
        ke = null,
        Nt(t, e, n),
        ke = i,
        ot = r,
        ke !== null && (ot ? (t = ke,
        n = n.stateNode,
        t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n)) : ke.removeChild(n.stateNode));
        break;
    case 18:
        ke !== null && (ot ? (t = ke,
        n = n.stateNode,
        t.nodeType === 8 ? Uo(t.parentNode, n) : t.nodeType === 1 && Uo(t, n),
        ir(t)) : Uo(ke, n.stateNode));
        break;
    case 4:
        i = ke,
        r = ot,
        ke = n.stateNode.containerInfo,
        ot = !0,
        Nt(t, e, n),
        ke = i,
        ot = r;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Me && (i = n.updateQueue,
        i !== null && (i = i.lastEffect,
        i !== null))) {
            r = i = i.next;
            do {
                var s = r
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && Xl(n, e, o),
                r = r.next
            } while (r !== i)
        }
        Nt(t, e, n);
        break;
    case 1:
        if (!Me && (Xn(n, e),
        i = n.stateNode,
        typeof i.componentWillUnmount == "function"))
            try {
                i.props = n.memoizedProps,
                i.state = n.memoizedState,
                i.componentWillUnmount()
            } catch (l) {
                le(n, e, l)
            }
        Nt(t, e, n);
        break;
    case 21:
        Nt(t, e, n);
        break;
    case 22:
        n.mode & 1 ? (Me = (i = Me) || n.memoizedState !== null,
        Nt(t, e, n),
        Me = i) : Nt(t, e, n);
        break;
    default:
        Nt(t, e, n)
    }
}
function xc(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new $m),
        e.forEach(function(i) {
            var r = u1.bind(null, t, i);
            n.has(i) || (n.add(i),
            i.then(r, r))
        })
    }
}
function rt(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var i = 0; i < n.length; i++) {
            var r = n[i];
            try {
                var s = t
                  , o = e
                  , l = o;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        ke = l.stateNode,
                        ot = !1;
                        break e;
                    case 3:
                        ke = l.stateNode.containerInfo,
                        ot = !0;
                        break e;
                    case 4:
                        ke = l.stateNode.containerInfo,
                        ot = !0;
                        break e
                    }
                    l = l.return
                }
                if (ke === null)
                    throw Error(A(160));
                Hh(s, o, r),
                ke = null,
                ot = !1;
                var a = r.alternate;
                a !== null && (a.return = null),
                r.return = null
            } catch (u) {
                le(r, e, u)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; )
            Wh(e, t),
            e = e.sibling
}
function Wh(t, e) {
    var n = t.alternate
      , i = t.flags;
    switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (rt(e, t),
        ft(t),
        i & 4) {
            try {
                Yi(3, t, t.return),
                mo(3, t)
            } catch (v) {
                le(t, t.return, v)
            }
            try {
                Yi(5, t, t.return)
            } catch (v) {
                le(t, t.return, v)
            }
        }
        break;
    case 1:
        rt(e, t),
        ft(t),
        i & 512 && n !== null && Xn(n, n.return);
        break;
    case 5:
        if (rt(e, t),
        ft(t),
        i & 512 && n !== null && Xn(n, n.return),
        t.flags & 32) {
            var r = t.stateNode;
            try {
                $i(r, "")
            } catch (v) {
                le(t, t.return, v)
            }
        }
        if (i & 4 && (r = t.stateNode,
        r != null)) {
            var s = t.memoizedProps
              , o = n !== null ? n.memoizedProps : s
              , l = t.type
              , a = t.updateQueue;
            if (t.updateQueue = null,
            a !== null)
                try {
                    l === "input" && s.type === "radio" && s.name != null && cd(r, s),
                    xl(l, o);
                    var u = xl(l, s);
                    for (o = 0; o < a.length; o += 2) {
                        var c = a[o]
                          , f = a[o + 1];
                        c === "style" ? gd(r, f) : c === "dangerouslySetInnerHTML" ? hd(r, f) : c === "children" ? $i(r, f) : pa(r, c, f, u)
                    }
                    switch (l) {
                    case "input":
                        pl(r, s);
                        break;
                    case "textarea":
                        fd(r, s);
                        break;
                    case "select":
                        var d = r._wrapperState.wasMultiple;
                        r._wrapperState.wasMultiple = !!s.multiple;
                        var h = s.value;
                        h != null ? Gn(r, !!s.multiple, h, !1) : d !== !!s.multiple && (s.defaultValue != null ? Gn(r, !!s.multiple, s.defaultValue, !0) : Gn(r, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    r[ar] = s
                } catch (v) {
                    le(t, t.return, v)
                }
        }
        break;
    case 6:
        if (rt(e, t),
        ft(t),
        i & 4) {
            if (t.stateNode === null)
                throw Error(A(162));
            r = t.stateNode,
            s = t.memoizedProps;
            try {
                r.nodeValue = s
            } catch (v) {
                le(t, t.return, v)
            }
        }
        break;
    case 3:
        if (rt(e, t),
        ft(t),
        i & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                ir(e.containerInfo)
            } catch (v) {
                le(t, t.return, v)
            }
        break;
    case 4:
        rt(e, t),
        ft(t);
        break;
    case 13:
        rt(e, t),
        ft(t),
        r = t.child,
        r.flags & 8192 && (s = r.memoizedState !== null,
        r.stateNode.isHidden = s,
        !s || r.alternate !== null && r.alternate.memoizedState !== null || (Ka = ce())),
        i & 4 && xc(t);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        t.mode & 1 ? (Me = (u = Me) || c,
        rt(e, t),
        Me = u) : rt(e, t),
        ft(t),
        i & 8192) {
            if (u = t.memoizedState !== null,
            (t.stateNode.isHidden = u) && !c && t.mode & 1)
                for (L = t,
                c = t.child; c !== null; ) {
                    for (f = L = c; L !== null; ) {
                        switch (d = L,
                        h = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Yi(4, d, d.return);
                            break;
                        case 1:
                            Xn(d, d.return);
                            var m = d.stateNode;
                            if (typeof m.componentWillUnmount == "function") {
                                i = d,
                                n = d.return;
                                try {
                                    e = i,
                                    m.props = e.memoizedProps,
                                    m.state = e.memoizedState,
                                    m.componentWillUnmount()
                                } catch (v) {
                                    le(i, n, v)
                                }
                            }
                            break;
                        case 5:
                            Xn(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                kc(f);
                                continue
                            }
                        }
                        h !== null ? (h.return = d,
                        L = h) : kc(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = t; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            r = f.stateNode,
                            u ? (s = r.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = f.stateNode,
                            a = f.memoizedProps.style,
                            o = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = pd("display", o))
                        } catch (v) {
                            le(t, t.return, v)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (v) {
                            le(t, t.return, v)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === t) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === t)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === t)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        rt(e, t),
        ft(t),
        i & 4 && xc(t);
        break;
    case 21:
        break;
    default:
        rt(e, t),
        ft(t)
    }
}
function ft(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null; ) {
                    if (Bh(n)) {
                        var i = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(A(160))
            }
            switch (i.tag) {
            case 5:
                var r = i.stateNode;
                i.flags & 32 && ($i(r, ""),
                i.flags &= -33);
                var s = vc(t);
                Gl(t, s, r);
                break;
            case 3:
            case 4:
                var o = i.stateNode.containerInfo
                  , l = vc(t);
                Ql(t, l, o);
                break;
            default:
                throw Error(A(161))
            }
        } catch (a) {
            le(t, t.return, a)
        }
        t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
}
function t1(t, e, n) {
    L = t,
    Vh(t)
}
function Vh(t, e, n) {
    for (var i = (t.mode & 1) !== 0; L !== null; ) {
        var r = L
          , s = r.child;
        if (r.tag === 22 && i) {
            var o = r.memoizedState !== null || Wr;
            if (!o) {
                var l = r.alternate
                  , a = l !== null && l.memoizedState !== null || Me;
                l = Wr;
                var u = Me;
                if (Wr = o,
                (Me = a) && !u)
                    for (L = r; L !== null; )
                        o = L,
                        a = o.child,
                        o.tag === 22 && o.memoizedState !== null ? _c(r) : a !== null ? (a.return = o,
                        L = a) : _c(r);
                for (; s !== null; )
                    L = s,
                    Vh(s),
                    s = s.sibling;
                L = r,
                Wr = l,
                Me = u
            }
            wc(t)
        } else
            r.subtreeFlags & 8772 && s !== null ? (s.return = r,
            L = s) : wc(t)
    }
}
function wc(t) {
    for (; L !== null; ) {
        var e = L;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Me || mo(5, e);
                        break;
                    case 1:
                        var i = e.stateNode;
                        if (e.flags & 4 && !Me)
                            if (n === null)
                                i.componentDidMount();
                            else {
                                var r = e.elementType === e.type ? n.memoizedProps : st(e.type, n.memoizedProps);
                                i.componentDidUpdate(r, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = e.updateQueue;
                        s !== null && rc(e, s, i);
                        break;
                    case 3:
                        var o = e.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            e.child !== null)
                                switch (e.child.tag) {
                                case 5:
                                    n = e.child.stateNode;
                                    break;
                                case 1:
                                    n = e.child.stateNode
                                }
                            rc(e, o, n)
                        }
                        break;
                    case 5:
                        var l = e.stateNode;
                        if (n === null && e.flags & 4) {
                            n = l;
                            var a = e.memoizedProps;
                            switch (e.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var u = e.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && ir(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(A(163))
                    }
                Me || e.flags & 512 && Kl(e)
            } catch (d) {
                le(e, e.return, d)
            }
        }
        if (e === t) {
            L = null;
            break
        }
        if (n = e.sibling,
        n !== null) {
            n.return = e.return,
            L = n;
            break
        }
        L = e.return
    }
}
function kc(t) {
    for (; L !== null; ) {
        var e = L;
        if (e === t) {
            L = null;
            break
        }
        var n = e.sibling;
        if (n !== null) {
            n.return = e.return,
            L = n;
            break
        }
        L = e.return
    }
}
function _c(t) {
    for (; L !== null; ) {
        var e = L;
        try {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                var n = e.return;
                try {
                    mo(4, e)
                } catch (a) {
                    le(e, n, a)
                }
                break;
            case 1:
                var i = e.stateNode;
                if (typeof i.componentDidMount == "function") {
                    var r = e.return;
                    try {
                        i.componentDidMount()
                    } catch (a) {
                        le(e, r, a)
                    }
                }
                var s = e.return;
                try {
                    Kl(e)
                } catch (a) {
                    le(e, s, a)
                }
                break;
            case 5:
                var o = e.return;
                try {
                    Kl(e)
                } catch (a) {
                    le(e, o, a)
                }
            }
        } catch (a) {
            le(e, e.return, a)
        }
        if (e === t) {
            L = null;
            break
        }
        var l = e.sibling;
        if (l !== null) {
            l.return = e.return,
            L = l;
            break
        }
        L = e.return
    }
}
var n1 = Math.ceil
  , Fs = zt.ReactCurrentDispatcher
  , Ya = zt.ReactCurrentOwner
  , tt = zt.ReactCurrentBatchConfig
  , F = 0
  , we = null
  , he = null
  , Se = 0
  , Ue = 0
  , Kn = an(0)
  , me = 0
  , pr = null
  , An = 0
  , yo = 0
  , Xa = 0
  , Xi = null
  , Ne = null
  , Ka = 0
  , ui = 1 / 0
  , Ct = null
  , Bs = !1
  , Zl = null
  , $t = null
  , Vr = !1
  , Ut = null
  , Hs = 0
  , Ki = 0
  , Jl = null
  , ps = -1
  , gs = 0;
function Oe() {
    return F & 6 ? ce() : ps !== -1 ? ps : ps = ce()
}
function en(t) {
    return t.mode & 1 ? F & 2 && Se !== 0 ? Se & -Se : Fm.transition !== null ? (gs === 0 && (gs = Md()),
    gs) : (t = X,
    t !== 0 || (t = window.event,
    t = t === void 0 ? 16 : Rd(t.type)),
    t) : 1
}
function ut(t, e, n, i) {
    if (50 < Ki)
        throw Ki = 0,
        Jl = null,
        Error(A(185));
    kr(t, n, i),
    (!(F & 2) || t !== we) && (t === we && (!(F & 2) && (yo |= n),
    me === 4 && Wt(t, Se)),
    He(t, i),
    n === 1 && F === 0 && !(e.mode & 1) && (ui = ce() + 500,
    ho && un()))
}
function He(t, e) {
    var n = t.callbackNode;
    Fg(t, e);
    var i = Cs(t, t === we ? Se : 0);
    if (i === 0)
        n !== null && Ou(n),
        t.callbackNode = null,
        t.callbackPriority = 0;
    else if (e = i & -i,
    t.callbackPriority !== e) {
        if (n != null && Ou(n),
        e === 1)
            t.tag === 0 ? Im(Sc.bind(null, t)) : $d(Sc.bind(null, t)),
            Rm(function() {
                !(F & 6) && un()
            }),
            n = null;
        else {
            switch (Ed(i)) {
            case 1:
                n = xa;
                break;
            case 4:
                n = bd;
                break;
            case 16:
                n = Ss;
                break;
            case 536870912:
                n = Ad;
                break;
            default:
                n = Ss
            }
            n = Jh(n, Uh.bind(null, t))
        }
        t.callbackPriority = e,
        t.callbackNode = n
    }
}
function Uh(t, e) {
    if (ps = -1,
    gs = 0,
    F & 6)
        throw Error(A(327));
    var n = t.callbackNode;
    if (ei() && t.callbackNode !== n)
        return null;
    var i = Cs(t, t === we ? Se : 0);
    if (i === 0)
        return null;
    if (i & 30 || i & t.expiredLanes || e)
        e = Ws(t, i);
    else {
        e = i;
        var r = F;
        F |= 2;
        var s = Xh();
        (we !== t || Se !== e) && (Ct = null,
        ui = ce() + 500,
        wn(t, e));
        do
            try {
                s1();
                break
            } catch (l) {
                Yh(t, l)
            }
        while (!0);
        Ta(),
        Fs.current = s,
        F = r,
        he !== null ? e = 0 : (we = null,
        Se = 0,
        e = me)
    }
    if (e !== 0) {
        if (e === 2 && (r = Cl(t),
        r !== 0 && (i = r,
        e = ql(t, r))),
        e === 1)
            throw n = pr,
            wn(t, 0),
            Wt(t, i),
            He(t, ce()),
            n;
        if (e === 6)
            Wt(t, i);
        else {
            if (r = t.current.alternate,
            !(i & 30) && !i1(r) && (e = Ws(t, i),
            e === 2 && (s = Cl(t),
            s !== 0 && (i = s,
            e = ql(t, s))),
            e === 1))
                throw n = pr,
                wn(t, 0),
                Wt(t, i),
                He(t, ce()),
                n;
            switch (t.finishedWork = r,
            t.finishedLanes = i,
            e) {
            case 0:
            case 1:
                throw Error(A(345));
            case 2:
                gn(t, Ne, Ct);
                break;
            case 3:
                if (Wt(t, i),
                (i & 130023424) === i && (e = Ka + 500 - ce(),
                10 < e)) {
                    if (Cs(t, 0) !== 0)
                        break;
                    if (r = t.suspendedLanes,
                    (r & i) !== i) {
                        Oe(),
                        t.pingedLanes |= t.suspendedLanes & r;
                        break
                    }
                    t.timeoutHandle = Tl(gn.bind(null, t, Ne, Ct), e);
                    break
                }
                gn(t, Ne, Ct);
                break;
            case 4:
                if (Wt(t, i),
                (i & 4194240) === i)
                    break;
                for (e = t.eventTimes,
                r = -1; 0 < i; ) {
                    var o = 31 - at(i);
                    s = 1 << o,
                    o = e[o],
                    o > r && (r = o),
                    i &= ~s
                }
                if (i = r,
                i = ce() - i,
                i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * n1(i / 1960)) - i,
                10 < i) {
                    t.timeoutHandle = Tl(gn.bind(null, t, Ne, Ct), i);
                    break
                }
                gn(t, Ne, Ct);
                break;
            case 5:
                gn(t, Ne, Ct);
                break;
            default:
                throw Error(A(329))
            }
        }
    }
    return He(t, ce()),
    t.callbackNode === n ? Uh.bind(null, t) : null
}
function ql(t, e) {
    var n = Xi;
    return t.current.memoizedState.isDehydrated && (wn(t, e).flags |= 256),
    t = Ws(t, e),
    t !== 2 && (e = Ne,
    Ne = n,
    e !== null && $l(e)),
    t
}
function $l(t) {
    Ne === null ? Ne = t : Ne.push.apply(Ne, t)
}
function i1(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var i = 0; i < n.length; i++) {
                    var r = n[i]
                      , s = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!ct(s(), r))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = e.child,
        e.subtreeFlags & 16384 && n !== null)
            n.return = e,
            e = n;
        else {
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return !0;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
    }
    return !0
}
function Wt(t, e) {
    for (e &= ~Xa,
    e &= ~yo,
    t.suspendedLanes |= e,
    t.pingedLanes &= ~e,
    t = t.expirationTimes; 0 < e; ) {
        var n = 31 - at(e)
          , i = 1 << n;
        t[n] = -1,
        e &= ~i
    }
}
function Sc(t) {
    if (F & 6)
        throw Error(A(327));
    ei();
    var e = Cs(t, 0);
    if (!(e & 1))
        return He(t, ce()),
        null;
    var n = Ws(t, e);
    if (t.tag !== 0 && n === 2) {
        var i = Cl(t);
        i !== 0 && (e = i,
        n = ql(t, i))
    }
    if (n === 1)
        throw n = pr,
        wn(t, 0),
        Wt(t, e),
        He(t, ce()),
        n;
    if (n === 6)
        throw Error(A(345));
    return t.finishedWork = t.current.alternate,
    t.finishedLanes = e,
    gn(t, Ne, Ct),
    He(t, ce()),
    null
}
function Qa(t, e) {
    var n = F;
    F |= 1;
    try {
        return t(e)
    } finally {
        F = n,
        F === 0 && (ui = ce() + 500,
        ho && un())
    }
}
function Mn(t) {
    Ut !== null && Ut.tag === 0 && !(F & 6) && ei();
    var e = F;
    F |= 1;
    var n = tt.transition
      , i = X;
    try {
        if (tt.transition = null,
        X = 1,
        t)
            return t()
    } finally {
        X = i,
        tt.transition = n,
        F = e,
        !(F & 6) && un()
    }
}
function Ga() {
    Ue = Kn.current,
    J(Kn)
}
function wn(t, e) {
    t.finishedWork = null,
    t.finishedLanes = 0;
    var n = t.timeoutHandle;
    if (n !== -1 && (t.timeoutHandle = -1,
    Dm(n)),
    he !== null)
        for (n = he.return; n !== null; ) {
            var i = n;
            switch (Pa(i),
            i.tag) {
            case 1:
                i = i.type.childContextTypes,
                i != null && Ps();
                break;
            case 3:
                li(),
                J(Fe),
                J(Ee),
                Ia();
                break;
            case 5:
                ja(i);
                break;
            case 4:
                li();
                break;
            case 13:
                J(te);
                break;
            case 19:
                J(te);
                break;
            case 10:
                Da(i.type._context);
                break;
            case 22:
            case 23:
                Ga()
            }
            n = n.return
        }
    if (we = t,
    he = t = tn(t.current, null),
    Se = Ue = e,
    me = 0,
    pr = null,
    Xa = yo = An = 0,
    Ne = Xi = null,
    vn !== null) {
        for (e = 0; e < vn.length; e++)
            if (n = vn[e],
            i = n.interleaved,
            i !== null) {
                n.interleaved = null;
                var r = i.next
                  , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = r,
                    i.next = o
                }
                n.pending = i
            }
        vn = null
    }
    return t
}
function Yh(t, e) {
    do {
        var n = he;
        try {
            if (Ta(),
            fs.current = Is,
            js) {
                for (var i = ie.memoizedState; i !== null; ) {
                    var r = i.queue;
                    r !== null && (r.pending = null),
                    i = i.next
                }
                js = !1
            }
            if (bn = 0,
            ve = ge = ie = null,
            Ui = !1,
            fr = 0,
            Ya.current = null,
            n === null || n.return === null) {
                me = 1,
                pr = e,
                he = null;
                break
            }
            e: {
                var s = t
                  , o = n.return
                  , l = n
                  , a = e;
                if (e = Se,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue,
                        c.memoizedState = d.memoizedState,
                        c.lanes = d.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var h = cc(o);
                    if (h !== null) {
                        h.flags &= -257,
                        fc(h, o, l, s, e),
                        h.mode & 1 && uc(s, u, e),
                        e = h,
                        a = u;
                        var m = e.updateQueue;
                        if (m === null) {
                            var v = new Set;
                            v.add(a),
                            e.updateQueue = v
                        } else
                            m.add(a);
                        break e
                    } else {
                        if (!(e & 1)) {
                            uc(s, u, e),
                            Za();
                            break e
                        }
                        a = Error(A(426))
                    }
                } else if ($ && l.mode & 1) {
                    var x = cc(o);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        fc(x, o, l, s, e),
                        La(ai(a, l));
                        break e
                    }
                }
                s = a = ai(a, l),
                me !== 4 && (me = 2),
                Xi === null ? Xi = [s] : Xi.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        e &= -e,
                        s.lanes |= e;
                        var g = Eh(s, a, e);
                        ic(s, g);
                        break e;
                    case 1:
                        l = a;
                        var p = s.type
                          , y = s.stateNode;
                        if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && ($t === null || !$t.has(y)))) {
                            s.flags |= 65536,
                            e &= -e,
                            s.lanes |= e;
                            var w = Ph(s, l, e);
                            ic(s, w);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            Qh(n)
        } catch (k) {
            e = k,
            he === n && n !== null && (he = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Xh() {
    var t = Fs.current;
    return Fs.current = Is,
    t === null ? Is : t
}
function Za() {
    (me === 0 || me === 3 || me === 2) && (me = 4),
    we === null || !(An & 268435455) && !(yo & 268435455) || Wt(we, Se)
}
function Ws(t, e) {
    var n = F;
    F |= 2;
    var i = Xh();
    (we !== t || Se !== e) && (Ct = null,
    wn(t, e));
    do
        try {
            r1();
            break
        } catch (r) {
            Yh(t, r)
        }
    while (!0);
    if (Ta(),
    F = n,
    Fs.current = i,
    he !== null)
        throw Error(A(261));
    return we = null,
    Se = 0,
    me
}
function r1() {
    for (; he !== null; )
        Kh(he)
}
function s1() {
    for (; he !== null && !Lg(); )
        Kh(he)
}
function Kh(t) {
    var e = Zh(t.alternate, t, Ue);
    t.memoizedProps = t.pendingProps,
    e === null ? Qh(t) : he = e,
    Ya.current = null
}
function Qh(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (t = e.return,
        e.flags & 32768) {
            if (n = qm(n, e),
            n !== null) {
                n.flags &= 32767,
                he = n;
                return
            }
            if (t !== null)
                t.flags |= 32768,
                t.subtreeFlags = 0,
                t.deletions = null;
            else {
                me = 6,
                he = null;
                return
            }
        } else if (n = Jm(n, e, Ue),
        n !== null) {
            he = n;
            return
        }
        if (e = e.sibling,
        e !== null) {
            he = e;
            return
        }
        he = e = t
    } while (e !== null);
    me === 0 && (me = 5)
}
function gn(t, e, n) {
    var i = X
      , r = tt.transition;
    try {
        tt.transition = null,
        X = 1,
        o1(t, e, n, i)
    } finally {
        tt.transition = r,
        X = i
    }
    return null
}
function o1(t, e, n, i) {
    do
        ei();
    while (Ut !== null);
    if (F & 6)
        throw Error(A(327));
    n = t.finishedWork;
    var r = t.finishedLanes;
    if (n === null)
        return null;
    if (t.finishedWork = null,
    t.finishedLanes = 0,
    n === t.current)
        throw Error(A(177));
    t.callbackNode = null,
    t.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (Bg(t, s),
    t === we && (he = we = null,
    Se = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Vr || (Vr = !0,
    Jh(Ss, function() {
        return ei(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = tt.transition,
        tt.transition = null;
        var o = X;
        X = 1;
        var l = F;
        F |= 4,
        Ya.current = null,
        e1(t, n),
        Wh(n, t),
        Am(Ll),
        bs = !!Pl,
        Ll = Pl = null,
        t.current = n,
        t1(n),
        Og(),
        F = l,
        X = o,
        tt.transition = s
    } else
        t.current = n;
    if (Vr && (Vr = !1,
    Ut = t,
    Hs = r),
    s = t.pendingLanes,
    s === 0 && ($t = null),
    Rg(n.stateNode),
    He(t, ce()),
    e !== null)
        for (i = t.onRecoverableError,
        n = 0; n < e.length; n++)
            r = e[n],
            i(r.value, {
                componentStack: r.stack,
                digest: r.digest
            });
    if (Bs)
        throw Bs = !1,
        t = Zl,
        Zl = null,
        t;
    return Hs & 1 && t.tag !== 0 && ei(),
    s = t.pendingLanes,
    s & 1 ? t === Jl ? Ki++ : (Ki = 0,
    Jl = t) : Ki = 0,
    un(),
    null
}
function ei() {
    if (Ut !== null) {
        var t = Ed(Hs)
          , e = tt.transition
          , n = X;
        try {
            if (tt.transition = null,
            X = 16 > t ? 16 : t,
            Ut === null)
                var i = !1;
            else {
                if (t = Ut,
                Ut = null,
                Hs = 0,
                F & 6)
                    throw Error(A(331));
                var r = F;
                for (F |= 4,
                L = t.current; L !== null; ) {
                    var s = L
                      , o = s.child;
                    if (L.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (L = u; L !== null; ) {
                                    var c = L;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Yi(8, c, s)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        L = f;
                                    else
                                        for (; L !== null; ) {
                                            c = L;
                                            var d = c.sibling
                                              , h = c.return;
                                            if (Fh(c),
                                            c === u) {
                                                L = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = h,
                                                L = d;
                                                break
                                            }
                                            L = h
                                        }
                                }
                            }
                            var m = s.alternate;
                            if (m !== null) {
                                var v = m.child;
                                if (v !== null) {
                                    m.child = null;
                                    do {
                                        var x = v.sibling;
                                        v.sibling = null,
                                        v = x
                                    } while (v !== null)
                                }
                            }
                            L = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        L = o;
                    else
                        e: for (; L !== null; ) {
                            if (s = L,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Yi(9, s, s.return)
                                }
                            var g = s.sibling;
                            if (g !== null) {
                                g.return = s.return,
                                L = g;
                                break e
                            }
                            L = s.return
                        }
                }
                var p = t.current;
                for (L = p; L !== null; ) {
                    o = L;
                    var y = o.child;
                    if (o.subtreeFlags & 2064 && y !== null)
                        y.return = o,
                        L = y;
                    else
                        e: for (o = p; L !== null; ) {
                            if (l = L,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        mo(9, l)
                                    }
                                } catch (k) {
                                    le(l, l.return, k)
                                }
                            if (l === o) {
                                L = null;
                                break e
                            }
                            var w = l.sibling;
                            if (w !== null) {
                                w.return = l.return,
                                L = w;
                                break e
                            }
                            L = l.return
                        }
                }
                if (F = r,
                un(),
                vt && typeof vt.onPostCommitFiberRoot == "function")
                    try {
                        vt.onPostCommitFiberRoot(lo, t)
                    } catch {}
                i = !0
            }
            return i
        } finally {
            X = n,
            tt.transition = e
        }
    }
    return !1
}
function Cc(t, e, n) {
    e = ai(n, e),
    e = Eh(t, e, 1),
    t = qt(t, e, 1),
    e = Oe(),
    t !== null && (kr(t, 1, e),
    He(t, e))
}
function le(t, e, n) {
    if (t.tag === 3)
        Cc(t, t, n);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                Cc(e, t, n);
                break
            } else if (e.tag === 1) {
                var i = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && ($t === null || !$t.has(i))) {
                    t = ai(n, t),
                    t = Ph(e, t, 1),
                    e = qt(e, t, 1),
                    t = Oe(),
                    e !== null && (kr(e, 1, t),
                    He(e, t));
                    break
                }
            }
            e = e.return
        }
}
function l1(t, e, n) {
    var i = t.pingCache;
    i !== null && i.delete(e),
    e = Oe(),
    t.pingedLanes |= t.suspendedLanes & n,
    we === t && (Se & n) === n && (me === 4 || me === 3 && (Se & 130023424) === Se && 500 > ce() - Ka ? wn(t, 0) : Xa |= n),
    He(t, e)
}
function Gh(t, e) {
    e === 0 && (t.mode & 1 ? (e = Dr,
    Dr <<= 1,
    !(Dr & 130023424) && (Dr = 4194304)) : e = 1);
    var n = Oe();
    t = Dt(t, e),
    t !== null && (kr(t, e, n),
    He(t, n))
}
function a1(t) {
    var e = t.memoizedState
      , n = 0;
    e !== null && (n = e.retryLane),
    Gh(t, n)
}
function u1(t, e) {
    var n = 0;
    switch (t.tag) {
    case 13:
        var i = t.stateNode
          , r = t.memoizedState;
        r !== null && (n = r.retryLane);
        break;
    case 19:
        i = t.stateNode;
        break;
    default:
        throw Error(A(314))
    }
    i !== null && i.delete(e),
    Gh(t, n)
}
var Zh;
Zh = function(t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || Fe.current)
            Ie = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128))
                return Ie = !1,
                Zm(t, e, n);
            Ie = !!(t.flags & 131072)
        }
    else
        Ie = !1,
        $ && e.flags & 1048576 && eh(e, Ts, e.index);
    switch (e.lanes = 0,
    e.tag) {
    case 2:
        var i = e.type;
        hs(t, e),
        t = e.pendingProps;
        var r = ri(e, Ee.current);
        $n(e, n),
        r = Ba(null, e, i, t, r, n);
        var s = Ha();
        return e.flags |= 1,
        typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (e.tag = 1,
        e.memoizedState = null,
        e.updateQueue = null,
        Be(i) ? (s = !0,
        Ls(e)) : s = !1,
        e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null,
        za(e),
        r.updater = go,
        e.stateNode = r,
        r._reactInternals = e,
        Fl(e, i, t, n),
        e = Wl(null, e, i, !0, s, n)) : (e.tag = 0,
        $ && s && Ea(e),
        Le(null, e, r, n),
        e = e.child),
        e;
    case 16:
        i = e.elementType;
        e: {
            switch (hs(t, e),
            t = e.pendingProps,
            r = i._init,
            i = r(i._payload),
            e.type = i,
            r = e.tag = f1(i),
            t = st(i, t),
            r) {
            case 0:
                e = Hl(null, e, i, t, n);
                break e;
            case 1:
                e = pc(null, e, i, t, n);
                break e;
            case 11:
                e = dc(null, e, i, t, n);
                break e;
            case 14:
                e = hc(null, e, i, st(i.type, t), n);
                break e
            }
            throw Error(A(306, i, ""))
        }
        return e;
    case 0:
        return i = e.type,
        r = e.pendingProps,
        r = e.elementType === i ? r : st(i, r),
        Hl(t, e, i, r, n);
    case 1:
        return i = e.type,
        r = e.pendingProps,
        r = e.elementType === i ? r : st(i, r),
        pc(t, e, i, r, n);
    case 3:
        e: {
            if (Dh(e),
            t === null)
                throw Error(A(387));
            i = e.pendingProps,
            s = e.memoizedState,
            r = s.element,
            oh(t, e),
            zs(e, i, null, n);
            var o = e.memoizedState;
            if (i = o.element,
            s.isDehydrated)
                if (s = {
                    element: i,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                e.updateQueue.baseState = s,
                e.memoizedState = s,
                e.flags & 256) {
                    r = ai(Error(A(423)), e),
                    e = gc(t, e, i, n, r);
                    break e
                } else if (i !== r) {
                    r = ai(Error(A(424)), e),
                    e = gc(t, e, i, n, r);
                    break e
                } else
                    for (Ye = Jt(e.stateNode.containerInfo.firstChild),
                    Xe = e,
                    $ = !0,
                    lt = null,
                    n = rh(e, null, i, n),
                    e.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (si(),
                i === r) {
                    e = Rt(t, e, n);
                    break e
                }
                Le(t, e, i, n)
            }
            e = e.child
        }
        return e;
    case 5:
        return lh(e),
        t === null && Nl(e),
        i = e.type,
        r = e.pendingProps,
        s = t !== null ? t.memoizedProps : null,
        o = r.children,
        Ol(i, r) ? o = null : s !== null && Ol(i, s) && (e.flags |= 32),
        Th(t, e),
        Le(t, e, o, n),
        e.child;
    case 6:
        return t === null && Nl(e),
        null;
    case 13:
        return Rh(t, e, n);
    case 4:
        return Na(e, e.stateNode.containerInfo),
        i = e.pendingProps,
        t === null ? e.child = oi(e, null, i, n) : Le(t, e, i, n),
        e.child;
    case 11:
        return i = e.type,
        r = e.pendingProps,
        r = e.elementType === i ? r : st(i, r),
        dc(t, e, i, r, n);
    case 7:
        return Le(t, e, e.pendingProps, n),
        e.child;
    case 8:
        return Le(t, e, e.pendingProps.children, n),
        e.child;
    case 12:
        return Le(t, e, e.pendingProps.children, n),
        e.child;
    case 10:
        e: {
            if (i = e.type._context,
            r = e.pendingProps,
            s = e.memoizedProps,
            o = r.value,
            G(Ds, i._currentValue),
            i._currentValue = o,
            s !== null)
                if (ct(s.value, o)) {
                    if (s.children === r.children && !Fe.current) {
                        e = Rt(t, e, n);
                        break e
                    }
                } else
                    for (s = e.child,
                    s !== null && (s.return = e); s !== null; ) {
                        var l = s.dependencies;
                        if (l !== null) {
                            o = s.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === i) {
                                    if (s.tag === 1) {
                                        a = Lt(-1, n & -n),
                                        a.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    s.lanes |= n,
                                    a = s.alternate,
                                    a !== null && (a.lanes |= n),
                                    jl(s.return, n, e),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === e.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(A(341));
                            o.lanes |= n,
                            l = o.alternate,
                            l !== null && (l.lanes |= n),
                            jl(o, n, e),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === e) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            Le(t, e, r.children, n),
            e = e.child
        }
        return e;
    case 9:
        return r = e.type,
        i = e.pendingProps.children,
        $n(e, n),
        r = nt(r),
        i = i(r),
        e.flags |= 1,
        Le(t, e, i, n),
        e.child;
    case 14:
        return i = e.type,
        r = st(i, e.pendingProps),
        r = st(i.type, r),
        hc(t, e, i, r, n);
    case 15:
        return Lh(t, e, e.type, e.pendingProps, n);
    case 17:
        return i = e.type,
        r = e.pendingProps,
        r = e.elementType === i ? r : st(i, r),
        hs(t, e),
        e.tag = 1,
        Be(i) ? (t = !0,
        Ls(e)) : t = !1,
        $n(e, n),
        Mh(e, i, r),
        Fl(e, i, r, n),
        Wl(null, e, i, !0, t, n);
    case 19:
        return zh(t, e, n);
    case 22:
        return Oh(t, e, n)
    }
    throw Error(A(156, e.tag))
}
;
function Jh(t, e) {
    return Cd(t, e)
}
function c1(t, e, n, i) {
    this.tag = t,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = e,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = i,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function $e(t, e, n, i) {
    return new c1(t,e,n,i)
}
function Ja(t) {
    return t = t.prototype,
    !(!t || !t.isReactComponent)
}
function f1(t) {
    if (typeof t == "function")
        return Ja(t) ? 1 : 0;
    if (t != null) {
        if (t = t.$$typeof,
        t === ma)
            return 11;
        if (t === ya)
            return 14
    }
    return 2
}
function tn(t, e) {
    var n = t.alternate;
    return n === null ? (n = $e(t.tag, e, t.key, t.mode),
    n.elementType = t.elementType,
    n.type = t.type,
    n.stateNode = t.stateNode,
    n.alternate = t,
    t.alternate = n) : (n.pendingProps = e,
    n.type = t.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = t.flags & 14680064,
    n.childLanes = t.childLanes,
    n.lanes = t.lanes,
    n.child = t.child,
    n.memoizedProps = t.memoizedProps,
    n.memoizedState = t.memoizedState,
    n.updateQueue = t.updateQueue,
    e = t.dependencies,
    n.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    },
    n.sibling = t.sibling,
    n.index = t.index,
    n.ref = t.ref,
    n
}
function ms(t, e, n, i, r, s) {
    var o = 2;
    if (i = t,
    typeof t == "function")
        Ja(t) && (o = 1);
    else if (typeof t == "string")
        o = 5;
    else
        e: switch (t) {
        case jn:
            return kn(n.children, r, s, e);
        case ga:
            o = 8,
            r |= 8;
            break;
        case ul:
            return t = $e(12, n, e, r | 2),
            t.elementType = ul,
            t.lanes = s,
            t;
        case cl:
            return t = $e(13, n, e, r),
            t.elementType = cl,
            t.lanes = s,
            t;
        case fl:
            return t = $e(19, n, e, r),
            t.elementType = fl,
            t.lanes = s,
            t;
        case ld:
            return vo(n, r, s, e);
        default:
            if (typeof t == "object" && t !== null)
                switch (t.$$typeof) {
                case sd:
                    o = 10;
                    break e;
                case od:
                    o = 9;
                    break e;
                case ma:
                    o = 11;
                    break e;
                case ya:
                    o = 14;
                    break e;
                case Ft:
                    o = 16,
                    i = null;
                    break e
                }
            throw Error(A(130, t == null ? t : typeof t, ""))
        }
    return e = $e(o, n, e, r),
    e.elementType = t,
    e.type = i,
    e.lanes = s,
    e
}
function kn(t, e, n, i) {
    return t = $e(7, t, i, e),
    t.lanes = n,
    t
}
function vo(t, e, n, i) {
    return t = $e(22, t, i, e),
    t.elementType = ld,
    t.lanes = n,
    t.stateNode = {
        isHidden: !1
    },
    t
}
function qo(t, e, n) {
    return t = $e(6, t, null, e),
    t.lanes = n,
    t
}
function $o(t, e, n) {
    return e = $e(4, t.children !== null ? t.children : [], t.key, e),
    e.lanes = n,
    e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
    },
    e
}
function d1(t, e, n, i, r) {
    this.tag = e,
    this.containerInfo = t,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Do(0),
    this.expirationTimes = Do(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Do(0),
    this.identifierPrefix = i,
    this.onRecoverableError = r,
    this.mutableSourceEagerHydrationData = null
}
function qa(t, e, n, i, r, s, o, l, a) {
    return t = new d1(t,e,n,l,a),
    e === 1 ? (e = 1,
    s === !0 && (e |= 8)) : e = 0,
    s = $e(3, null, null, e),
    t.current = s,
    s.stateNode = t,
    s.memoizedState = {
        element: i,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    za(s),
    t
}
function h1(t, e, n) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Nn,
        key: i == null ? null : "" + i,
        children: t,
        containerInfo: e,
        implementation: n
    }
}
function qh(t) {
    if (!t)
        return sn;
    t = t._reactInternals;
    e: {
        if (On(t) !== t || t.tag !== 1)
            throw Error(A(170));
        var e = t;
        do {
            switch (e.tag) {
            case 3:
                e = e.stateNode.context;
                break e;
            case 1:
                if (Be(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            e = e.return
        } while (e !== null);
        throw Error(A(171))
    }
    if (t.tag === 1) {
        var n = t.type;
        if (Be(n))
            return qd(t, n, e)
    }
    return e
}
function $h(t, e, n, i, r, s, o, l, a) {
    return t = qa(n, i, !0, t, r, s, o, l, a),
    t.context = qh(null),
    n = t.current,
    i = Oe(),
    r = en(n),
    s = Lt(i, r),
    s.callback = e ?? null,
    qt(n, s, r),
    t.current.lanes = r,
    kr(t, r, i),
    He(t, i),
    t
}
function xo(t, e, n, i) {
    var r = e.current
      , s = Oe()
      , o = en(r);
    return n = qh(n),
    e.context === null ? e.context = n : e.pendingContext = n,
    e = Lt(s, o),
    e.payload = {
        element: t
    },
    i = i === void 0 ? null : i,
    i !== null && (e.callback = i),
    t = qt(r, e, o),
    t !== null && (ut(t, r, o, s),
    cs(t, r, o)),
    o
}
function Vs(t) {
    if (t = t.current,
    !t.child)
        return null;
    switch (t.child.tag) {
    case 5:
        return t.child.stateNode;
    default:
        return t.child.stateNode
    }
}
function bc(t, e) {
    if (t = t.memoizedState,
    t !== null && t.dehydrated !== null) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e
    }
}
function $a(t, e) {
    bc(t, e),
    (t = t.alternate) && bc(t, e)
}
function p1() {
    return null
}
var ep = typeof reportError == "function" ? reportError : function(t) {
    console.error(t)
}
;
function eu(t) {
    this._internalRoot = t
}
wo.prototype.render = eu.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null)
        throw Error(A(409));
    xo(t, e, null, null)
}
;
wo.prototype.unmount = eu.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Mn(function() {
            xo(null, t, null, null)
        }),
        e[Tt] = null
    }
}
;
function wo(t) {
    this._internalRoot = t
}
wo.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
        var e = Od();
        t = {
            blockedOn: null,
            target: t,
            priority: e
        };
        for (var n = 0; n < Ht.length && e !== 0 && e < Ht[n].priority; n++)
            ;
        Ht.splice(n, 0, t),
        n === 0 && Dd(t)
    }
}
;
function tu(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
}
function ko(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
}
function Ac() {}
function g1(t, e, n, i, r) {
    if (r) {
        if (typeof i == "function") {
            var s = i;
            i = function() {
                var u = Vs(o);
                s.call(u)
            }
        }
        var o = $h(e, i, t, 0, null, !1, !1, "", Ac);
        return t._reactRootContainer = o,
        t[Tt] = o.current,
        or(t.nodeType === 8 ? t.parentNode : t),
        Mn(),
        o
    }
    for (; r = t.lastChild; )
        t.removeChild(r);
    if (typeof i == "function") {
        var l = i;
        i = function() {
            var u = Vs(a);
            l.call(u)
        }
    }
    var a = qa(t, 0, !1, null, null, !1, !1, "", Ac);
    return t._reactRootContainer = a,
    t[Tt] = a.current,
    or(t.nodeType === 8 ? t.parentNode : t),
    Mn(function() {
        xo(e, a, n, i)
    }),
    a
}
function _o(t, e, n, i, r) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof r == "function") {
            var l = r;
            r = function() {
                var a = Vs(o);
                l.call(a)
            }
        }
        xo(e, o, t, r)
    } else
        o = g1(n, e, t, r, i);
    return Vs(o)
}
Pd = function(t) {
    switch (t.tag) {
    case 3:
        var e = t.stateNode;
        if (e.current.memoizedState.isDehydrated) {
            var n = Oi(e.pendingLanes);
            n !== 0 && (wa(e, n | 1),
            He(e, ce()),
            !(F & 6) && (ui = ce() + 500,
            un()))
        }
        break;
    case 13:
        Mn(function() {
            var i = Dt(t, 1);
            if (i !== null) {
                var r = Oe();
                ut(i, t, 1, r)
            }
        }),
        $a(t, 1)
    }
}
;
ka = function(t) {
    if (t.tag === 13) {
        var e = Dt(t, 134217728);
        if (e !== null) {
            var n = Oe();
            ut(e, t, 134217728, n)
        }
        $a(t, 134217728)
    }
}
;
Ld = function(t) {
    if (t.tag === 13) {
        var e = en(t)
          , n = Dt(t, e);
        if (n !== null) {
            var i = Oe();
            ut(n, t, e, i)
        }
        $a(t, e)
    }
}
;
Od = function() {
    return X
}
;
Td = function(t, e) {
    var n = X;
    try {
        return X = t,
        e()
    } finally {
        X = n
    }
}
;
kl = function(t, e, n) {
    switch (e) {
    case "input":
        if (pl(t, n),
        e = n.name,
        n.type === "radio" && e != null) {
            for (n = t; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'),
            e = 0; e < n.length; e++) {
                var i = n[e];
                if (i !== t && i.form === t.form) {
                    var r = fo(i);
                    if (!r)
                        throw Error(A(90));
                    ud(i),
                    pl(i, r)
                }
            }
        }
        break;
    case "textarea":
        fd(t, n);
        break;
    case "select":
        e = n.value,
        e != null && Gn(t, !!n.multiple, e, !1)
    }
}
;
vd = Qa;
xd = Mn;
var m1 = {
    usingClientEntryPoint: !1,
    Events: [Sr, Hn, fo, md, yd, Qa]
}
  , Si = {
    findFiberByHostInstance: yn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , y1 = {
    bundleType: Si.bundleType,
    version: Si.version,
    rendererPackageName: Si.rendererPackageName,
    rendererConfig: Si.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(t) {
        return t = _d(t),
        t === null ? null : t.stateNode
    },
    findFiberByHostInstance: Si.findFiberByHostInstance || p1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ur.isDisabled && Ur.supportsFiber)
        try {
            lo = Ur.inject(y1),
            vt = Ur
        } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m1;
Qe.createPortal = function(t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!tu(e))
        throw Error(A(200));
    return h1(t, e, null, n)
}
;
Qe.createRoot = function(t, e) {
    if (!tu(t))
        throw Error(A(299));
    var n = !1
      , i = ""
      , r = ep;
    return e != null && (e.unstable_strictMode === !0 && (n = !0),
    e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
    e.onRecoverableError !== void 0 && (r = e.onRecoverableError)),
    e = qa(t, 1, !1, null, null, n, !1, i, r),
    t[Tt] = e.current,
    or(t.nodeType === 8 ? t.parentNode : t),
    new eu(e)
}
;
Qe.findDOMNode = function(t) {
    if (t == null)
        return null;
    if (t.nodeType === 1)
        return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function" ? Error(A(188)) : (t = Object.keys(t).join(","),
        Error(A(268, t)));
    return t = _d(e),
    t = t === null ? null : t.stateNode,
    t
}
;
Qe.flushSync = function(t) {
    return Mn(t)
}
;
Qe.hydrate = function(t, e, n) {
    if (!ko(e))
        throw Error(A(200));
    return _o(null, t, e, !0, n)
}
;
Qe.hydrateRoot = function(t, e, n) {
    if (!tu(t))
        throw Error(A(405));
    var i = n != null && n.hydratedSources || null
      , r = !1
      , s = ""
      , o = ep;
    if (n != null && (n.unstable_strictMode === !0 && (r = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    e = $h(e, null, t, 1, n ?? null, r, !1, s, o),
    t[Tt] = e.current,
    or(t),
    i)
        for (t = 0; t < i.length; t++)
            n = i[t],
            r = n._getVersion,
            r = r(n._source),
            e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [n, r] : e.mutableSourceEagerHydrationData.push(n, r);
    return new wo(e)
}
;
Qe.render = function(t, e, n) {
    if (!ko(e))
        throw Error(A(200));
    return _o(null, t, e, !1, n)
}
;
Qe.unmountComponentAtNode = function(t) {
    if (!ko(t))
        throw Error(A(40));
    return t._reactRootContainer ? (Mn(function() {
        _o(null, null, t, !1, function() {
            t._reactRootContainer = null,
            t[Tt] = null
        })
    }),
    !0) : !1
}
;
Qe.unstable_batchedUpdates = Qa;
Qe.unstable_renderSubtreeIntoContainer = function(t, e, n, i) {
    if (!ko(n))
        throw Error(A(200));
    if (t == null || t._reactInternals === void 0)
        throw Error(A(38));
    return _o(t, e, n, !1, i)
}
;
Qe.version = "18.3.1-next-f1338f8080-20240426";
function tp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tp)
        } catch (t) {
            console.error(t)
        }
}
tp(),
td.exports = Qe;
var v1 = td.exports, np, Mc = v1;
np = Mc.createRoot,
Mc.hydrateRoot;
function nu({children: t, className: e="", fluid: n=!1}) {
    return _.jsx("div", {
        className: `${n ? "w-full" : "container"} px-3 ${e}`,
        children: t
    })
}
function ip({children: t, className: e=""}) {
    return _.jsx("div", {
        className: `flex flex-wrap -mx-3 ${e}`,
        children: t
    })
}
function ea({children: t, className: e="", xs: n, md: i, lg: r, xl: s, xxl: o, xxxl: l, ...a}) {
    let u = "";
    n === 1 ? u = "w-1/12" : n === 2 ? u = "w-2/12" : n === 3 ? u = "w-3/12" : n === 4 ? u = "w-4/12" : n === 5 ? u = "w-5/12" : n === 6 ? u = "w-6/12" : n === 7 ? u = "w-7/12" : n === 8 ? u = "w-8/12" : n === 9 ? u = "w-9/12" : n === 10 ? u = "w-10/12" : n === 11 ? u = "w-11/12" : n === 12 && (u = "w-full");
    let c = "";
    i === 1 ? c = "md:w-1/12" : i === 2 ? c = "md:w-2/12" : i === 3 ? c = "md:w-3/12" : i === 4 ? c = "md:w-4/12" : i === 5 ? c = "md:w-5/12" : i === 6 ? c = "md:w-6/12" : i === 7 ? c = "md:w-7/12" : i === 8 ? c = "md:w-8/12" : i === 9 ? c = "md:w-9/12" : i === 10 ? c = "md:w-10/12" : i === 11 ? c = "md:w-11/12" : i === 12 && (c = "md:w-full");
    let f = "";
    r === 1 ? f = "lg:w-1/12" : r === 2 ? f = "lg:w-2/12" : r === 3 ? f = "lg:w-3/12" : r === 4 ? f = "lg:w-4/12" : r === 5 ? f = "lg:w-5/12" : r === 6 ? f = "lg:w-6/12" : r === 7 ? f = "lg:w-7/12" : r === 8 ? f = "lg:w-8/12" : r === 9 ? f = "lg:w-9/12" : r === 10 ? f = "lg:w-10/12" : r === 11 ? f = "lg:w-11/12" : r === 12 && (f = "lg:w-full");
    let d = "";
    s === 1 ? d = "xl:w-1/12" : s === 2 ? d = "xl:w-2/12" : s === 3 ? d = "xl:w-3/12" : s === 4 ? d = "xl:w-4/12" : s === 5 ? d = "xl:w-5/12" : s === 6 ? d = "xl:w-6/12" : s === 7 ? d = "xl:w-7/12" : s === 8 ? d = "xl:w-8/12" : s === 9 ? d = "xl:w-9/12" : s === 10 ? d = "xl:w-10/12" : s === 11 ? d = "xl:w-11/12" : s === 12 && (d = "xl:w-full");
    let h = "";
    o === 1 ? h = "2xl:w-1/12" : o === 2 ? h = "2xl:w-2/12" : o === 3 ? h = "2xl:w-3/12" : o === 4 ? h = "2xl:w-4/12" : o === 5 ? h = "2xl:w-5/12" : o === 6 ? h = "2xl:w-6/12" : o === 7 ? h = "2xl:w-7/12" : o === 8 ? h = "2xl:w-8/12" : o === 9 ? h = "2xl:w-9/12" : o === 10 ? h = "2xl:w-10/12" : o === 11 ? h = "2xl:w-11/12" : o === 12 && (h = "2xl:w-full");
    let m = "";
    return l === 1 ? m = "3xl:w-1/12" : l === 2 ? m = "3xl:w-2/12" : l === 3 ? m = "3xl:w-3/12" : l === 4 ? m = "3xl:w-4/12" : l === 5 ? m = "3xl:w-5/12" : l === 6 ? m = "3xl:w-6/12" : l === 7 ? m = "3xl:w-7/12" : l === 8 ? m = "3xl:w-8/12" : l === 9 ? m = "3xl:w-9/12" : l === 10 ? m = "3xl:w-10/12" : l === 11 ? m = "3xl:w-11/12" : l === 12 && (m = "3xl:w-full"),
    _.jsx("div", {
        className: `px-3 ${u} ${c} ${f} ${d} ${h} ${m} ${e}`,
        ...a,
        children: t
    })
}
const x1 = "/assets/about-img-CAXrTZEE.png";
function w1({onClick: t}) {
    return _.jsx("div", {
        className: "about",
        children: _.jsxs("div", {
            className: "about-wrap modal lg:flex overflow-hidden relative",
            children: [_.jsxs("div", {
                className: "text",
                children: [_.jsx("h2", {
                    children: "About SENK"
                }), _.jsx("p", {
                    children: "Meet Senk, once celebrated as the internet's coolest seal. After facing significant setbacks, Senk found himself back at square one, destitute after losing everything in trading—his money, his wife, and even his igloo. But Senk is no quitter. Fueled by a relentless vision, he is determined to rebuild and succeed. Will you join him on his remarkable journey to redemption?"
                })]
            }), _.jsx("div", {
                className: "img",
                children: _.jsx("img", {
                    src: x1,
                    alt: ""
                })
            }), _.jsx("button", {
                className: "closeBtn absolute top-6 lg:top-10 right-6 lg:right-10",
                onClick: t,
                children: _.jsx("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: _.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.9996 14.1221L17.3026 19.4251C17.584 19.7065 17.9657 19.8646 18.3636 19.8646C18.7616 19.8646 19.1432 19.7065 19.4246 19.4251C19.706 19.1437 19.8641 18.7621 19.8641 18.3641C19.8641 17.9662 19.706 17.5845 19.4246 17.3031L14.1196 12.0001L19.4236 6.69711C19.5629 6.55778 19.6733 6.39238 19.7487 6.21036C19.824 6.02834 19.8628 5.83326 19.8627 5.63626C19.8627 5.43926 19.8238 5.2442 19.7484 5.06221C19.673 4.88022 19.5624 4.71488 19.4231 4.57561C19.2838 4.43634 19.1184 4.32588 18.9364 4.25054C18.7543 4.17519 18.5592 4.13644 18.3623 4.13648C18.1653 4.13653 17.9702 4.17538 17.7882 4.25081C17.6062 4.32624 17.4409 4.43678 17.3016 4.57611L11.9996 9.87911L6.6966 4.57611C6.5583 4.43278 6.39284 4.31843 6.20987 4.23973C6.0269 4.16103 5.83009 4.11956 5.63092 4.11774C5.43176 4.11591 5.23422 4.15377 5.04984 4.22911C4.86546 4.30444 4.69793 4.41574 4.55703 4.55652C4.41612 4.69729 4.30466 4.86471 4.22916 5.04902C4.15365 5.23333 4.1156 5.43083 4.11724 5.63C4.11887 5.82917 4.16016 6.02602 4.23869 6.20906C4.31721 6.3921 4.43141 6.55767 4.5746 6.69611L9.8796 12.0001L4.5756 17.3041C4.43241 17.4425 4.31821 17.6081 4.23969 17.7912C4.16116 17.9742 4.11987 18.1711 4.11824 18.3702C4.1166 18.5694 4.15465 18.7669 4.23016 18.9512C4.30566 19.1355 4.41712 19.3029 4.55803 19.4437C4.69893 19.5845 4.86646 19.6958 5.05084 19.7711C5.23522 19.8464 5.43276 19.8843 5.63192 19.8825C5.83109 19.8807 6.0279 19.8392 6.21087 19.7605C6.39384 19.6818 6.5593 19.5674 6.6976 19.4241L11.9996 14.1221Z",
                        fill: "black"
                    })
                })
            })]
        })
    })
}
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function br(t) {
    return t + .5 | 0
}
const Yt = (t, e, n) => Math.max(Math.min(t, n), e);
function Di(t) {
    return Yt(br(t * 2.55), 0, 255)
}
function nn(t) {
    return Yt(br(t * 255), 0, 255)
}
function At(t) {
    return Yt(br(t / 2.55) / 100, 0, 1)
}
function Ec(t) {
    return Yt(br(t * 100), 0, 100)
}
const Ze = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
}
  , ta = [..."0123456789ABCDEF"]
  , k1 = t => ta[t & 15]
  , _1 = t => ta[(t & 240) >> 4] + ta[t & 15]
  , Yr = t => (t & 240) >> 4 === (t & 15)
  , S1 = t => Yr(t.r) && Yr(t.g) && Yr(t.b) && Yr(t.a);
function C1(t) {
    var e = t.length, n;
    return t[0] === "#" && (e === 4 || e === 5 ? n = {
        r: 255 & Ze[t[1]] * 17,
        g: 255 & Ze[t[2]] * 17,
        b: 255 & Ze[t[3]] * 17,
        a: e === 5 ? Ze[t[4]] * 17 : 255
    } : (e === 7 || e === 9) && (n = {
        r: Ze[t[1]] << 4 | Ze[t[2]],
        g: Ze[t[3]] << 4 | Ze[t[4]],
        b: Ze[t[5]] << 4 | Ze[t[6]],
        a: e === 9 ? Ze[t[7]] << 4 | Ze[t[8]] : 255
    })),
    n
}
const b1 = (t, e) => t < 255 ? e(t) : "";
function A1(t) {
    var e = S1(t) ? k1 : _1;
    return t ? "#" + e(t.r) + e(t.g) + e(t.b) + b1(t.a, e) : void 0
}
const M1 = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function rp(t, e, n) {
    const i = e * Math.min(n, 1 - n)
      , r = (s, o=(s + t / 30) % 12) => n - i * Math.max(Math.min(o - 3, 9 - o, 1), -1);
    return [r(0), r(8), r(4)]
}
function E1(t, e, n) {
    const i = (r, s=(r + t / 60) % 6) => n - n * e * Math.max(Math.min(s, 4 - s, 1), 0);
    return [i(5), i(3), i(1)]
}
function P1(t, e, n) {
    const i = rp(t, 1, .5);
    let r;
    for (e + n > 1 && (r = 1 / (e + n),
    e *= r,
    n *= r),
    r = 0; r < 3; r++)
        i[r] *= 1 - e - n,
        i[r] += e;
    return i
}
function L1(t, e, n, i, r) {
    return t === r ? (e - n) / i + (e < n ? 6 : 0) : e === r ? (n - t) / i + 2 : (t - e) / i + 4
}
function iu(t) {
    const n = t.r / 255
      , i = t.g / 255
      , r = t.b / 255
      , s = Math.max(n, i, r)
      , o = Math.min(n, i, r)
      , l = (s + o) / 2;
    let a, u, c;
    return s !== o && (c = s - o,
    u = l > .5 ? c / (2 - s - o) : c / (s + o),
    a = L1(n, i, r, c, s),
    a = a * 60 + .5),
    [a | 0, u || 0, l]
}
function ru(t, e, n, i) {
    return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(nn)
}
function su(t, e, n) {
    return ru(rp, t, e, n)
}
function O1(t, e, n) {
    return ru(P1, t, e, n)
}
function T1(t, e, n) {
    return ru(E1, t, e, n)
}
function sp(t) {
    return (t % 360 + 360) % 360
}
function D1(t) {
    const e = M1.exec(t);
    let n = 255, i;
    if (!e)
        return;
    e[5] !== i && (n = e[6] ? Di(+e[5]) : nn(+e[5]));
    const r = sp(+e[2])
      , s = +e[3] / 100
      , o = +e[4] / 100;
    return e[1] === "hwb" ? i = O1(r, s, o) : e[1] === "hsv" ? i = T1(r, s, o) : i = su(r, s, o),
    {
        r: i[0],
        g: i[1],
        b: i[2],
        a: n
    }
}
function R1(t, e) {
    var n = iu(t);
    n[0] = sp(n[0] + e),
    n = su(n),
    t.r = n[0],
    t.g = n[1],
    t.b = n[2]
}
function z1(t) {
    if (!t)
        return;
    const e = iu(t)
      , n = e[0]
      , i = Ec(e[1])
      , r = Ec(e[2]);
    return t.a < 255 ? `hsla(${n}, ${i}%, ${r}%, ${At(t.a)})` : `hsl(${n}, ${i}%, ${r}%)`
}
const Pc = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh"
}
  , Lc = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32"
};
function N1() {
    const t = {}
      , e = Object.keys(Lc)
      , n = Object.keys(Pc);
    let i, r, s, o, l;
    for (i = 0; i < e.length; i++) {
        for (o = l = e[i],
        r = 0; r < n.length; r++)
            s = n[r],
            l = l.replace(s, Pc[s]);
        s = parseInt(Lc[o], 16),
        t[l] = [s >> 16 & 255, s >> 8 & 255, s & 255]
    }
    return t
}
let Xr;
function j1(t) {
    Xr || (Xr = N1(),
    Xr.transparent = [0, 0, 0, 0]);
    const e = Xr[t.toLowerCase()];
    return e && {
        r: e[0],
        g: e[1],
        b: e[2],
        a: e.length === 4 ? e[3] : 255
    }
}
const I1 = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function F1(t) {
    const e = I1.exec(t);
    let n = 255, i, r, s;
    if (e) {
        if (e[7] !== i) {
            const o = +e[7];
            n = e[8] ? Di(o) : Yt(o * 255, 0, 255)
        }
        return i = +e[1],
        r = +e[3],
        s = +e[5],
        i = 255 & (e[2] ? Di(i) : Yt(i, 0, 255)),
        r = 255 & (e[4] ? Di(r) : Yt(r, 0, 255)),
        s = 255 & (e[6] ? Di(s) : Yt(s, 0, 255)),
        {
            r: i,
            g: r,
            b: s,
            a: n
        }
    }
}
function B1(t) {
    return t && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${At(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`)
}
const el = t => t <= .0031308 ? t * 12.92 : Math.pow(t, 1 / 2.4) * 1.055 - .055
  , Rn = t => t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
function H1(t, e, n) {
    const i = Rn(At(t.r))
      , r = Rn(At(t.g))
      , s = Rn(At(t.b));
    return {
        r: nn(el(i + n * (Rn(At(e.r)) - i))),
        g: nn(el(r + n * (Rn(At(e.g)) - r))),
        b: nn(el(s + n * (Rn(At(e.b)) - s))),
        a: t.a + n * (e.a - t.a)
    }
}
function Kr(t, e, n) {
    if (t) {
        let i = iu(t);
        i[e] = Math.max(0, Math.min(i[e] + i[e] * n, e === 0 ? 360 : 1)),
        i = su(i),
        t.r = i[0],
        t.g = i[1],
        t.b = i[2]
    }
}
function op(t, e) {
    return t && Object.assign(e || {}, t)
}
function Oc(t) {
    var e = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    };
    return Array.isArray(t) ? t.length >= 3 && (e = {
        r: t[0],
        g: t[1],
        b: t[2],
        a: 255
    },
    t.length > 3 && (e.a = nn(t[3]))) : (e = op(t, {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    }),
    e.a = nn(e.a)),
    e
}
function W1(t) {
    return t.charAt(0) === "r" ? F1(t) : D1(t)
}
class gr {
    constructor(e) {
        if (e instanceof gr)
            return e;
        const n = typeof e;
        let i;
        n === "object" ? i = Oc(e) : n === "string" && (i = C1(e) || j1(e) || W1(e)),
        this._rgb = i,
        this._valid = !!i
    }
    get valid() {
        return this._valid
    }
    get rgb() {
        var e = op(this._rgb);
        return e && (e.a = At(e.a)),
        e
    }
    set rgb(e) {
        this._rgb = Oc(e)
    }
    rgbString() {
        return this._valid ? B1(this._rgb) : void 0
    }
    hexString() {
        return this._valid ? A1(this._rgb) : void 0
    }
    hslString() {
        return this._valid ? z1(this._rgb) : void 0
    }
    mix(e, n) {
        if (e) {
            const i = this.rgb
              , r = e.rgb;
            let s;
            const o = n === s ? .5 : n
              , l = 2 * o - 1
              , a = i.a - r.a
              , u = ((l * a === -1 ? l : (l + a) / (1 + l * a)) + 1) / 2;
            s = 1 - u,
            i.r = 255 & u * i.r + s * r.r + .5,
            i.g = 255 & u * i.g + s * r.g + .5,
            i.b = 255 & u * i.b + s * r.b + .5,
            i.a = o * i.a + (1 - o) * r.a,
            this.rgb = i
        }
        return this
    }
    interpolate(e, n) {
        return e && (this._rgb = H1(this._rgb, e._rgb, n)),
        this
    }
    clone() {
        return new gr(this.rgb)
    }
    alpha(e) {
        return this._rgb.a = nn(e),
        this
    }
    clearer(e) {
        const n = this._rgb;
        return n.a *= 1 - e,
        this
    }
    greyscale() {
        const e = this._rgb
          , n = br(e.r * .3 + e.g * .59 + e.b * .11);
        return e.r = e.g = e.b = n,
        this
    }
    opaquer(e) {
        const n = this._rgb;
        return n.a *= 1 + e,
        this
    }
    negate() {
        const e = this._rgb;
        return e.r = 255 - e.r,
        e.g = 255 - e.g,
        e.b = 255 - e.b,
        this
    }
    lighten(e) {
        return Kr(this._rgb, 2, e),
        this
    }
    darken(e) {
        return Kr(this._rgb, 2, -e),
        this
    }
    saturate(e) {
        return Kr(this._rgb, 1, e),
        this
    }
    desaturate(e) {
        return Kr(this._rgb, 1, -e),
        this
    }
    rotate(e) {
        return R1(this._rgb, e),
        this
    }
}
/*!
 * Chart.js v4.4.4
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
function kt() {}
const V1 = ( () => {
    let t = 0;
    return () => t++
}
)();
function ne(t) {
    return t === null || typeof t > "u"
}
function fe(t) {
    if (Array.isArray && Array.isArray(t))
        return !0;
    const e = Object.prototype.toString.call(t);
    return e.slice(0, 7) === "[object" && e.slice(-6) === "Array]"
}
function B(t) {
    return t !== null && Object.prototype.toString.call(t) === "[object Object]"
}
function xe(t) {
    return (typeof t == "number" || t instanceof Number) && isFinite(+t)
}
function Ve(t, e) {
    return xe(t) ? t : e
}
function W(t, e) {
    return typeof t > "u" ? e : t
}
const U1 = (t, e) => typeof t == "string" && t.endsWith("%") ? parseFloat(t) / 100 : +t / e
  , lp = (t, e) => typeof t == "string" && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
function Q(t, e, n) {
    if (t && typeof t.call == "function")
        return t.apply(n, e)
}
function Y(t, e, n, i) {
    let r, s, o;
    if (fe(t))
        for (s = t.length,
        r = 0; r < s; r++)
            e.call(n, t[r], r);
    else if (B(t))
        for (o = Object.keys(t),
        s = o.length,
        r = 0; r < s; r++)
            e.call(n, t[o[r]], o[r])
}
function Us(t, e) {
    let n, i, r, s;
    if (!t || !e || t.length !== e.length)
        return !1;
    for (n = 0,
    i = t.length; n < i; ++n)
        if (r = t[n],
        s = e[n],
        r.datasetIndex !== s.datasetIndex || r.index !== s.index)
            return !1;
    return !0
}
function Ys(t) {
    if (fe(t))
        return t.map(Ys);
    if (B(t)) {
        const e = Object.create(null)
          , n = Object.keys(t)
          , i = n.length;
        let r = 0;
        for (; r < i; ++r)
            e[n[r]] = Ys(t[n[r]]);
        return e
    }
    return t
}
function ap(t) {
    return ["__proto__", "prototype", "constructor"].indexOf(t) === -1
}
function Y1(t, e, n, i) {
    if (!ap(t))
        return;
    const r = e[t]
      , s = n[t];
    B(r) && B(s) ? mr(r, s, i) : e[t] = Ys(s)
}
function mr(t, e, n) {
    const i = fe(e) ? e : [e]
      , r = i.length;
    if (!B(t))
        return t;
    n = n || {};
    const s = n.merger || Y1;
    let o;
    for (let l = 0; l < r; ++l) {
        if (o = i[l],
        !B(o))
            continue;
        const a = Object.keys(o);
        for (let u = 0, c = a.length; u < c; ++u)
            s(a[u], t, o, n)
    }
    return t
}
function Qi(t, e) {
    return mr(t, e, {
        merger: X1
    })
}
function X1(t, e, n) {
    if (!ap(t))
        return;
    const i = e[t]
      , r = n[t];
    B(i) && B(r) ? Qi(i, r) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = Ys(r))
}
const Tc = {
    "": t => t,
    x: t => t.x,
    y: t => t.y
};
function K1(t) {
    const e = t.split(".")
      , n = [];
    let i = "";
    for (const r of e)
        i += r,
        i.endsWith("\\") ? i = i.slice(0, -1) + "." : (n.push(i),
        i = "");
    return n
}
function Q1(t) {
    const e = K1(t);
    return n => {
        for (const i of e) {
            if (i === "")
                break;
            n = n && n[i]
        }
        return n
    }
}
function yr(t, e) {
    return (Tc[e] || (Tc[e] = Q1(e)))(t)
}
function ou(t) {
    return t.charAt(0).toUpperCase() + t.slice(1)
}
const Xs = t => typeof t < "u"
  , on = t => typeof t == "function"
  , Dc = (t, e) => {
    if (t.size !== e.size)
        return !1;
    for (const n of t)
        if (!e.has(n))
            return !1;
    return !0
}
;
function G1(t) {
    return t.type === "mouseup" || t.type === "click" || t.type === "contextmenu"
}
const pe = Math.PI
  , ae = 2 * pe
  , Ks = Number.POSITIVE_INFINITY
  , Z1 = pe / 180
  , de = pe / 2
  , cn = pe / 4
  , Rc = pe * 2 / 3
  , Xt = Math.log10
  , Qs = Math.sign;
function ys(t, e, n) {
    return Math.abs(t - e) < n
}
function zc(t) {
    const e = Math.round(t);
    t = ys(t, e, t / 1e3) ? e : t;
    const n = Math.pow(10, Math.floor(Xt(t)))
      , i = t / n;
    return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n
}
function J1(t) {
    const e = []
      , n = Math.sqrt(t);
    let i;
    for (i = 1; i < n; i++)
        t % i === 0 && (e.push(i),
        e.push(t / i));
    return n === (n | 0) && e.push(n),
    e.sort( (r, s) => r - s).pop(),
    e
}
function Gs(t) {
    return !isNaN(parseFloat(t)) && isFinite(t)
}
function q1(t, e) {
    const n = Math.round(t);
    return n - e <= t && n + e >= t
}
function up(t, e, n) {
    let i, r, s;
    for (i = 0,
    r = t.length; i < r; i++)
        s = t[i][n],
        isNaN(s) || (e.min = Math.min(e.min, s),
        e.max = Math.max(e.max, s))
}
function yt(t) {
    return t * (pe / 180)
}
function lu(t) {
    return t * (180 / pe)
}
function Nc(t) {
    if (!xe(t))
        return;
    let e = 1
      , n = 0;
    for (; Math.round(t * e) / e !== t; )
        e *= 10,
        n++;
    return n
}
function cp(t, e) {
    const n = e.x - t.x
      , i = e.y - t.y
      , r = Math.sqrt(n * n + i * i);
    let s = Math.atan2(i, n);
    return s < -.5 * pe && (s += ae),
    {
        angle: s,
        distance: r
    }
}
function $1(t, e) {
    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
}
function gt(t) {
    return (t % ae + ae) % ae
}
function Zs(t, e, n, i) {
    const r = gt(t)
      , s = gt(e)
      , o = gt(n)
      , l = gt(s - r)
      , a = gt(o - r)
      , u = gt(r - s)
      , c = gt(r - o);
    return r === s || r === o || i && s === o || l > a && u < c
}
function et(t, e, n) {
    return Math.max(e, Math.min(n, t))
}
function e0(t) {
    return et(t, -32768, 32767)
}
function Ri(t, e, n, i=1e-6) {
    return t >= Math.min(e, n) - i && t <= Math.max(e, n) + i
}
function au(t, e, n) {
    n = n || (o => t[o] < e);
    let i = t.length - 1, r = 0, s;
    for (; i - r > 1; )
        s = r + i >> 1,
        n(s) ? r = s : i = s;
    return {
        lo: r,
        hi: i
    }
}
const na = (t, e, n, i) => au(t, n, i ? r => {
    const s = t[r][e];
    return s < n || s === n && t[r + 1][e] === n
}
: r => t[r][e] < n)
  , t0 = (t, e, n) => au(t, n, i => t[i][e] >= n);
function n0(t, e, n) {
    let i = 0
      , r = t.length;
    for (; i < r && t[i] < e; )
        i++;
    for (; r > i && t[r - 1] > n; )
        r--;
    return i > 0 || r < t.length ? t.slice(i, r) : t
}
const fp = ["push", "pop", "shift", "splice", "unshift"];
function i0(t, e) {
    if (t._chartjs) {
        t._chartjs.listeners.push(e);
        return
    }
    Object.defineProperty(t, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: {
            listeners: [e]
        }
    }),
    fp.forEach(n => {
        const i = "_onData" + ou(n)
          , r = t[n];
        Object.defineProperty(t, n, {
            configurable: !0,
            enumerable: !1,
            value(...s) {
                const o = r.apply(this, s);
                return t._chartjs.listeners.forEach(l => {
                    typeof l[i] == "function" && l[i](...s)
                }
                ),
                o
            }
        })
    }
    )
}
function jc(t, e) {
    const n = t._chartjs;
    if (!n)
        return;
    const i = n.listeners
      , r = i.indexOf(e);
    r !== -1 && i.splice(r, 1),
    !(i.length > 0) && (fp.forEach(s => {
        delete t[s]
    }
    ),
    delete t._chartjs)
}
function r0(t) {
    const e = new Set(t);
    return e.size === t.length ? t : Array.from(e)
}
const dp = function() {
    return typeof window > "u" ? function(t) {
        return t()
    }
    : window.requestAnimationFrame
}();
function hp(t, e) {
    let n = []
      , i = !1;
    return function(...r) {
        n = r,
        i || (i = !0,
        dp.call(window, () => {
            i = !1,
            t.apply(e, n)
        }
        ))
    }
}
function s0(t, e) {
    let n;
    return function(...i) {
        return e ? (clearTimeout(n),
        n = setTimeout(t, e, i)) : t.apply(this, i),
        e
    }
}
const pp = t => t === "start" ? "left" : t === "end" ? "right" : "center"
  , We = (t, e, n) => t === "start" ? e : t === "end" ? n : (e + n) / 2
  , o0 = (t, e, n, i) => t === (i ? "left" : "right") ? n : t === "center" ? (e + n) / 2 : e
  , Qr = t => t === 0 || t === 1
  , Ic = (t, e, n) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * ae / n))
  , Fc = (t, e, n) => Math.pow(2, -10 * t) * Math.sin((t - e) * ae / n) + 1
  , Gi = {
    linear: t => t,
    easeInQuad: t => t * t,
    easeOutQuad: t => -t * (t - 2),
    easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
    easeInCubic: t => t * t * t,
    easeOutCubic: t => (t -= 1) * t * t + 1,
    easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
    easeInQuart: t => t * t * t * t,
    easeOutQuart: t => -((t -= 1) * t * t * t - 1),
    easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: t => t * t * t * t * t,
    easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
    easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: t => -Math.cos(t * de) + 1,
    easeOutSine: t => Math.sin(t * de),
    easeInOutSine: t => -.5 * (Math.cos(pe * t) - 1),
    easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
    easeOutExpo: t => t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
    easeInOutExpo: t => Qr(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (t * 2 - 1)) : .5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
    easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
    easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: t => Qr(t) ? t : Ic(t, .075, .3),
    easeOutElastic: t => Qr(t) ? t : Fc(t, .075, .3),
    easeInOutElastic(t) {
        return Qr(t) ? t : t < .5 ? .5 * Ic(t * 2, .1125, .45) : .5 + .5 * Fc(t * 2 - 1, .1125, .45)
    },
    easeInBack(t) {
        return t * t * ((1.70158 + 1) * t - 1.70158)
    },
    easeOutBack(t) {
        return (t -= 1) * t * ((1.70158 + 1) * t + 1.70158) + 1
    },
    easeInOutBack(t) {
        let e = 1.70158;
        return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
    },
    easeInBounce: t => 1 - Gi.easeOutBounce(1 - t),
    easeOutBounce(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    },
    easeInOutBounce: t => t < .5 ? Gi.easeInBounce(t * 2) * .5 : Gi.easeOutBounce(t * 2 - 1) * .5 + .5
};
function gp(t) {
    if (t && typeof t == "object") {
        const e = t.toString();
        return e === "[object CanvasPattern]" || e === "[object CanvasGradient]"
    }
    return !1
}
function Bc(t) {
    return gp(t) ? t : new gr(t)
}
function tl(t) {
    return gp(t) ? t : new gr(t).saturate(.5).darken(.1).hexString()
}
const l0 = ["x", "y", "borderWidth", "radius", "tension"]
  , a0 = ["color", "borderColor", "backgroundColor"];
function u0(t) {
    t.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0
    }),
    t.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: e => e !== "onProgress" && e !== "onComplete" && e !== "fn"
    }),
    t.set("animations", {
        colors: {
            type: "color",
            properties: a0
        },
        numbers: {
            type: "number",
            properties: l0
        }
    }),
    t.describe("animations", {
        _fallback: "animation"
    }),
    t.set("transitions", {
        active: {
            animation: {
                duration: 400
            }
        },
        resize: {
            animation: {
                duration: 0
            }
        },
        show: {
            animations: {
                colors: {
                    from: "transparent"
                },
                visible: {
                    type: "boolean",
                    duration: 0
                }
            }
        },
        hide: {
            animations: {
                colors: {
                    to: "transparent"
                },
                visible: {
                    type: "boolean",
                    easing: "linear",
                    fn: e => e | 0
                }
            }
        }
    })
}
function c0(t) {
    t.set("layout", {
        autoPadding: !0,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    })
}
const Hc = new Map;
function f0(t, e) {
    e = e || {};
    const n = t + JSON.stringify(e);
    let i = Hc.get(n);
    return i || (i = new Intl.NumberFormat(t,e),
    Hc.set(n, i)),
    i
}
function So(t, e, n) {
    return f0(e, n).format(t)
}
const mp = {
    values(t) {
        return fe(t) ? t : "" + t
    },
    numeric(t, e, n) {
        if (t === 0)
            return "0";
        const i = this.chart.options.locale;
        let r, s = t;
        if (n.length > 1) {
            const u = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
            (u < 1e-4 || u > 1e15) && (r = "scientific"),
            s = d0(t, n)
        }
        const o = Xt(Math.abs(s))
          , l = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0)
          , a = {
            notation: r,
            minimumFractionDigits: l,
            maximumFractionDigits: l
        };
        return Object.assign(a, this.options.ticks.format),
        So(t, i, a)
    },
    logarithmic(t, e, n) {
        if (t === 0)
            return "0";
        const i = n[e].significand || t / Math.pow(10, Math.floor(Xt(t)));
        return [1, 2, 3, 5, 10, 15].includes(i) || e > .8 * n.length ? mp.numeric.call(this, t, e, n) : ""
    }
};
function d0(t, e) {
    let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
    return Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t)),
    n
}
var Co = {
    formatters: mp
};
function h0(t) {
    t.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        clip: !0,
        grace: 0,
        grid: {
            display: !0,
            lineWidth: 1,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (e, n) => n.lineWidth,
            tickColor: (e, n) => n.color,
            offset: !1
        },
        border: {
            display: !0,
            dash: [],
            dashOffset: 0,
            width: 1
        },
        title: {
            display: !1,
            text: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: "",
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: Co.formatters.values,
            minor: {},
            major: {},
            align: "center",
            crossAlign: "near",
            showLabelBackdrop: !1,
            backdropColor: "rgba(255, 255, 255, 0.75)",
            backdropPadding: 2
        }
    }),
    t.route("scale.ticks", "color", "", "color"),
    t.route("scale.grid", "color", "", "borderColor"),
    t.route("scale.border", "color", "", "borderColor"),
    t.route("scale.title", "color", "", "color"),
    t.describe("scale", {
        _fallback: !1,
        _scriptable: e => !e.startsWith("before") && !e.startsWith("after") && e !== "callback" && e !== "parser",
        _indexable: e => e !== "borderDash" && e !== "tickBorderDash" && e !== "dash"
    }),
    t.describe("scales", {
        _fallback: "scale"
    }),
    t.describe("scale.ticks", {
        _scriptable: e => e !== "backdropPadding" && e !== "callback",
        _indexable: e => e !== "backdropPadding"
    })
}
const En = Object.create(null)
  , ia = Object.create(null);
function Zi(t, e) {
    if (!e)
        return t;
    const n = e.split(".");
    for (let i = 0, r = n.length; i < r; ++i) {
        const s = n[i];
        t = t[s] || (t[s] = Object.create(null))
    }
    return t
}
function nl(t, e, n) {
    return typeof e == "string" ? mr(Zi(t, e), n) : mr(Zi(t, ""), e)
}
class p0 {
    constructor(e, n) {
        this.animation = void 0,
        this.backgroundColor = "rgba(0,0,0,0.1)",
        this.borderColor = "rgba(0,0,0,0.1)",
        this.color = "#666",
        this.datasets = {},
        this.devicePixelRatio = i => i.chart.platform.getDevicePixelRatio(),
        this.elements = {},
        this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: "normal",
            lineHeight: 1.2,
            weight: null
        },
        this.hover = {},
        this.hoverBackgroundColor = (i, r) => tl(r.backgroundColor),
        this.hoverBorderColor = (i, r) => tl(r.borderColor),
        this.hoverColor = (i, r) => tl(r.color),
        this.indexAxis = "x",
        this.interaction = {
            mode: "nearest",
            intersect: !0,
            includeInvisible: !1
        },
        this.maintainAspectRatio = !0,
        this.onHover = null,
        this.onClick = null,
        this.parsing = !0,
        this.plugins = {},
        this.responsive = !0,
        this.scale = void 0,
        this.scales = {},
        this.showLine = !0,
        this.drawActiveElementsOnTop = !0,
        this.describe(e),
        this.apply(n)
    }
    set(e, n) {
        return nl(this, e, n)
    }
    get(e) {
        return Zi(this, e)
    }
    describe(e, n) {
        return nl(ia, e, n)
    }
    override(e, n) {
        return nl(En, e, n)
    }
    route(e, n, i, r) {
        const s = Zi(this, e)
          , o = Zi(this, i)
          , l = "_" + n;
        Object.defineProperties(s, {
            [l]: {
                value: s[n],
                writable: !0
            },
            [n]: {
                enumerable: !0,
                get() {
                    const a = this[l]
                      , u = o[r];
                    return B(a) ? Object.assign({}, u, a) : W(a, u)
                },
                set(a) {
                    this[l] = a
                }
            }
        })
    }
    apply(e) {
        e.forEach(n => n(this))
    }
}
var ue = new p0({
    _scriptable: t => !t.startsWith("on"),
    _indexable: t => t !== "events",
    hover: {
        _fallback: "interaction"
    },
    interaction: {
        _scriptable: !1,
        _indexable: !1
    }
},[u0, c0, h0]);
function g0(t) {
    return !t || ne(t.size) || ne(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
}
function Js(t, e, n, i, r) {
    let s = e[r];
    return s || (s = e[r] = t.measureText(r).width,
    n.push(r)),
    s > i && (i = s),
    i
}
function m0(t, e, n, i) {
    i = i || {};
    let r = i.data = i.data || {}
      , s = i.garbageCollect = i.garbageCollect || [];
    i.font !== e && (r = i.data = {},
    s = i.garbageCollect = [],
    i.font = e),
    t.save(),
    t.font = e;
    let o = 0;
    const l = n.length;
    let a, u, c, f, d;
    for (a = 0; a < l; a++)
        if (f = n[a],
        f != null && !fe(f))
            o = Js(t, r, s, o, f);
        else if (fe(f))
            for (u = 0,
            c = f.length; u < c; u++)
                d = f[u],
                d != null && !fe(d) && (o = Js(t, r, s, o, d));
    t.restore();
    const h = s.length / 2;
    if (h > n.length) {
        for (a = 0; a < h; a++)
            delete r[s[a]];
        s.splice(0, h)
    }
    return o
}
function fn(t, e, n) {
    const i = t.currentDevicePixelRatio
      , r = n !== 0 ? Math.max(n / 2, .5) : 0;
    return Math.round((e - r) * i) / i + r
}
function Wc(t, e) {
    !e && !t || (e = e || t.getContext("2d"),
    e.save(),
    e.resetTransform(),
    e.clearRect(0, 0, t.width, t.height),
    e.restore())
}
function Vc(t, e, n, i) {
    yp(t, e, n, i, null)
}
function yp(t, e, n, i, r) {
    let s, o, l, a, u, c, f, d;
    const h = e.pointStyle
      , m = e.rotation
      , v = e.radius;
    let x = (m || 0) * Z1;
    if (h && typeof h == "object" && (s = h.toString(),
    s === "[object HTMLImageElement]" || s === "[object HTMLCanvasElement]")) {
        t.save(),
        t.translate(n, i),
        t.rotate(x),
        t.drawImage(h, -h.width / 2, -h.height / 2, h.width, h.height),
        t.restore();
        return
    }
    if (!(isNaN(v) || v <= 0)) {
        switch (t.beginPath(),
        h) {
        default:
            r ? t.ellipse(n, i, r / 2, v, 0, 0, ae) : t.arc(n, i, v, 0, ae),
            t.closePath();
            break;
        case "triangle":
            c = r ? r / 2 : v,
            t.moveTo(n + Math.sin(x) * c, i - Math.cos(x) * v),
            x += Rc,
            t.lineTo(n + Math.sin(x) * c, i - Math.cos(x) * v),
            x += Rc,
            t.lineTo(n + Math.sin(x) * c, i - Math.cos(x) * v),
            t.closePath();
            break;
        case "rectRounded":
            u = v * .516,
            a = v - u,
            o = Math.cos(x + cn) * a,
            f = Math.cos(x + cn) * (r ? r / 2 - u : a),
            l = Math.sin(x + cn) * a,
            d = Math.sin(x + cn) * (r ? r / 2 - u : a),
            t.arc(n - f, i - l, u, x - pe, x - de),
            t.arc(n + d, i - o, u, x - de, x),
            t.arc(n + f, i + l, u, x, x + de),
            t.arc(n - d, i + o, u, x + de, x + pe),
            t.closePath();
            break;
        case "rect":
            if (!m) {
                a = Math.SQRT1_2 * v,
                c = r ? r / 2 : a,
                t.rect(n - c, i - a, 2 * c, 2 * a);
                break
            }
            x += cn;
        case "rectRot":
            f = Math.cos(x) * (r ? r / 2 : v),
            o = Math.cos(x) * v,
            l = Math.sin(x) * v,
            d = Math.sin(x) * (r ? r / 2 : v),
            t.moveTo(n - f, i - l),
            t.lineTo(n + d, i - o),
            t.lineTo(n + f, i + l),
            t.lineTo(n - d, i + o),
            t.closePath();
            break;
        case "crossRot":
            x += cn;
        case "cross":
            f = Math.cos(x) * (r ? r / 2 : v),
            o = Math.cos(x) * v,
            l = Math.sin(x) * v,
            d = Math.sin(x) * (r ? r / 2 : v),
            t.moveTo(n - f, i - l),
            t.lineTo(n + f, i + l),
            t.moveTo(n + d, i - o),
            t.lineTo(n - d, i + o);
            break;
        case "star":
            f = Math.cos(x) * (r ? r / 2 : v),
            o = Math.cos(x) * v,
            l = Math.sin(x) * v,
            d = Math.sin(x) * (r ? r / 2 : v),
            t.moveTo(n - f, i - l),
            t.lineTo(n + f, i + l),
            t.moveTo(n + d, i - o),
            t.lineTo(n - d, i + o),
            x += cn,
            f = Math.cos(x) * (r ? r / 2 : v),
            o = Math.cos(x) * v,
            l = Math.sin(x) * v,
            d = Math.sin(x) * (r ? r / 2 : v),
            t.moveTo(n - f, i - l),
            t.lineTo(n + f, i + l),
            t.moveTo(n + d, i - o),
            t.lineTo(n - d, i + o);
            break;
        case "line":
            o = r ? r / 2 : Math.cos(x) * v,
            l = Math.sin(x) * v,
            t.moveTo(n - o, i - l),
            t.lineTo(n + o, i + l);
            break;
        case "dash":
            t.moveTo(n, i),
            t.lineTo(n + Math.cos(x) * (r ? r / 2 : v), i + Math.sin(x) * v);
            break;
        case !1:
            t.closePath();
            break
        }
        t.fill(),
        e.borderWidth > 0 && t.stroke()
    }
}
function Qn(t, e, n) {
    return n = n || .5,
    !e || t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n
}
function uu(t, e) {
    t.save(),
    t.beginPath(),
    t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
    t.clip()
}
function cu(t) {
    t.restore()
}
function y0(t, e) {
    e.translation && t.translate(e.translation[0], e.translation[1]),
    ne(e.rotation) || t.rotate(e.rotation),
    e.color && (t.fillStyle = e.color),
    e.textAlign && (t.textAlign = e.textAlign),
    e.textBaseline && (t.textBaseline = e.textBaseline)
}
function v0(t, e, n, i, r) {
    if (r.strikethrough || r.underline) {
        const s = t.measureText(i)
          , o = e - s.actualBoundingBoxLeft
          , l = e + s.actualBoundingBoxRight
          , a = n - s.actualBoundingBoxAscent
          , u = n + s.actualBoundingBoxDescent
          , c = r.strikethrough ? (a + u) / 2 : u;
        t.strokeStyle = t.fillStyle,
        t.beginPath(),
        t.lineWidth = r.decorationWidth || 2,
        t.moveTo(o, c),
        t.lineTo(l, c),
        t.stroke()
    }
}
function x0(t, e) {
    const n = t.fillStyle;
    t.fillStyle = e.color,
    t.fillRect(e.left, e.top, e.width, e.height),
    t.fillStyle = n
}
function ci(t, e, n, i, r, s={}) {
    const o = fe(e) ? e : [e]
      , l = s.strokeWidth > 0 && s.strokeColor !== "";
    let a, u;
    for (t.save(),
    t.font = r.string,
    y0(t, s),
    a = 0; a < o.length; ++a)
        u = o[a],
        s.backdrop && x0(t, s.backdrop),
        l && (s.strokeColor && (t.strokeStyle = s.strokeColor),
        ne(s.strokeWidth) || (t.lineWidth = s.strokeWidth),
        t.strokeText(u, n, i, s.maxWidth)),
        t.fillText(u, n, i, s.maxWidth),
        v0(t, n, i, u, s),
        i += Number(r.lineHeight);
    t.restore()
}
function qs(t, e) {
    const {x: n, y: i, w: r, h: s, radius: o} = e;
    t.arc(n + o.topLeft, i + o.topLeft, o.topLeft, 1.5 * pe, pe, !0),
    t.lineTo(n, i + s - o.bottomLeft),
    t.arc(n + o.bottomLeft, i + s - o.bottomLeft, o.bottomLeft, pe, de, !0),
    t.lineTo(n + r - o.bottomRight, i + s),
    t.arc(n + r - o.bottomRight, i + s - o.bottomRight, o.bottomRight, de, 0, !0),
    t.lineTo(n + r, i + o.topRight),
    t.arc(n + r - o.topRight, i + o.topRight, o.topRight, 0, -de, !0),
    t.lineTo(n + o.topLeft, i)
}
const w0 = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/
  , k0 = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function _0(t, e) {
    const n = ("" + t).match(w0);
    if (!n || n[1] === "normal")
        return e * 1.2;
    switch (t = +n[2],
    n[3]) {
    case "px":
        return t;
    case "%":
        t /= 100;
        break
    }
    return e * t
}
const S0 = t => +t || 0;
function fu(t, e) {
    const n = {}
      , i = B(e)
      , r = i ? Object.keys(e) : e
      , s = B(t) ? i ? o => W(t[o], t[e[o]]) : o => t[o] : () => t;
    for (const o of r)
        n[o] = S0(s(o));
    return n
}
function C0(t) {
    return fu(t, {
        top: "y",
        right: "x",
        bottom: "y",
        left: "x"
    })
}
function ti(t) {
    return fu(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
}
function Te(t) {
    const e = C0(t);
    return e.width = e.left + e.right,
    e.height = e.top + e.bottom,
    e
}
function _e(t, e) {
    t = t || {},
    e = e || ue.font;
    let n = W(t.size, e.size);
    typeof n == "string" && (n = parseInt(n, 10));
    let i = W(t.style, e.style);
    i && !("" + i).match(k0) && (console.warn('Invalid font style specified: "' + i + '"'),
    i = void 0);
    const r = {
        family: W(t.family, e.family),
        lineHeight: _0(W(t.lineHeight, e.lineHeight), n),
        size: n,
        style: i,
        weight: W(t.weight, e.weight),
        string: ""
    };
    return r.string = g0(r),
    r
}
function Gr(t, e, n, i) {
    let r, s, o;
    for (r = 0,
    s = t.length; r < s; ++r)
        if (o = t[r],
        o !== void 0 && o !== void 0)
            return o
}
function b0(t, e, n) {
    const {min: i, max: r} = t
      , s = lp(e, (r - i) / 2)
      , o = (l, a) => n && l === 0 ? 0 : l + a;
    return {
        min: o(i, -Math.abs(s)),
        max: o(r, s)
    }
}
function Tn(t, e) {
    return Object.assign(Object.create(t), e)
}
function du(t, e=[""], n, i, r= () => t[0]) {
    const s = n || t;
    typeof i > "u" && (i = kp("_fallback", t));
    const o = {
        [Symbol.toStringTag]: "Object",
        _cacheable: !0,
        _scopes: t,
        _rootScopes: s,
        _fallback: i,
        _getTarget: r,
        override: l => du([l, ...t], e, s, i)
    };
    return new Proxy(o,{
        deleteProperty(l, a) {
            return delete l[a],
            delete l._keys,
            delete t[0][a],
            !0
        },
        get(l, a) {
            return xp(l, a, () => D0(a, e, t, l))
        },
        getOwnPropertyDescriptor(l, a) {
            return Reflect.getOwnPropertyDescriptor(l._scopes[0], a)
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(t[0])
        },
        has(l, a) {
            return Yc(l).includes(a)
        },
        ownKeys(l) {
            return Yc(l)
        },
        set(l, a, u) {
            const c = l._storage || (l._storage = r());
            return l[a] = c[a] = u,
            delete l._keys,
            !0
        }
    })
}
function fi(t, e, n, i) {
    const r = {
        _cacheable: !1,
        _proxy: t,
        _context: e,
        _subProxy: n,
        _stack: new Set,
        _descriptors: vp(t, i),
        setContext: s => fi(t, s, n, i),
        override: s => fi(t.override(s), e, n, i)
    };
    return new Proxy(r,{
        deleteProperty(s, o) {
            return delete s[o],
            delete t[o],
            !0
        },
        get(s, o, l) {
            return xp(s, o, () => M0(s, o, l))
        },
        getOwnPropertyDescriptor(s, o) {
            return s._descriptors.allKeys ? Reflect.has(t, o) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(t, o)
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(t)
        },
        has(s, o) {
            return Reflect.has(t, o)
        },
        ownKeys() {
            return Reflect.ownKeys(t)
        },
        set(s, o, l) {
            return t[o] = l,
            delete s[o],
            !0
        }
    })
}
function vp(t, e={
    scriptable: !0,
    indexable: !0
}) {
    const {_scriptable: n=e.scriptable, _indexable: i=e.indexable, _allKeys: r=e.allKeys} = t;
    return {
        allKeys: r,
        scriptable: n,
        indexable: i,
        isScriptable: on(n) ? n : () => n,
        isIndexable: on(i) ? i : () => i
    }
}
const A0 = (t, e) => t ? t + ou(e) : e
  , hu = (t, e) => B(e) && t !== "adapters" && (Object.getPrototypeOf(e) === null || e.constructor === Object);
function xp(t, e, n) {
    if (Object.prototype.hasOwnProperty.call(t, e) || e === "constructor")
        return t[e];
    const i = n();
    return t[e] = i,
    i
}
function M0(t, e, n) {
    const {_proxy: i, _context: r, _subProxy: s, _descriptors: o} = t;
    let l = i[e];
    return on(l) && o.isScriptable(e) && (l = E0(e, l, t, n)),
    fe(l) && l.length && (l = P0(e, l, t, o.isIndexable)),
    hu(e, l) && (l = fi(l, r, s && s[e], o)),
    l
}
function E0(t, e, n, i) {
    const {_proxy: r, _context: s, _subProxy: o, _stack: l} = n;
    if (l.has(t))
        throw new Error("Recursion detected: " + Array.from(l).join("->") + "->" + t);
    l.add(t);
    let a = e(s, o || i);
    return l.delete(t),
    hu(t, a) && (a = pu(r._scopes, r, t, a)),
    a
}
function P0(t, e, n, i) {
    const {_proxy: r, _context: s, _subProxy: o, _descriptors: l} = n;
    if (typeof s.index < "u" && i(t))
        return e[s.index % e.length];
    if (B(e[0])) {
        const a = e
          , u = r._scopes.filter(c => c !== a);
        e = [];
        for (const c of a) {
            const f = pu(u, r, t, c);
            e.push(fi(f, s, o && o[t], l))
        }
    }
    return e
}
function wp(t, e, n) {
    return on(t) ? t(e, n) : t
}
const L0 = (t, e) => t === !0 ? e : typeof t == "string" ? yr(e, t) : void 0;
function O0(t, e, n, i, r) {
    for (const s of e) {
        const o = L0(n, s);
        if (o) {
            t.add(o);
            const l = wp(o._fallback, n, r);
            if (typeof l < "u" && l !== n && l !== i)
                return l
        } else if (o === !1 && typeof i < "u" && n !== i)
            return null
    }
    return !1
}
function pu(t, e, n, i) {
    const r = e._rootScopes
      , s = wp(e._fallback, n, i)
      , o = [...t, ...r]
      , l = new Set;
    l.add(i);
    let a = Uc(l, o, n, s || n, i);
    return a === null || typeof s < "u" && s !== n && (a = Uc(l, o, s, a, i),
    a === null) ? !1 : du(Array.from(l), [""], r, s, () => T0(e, n, i))
}
function Uc(t, e, n, i, r) {
    for (; n; )
        n = O0(t, e, n, i, r);
    return n
}
function T0(t, e, n) {
    const i = t._getTarget();
    e in i || (i[e] = {});
    const r = i[e];
    return fe(r) && B(n) ? n : r || {}
}
function D0(t, e, n, i) {
    let r;
    for (const s of e)
        if (r = kp(A0(s, t), n),
        typeof r < "u")
            return hu(t, r) ? pu(n, i, t, r) : r
}
function kp(t, e) {
    for (const n of e) {
        if (!n)
            continue;
        const i = n[t];
        if (typeof i < "u")
            return i
    }
}
function Yc(t) {
    let e = t._keys;
    return e || (e = t._keys = R0(t._scopes)),
    e
}
function R0(t) {
    const e = new Set;
    for (const n of t)
        for (const i of Object.keys(n).filter(r => !r.startsWith("_")))
            e.add(i);
    return Array.from(e)
}
function gu() {
    return typeof window < "u" && typeof document < "u"
}
function mu(t) {
    let e = t.parentNode;
    return e && e.toString() === "[object ShadowRoot]" && (e = e.host),
    e
}
function $s(t, e, n) {
    let i;
    return typeof t == "string" ? (i = parseInt(t, 10),
    t.indexOf("%") !== -1 && (i = i / 100 * e.parentNode[n])) : i = t,
    i
}
const bo = t => t.ownerDocument.defaultView.getComputedStyle(t, null);
function z0(t, e) {
    return bo(t).getPropertyValue(e)
}
const N0 = ["top", "right", "bottom", "left"];
function _n(t, e, n) {
    const i = {};
    n = n ? "-" + n : "";
    for (let r = 0; r < 4; r++) {
        const s = N0[r];
        i[s] = parseFloat(t[e + "-" + s + n]) || 0
    }
    return i.width = i.left + i.right,
    i.height = i.top + i.bottom,
    i
}
const j0 = (t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot);
function I0(t, e) {
    const n = t.touches
      , i = n && n.length ? n[0] : t
      , {offsetX: r, offsetY: s} = i;
    let o = !1, l, a;
    if (j0(r, s, t.target))
        l = r,
        a = s;
    else {
        const u = e.getBoundingClientRect();
        l = i.clientX - u.left,
        a = i.clientY - u.top,
        o = !0
    }
    return {
        x: l,
        y: a,
        box: o
    }
}
function mn(t, e) {
    if ("native"in t)
        return t;
    const {canvas: n, currentDevicePixelRatio: i} = e
      , r = bo(n)
      , s = r.boxSizing === "border-box"
      , o = _n(r, "padding")
      , l = _n(r, "border", "width")
      , {x: a, y: u, box: c} = I0(t, n)
      , f = o.left + (c && l.left)
      , d = o.top + (c && l.top);
    let {width: h, height: m} = e;
    return s && (h -= o.width + l.width,
    m -= o.height + l.height),
    {
        x: Math.round((a - f) / h * n.width / i),
        y: Math.round((u - d) / m * n.height / i)
    }
}
function F0(t, e, n) {
    let i, r;
    if (e === void 0 || n === void 0) {
        const s = t && mu(t);
        if (!s)
            e = t.clientWidth,
            n = t.clientHeight;
        else {
            const o = s.getBoundingClientRect()
              , l = bo(s)
              , a = _n(l, "border", "width")
              , u = _n(l, "padding");
            e = o.width - u.width - a.width,
            n = o.height - u.height - a.height,
            i = $s(l.maxWidth, s, "clientWidth"),
            r = $s(l.maxHeight, s, "clientHeight")
        }
    }
    return {
        width: e,
        height: n,
        maxWidth: i || Ks,
        maxHeight: r || Ks
    }
}
const Zr = t => Math.round(t * 10) / 10;
function B0(t, e, n, i) {
    const r = bo(t)
      , s = _n(r, "margin")
      , o = $s(r.maxWidth, t, "clientWidth") || Ks
      , l = $s(r.maxHeight, t, "clientHeight") || Ks
      , a = F0(t, e, n);
    let {width: u, height: c} = a;
    if (r.boxSizing === "content-box") {
        const d = _n(r, "border", "width")
          , h = _n(r, "padding");
        u -= h.width + d.width,
        c -= h.height + d.height
    }
    return u = Math.max(0, u - s.width),
    c = Math.max(0, i ? u / i : c - s.height),
    u = Zr(Math.min(u, o, a.maxWidth)),
    c = Zr(Math.min(c, l, a.maxHeight)),
    u && !c && (c = Zr(u / 2)),
    (e !== void 0 || n !== void 0) && i && a.height && c > a.height && (c = a.height,
    u = Zr(Math.floor(c * i))),
    {
        width: u,
        height: c
    }
}
function Xc(t, e, n) {
    const i = e || 1
      , r = Math.floor(t.height * i)
      , s = Math.floor(t.width * i);
    t.height = Math.floor(t.height),
    t.width = Math.floor(t.width);
    const o = t.canvas;
    return o.style && (n || !o.style.height && !o.style.width) && (o.style.height = `${t.height}px`,
    o.style.width = `${t.width}px`),
    t.currentDevicePixelRatio !== i || o.height !== r || o.width !== s ? (t.currentDevicePixelRatio = i,
    o.height = r,
    o.width = s,
    t.ctx.setTransform(i, 0, 0, i, 0, 0),
    !0) : !1
}
const H0 = function() {
    let t = !1;
    try {
        const e = {
            get passive() {
                return t = !0,
                !1
            }
        };
        gu() && (window.addEventListener("test", null, e),
        window.removeEventListener("test", null, e))
    } catch {}
    return t
}();
function Kc(t, e) {
    const n = z0(t, e)
      , i = n && n.match(/^(\d+)(\.\d+)?px$/);
    return i ? +i[1] : void 0
}
const W0 = function(t, e) {
    return {
        x(n) {
            return t + t + e - n
        },
        setWidth(n) {
            e = n
        },
        textAlign(n) {
            return n === "center" ? n : n === "right" ? "left" : "right"
        },
        xPlus(n, i) {
            return n - i
        },
        leftForLtr(n, i) {
            return n - i
        }
    }
}
  , V0 = function() {
    return {
        x(t) {
            return t
        },
        setWidth(t) {},
        textAlign(t) {
            return t
        },
        xPlus(t, e) {
            return t + e
        },
        leftForLtr(t, e) {
            return t
        }
    }
};
function ni(t, e, n) {
    return t ? W0(e, n) : V0()
}
function _p(t, e) {
    let n, i;
    (e === "ltr" || e === "rtl") && (n = t.canvas.style,
    i = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")],
    n.setProperty("direction", e, "important"),
    t.prevTextDirection = i)
}
function Sp(t, e) {
    e !== void 0 && (delete t.prevTextDirection,
    t.canvas.style.setProperty("direction", e[0], e[1]))
}
/*!
 * Chart.js v4.4.4
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
class U0 {
    constructor() {
        this._request = null,
        this._charts = new Map,
        this._running = !1,
        this._lastDate = void 0
    }
    _notify(e, n, i, r) {
        const s = n.listeners[r]
          , o = n.duration;
        s.forEach(l => l({
            chart: e,
            initial: n.initial,
            numSteps: o,
            currentStep: Math.min(i - n.start, o)
        }))
    }
    _refresh() {
        this._request || (this._running = !0,
        this._request = dp.call(window, () => {
            this._update(),
            this._request = null,
            this._running && this._refresh()
        }
        ))
    }
    _update(e=Date.now()) {
        let n = 0;
        this._charts.forEach( (i, r) => {
            if (!i.running || !i.items.length)
                return;
            const s = i.items;
            let o = s.length - 1, l = !1, a;
            for (; o >= 0; --o)
                a = s[o],
                a._active ? (a._total > i.duration && (i.duration = a._total),
                a.tick(e),
                l = !0) : (s[o] = s[s.length - 1],
                s.pop());
            l && (r.draw(),
            this._notify(r, i, e, "progress")),
            s.length || (i.running = !1,
            this._notify(r, i, e, "complete"),
            i.initial = !1),
            n += s.length
        }
        ),
        this._lastDate = e,
        n === 0 && (this._running = !1)
    }
    _getAnims(e) {
        const n = this._charts;
        let i = n.get(e);
        return i || (i = {
            running: !1,
            initial: !0,
            items: [],
            listeners: {
                complete: [],
                progress: []
            }
        },
        n.set(e, i)),
        i
    }
    listen(e, n, i) {
        this._getAnims(e).listeners[n].push(i)
    }
    add(e, n) {
        !n || !n.length || this._getAnims(e).items.push(...n)
    }
    has(e) {
        return this._getAnims(e).items.length > 0
    }
    start(e) {
        const n = this._charts.get(e);
        n && (n.running = !0,
        n.start = Date.now(),
        n.duration = n.items.reduce( (i, r) => Math.max(i, r._duration), 0),
        this._refresh())
    }
    running(e) {
        if (!this._running)
            return !1;
        const n = this._charts.get(e);
        return !(!n || !n.running || !n.items.length)
    }
    stop(e) {
        const n = this._charts.get(e);
        if (!n || !n.items.length)
            return;
        const i = n.items;
        let r = i.length - 1;
        for (; r >= 0; --r)
            i[r].cancel();
        n.items = [],
        this._notify(e, n, Date.now(), "complete")
    }
    remove(e) {
        return this._charts.delete(e)
    }
}
var _t = new U0;
const Qc = "transparent"
  , Y0 = {
    boolean(t, e, n) {
        return n > .5 ? e : t
    },
    color(t, e, n) {
        const i = Bc(t || Qc)
          , r = i.valid && Bc(e || Qc);
        return r && r.valid ? r.mix(i, n).hexString() : e
    },
    number(t, e, n) {
        return t + (e - t) * n
    }
};
class X0 {
    constructor(e, n, i, r) {
        const s = n[i];
        r = Gr([e.to, r, s, e.from]);
        const o = Gr([e.from, s, r]);
        this._active = !0,
        this._fn = e.fn || Y0[e.type || typeof o],
        this._easing = Gi[e.easing] || Gi.linear,
        this._start = Math.floor(Date.now() + (e.delay || 0)),
        this._duration = this._total = Math.floor(e.duration),
        this._loop = !!e.loop,
        this._target = n,
        this._prop = i,
        this._from = o,
        this._to = r,
        this._promises = void 0
    }
    active() {
        return this._active
    }
    update(e, n, i) {
        if (this._active) {
            this._notify(!1);
            const r = this._target[this._prop]
              , s = i - this._start
              , o = this._duration - s;
            this._start = i,
            this._duration = Math.floor(Math.max(o, e.duration)),
            this._total += s,
            this._loop = !!e.loop,
            this._to = Gr([e.to, n, r, e.from]),
            this._from = Gr([e.from, r, n])
        }
    }
    cancel() {
        this._active && (this.tick(Date.now()),
        this._active = !1,
        this._notify(!1))
    }
    tick(e) {
        const n = e - this._start
          , i = this._duration
          , r = this._prop
          , s = this._from
          , o = this._loop
          , l = this._to;
        let a;
        if (this._active = s !== l && (o || n < i),
        !this._active) {
            this._target[r] = l,
            this._notify(!0);
            return
        }
        if (n < 0) {
            this._target[r] = s;
            return
        }
        a = n / i % 2,
        a = o && a > 1 ? 2 - a : a,
        a = this._easing(Math.min(1, Math.max(0, a))),
        this._target[r] = this._fn(s, l, a)
    }
    wait() {
        const e = this._promises || (this._promises = []);
        return new Promise( (n, i) => {
            e.push({
                res: n,
                rej: i
            })
        }
        )
    }
    _notify(e) {
        const n = e ? "res" : "rej"
          , i = this._promises || [];
        for (let r = 0; r < i.length; r++)
            i[r][n]()
    }
}
class Cp {
    constructor(e, n) {
        this._chart = e,
        this._properties = new Map,
        this.configure(n)
    }
    configure(e) {
        if (!B(e))
            return;
        const n = Object.keys(ue.animation)
          , i = this._properties;
        Object.getOwnPropertyNames(e).forEach(r => {
            const s = e[r];
            if (!B(s))
                return;
            const o = {};
            for (const l of n)
                o[l] = s[l];
            (fe(s.properties) && s.properties || [r]).forEach(l => {
                (l === r || !i.has(l)) && i.set(l, o)
            }
            )
        }
        )
    }
    _animateOptions(e, n) {
        const i = n.options
          , r = Q0(e, i);
        if (!r)
            return [];
        const s = this._createAnimations(r, i);
        return i.$shared && K0(e.options.$animations, i).then( () => {
            e.options = i
        }
        , () => {}
        ),
        s
    }
    _createAnimations(e, n) {
        const i = this._properties
          , r = []
          , s = e.$animations || (e.$animations = {})
          , o = Object.keys(n)
          , l = Date.now();
        let a;
        for (a = o.length - 1; a >= 0; --a) {
            const u = o[a];
            if (u.charAt(0) === "$")
                continue;
            if (u === "options") {
                r.push(...this._animateOptions(e, n));
                continue
            }
            const c = n[u];
            let f = s[u];
            const d = i.get(u);
            if (f)
                if (d && f.active()) {
                    f.update(d, c, l);
                    continue
                } else
                    f.cancel();
            if (!d || !d.duration) {
                e[u] = c;
                continue
            }
            s[u] = f = new X0(d,e,u,c),
            r.push(f)
        }
        return r
    }
    update(e, n) {
        if (this._properties.size === 0) {
            Object.assign(e, n);
            return
        }
        const i = this._createAnimations(e, n);
        if (i.length)
            return _t.add(this._chart, i),
            !0
    }
}
function K0(t, e) {
    const n = []
      , i = Object.keys(e);
    for (let r = 0; r < i.length; r++) {
        const s = t[i[r]];
        s && s.active() && n.push(s.wait())
    }
    return Promise.all(n)
}
function Q0(t, e) {
    if (!e)
        return;
    let n = t.options;
    if (!n) {
        t.options = e;
        return
    }
    return n.$shared && (t.options = n = Object.assign({}, n, {
        $shared: !1,
        $animations: {}
    })),
    n
}
function Gc(t, e) {
    const n = t && t.options || {}
      , i = n.reverse
      , r = n.min === void 0 ? e : 0
      , s = n.max === void 0 ? e : 0;
    return {
        start: i ? s : r,
        end: i ? r : s
    }
}
function G0(t, e, n) {
    if (n === !1)
        return !1;
    const i = Gc(t, n)
      , r = Gc(e, n);
    return {
        top: r.end,
        right: i.end,
        bottom: r.start,
        left: i.start
    }
}
function Z0(t) {
    let e, n, i, r;
    return B(t) ? (e = t.top,
    n = t.right,
    i = t.bottom,
    r = t.left) : e = n = i = r = t,
    {
        top: e,
        right: n,
        bottom: i,
        left: r,
        disabled: t === !1
    }
}
function bp(t, e) {
    const n = []
      , i = t._getSortedDatasetMetas(e);
    let r, s;
    for (r = 0,
    s = i.length; r < s; ++r)
        n.push(i[r].index);
    return n
}
function Zc(t, e, n, i={}) {
    const r = t.keys
      , s = i.mode === "single";
    let o, l, a, u;
    if (e !== null) {
        for (o = 0,
        l = r.length; o < l; ++o) {
            if (a = +r[o],
            a === n) {
                if (i.all)
                    continue;
                break
            }
            u = t.values[a],
            xe(u) && (s || e === 0 || Qs(e) === Qs(u)) && (e += u)
        }
        return e
    }
}
function J0(t, e) {
    const {iScale: n, vScale: i} = e
      , r = n.axis === "x" ? "x" : "y"
      , s = i.axis === "x" ? "x" : "y"
      , o = Object.keys(t)
      , l = new Array(o.length);
    let a, u, c;
    for (a = 0,
    u = o.length; a < u; ++a)
        c = o[a],
        l[a] = {
            [r]: c,
            [s]: t[c]
        };
    return l
}
function Jc(t, e) {
    const n = t && t.options.stacked;
    return n || n === void 0 && e.stack !== void 0
}
function q0(t, e, n) {
    return `${t.id}.${e.id}.${n.stack || n.type}`
}
function $0(t) {
    const {min: e, max: n, minDefined: i, maxDefined: r} = t.getUserBounds();
    return {
        min: i ? e : Number.NEGATIVE_INFINITY,
        max: r ? n : Number.POSITIVE_INFINITY
    }
}
function ey(t, e, n) {
    const i = t[e] || (t[e] = {});
    return i[n] || (i[n] = {})
}
function qc(t, e, n, i) {
    for (const r of e.getMatchingVisibleMetas(i).reverse()) {
        const s = t[r.index];
        if (n && s > 0 || !n && s < 0)
            return r.index
    }
    return null
}
function $c(t, e) {
    const {chart: n, _cachedMeta: i} = t
      , r = n._stacks || (n._stacks = {})
      , {iScale: s, vScale: o, index: l} = i
      , a = s.axis
      , u = o.axis
      , c = q0(s, o, i)
      , f = e.length;
    let d;
    for (let h = 0; h < f; ++h) {
        const m = e[h]
          , {[a]: v, [u]: x} = m
          , g = m._stacks || (m._stacks = {});
        d = g[u] = ey(r, c, v),
        d[l] = x,
        d._top = qc(d, o, !0, i.type),
        d._bottom = qc(d, o, !1, i.type);
        const p = d._visualValues || (d._visualValues = {});
        p[l] = x
    }
}
function il(t, e) {
    const n = t.scales;
    return Object.keys(n).filter(i => n[i].axis === e).shift()
}
function ty(t, e) {
    return Tn(t, {
        active: !1,
        dataset: void 0,
        datasetIndex: e,
        index: e,
        mode: "default",
        type: "dataset"
    })
}
function ny(t, e, n) {
    return Tn(t, {
        active: !1,
        dataIndex: e,
        parsed: void 0,
        raw: void 0,
        element: n,
        index: e,
        mode: "default",
        type: "data"
    })
}
function Ci(t, e) {
    const n = t.controller.index
      , i = t.vScale && t.vScale.axis;
    if (i) {
        e = e || t._parsed;
        for (const r of e) {
            const s = r._stacks;
            if (!s || s[i] === void 0 || s[i][n] === void 0)
                return;
            delete s[i][n],
            s[i]._visualValues !== void 0 && s[i]._visualValues[n] !== void 0 && delete s[i]._visualValues[n]
        }
    }
}
const rl = t => t === "reset" || t === "none"
  , ef = (t, e) => e ? t : Object.assign({}, t)
  , iy = (t, e, n) => t && !e.hidden && e._stacked && {
    keys: bp(n, !0),
    values: null
};
class Ji {
    constructor(e, n) {
        this.chart = e,
        this._ctx = e.ctx,
        this.index = n,
        this._cachedDataOpts = {},
        this._cachedMeta = this.getMeta(),
        this._type = this._cachedMeta.type,
        this.options = void 0,
        this._parsing = !1,
        this._data = void 0,
        this._objectData = void 0,
        this._sharedOptions = void 0,
        this._drawStart = void 0,
        this._drawCount = void 0,
        this.enableOptionSharing = !1,
        this.supportsDecimation = !1,
        this.$context = void 0,
        this._syncList = [],
        this.datasetElementType = new.target.datasetElementType,
        this.dataElementType = new.target.dataElementType,
        this.initialize()
    }
    initialize() {
        const e = this._cachedMeta;
        this.configure(),
        this.linkScales(),
        e._stacked = Jc(e.vScale, e),
        this.addElements(),
        this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")
    }
    updateIndex(e) {
        this.index !== e && Ci(this._cachedMeta),
        this.index = e
    }
    linkScales() {
        const e = this.chart
          , n = this._cachedMeta
          , i = this.getDataset()
          , r = (f, d, h, m) => f === "x" ? d : f === "r" ? m : h
          , s = n.xAxisID = W(i.xAxisID, il(e, "x"))
          , o = n.yAxisID = W(i.yAxisID, il(e, "y"))
          , l = n.rAxisID = W(i.rAxisID, il(e, "r"))
          , a = n.indexAxis
          , u = n.iAxisID = r(a, s, o, l)
          , c = n.vAxisID = r(a, o, s, l);
        n.xScale = this.getScaleForId(s),
        n.yScale = this.getScaleForId(o),
        n.rScale = this.getScaleForId(l),
        n.iScale = this.getScaleForId(u),
        n.vScale = this.getScaleForId(c)
    }
    getDataset() {
        return this.chart.data.datasets[this.index]
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index)
    }
    getScaleForId(e) {
        return this.chart.scales[e]
    }
    _getOtherScale(e) {
        const n = this._cachedMeta;
        return e === n.iScale ? n.vScale : n.iScale
    }
    reset() {
        this._update("reset")
    }
    _destroy() {
        const e = this._cachedMeta;
        this._data && jc(this._data, this),
        e._stacked && Ci(e)
    }
    _dataCheck() {
        const e = this.getDataset()
          , n = e.data || (e.data = [])
          , i = this._data;
        if (B(n)) {
            const r = this._cachedMeta;
            this._data = J0(n, r)
        } else if (i !== n) {
            if (i) {
                jc(i, this);
                const r = this._cachedMeta;
                Ci(r),
                r._parsed = []
            }
            n && Object.isExtensible(n) && i0(n, this),
            this._syncList = [],
            this._data = n
        }
    }
    addElements() {
        const e = this._cachedMeta;
        this._dataCheck(),
        this.datasetElementType && (e.dataset = new this.datasetElementType)
    }
    buildOrUpdateElements(e) {
        const n = this._cachedMeta
          , i = this.getDataset();
        let r = !1;
        this._dataCheck();
        const s = n._stacked;
        n._stacked = Jc(n.vScale, n),
        n.stack !== i.stack && (r = !0,
        Ci(n),
        n.stack = i.stack),
        this._resyncElements(e),
        (r || s !== n._stacked) && $c(this, n._parsed)
    }
    configure() {
        const e = this.chart.config
          , n = e.datasetScopeKeys(this._type)
          , i = e.getOptionScopes(this.getDataset(), n, !0);
        this.options = e.createResolver(i, this.getContext()),
        this._parsing = this.options.parsing,
        this._cachedDataOpts = {}
    }
    parse(e, n) {
        const {_cachedMeta: i, _data: r} = this
          , {iScale: s, _stacked: o} = i
          , l = s.axis;
        let a = e === 0 && n === r.length ? !0 : i._sorted, u = e > 0 && i._parsed[e - 1], c, f, d;
        if (this._parsing === !1)
            i._parsed = r,
            i._sorted = !0,
            d = r;
        else {
            fe(r[e]) ? d = this.parseArrayData(i, r, e, n) : B(r[e]) ? d = this.parseObjectData(i, r, e, n) : d = this.parsePrimitiveData(i, r, e, n);
            const h = () => f[l] === null || u && f[l] < u[l];
            for (c = 0; c < n; ++c)
                i._parsed[c + e] = f = d[c],
                a && (h() && (a = !1),
                u = f);
            i._sorted = a
        }
        o && $c(this, d)
    }
    parsePrimitiveData(e, n, i, r) {
        const {iScale: s, vScale: o} = e
          , l = s.axis
          , a = o.axis
          , u = s.getLabels()
          , c = s === o
          , f = new Array(r);
        let d, h, m;
        for (d = 0,
        h = r; d < h; ++d)
            m = d + i,
            f[d] = {
                [l]: c || s.parse(u[m], m),
                [a]: o.parse(n[m], m)
            };
        return f
    }
    parseArrayData(e, n, i, r) {
        const {xScale: s, yScale: o} = e
          , l = new Array(r);
        let a, u, c, f;
        for (a = 0,
        u = r; a < u; ++a)
            c = a + i,
            f = n[c],
            l[a] = {
                x: s.parse(f[0], c),
                y: o.parse(f[1], c)
            };
        return l
    }
    parseObjectData(e, n, i, r) {
        const {xScale: s, yScale: o} = e
          , {xAxisKey: l="x", yAxisKey: a="y"} = this._parsing
          , u = new Array(r);
        let c, f, d, h;
        for (c = 0,
        f = r; c < f; ++c)
            d = c + i,
            h = n[d],
            u[c] = {
                x: s.parse(yr(h, l), d),
                y: o.parse(yr(h, a), d)
            };
        return u
    }
    getParsed(e) {
        return this._cachedMeta._parsed[e]
    }
    getDataElement(e) {
        return this._cachedMeta.data[e]
    }
    applyStack(e, n, i) {
        const r = this.chart
          , s = this._cachedMeta
          , o = n[e.axis]
          , l = {
            keys: bp(r, !0),
            values: n._stacks[e.axis]._visualValues
        };
        return Zc(l, o, s.index, {
            mode: i
        })
    }
    updateRangeFromParsed(e, n, i, r) {
        const s = i[n.axis];
        let o = s === null ? NaN : s;
        const l = r && i._stacks[n.axis];
        r && l && (r.values = l,
        o = Zc(r, s, this._cachedMeta.index)),
        e.min = Math.min(e.min, o),
        e.max = Math.max(e.max, o)
    }
    getMinMax(e, n) {
        const i = this._cachedMeta
          , r = i._parsed
          , s = i._sorted && e === i.iScale
          , o = r.length
          , l = this._getOtherScale(e)
          , a = iy(n, i, this.chart)
          , u = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        }
          , {min: c, max: f} = $0(l);
        let d, h;
        function m() {
            h = r[d];
            const v = h[l.axis];
            return !xe(h[e.axis]) || c > v || f < v
        }
        for (d = 0; d < o && !(!m() && (this.updateRangeFromParsed(u, e, h, a),
        s)); ++d)
            ;
        if (s) {
            for (d = o - 1; d >= 0; --d)
                if (!m()) {
                    this.updateRangeFromParsed(u, e, h, a);
                    break
                }
        }
        return u
    }
    getAllParsedValues(e) {
        const n = this._cachedMeta._parsed
          , i = [];
        let r, s, o;
        for (r = 0,
        s = n.length; r < s; ++r)
            o = n[r][e.axis],
            xe(o) && i.push(o);
        return i
    }
    getMaxOverflow() {
        return !1
    }
    getLabelAndValue(e) {
        const n = this._cachedMeta
          , i = n.iScale
          , r = n.vScale
          , s = this.getParsed(e);
        return {
            label: i ? "" + i.getLabelForValue(s[i.axis]) : "",
            value: r ? "" + r.getLabelForValue(s[r.axis]) : ""
        }
    }
    _update(e) {
        const n = this._cachedMeta;
        this.update(e || "default"),
        n._clip = Z0(W(this.options.clip, G0(n.xScale, n.yScale, this.getMaxOverflow())))
    }
    update(e) {}
    draw() {
        const e = this._ctx
          , n = this.chart
          , i = this._cachedMeta
          , r = i.data || []
          , s = n.chartArea
          , o = []
          , l = this._drawStart || 0
          , a = this._drawCount || r.length - l
          , u = this.options.drawActiveElementsOnTop;
        let c;
        for (i.dataset && i.dataset.draw(e, s, l, a),
        c = l; c < l + a; ++c) {
            const f = r[c];
            f.hidden || (f.active && u ? o.push(f) : f.draw(e, s))
        }
        for (c = 0; c < o.length; ++c)
            o[c].draw(e, s)
    }
    getStyle(e, n) {
        const i = n ? "active" : "default";
        return e === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(e || 0, i)
    }
    getContext(e, n, i) {
        const r = this.getDataset();
        let s;
        if (e >= 0 && e < this._cachedMeta.data.length) {
            const o = this._cachedMeta.data[e];
            s = o.$context || (o.$context = ny(this.getContext(), e, o)),
            s.parsed = this.getParsed(e),
            s.raw = r.data[e],
            s.index = s.dataIndex = e
        } else
            s = this.$context || (this.$context = ty(this.chart.getContext(), this.index)),
            s.dataset = r,
            s.index = s.datasetIndex = this.index;
        return s.active = !!n,
        s.mode = i,
        s
    }
    resolveDatasetElementOptions(e) {
        return this._resolveElementOptions(this.datasetElementType.id, e)
    }
    resolveDataElementOptions(e, n) {
        return this._resolveElementOptions(this.dataElementType.id, n, e)
    }
    _resolveElementOptions(e, n="default", i) {
        const r = n === "active"
          , s = this._cachedDataOpts
          , o = e + "-" + n
          , l = s[o]
          , a = this.enableOptionSharing && Xs(i);
        if (l)
            return ef(l, a);
        const u = this.chart.config
          , c = u.datasetElementScopeKeys(this._type, e)
          , f = r ? [`${e}Hover`, "hover", e, ""] : [e, ""]
          , d = u.getOptionScopes(this.getDataset(), c)
          , h = Object.keys(ue.elements[e])
          , m = () => this.getContext(i, r, n)
          , v = u.resolveNamedOptions(d, h, m, f);
        return v.$shared && (v.$shared = a,
        s[o] = Object.freeze(ef(v, a))),
        v
    }
    _resolveAnimations(e, n, i) {
        const r = this.chart
          , s = this._cachedDataOpts
          , o = `animation-${n}`
          , l = s[o];
        if (l)
            return l;
        let a;
        if (r.options.animation !== !1) {
            const c = this.chart.config
              , f = c.datasetAnimationScopeKeys(this._type, n)
              , d = c.getOptionScopes(this.getDataset(), f);
            a = c.createResolver(d, this.getContext(e, i, n))
        }
        const u = new Cp(r,a && a.animations);
        return a && a._cacheable && (s[o] = Object.freeze(u)),
        u
    }
    getSharedOptions(e) {
        if (e.$shared)
            return this._sharedOptions || (this._sharedOptions = Object.assign({}, e))
    }
    includeOptions(e, n) {
        return !n || rl(e) || this.chart._animationsDisabled
    }
    _getSharedOptions(e, n) {
        const i = this.resolveDataElementOptions(e, n)
          , r = this._sharedOptions
          , s = this.getSharedOptions(i)
          , o = this.includeOptions(n, s) || s !== r;
        return this.updateSharedOptions(s, n, i),
        {
            sharedOptions: s,
            includeOptions: o
        }
    }
    updateElement(e, n, i, r) {
        rl(r) ? Object.assign(e, i) : this._resolveAnimations(n, r).update(e, i)
    }
    updateSharedOptions(e, n, i) {
        e && !rl(n) && this._resolveAnimations(void 0, n).update(e, i)
    }
    _setStyle(e, n, i, r) {
        e.active = r;
        const s = this.getStyle(n, r);
        this._resolveAnimations(n, i, r).update(e, {
            options: !r && this.getSharedOptions(s) || s
        })
    }
    removeHoverStyle(e, n, i) {
        this._setStyle(e, i, "active", !1)
    }
    setHoverStyle(e, n, i) {
        this._setStyle(e, i, "active", !0)
    }
    _removeDatasetHoverStyle() {
        const e = this._cachedMeta.dataset;
        e && this._setStyle(e, void 0, "active", !1)
    }
    _setDatasetHoverStyle() {
        const e = this._cachedMeta.dataset;
        e && this._setStyle(e, void 0, "active", !0)
    }
    _resyncElements(e) {
        const n = this._data
          , i = this._cachedMeta.data;
        for (const [l,a,u] of this._syncList)
            this[l](a, u);
        this._syncList = [];
        const r = i.length
          , s = n.length
          , o = Math.min(s, r);
        o && this.parse(0, o),
        s > r ? this._insertElements(r, s - r, e) : s < r && this._removeElements(s, r - s)
    }
    _insertElements(e, n, i=!0) {
        const r = this._cachedMeta
          , s = r.data
          , o = e + n;
        let l;
        const a = u => {
            for (u.length += n,
            l = u.length - 1; l >= o; l--)
                u[l] = u[l - n]
        }
        ;
        for (a(s),
        l = e; l < o; ++l)
            s[l] = new this.dataElementType;
        this._parsing && a(r._parsed),
        this.parse(e, n),
        i && this.updateElements(s, e, n, "reset")
    }
    updateElements(e, n, i, r) {}
    _removeElements(e, n) {
        const i = this._cachedMeta;
        if (this._parsing) {
            const r = i._parsed.splice(e, n);
            i._stacked && Ci(i, r)
        }
        i.data.splice(e, n)
    }
    _sync(e) {
        if (this._parsing)
            this._syncList.push(e);
        else {
            const [n,i,r] = e;
            this[n](i, r)
        }
        this.chart._dataChanges.push([this.index, ...e])
    }
    _onDataPush() {
        const e = arguments.length;
        this._sync(["_insertElements", this.getDataset().data.length - e, e])
    }
    _onDataPop() {
        this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
    }
    _onDataShift() {
        this._sync(["_removeElements", 0, 1])
    }
    _onDataSplice(e, n) {
        n && this._sync(["_removeElements", e, n]);
        const i = arguments.length - 2;
        i && this._sync(["_insertElements", e, i])
    }
    _onDataUnshift() {
        this._sync(["_insertElements", 0, arguments.length])
    }
}
z(Ji, "defaults", {}),
z(Ji, "datasetElementType", null),
z(Ji, "dataElementType", null);
function ry(t, e, n) {
    let i = 1
      , r = 1
      , s = 0
      , o = 0;
    if (e < ae) {
        const l = t
          , a = l + e
          , u = Math.cos(l)
          , c = Math.sin(l)
          , f = Math.cos(a)
          , d = Math.sin(a)
          , h = (y, w, k) => Zs(y, l, a, !0) ? 1 : Math.max(w, w * n, k, k * n)
          , m = (y, w, k) => Zs(y, l, a, !0) ? -1 : Math.min(w, w * n, k, k * n)
          , v = h(0, u, f)
          , x = h(de, c, d)
          , g = m(pe, u, f)
          , p = m(pe + de, c, d);
        i = (v - g) / 2,
        r = (x - p) / 2,
        s = -(v + g) / 2,
        o = -(x + p) / 2
    }
    return {
        ratioX: i,
        ratioY: r,
        offsetX: s,
        offsetY: o
    }
}
class zi extends Ji {
    constructor(e, n) {
        super(e, n),
        this.enableOptionSharing = !0,
        this.innerRadius = void 0,
        this.outerRadius = void 0,
        this.offsetX = void 0,
        this.offsetY = void 0
    }
    linkScales() {}
    parse(e, n) {
        const i = this.getDataset().data
          , r = this._cachedMeta;
        if (this._parsing === !1)
            r._parsed = i;
        else {
            let s = a => +i[a];
            if (B(i[e])) {
                const {key: a="value"} = this._parsing;
                s = u => +yr(i[u], a)
            }
            let o, l;
            for (o = e,
            l = e + n; o < l; ++o)
                r._parsed[o] = s(o)
        }
    }
    _getRotation() {
        return yt(this.options.rotation - 90)
    }
    _getCircumference() {
        return yt(this.options.circumference)
    }
    _getRotationExtents() {
        let e = ae
          , n = -ae;
        for (let i = 0; i < this.chart.data.datasets.length; ++i)
            if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
                const r = this.chart.getDatasetMeta(i).controller
                  , s = r._getRotation()
                  , o = r._getCircumference();
                e = Math.min(e, s),
                n = Math.max(n, s + o)
            }
        return {
            rotation: e,
            circumference: n - e
        }
    }
    update(e) {
        const n = this.chart
          , {chartArea: i} = n
          , r = this._cachedMeta
          , s = r.data
          , o = this.getMaxBorderWidth() + this.getMaxOffset(s) + this.options.spacing
          , l = Math.max((Math.min(i.width, i.height) - o) / 2, 0)
          , a = Math.min(U1(this.options.cutout, l), 1)
          , u = this._getRingWeight(this.index)
          , {circumference: c, rotation: f} = this._getRotationExtents()
          , {ratioX: d, ratioY: h, offsetX: m, offsetY: v} = ry(f, c, a)
          , x = (i.width - o) / d
          , g = (i.height - o) / h
          , p = Math.max(Math.min(x, g) / 2, 0)
          , y = lp(this.options.radius, p)
          , w = Math.max(y * a, 0)
          , k = (y - w) / this._getVisibleDatasetWeightTotal();
        this.offsetX = m * y,
        this.offsetY = v * y,
        r.total = this.calculateTotal(),
        this.outerRadius = y - k * this._getRingWeightOffset(this.index),
        this.innerRadius = Math.max(this.outerRadius - k * u, 0),
        this.updateElements(s, 0, s.length, e)
    }
    _circumference(e, n) {
        const i = this.options
          , r = this._cachedMeta
          , s = this._getCircumference();
        return n && i.animation.animateRotate || !this.chart.getDataVisibility(e) || r._parsed[e] === null || r.data[e].hidden ? 0 : this.calculateCircumference(r._parsed[e] * s / ae)
    }
    updateElements(e, n, i, r) {
        const s = r === "reset"
          , o = this.chart
          , l = o.chartArea
          , u = o.options.animation
          , c = (l.left + l.right) / 2
          , f = (l.top + l.bottom) / 2
          , d = s && u.animateScale
          , h = d ? 0 : this.innerRadius
          , m = d ? 0 : this.outerRadius
          , {sharedOptions: v, includeOptions: x} = this._getSharedOptions(n, r);
        let g = this._getRotation(), p;
        for (p = 0; p < n; ++p)
            g += this._circumference(p, s);
        for (p = n; p < n + i; ++p) {
            const y = this._circumference(p, s)
              , w = e[p]
              , k = {
                x: c + this.offsetX,
                y: f + this.offsetY,
                startAngle: g,
                endAngle: g + y,
                circumference: y,
                outerRadius: m,
                innerRadius: h
            };
            x && (k.options = v || this.resolveDataElementOptions(p, w.active ? "active" : r)),
            g += y,
            this.updateElement(w, p, k, r)
        }
    }
    calculateTotal() {
        const e = this._cachedMeta
          , n = e.data;
        let i = 0, r;
        for (r = 0; r < n.length; r++) {
            const s = e._parsed[r];
            s !== null && !isNaN(s) && this.chart.getDataVisibility(r) && !n[r].hidden && (i += Math.abs(s))
        }
        return i
    }
    calculateCircumference(e) {
        const n = this._cachedMeta.total;
        return n > 0 && !isNaN(e) ? ae * (Math.abs(e) / n) : 0
    }
    getLabelAndValue(e) {
        const n = this._cachedMeta
          , i = this.chart
          , r = i.data.labels || []
          , s = So(n._parsed[e], i.options.locale);
        return {
            label: r[e] || "",
            value: s
        }
    }
    getMaxBorderWidth(e) {
        let n = 0;
        const i = this.chart;
        let r, s, o, l, a;
        if (!e) {
            for (r = 0,
            s = i.data.datasets.length; r < s; ++r)
                if (i.isDatasetVisible(r)) {
                    o = i.getDatasetMeta(r),
                    e = o.data,
                    l = o.controller;
                    break
                }
        }
        if (!e)
            return 0;
        for (r = 0,
        s = e.length; r < s; ++r)
            a = l.resolveDataElementOptions(r),
            a.borderAlign !== "inner" && (n = Math.max(n, a.borderWidth || 0, a.hoverBorderWidth || 0));
        return n
    }
    getMaxOffset(e) {
        let n = 0;
        for (let i = 0, r = e.length; i < r; ++i) {
            const s = this.resolveDataElementOptions(i);
            n = Math.max(n, s.offset || 0, s.hoverOffset || 0)
        }
        return n
    }
    _getRingWeightOffset(e) {
        let n = 0;
        for (let i = 0; i < e; ++i)
            this.chart.isDatasetVisible(i) && (n += this._getRingWeight(i));
        return n
    }
    _getRingWeight(e) {
        return Math.max(W(this.chart.data.datasets[e].weight, 1), 0)
    }
    _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
    }
}
z(zi, "id", "doughnut"),
z(zi, "defaults", {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: {
        animateRotate: !0,
        animateScale: !1
    },
    animations: {
        numbers: {
            type: "number",
            properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
        }
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r"
}),
z(zi, "descriptors", {
    _scriptable: e => e !== "spacing",
    _indexable: e => e !== "spacing" && !e.startsWith("borderDash") && !e.startsWith("hoverBorderDash")
}),
z(zi, "overrides", {
    aspectRatio: 1,
    plugins: {
        legend: {
            labels: {
                generateLabels(e) {
                    const n = e.data;
                    if (n.labels.length && n.datasets.length) {
                        const {labels: {pointStyle: i, color: r}} = e.legend.options;
                        return n.labels.map( (s, o) => {
                            const a = e.getDatasetMeta(0).controller.getStyle(o);
                            return {
                                text: s,
                                fillStyle: a.backgroundColor,
                                strokeStyle: a.borderColor,
                                fontColor: r,
                                lineWidth: a.borderWidth,
                                pointStyle: i,
                                hidden: !e.getDataVisibility(o),
                                index: o
                            }
                        }
                        )
                    }
                    return []
                }
            },
            onClick(e, n, i) {
                i.chart.toggleDataVisibility(n.index),
                i.chart.update()
            }
        }
    }
});
function dn() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
}
class yu {
    constructor(e) {
        z(this, "options");
        this.options = e || {}
    }
    static override(e) {
        Object.assign(yu.prototype, e)
    }
    init() {}
    formats() {
        return dn()
    }
    parse() {
        return dn()
    }
    format() {
        return dn()
    }
    add() {
        return dn()
    }
    diff() {
        return dn()
    }
    startOf() {
        return dn()
    }
    endOf() {
        return dn()
    }
}
var sy = {
    _date: yu
};
function oy(t, e, n, i) {
    const {controller: r, data: s, _sorted: o} = t
      , l = r._cachedMeta.iScale;
    if (l && e === l.axis && e !== "r" && o && s.length) {
        const a = l._reversePixels ? t0 : na;
        if (i) {
            if (r._sharedOptions) {
                const u = s[0]
                  , c = typeof u.getRange == "function" && u.getRange(e);
                if (c) {
                    const f = a(s, e, n - c)
                      , d = a(s, e, n + c);
                    return {
                        lo: f.lo,
                        hi: d.hi
                    }
                }
            }
        } else
            return a(s, e, n)
    }
    return {
        lo: 0,
        hi: s.length - 1
    }
}
function Ar(t, e, n, i, r) {
    const s = t.getSortedVisibleDatasetMetas()
      , o = n[e];
    for (let l = 0, a = s.length; l < a; ++l) {
        const {index: u, data: c} = s[l]
          , {lo: f, hi: d} = oy(s[l], e, o, r);
        for (let h = f; h <= d; ++h) {
            const m = c[h];
            m.skip || i(m, u, h)
        }
    }
}
function ly(t) {
    const e = t.indexOf("x") !== -1
      , n = t.indexOf("y") !== -1;
    return function(i, r) {
        const s = e ? Math.abs(i.x - r.x) : 0
          , o = n ? Math.abs(i.y - r.y) : 0;
        return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2))
    }
}
function sl(t, e, n, i, r) {
    const s = [];
    return !r && !t.isPointInArea(e) || Ar(t, n, e, function(l, a, u) {
        !r && !Qn(l, t.chartArea, 0) || l.inRange(e.x, e.y, i) && s.push({
            element: l,
            datasetIndex: a,
            index: u
        })
    }, !0),
    s
}
function ay(t, e, n, i) {
    let r = [];
    function s(o, l, a) {
        const {startAngle: u, endAngle: c} = o.getProps(["startAngle", "endAngle"], i)
          , {angle: f} = cp(o, {
            x: e.x,
            y: e.y
        });
        Zs(f, u, c) && r.push({
            element: o,
            datasetIndex: l,
            index: a
        })
    }
    return Ar(t, n, e, s),
    r
}
function uy(t, e, n, i, r, s) {
    let o = [];
    const l = ly(n);
    let a = Number.POSITIVE_INFINITY;
    function u(c, f, d) {
        const h = c.inRange(e.x, e.y, r);
        if (i && !h)
            return;
        const m = c.getCenterPoint(r);
        if (!(!!s || t.isPointInArea(m)) && !h)
            return;
        const x = l(e, m);
        x < a ? (o = [{
            element: c,
            datasetIndex: f,
            index: d
        }],
        a = x) : x === a && o.push({
            element: c,
            datasetIndex: f,
            index: d
        })
    }
    return Ar(t, n, e, u),
    o
}
function ol(t, e, n, i, r, s) {
    return !s && !t.isPointInArea(e) ? [] : n === "r" && !i ? ay(t, e, n, r) : uy(t, e, n, i, r, s)
}
function tf(t, e, n, i, r) {
    const s = []
      , o = n === "x" ? "inXRange" : "inYRange";
    let l = !1;
    return Ar(t, n, e, (a, u, c) => {
        a[o] && a[o](e[n], r) && (s.push({
            element: a,
            datasetIndex: u,
            index: c
        }),
        l = l || a.inRange(e.x, e.y, r))
    }
    ),
    i && !l ? [] : s
}
var cy = {
    evaluateInteractionItems: Ar,
    modes: {
        index(t, e, n, i) {
            const r = mn(e, t)
              , s = n.axis || "x"
              , o = n.includeInvisible || !1
              , l = n.intersect ? sl(t, r, s, i, o) : ol(t, r, s, !1, i, o)
              , a = [];
            return l.length ? (t.getSortedVisibleDatasetMetas().forEach(u => {
                const c = l[0].index
                  , f = u.data[c];
                f && !f.skip && a.push({
                    element: f,
                    datasetIndex: u.index,
                    index: c
                })
            }
            ),
            a) : []
        },
        dataset(t, e, n, i) {
            const r = mn(e, t)
              , s = n.axis || "xy"
              , o = n.includeInvisible || !1;
            let l = n.intersect ? sl(t, r, s, i, o) : ol(t, r, s, !1, i, o);
            if (l.length > 0) {
                const a = l[0].datasetIndex
                  , u = t.getDatasetMeta(a).data;
                l = [];
                for (let c = 0; c < u.length; ++c)
                    l.push({
                        element: u[c],
                        datasetIndex: a,
                        index: c
                    })
            }
            return l
        },
        point(t, e, n, i) {
            const r = mn(e, t)
              , s = n.axis || "xy"
              , o = n.includeInvisible || !1;
            return sl(t, r, s, i, o)
        },
        nearest(t, e, n, i) {
            const r = mn(e, t)
              , s = n.axis || "xy"
              , o = n.includeInvisible || !1;
            return ol(t, r, s, n.intersect, i, o)
        },
        x(t, e, n, i) {
            const r = mn(e, t);
            return tf(t, r, "x", n.intersect, i)
        },
        y(t, e, n, i) {
            const r = mn(e, t);
            return tf(t, r, "y", n.intersect, i)
        }
    }
};
const Ap = ["left", "top", "right", "bottom"];
function bi(t, e) {
    return t.filter(n => n.pos === e)
}
function nf(t, e) {
    return t.filter(n => Ap.indexOf(n.pos) === -1 && n.box.axis === e)
}
function Ai(t, e) {
    return t.sort( (n, i) => {
        const r = e ? i : n
          , s = e ? n : i;
        return r.weight === s.weight ? r.index - s.index : r.weight - s.weight
    }
    )
}
function fy(t) {
    const e = [];
    let n, i, r, s, o, l;
    for (n = 0,
    i = (t || []).length; n < i; ++n)
        r = t[n],
        {position: s, options: {stack: o, stackWeight: l=1}} = r,
        e.push({
            index: n,
            box: r,
            pos: s,
            horizontal: r.isHorizontal(),
            weight: r.weight,
            stack: o && s + o,
            stackWeight: l
        });
    return e
}
function dy(t) {
    const e = {};
    for (const n of t) {
        const {stack: i, pos: r, stackWeight: s} = n;
        if (!i || !Ap.includes(r))
            continue;
        const o = e[i] || (e[i] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
        });
        o.count++,
        o.weight += s
    }
    return e
}
function hy(t, e) {
    const n = dy(t)
      , {vBoxMaxWidth: i, hBoxMaxHeight: r} = e;
    let s, o, l;
    for (s = 0,
    o = t.length; s < o; ++s) {
        l = t[s];
        const {fullSize: a} = l.box
          , u = n[l.stack]
          , c = u && l.stackWeight / u.weight;
        l.horizontal ? (l.width = c ? c * i : a && e.availableWidth,
        l.height = r) : (l.width = i,
        l.height = c ? c * r : a && e.availableHeight)
    }
    return n
}
function py(t) {
    const e = fy(t)
      , n = Ai(e.filter(u => u.box.fullSize), !0)
      , i = Ai(bi(e, "left"), !0)
      , r = Ai(bi(e, "right"))
      , s = Ai(bi(e, "top"), !0)
      , o = Ai(bi(e, "bottom"))
      , l = nf(e, "x")
      , a = nf(e, "y");
    return {
        fullSize: n,
        leftAndTop: i.concat(s),
        rightAndBottom: r.concat(a).concat(o).concat(l),
        chartArea: bi(e, "chartArea"),
        vertical: i.concat(r).concat(a),
        horizontal: s.concat(o).concat(l)
    }
}
function rf(t, e, n, i) {
    return Math.max(t[n], e[n]) + Math.max(t[i], e[i])
}
function Mp(t, e) {
    t.top = Math.max(t.top, e.top),
    t.left = Math.max(t.left, e.left),
    t.bottom = Math.max(t.bottom, e.bottom),
    t.right = Math.max(t.right, e.right)
}
function gy(t, e, n, i) {
    const {pos: r, box: s} = n
      , o = t.maxPadding;
    if (!B(r)) {
        n.size && (t[r] -= n.size);
        const f = i[n.stack] || {
            size: 0,
            count: 1
        };
        f.size = Math.max(f.size, n.horizontal ? s.height : s.width),
        n.size = f.size / f.count,
        t[r] += n.size
    }
    s.getPadding && Mp(o, s.getPadding());
    const l = Math.max(0, e.outerWidth - rf(o, t, "left", "right"))
      , a = Math.max(0, e.outerHeight - rf(o, t, "top", "bottom"))
      , u = l !== t.w
      , c = a !== t.h;
    return t.w = l,
    t.h = a,
    n.horizontal ? {
        same: u,
        other: c
    } : {
        same: c,
        other: u
    }
}
function my(t) {
    const e = t.maxPadding;
    function n(i) {
        const r = Math.max(e[i] - t[i], 0);
        return t[i] += r,
        r
    }
    t.y += n("top"),
    t.x += n("left"),
    n("right"),
    n("bottom")
}
function yy(t, e) {
    const n = e.maxPadding;
    function i(r) {
        const s = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        return r.forEach(o => {
            s[o] = Math.max(e[o], n[o])
        }
        ),
        s
    }
    return i(t ? ["left", "right"] : ["top", "bottom"])
}
function Ni(t, e, n, i) {
    const r = [];
    let s, o, l, a, u, c;
    for (s = 0,
    o = t.length,
    u = 0; s < o; ++s) {
        l = t[s],
        a = l.box,
        a.update(l.width || e.w, l.height || e.h, yy(l.horizontal, e));
        const {same: f, other: d} = gy(e, n, l, i);
        u |= f && r.length,
        c = c || d,
        a.fullSize || r.push(l)
    }
    return u && Ni(r, e, n, i) || c
}
function Jr(t, e, n, i, r) {
    t.top = n,
    t.left = e,
    t.right = e + i,
    t.bottom = n + r,
    t.width = i,
    t.height = r
}
function sf(t, e, n, i) {
    const r = n.padding;
    let {x: s, y: o} = e;
    for (const l of t) {
        const a = l.box
          , u = i[l.stack] || {
            count: 1,
            placed: 0,
            weight: 1
        }
          , c = l.stackWeight / u.weight || 1;
        if (l.horizontal) {
            const f = e.w * c
              , d = u.size || a.height;
            Xs(u.start) && (o = u.start),
            a.fullSize ? Jr(a, r.left, o, n.outerWidth - r.right - r.left, d) : Jr(a, e.left + u.placed, o, f, d),
            u.start = o,
            u.placed += f,
            o = a.bottom
        } else {
            const f = e.h * c
              , d = u.size || a.width;
            Xs(u.start) && (s = u.start),
            a.fullSize ? Jr(a, s, r.top, d, n.outerHeight - r.bottom - r.top) : Jr(a, s, e.top + u.placed, d, f),
            u.start = s,
            u.placed += f,
            s = a.right
        }
    }
    e.x = s,
    e.y = o
}
var Kt = {
    addBox(t, e) {
        t.boxes || (t.boxes = []),
        e.fullSize = e.fullSize || !1,
        e.position = e.position || "top",
        e.weight = e.weight || 0,
        e._layers = e._layers || function() {
            return [{
                z: 0,
                draw(n) {
                    e.draw(n)
                }
            }]
        }
        ,
        t.boxes.push(e)
    },
    removeBox(t, e) {
        const n = t.boxes ? t.boxes.indexOf(e) : -1;
        n !== -1 && t.boxes.splice(n, 1)
    },
    configure(t, e, n) {
        e.fullSize = n.fullSize,
        e.position = n.position,
        e.weight = n.weight
    },
    update(t, e, n, i) {
        if (!t)
            return;
        const r = Te(t.options.layout.padding)
          , s = Math.max(e - r.width, 0)
          , o = Math.max(n - r.height, 0)
          , l = py(t.boxes)
          , a = l.vertical
          , u = l.horizontal;
        Y(t.boxes, v => {
            typeof v.beforeLayout == "function" && v.beforeLayout()
        }
        );
        const c = a.reduce( (v, x) => x.box.options && x.box.options.display === !1 ? v : v + 1, 0) || 1
          , f = Object.freeze({
            outerWidth: e,
            outerHeight: n,
            padding: r,
            availableWidth: s,
            availableHeight: o,
            vBoxMaxWidth: s / 2 / c,
            hBoxMaxHeight: o / 2
        })
          , d = Object.assign({}, r);
        Mp(d, Te(i));
        const h = Object.assign({
            maxPadding: d,
            w: s,
            h: o,
            x: r.left,
            y: r.top
        }, r)
          , m = hy(a.concat(u), f);
        Ni(l.fullSize, h, f, m),
        Ni(a, h, f, m),
        Ni(u, h, f, m) && Ni(a, h, f, m),
        my(h),
        sf(l.leftAndTop, h, f, m),
        h.x += h.w,
        h.y += h.h,
        sf(l.rightAndBottom, h, f, m),
        t.chartArea = {
            left: h.left,
            top: h.top,
            right: h.left + h.w,
            bottom: h.top + h.h,
            height: h.h,
            width: h.w
        },
        Y(l.chartArea, v => {
            const x = v.box;
            Object.assign(x, t.chartArea),
            x.update(h.w, h.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            })
        }
        )
    }
};
class Ep {
    acquireContext(e, n) {}
    releaseContext(e) {
        return !1
    }
    addEventListener(e, n, i) {}
    removeEventListener(e, n, i) {}
    getDevicePixelRatio() {
        return 1
    }
    getMaximumSize(e, n, i, r) {
        return n = Math.max(0, n || e.width),
        i = i || e.height,
        {
            width: n,
            height: Math.max(0, r ? Math.floor(n / r) : i)
        }
    }
    isAttached(e) {
        return !0
    }
    updateConfig(e) {}
}
class vy extends Ep {
    acquireContext(e) {
        return e && e.getContext && e.getContext("2d") || null
    }
    updateConfig(e) {
        e.options.animation = !1
    }
}
const vs = "$chartjs"
  , xy = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
}
  , of = t => t === null || t === "";
function wy(t, e) {
    const n = t.style
      , i = t.getAttribute("height")
      , r = t.getAttribute("width");
    if (t[vs] = {
        initial: {
            height: i,
            width: r,
            style: {
                display: n.display,
                height: n.height,
                width: n.width
            }
        }
    },
    n.display = n.display || "block",
    n.boxSizing = n.boxSizing || "border-box",
    of(r)) {
        const s = Kc(t, "width");
        s !== void 0 && (t.width = s)
    }
    if (of(i))
        if (t.style.height === "")
            t.height = t.width / (e || 2);
        else {
            const s = Kc(t, "height");
            s !== void 0 && (t.height = s)
        }
    return t
}
const Pp = H0 ? {
    passive: !0
} : !1;
function ky(t, e, n) {
    t && t.addEventListener(e, n, Pp)
}
function _y(t, e, n) {
    t && t.canvas && t.canvas.removeEventListener(e, n, Pp)
}
function Sy(t, e) {
    const n = xy[t.type] || t.type
      , {x: i, y: r} = mn(t, e);
    return {
        type: n,
        chart: e,
        native: t,
        x: i !== void 0 ? i : null,
        y: r !== void 0 ? r : null
    }
}
function eo(t, e) {
    for (const n of t)
        if (n === e || n.contains(e))
            return !0
}
function Cy(t, e, n) {
    const i = t.canvas
      , r = new MutationObserver(s => {
        let o = !1;
        for (const l of s)
            o = o || eo(l.addedNodes, i),
            o = o && !eo(l.removedNodes, i);
        o && n()
    }
    );
    return r.observe(document, {
        childList: !0,
        subtree: !0
    }),
    r
}
function by(t, e, n) {
    const i = t.canvas
      , r = new MutationObserver(s => {
        let o = !1;
        for (const l of s)
            o = o || eo(l.removedNodes, i),
            o = o && !eo(l.addedNodes, i);
        o && n()
    }
    );
    return r.observe(document, {
        childList: !0,
        subtree: !0
    }),
    r
}
const vr = new Map;
let lf = 0;
function Lp() {
    const t = window.devicePixelRatio;
    t !== lf && (lf = t,
    vr.forEach( (e, n) => {
        n.currentDevicePixelRatio !== t && e()
    }
    ))
}
function Ay(t, e) {
    vr.size || window.addEventListener("resize", Lp),
    vr.set(t, e)
}
function My(t) {
    vr.delete(t),
    vr.size || window.removeEventListener("resize", Lp)
}
function Ey(t, e, n) {
    const i = t.canvas
      , r = i && mu(i);
    if (!r)
        return;
    const s = hp( (l, a) => {
        const u = r.clientWidth;
        n(l, a),
        u < r.clientWidth && n()
    }
    , window)
      , o = new ResizeObserver(l => {
        const a = l[0]
          , u = a.contentRect.width
          , c = a.contentRect.height;
        u === 0 && c === 0 || s(u, c)
    }
    );
    return o.observe(r),
    Ay(t, s),
    o
}
function ll(t, e, n) {
    n && n.disconnect(),
    e === "resize" && My(t)
}
function Py(t, e, n) {
    const i = t.canvas
      , r = hp(s => {
        t.ctx !== null && n(Sy(s, t))
    }
    , t);
    return ky(i, e, r),
    r
}
class Ly extends Ep {
    acquireContext(e, n) {
        const i = e && e.getContext && e.getContext("2d");
        return i && i.canvas === e ? (wy(e, n),
        i) : null
    }
    releaseContext(e) {
        const n = e.canvas;
        if (!n[vs])
            return !1;
        const i = n[vs].initial;
        ["height", "width"].forEach(s => {
            const o = i[s];
            ne(o) ? n.removeAttribute(s) : n.setAttribute(s, o)
        }
        );
        const r = i.style || {};
        return Object.keys(r).forEach(s => {
            n.style[s] = r[s]
        }
        ),
        n.width = n.width,
        delete n[vs],
        !0
    }
    addEventListener(e, n, i) {
        this.removeEventListener(e, n);
        const r = e.$proxies || (e.$proxies = {})
          , o = {
            attach: Cy,
            detach: by,
            resize: Ey
        }[n] || Py;
        r[n] = o(e, n, i)
    }
    removeEventListener(e, n) {
        const i = e.$proxies || (e.$proxies = {})
          , r = i[n];
        if (!r)
            return;
        ({
            attach: ll,
            detach: ll,
            resize: ll
        }[n] || _y)(e, n, r),
        i[n] = void 0
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio
    }
    getMaximumSize(e, n, i, r) {
        return B0(e, n, i, r)
    }
    isAttached(e) {
        const n = e && mu(e);
        return !!(n && n.isConnected)
    }
}
function Oy(t) {
    return !gu() || typeof OffscreenCanvas < "u" && t instanceof OffscreenCanvas ? vy : Ly
}
class Pn {
    constructor() {
        z(this, "x");
        z(this, "y");
        z(this, "active", !1);
        z(this, "options");
        z(this, "$animations")
    }
    tooltipPosition(e) {
        const {x: n, y: i} = this.getProps(["x", "y"], e);
        return {
            x: n,
            y: i
        }
    }
    hasValue() {
        return Gs(this.x) && Gs(this.y)
    }
    getProps(e, n) {
        const i = this.$animations;
        if (!n || !i)
            return this;
        const r = {};
        return e.forEach(s => {
            r[s] = i[s] && i[s].active() ? i[s]._to : this[s]
        }
        ),
        r
    }
}
z(Pn, "defaults", {}),
z(Pn, "defaultRoutes");
function Ty(t, e) {
    const n = t.options.ticks
      , i = Dy(t)
      , r = Math.min(n.maxTicksLimit || i, i)
      , s = n.major.enabled ? zy(e) : []
      , o = s.length
      , l = s[0]
      , a = s[o - 1]
      , u = [];
    if (o > r)
        return Ny(e, u, s, o / r),
        u;
    const c = Ry(s, e, r);
    if (o > 0) {
        let f, d;
        const h = o > 1 ? Math.round((a - l) / (o - 1)) : null;
        for (qr(e, u, c, ne(h) ? 0 : l - h, l),
        f = 0,
        d = o - 1; f < d; f++)
            qr(e, u, c, s[f], s[f + 1]);
        return qr(e, u, c, a, ne(h) ? e.length : a + h),
        u
    }
    return qr(e, u, c),
    u
}
function Dy(t) {
    const e = t.options.offset
      , n = t._tickSize()
      , i = t._length / n + (e ? 0 : 1)
      , r = t._maxLength / n;
    return Math.floor(Math.min(i, r))
}
function Ry(t, e, n) {
    const i = jy(t)
      , r = e.length / n;
    if (!i)
        return Math.max(r, 1);
    const s = J1(i);
    for (let o = 0, l = s.length - 1; o < l; o++) {
        const a = s[o];
        if (a > r)
            return a
    }
    return Math.max(r, 1)
}
function zy(t) {
    const e = [];
    let n, i;
    for (n = 0,
    i = t.length; n < i; n++)
        t[n].major && e.push(n);
    return e
}
function Ny(t, e, n, i) {
    let r = 0, s = n[0], o;
    for (i = Math.ceil(i),
    o = 0; o < t.length; o++)
        o === s && (e.push(t[o]),
        r++,
        s = n[r * i])
}
function qr(t, e, n, i, r) {
    const s = W(i, 0)
      , o = Math.min(W(r, t.length), t.length);
    let l = 0, a, u, c;
    for (n = Math.ceil(n),
    r && (a = r - i,
    n = a / Math.floor(a / n)),
    c = s; c < 0; )
        l++,
        c = Math.round(s + l * n);
    for (u = Math.max(s, 0); u < o; u++)
        u === c && (e.push(t[u]),
        l++,
        c = Math.round(s + l * n))
}
function jy(t) {
    const e = t.length;
    let n, i;
    if (e < 2)
        return !1;
    for (i = t[0],
    n = 1; n < e; ++n)
        if (t[n] - t[n - 1] !== i)
            return !1;
    return i
}
const Iy = t => t === "left" ? "right" : t === "right" ? "left" : t
  , af = (t, e, n) => e === "top" || e === "left" ? t[e] + n : t[e] - n
  , uf = (t, e) => Math.min(e || t, t);
function cf(t, e) {
    const n = []
      , i = t.length / e
      , r = t.length;
    let s = 0;
    for (; s < r; s += i)
        n.push(t[Math.floor(s)]);
    return n
}
function Fy(t, e, n) {
    const i = t.ticks.length
      , r = Math.min(e, i - 1)
      , s = t._startPixel
      , o = t._endPixel
      , l = 1e-6;
    let a = t.getPixelForTick(r), u;
    if (!(n && (i === 1 ? u = Math.max(a - s, o - a) : e === 0 ? u = (t.getPixelForTick(1) - a) / 2 : u = (a - t.getPixelForTick(r - 1)) / 2,
    a += r < e ? u : -u,
    a < s - l || a > o + l)))
        return a
}
function By(t, e) {
    Y(t, n => {
        const i = n.gc
          , r = i.length / 2;
        let s;
        if (r > e) {
            for (s = 0; s < r; ++s)
                delete n.data[i[s]];
            i.splice(0, r)
        }
    }
    )
}
function Mi(t) {
    return t.drawTicks ? t.tickLength : 0
}
function ff(t, e) {
    if (!t.display)
        return 0;
    const n = _e(t.font, e)
      , i = Te(t.padding);
    return (fe(t.text) ? t.text.length : 1) * n.lineHeight + i.height
}
function Hy(t, e) {
    return Tn(t, {
        scale: e,
        type: "scale"
    })
}
function Wy(t, e, n) {
    return Tn(t, {
        tick: n,
        index: e,
        type: "tick"
    })
}
function Vy(t, e, n) {
    let i = pp(t);
    return (n && e !== "right" || !n && e === "right") && (i = Iy(i)),
    i
}
function Uy(t, e, n, i) {
    const {top: r, left: s, bottom: o, right: l, chart: a} = t
      , {chartArea: u, scales: c} = a;
    let f = 0, d, h, m;
    const v = o - r
      , x = l - s;
    if (t.isHorizontal()) {
        if (h = We(i, s, l),
        B(n)) {
            const g = Object.keys(n)[0]
              , p = n[g];
            m = c[g].getPixelForValue(p) + v - e
        } else
            n === "center" ? m = (u.bottom + u.top) / 2 + v - e : m = af(t, n, e);
        d = l - s
    } else {
        if (B(n)) {
            const g = Object.keys(n)[0]
              , p = n[g];
            h = c[g].getPixelForValue(p) - x + e
        } else
            n === "center" ? h = (u.left + u.right) / 2 - x + e : h = af(t, n, e);
        m = We(i, o, r),
        f = n === "left" ? -de : de
    }
    return {
        titleX: h,
        titleY: m,
        maxWidth: d,
        rotation: f
    }
}
class gi extends Pn {
    constructor(e) {
        super(),
        this.id = e.id,
        this.type = e.type,
        this.options = void 0,
        this.ctx = e.ctx,
        this.chart = e.chart,
        this.top = void 0,
        this.bottom = void 0,
        this.left = void 0,
        this.right = void 0,
        this.width = void 0,
        this.height = void 0,
        this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        this.maxWidth = void 0,
        this.maxHeight = void 0,
        this.paddingTop = void 0,
        this.paddingBottom = void 0,
        this.paddingLeft = void 0,
        this.paddingRight = void 0,
        this.axis = void 0,
        this.labelRotation = void 0,
        this.min = void 0,
        this.max = void 0,
        this._range = void 0,
        this.ticks = [],
        this._gridLineItems = null,
        this._labelItems = null,
        this._labelSizes = null,
        this._length = 0,
        this._maxLength = 0,
        this._longestTextCache = {},
        this._startPixel = void 0,
        this._endPixel = void 0,
        this._reversePixels = !1,
        this._userMax = void 0,
        this._userMin = void 0,
        this._suggestedMax = void 0,
        this._suggestedMin = void 0,
        this._ticksLength = 0,
        this._borderValue = 0,
        this._cache = {},
        this._dataLimitsCached = !1,
        this.$context = void 0
    }
    init(e) {
        this.options = e.setContext(this.getContext()),
        this.axis = e.axis,
        this._userMin = this.parse(e.min),
        this._userMax = this.parse(e.max),
        this._suggestedMin = this.parse(e.suggestedMin),
        this._suggestedMax = this.parse(e.suggestedMax)
    }
    parse(e, n) {
        return e
    }
    getUserBounds() {
        let {_userMin: e, _userMax: n, _suggestedMin: i, _suggestedMax: r} = this;
        return e = Ve(e, Number.POSITIVE_INFINITY),
        n = Ve(n, Number.NEGATIVE_INFINITY),
        i = Ve(i, Number.POSITIVE_INFINITY),
        r = Ve(r, Number.NEGATIVE_INFINITY),
        {
            min: Ve(e, i),
            max: Ve(n, r),
            minDefined: xe(e),
            maxDefined: xe(n)
        }
    }
    getMinMax(e) {
        let {min: n, max: i, minDefined: r, maxDefined: s} = this.getUserBounds(), o;
        if (r && s)
            return {
                min: n,
                max: i
            };
        const l = this.getMatchingVisibleMetas();
        for (let a = 0, u = l.length; a < u; ++a)
            o = l[a].controller.getMinMax(this, e),
            r || (n = Math.min(n, o.min)),
            s || (i = Math.max(i, o.max));
        return n = s && n > i ? i : n,
        i = r && n > i ? n : i,
        {
            min: Ve(n, Ve(i, n)),
            max: Ve(i, Ve(n, i))
        }
    }
    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
        }
    }
    getTicks() {
        return this.ticks
    }
    getLabels() {
        const e = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || []
    }
    getLabelItems(e=this.chart.chartArea) {
        return this._labelItems || (this._labelItems = this._computeLabelItems(e))
    }
    beforeLayout() {
        this._cache = {},
        this._dataLimitsCached = !1
    }
    beforeUpdate() {
        Q(this.options.beforeUpdate, [this])
    }
    update(e, n, i) {
        const {beginAtZero: r, grace: s, ticks: o} = this.options
          , l = o.sampleSize;
        this.beforeUpdate(),
        this.maxWidth = e,
        this.maxHeight = n,
        this._margins = i = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, i),
        this.ticks = null,
        this._labelSizes = null,
        this._gridLineItems = null,
        this._labelItems = null,
        this.beforeSetDimensions(),
        this.setDimensions(),
        this.afterSetDimensions(),
        this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom,
        this._dataLimitsCached || (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        this._range = b0(this, s, r),
        this._dataLimitsCached = !0),
        this.beforeBuildTicks(),
        this.ticks = this.buildTicks() || [],
        this.afterBuildTicks();
        const a = l < this.ticks.length;
        this._convertTicksToLabels(a ? cf(this.ticks, l) : this.ticks),
        this.configure(),
        this.beforeCalculateLabelRotation(),
        this.calculateLabelRotation(),
        this.afterCalculateLabelRotation(),
        o.display && (o.autoSkip || o.source === "auto") && (this.ticks = Ty(this, this.ticks),
        this._labelSizes = null,
        this.afterAutoSkip()),
        a && this._convertTicksToLabels(this.ticks),
        this.beforeFit(),
        this.fit(),
        this.afterFit(),
        this.afterUpdate()
    }
    configure() {
        let e = this.options.reverse, n, i;
        this.isHorizontal() ? (n = this.left,
        i = this.right) : (n = this.top,
        i = this.bottom,
        e = !e),
        this._startPixel = n,
        this._endPixel = i,
        this._reversePixels = e,
        this._length = i - n,
        this._alignToPixels = this.options.alignToPixels
    }
    afterUpdate() {
        Q(this.options.afterUpdate, [this])
    }
    beforeSetDimensions() {
        Q(this.options.beforeSetDimensions, [this])
    }
    setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth,
        this.left = 0,
        this.right = this.width) : (this.height = this.maxHeight,
        this.top = 0,
        this.bottom = this.height),
        this.paddingLeft = 0,
        this.paddingTop = 0,
        this.paddingRight = 0,
        this.paddingBottom = 0
    }
    afterSetDimensions() {
        Q(this.options.afterSetDimensions, [this])
    }
    _callHooks(e) {
        this.chart.notifyPlugins(e, this.getContext()),
        Q(this.options[e], [this])
    }
    beforeDataLimits() {
        this._callHooks("beforeDataLimits")
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks("afterDataLimits")
    }
    beforeBuildTicks() {
        this._callHooks("beforeBuildTicks")
    }
    buildTicks() {
        return []
    }
    afterBuildTicks() {
        this._callHooks("afterBuildTicks")
    }
    beforeTickToLabelConversion() {
        Q(this.options.beforeTickToLabelConversion, [this])
    }
    generateTickLabels(e) {
        const n = this.options.ticks;
        let i, r, s;
        for (i = 0,
        r = e.length; i < r; i++)
            s = e[i],
            s.label = Q(n.callback, [s.value, i, e], this)
    }
    afterTickToLabelConversion() {
        Q(this.options.afterTickToLabelConversion, [this])
    }
    beforeCalculateLabelRotation() {
        Q(this.options.beforeCalculateLabelRotation, [this])
    }
    calculateLabelRotation() {
        const e = this.options
          , n = e.ticks
          , i = uf(this.ticks.length, e.ticks.maxTicksLimit)
          , r = n.minRotation || 0
          , s = n.maxRotation;
        let o = r, l, a, u;
        if (!this._isVisible() || !n.display || r >= s || i <= 1 || !this.isHorizontal()) {
            this.labelRotation = r;
            return
        }
        const c = this._getLabelSizes()
          , f = c.widest.width
          , d = c.highest.height
          , h = et(this.chart.width - f, 0, this.maxWidth);
        l = e.offset ? this.maxWidth / i : h / (i - 1),
        f + 6 > l && (l = h / (i - (e.offset ? .5 : 1)),
        a = this.maxHeight - Mi(e.grid) - n.padding - ff(e.title, this.chart.options.font),
        u = Math.sqrt(f * f + d * d),
        o = lu(Math.min(Math.asin(et((c.highest.height + 6) / l, -1, 1)), Math.asin(et(a / u, -1, 1)) - Math.asin(et(d / u, -1, 1)))),
        o = Math.max(r, Math.min(s, o))),
        this.labelRotation = o
    }
    afterCalculateLabelRotation() {
        Q(this.options.afterCalculateLabelRotation, [this])
    }
    afterAutoSkip() {}
    beforeFit() {
        Q(this.options.beforeFit, [this])
    }
    fit() {
        const e = {
            width: 0,
            height: 0
        }
          , {chart: n, options: {ticks: i, title: r, grid: s}} = this
          , o = this._isVisible()
          , l = this.isHorizontal();
        if (o) {
            const a = ff(r, n.options.font);
            if (l ? (e.width = this.maxWidth,
            e.height = Mi(s) + a) : (e.height = this.maxHeight,
            e.width = Mi(s) + a),
            i.display && this.ticks.length) {
                const {first: u, last: c, widest: f, highest: d} = this._getLabelSizes()
                  , h = i.padding * 2
                  , m = yt(this.labelRotation)
                  , v = Math.cos(m)
                  , x = Math.sin(m);
                if (l) {
                    const g = i.mirror ? 0 : x * f.width + v * d.height;
                    e.height = Math.min(this.maxHeight, e.height + g + h)
                } else {
                    const g = i.mirror ? 0 : v * f.width + x * d.height;
                    e.width = Math.min(this.maxWidth, e.width + g + h)
                }
                this._calculatePadding(u, c, x, v)
            }
        }
        this._handleMargins(),
        l ? (this.width = this._length = n.width - this._margins.left - this._margins.right,
        this.height = e.height) : (this.width = e.width,
        this.height = this._length = n.height - this._margins.top - this._margins.bottom)
    }
    _calculatePadding(e, n, i, r) {
        const {ticks: {align: s, padding: o}, position: l} = this.options
          , a = this.labelRotation !== 0
          , u = l !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
            const c = this.getPixelForTick(0) - this.left
              , f = this.right - this.getPixelForTick(this.ticks.length - 1);
            let d = 0
              , h = 0;
            a ? u ? (d = r * e.width,
            h = i * n.height) : (d = i * e.height,
            h = r * n.width) : s === "start" ? h = n.width : s === "end" ? d = e.width : s !== "inner" && (d = e.width / 2,
            h = n.width / 2),
            this.paddingLeft = Math.max((d - c + o) * this.width / (this.width - c), 0),
            this.paddingRight = Math.max((h - f + o) * this.width / (this.width - f), 0)
        } else {
            let c = n.height / 2
              , f = e.height / 2;
            s === "start" ? (c = 0,
            f = e.height) : s === "end" && (c = n.height,
            f = 0),
            this.paddingTop = c + o,
            this.paddingBottom = f + o
        }
    }
    _handleMargins() {
        this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left),
        this._margins.top = Math.max(this.paddingTop, this._margins.top),
        this._margins.right = Math.max(this.paddingRight, this._margins.right),
        this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
    }
    afterFit() {
        Q(this.options.afterFit, [this])
    }
    isHorizontal() {
        const {axis: e, position: n} = this.options;
        return n === "top" || n === "bottom" || e === "x"
    }
    isFullSize() {
        return this.options.fullSize
    }
    _convertTicksToLabels(e) {
        this.beforeTickToLabelConversion(),
        this.generateTickLabels(e);
        let n, i;
        for (n = 0,
        i = e.length; n < i; n++)
            ne(e[n].label) && (e.splice(n, 1),
            i--,
            n--);
        this.afterTickToLabelConversion()
    }
    _getLabelSizes() {
        let e = this._labelSizes;
        if (!e) {
            const n = this.options.ticks.sampleSize;
            let i = this.ticks;
            n < i.length && (i = cf(i, n)),
            this._labelSizes = e = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit)
        }
        return e
    }
    _computeLabelSizes(e, n, i) {
        const {ctx: r, _longestTextCache: s} = this
          , o = []
          , l = []
          , a = Math.floor(n / uf(n, i));
        let u = 0, c = 0, f, d, h, m, v, x, g, p, y, w, k;
        for (f = 0; f < n; f += a) {
            if (m = e[f].label,
            v = this._resolveTickFontOptions(f),
            r.font = x = v.string,
            g = s[x] = s[x] || {
                data: {},
                gc: []
            },
            p = v.lineHeight,
            y = w = 0,
            !ne(m) && !fe(m))
                y = Js(r, g.data, g.gc, y, m),
                w = p;
            else if (fe(m))
                for (d = 0,
                h = m.length; d < h; ++d)
                    k = m[d],
                    !ne(k) && !fe(k) && (y = Js(r, g.data, g.gc, y, k),
                    w += p);
            o.push(y),
            l.push(w),
            u = Math.max(y, u),
            c = Math.max(w, c)
        }
        By(s, n);
        const S = o.indexOf(u)
          , C = l.indexOf(c)
          , b = P => ({
            width: o[P] || 0,
            height: l[P] || 0
        });
        return {
            first: b(0),
            last: b(n - 1),
            widest: b(S),
            highest: b(C),
            widths: o,
            heights: l
        }
    }
    getLabelForValue(e) {
        return e
    }
    getPixelForValue(e, n) {
        return NaN
    }
    getValueForPixel(e) {}
    getPixelForTick(e) {
        const n = this.ticks;
        return e < 0 || e > n.length - 1 ? null : this.getPixelForValue(n[e].value)
    }
    getPixelForDecimal(e) {
        this._reversePixels && (e = 1 - e);
        const n = this._startPixel + e * this._length;
        return e0(this._alignToPixels ? fn(this.chart, n, 0) : n)
    }
    getDecimalForPixel(e) {
        const n = (e - this._startPixel) / this._length;
        return this._reversePixels ? 1 - n : n
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue())
    }
    getBaseValue() {
        const {min: e, max: n} = this;
        return e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0
    }
    getContext(e) {
        const n = this.ticks || [];
        if (e >= 0 && e < n.length) {
            const i = n[e];
            return i.$context || (i.$context = Wy(this.getContext(), e, i))
        }
        return this.$context || (this.$context = Hy(this.chart.getContext(), this))
    }
    _tickSize() {
        const e = this.options.ticks
          , n = yt(this.labelRotation)
          , i = Math.abs(Math.cos(n))
          , r = Math.abs(Math.sin(n))
          , s = this._getLabelSizes()
          , o = e.autoSkipPadding || 0
          , l = s ? s.widest.width + o : 0
          , a = s ? s.highest.height + o : 0;
        return this.isHorizontal() ? a * i > l * r ? l / i : a / r : a * r < l * i ? a / i : l / r
    }
    _isVisible() {
        const e = this.options.display;
        return e !== "auto" ? !!e : this.getMatchingVisibleMetas().length > 0
    }
    _computeGridLineItems(e) {
        const n = this.axis
          , i = this.chart
          , r = this.options
          , {grid: s, position: o, border: l} = r
          , a = s.offset
          , u = this.isHorizontal()
          , f = this.ticks.length + (a ? 1 : 0)
          , d = Mi(s)
          , h = []
          , m = l.setContext(this.getContext())
          , v = m.display ? m.width : 0
          , x = v / 2
          , g = function(H) {
            return fn(i, H, v)
        };
        let p, y, w, k, S, C, b, P, E, T, D, V;
        if (o === "top")
            p = g(this.bottom),
            C = this.bottom - d,
            P = p - x,
            T = g(e.top) + x,
            V = e.bottom;
        else if (o === "bottom")
            p = g(this.top),
            T = e.top,
            V = g(e.bottom) - x,
            C = p + x,
            P = this.top + d;
        else if (o === "left")
            p = g(this.right),
            S = this.right - d,
            b = p - x,
            E = g(e.left) + x,
            D = e.right;
        else if (o === "right")
            p = g(this.left),
            E = e.left,
            D = g(e.right) - x,
            S = p + x,
            b = this.left + d;
        else if (n === "x") {
            if (o === "center")
                p = g((e.top + e.bottom) / 2 + .5);
            else if (B(o)) {
                const H = Object.keys(o)[0]
                  , K = o[H];
                p = g(this.chart.scales[H].getPixelForValue(K))
            }
            T = e.top,
            V = e.bottom,
            C = p + x,
            P = C + d
        } else if (n === "y") {
            if (o === "center")
                p = g((e.left + e.right) / 2);
            else if (B(o)) {
                const H = Object.keys(o)[0]
                  , K = o[H];
                p = g(this.chart.scales[H].getPixelForValue(K))
            }
            S = p - x,
            b = S - d,
            E = e.left,
            D = e.right
        }
        const se = W(r.ticks.maxTicksLimit, f)
          , I = Math.max(1, Math.ceil(f / se));
        for (y = 0; y < f; y += I) {
            const H = this.getContext(y)
              , K = s.setContext(H)
              , M = l.setContext(H)
              , O = K.lineWidth
              , R = K.color
              , N = M.dash || []
              , U = M.dashOffset
              , ye = K.tickWidth
              , ee = K.tickColor
              , wt = K.tickBorderDash || []
              , Pe = K.tickBorderDashOffset;
            w = Fy(this, y, a),
            w !== void 0 && (k = fn(i, w, O),
            u ? S = b = E = D = k : C = P = T = V = k,
            h.push({
                tx1: S,
                ty1: C,
                tx2: b,
                ty2: P,
                x1: E,
                y1: T,
                x2: D,
                y2: V,
                width: O,
                color: R,
                borderDash: N,
                borderDashOffset: U,
                tickWidth: ye,
                tickColor: ee,
                tickBorderDash: wt,
                tickBorderDashOffset: Pe
            }))
        }
        return this._ticksLength = f,
        this._borderValue = p,
        h
    }
    _computeLabelItems(e) {
        const n = this.axis
          , i = this.options
          , {position: r, ticks: s} = i
          , o = this.isHorizontal()
          , l = this.ticks
          , {align: a, crossAlign: u, padding: c, mirror: f} = s
          , d = Mi(i.grid)
          , h = d + c
          , m = f ? -c : h
          , v = -yt(this.labelRotation)
          , x = [];
        let g, p, y, w, k, S, C, b, P, E, T, D, V = "middle";
        if (r === "top")
            S = this.bottom - m,
            C = this._getXAxisLabelAlignment();
        else if (r === "bottom")
            S = this.top + m,
            C = this._getXAxisLabelAlignment();
        else if (r === "left") {
            const I = this._getYAxisLabelAlignment(d);
            C = I.textAlign,
            k = I.x
        } else if (r === "right") {
            const I = this._getYAxisLabelAlignment(d);
            C = I.textAlign,
            k = I.x
        } else if (n === "x") {
            if (r === "center")
                S = (e.top + e.bottom) / 2 + h;
            else if (B(r)) {
                const I = Object.keys(r)[0]
                  , H = r[I];
                S = this.chart.scales[I].getPixelForValue(H) + h
            }
            C = this._getXAxisLabelAlignment()
        } else if (n === "y") {
            if (r === "center")
                k = (e.left + e.right) / 2 - h;
            else if (B(r)) {
                const I = Object.keys(r)[0]
                  , H = r[I];
                k = this.chart.scales[I].getPixelForValue(H)
            }
            C = this._getYAxisLabelAlignment(d).textAlign
        }
        n === "y" && (a === "start" ? V = "top" : a === "end" && (V = "bottom"));
        const se = this._getLabelSizes();
        for (g = 0,
        p = l.length; g < p; ++g) {
            y = l[g],
            w = y.label;
            const I = s.setContext(this.getContext(g));
            b = this.getPixelForTick(g) + s.labelOffset,
            P = this._resolveTickFontOptions(g),
            E = P.lineHeight,
            T = fe(w) ? w.length : 1;
            const H = T / 2
              , K = I.color
              , M = I.textStrokeColor
              , O = I.textStrokeWidth;
            let R = C;
            o ? (k = b,
            C === "inner" && (g === p - 1 ? R = this.options.reverse ? "left" : "right" : g === 0 ? R = this.options.reverse ? "right" : "left" : R = "center"),
            r === "top" ? u === "near" || v !== 0 ? D = -T * E + E / 2 : u === "center" ? D = -se.highest.height / 2 - H * E + E : D = -se.highest.height + E / 2 : u === "near" || v !== 0 ? D = E / 2 : u === "center" ? D = se.highest.height / 2 - H * E : D = se.highest.height - T * E,
            f && (D *= -1),
            v !== 0 && !I.showLabelBackdrop && (k += E / 2 * Math.sin(v))) : (S = b,
            D = (1 - T) * E / 2);
            let N;
            if (I.showLabelBackdrop) {
                const U = Te(I.backdropPadding)
                  , ye = se.heights[g]
                  , ee = se.widths[g];
                let wt = D - U.top
                  , Pe = 0 - U.left;
                switch (V) {
                case "middle":
                    wt -= ye / 2;
                    break;
                case "bottom":
                    wt -= ye;
                    break
                }
                switch (C) {
                case "center":
                    Pe -= ee / 2;
                    break;
                case "right":
                    Pe -= ee;
                    break;
                case "inner":
                    g === p - 1 ? Pe -= ee : g > 0 && (Pe -= ee / 2);
                    break
                }
                N = {
                    left: Pe,
                    top: wt,
                    width: ee + U.width,
                    height: ye + U.height,
                    color: I.backdropColor
                }
            }
            x.push({
                label: w,
                font: P,
                textOffset: D,
                options: {
                    rotation: v,
                    color: K,
                    strokeColor: M,
                    strokeWidth: O,
                    textAlign: R,
                    textBaseline: V,
                    translation: [k, S],
                    backdrop: N
                }
            })
        }
        return x
    }
    _getXAxisLabelAlignment() {
        const {position: e, ticks: n} = this.options;
        if (-yt(this.labelRotation))
            return e === "top" ? "left" : "right";
        let r = "center";
        return n.align === "start" ? r = "left" : n.align === "end" ? r = "right" : n.align === "inner" && (r = "inner"),
        r
    }
    _getYAxisLabelAlignment(e) {
        const {position: n, ticks: {crossAlign: i, mirror: r, padding: s}} = this.options
          , o = this._getLabelSizes()
          , l = e + s
          , a = o.widest.width;
        let u, c;
        return n === "left" ? r ? (c = this.right + s,
        i === "near" ? u = "left" : i === "center" ? (u = "center",
        c += a / 2) : (u = "right",
        c += a)) : (c = this.right - l,
        i === "near" ? u = "right" : i === "center" ? (u = "center",
        c -= a / 2) : (u = "left",
        c = this.left)) : n === "right" ? r ? (c = this.left + s,
        i === "near" ? u = "right" : i === "center" ? (u = "center",
        c -= a / 2) : (u = "left",
        c -= a)) : (c = this.left + l,
        i === "near" ? u = "left" : i === "center" ? (u = "center",
        c += a / 2) : (u = "right",
        c = this.right)) : u = "right",
        {
            textAlign: u,
            x: c
        }
    }
    _computeLabelArea() {
        if (this.options.ticks.mirror)
            return;
        const e = this.chart
          , n = this.options.position;
        if (n === "left" || n === "right")
            return {
                top: 0,
                left: this.left,
                bottom: e.height,
                right: this.right
            };
        if (n === "top" || n === "bottom")
            return {
                top: this.top,
                left: 0,
                bottom: this.bottom,
                right: e.width
            }
    }
    drawBackground() {
        const {ctx: e, options: {backgroundColor: n}, left: i, top: r, width: s, height: o} = this;
        n && (e.save(),
        e.fillStyle = n,
        e.fillRect(i, r, s, o),
        e.restore())
    }
    getLineWidthForValue(e) {
        const n = this.options.grid;
        if (!this._isVisible() || !n.display)
            return 0;
        const r = this.ticks.findIndex(s => s.value === e);
        return r >= 0 ? n.setContext(this.getContext(r)).lineWidth : 0
    }
    drawGrid(e) {
        const n = this.options.grid
          , i = this.ctx
          , r = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(e));
        let s, o;
        const l = (a, u, c) => {
            !c.width || !c.color || (i.save(),
            i.lineWidth = c.width,
            i.strokeStyle = c.color,
            i.setLineDash(c.borderDash || []),
            i.lineDashOffset = c.borderDashOffset,
            i.beginPath(),
            i.moveTo(a.x, a.y),
            i.lineTo(u.x, u.y),
            i.stroke(),
            i.restore())
        }
        ;
        if (n.display)
            for (s = 0,
            o = r.length; s < o; ++s) {
                const a = r[s];
                n.drawOnChartArea && l({
                    x: a.x1,
                    y: a.y1
                }, {
                    x: a.x2,
                    y: a.y2
                }, a),
                n.drawTicks && l({
                    x: a.tx1,
                    y: a.ty1
                }, {
                    x: a.tx2,
                    y: a.ty2
                }, {
                    color: a.tickColor,
                    width: a.tickWidth,
                    borderDash: a.tickBorderDash,
                    borderDashOffset: a.tickBorderDashOffset
                })
            }
    }
    drawBorder() {
        const {chart: e, ctx: n, options: {border: i, grid: r}} = this
          , s = i.setContext(this.getContext())
          , o = i.display ? s.width : 0;
        if (!o)
            return;
        const l = r.setContext(this.getContext(0)).lineWidth
          , a = this._borderValue;
        let u, c, f, d;
        this.isHorizontal() ? (u = fn(e, this.left, o) - o / 2,
        c = fn(e, this.right, l) + l / 2,
        f = d = a) : (f = fn(e, this.top, o) - o / 2,
        d = fn(e, this.bottom, l) + l / 2,
        u = c = a),
        n.save(),
        n.lineWidth = s.width,
        n.strokeStyle = s.color,
        n.beginPath(),
        n.moveTo(u, f),
        n.lineTo(c, d),
        n.stroke(),
        n.restore()
    }
    drawLabels(e) {
        if (!this.options.ticks.display)
            return;
        const i = this.ctx
          , r = this._computeLabelArea();
        r && uu(i, r);
        const s = this.getLabelItems(e);
        for (const o of s) {
            const l = o.options
              , a = o.font
              , u = o.label
              , c = o.textOffset;
            ci(i, u, 0, c, a, l)
        }
        r && cu(i)
    }
    drawTitle() {
        const {ctx: e, options: {position: n, title: i, reverse: r}} = this;
        if (!i.display)
            return;
        const s = _e(i.font)
          , o = Te(i.padding)
          , l = i.align;
        let a = s.lineHeight / 2;
        n === "bottom" || n === "center" || B(n) ? (a += o.bottom,
        fe(i.text) && (a += s.lineHeight * (i.text.length - 1))) : a += o.top;
        const {titleX: u, titleY: c, maxWidth: f, rotation: d} = Uy(this, a, n, l);
        ci(e, i.text, 0, 0, s, {
            color: i.color,
            maxWidth: f,
            rotation: d,
            textAlign: Vy(l, n, r),
            textBaseline: "middle",
            translation: [u, c]
        })
    }
    draw(e) {
        this._isVisible() && (this.drawBackground(),
        this.drawGrid(e),
        this.drawBorder(),
        this.drawTitle(),
        this.drawLabels(e))
    }
    _layers() {
        const e = this.options
          , n = e.ticks && e.ticks.z || 0
          , i = W(e.grid && e.grid.z, -1)
          , r = W(e.border && e.border.z, 0);
        return !this._isVisible() || this.draw !== gi.prototype.draw ? [{
            z: n,
            draw: s => {
                this.draw(s)
            }
        }] : [{
            z: i,
            draw: s => {
                this.drawBackground(),
                this.drawGrid(s),
                this.drawTitle()
            }
        }, {
            z: r,
            draw: () => {
                this.drawBorder()
            }
        }, {
            z: n,
            draw: s => {
                this.drawLabels(s)
            }
        }]
    }
    getMatchingVisibleMetas(e) {
        const n = this.chart.getSortedVisibleDatasetMetas()
          , i = this.axis + "AxisID"
          , r = [];
        let s, o;
        for (s = 0,
        o = n.length; s < o; ++s) {
            const l = n[s];
            l[i] === this.id && (!e || l.type === e) && r.push(l)
        }
        return r
    }
    _resolveTickFontOptions(e) {
        const n = this.options.ticks.setContext(this.getContext(e));
        return _e(n.font)
    }
    _maxDigits() {
        const e = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / e
    }
}
class $r {
    constructor(e, n, i) {
        this.type = e,
        this.scope = n,
        this.override = i,
        this.items = Object.create(null)
    }
    isForType(e) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, e.prototype)
    }
    register(e) {
        const n = Object.getPrototypeOf(e);
        let i;
        Ky(n) && (i = this.register(n));
        const r = this.items
          , s = e.id
          , o = this.scope + "." + s;
        if (!s)
            throw new Error("class does not have id: " + e);
        return s in r || (r[s] = e,
        Yy(e, o, i),
        this.override && ue.override(e.id, e.overrides)),
        o
    }
    get(e) {
        return this.items[e]
    }
    unregister(e) {
        const n = this.items
          , i = e.id
          , r = this.scope;
        i in n && delete n[i],
        r && i in ue[r] && (delete ue[r][i],
        this.override && delete En[i])
    }
}
function Yy(t, e, n) {
    const i = mr(Object.create(null), [n ? ue.get(n) : {}, ue.get(e), t.defaults]);
    ue.set(e, i),
    t.defaultRoutes && Xy(e, t.defaultRoutes),
    t.descriptors && ue.describe(e, t.descriptors)
}
function Xy(t, e) {
    Object.keys(e).forEach(n => {
        const i = n.split(".")
          , r = i.pop()
          , s = [t].concat(i).join(".")
          , o = e[n].split(".")
          , l = o.pop()
          , a = o.join(".");
        ue.route(s, r, a, l)
    }
    )
}
function Ky(t) {
    return "id"in t && "defaults"in t
}
class Qy {
    constructor() {
        this.controllers = new $r(Ji,"datasets",!0),
        this.elements = new $r(Pn,"elements"),
        this.plugins = new $r(Object,"plugins"),
        this.scales = new $r(gi,"scales"),
        this._typedRegistries = [this.controllers, this.scales, this.elements]
    }
    add(...e) {
        this._each("register", e)
    }
    remove(...e) {
        this._each("unregister", e)
    }
    addControllers(...e) {
        this._each("register", e, this.controllers)
    }
    addElements(...e) {
        this._each("register", e, this.elements)
    }
    addPlugins(...e) {
        this._each("register", e, this.plugins)
    }
    addScales(...e) {
        this._each("register", e, this.scales)
    }
    getController(e) {
        return this._get(e, this.controllers, "controller")
    }
    getElement(e) {
        return this._get(e, this.elements, "element")
    }
    getPlugin(e) {
        return this._get(e, this.plugins, "plugin")
    }
    getScale(e) {
        return this._get(e, this.scales, "scale")
    }
    removeControllers(...e) {
        this._each("unregister", e, this.controllers)
    }
    removeElements(...e) {
        this._each("unregister", e, this.elements)
    }
    removePlugins(...e) {
        this._each("unregister", e, this.plugins)
    }
    removeScales(...e) {
        this._each("unregister", e, this.scales)
    }
    _each(e, n, i) {
        [...n].forEach(r => {
            const s = i || this._getRegistryForType(r);
            i || s.isForType(r) || s === this.plugins && r.id ? this._exec(e, s, r) : Y(r, o => {
                const l = i || this._getRegistryForType(o);
                this._exec(e, l, o)
            }
            )
        }
        )
    }
    _exec(e, n, i) {
        const r = ou(e);
        Q(i["before" + r], [], i),
        n[e](i),
        Q(i["after" + r], [], i)
    }
    _getRegistryForType(e) {
        for (let n = 0; n < this._typedRegistries.length; n++) {
            const i = this._typedRegistries[n];
            if (i.isForType(e))
                return i
        }
        return this.plugins
    }
    _get(e, n, i) {
        const r = n.get(e);
        if (r === void 0)
            throw new Error('"' + e + '" is not a registered ' + i + ".");
        return r
    }
}
var pt = new Qy;
class Gy {
    constructor() {
        this._init = []
    }
    notify(e, n, i, r) {
        n === "beforeInit" && (this._init = this._createDescriptors(e, !0),
        this._notify(this._init, e, "install"));
        const s = r ? this._descriptors(e).filter(r) : this._descriptors(e)
          , o = this._notify(s, e, n, i);
        return n === "afterDestroy" && (this._notify(s, e, "stop"),
        this._notify(this._init, e, "uninstall")),
        o
    }
    _notify(e, n, i, r) {
        r = r || {};
        for (const s of e) {
            const o = s.plugin
              , l = o[i]
              , a = [n, r, s.options];
            if (Q(l, a, o) === !1 && r.cancelable)
                return !1
        }
        return !0
    }
    invalidate() {
        ne(this._cache) || (this._oldCache = this._cache,
        this._cache = void 0)
    }
    _descriptors(e) {
        if (this._cache)
            return this._cache;
        const n = this._cache = this._createDescriptors(e);
        return this._notifyStateChanges(e),
        n
    }
    _createDescriptors(e, n) {
        const i = e && e.config
          , r = W(i.options && i.options.plugins, {})
          , s = Zy(i);
        return r === !1 && !n ? [] : qy(e, s, r, n)
    }
    _notifyStateChanges(e) {
        const n = this._oldCache || []
          , i = this._cache
          , r = (s, o) => s.filter(l => !o.some(a => l.plugin.id === a.plugin.id));
        this._notify(r(n, i), e, "stop"),
        this._notify(r(i, n), e, "start")
    }
}
function Zy(t) {
    const e = {}
      , n = []
      , i = Object.keys(pt.plugins.items);
    for (let s = 0; s < i.length; s++)
        n.push(pt.getPlugin(i[s]));
    const r = t.plugins || [];
    for (let s = 0; s < r.length; s++) {
        const o = r[s];
        n.indexOf(o) === -1 && (n.push(o),
        e[o.id] = !0)
    }
    return {
        plugins: n,
        localIds: e
    }
}
function Jy(t, e) {
    return !e && t === !1 ? null : t === !0 ? {} : t
}
function qy(t, {plugins: e, localIds: n}, i, r) {
    const s = []
      , o = t.getContext();
    for (const l of e) {
        const a = l.id
          , u = Jy(i[a], r);
        u !== null && s.push({
            plugin: l,
            options: $y(t.config, {
                plugin: l,
                local: n[a]
            }, u, o)
        })
    }
    return s
}
function $y(t, {plugin: e, local: n}, i, r) {
    const s = t.pluginScopeKeys(e)
      , o = t.getOptionScopes(i, s);
    return n && e.defaults && o.push(e.defaults),
    t.createResolver(o, r, [""], {
        scriptable: !1,
        indexable: !1,
        allKeys: !0
    })
}
function ra(t, e) {
    const n = ue.datasets[t] || {};
    return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || "x"
}
function ev(t, e) {
    let n = t;
    return t === "_index_" ? n = e : t === "_value_" && (n = e === "x" ? "y" : "x"),
    n
}
function tv(t, e) {
    return t === e ? "_index_" : "_value_"
}
function df(t) {
    if (t === "x" || t === "y" || t === "r")
        return t
}
function nv(t) {
    if (t === "top" || t === "bottom")
        return "x";
    if (t === "left" || t === "right")
        return "y"
}
function sa(t, ...e) {
    if (df(t))
        return t;
    for (const n of e) {
        const i = n.axis || nv(n.position) || t.length > 1 && df(t[0].toLowerCase());
        if (i)
            return i
    }
    throw new Error(`Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`)
}
function hf(t, e, n) {
    if (n[e + "AxisID"] === t)
        return {
            axis: e
        }
}
function iv(t, e) {
    if (e.data && e.data.datasets) {
        const n = e.data.datasets.filter(i => i.xAxisID === t || i.yAxisID === t);
        if (n.length)
            return hf(t, "x", n[0]) || hf(t, "y", n[0])
    }
    return {}
}
function rv(t, e) {
    const n = En[t.type] || {
        scales: {}
    }
      , i = e.scales || {}
      , r = ra(t.type, e)
      , s = Object.create(null);
    return Object.keys(i).forEach(o => {
        const l = i[o];
        if (!B(l))
            return console.error(`Invalid scale configuration for scale: ${o}`);
        if (l._proxy)
            return console.warn(`Ignoring resolver passed as options for scale: ${o}`);
        const a = sa(o, l, iv(o, t), ue.scales[l.type])
          , u = tv(a, r)
          , c = n.scales || {};
        s[o] = Qi(Object.create(null), [{
            axis: a
        }, l, c[a], c[u]])
    }
    ),
    t.data.datasets.forEach(o => {
        const l = o.type || t.type
          , a = o.indexAxis || ra(l, e)
          , c = (En[l] || {}).scales || {};
        Object.keys(c).forEach(f => {
            const d = ev(f, a)
              , h = o[d + "AxisID"] || d;
            s[h] = s[h] || Object.create(null),
            Qi(s[h], [{
                axis: d
            }, i[h], c[f]])
        }
        )
    }
    ),
    Object.keys(s).forEach(o => {
        const l = s[o];
        Qi(l, [ue.scales[l.type], ue.scale])
    }
    ),
    s
}
function Op(t) {
    const e = t.options || (t.options = {});
    e.plugins = W(e.plugins, {}),
    e.scales = rv(t, e)
}
function Tp(t) {
    return t = t || {},
    t.datasets = t.datasets || [],
    t.labels = t.labels || [],
    t
}
function sv(t) {
    return t = t || {},
    t.data = Tp(t.data),
    Op(t),
    t
}
const pf = new Map
  , Dp = new Set;
function es(t, e) {
    let n = pf.get(t);
    return n || (n = e(),
    pf.set(t, n),
    Dp.add(n)),
    n
}
const Ei = (t, e, n) => {
    const i = yr(e, n);
    i !== void 0 && t.add(i)
}
;
class ov {
    constructor(e) {
        this._config = sv(e),
        this._scopeCache = new Map,
        this._resolverCache = new Map
    }
    get platform() {
        return this._config.platform
    }
    get type() {
        return this._config.type
    }
    set type(e) {
        this._config.type = e
    }
    get data() {
        return this._config.data
    }
    set data(e) {
        this._config.data = Tp(e)
    }
    get options() {
        return this._config.options
    }
    set options(e) {
        this._config.options = e
    }
    get plugins() {
        return this._config.plugins
    }
    update() {
        const e = this._config;
        this.clearCache(),
        Op(e)
    }
    clearCache() {
        this._scopeCache.clear(),
        this._resolverCache.clear()
    }
    datasetScopeKeys(e) {
        return es(e, () => [[`datasets.${e}`, ""]])
    }
    datasetAnimationScopeKeys(e, n) {
        return es(`${e}.transition.${n}`, () => [[`datasets.${e}.transitions.${n}`, `transitions.${n}`], [`datasets.${e}`, ""]])
    }
    datasetElementScopeKeys(e, n) {
        return es(`${e}-${n}`, () => [[`datasets.${e}.elements.${n}`, `datasets.${e}`, `elements.${n}`, ""]])
    }
    pluginScopeKeys(e) {
        const n = e.id
          , i = this.type;
        return es(`${i}-plugin-${n}`, () => [[`plugins.${n}`, ...e.additionalOptionScopes || []]])
    }
    _cachedScopes(e, n) {
        const i = this._scopeCache;
        let r = i.get(e);
        return (!r || n) && (r = new Map,
        i.set(e, r)),
        r
    }
    getOptionScopes(e, n, i) {
        const {options: r, type: s} = this
          , o = this._cachedScopes(e, i)
          , l = o.get(n);
        if (l)
            return l;
        const a = new Set;
        n.forEach(c => {
            e && (a.add(e),
            c.forEach(f => Ei(a, e, f))),
            c.forEach(f => Ei(a, r, f)),
            c.forEach(f => Ei(a, En[s] || {}, f)),
            c.forEach(f => Ei(a, ue, f)),
            c.forEach(f => Ei(a, ia, f))
        }
        );
        const u = Array.from(a);
        return u.length === 0 && u.push(Object.create(null)),
        Dp.has(n) && o.set(n, u),
        u
    }
    chartOptionScopes() {
        const {options: e, type: n} = this;
        return [e, En[n] || {}, ue.datasets[n] || {}, {
            type: n
        }, ue, ia]
    }
    resolveNamedOptions(e, n, i, r=[""]) {
        const s = {
            $shared: !0
        }
          , {resolver: o, subPrefixes: l} = gf(this._resolverCache, e, r);
        let a = o;
        if (av(o, n)) {
            s.$shared = !1,
            i = on(i) ? i() : i;
            const u = this.createResolver(e, i, l);
            a = fi(o, i, u)
        }
        for (const u of n)
            s[u] = a[u];
        return s
    }
    createResolver(e, n, i=[""], r) {
        const {resolver: s} = gf(this._resolverCache, e, i);
        return B(n) ? fi(s, n, void 0, r) : s
    }
}
function gf(t, e, n) {
    let i = t.get(e);
    i || (i = new Map,
    t.set(e, i));
    const r = n.join();
    let s = i.get(r);
    return s || (s = {
        resolver: du(e, n),
        subPrefixes: n.filter(l => !l.toLowerCase().includes("hover"))
    },
    i.set(r, s)),
    s
}
const lv = t => B(t) && Object.getOwnPropertyNames(t).some(e => on(t[e]));
function av(t, e) {
    const {isScriptable: n, isIndexable: i} = vp(t);
    for (const r of e) {
        const s = n(r)
          , o = i(r)
          , l = (o || s) && t[r];
        if (s && (on(l) || lv(l)) || o && fe(l))
            return !0
    }
    return !1
}
var uv = "4.4.4";
const cv = ["top", "bottom", "left", "right", "chartArea"];
function mf(t, e) {
    return t === "top" || t === "bottom" || cv.indexOf(t) === -1 && e === "x"
}
function yf(t, e) {
    return function(n, i) {
        return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t]
    }
}
function vf(t) {
    const e = t.chart
      , n = e.options.animation;
    e.notifyPlugins("afterRender"),
    Q(n && n.onComplete, [t], e)
}
function fv(t) {
    const e = t.chart
      , n = e.options.animation;
    Q(n && n.onProgress, [t], e)
}
function Rp(t) {
    return gu() && typeof t == "string" ? t = document.getElementById(t) : t && t.length && (t = t[0]),
    t && t.canvas && (t = t.canvas),
    t
}
const xs = {}
  , xf = t => {
    const e = Rp(t);
    return Object.values(xs).filter(n => n.canvas === e).pop()
}
;
function dv(t, e, n) {
    const i = Object.keys(t);
    for (const r of i) {
        const s = +r;
        if (s >= e) {
            const o = t[r];
            delete t[r],
            (n > 0 || s > e) && (t[s + n] = o)
        }
    }
}
function hv(t, e, n, i) {
    return !n || t.type === "mouseout" ? null : i ? e : t
}
function ts(t, e, n) {
    return t.options.clip ? t[n] : e[n]
}
function pv(t, e) {
    const {xScale: n, yScale: i} = t;
    return n && i ? {
        left: ts(n, e, "left"),
        right: ts(n, e, "right"),
        top: ts(i, e, "top"),
        bottom: ts(i, e, "bottom")
    } : e
}
var It;
let Ao = (It = class {
    static register(...e) {
        pt.add(...e),
        wf()
    }
    static unregister(...e) {
        pt.remove(...e),
        wf()
    }
    constructor(e, n) {
        const i = this.config = new ov(n)
          , r = Rp(e)
          , s = xf(r);
        if (s)
            throw new Error("Canvas is already in use. Chart with ID '" + s.id + "' must be destroyed before the canvas with ID '" + s.canvas.id + "' can be reused.");
        const o = i.createResolver(i.chartOptionScopes(), this.getContext());
        this.platform = new (i.platform || Oy(r)),
        this.platform.updateConfig(i);
        const l = this.platform.acquireContext(r, o.aspectRatio)
          , a = l && l.canvas
          , u = a && a.height
          , c = a && a.width;
        if (this.id = V1(),
        this.ctx = l,
        this.canvas = a,
        this.width = c,
        this.height = u,
        this._options = o,
        this._aspectRatio = this.aspectRatio,
        this._layers = [],
        this._metasets = [],
        this._stacks = void 0,
        this.boxes = [],
        this.currentDevicePixelRatio = void 0,
        this.chartArea = void 0,
        this._active = [],
        this._lastEvent = void 0,
        this._listeners = {},
        this._responsiveListeners = void 0,
        this._sortedMetasets = [],
        this.scales = {},
        this._plugins = new Gy,
        this.$proxies = {},
        this._hiddenIndices = {},
        this.attached = !1,
        this._animationsDisabled = void 0,
        this.$context = void 0,
        this._doResize = s0(f => this.update(f), o.resizeDelay || 0),
        this._dataChanges = [],
        xs[this.id] = this,
        !l || !a) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return
        }
        _t.listen(this, "complete", vf),
        _t.listen(this, "progress", fv),
        this._initialize(),
        this.attached && this.update()
    }
    get aspectRatio() {
        const {options: {aspectRatio: e, maintainAspectRatio: n}, width: i, height: r, _aspectRatio: s} = this;
        return ne(e) ? n && s ? s : r ? i / r : null : e
    }
    get data() {
        return this.config.data
    }
    set data(e) {
        this.config.data = e
    }
    get options() {
        return this._options
    }
    set options(e) {
        this.config.options = e
    }
    get registry() {
        return pt
    }
    _initialize() {
        return this.notifyPlugins("beforeInit"),
        this.options.responsive ? this.resize() : Xc(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
    }
    clear() {
        return Wc(this.canvas, this.ctx),
        this
    }
    stop() {
        return _t.stop(this),
        this
    }
    resize(e, n) {
        _t.running(this) ? this._resizeBeforeDraw = {
            width: e,
            height: n
        } : this._resize(e, n)
    }
    _resize(e, n) {
        const i = this.options
          , r = this.canvas
          , s = i.maintainAspectRatio && this.aspectRatio
          , o = this.platform.getMaximumSize(r, e, n, s)
          , l = i.devicePixelRatio || this.platform.getDevicePixelRatio()
          , a = this.width ? "resize" : "attach";
        this.width = o.width,
        this.height = o.height,
        this._aspectRatio = this.aspectRatio,
        Xc(this, l, !0) && (this.notifyPlugins("resize", {
            size: o
        }),
        Q(i.onResize, [this, o], this),
        this.attached && this._doResize(a) && this.render())
    }
    ensureScalesHaveIDs() {
        const n = this.options.scales || {};
        Y(n, (i, r) => {
            i.id = r
        }
        )
    }
    buildOrUpdateScales() {
        const e = this.options
          , n = e.scales
          , i = this.scales
          , r = Object.keys(i).reduce( (o, l) => (o[l] = !1,
        o), {});
        let s = [];
        n && (s = s.concat(Object.keys(n).map(o => {
            const l = n[o]
              , a = sa(o, l)
              , u = a === "r"
              , c = a === "x";
            return {
                options: l,
                dposition: u ? "chartArea" : c ? "bottom" : "left",
                dtype: u ? "radialLinear" : c ? "category" : "linear"
            }
        }
        ))),
        Y(s, o => {
            const l = o.options
              , a = l.id
              , u = sa(a, l)
              , c = W(l.type, o.dtype);
            (l.position === void 0 || mf(l.position, u) !== mf(o.dposition)) && (l.position = o.dposition),
            r[a] = !0;
            let f = null;
            if (a in i && i[a].type === c)
                f = i[a];
            else {
                const d = pt.getScale(c);
                f = new d({
                    id: a,
                    type: c,
                    ctx: this.ctx,
                    chart: this
                }),
                i[f.id] = f
            }
            f.init(l, e)
        }
        ),
        Y(r, (o, l) => {
            o || delete i[l]
        }
        ),
        Y(i, o => {
            Kt.configure(this, o, o.options),
            Kt.addBox(this, o)
        }
        )
    }
    _updateMetasets() {
        const e = this._metasets
          , n = this.data.datasets.length
          , i = e.length;
        if (e.sort( (r, s) => r.index - s.index),
        i > n) {
            for (let r = n; r < i; ++r)
                this._destroyDatasetMeta(r);
            e.splice(n, i - n)
        }
        this._sortedMetasets = e.slice(0).sort(yf("order", "index"))
    }
    _removeUnreferencedMetasets() {
        const {_metasets: e, data: {datasets: n}} = this;
        e.length > n.length && delete this._stacks,
        e.forEach( (i, r) => {
            n.filter(s => s === i._dataset).length === 0 && this._destroyDatasetMeta(r)
        }
        )
    }
    buildOrUpdateControllers() {
        const e = []
          , n = this.data.datasets;
        let i, r;
        for (this._removeUnreferencedMetasets(),
        i = 0,
        r = n.length; i < r; i++) {
            const s = n[i];
            let o = this.getDatasetMeta(i);
            const l = s.type || this.config.type;
            if (o.type && o.type !== l && (this._destroyDatasetMeta(i),
            o = this.getDatasetMeta(i)),
            o.type = l,
            o.indexAxis = s.indexAxis || ra(l, this.options),
            o.order = s.order || 0,
            o.index = i,
            o.label = "" + s.label,
            o.visible = this.isDatasetVisible(i),
            o.controller)
                o.controller.updateIndex(i),
                o.controller.linkScales();
            else {
                const a = pt.getController(l)
                  , {datasetElementType: u, dataElementType: c} = ue.datasets[l];
                Object.assign(a, {
                    dataElementType: pt.getElement(c),
                    datasetElementType: u && pt.getElement(u)
                }),
                o.controller = new a(this,i),
                e.push(o.controller)
            }
        }
        return this._updateMetasets(),
        e
    }
    _resetElements() {
        Y(this.data.datasets, (e, n) => {
            this.getDatasetMeta(n).controller.reset()
        }
        , this)
    }
    reset() {
        this._resetElements(),
        this.notifyPlugins("reset")
    }
    update(e) {
        const n = this.config;
        n.update();
        const i = this._options = n.createResolver(n.chartOptionScopes(), this.getContext())
          , r = this._animationsDisabled = !i.animation;
        if (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins("beforeUpdate", {
            mode: e,
            cancelable: !0
        }) === !1)
            return;
        const s = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let o = 0;
        for (let u = 0, c = this.data.datasets.length; u < c; u++) {
            const {controller: f} = this.getDatasetMeta(u)
              , d = !r && s.indexOf(f) === -1;
            f.buildOrUpdateElements(d),
            o = Math.max(+f.getMaxOverflow(), o)
        }
        o = this._minPadding = i.layout.autoPadding ? o : 0,
        this._updateLayout(o),
        r || Y(s, u => {
            u.reset()
        }
        ),
        this._updateDatasets(e),
        this.notifyPlugins("afterUpdate", {
            mode: e
        }),
        this._layers.sort(yf("z", "_idx"));
        const {_active: l, _lastEvent: a} = this;
        a ? this._eventHandler(a, !0) : l.length && this._updateHoverStyles(l, l, !0),
        this.render()
    }
    _updateScales() {
        Y(this.scales, e => {
            Kt.removeBox(this, e)
        }
        ),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales()
    }
    _checkEventBindings() {
        const e = this.options
          , n = new Set(Object.keys(this._listeners))
          , i = new Set(e.events);
        (!Dc(n, i) || !!this._responsiveListeners !== e.responsive) && (this.unbindEvents(),
        this.bindEvents())
    }
    _updateHiddenIndices() {
        const {_hiddenIndices: e} = this
          , n = this._getUniformDataChanges() || [];
        for (const {method: i, start: r, count: s} of n) {
            const o = i === "_removeElements" ? -s : s;
            dv(e, r, o)
        }
    }
    _getUniformDataChanges() {
        const e = this._dataChanges;
        if (!e || !e.length)
            return;
        this._dataChanges = [];
        const n = this.data.datasets.length
          , i = s => new Set(e.filter(o => o[0] === s).map( (o, l) => l + "," + o.splice(1).join(",")))
          , r = i(0);
        for (let s = 1; s < n; s++)
            if (!Dc(r, i(s)))
                return;
        return Array.from(r).map(s => s.split(",")).map(s => ({
            method: s[1],
            start: +s[2],
            count: +s[3]
        }))
    }
    _updateLayout(e) {
        if (this.notifyPlugins("beforeLayout", {
            cancelable: !0
        }) === !1)
            return;
        Kt.update(this, this.width, this.height, e);
        const n = this.chartArea
          , i = n.width <= 0 || n.height <= 0;
        this._layers = [],
        Y(this.boxes, r => {
            i && r.position === "chartArea" || (r.configure && r.configure(),
            this._layers.push(...r._layers()))
        }
        , this),
        this._layers.forEach( (r, s) => {
            r._idx = s
        }
        ),
        this.notifyPlugins("afterLayout")
    }
    _updateDatasets(e) {
        if (this.notifyPlugins("beforeDatasetsUpdate", {
            mode: e,
            cancelable: !0
        }) !== !1) {
            for (let n = 0, i = this.data.datasets.length; n < i; ++n)
                this.getDatasetMeta(n).controller.configure();
            for (let n = 0, i = this.data.datasets.length; n < i; ++n)
                this._updateDataset(n, on(e) ? e({
                    datasetIndex: n
                }) : e);
            this.notifyPlugins("afterDatasetsUpdate", {
                mode: e
            })
        }
    }
    _updateDataset(e, n) {
        const i = this.getDatasetMeta(e)
          , r = {
            meta: i,
            index: e,
            mode: n,
            cancelable: !0
        };
        this.notifyPlugins("beforeDatasetUpdate", r) !== !1 && (i.controller._update(n),
        r.cancelable = !1,
        this.notifyPlugins("afterDatasetUpdate", r))
    }
    render() {
        this.notifyPlugins("beforeRender", {
            cancelable: !0
        }) !== !1 && (_t.has(this) ? this.attached && !_t.running(this) && _t.start(this) : (this.draw(),
        vf({
            chart: this
        })))
    }
    draw() {
        let e;
        if (this._resizeBeforeDraw) {
            const {width: i, height: r} = this._resizeBeforeDraw;
            this._resizeBeforeDraw = null,
            this._resize(i, r)
        }
        if (this.clear(),
        this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
            cancelable: !0
        }) === !1)
            return;
        const n = this._layers;
        for (e = 0; e < n.length && n[e].z <= 0; ++e)
            n[e].draw(this.chartArea);
        for (this._drawDatasets(); e < n.length; ++e)
            n[e].draw(this.chartArea);
        this.notifyPlugins("afterDraw")
    }
    _getSortedDatasetMetas(e) {
        const n = this._sortedMetasets
          , i = [];
        let r, s;
        for (r = 0,
        s = n.length; r < s; ++r) {
            const o = n[r];
            (!e || o.visible) && i.push(o)
        }
        return i
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0)
    }
    _drawDatasets() {
        if (this.notifyPlugins("beforeDatasetsDraw", {
            cancelable: !0
        }) === !1)
            return;
        const e = this.getSortedVisibleDatasetMetas();
        for (let n = e.length - 1; n >= 0; --n)
            this._drawDataset(e[n]);
        this.notifyPlugins("afterDatasetsDraw")
    }
    _drawDataset(e) {
        const n = this.ctx
          , i = e._clip
          , r = !i.disabled
          , s = pv(e, this.chartArea)
          , o = {
            meta: e,
            index: e.index,
            cancelable: !0
        };
        this.notifyPlugins("beforeDatasetDraw", o) !== !1 && (r && uu(n, {
            left: i.left === !1 ? 0 : s.left - i.left,
            right: i.right === !1 ? this.width : s.right + i.right,
            top: i.top === !1 ? 0 : s.top - i.top,
            bottom: i.bottom === !1 ? this.height : s.bottom + i.bottom
        }),
        e.controller.draw(),
        r && cu(n),
        o.cancelable = !1,
        this.notifyPlugins("afterDatasetDraw", o))
    }
    isPointInArea(e) {
        return Qn(e, this.chartArea, this._minPadding)
    }
    getElementsAtEventForMode(e, n, i, r) {
        const s = cy.modes[n];
        return typeof s == "function" ? s(this, e, i, r) : []
    }
    getDatasetMeta(e) {
        const n = this.data.datasets[e]
          , i = this._metasets;
        let r = i.filter(s => s && s._dataset === n).pop();
        return r || (r = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: n && n.order || 0,
            index: e,
            _dataset: n,
            _parsed: [],
            _sorted: !1
        },
        i.push(r)),
        r
    }
    getContext() {
        return this.$context || (this.$context = Tn(null, {
            chart: this,
            type: "chart"
        }))
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length
    }
    isDatasetVisible(e) {
        const n = this.data.datasets[e];
        if (!n)
            return !1;
        const i = this.getDatasetMeta(e);
        return typeof i.hidden == "boolean" ? !i.hidden : !n.hidden
    }
    setDatasetVisibility(e, n) {
        const i = this.getDatasetMeta(e);
        i.hidden = !n
    }
    toggleDataVisibility(e) {
        this._hiddenIndices[e] = !this._hiddenIndices[e]
    }
    getDataVisibility(e) {
        return !this._hiddenIndices[e]
    }
    _updateVisibility(e, n, i) {
        const r = i ? "show" : "hide"
          , s = this.getDatasetMeta(e)
          , o = s.controller._resolveAnimations(void 0, r);
        Xs(n) ? (s.data[n].hidden = !i,
        this.update()) : (this.setDatasetVisibility(e, i),
        o.update(s, {
            visible: i
        }),
        this.update(l => l.datasetIndex === e ? r : void 0))
    }
    hide(e, n) {
        this._updateVisibility(e, n, !1)
    }
    show(e, n) {
        this._updateVisibility(e, n, !0)
    }
    _destroyDatasetMeta(e) {
        const n = this._metasets[e];
        n && n.controller && n.controller._destroy(),
        delete this._metasets[e]
    }
    _stop() {
        let e, n;
        for (this.stop(),
        _t.remove(this),
        e = 0,
        n = this.data.datasets.length; e < n; ++e)
            this._destroyDatasetMeta(e)
    }
    destroy() {
        this.notifyPlugins("beforeDestroy");
        const {canvas: e, ctx: n} = this;
        this._stop(),
        this.config.clearCache(),
        e && (this.unbindEvents(),
        Wc(e, n),
        this.platform.releaseContext(n),
        this.canvas = null,
        this.ctx = null),
        delete xs[this.id],
        this.notifyPlugins("afterDestroy")
    }
    toBase64Image(...e) {
        return this.canvas.toDataURL(...e)
    }
    bindEvents() {
        this.bindUserEvents(),
        this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
    }
    bindUserEvents() {
        const e = this._listeners
          , n = this.platform
          , i = (s, o) => {
            n.addEventListener(this, s, o),
            e[s] = o
        }
          , r = (s, o, l) => {
            s.offsetX = o,
            s.offsetY = l,
            this._eventHandler(s)
        }
        ;
        Y(this.options.events, s => i(s, r))
    }
    bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const e = this._responsiveListeners
          , n = this.platform
          , i = (a, u) => {
            n.addEventListener(this, a, u),
            e[a] = u
        }
          , r = (a, u) => {
            e[a] && (n.removeEventListener(this, a, u),
            delete e[a])
        }
          , s = (a, u) => {
            this.canvas && this.resize(a, u)
        }
        ;
        let o;
        const l = () => {
            r("attach", l),
            this.attached = !0,
            this.resize(),
            i("resize", s),
            i("detach", o)
        }
        ;
        o = () => {
            this.attached = !1,
            r("resize", s),
            this._stop(),
            this._resize(0, 0),
            i("attach", l)
        }
        ,
        n.isAttached(this.canvas) ? l() : o()
    }
    unbindEvents() {
        Y(this._listeners, (e, n) => {
            this.platform.removeEventListener(this, n, e)
        }
        ),
        this._listeners = {},
        Y(this._responsiveListeners, (e, n) => {
            this.platform.removeEventListener(this, n, e)
        }
        ),
        this._responsiveListeners = void 0
    }
    updateHoverStyle(e, n, i) {
        const r = i ? "set" : "remove";
        let s, o, l, a;
        for (n === "dataset" && (s = this.getDatasetMeta(e[0].datasetIndex),
        s.controller["_" + r + "DatasetHoverStyle"]()),
        l = 0,
        a = e.length; l < a; ++l) {
            o = e[l];
            const u = o && this.getDatasetMeta(o.datasetIndex).controller;
            u && u[r + "HoverStyle"](o.element, o.datasetIndex, o.index)
        }
    }
    getActiveElements() {
        return this._active || []
    }
    setActiveElements(e) {
        const n = this._active || []
          , i = e.map( ({datasetIndex: s, index: o}) => {
            const l = this.getDatasetMeta(s);
            if (!l)
                throw new Error("No dataset found at index " + s);
            return {
                datasetIndex: s,
                element: l.data[o],
                index: o
            }
        }
        );
        !Us(i, n) && (this._active = i,
        this._lastEvent = null,
        this._updateHoverStyles(i, n))
    }
    notifyPlugins(e, n, i) {
        return this._plugins.notify(this, e, n, i)
    }
    isPluginEnabled(e) {
        return this._plugins._cache.filter(n => n.plugin.id === e).length === 1
    }
    _updateHoverStyles(e, n, i) {
        const r = this.options.hover
          , s = (a, u) => a.filter(c => !u.some(f => c.datasetIndex === f.datasetIndex && c.index === f.index))
          , o = s(n, e)
          , l = i ? e : s(e, n);
        o.length && this.updateHoverStyle(o, r.mode, !1),
        l.length && r.mode && this.updateHoverStyle(l, r.mode, !0)
    }
    _eventHandler(e, n) {
        const i = {
            event: e,
            replay: n,
            cancelable: !0,
            inChartArea: this.isPointInArea(e)
        }
          , r = o => (o.options.events || this.options.events).includes(e.native.type);
        if (this.notifyPlugins("beforeEvent", i, r) === !1)
            return;
        const s = this._handleEvent(e, n, i.inChartArea);
        return i.cancelable = !1,
        this.notifyPlugins("afterEvent", i, r),
        (s || i.changed) && this.render(),
        this
    }
    _handleEvent(e, n, i) {
        const {_active: r=[], options: s} = this
          , o = n
          , l = this._getActiveElements(e, r, i, o)
          , a = G1(e)
          , u = hv(e, this._lastEvent, i, a);
        i && (this._lastEvent = null,
        Q(s.onHover, [e, l, this], this),
        a && Q(s.onClick, [e, l, this], this));
        const c = !Us(l, r);
        return (c || n) && (this._active = l,
        this._updateHoverStyles(l, r, n)),
        this._lastEvent = u,
        c
    }
    _getActiveElements(e, n, i, r) {
        if (e.type === "mouseout")
            return [];
        if (!i)
            return n;
        const s = this.options.hover;
        return this.getElementsAtEventForMode(e, s.mode, s, r)
    }
}
,
z(It, "defaults", ue),
z(It, "instances", xs),
z(It, "overrides", En),
z(It, "registry", pt),
z(It, "version", uv),
z(It, "getChart", xf),
It);
function wf() {
    return Y(Ao.instances, t => t._plugins.invalidate())
}
function gv(t, e, n) {
    const {startAngle: i, pixelMargin: r, x: s, y: o, outerRadius: l, innerRadius: a} = e;
    let u = r / l;
    t.beginPath(),
    t.arc(s, o, l, i - u, n + u),
    a > r ? (u = r / a,
    t.arc(s, o, a, n + u, i - u, !0)) : t.arc(s, o, r, n + de, i - de),
    t.closePath(),
    t.clip()
}
function mv(t) {
    return fu(t, ["outerStart", "outerEnd", "innerStart", "innerEnd"])
}
function yv(t, e, n, i) {
    const r = mv(t.options.borderRadius)
      , s = (n - e) / 2
      , o = Math.min(s, i * e / 2)
      , l = a => {
        const u = (n - Math.min(s, a)) * i / 2;
        return et(a, 0, Math.min(s, u))
    }
    ;
    return {
        outerStart: l(r.outerStart),
        outerEnd: l(r.outerEnd),
        innerStart: et(r.innerStart, 0, o),
        innerEnd: et(r.innerEnd, 0, o)
    }
}
function zn(t, e, n, i) {
    return {
        x: n + t * Math.cos(e),
        y: i + t * Math.sin(e)
    }
}
function to(t, e, n, i, r, s) {
    const {x: o, y: l, startAngle: a, pixelMargin: u, innerRadius: c} = e
      , f = Math.max(e.outerRadius + i + n - u, 0)
      , d = c > 0 ? c + i + n + u : 0;
    let h = 0;
    const m = r - a;
    if (i) {
        const I = c > 0 ? c - i : 0
          , H = f > 0 ? f - i : 0
          , K = (I + H) / 2
          , M = K !== 0 ? m * K / (K + i) : m;
        h = (m - M) / 2
    }
    const v = Math.max(.001, m * f - n / pe) / f
      , x = (m - v) / 2
      , g = a + x + h
      , p = r - x - h
      , {outerStart: y, outerEnd: w, innerStart: k, innerEnd: S} = yv(e, d, f, p - g)
      , C = f - y
      , b = f - w
      , P = g + y / C
      , E = p - w / b
      , T = d + k
      , D = d + S
      , V = g + k / T
      , se = p - S / D;
    if (t.beginPath(),
    s) {
        const I = (P + E) / 2;
        if (t.arc(o, l, f, P, I),
        t.arc(o, l, f, I, E),
        w > 0) {
            const O = zn(b, E, o, l);
            t.arc(O.x, O.y, w, E, p + de)
        }
        const H = zn(D, p, o, l);
        if (t.lineTo(H.x, H.y),
        S > 0) {
            const O = zn(D, se, o, l);
            t.arc(O.x, O.y, S, p + de, se + Math.PI)
        }
        const K = (p - S / d + (g + k / d)) / 2;
        if (t.arc(o, l, d, p - S / d, K, !0),
        t.arc(o, l, d, K, g + k / d, !0),
        k > 0) {
            const O = zn(T, V, o, l);
            t.arc(O.x, O.y, k, V + Math.PI, g - de)
        }
        const M = zn(C, g, o, l);
        if (t.lineTo(M.x, M.y),
        y > 0) {
            const O = zn(C, P, o, l);
            t.arc(O.x, O.y, y, g - de, P)
        }
    } else {
        t.moveTo(o, l);
        const I = Math.cos(P) * f + o
          , H = Math.sin(P) * f + l;
        t.lineTo(I, H);
        const K = Math.cos(E) * f + o
          , M = Math.sin(E) * f + l;
        t.lineTo(K, M)
    }
    t.closePath()
}
function vv(t, e, n, i, r) {
    const {fullCircles: s, startAngle: o, circumference: l} = e;
    let a = e.endAngle;
    if (s) {
        to(t, e, n, i, a, r);
        for (let u = 0; u < s; ++u)
            t.fill();
        isNaN(l) || (a = o + (l % ae || ae))
    }
    return to(t, e, n, i, a, r),
    t.fill(),
    a
}
function xv(t, e, n, i, r) {
    const {fullCircles: s, startAngle: o, circumference: l, options: a} = e
      , {borderWidth: u, borderJoinStyle: c, borderDash: f, borderDashOffset: d} = a
      , h = a.borderAlign === "inner";
    if (!u)
        return;
    t.setLineDash(f || []),
    t.lineDashOffset = d,
    h ? (t.lineWidth = u * 2,
    t.lineJoin = c || "round") : (t.lineWidth = u,
    t.lineJoin = c || "bevel");
    let m = e.endAngle;
    if (s) {
        to(t, e, n, i, m, r);
        for (let v = 0; v < s; ++v)
            t.stroke();
        isNaN(l) || (m = o + (l % ae || ae))
    }
    h && gv(t, e, m),
    s || (to(t, e, n, i, m, r),
    t.stroke())
}
class ji extends Pn {
    constructor(n) {
        super();
        z(this, "circumference");
        z(this, "endAngle");
        z(this, "fullCircles");
        z(this, "innerRadius");
        z(this, "outerRadius");
        z(this, "pixelMargin");
        z(this, "startAngle");
        this.options = void 0,
        this.circumference = void 0,
        this.startAngle = void 0,
        this.endAngle = void 0,
        this.innerRadius = void 0,
        this.outerRadius = void 0,
        this.pixelMargin = 0,
        this.fullCircles = 0,
        n && Object.assign(this, n)
    }
    inRange(n, i, r) {
        const s = this.getProps(["x", "y"], r)
          , {angle: o, distance: l} = cp(s, {
            x: n,
            y: i
        })
          , {startAngle: a, endAngle: u, innerRadius: c, outerRadius: f, circumference: d} = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], r)
          , h = (this.options.spacing + this.options.borderWidth) / 2
          , m = W(d, u - a)
          , v = Zs(o, a, u) && a !== u
          , x = m >= ae || v
          , g = Ri(l, c + h, f + h);
        return x && g
    }
    getCenterPoint(n) {
        const {x: i, y: r, startAngle: s, endAngle: o, innerRadius: l, outerRadius: a} = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], n)
          , {offset: u, spacing: c} = this.options
          , f = (s + o) / 2
          , d = (l + a + c + u) / 2;
        return {
            x: i + Math.cos(f) * d,
            y: r + Math.sin(f) * d
        }
    }
    tooltipPosition(n) {
        return this.getCenterPoint(n)
    }
    draw(n) {
        const {options: i, circumference: r} = this
          , s = (i.offset || 0) / 4
          , o = (i.spacing || 0) / 2
          , l = i.circular;
        if (this.pixelMargin = i.borderAlign === "inner" ? .33 : 0,
        this.fullCircles = r > ae ? Math.floor(r / ae) : 0,
        r === 0 || this.innerRadius < 0 || this.outerRadius < 0)
            return;
        n.save();
        const a = (this.startAngle + this.endAngle) / 2;
        n.translate(Math.cos(a) * s, Math.sin(a) * s);
        const u = 1 - Math.sin(Math.min(pe, r || 0))
          , c = s * u;
        n.fillStyle = i.backgroundColor,
        n.strokeStyle = i.borderColor,
        vv(n, this, c, o, l),
        xv(n, this, c, o, l),
        n.restore()
    }
}
z(ji, "id", "arc"),
z(ji, "defaults", {
    borderAlign: "center",
    borderColor: "#fff",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0
}),
z(ji, "defaultRoutes", {
    backgroundColor: "backgroundColor"
}),
z(ji, "descriptors", {
    _scriptable: !0,
    _indexable: n => n !== "borderDash"
});
const kf = (t, e) => {
    let {boxHeight: n=e, boxWidth: i=e} = t;
    return t.usePointStyle && (n = Math.min(n, e),
    i = t.pointStyleWidth || Math.min(i, e)),
    {
        boxWidth: i,
        boxHeight: n,
        itemHeight: Math.max(e, n)
    }
}
  , wv = (t, e) => t !== null && e !== null && t.datasetIndex === e.datasetIndex && t.index === e.index;
class _f extends Pn {
    constructor(e) {
        super(),
        this._added = !1,
        this.legendHitBoxes = [],
        this._hoveredItem = null,
        this.doughnutMode = !1,
        this.chart = e.chart,
        this.options = e.options,
        this.ctx = e.ctx,
        this.legendItems = void 0,
        this.columnSizes = void 0,
        this.lineWidths = void 0,
        this.maxHeight = void 0,
        this.maxWidth = void 0,
        this.top = void 0,
        this.bottom = void 0,
        this.left = void 0,
        this.right = void 0,
        this.height = void 0,
        this.width = void 0,
        this._margins = void 0,
        this.position = void 0,
        this.weight = void 0,
        this.fullSize = void 0
    }
    update(e, n, i) {
        this.maxWidth = e,
        this.maxHeight = n,
        this._margins = i,
        this.setDimensions(),
        this.buildLabels(),
        this.fit()
    }
    setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth,
        this.left = this._margins.left,
        this.right = this.width) : (this.height = this.maxHeight,
        this.top = this._margins.top,
        this.bottom = this.height)
    }
    buildLabels() {
        const e = this.options.labels || {};
        let n = Q(e.generateLabels, [this.chart], this) || [];
        e.filter && (n = n.filter(i => e.filter(i, this.chart.data))),
        e.sort && (n = n.sort( (i, r) => e.sort(i, r, this.chart.data))),
        this.options.reverse && n.reverse(),
        this.legendItems = n
    }
    fit() {
        const {options: e, ctx: n} = this;
        if (!e.display) {
            this.width = this.height = 0;
            return
        }
        const i = e.labels
          , r = _e(i.font)
          , s = r.size
          , o = this._computeTitleHeight()
          , {boxWidth: l, itemHeight: a} = kf(i, s);
        let u, c;
        n.font = r.string,
        this.isHorizontal() ? (u = this.maxWidth,
        c = this._fitRows(o, s, l, a) + 10) : (c = this.maxHeight,
        u = this._fitCols(o, r, l, a) + 10),
        this.width = Math.min(u, e.maxWidth || this.maxWidth),
        this.height = Math.min(c, e.maxHeight || this.maxHeight)
    }
    _fitRows(e, n, i, r) {
        const {ctx: s, maxWidth: o, options: {labels: {padding: l}}} = this
          , a = this.legendHitBoxes = []
          , u = this.lineWidths = [0]
          , c = r + l;
        let f = e;
        s.textAlign = "left",
        s.textBaseline = "middle";
        let d = -1
          , h = -c;
        return this.legendItems.forEach( (m, v) => {
            const x = i + n / 2 + s.measureText(m.text).width;
            (v === 0 || u[u.length - 1] + x + 2 * l > o) && (f += c,
            u[u.length - (v > 0 ? 0 : 1)] = 0,
            h += c,
            d++),
            a[v] = {
                left: 0,
                top: h,
                row: d,
                width: x,
                height: r
            },
            u[u.length - 1] += x + l
        }
        ),
        f
    }
    _fitCols(e, n, i, r) {
        const {ctx: s, maxHeight: o, options: {labels: {padding: l}}} = this
          , a = this.legendHitBoxes = []
          , u = this.columnSizes = []
          , c = o - e;
        let f = l
          , d = 0
          , h = 0
          , m = 0
          , v = 0;
        return this.legendItems.forEach( (x, g) => {
            const {itemWidth: p, itemHeight: y} = kv(i, n, s, x, r);
            g > 0 && h + y + 2 * l > c && (f += d + l,
            u.push({
                width: d,
                height: h
            }),
            m += d + l,
            v++,
            d = h = 0),
            a[g] = {
                left: m,
                top: h,
                col: v,
                width: p,
                height: y
            },
            d = Math.max(d, p),
            h += y + l
        }
        ),
        f += d,
        u.push({
            width: d,
            height: h
        }),
        f
    }
    adjustHitBoxes() {
        if (!this.options.display)
            return;
        const e = this._computeTitleHeight()
          , {legendHitBoxes: n, options: {align: i, labels: {padding: r}, rtl: s}} = this
          , o = ni(s, this.left, this.width);
        if (this.isHorizontal()) {
            let l = 0
              , a = We(i, this.left + r, this.right - this.lineWidths[l]);
            for (const u of n)
                l !== u.row && (l = u.row,
                a = We(i, this.left + r, this.right - this.lineWidths[l])),
                u.top += this.top + e + r,
                u.left = o.leftForLtr(o.x(a), u.width),
                a += u.width + r
        } else {
            let l = 0
              , a = We(i, this.top + e + r, this.bottom - this.columnSizes[l].height);
            for (const u of n)
                u.col !== l && (l = u.col,
                a = We(i, this.top + e + r, this.bottom - this.columnSizes[l].height)),
                u.top = a,
                u.left += this.left + r,
                u.left = o.leftForLtr(o.x(u.left), u.width),
                a += u.height + r
        }
    }
    isHorizontal() {
        return this.options.position === "top" || this.options.position === "bottom"
    }
    draw() {
        if (this.options.display) {
            const e = this.ctx;
            uu(e, this),
            this._draw(),
            cu(e)
        }
    }
    _draw() {
        const {options: e, columnSizes: n, lineWidths: i, ctx: r} = this
          , {align: s, labels: o} = e
          , l = ue.color
          , a = ni(e.rtl, this.left, this.width)
          , u = _e(o.font)
          , {padding: c} = o
          , f = u.size
          , d = f / 2;
        let h;
        this.drawTitle(),
        r.textAlign = a.textAlign("left"),
        r.textBaseline = "middle",
        r.lineWidth = .5,
        r.font = u.string;
        const {boxWidth: m, boxHeight: v, itemHeight: x} = kf(o, f)
          , g = function(S, C, b) {
            if (isNaN(m) || m <= 0 || isNaN(v) || v < 0)
                return;
            r.save();
            const P = W(b.lineWidth, 1);
            if (r.fillStyle = W(b.fillStyle, l),
            r.lineCap = W(b.lineCap, "butt"),
            r.lineDashOffset = W(b.lineDashOffset, 0),
            r.lineJoin = W(b.lineJoin, "miter"),
            r.lineWidth = P,
            r.strokeStyle = W(b.strokeStyle, l),
            r.setLineDash(W(b.lineDash, [])),
            o.usePointStyle) {
                const E = {
                    radius: v * Math.SQRT2 / 2,
                    pointStyle: b.pointStyle,
                    rotation: b.rotation,
                    borderWidth: P
                }
                  , T = a.xPlus(S, m / 2)
                  , D = C + d;
                yp(r, E, T, D, o.pointStyleWidth && m)
            } else {
                const E = C + Math.max((f - v) / 2, 0)
                  , T = a.leftForLtr(S, m)
                  , D = ti(b.borderRadius);
                r.beginPath(),
                Object.values(D).some(V => V !== 0) ? qs(r, {
                    x: T,
                    y: E,
                    w: m,
                    h: v,
                    radius: D
                }) : r.rect(T, E, m, v),
                r.fill(),
                P !== 0 && r.stroke()
            }
            r.restore()
        }
          , p = function(S, C, b) {
            ci(r, b.text, S, C + x / 2, u, {
                strikethrough: b.hidden,
                textAlign: a.textAlign(b.textAlign)
            })
        }
          , y = this.isHorizontal()
          , w = this._computeTitleHeight();
        y ? h = {
            x: We(s, this.left + c, this.right - i[0]),
            y: this.top + c + w,
            line: 0
        } : h = {
            x: this.left + c,
            y: We(s, this.top + w + c, this.bottom - n[0].height),
            line: 0
        },
        _p(this.ctx, e.textDirection);
        const k = x + c;
        this.legendItems.forEach( (S, C) => {
            r.strokeStyle = S.fontColor,
            r.fillStyle = S.fontColor;
            const b = r.measureText(S.text).width
              , P = a.textAlign(S.textAlign || (S.textAlign = o.textAlign))
              , E = m + d + b;
            let T = h.x
              , D = h.y;
            a.setWidth(this.width),
            y ? C > 0 && T + E + c > this.right && (D = h.y += k,
            h.line++,
            T = h.x = We(s, this.left + c, this.right - i[h.line])) : C > 0 && D + k > this.bottom && (T = h.x = T + n[h.line].width + c,
            h.line++,
            D = h.y = We(s, this.top + w + c, this.bottom - n[h.line].height));
            const V = a.x(T);
            if (g(V, D, S),
            T = o0(P, T + m + d, y ? T + E : this.right, e.rtl),
            p(a.x(T), D, S),
            y)
                h.x += E + c;
            else if (typeof S.text != "string") {
                const se = u.lineHeight;
                h.y += zp(S, se) + c
            } else
                h.y += k
        }
        ),
        Sp(this.ctx, e.textDirection)
    }
    drawTitle() {
        const e = this.options
          , n = e.title
          , i = _e(n.font)
          , r = Te(n.padding);
        if (!n.display)
            return;
        const s = ni(e.rtl, this.left, this.width)
          , o = this.ctx
          , l = n.position
          , a = i.size / 2
          , u = r.top + a;
        let c, f = this.left, d = this.width;
        if (this.isHorizontal())
            d = Math.max(...this.lineWidths),
            c = this.top + u,
            f = We(e.align, f, this.right - d);
        else {
            const m = this.columnSizes.reduce( (v, x) => Math.max(v, x.height), 0);
            c = u + We(e.align, this.top, this.bottom - m - e.labels.padding - this._computeTitleHeight())
        }
        const h = We(l, f, f + d);
        o.textAlign = s.textAlign(pp(l)),
        o.textBaseline = "middle",
        o.strokeStyle = n.color,
        o.fillStyle = n.color,
        o.font = i.string,
        ci(o, n.text, h, c, i)
    }
    _computeTitleHeight() {
        const e = this.options.title
          , n = _e(e.font)
          , i = Te(e.padding);
        return e.display ? n.lineHeight + i.height : 0
    }
    _getLegendItemAt(e, n) {
        let i, r, s;
        if (Ri(e, this.left, this.right) && Ri(n, this.top, this.bottom)) {
            for (s = this.legendHitBoxes,
            i = 0; i < s.length; ++i)
                if (r = s[i],
                Ri(e, r.left, r.left + r.width) && Ri(n, r.top, r.top + r.height))
                    return this.legendItems[i]
        }
        return null
    }
    handleEvent(e) {
        const n = this.options;
        if (!Cv(e.type, n))
            return;
        const i = this._getLegendItemAt(e.x, e.y);
        if (e.type === "mousemove" || e.type === "mouseout") {
            const r = this._hoveredItem
              , s = wv(r, i);
            r && !s && Q(n.onLeave, [e, r, this], this),
            this._hoveredItem = i,
            i && !s && Q(n.onHover, [e, i, this], this)
        } else
            i && Q(n.onClick, [e, i, this], this)
    }
}
function kv(t, e, n, i, r) {
    const s = _v(i, t, e, n)
      , o = Sv(r, i, e.lineHeight);
    return {
        itemWidth: s,
        itemHeight: o
    }
}
function _v(t, e, n, i) {
    let r = t.text;
    return r && typeof r != "string" && (r = r.reduce( (s, o) => s.length > o.length ? s : o)),
    e + n.size / 2 + i.measureText(r).width
}
function Sv(t, e, n) {
    let i = t;
    return typeof e.text != "string" && (i = zp(e, n)),
    i
}
function zp(t, e) {
    const n = t.text ? t.text.length : 0;
    return e * n
}
function Cv(t, e) {
    return !!((t === "mousemove" || t === "mouseout") && (e.onHover || e.onLeave) || e.onClick && (t === "click" || t === "mouseup"))
}
var bv = {
    id: "legend",
    _element: _f,
    start(t, e, n) {
        const i = t.legend = new _f({
            ctx: t.ctx,
            options: n,
            chart: t
        });
        Kt.configure(t, i, n),
        Kt.addBox(t, i)
    },
    stop(t) {
        Kt.removeBox(t, t.legend),
        delete t.legend
    },
    beforeUpdate(t, e, n) {
        const i = t.legend;
        Kt.configure(t, i, n),
        i.options = n
    },
    afterUpdate(t) {
        const e = t.legend;
        e.buildLabels(),
        e.adjustHitBoxes()
    },
    afterEvent(t, e) {
        e.replay || t.legend.handleEvent(e.event)
    },
    defaults: {
        display: !0,
        position: "top",
        align: "center",
        fullSize: !0,
        reverse: !1,
        weight: 1e3,
        onClick(t, e, n) {
            const i = e.datasetIndex
              , r = n.chart;
            r.isDatasetVisible(i) ? (r.hide(i),
            e.hidden = !0) : (r.show(i),
            e.hidden = !1)
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: t => t.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(t) {
                const e = t.data.datasets
                  , {labels: {usePointStyle: n, pointStyle: i, textAlign: r, color: s, useBorderRadius: o, borderRadius: l}} = t.legend.options;
                return t._getSortedDatasetMetas().map(a => {
                    const u = a.controller.getStyle(n ? 0 : void 0)
                      , c = Te(u.borderWidth);
                    return {
                        text: e[a.index].label,
                        fillStyle: u.backgroundColor,
                        fontColor: s,
                        hidden: !a.visible,
                        lineCap: u.borderCapStyle,
                        lineDash: u.borderDash,
                        lineDashOffset: u.borderDashOffset,
                        lineJoin: u.borderJoinStyle,
                        lineWidth: (c.width + c.height) / 4,
                        strokeStyle: u.borderColor,
                        pointStyle: i || u.pointStyle,
                        rotation: u.rotation,
                        textAlign: r || u.textAlign,
                        borderRadius: o && (l || u.borderRadius),
                        datasetIndex: a.index
                    }
                }
                , this)
            }
        },
        title: {
            color: t => t.chart.options.color,
            display: !1,
            position: "center",
            text: ""
        }
    },
    descriptors: {
        _scriptable: t => !t.startsWith("on"),
        labels: {
            _scriptable: t => !["generateLabels", "filter", "sort"].includes(t)
        }
    }
};
const Ii = {
    average(t) {
        if (!t.length)
            return !1;
        let e, n, i = new Set, r = 0, s = 0;
        for (e = 0,
        n = t.length; e < n; ++e) {
            const l = t[e].element;
            if (l && l.hasValue()) {
                const a = l.tooltipPosition();
                i.add(a.x),
                r += a.y,
                ++s
            }
        }
        return s === 0 || i.size === 0 ? !1 : {
            x: [...i].reduce( (l, a) => l + a) / i.size,
            y: r / s
        }
    },
    nearest(t, e) {
        if (!t.length)
            return !1;
        let n = e.x, i = e.y, r = Number.POSITIVE_INFINITY, s, o, l;
        for (s = 0,
        o = t.length; s < o; ++s) {
            const a = t[s].element;
            if (a && a.hasValue()) {
                const u = a.getCenterPoint()
                  , c = $1(e, u);
                c < r && (r = c,
                l = a)
            }
        }
        if (l) {
            const a = l.tooltipPosition();
            n = a.x,
            i = a.y
        }
        return {
            x: n,
            y: i
        }
    }
};
function dt(t, e) {
    return e && (fe(e) ? Array.prototype.push.apply(t, e) : t.push(e)),
    t
}
function St(t) {
    return (typeof t == "string" || t instanceof String) && t.indexOf(`
`) > -1 ? t.split(`
`) : t
}
function Av(t, e) {
    const {element: n, datasetIndex: i, index: r} = e
      , s = t.getDatasetMeta(i).controller
      , {label: o, value: l} = s.getLabelAndValue(r);
    return {
        chart: t,
        label: o,
        parsed: s.getParsed(r),
        raw: t.data.datasets[i].data[r],
        formattedValue: l,
        dataset: s.getDataset(),
        dataIndex: r,
        datasetIndex: i,
        element: n
    }
}
function Sf(t, e) {
    const n = t.chart.ctx
      , {body: i, footer: r, title: s} = t
      , {boxWidth: o, boxHeight: l} = e
      , a = _e(e.bodyFont)
      , u = _e(e.titleFont)
      , c = _e(e.footerFont)
      , f = s.length
      , d = r.length
      , h = i.length
      , m = Te(e.padding);
    let v = m.height
      , x = 0
      , g = i.reduce( (w, k) => w + k.before.length + k.lines.length + k.after.length, 0);
    if (g += t.beforeBody.length + t.afterBody.length,
    f && (v += f * u.lineHeight + (f - 1) * e.titleSpacing + e.titleMarginBottom),
    g) {
        const w = e.displayColors ? Math.max(l, a.lineHeight) : a.lineHeight;
        v += h * w + (g - h) * a.lineHeight + (g - 1) * e.bodySpacing
    }
    d && (v += e.footerMarginTop + d * c.lineHeight + (d - 1) * e.footerSpacing);
    let p = 0;
    const y = function(w) {
        x = Math.max(x, n.measureText(w).width + p)
    };
    return n.save(),
    n.font = u.string,
    Y(t.title, y),
    n.font = a.string,
    Y(t.beforeBody.concat(t.afterBody), y),
    p = e.displayColors ? o + 2 + e.boxPadding : 0,
    Y(i, w => {
        Y(w.before, y),
        Y(w.lines, y),
        Y(w.after, y)
    }
    ),
    p = 0,
    n.font = c.string,
    Y(t.footer, y),
    n.restore(),
    x += m.width,
    {
        width: x,
        height: v
    }
}
function Mv(t, e) {
    const {y: n, height: i} = e;
    return n < i / 2 ? "top" : n > t.height - i / 2 ? "bottom" : "center"
}
function Ev(t, e, n, i) {
    const {x: r, width: s} = i
      , o = n.caretSize + n.caretPadding;
    if (t === "left" && r + s + o > e.width || t === "right" && r - s - o < 0)
        return !0
}
function Pv(t, e, n, i) {
    const {x: r, width: s} = n
      , {width: o, chartArea: {left: l, right: a}} = t;
    let u = "center";
    return i === "center" ? u = r <= (l + a) / 2 ? "left" : "right" : r <= s / 2 ? u = "left" : r >= o - s / 2 && (u = "right"),
    Ev(u, t, e, n) && (u = "center"),
    u
}
function Cf(t, e, n) {
    const i = n.yAlign || e.yAlign || Mv(t, n);
    return {
        xAlign: n.xAlign || e.xAlign || Pv(t, e, n, i),
        yAlign: i
    }
}
function Lv(t, e) {
    let {x: n, width: i} = t;
    return e === "right" ? n -= i : e === "center" && (n -= i / 2),
    n
}
function Ov(t, e, n) {
    let {y: i, height: r} = t;
    return e === "top" ? i += n : e === "bottom" ? i -= r + n : i -= r / 2,
    i
}
function bf(t, e, n, i) {
    const {caretSize: r, caretPadding: s, cornerRadius: o} = t
      , {xAlign: l, yAlign: a} = n
      , u = r + s
      , {topLeft: c, topRight: f, bottomLeft: d, bottomRight: h} = ti(o);
    let m = Lv(e, l);
    const v = Ov(e, a, u);
    return a === "center" ? l === "left" ? m += u : l === "right" && (m -= u) : l === "left" ? m -= Math.max(c, d) + r : l === "right" && (m += Math.max(f, h) + r),
    {
        x: et(m, 0, i.width - e.width),
        y: et(v, 0, i.height - e.height)
    }
}
function ns(t, e, n) {
    const i = Te(n.padding);
    return e === "center" ? t.x + t.width / 2 : e === "right" ? t.x + t.width - i.right : t.x + i.left
}
function Af(t) {
    return dt([], St(t))
}
function Tv(t, e, n) {
    return Tn(t, {
        tooltip: e,
        tooltipItems: n,
        type: "tooltip"
    })
}
function Mf(t, e) {
    const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
    return n ? t.override(n) : t
}
const Np = {
    beforeTitle: kt,
    title(t) {
        if (t.length > 0) {
            const e = t[0]
              , n = e.chart.data.labels
              , i = n ? n.length : 0;
            if (this && this.options && this.options.mode === "dataset")
                return e.dataset.label || "";
            if (e.label)
                return e.label;
            if (i > 0 && e.dataIndex < i)
                return n[e.dataIndex]
        }
        return ""
    },
    afterTitle: kt,
    beforeBody: kt,
    beforeLabel: kt,
    label(t) {
        if (this && this.options && this.options.mode === "dataset")
            return t.label + ": " + t.formattedValue || t.formattedValue;
        let e = t.dataset.label || "";
        e && (e += ": ");
        const n = t.formattedValue;
        return ne(n) || (e += n),
        e
    },
    labelColor(t) {
        const n = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
        return {
            borderColor: n.borderColor,
            backgroundColor: n.backgroundColor,
            borderWidth: n.borderWidth,
            borderDash: n.borderDash,
            borderDashOffset: n.borderDashOffset,
            borderRadius: 0
        }
    },
    labelTextColor() {
        return this.options.bodyColor
    },
    labelPointStyle(t) {
        const n = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
        return {
            pointStyle: n.pointStyle,
            rotation: n.rotation
        }
    },
    afterLabel: kt,
    afterBody: kt,
    beforeFooter: kt,
    footer: kt,
    afterFooter: kt
};
function ze(t, e, n, i) {
    const r = t[e].call(n, i);
    return typeof r > "u" ? Np[e].call(n, i) : r
}
class oa extends Pn {
    constructor(e) {
        super(),
        this.opacity = 0,
        this._active = [],
        this._eventPosition = void 0,
        this._size = void 0,
        this._cachedAnimations = void 0,
        this._tooltipItems = [],
        this.$animations = void 0,
        this.$context = void 0,
        this.chart = e.chart,
        this.options = e.options,
        this.dataPoints = void 0,
        this.title = void 0,
        this.beforeBody = void 0,
        this.body = void 0,
        this.afterBody = void 0,
        this.footer = void 0,
        this.xAlign = void 0,
        this.yAlign = void 0,
        this.x = void 0,
        this.y = void 0,
        this.height = void 0,
        this.width = void 0,
        this.caretX = void 0,
        this.caretY = void 0,
        this.labelColors = void 0,
        this.labelPointStyles = void 0,
        this.labelTextColors = void 0
    }
    initialize(e) {
        this.options = e,
        this._cachedAnimations = void 0,
        this.$context = void 0
    }
    _resolveAnimations() {
        const e = this._cachedAnimations;
        if (e)
            return e;
        const n = this.chart
          , i = this.options.setContext(this.getContext())
          , r = i.enabled && n.options.animation && i.animations
          , s = new Cp(this.chart,r);
        return r._cacheable && (this._cachedAnimations = Object.freeze(s)),
        s
    }
    getContext() {
        return this.$context || (this.$context = Tv(this.chart.getContext(), this, this._tooltipItems))
    }
    getTitle(e, n) {
        const {callbacks: i} = n
          , r = ze(i, "beforeTitle", this, e)
          , s = ze(i, "title", this, e)
          , o = ze(i, "afterTitle", this, e);
        let l = [];
        return l = dt(l, St(r)),
        l = dt(l, St(s)),
        l = dt(l, St(o)),
        l
    }
    getBeforeBody(e, n) {
        return Af(ze(n.callbacks, "beforeBody", this, e))
    }
    getBody(e, n) {
        const {callbacks: i} = n
          , r = [];
        return Y(e, s => {
            const o = {
                before: [],
                lines: [],
                after: []
            }
              , l = Mf(i, s);
            dt(o.before, St(ze(l, "beforeLabel", this, s))),
            dt(o.lines, ze(l, "label", this, s)),
            dt(o.after, St(ze(l, "afterLabel", this, s))),
            r.push(o)
        }
        ),
        r
    }
    getAfterBody(e, n) {
        return Af(ze(n.callbacks, "afterBody", this, e))
    }
    getFooter(e, n) {
        const {callbacks: i} = n
          , r = ze(i, "beforeFooter", this, e)
          , s = ze(i, "footer", this, e)
          , o = ze(i, "afterFooter", this, e);
        let l = [];
        return l = dt(l, St(r)),
        l = dt(l, St(s)),
        l = dt(l, St(o)),
        l
    }
    _createItems(e) {
        const n = this._active
          , i = this.chart.data
          , r = []
          , s = []
          , o = [];
        let l = [], a, u;
        for (a = 0,
        u = n.length; a < u; ++a)
            l.push(Av(this.chart, n[a]));
        return e.filter && (l = l.filter( (c, f, d) => e.filter(c, f, d, i))),
        e.itemSort && (l = l.sort( (c, f) => e.itemSort(c, f, i))),
        Y(l, c => {
            const f = Mf(e.callbacks, c);
            r.push(ze(f, "labelColor", this, c)),
            s.push(ze(f, "labelPointStyle", this, c)),
            o.push(ze(f, "labelTextColor", this, c))
        }
        ),
        this.labelColors = r,
        this.labelPointStyles = s,
        this.labelTextColors = o,
        this.dataPoints = l,
        l
    }
    update(e, n) {
        const i = this.options.setContext(this.getContext())
          , r = this._active;
        let s, o = [];
        if (!r.length)
            this.opacity !== 0 && (s = {
                opacity: 0
            });
        else {
            const l = Ii[i.position].call(this, r, this._eventPosition);
            o = this._createItems(i),
            this.title = this.getTitle(o, i),
            this.beforeBody = this.getBeforeBody(o, i),
            this.body = this.getBody(o, i),
            this.afterBody = this.getAfterBody(o, i),
            this.footer = this.getFooter(o, i);
            const a = this._size = Sf(this, i)
              , u = Object.assign({}, l, a)
              , c = Cf(this.chart, i, u)
              , f = bf(i, u, c, this.chart);
            this.xAlign = c.xAlign,
            this.yAlign = c.yAlign,
            s = {
                opacity: 1,
                x: f.x,
                y: f.y,
                width: a.width,
                height: a.height,
                caretX: l.x,
                caretY: l.y
            }
        }
        this._tooltipItems = o,
        this.$context = void 0,
        s && this._resolveAnimations().update(this, s),
        e && i.external && i.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: n
        })
    }
    drawCaret(e, n, i, r) {
        const s = this.getCaretPosition(e, i, r);
        n.lineTo(s.x1, s.y1),
        n.lineTo(s.x2, s.y2),
        n.lineTo(s.x3, s.y3)
    }
    getCaretPosition(e, n, i) {
        const {xAlign: r, yAlign: s} = this
          , {caretSize: o, cornerRadius: l} = i
          , {topLeft: a, topRight: u, bottomLeft: c, bottomRight: f} = ti(l)
          , {x: d, y: h} = e
          , {width: m, height: v} = n;
        let x, g, p, y, w, k;
        return s === "center" ? (w = h + v / 2,
        r === "left" ? (x = d,
        g = x - o,
        y = w + o,
        k = w - o) : (x = d + m,
        g = x + o,
        y = w - o,
        k = w + o),
        p = x) : (r === "left" ? g = d + Math.max(a, c) + o : r === "right" ? g = d + m - Math.max(u, f) - o : g = this.caretX,
        s === "top" ? (y = h,
        w = y - o,
        x = g - o,
        p = g + o) : (y = h + v,
        w = y + o,
        x = g + o,
        p = g - o),
        k = y),
        {
            x1: x,
            x2: g,
            x3: p,
            y1: y,
            y2: w,
            y3: k
        }
    }
    drawTitle(e, n, i) {
        const r = this.title
          , s = r.length;
        let o, l, a;
        if (s) {
            const u = ni(i.rtl, this.x, this.width);
            for (e.x = ns(this, i.titleAlign, i),
            n.textAlign = u.textAlign(i.titleAlign),
            n.textBaseline = "middle",
            o = _e(i.titleFont),
            l = i.titleSpacing,
            n.fillStyle = i.titleColor,
            n.font = o.string,
            a = 0; a < s; ++a)
                n.fillText(r[a], u.x(e.x), e.y + o.lineHeight / 2),
                e.y += o.lineHeight + l,
                a + 1 === s && (e.y += i.titleMarginBottom - l)
        }
    }
    _drawColorBox(e, n, i, r, s) {
        const o = this.labelColors[i]
          , l = this.labelPointStyles[i]
          , {boxHeight: a, boxWidth: u} = s
          , c = _e(s.bodyFont)
          , f = ns(this, "left", s)
          , d = r.x(f)
          , h = a < c.lineHeight ? (c.lineHeight - a) / 2 : 0
          , m = n.y + h;
        if (s.usePointStyle) {
            const v = {
                radius: Math.min(u, a) / 2,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                borderWidth: 1
            }
              , x = r.leftForLtr(d, u) + u / 2
              , g = m + a / 2;
            e.strokeStyle = s.multiKeyBackground,
            e.fillStyle = s.multiKeyBackground,
            Vc(e, v, x, g),
            e.strokeStyle = o.borderColor,
            e.fillStyle = o.backgroundColor,
            Vc(e, v, x, g)
        } else {
            e.lineWidth = B(o.borderWidth) ? Math.max(...Object.values(o.borderWidth)) : o.borderWidth || 1,
            e.strokeStyle = o.borderColor,
            e.setLineDash(o.borderDash || []),
            e.lineDashOffset = o.borderDashOffset || 0;
            const v = r.leftForLtr(d, u)
              , x = r.leftForLtr(r.xPlus(d, 1), u - 2)
              , g = ti(o.borderRadius);
            Object.values(g).some(p => p !== 0) ? (e.beginPath(),
            e.fillStyle = s.multiKeyBackground,
            qs(e, {
                x: v,
                y: m,
                w: u,
                h: a,
                radius: g
            }),
            e.fill(),
            e.stroke(),
            e.fillStyle = o.backgroundColor,
            e.beginPath(),
            qs(e, {
                x,
                y: m + 1,
                w: u - 2,
                h: a - 2,
                radius: g
            }),
            e.fill()) : (e.fillStyle = s.multiKeyBackground,
            e.fillRect(v, m, u, a),
            e.strokeRect(v, m, u, a),
            e.fillStyle = o.backgroundColor,
            e.fillRect(x, m + 1, u - 2, a - 2))
        }
        e.fillStyle = this.labelTextColors[i]
    }
    drawBody(e, n, i) {
        const {body: r} = this
          , {bodySpacing: s, bodyAlign: o, displayColors: l, boxHeight: a, boxWidth: u, boxPadding: c} = i
          , f = _e(i.bodyFont);
        let d = f.lineHeight
          , h = 0;
        const m = ni(i.rtl, this.x, this.width)
          , v = function(b) {
            n.fillText(b, m.x(e.x + h), e.y + d / 2),
            e.y += d + s
        }
          , x = m.textAlign(o);
        let g, p, y, w, k, S, C;
        for (n.textAlign = o,
        n.textBaseline = "middle",
        n.font = f.string,
        e.x = ns(this, x, i),
        n.fillStyle = i.bodyColor,
        Y(this.beforeBody, v),
        h = l && x !== "right" ? o === "center" ? u / 2 + c : u + 2 + c : 0,
        w = 0,
        S = r.length; w < S; ++w) {
            for (g = r[w],
            p = this.labelTextColors[w],
            n.fillStyle = p,
            Y(g.before, v),
            y = g.lines,
            l && y.length && (this._drawColorBox(n, e, w, m, i),
            d = Math.max(f.lineHeight, a)),
            k = 0,
            C = y.length; k < C; ++k)
                v(y[k]),
                d = f.lineHeight;
            Y(g.after, v)
        }
        h = 0,
        d = f.lineHeight,
        Y(this.afterBody, v),
        e.y -= s
    }
    drawFooter(e, n, i) {
        const r = this.footer
          , s = r.length;
        let o, l;
        if (s) {
            const a = ni(i.rtl, this.x, this.width);
            for (e.x = ns(this, i.footerAlign, i),
            e.y += i.footerMarginTop,
            n.textAlign = a.textAlign(i.footerAlign),
            n.textBaseline = "middle",
            o = _e(i.footerFont),
            n.fillStyle = i.footerColor,
            n.font = o.string,
            l = 0; l < s; ++l)
                n.fillText(r[l], a.x(e.x), e.y + o.lineHeight / 2),
                e.y += o.lineHeight + i.footerSpacing
        }
    }
    drawBackground(e, n, i, r) {
        const {xAlign: s, yAlign: o} = this
          , {x: l, y: a} = e
          , {width: u, height: c} = i
          , {topLeft: f, topRight: d, bottomLeft: h, bottomRight: m} = ti(r.cornerRadius);
        n.fillStyle = r.backgroundColor,
        n.strokeStyle = r.borderColor,
        n.lineWidth = r.borderWidth,
        n.beginPath(),
        n.moveTo(l + f, a),
        o === "top" && this.drawCaret(e, n, i, r),
        n.lineTo(l + u - d, a),
        n.quadraticCurveTo(l + u, a, l + u, a + d),
        o === "center" && s === "right" && this.drawCaret(e, n, i, r),
        n.lineTo(l + u, a + c - m),
        n.quadraticCurveTo(l + u, a + c, l + u - m, a + c),
        o === "bottom" && this.drawCaret(e, n, i, r),
        n.lineTo(l + h, a + c),
        n.quadraticCurveTo(l, a + c, l, a + c - h),
        o === "center" && s === "left" && this.drawCaret(e, n, i, r),
        n.lineTo(l, a + f),
        n.quadraticCurveTo(l, a, l + f, a),
        n.closePath(),
        n.fill(),
        r.borderWidth > 0 && n.stroke()
    }
    _updateAnimationTarget(e) {
        const n = this.chart
          , i = this.$animations
          , r = i && i.x
          , s = i && i.y;
        if (r || s) {
            const o = Ii[e.position].call(this, this._active, this._eventPosition);
            if (!o)
                return;
            const l = this._size = Sf(this, e)
              , a = Object.assign({}, o, this._size)
              , u = Cf(n, e, a)
              , c = bf(e, a, u, n);
            (r._to !== c.x || s._to !== c.y) && (this.xAlign = u.xAlign,
            this.yAlign = u.yAlign,
            this.width = l.width,
            this.height = l.height,
            this.caretX = o.x,
            this.caretY = o.y,
            this._resolveAnimations().update(this, c))
        }
    }
    _willRender() {
        return !!this.opacity
    }
    draw(e) {
        const n = this.options.setContext(this.getContext());
        let i = this.opacity;
        if (!i)
            return;
        this._updateAnimationTarget(n);
        const r = {
            width: this.width,
            height: this.height
        }
          , s = {
            x: this.x,
            y: this.y
        };
        i = Math.abs(i) < .001 ? 0 : i;
        const o = Te(n.padding)
          , l = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        n.enabled && l && (e.save(),
        e.globalAlpha = i,
        this.drawBackground(s, e, r, n),
        _p(e, n.textDirection),
        s.y += o.top,
        this.drawTitle(s, e, n),
        this.drawBody(s, e, n),
        this.drawFooter(s, e, n),
        Sp(e, n.textDirection),
        e.restore())
    }
    getActiveElements() {
        return this._active || []
    }
    setActiveElements(e, n) {
        const i = this._active
          , r = e.map( ({datasetIndex: l, index: a}) => {
            const u = this.chart.getDatasetMeta(l);
            if (!u)
                throw new Error("Cannot find a dataset at index " + l);
            return {
                datasetIndex: l,
                element: u.data[a],
                index: a
            }
        }
        )
          , s = !Us(i, r)
          , o = this._positionChanged(r, n);
        (s || o) && (this._active = r,
        this._eventPosition = n,
        this._ignoreReplayEvents = !0,
        this.update(!0))
    }
    handleEvent(e, n, i=!0) {
        if (n && this._ignoreReplayEvents)
            return !1;
        this._ignoreReplayEvents = !1;
        const r = this.options
          , s = this._active || []
          , o = this._getActiveElements(e, s, n, i)
          , l = this._positionChanged(o, e)
          , a = n || !Us(o, s) || l;
        return a && (this._active = o,
        (r.enabled || r.external) && (this._eventPosition = {
            x: e.x,
            y: e.y
        },
        this.update(!0, n))),
        a
    }
    _getActiveElements(e, n, i, r) {
        const s = this.options;
        if (e.type === "mouseout")
            return [];
        if (!r)
            return n.filter(l => this.chart.data.datasets[l.datasetIndex] && this.chart.getDatasetMeta(l.datasetIndex).controller.getParsed(l.index) !== void 0);
        const o = this.chart.getElementsAtEventForMode(e, s.mode, s, i);
        return s.reverse && o.reverse(),
        o
    }
    _positionChanged(e, n) {
        const {caretX: i, caretY: r, options: s} = this
          , o = Ii[s.position].call(this, e, n);
        return o !== !1 && (i !== o.x || r !== o.y)
    }
}
z(oa, "positioners", Ii);
var Dv = {
    id: "tooltip",
    _element: oa,
    positioners: Ii,
    afterInit(t, e, n) {
        n && (t.tooltip = new oa({
            chart: t,
            options: n
        }))
    },
    beforeUpdate(t, e, n) {
        t.tooltip && t.tooltip.initialize(n)
    },
    reset(t, e, n) {
        t.tooltip && t.tooltip.initialize(n)
    },
    afterDraw(t) {
        const e = t.tooltip;
        if (e && e._willRender()) {
            const n = {
                tooltip: e
            };
            if (t.notifyPlugins("beforeTooltipDraw", {
                ...n,
                cancelable: !0
            }) === !1)
                return;
            e.draw(t.ctx),
            t.notifyPlugins("afterTooltipDraw", n)
        }
    },
    afterEvent(t, e) {
        if (t.tooltip) {
            const n = e.replay;
            t.tooltip.handleEvent(e.event, n, e.inChartArea) && (e.changed = !0)
        }
    },
    defaults: {
        enabled: !0,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: {
            weight: "bold"
        },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: "left",
        bodyColor: "#fff",
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: "left",
        footerColor: "#fff",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: {
            weight: "bold"
        },
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (t, e) => e.bodyFont.size,
        boxWidth: (t, e) => e.bodyFont.size,
        multiKeyBackground: "#fff",
        displayColors: !0,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: {
            duration: 400,
            easing: "easeOutQuart"
        },
        animations: {
            numbers: {
                type: "number",
                properties: ["x", "y", "width", "height", "caretX", "caretY"]
            },
            opacity: {
                easing: "linear",
                duration: 200
            }
        },
        callbacks: Np
    },
    defaultRoutes: {
        bodyFont: "font",
        footerFont: "font",
        titleFont: "font"
    },
    descriptors: {
        _scriptable: t => t !== "filter" && t !== "itemSort" && t !== "external",
        _indexable: !1,
        callbacks: {
            _scriptable: !1,
            _indexable: !1
        },
        animation: {
            _fallback: !1
        },
        animations: {
            _fallback: "animation"
        }
    },
    additionalOptionScopes: ["interaction"]
};
function Rv(t, e) {
    const n = []
      , {bounds: r, step: s, min: o, max: l, precision: a, count: u, maxTicks: c, maxDigits: f, includeBounds: d} = t
      , h = s || 1
      , m = c - 1
      , {min: v, max: x} = e
      , g = !ne(o)
      , p = !ne(l)
      , y = !ne(u)
      , w = (x - v) / (f + 1);
    let k = zc((x - v) / m / h) * h, S, C, b, P;
    if (k < 1e-14 && !g && !p)
        return [{
            value: v
        }, {
            value: x
        }];
    P = Math.ceil(x / k) - Math.floor(v / k),
    P > m && (k = zc(P * k / m / h) * h),
    ne(a) || (S = Math.pow(10, a),
    k = Math.ceil(k * S) / S),
    r === "ticks" ? (C = Math.floor(v / k) * k,
    b = Math.ceil(x / k) * k) : (C = v,
    b = x),
    g && p && s && q1((l - o) / s, k / 1e3) ? (P = Math.round(Math.min((l - o) / k, c)),
    k = (l - o) / P,
    C = o,
    b = l) : y ? (C = g ? o : C,
    b = p ? l : b,
    P = u - 1,
    k = (b - C) / P) : (P = (b - C) / k,
    ys(P, Math.round(P), k / 1e3) ? P = Math.round(P) : P = Math.ceil(P));
    const E = Math.max(Nc(k), Nc(C));
    S = Math.pow(10, ne(a) ? E : a),
    C = Math.round(C * S) / S,
    b = Math.round(b * S) / S;
    let T = 0;
    for (g && (d && C !== o ? (n.push({
        value: o
    }),
    C < o && T++,
    ys(Math.round((C + T * k) * S) / S, o, Ef(o, w, t)) && T++) : C < o && T++); T < P; ++T) {
        const D = Math.round((C + T * k) * S) / S;
        if (p && D > l)
            break;
        n.push({
            value: D
        })
    }
    return p && d && b !== l ? n.length && ys(n[n.length - 1].value, l, Ef(l, w, t)) ? n[n.length - 1].value = l : n.push({
        value: l
    }) : (!p || b === l) && n.push({
        value: b
    }),
    n
}
function Ef(t, e, {horizontal: n, minRotation: i}) {
    const r = yt(i)
      , s = (n ? Math.sin(r) : Math.cos(r)) || .001
      , o = .75 * e * ("" + t).length;
    return Math.min(e / s, o)
}
class no extends gi {
    constructor(e) {
        super(e),
        this.start = void 0,
        this.end = void 0,
        this._startValue = void 0,
        this._endValue = void 0,
        this._valueRange = 0
    }
    parse(e, n) {
        return ne(e) || (typeof e == "number" || e instanceof Number) && !isFinite(+e) ? null : +e
    }
    handleTickRangeOptions() {
        const {beginAtZero: e} = this.options
          , {minDefined: n, maxDefined: i} = this.getUserBounds();
        let {min: r, max: s} = this;
        const o = a => r = n ? r : a
          , l = a => s = i ? s : a;
        if (e) {
            const a = Qs(r)
              , u = Qs(s);
            a < 0 && u < 0 ? l(0) : a > 0 && u > 0 && o(0)
        }
        if (r === s) {
            let a = s === 0 ? 1 : Math.abs(s * .05);
            l(s + a),
            e || o(r - a)
        }
        this.min = r,
        this.max = s
    }
    getTickLimit() {
        const e = this.options.ticks;
        let {maxTicksLimit: n, stepSize: i} = e, r;
        return i ? (r = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1,
        r > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`),
        r = 1e3)) : (r = this.computeTickLimit(),
        n = n || 11),
        n && (r = Math.min(n, r)),
        r
    }
    computeTickLimit() {
        return Number.POSITIVE_INFINITY
    }
    buildTicks() {
        const e = this.options
          , n = e.ticks;
        let i = this.getTickLimit();
        i = Math.max(2, i);
        const r = {
            maxTicks: i,
            bounds: e.bounds,
            min: e.min,
            max: e.max,
            precision: n.precision,
            step: n.stepSize,
            count: n.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: n.minRotation || 0,
            includeBounds: n.includeBounds !== !1
        }
          , s = this._range || this
          , o = Rv(r, s);
        return e.bounds === "ticks" && up(o, this, "value"),
        e.reverse ? (o.reverse(),
        this.start = this.max,
        this.end = this.min) : (this.start = this.min,
        this.end = this.max),
        o
    }
    configure() {
        const e = this.ticks;
        let n = this.min
          , i = this.max;
        if (super.configure(),
        this.options.offset && e.length) {
            const r = (i - n) / Math.max(e.length - 1, 1) / 2;
            n -= r,
            i += r
        }
        this._startValue = n,
        this._endValue = i,
        this._valueRange = i - n
    }
    getLabelForValue(e) {
        return So(e, this.chart.options.locale, this.options.ticks.format)
    }
}
class Pf extends no {
    determineDataLimits() {
        const {min: e, max: n} = this.getMinMax(!0);
        this.min = xe(e) ? e : 0,
        this.max = xe(n) ? n : 1,
        this.handleTickRangeOptions()
    }
    computeTickLimit() {
        const e = this.isHorizontal()
          , n = e ? this.width : this.height
          , i = yt(this.options.ticks.minRotation)
          , r = (e ? Math.sin(i) : Math.cos(i)) || .001
          , s = this._resolveTickFontOptions(0);
        return Math.ceil(n / Math.min(40, s.lineHeight / r))
    }
    getPixelForValue(e) {
        return e === null ? NaN : this.getPixelForDecimal((e - this._startValue) / this._valueRange)
    }
    getValueForPixel(e) {
        return this._startValue + this.getDecimalForPixel(e) * this._valueRange
    }
}
z(Pf, "id", "linear"),
z(Pf, "defaults", {
    ticks: {
        callback: Co.formatters.numeric
    }
});
const xr = t => Math.floor(Xt(t))
  , hn = (t, e) => Math.pow(10, xr(t) + e);
function Lf(t) {
    return t / Math.pow(10, xr(t)) === 1
}
function Of(t, e, n) {
    const i = Math.pow(10, n)
      , r = Math.floor(t / i);
    return Math.ceil(e / i) - r
}
function zv(t, e) {
    const n = e - t;
    let i = xr(n);
    for (; Of(t, e, i) > 10; )
        i++;
    for (; Of(t, e, i) < 10; )
        i--;
    return Math.min(i, xr(t))
}
function Nv(t, {min: e, max: n}) {
    e = Ve(t.min, e);
    const i = []
      , r = xr(e);
    let s = zv(e, n)
      , o = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
    const l = Math.pow(10, s)
      , a = r > s ? Math.pow(10, r) : 0
      , u = Math.round((e - a) * o) / o
      , c = Math.floor((e - a) / l / 10) * l * 10;
    let f = Math.floor((u - c) / Math.pow(10, s))
      , d = Ve(t.min, Math.round((a + c + f * Math.pow(10, s)) * o) / o);
    for (; d < n; )
        i.push({
            value: d,
            major: Lf(d),
            significand: f
        }),
        f >= 10 ? f = f < 15 ? 15 : 20 : f++,
        f >= 20 && (s++,
        f = 2,
        o = s >= 0 ? 1 : o),
        d = Math.round((a + c + f * Math.pow(10, s)) * o) / o;
    const h = Ve(t.max, d);
    return i.push({
        value: h,
        major: Lf(h),
        significand: f
    }),
    i
}
class Tf extends gi {
    constructor(e) {
        super(e),
        this.start = void 0,
        this.end = void 0,
        this._startValue = void 0,
        this._valueRange = 0
    }
    parse(e, n) {
        const i = no.prototype.parse.apply(this, [e, n]);
        if (i === 0) {
            this._zero = !0;
            return
        }
        return xe(i) && i > 0 ? i : null
    }
    determineDataLimits() {
        const {min: e, max: n} = this.getMinMax(!0);
        this.min = xe(e) ? Math.max(0, e) : null,
        this.max = xe(n) ? Math.max(0, n) : null,
        this.options.beginAtZero && (this._zero = !0),
        this._zero && this.min !== this._suggestedMin && !xe(this._userMin) && (this.min = e === hn(this.min, 0) ? hn(this.min, -1) : hn(this.min, 0)),
        this.handleTickRangeOptions()
    }
    handleTickRangeOptions() {
        const {minDefined: e, maxDefined: n} = this.getUserBounds();
        let i = this.min
          , r = this.max;
        const s = l => i = e ? i : l
          , o = l => r = n ? r : l;
        i === r && (i <= 0 ? (s(1),
        o(10)) : (s(hn(i, -1)),
        o(hn(r, 1)))),
        i <= 0 && s(hn(r, -1)),
        r <= 0 && o(hn(i, 1)),
        this.min = i,
        this.max = r
    }
    buildTicks() {
        const e = this.options
          , n = {
            min: this._userMin,
            max: this._userMax
        }
          , i = Nv(n, this);
        return e.bounds === "ticks" && up(i, this, "value"),
        e.reverse ? (i.reverse(),
        this.start = this.max,
        this.end = this.min) : (this.start = this.min,
        this.end = this.max),
        i
    }
    getLabelForValue(e) {
        return e === void 0 ? "0" : So(e, this.chart.options.locale, this.options.ticks.format)
    }
    configure() {
        const e = this.min;
        super.configure(),
        this._startValue = Xt(e),
        this._valueRange = Xt(this.max) - Xt(e)
    }
    getPixelForValue(e) {
        return (e === void 0 || e === 0) && (e = this.min),
        e === null || isNaN(e) ? NaN : this.getPixelForDecimal(e === this.min ? 0 : (Xt(e) - this._startValue) / this._valueRange)
    }
    getValueForPixel(e) {
        const n = this.getDecimalForPixel(e);
        return Math.pow(10, this._startValue + n * this._valueRange)
    }
}
z(Tf, "id", "logarithmic"),
z(Tf, "defaults", {
    ticks: {
        callback: Co.formatters.logarithmic,
        major: {
            enabled: !0
        }
    }
});
function la(t) {
    const e = t.ticks;
    if (e.display && t.display) {
        const n = Te(e.backdropPadding);
        return W(e.font && e.font.size, ue.font.size) + n.height
    }
    return 0
}
function jv(t, e, n) {
    return n = fe(n) ? n : [n],
    {
        w: m0(t, e.string, n),
        h: n.length * e.lineHeight
    }
}
function Df(t, e, n, i, r) {
    return t === i || t === r ? {
        start: e - n / 2,
        end: e + n / 2
    } : t < i || t > r ? {
        start: e - n,
        end: e
    } : {
        start: e,
        end: e + n
    }
}
function Iv(t) {
    const e = {
        l: t.left + t._padding.left,
        r: t.right - t._padding.right,
        t: t.top + t._padding.top,
        b: t.bottom - t._padding.bottom
    }
      , n = Object.assign({}, e)
      , i = []
      , r = []
      , s = t._pointLabels.length
      , o = t.options.pointLabels
      , l = o.centerPointLabels ? pe / s : 0;
    for (let a = 0; a < s; a++) {
        const u = o.setContext(t.getPointLabelContext(a));
        r[a] = u.padding;
        const c = t.getPointPosition(a, t.drawingArea + r[a], l)
          , f = _e(u.font)
          , d = jv(t.ctx, f, t._pointLabels[a]);
        i[a] = d;
        const h = gt(t.getIndexAngle(a) + l)
          , m = Math.round(lu(h))
          , v = Df(m, c.x, d.w, 0, 180)
          , x = Df(m, c.y, d.h, 90, 270);
        Fv(n, e, h, v, x)
    }
    t.setCenterPoint(e.l - n.l, n.r - e.r, e.t - n.t, n.b - e.b),
    t._pointLabelItems = Wv(t, i, r)
}
function Fv(t, e, n, i, r) {
    const s = Math.abs(Math.sin(n))
      , o = Math.abs(Math.cos(n));
    let l = 0
      , a = 0;
    i.start < e.l ? (l = (e.l - i.start) / s,
    t.l = Math.min(t.l, e.l - l)) : i.end > e.r && (l = (i.end - e.r) / s,
    t.r = Math.max(t.r, e.r + l)),
    r.start < e.t ? (a = (e.t - r.start) / o,
    t.t = Math.min(t.t, e.t - a)) : r.end > e.b && (a = (r.end - e.b) / o,
    t.b = Math.max(t.b, e.b + a))
}
function Bv(t, e, n) {
    const i = t.drawingArea
      , {extra: r, additionalAngle: s, padding: o, size: l} = n
      , a = t.getPointPosition(e, i + r + o, s)
      , u = Math.round(lu(gt(a.angle + de)))
      , c = Yv(a.y, l.h, u)
      , f = Vv(u)
      , d = Uv(a.x, l.w, f);
    return {
        visible: !0,
        x: a.x,
        y: c,
        textAlign: f,
        left: d,
        top: c,
        right: d + l.w,
        bottom: c + l.h
    }
}
function Hv(t, e) {
    if (!e)
        return !0;
    const {left: n, top: i, right: r, bottom: s} = t;
    return !(Qn({
        x: n,
        y: i
    }, e) || Qn({
        x: n,
        y: s
    }, e) || Qn({
        x: r,
        y: i
    }, e) || Qn({
        x: r,
        y: s
    }, e))
}
function Wv(t, e, n) {
    const i = []
      , r = t._pointLabels.length
      , s = t.options
      , {centerPointLabels: o, display: l} = s.pointLabels
      , a = {
        extra: la(s) / 2,
        additionalAngle: o ? pe / r : 0
    };
    let u;
    for (let c = 0; c < r; c++) {
        a.padding = n[c],
        a.size = e[c];
        const f = Bv(t, c, a);
        i.push(f),
        l === "auto" && (f.visible = Hv(f, u),
        f.visible && (u = f))
    }
    return i
}
function Vv(t) {
    return t === 0 || t === 180 ? "center" : t < 180 ? "left" : "right"
}
function Uv(t, e, n) {
    return n === "right" ? t -= e : n === "center" && (t -= e / 2),
    t
}
function Yv(t, e, n) {
    return n === 90 || n === 270 ? t -= e / 2 : (n > 270 || n < 90) && (t -= e),
    t
}
function Xv(t, e, n) {
    const {left: i, top: r, right: s, bottom: o} = n
      , {backdropColor: l} = e;
    if (!ne(l)) {
        const a = ti(e.borderRadius)
          , u = Te(e.backdropPadding);
        t.fillStyle = l;
        const c = i - u.left
          , f = r - u.top
          , d = s - i + u.width
          , h = o - r + u.height;
        Object.values(a).some(m => m !== 0) ? (t.beginPath(),
        qs(t, {
            x: c,
            y: f,
            w: d,
            h,
            radius: a
        }),
        t.fill()) : t.fillRect(c, f, d, h)
    }
}
function Kv(t, e) {
    const {ctx: n, options: {pointLabels: i}} = t;
    for (let r = e - 1; r >= 0; r--) {
        const s = t._pointLabelItems[r];
        if (!s.visible)
            continue;
        const o = i.setContext(t.getPointLabelContext(r));
        Xv(n, o, s);
        const l = _e(o.font)
          , {x: a, y: u, textAlign: c} = s;
        ci(n, t._pointLabels[r], a, u + l.lineHeight / 2, l, {
            color: o.color,
            textAlign: c,
            textBaseline: "middle"
        })
    }
}
function jp(t, e, n, i) {
    const {ctx: r} = t;
    if (n)
        r.arc(t.xCenter, t.yCenter, e, 0, ae);
    else {
        let s = t.getPointPosition(0, e);
        r.moveTo(s.x, s.y);
        for (let o = 1; o < i; o++)
            s = t.getPointPosition(o, e),
            r.lineTo(s.x, s.y)
    }
}
function Qv(t, e, n, i, r) {
    const s = t.ctx
      , o = e.circular
      , {color: l, lineWidth: a} = e;
    !o && !i || !l || !a || n < 0 || (s.save(),
    s.strokeStyle = l,
    s.lineWidth = a,
    s.setLineDash(r.dash),
    s.lineDashOffset = r.dashOffset,
    s.beginPath(),
    jp(t, n, o, i),
    s.closePath(),
    s.stroke(),
    s.restore())
}
function Gv(t, e, n) {
    return Tn(t, {
        label: n,
        index: e,
        type: "pointLabel"
    })
}
class is extends no {
    constructor(e) {
        super(e),
        this.xCenter = void 0,
        this.yCenter = void 0,
        this.drawingArea = void 0,
        this._pointLabels = [],
        this._pointLabelItems = []
    }
    setDimensions() {
        const e = this._padding = Te(la(this.options) / 2)
          , n = this.width = this.maxWidth - e.width
          , i = this.height = this.maxHeight - e.height;
        this.xCenter = Math.floor(this.left + n / 2 + e.left),
        this.yCenter = Math.floor(this.top + i / 2 + e.top),
        this.drawingArea = Math.floor(Math.min(n, i) / 2)
    }
    determineDataLimits() {
        const {min: e, max: n} = this.getMinMax(!1);
        this.min = xe(e) && !isNaN(e) ? e : 0,
        this.max = xe(n) && !isNaN(n) ? n : 0,
        this.handleTickRangeOptions()
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / la(this.options))
    }
    generateTickLabels(e) {
        no.prototype.generateTickLabels.call(this, e),
        this._pointLabels = this.getLabels().map( (n, i) => {
            const r = Q(this.options.pointLabels.callback, [n, i], this);
            return r || r === 0 ? r : ""
        }
        ).filter( (n, i) => this.chart.getDataVisibility(i))
    }
    fit() {
        const e = this.options;
        e.display && e.pointLabels.display ? Iv(this) : this.setCenterPoint(0, 0, 0, 0)
    }
    setCenterPoint(e, n, i, r) {
        this.xCenter += Math.floor((e - n) / 2),
        this.yCenter += Math.floor((i - r) / 2),
        this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(e, n, i, r))
    }
    getIndexAngle(e) {
        const n = ae / (this._pointLabels.length || 1)
          , i = this.options.startAngle || 0;
        return gt(e * n + yt(i))
    }
    getDistanceFromCenterForValue(e) {
        if (ne(e))
            return NaN;
        const n = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - e) * n : (e - this.min) * n
    }
    getValueForDistanceFromCenter(e) {
        if (ne(e))
            return NaN;
        const n = e / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - n : this.min + n
    }
    getPointLabelContext(e) {
        const n = this._pointLabels || [];
        if (e >= 0 && e < n.length) {
            const i = n[e];
            return Gv(this.getContext(), e, i)
        }
    }
    getPointPosition(e, n, i=0) {
        const r = this.getIndexAngle(e) - de + i;
        return {
            x: Math.cos(r) * n + this.xCenter,
            y: Math.sin(r) * n + this.yCenter,
            angle: r
        }
    }
    getPointPositionForValue(e, n) {
        return this.getPointPosition(e, this.getDistanceFromCenterForValue(n))
    }
    getBasePosition(e) {
        return this.getPointPositionForValue(e || 0, this.getBaseValue())
    }
    getPointLabelPosition(e) {
        const {left: n, top: i, right: r, bottom: s} = this._pointLabelItems[e];
        return {
            left: n,
            top: i,
            right: r,
            bottom: s
        }
    }
    drawBackground() {
        const {backgroundColor: e, grid: {circular: n}} = this.options;
        if (e) {
            const i = this.ctx;
            i.save(),
            i.beginPath(),
            jp(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length),
            i.closePath(),
            i.fillStyle = e,
            i.fill(),
            i.restore()
        }
    }
    drawGrid() {
        const e = this.ctx
          , n = this.options
          , {angleLines: i, grid: r, border: s} = n
          , o = this._pointLabels.length;
        let l, a, u;
        if (n.pointLabels.display && Kv(this, o),
        r.display && this.ticks.forEach( (c, f) => {
            if (f !== 0 || f === 0 && this.min < 0) {
                a = this.getDistanceFromCenterForValue(c.value);
                const d = this.getContext(f)
                  , h = r.setContext(d)
                  , m = s.setContext(d);
                Qv(this, h, a, o, m)
            }
        }
        ),
        i.display) {
            for (e.save(),
            l = o - 1; l >= 0; l--) {
                const c = i.setContext(this.getPointLabelContext(l))
                  , {color: f, lineWidth: d} = c;
                !d || !f || (e.lineWidth = d,
                e.strokeStyle = f,
                e.setLineDash(c.borderDash),
                e.lineDashOffset = c.borderDashOffset,
                a = this.getDistanceFromCenterForValue(n.reverse ? this.min : this.max),
                u = this.getPointPosition(l, a),
                e.beginPath(),
                e.moveTo(this.xCenter, this.yCenter),
                e.lineTo(u.x, u.y),
                e.stroke())
            }
            e.restore()
        }
    }
    drawBorder() {}
    drawLabels() {
        const e = this.ctx
          , n = this.options
          , i = n.ticks;
        if (!i.display)
            return;
        const r = this.getIndexAngle(0);
        let s, o;
        e.save(),
        e.translate(this.xCenter, this.yCenter),
        e.rotate(r),
        e.textAlign = "center",
        e.textBaseline = "middle",
        this.ticks.forEach( (l, a) => {
            if (a === 0 && this.min >= 0 && !n.reverse)
                return;
            const u = i.setContext(this.getContext(a))
              , c = _e(u.font);
            if (s = this.getDistanceFromCenterForValue(this.ticks[a].value),
            u.showLabelBackdrop) {
                e.font = c.string,
                o = e.measureText(l.label).width,
                e.fillStyle = u.backdropColor;
                const f = Te(u.backdropPadding);
                e.fillRect(-o / 2 - f.left, -s - c.size / 2 - f.top, o + f.width, c.size + f.height)
            }
            ci(e, l.label, 0, -s, c, {
                color: u.color,
                strokeColor: u.textStrokeColor,
                strokeWidth: u.textStrokeWidth
            })
        }
        ),
        e.restore()
    }
    drawTitle() {}
}
z(is, "id", "radialLinear"),
z(is, "defaults", {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
        display: !0,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0
    },
    grid: {
        circular: !1
    },
    startAngle: 0,
    ticks: {
        showLabelBackdrop: !0,
        callback: Co.formatters.numeric
    },
    pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: {
            size: 10
        },
        callback(e) {
            return e
        },
        padding: 5,
        centerPointLabels: !1
    }
}),
z(is, "defaultRoutes", {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
}),
z(is, "descriptors", {
    angleLines: {
        _fallback: "grid"
    }
});
const Mo = {
    millisecond: {
        common: !0,
        size: 1,
        steps: 1e3
    },
    second: {
        common: !0,
        size: 1e3,
        steps: 60
    },
    minute: {
        common: !0,
        size: 6e4,
        steps: 60
    },
    hour: {
        common: !0,
        size: 36e5,
        steps: 24
    },
    day: {
        common: !0,
        size: 864e5,
        steps: 30
    },
    week: {
        common: !1,
        size: 6048e5,
        steps: 4
    },
    month: {
        common: !0,
        size: 2628e6,
        steps: 12
    },
    quarter: {
        common: !1,
        size: 7884e6,
        steps: 4
    },
    year: {
        common: !0,
        size: 3154e7
    }
}
  , je = Object.keys(Mo);
function Rf(t, e) {
    return t - e
}
function zf(t, e) {
    if (ne(e))
        return null;
    const n = t._adapter
      , {parser: i, round: r, isoWeekday: s} = t._parseOpts;
    let o = e;
    return typeof i == "function" && (o = i(o)),
    xe(o) || (o = typeof i == "string" ? n.parse(o, i) : n.parse(o)),
    o === null ? null : (r && (o = r === "week" && (Gs(s) || s === !0) ? n.startOf(o, "isoWeek", s) : n.startOf(o, r)),
    +o)
}
function Nf(t, e, n, i) {
    const r = je.length;
    for (let s = je.indexOf(t); s < r - 1; ++s) {
        const o = Mo[je[s]]
          , l = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
        if (o.common && Math.ceil((n - e) / (l * o.size)) <= i)
            return je[s]
    }
    return je[r - 1]
}
function Zv(t, e, n, i, r) {
    for (let s = je.length - 1; s >= je.indexOf(n); s--) {
        const o = je[s];
        if (Mo[o].common && t._adapter.diff(r, i, o) >= e - 1)
            return o
    }
    return je[n ? je.indexOf(n) : 0]
}
function Jv(t) {
    for (let e = je.indexOf(t) + 1, n = je.length; e < n; ++e)
        if (Mo[je[e]].common)
            return je[e]
}
function jf(t, e, n) {
    if (!n)
        t[e] = !0;
    else if (n.length) {
        const {lo: i, hi: r} = au(n, e)
          , s = n[i] >= e ? n[i] : n[r];
        t[s] = !0
    }
}
function qv(t, e, n, i) {
    const r = t._adapter
      , s = +r.startOf(e[0].value, i)
      , o = e[e.length - 1].value;
    let l, a;
    for (l = s; l <= o; l = +r.add(l, 1, i))
        a = n[l],
        a >= 0 && (e[a].major = !0);
    return e
}
function If(t, e, n) {
    const i = []
      , r = {}
      , s = e.length;
    let o, l;
    for (o = 0; o < s; ++o)
        l = e[o],
        r[l] = o,
        i.push({
            value: l,
            major: !1
        });
    return s === 0 || !n ? i : qv(t, i, r, n)
}
class io extends gi {
    constructor(e) {
        super(e),
        this._cache = {
            data: [],
            labels: [],
            all: []
        },
        this._unit = "day",
        this._majorUnit = void 0,
        this._offsets = {},
        this._normalized = !1,
        this._parseOpts = void 0
    }
    init(e, n={}) {
        const i = e.time || (e.time = {})
          , r = this._adapter = new sy._date(e.adapters.date);
        r.init(n),
        Qi(i.displayFormats, r.formats()),
        this._parseOpts = {
            parser: i.parser,
            round: i.round,
            isoWeekday: i.isoWeekday
        },
        super.init(e),
        this._normalized = n.normalized
    }
    parse(e, n) {
        return e === void 0 ? null : zf(this, e)
    }
    beforeLayout() {
        super.beforeLayout(),
        this._cache = {
            data: [],
            labels: [],
            all: []
        }
    }
    determineDataLimits() {
        const e = this.options
          , n = this._adapter
          , i = e.time.unit || "day";
        let {min: r, max: s, minDefined: o, maxDefined: l} = this.getUserBounds();
        function a(u) {
            !o && !isNaN(u.min) && (r = Math.min(r, u.min)),
            !l && !isNaN(u.max) && (s = Math.max(s, u.max))
        }
        (!o || !l) && (a(this._getLabelBounds()),
        (e.bounds !== "ticks" || e.ticks.source !== "labels") && a(this.getMinMax(!1))),
        r = xe(r) && !isNaN(r) ? r : +n.startOf(Date.now(), i),
        s = xe(s) && !isNaN(s) ? s : +n.endOf(Date.now(), i) + 1,
        this.min = Math.min(r, s - 1),
        this.max = Math.max(r + 1, s)
    }
    _getLabelBounds() {
        const e = this.getLabelTimestamps();
        let n = Number.POSITIVE_INFINITY
          , i = Number.NEGATIVE_INFINITY;
        return e.length && (n = e[0],
        i = e[e.length - 1]),
        {
            min: n,
            max: i
        }
    }
    buildTicks() {
        const e = this.options
          , n = e.time
          , i = e.ticks
          , r = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
        e.bounds === "ticks" && r.length && (this.min = this._userMin || r[0],
        this.max = this._userMax || r[r.length - 1]);
        const s = this.min
          , o = this.max
          , l = n0(r, s, o);
        return this._unit = n.unit || (i.autoSkip ? Nf(n.minUnit, this.min, this.max, this._getLabelCapacity(s)) : Zv(this, l.length, n.minUnit, this.min, this.max)),
        this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : Jv(this._unit),
        this.initOffsets(r),
        e.reverse && l.reverse(),
        If(this, l, this._majorUnit)
    }
    afterAutoSkip() {
        this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(e => +e.value))
    }
    initOffsets(e=[]) {
        let n = 0, i = 0, r, s;
        this.options.offset && e.length && (r = this.getDecimalForValue(e[0]),
        e.length === 1 ? n = 1 - r : n = (this.getDecimalForValue(e[1]) - r) / 2,
        s = this.getDecimalForValue(e[e.length - 1]),
        e.length === 1 ? i = s : i = (s - this.getDecimalForValue(e[e.length - 2])) / 2);
        const o = e.length < 3 ? .5 : .25;
        n = et(n, 0, o),
        i = et(i, 0, o),
        this._offsets = {
            start: n,
            end: i,
            factor: 1 / (n + 1 + i)
        }
    }
    _generate() {
        const e = this._adapter
          , n = this.min
          , i = this.max
          , r = this.options
          , s = r.time
          , o = s.unit || Nf(s.minUnit, n, i, this._getLabelCapacity(n))
          , l = W(r.ticks.stepSize, 1)
          , a = o === "week" ? s.isoWeekday : !1
          , u = Gs(a) || a === !0
          , c = {};
        let f = n, d, h;
        if (u && (f = +e.startOf(f, "isoWeek", a)),
        f = +e.startOf(f, u ? "day" : o),
        e.diff(i, n, o) > 1e5 * l)
            throw new Error(n + " and " + i + " are too far apart with stepSize of " + l + " " + o);
        const m = r.ticks.source === "data" && this.getDataTimestamps();
        for (d = f,
        h = 0; d < i; d = +e.add(d, l, o),
        h++)
            jf(c, d, m);
        return (d === i || r.bounds === "ticks" || h === 1) && jf(c, d, m),
        Object.keys(c).sort(Rf).map(v => +v)
    }
    getLabelForValue(e) {
        const n = this._adapter
          , i = this.options.time;
        return i.tooltipFormat ? n.format(e, i.tooltipFormat) : n.format(e, i.displayFormats.datetime)
    }
    format(e, n) {
        const r = this.options.time.displayFormats
          , s = this._unit
          , o = n || r[s];
        return this._adapter.format(e, o)
    }
    _tickFormatFunction(e, n, i, r) {
        const s = this.options
          , o = s.ticks.callback;
        if (o)
            return Q(o, [e, n, i], this);
        const l = s.time.displayFormats
          , a = this._unit
          , u = this._majorUnit
          , c = a && l[a]
          , f = u && l[u]
          , d = i[n]
          , h = u && f && d && d.major;
        return this._adapter.format(e, r || (h ? f : c))
    }
    generateTickLabels(e) {
        let n, i, r;
        for (n = 0,
        i = e.length; n < i; ++n)
            r = e[n],
            r.label = this._tickFormatFunction(r.value, n, e)
    }
    getDecimalForValue(e) {
        return e === null ? NaN : (e - this.min) / (this.max - this.min)
    }
    getPixelForValue(e) {
        const n = this._offsets
          , i = this.getDecimalForValue(e);
        return this.getPixelForDecimal((n.start + i) * n.factor)
    }
    getValueForPixel(e) {
        const n = this._offsets
          , i = this.getDecimalForPixel(e) / n.factor - n.end;
        return this.min + i * (this.max - this.min)
    }
    _getLabelSize(e) {
        const n = this.options.ticks
          , i = this.ctx.measureText(e).width
          , r = yt(this.isHorizontal() ? n.maxRotation : n.minRotation)
          , s = Math.cos(r)
          , o = Math.sin(r)
          , l = this._resolveTickFontOptions(0).size;
        return {
            w: i * s + l * o,
            h: i * o + l * s
        }
    }
    _getLabelCapacity(e) {
        const n = this.options.time
          , i = n.displayFormats
          , r = i[n.unit] || i.millisecond
          , s = this._tickFormatFunction(e, 0, If(this, [e], this._majorUnit), r)
          , o = this._getLabelSize(s)
          , l = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
        return l > 0 ? l : 1
    }
    getDataTimestamps() {
        let e = this._cache.data || [], n, i;
        if (e.length)
            return e;
        const r = this.getMatchingVisibleMetas();
        if (this._normalized && r.length)
            return this._cache.data = r[0].controller.getAllParsedValues(this);
        for (n = 0,
        i = r.length; n < i; ++n)
            e = e.concat(r[n].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(e)
    }
    getLabelTimestamps() {
        const e = this._cache.labels || [];
        let n, i;
        if (e.length)
            return e;
        const r = this.getLabels();
        for (n = 0,
        i = r.length; n < i; ++n)
            e.push(zf(this, r[n]));
        return this._cache.labels = this._normalized ? e : this.normalize(e)
    }
    normalize(e) {
        return r0(e.sort(Rf))
    }
}
z(io, "id", "time"),
z(io, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {}
    },
    ticks: {
        source: "auto",
        callback: !1,
        major: {
            enabled: !1
        }
    }
});
function rs(t, e, n) {
    let i = 0, r = t.length - 1, s, o, l, a;
    n ? (e >= t[i].pos && e <= t[r].pos && ({lo: i, hi: r} = na(t, "pos", e)),
    {pos: s, time: l} = t[i],
    {pos: o, time: a} = t[r]) : (e >= t[i].time && e <= t[r].time && ({lo: i, hi: r} = na(t, "time", e)),
    {time: s, pos: l} = t[i],
    {time: o, pos: a} = t[r]);
    const u = o - s;
    return u ? l + (a - l) * (e - s) / u : l
}
class Ff extends io {
    constructor(e) {
        super(e),
        this._table = [],
        this._minPos = void 0,
        this._tableRange = void 0
    }
    initOffsets() {
        const e = this._getTimestampsForTable()
          , n = this._table = this.buildLookupTable(e);
        this._minPos = rs(n, this.min),
        this._tableRange = rs(n, this.max) - this._minPos,
        super.initOffsets(e)
    }
    buildLookupTable(e) {
        const {min: n, max: i} = this
          , r = []
          , s = [];
        let o, l, a, u, c;
        for (o = 0,
        l = e.length; o < l; ++o)
            u = e[o],
            u >= n && u <= i && r.push(u);
        if (r.length < 2)
            return [{
                time: n,
                pos: 0
            }, {
                time: i,
                pos: 1
            }];
        for (o = 0,
        l = r.length; o < l; ++o)
            c = r[o + 1],
            a = r[o - 1],
            u = r[o],
            Math.round((c + a) / 2) !== u && s.push({
                time: u,
                pos: o / (l - 1)
            });
        return s
    }
    _generate() {
        const e = this.min
          , n = this.max;
        let i = super.getDataTimestamps();
        return (!i.includes(e) || !i.length) && i.splice(0, 0, e),
        (!i.includes(n) || i.length === 1) && i.push(n),
        i.sort( (r, s) => r - s)
    }
    _getTimestampsForTable() {
        let e = this._cache.all || [];
        if (e.length)
            return e;
        const n = this.getDataTimestamps()
          , i = this.getLabelTimestamps();
        return n.length && i.length ? e = this.normalize(n.concat(i)) : e = n.length ? n : i,
        e = this._cache.all = e,
        e
    }
    getDecimalForValue(e) {
        return (rs(this._table, e) - this._minPos) / this._tableRange
    }
    getValueForPixel(e) {
        const n = this._offsets
          , i = this.getDecimalForPixel(e) / n.factor - n.end;
        return rs(this._table, i * this._tableRange + this._minPos, !0)
    }
}
z(Ff, "id", "timeseries"),
z(Ff, "defaults", io.defaults);
const Ip = "label";
function Bf(t, e) {
    typeof t == "function" ? t(e) : t && (t.current = e)
}
function $v(t, e) {
    const n = t.options;
    n && e && Object.assign(n, e)
}
function Fp(t, e) {
    t.labels = e
}
function Bp(t, e) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ip;
    const i = [];
    t.datasets = e.map(r => {
        const s = t.datasets.find(o => o[n] === r[n]);
        return !s || !r.data || i.includes(s) ? {
            ...r
        } : (i.push(s),
        Object.assign(s, r),
        s)
    }
    )
}
function e2(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ip;
    const n = {
        labels: [],
        datasets: []
    };
    return Fp(n, t.labels),
    Bp(n, t.datasets, e),
    n
}
function t2(t, e) {
    const {height: n=150, width: i=300, redraw: r=!1, datasetIdKey: s, type: o, data: l, options: a, plugins: u=[], fallbackContent: c, updateMode: f, ...d} = t
      , h = q.useRef(null)
      , m = q.useRef()
      , v = () => {
        h.current && (m.current = new Ao(h.current,{
            type: o,
            data: e2(l, s),
            options: a && {
                ...a
            },
            plugins: u
        }),
        Bf(e, m.current))
    }
      , x = () => {
        Bf(e, null),
        m.current && (m.current.destroy(),
        m.current = null)
    }
    ;
    return q.useEffect( () => {
        !r && m.current && a && $v(m.current, a)
    }
    , [r, a]),
    q.useEffect( () => {
        !r && m.current && Fp(m.current.config.data, l.labels)
    }
    , [r, l.labels]),
    q.useEffect( () => {
        !r && m.current && l.datasets && Bp(m.current.config.data, l.datasets, s)
    }
    , [r, l.datasets]),
    q.useEffect( () => {
        m.current && (r ? (x(),
        setTimeout(v)) : m.current.update(f))
    }
    , [r, a, l.labels, l.datasets, f]),
    q.useEffect( () => {
        m.current && (x(),
        setTimeout(v))
    }
    , [o]),
    q.useEffect( () => (v(),
    () => x()), []),
    Pt.createElement("canvas", Object.assign({
        ref: h,
        role: "img",
        height: n,
        width: i
    }, d), c)
}
const n2 = q.forwardRef(t2);
function i2(t, e) {
    return Ao.register(e),
    q.forwardRef( (n, i) => Pt.createElement(n2, Object.assign({}, n, {
        ref: i,
        type: t
    })))
}
const r2 = i2("doughnut", zi)
  , s2 = "/assets/token-img-D_ms8fEc.png";
Ao.register(ji, Dv, bv);
function o2({onClick: t}) {
    const e = [{
        name: "Liquidity Pool",
        percent: 90,
        color: "#432EE8"
    }, {
        name: "Developers",
        percent: 5,
        color: "#023BE9"
    }, {
        name: "Marketing",
        percent: 5,
        color: "#548CEA"
    }]
      , n = {
        labels: e.map(r => r.name),
        datasets: [{
            label: "Value",
            data: e.map(r => r.percent),
            backgroundColor: e.map(r => r.color),
            borderColor: "#CDEEFF",
            borderWidth: 0,
            hoverOffset: 20,
            borderRadius: 20,
            cutout: 100
        }]
    }
      , i = {
        offset: 30,
        responsive: !0,
        maintainAspectRatio: !0,
        aspectRatio: 1,
        plugins: {
            legend: {
                display: !1
            },
            tooltip: {
                enabled: !0,
                displayColors: !1
            }
        }
    };
    return _.jsx("div", {
        className: "tokenomics common-padding",
        children: _.jsx(nu, {
            children: _.jsxs("div", {
                className: "modal w-full xl:!w-[1194px] px-5 lg:px-10 pt-8 md:pt-10 lg:pt-12 xl:pt-[78px] pb-5 md:pb-8 lg:pb-10 xl:pb-[50px] relative z-1",
                children: [_.jsxs(ip, {
                    className: "items-center",
                    children: [_.jsx(ea, {
                        xs: 12,
                        md: 6,
                        className: "flex justify-center md:justify-end mb-4 md:mb-0",
                        children: _.jsxs("div", {
                            className: "tokenomics-chart relative z-[1] w-full h-full xl:w-[508px] xl:h-[508px] ",
                            "data-aos": "fade-left",
                            children: [_.jsx("div", {
                                className: "tokenomics-logo absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 -z-10",
                                children: _.jsx("img", {
                                    src: s2,
                                    alt: ""
                                })
                            }), _.jsx(r2, {
                                data: n,
                                options: i
                            })]
                        })
                    }), _.jsx(ea, {
                        xs: 12,
                        md: 6,
                        children: _.jsxs("div", {
                            className: "tokenomics-percentage",
                            children: [_.jsx("h6", {
                                className: " text-[50px] text-center md:text-start md:text-[64px] leading-[120%] uppercase text-white mb-5 lg:mb-6",
                                children: "Tokenomics"
                            }), e.map( (r, s) => _.jsx("div", {
                                className: "tokenomics-percentage-item",
                                "data-aos": "fade-up",
                                "data-aos-duration": `1${s + 6}00`,
                                children: _.jsxs("div", {
                                    className: "text flex items-center justify-between mb-2 group cursor-pointer",
                                    children: [_.jsx("p", {
                                        className: "text-lg md:text-xl lg:text-2xl xl:text-[30px] leading-[160%] text-[#616161] group-hover:text-black ",
                                        children: r.name
                                    }), _.jsxs("p", {
                                        className: "text-lg md:text-xl lg:text-2xl xl:text-[30px] leading-[160%] text-[#616161] group-hover:text-black ",
                                        children: [r.percent, "%"]
                                    })]
                                })
                            }, s))]
                        })
                    })]
                }), _.jsx("button", {
                    className: "closeBtn absolute top-6 lg:top-10 right-6 lg:right-10",
                    onClick: t,
                    children: _.jsx("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: _.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.9996 14.1221L17.3026 19.4251C17.584 19.7065 17.9657 19.8646 18.3636 19.8646C18.7616 19.8646 19.1432 19.7065 19.4246 19.4251C19.706 19.1437 19.8641 18.7621 19.8641 18.3641C19.8641 17.9662 19.706 17.5845 19.4246 17.3031L14.1196 12.0001L19.4236 6.69711C19.5629 6.55778 19.6733 6.39238 19.7487 6.21036C19.824 6.02834 19.8628 5.83326 19.8627 5.63626C19.8627 5.43926 19.8238 5.2442 19.7484 5.06221C19.673 4.88022 19.5624 4.71488 19.4231 4.57561C19.2838 4.43634 19.1184 4.32588 18.9364 4.25054C18.7543 4.17519 18.5592 4.13644 18.3623 4.13648C18.1653 4.13653 17.9702 4.17538 17.7882 4.25081C17.6062 4.32624 17.4409 4.43678 17.3016 4.57611L11.9996 9.87911L6.6966 4.57611C6.5583 4.43278 6.39284 4.31843 6.20987 4.23973C6.0269 4.16103 5.83009 4.11956 5.63092 4.11774C5.43176 4.11591 5.23422 4.15377 5.04984 4.22911C4.86546 4.30444 4.69793 4.41574 4.55703 4.55652C4.41612 4.69729 4.30466 4.86471 4.22916 5.04902C4.15365 5.23333 4.1156 5.43083 4.11724 5.63C4.11887 5.82917 4.16016 6.02602 4.23869 6.20906C4.31721 6.3921 4.43141 6.55767 4.5746 6.69611L9.8796 12.0001L4.5756 17.3041C4.43241 17.4425 4.31821 17.6081 4.23969 17.7912C4.16116 17.9742 4.11987 18.1711 4.11824 18.3702C4.1166 18.5694 4.15465 18.7669 4.23016 18.9512C4.30566 19.1355 4.41712 19.3029 4.55803 19.4437C4.69893 19.5845 4.86646 19.6958 5.05084 19.7711C5.23522 19.8464 5.43276 19.8843 5.63192 19.8825C5.83109 19.8807 6.0279 19.8392 6.21087 19.7605C6.39384 19.6818 6.5593 19.5674 6.6976 19.4241L11.9996 14.1221Z",
                            fill: "black"
                        })
                    })
                })]
            })
        })
    })
}
var Hp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , Hf = Pt.createContext && Pt.createContext(Hp)
  , l2 = ["attr", "size", "title"];
function a2(t, e) {
    if (t == null)
        return {};
    var n = u2(t, e), i, r;
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        for (r = 0; r < s.length; r++)
            i = s[r],
            !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (n[i] = t[i])
    }
    return n
}
function u2(t, e) {
    if (t == null)
        return {};
    var n = {};
    for (var i in t)
        if (Object.prototype.hasOwnProperty.call(t, i)) {
            if (e.indexOf(i) >= 0)
                continue;
            n[i] = t[i]
        }
    return n
}
function ro() {
    return ro = Object.assign ? Object.assign.bind() : function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    ro.apply(this, arguments)
}
function Wf(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter(function(r) {
            return Object.getOwnPropertyDescriptor(t, r).enumerable
        })),
        n.push.apply(n, i)
    }
    return n
}
function so(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? Wf(Object(n), !0).forEach(function(i) {
            c2(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Wf(Object(n)).forEach(function(i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i))
        })
    }
    return t
}
function c2(t, e, n) {
    return e = f2(e),
    e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function f2(t) {
    var e = d2(t, "string");
    return typeof e == "symbol" ? e : e + ""
}
function d2(t, e) {
    if (typeof t != "object" || !t)
        return t;
    var n = t[Symbol.toPrimitive];
    if (n !== void 0) {
        var i = n.call(t, e || "default");
        if (typeof i != "object")
            return i;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (e === "string" ? String : Number)(t)
}
function Wp(t) {
    return t && t.map( (e, n) => Pt.createElement(e.tag, so({
        key: n
    }, e.attr), Wp(e.child)))
}
function vu(t) {
    return e => Pt.createElement(h2, ro({
        attr: so({}, t.attr)
    }, e), Wp(t.child))
}
function h2(t) {
    var e = n => {
        var {attr: i, size: r, title: s} = t, o = a2(t, l2), l = r || n.size || "1em", a;
        return n.className && (a = n.className),
        t.className && (a = (a ? a + " " : "") + t.className),
        Pt.createElement("svg", ro({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, i, o, {
            className: a,
            style: so(so({
                color: t.color || n.color
            }, n.style), t.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg"
        }), s && Pt.createElement("title", null, s), t.children)
    }
    ;
    return Hf !== void 0 ? Pt.createElement(Hf.Consumer, null, n => e(n)) : e(Hp)
}
function p2(t) {
    return vu({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            },
            child: []
        }]
    })(t)
}
function g2(t) {
    return vu({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
            },
            child: []
        }]
    })(t)
}
function m2(t) {
    return vu({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            },
            child: []
        }]
    })(t)
}
const y2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAINSURBVHgBzZU7SF1BEIZ/b4KRkCdB8k5MDKQLCQkkMUUgkDQhRISksFBBBAvFQrEQxEehjY2ooKCghWCnWFlYKQiKKGohiKhYiIgggogPfPzjzJXj8dzjXlHwh4/duzs7c3Z3Zi9wBfSQVJMxskH2yARpJik4h5LIL+sXknVyEEKl2b6ztU4qIqNnOPYyTmoQp9riCDCCOFVBkkmjg/N+8oA0uTp/BL3Ibk+w/RjO60kCqbLfH/zOrgcEeE8iZJikkXbSZe2wzX0iZWSKpEPvQPTF0z9SBME7ECWSG2SWZJDvpNNIsyAyd8t24V0bqhzodhfJS+hdvCZvoEcnc5nkMXkGrZM5G6/yO4uEBHpOZkgrtMAKPPb/yCo0NcXmVSwnYQFEckwpZIc88YzLl++SVHInzF9QgHvWbpMS6Fn/Id88Nm9Jvo3lkhUbv+kS4L61csFS/k/JoO0iqi0yBN2VZE6yjb+Ag3pwMtelBn5Cczw6lgU99zWf7bRLgAWcLqhV21Ef9FJhzvx2m2YXU6mI/SQUk98kj/wNsfsRFkDyuJeUByyUKpYEkJroDJhvIXXWBirJvi6qAVvYAb1k6csl3oam6DyptXHpJ9q6UnIXDvpMGqDPwEdzJGmbbv0Ms6sg/31rj9+4BLhL/ja/kmVoZmXjgiXblsyZhL5RTroGd0llS4ouQdP10hTPseIQUXiq3cQoRYYAAAAASUVORK5CYII="
  , v2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHKSURBVHgBvZXLK0RxFMePZx5lJiSUTGEppSxt/AGSKFldC2Vjwc6jSKwUC0XZ2CsbZWOt7LyyGsMoG1LMZvLK43vmnmt+c+a+ZsGpT/d2v+ec3+Oc+/sR/ZEV+WhRMAF6QDdoFP8ESII9cAAeKaRxwlXwAr4D+ACzoCwoaQeIh0iouQExr6Qs3PoEp8Grj550S14ngnY+BpOgibL1aAfjPv6lZuINF6dlUEzeVglWXOIWzC3Q4qJKwjO2wBBoUdq2in12VjethLgRVA02KbdD3mVWztbUkN1yZo5BFg7VR8tIvEbexZoy/GaUtkMuo0V9tkgv2fFtU9oZF6feGPkBpOS9j/wtaviklBbRVf+iwuxNnmn1PdNy95S7jAYROyTQayt4dbXi26W0U57xpRptQJ5XJEXwsC3wJO+9SuODKtM65mhHoEQcysk+kHTRzI6ooPy/0GKBi/CphCU1gxgYkYCo0jrJPuWcWM712xDr5PNrhrBhI27OFHgWCZfk1zLLVvGrIvsQGgXNKvkYuCCXy4O7IEn+h7q55BPKPzci5GGxgOSac8q2Z6Dxcucp3NXEHdJPBRq3kQV2ZWb8s3DF78A+2XddhP7bfgAS0OZxhHTBpAAAAABJRU5ErkJggg=="
  , x2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAYCAYAAADtaU2/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJQSURBVHgBxZbPS1VBFMe/T0haZlFIP9+LFgVh22hTL4gW2UIi6AekLVpFEC2iNiGBC3+gKK4E4blVBBfiQpSnqKAgIqK48NdTV8pD/QP8dYb7He5513t17gPxwId758w5852ZO3dmgAuyhKPP2BWhWkgLFUK5UCIsCTmhV+gX8hH5R3DskKVU+C3sMvk01oV/gXxLLNGkMKMazgofhXscrYl5LHwWRlXcHGOKEk7Cm0LT0JrwAuEj0bxVOavCtWKEp9nArHDHQdRiYueZ2+MqaoW/qZHGEbWkhG228QkxxNeYVBNSVyVsCn9D6i6r92q2sQRHq2LCIsJHkmf9jvJfEjL0Nyr/An1pF+F2Bv8MEc6g8Pex/v8Bfxn9DSy3uAhnGfw8IPqK/pxwqIRTqrzD50PWvWG5LyhSEiJ8nc8N5TONdPC9GYW70ADr6+FtMtoW+bwNB1thw0n4o22Cv8pN+YDl78p/VeU+YlwFyxMuwoMMfgZvRpLwv10qIJyDv/pN7DDLlYz7w3Kvi3Arg+2eO8lynZqBvOpMRvlr1Qx0qw6+cxGuZPC48FU1dEMJZNWI7yu/+Y+HULjCaxFjy7QjsifSF3hTaTGLxfzvZQG/xfwRH4RbiLlX/1A97kL8LTMMJ2Fjo/APiXJVl4iIt2YWYKfwFDHNNn4XhcfiS5w9qrTKaUOR57HdlZbhT/sIvNPmCbxvWcqYGtbZuCmcPNViCeu9eAtnX33MYvwF/3YSKZyIEA6zm8Jr4T28a80DYZ8dMtejMXgLcS8i3+myd+52DK1TtYKptOIMAAAAAElFTkSuQmCC";
function w2({className: t}) {
    const e = [{
        name: "twitter",
        icon: _.jsx(m2, {}),
        url: "https://x.com/senkoneth"
    }, {
        name: "telegram",
        icon: _.jsx(g2, {}),
        url: "https://t.me/+cb53HLDI-MUzN2Jl"
    }
    // , {
    //     name: "instagram",
    //     icon: _.jsx(p2, {}),
    //     url: "https://www.instagram.com/senktoken/"
    // }
    , {
        name: "dexscreen",
        icon: y2,
        isPng: !0,
        url: ""
    }, {
        name: "coinmarketcap",
        icon: x2,
        isPng: !0,
        url: ""
    }];
    return _.jsx("ul", {
        className: `social-list flex items-center flex-wrap gap-2 ${t}`,
        children: e.map( (n, i) => _.jsx("li", {
            children: _.jsx("a", {
                href: n.url,
                target: "_blank",
                className: "social-link flex items-center justify-center ml-1",
                children: n.isPng ? _.jsx("img", {
                    src: n.icon
                }) : n.icon
            })
        }, i))
    })
}
var Vp = {};
function k2(t) {
    if (typeof window > "u")
        return;
    const e = document.createElement("style");
    return e.setAttribute("type", "text/css"),
    e.innerHTML = t,
    document.head.appendChild(e),
    t
}
Object.defineProperty(Vp, "__esModule", {
    value: !0
});
var oe = q;
function _2(t) {
    return t && typeof t == "object" && "default"in t ? t : {
        default: t
    }
}
var jt = _2(oe);
k2(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);
const S2 = oe.forwardRef(function({style: e={}, className: n="", autoFill: i=!1, play: r=!0, pauseOnHover: s=!1, pauseOnClick: o=!1, direction: l="left", speed: a=50, delay: u=0, loop: c=0, gradient: f=!1, gradientColor: d="white", gradientWidth: h=200, onFinish: m, onCycleComplete: v, onMount: x, children: g}, p) {
    const [y,w] = oe.useState(0)
      , [k,S] = oe.useState(0)
      , [C,b] = oe.useState(1)
      , [P,E] = oe.useState(!1)
      , T = oe.useRef(null)
      , D = p || T
      , V = oe.useRef(null)
      , se = oe.useCallback( () => {
        if (V.current && D.current) {
            const N = D.current.getBoundingClientRect()
              , U = V.current.getBoundingClientRect();
            let ye = N.width
              , ee = U.width;
            (l === "up" || l === "down") && (ye = N.height,
            ee = U.height),
            b(i && ye && ee && ee < ye ? Math.ceil(ye / ee) : 1),
            w(ye),
            S(ee)
        }
    }
    , [i, D, l]);
    oe.useEffect( () => {
        if (P && (se(),
        V.current && D.current)) {
            const N = new ResizeObserver( () => se());
            return N.observe(D.current),
            N.observe(V.current),
            () => {
                N && N.disconnect()
            }
        }
    }
    , [se, D, P]),
    oe.useEffect( () => {
        se()
    }
    , [se, g]),
    oe.useEffect( () => {
        E(!0)
    }
    , []),
    oe.useEffect( () => {
        typeof x == "function" && x()
    }
    , []);
    const I = oe.useMemo( () => i ? k * C / a : k < y ? y / a : k / a, [i, y, k, C, a])
      , H = oe.useMemo( () => Object.assign(Object.assign({}, e), {
        "--pause-on-hover": !r || s ? "paused" : "running",
        "--pause-on-click": !r || s && !o || o ? "paused" : "running",
        "--width": l === "up" || l === "down" ? "100vh" : "100%",
        "--transform": l === "up" ? "rotate(-90deg)" : l === "down" ? "rotate(90deg)" : "none"
    }), [e, r, s, o, l])
      , K = oe.useMemo( () => ({
        "--gradient-color": d,
        "--gradient-width": typeof h == "number" ? `${h}px` : h
    }), [d, h])
      , M = oe.useMemo( () => ({
        "--play": r ? "running" : "paused",
        "--direction": l === "left" ? "normal" : "reverse",
        "--duration": `${I}s`,
        "--delay": `${u}s`,
        "--iteration-count": c ? `${c}` : "infinite",
        "--min-width": i ? "auto" : "100%"
    }), [r, l, I, u, c, i])
      , O = oe.useMemo( () => ({
        "--transform": l === "up" ? "rotate(90deg)" : l === "down" ? "rotate(-90deg)" : "none"
    }), [l])
      , R = oe.useCallback(N => [...Array(Number.isFinite(N) && N >= 0 ? N : 0)].map( (U, ye) => jt.default.createElement(oe.Fragment, {
        key: ye
    }, oe.Children.map(g, ee => jt.default.createElement("div", {
        style: O,
        className: "rfm-child"
    }, ee)))), [O, g]);
    return P ? jt.default.createElement("div", {
        ref: D,
        style: H,
        className: "rfm-marquee-container " + n
    }, f && jt.default.createElement("div", {
        style: K,
        className: "rfm-overlay"
    }), jt.default.createElement("div", {
        className: "rfm-marquee",
        style: M,
        onAnimationIteration: v,
        onAnimationEnd: m
    }, jt.default.createElement("div", {
        className: "rfm-initial-child-container",
        ref: V
    }, oe.Children.map(g, N => jt.default.createElement("div", {
        style: O,
        className: "rfm-child"
    }, N))), R(C - 1)), jt.default.createElement("div", {
        className: "rfm-marquee",
        style: M
    }, R(C))) : null
});
var C2 = Vp.default = S2;
const b2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAAgCAYAAACb+s/fAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYKSURBVHgB7Zl3rBVFFMY/pYkiKiolGOwRuxRrVDD2qFEUCyYqtkCUKMZoYkTFkhgNlgQ1liio2BCxN+yKL9jAblDAFywo8gwCwgOfPM/PM+ubt/fevXsf+o/sl3y5s7Mzs7tnznxzzlypQIECBQr8X7FOznZjjFtWuLfKuMj4sfE9448qUBV5DT/EuFmFe52MmxsHGHcwvmy81ThHBSoir+ETXGPsm6prNq40/iA39hbGY41XGp9TgbKo1fD7yL077t9O7vW9jf2NOxs/Mw40nhTKBVLIa3hkZDfjfOPrxiuMG0X3MX4H48bG3437GjcwfmU8SgVKUIvHr1/l/mq5sU8xHiM3Pn02NDaqQCu0z9kOKTnN2DmjzdfGF4y3GxuMB8hXwq7GD5SNgYExFhu/NH6aqj9DPrlTjPeqOraXyx8g+ppepk1PuYyC5ca39R87SzXDE8mcGF2zieLZjxr3lH9UgoaoPDMaexNVx9HGq8rUNxlvM14tnwgwzHi4fFITw/cO7RYaR6TGQOpuCeWl8s1/SarN6cYbQvknubP8W4a/2bh1GH9G3k5IUecyBJ1Sde2ifucYl8n1fi9Vx1h5dMSeMDpwfOhP/Zio7WDjPcZBUd3eod23ZcYeHe4lPD91v6txbnR/gSqHzm3BrDDuwXFlNY+nw4pUHZIwONUG4vFsvrz0SLmHMnHzlB/18hwgARs2HpxM3rbG9YxPhGvG30O+nwD2kyNCeY5a5xK8Wx+5VE2QSwog9N0mPHsrtQbOdJx871pXnixiyNnylZ/gwHAPj97RuIs8mmO8TqFN//A9PHdGXo2P0ajSZdguvPxhxv3kmsmD8cBFajs6hN8/wy+yd30ofy+XuguMw0PdpsYXQxl5GhuNhW7jFEwMUvWkfOLOkxvtIePlKn3+FJVimvFUtcjr/XKJuku+UrsYL4veFdwYfv+WsloMv5N8U6uEP+Qz/pR8EkYZ31Bt6BU9A10cEsqvhV+yYo4uRkZ90Pl6uZGZ5EtC/YepsdkvMC6GP0tueJJBZOod4+cqBRNOsICXsvK7hr442FC5oRMQwWFsgoGPwphnyh2AlXZTeAbj/FaL4RtDx0RaEuA1LMOO8qWOlvWTewXLGM+fpHzY3fhIqg65eCmUWeYYPzY8UQpGHSvfVyaqMvDeccaD5JIwMrz/nRXa40yjQrl9IHVMLis7NjyT+Kx8VSb2edd4odzwZPFvKhosL+apRa9Plkc1afAReB0feILcU64zvmL8WdXxiVoM1zE8B22cLA/3VmnNgPMwsWy4FxsPlTvTtFBOo5tcyg6RR0NIapfo/WJwjeGblQNt0XjwuEq1D69HE8lo2ewIPXsYu8uX5oOqDiKKeHN9TC4jbKBIz2ytOe6Qb7Bnh2s8sqFMO76HMJRQk5NXIitWFqu4kuSuVE7kNTzJE7P/QHhw9zJtMMrTci+favxFPkGEmhguj+ErgZXUIeN+U/jNapPgG7lcYTxW0OQK7fjeI0MZ7U7krq9qQxL9tEo+8xo+NtpE5QNn80gTh2rdcvYhERoeyizpoaGMTM3N6EeksDT0Hx/avm+sq9B+WGAWmsOYvP+gMB4Ox4Q1KT94F+QSySWDJnmbVM3w6NboMvXoONHL8VEdnvRWdI00YAiW3zLlAxnjhFQdRiUsW5HRj9CSiIXNMtkMiSbq1HYgP0Q0RCOXyiWHHIIIq0cN49wtPz7pH8j3TM0yPBrHzI7LaHNfVEYOSBY4IuAPETQRr8Hos5QNlvHiVN3q8JKEZQuiekJWwrQlau15GJzoiU0fA01PjV2vbNSFcZGfJLki3f9CnjAyJiHq8/KQdGHU9yL5yezMMuO+Gt6JfY7VgyMuzzqdZJkPUG1oH16QD0XXWZp4BzP+nQr8g2rHwnh9rzL1eARZYr+ojlCLOB4dIzMkbt1fvtQmqEArVNN4jDmiTD0ZKUsrySzJ8NDgX+Vaz3HuufI0/WEVKEGWx3PQw2ZACMlBUc+MtmzCSMp28oMhopBr5ZqYK6FY25Dl8ehz8gcC5zR9MtqyYRAFPCPfDOerQIECBQoUWEvxF0jSSjXf2Od+AAAAAElFTkSuQmCC"
  , A2 = "/assets/2-C_ldP3RT.png"
  , M2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAAgCAYAAADXPABiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA4JSURBVHgB7VsJdFXFGf7nvi0JCYEQFBFUXLCKFS1WREjyshAEhHKqQNGKQD1QLCiU1qOomBZFqbuACq0KqNSG4waCEpK8lxCgFUSl4gFciooEyAJJCOQt9/795r59JQmC8Zz3nXOTmbmz3Zl//vn/b+YRJZBAFAhqJ5iLFKralk6Olt7E2hWkcE8SQiHBzeQW+0jlPZTZ9xtxzTIXJfCTQ5sFgzcWpJPRfQOxmAkh6AcJSUc10epRkaeWhPYmkfIc5ZbvFUIwJfCTQJsEg0utY1BiAZ6fBZVtJqadiO5HihPxNMjJJUTaxUg3eVs5BgEqJs14jygoq6MEOjxaJRi8dICJLun8MEL3eIu1YOJXQROshNb4j8i1t0SU2TIsg1zOG0jjGRCQ6/S2BNWQQUygrBybEEUaJdBhcVLB4E8LO1G9czEm93ZsDS6UWEtmup9Kc74QRSefXN4yKJkclnEIPYTyfZDkQB0zIEz/oAQ6LOIKBm+HpmjsvBShyciqkVDnkbVyASyKNtsKXJHdm1TDcoTyEG1Ay7+HcLxBCXRIKHHfNnW6E1vG7QgxbIR5IrfykfYIhYTIqfyOjjWOQrAMTzpqeZRt1h6UQIeEMdYLLs26nFiZTx7heYk20UI6RYjRHx3nyuETyN3yAVr4BbaWZ5h5QjxvhasKzqMW7uJPMDvdInvT51Hz2qxJ0Ep9w5IPkfu4i5JN55LL1DYvzHGigUZs+TbeYuAN2GoNahL6FXWRoa81UcsVwd0fsqkraa4MUkzJqEMjg6WOvnIcEZMjbTZ/OZs1E3nbTTOQOdVB36Y2i3Gr1XjZojbAxWMNlFnzHoJwS3krKhspstYd8XbsKkzoSxiqJJQGR6EuEHmVxf6ykt+w259E1clktU2Xg4oyt6LMBBiqk7B91PKm3IHkYhtyWyB2VmGt2BSrg7zRaoXBug6hFG+XsaUpE0Vu2esh+aRQsFiC0JSg5C/Rx1Gk0TL8z6K2gvlDSr90SDgXw2V555LihlFtKETsXE/fRHTByLOnhpRdMyCFOqeOJFXM9nh3Uuj97r4bTzXS1pIx6WGRvaE6oks269sY+6HUfshvqZMiTRbLX8TgksPRMkXfSjKrr0Dj+Z5JMC30CYUOo9uAv/0wyZej8v5Ehhd4Y/bVeqeloNntUxG4G89lREUCQtAfYRiaPICcWppeR3XmdmijZfpgsrhLF8RY2GyvJE2bHUhg9Fl9jCuzuofkYzEuRChYNJIwwjai8e0SihjgksEg8rgc3bhX13pEZ+M75Hd1ivEEyspFk5b2CGmiGH0ahKSuYRyQ1OC9kXYnuR2buaKwd2QHhDlOW615pPa9SG/D4VzHmwvPivadUQWj2aH8Fh2XHMQOSmouCXmZVbUDf/9I5FOvnEEG5WUuze9G5dnD0XG55XxNZuME2rrBAmEoRhoEjG4Twyr/J0t41dgqvQ6m4fXmQz0pBkQRhrGgYhkm4g3yqXSmXuQ2LtLVuIxWFEpv5/FAIbnyxJ+wAMHACgtqeDT8aXFqe4NacaLOZyPyMb1OA3r6VS5vn2oikxn95r7UHtgrn0Sds8K+sAHjI/vyHVHIltWHVOdq/nhMFzp9uIaczruivYiwMWw2qxGjXaB3UYh14vqtJ4LfCyn4tZlLqXvNL5Fnkjf5KqjWlZCzfno5BelJfWqoaS9UOF9MijYL20VpcD1HG7W9ndPoe0WhXhaTGIKkf1I8JJ/4A7Uk9fWuUoDHU5KrnNcPX0FayyLEA5IvxDKq6/ayVwDnRquu5p3BFyaZFe8EcxOprr+Jws0HInNWBIJNe8fh+4ZQ6IDYwPE+TybjV9geY+7bXJqD8dImByeh8CJSlWcpuaUG32YmkzYMRwlPka6FdAykuqPS+H82Vr3Su4NdtdUfN6gzUfMdvmh9o/uVjFTLM5gD2TcY+/wEyfnyAqljoMnmhfNKEYIxUDGfQ5rzAk9MKaVofcGAs23sTKLa87zup0wdAZGRzOc02BFVbBf3IT4R6a9Sjm1xuDnTZYy9gcpzPkR6L0uSuJZOIhgQ0Hq259yLlfwuosl6oqrNh8D8HAMxMpCR/ot255zMuGoXmLFdicC2x7QR7Y0WBbGNRT8UZRIKpAfKim2UlzM7bEJWsT3PgK1zpT9F0DTYFUswpu6o9QrlANjknf5qy3NrghXPoSOOhm5jqnzvd+E9hIbtCOu2j6pxj/KFa+VW2BDS3fB2jC2unsyegd9b7d5NMSByV4PmFnJP3+PrEymGpynPvgI2x6/BeD6IXF/jw2ZF8zqkUaoxfaa3qVPoJwe0jpyIv/q3FBJnITQjkIEOkqr+JhoTe6rA5GAgxYDgJDLw/Na0tau4n1lVtRtCEhVlUVT21y3W4+9+f1zA5nDqRxA/DIzmAxh8f5/dGhs2766LcEIiBMNkoiRMmlnuu30nWOspDkR++TeY3le90TVQTEVkt/YnowGkGDVCT92EgTsaq7yiKPq5SYvDnU6txQX0DKakJLIz1ARBvVsURHdlTxUlO2q7utw+zwgrjamhuVl80Zqyl/fo1c1gVDr74lh4bpdb/TJq5vwsaejvC0qBf8l96Awj0vhktdUEFtTSLdCsOD/hHZRyYiJW64VIXosvz0TaPEzSznjlNY3b7I+LPlihBvFclFefUu30N+k0oXBg9xSTUfcIdBiwcDqlqe3arrDwHKyKpujvdC1yLDhtf21LJzrDiBCM426tGRINW4HNTWvtGbEKwpeXRuAi3X3UtNvoWKoJQvKi7jFIaDSL/z28M8VtXehGVpLF2EitBK+Hm6pyJNnG4no6a8kUOk2orXM2YVwChrjgNGo2tGrCGhqNLdg3AzYCCxMSUqLlLYbrzhqFaNBe3S3H6QwjUmMIrsbk6hKblma8Ilohfm9kV889C3yAQbuV8vN3k1FdHMIXKOIyOnZiFfbmmOyqwqzXD1tjD7UC/ApIrCRFHr4F9cu3X0oBFY9zeVYOnQZkOnoegq0UfGUg2WXiwtaUTR+57ii0RKCsYHOKWUTt5/AeB8GEBm0dIBEtScb9dIYRIRgpQ6uqQTt9p0fYdX34exyspVCn5pW6ZhBcRDZlPUit6ZhdSTCVYDV8GFQ7PBUQKVFwxGbtghWoG1UQkB3UGlwAN0yIUf64oK0QwIlow+lNwUozrACncjadAvht9K1qaE+dkPI15fFy1gTnMwlxn3RDQevH3RJ1Q1ujEA/PqMDbkNxPcLtoL9WtTBIkzg6k0eeHTtS2auH8kIgQDOlBOFwe5x0mwM2Hi61+SlcfgMbU+R73ULxNVvsjlKtJd/EJPLtQ+HbMsvS7a33VodQCuJm54e100dS+EMCLkaMBG3YVnQQ6u8ok2/ZOgqjHljJHWMtXI2VxwFOh80lRl+jH/e0Aby9IBze4hpyuPWSrCCWjVOVFCt7/BURV0vW2vOVcnnMnV+SOg90V8viyKibtpSABlj6N5HfWcVl2Hn8wLIM35ffFAoO9pjxMQb49qMEXegzb2UxnGFGZT4tBkX60SxF0VfduSmB7sOWNRlfBX8AHb26cRCWFKWAWXyPJ8QtlLDyQg3h2Y33cijQfjd4JKn4Vb8L2EwLDdJIDwGIzBbtnUcAbrsRBlUHyHEEsoPYgGFEPsdOSNBdS+3FQkZvIkXw/c9uvLh6pbpGCLr851eXWbuGlU02+d2Jo2dcQ/LkUfKjGBGpe52uWQFD/hXDY44Wtchfi8ymE3eSBGLcyMjvqyKXukSfO0rYL6s67lOJYST8Cop+V1HX7lDzH49Bq2v1gFy2e3JpkBt/CFjJenpRSQxMsaKUKkzJF5Nn86k7kV5ag5J/1OhjMoPx/3OVfLbA7rsP7MZ6zGH46JnlD3gM9U7enEbo0KPldnd30tTfifQfic/QrhP6CPBuu8zBqIwwmVbq7UoM1mAziDTEt7DLzYae0cZbgu9rElUhqn9KbFspzVSyGkxmTKvpfDqt8SjjzfKYQc0VBDWIieBvJO5xMr0GEJsebwNYCh1/nkGp8Hx/eH62/ju3otljH2vrRtLViDui5B7CyvIwjf0aa4Vdg+w5F5C/LmY58jwel1KONbPR7X3jeujVDXs5INXlUPcMwVJ2DfJS4vhDSmlJoSNXRaH3TNVGJ9VKwPSPx9mrEzvffbw0DTleviyi/Oe8i0Oe3YK+WW7I8KMPC06Rwy3MTLDSxnNIbtolrPoq4YY9F9RjasvoTDMpckVNeHvT+jmBK/Pt6Z3Gvm7c85X+/ZVAGtVjkybSuwcHNNJbu/v7mEXd9GeIZxr/BVZ6LPU971HMCKB6AVlhApwBeMyqFUpveQhArWRzGAFyrk2Sx8ssJsGMCFC3QT2NSXayjYn1Czc7zyeQK0NZNaQfFjUGnw14cfye7d3JXDy1MRqOTPmv4Vkz76Iz/1AF97kypxzpRClzSARsbO8pN+viCod/LOPw8sk2VUeSeSU7zcjGspM3GEHiPi2B7LIfmwSGUcGO1jMUZwzuUQIdE3Kt9uovmssgjds+lGIb1b3KtgCbpH+zKxQNXjU6DevsdzIkyXSgEHYVdMYPqu6+lBDosWvfzAf12lH4o5jnC1i/B8PuI/x3/K6LZHrqPbnDdSGzAeT9f7W2rDn/vQP6EpujgaNsPjmzW8fJSMEyOywJ8Ap9A+BOkHYDAwIDSUvH/EpIchd8gAzsp4LqZlYfE4Ng2RQIdB+37iaJJGw0bASwkX4nJj3HDCIw/i2oQQBtIgC7Prvgk8RPFnw7af9uY5JnJkK7wtXvrv2FVtHMhCPIOZxOYzH2Qiy/IWV8tfgTWLoEEEjhN+D8flr9GEJJ22AAAAABJRU5ErkJggg=="
  , E2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAgCAYAAADzCU3nAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA2tSURBVHgB7VoLcFTVGf7OvbtJSHgVAhUNqAiVzSYgUApKeVilAr54ZAMCtmJH61RRKx2UqjXT2lIqDq0IrYy2WASEiIhVwEfb1BkULVgh2RAQFRUoL0EeIclm9/79zt3s7t2wSXZhfTDlmzn33nPuef/n/Od/HOUploXKwigFHBKFXUqw3VJ41zSw0WPhg9JSFUCaMfwmyTp4HP1CCgMMgZftXgQLeVBoAwMPVK5Qf8ZZNAsXCZbNd54wQNCb79EkHiSEE36FKm+RvFwvWDqpENtLSkjiU0TvGyXHqsEALorx+6sxikQ6j+1kif6pHyqcTylk4SxahKupH6IJKujHdz9S9/5SP/5VUCSPe4qxurRYhZAkvnWD5LrrMSVUg2ms60LWqXAWpw0j2XwiuJzb7dmKFXi9YLz0bqmAzydmr7HV15h1wTdErLkkWnfgLNHSBVeK+d2c+eFkdxvzx8udrmws3rJYVTfOlO870mFL4MgTUOZYIGACJinGppSJU4XXJxlmCJ1DZrOLLZD1DXy2aaGqT/Szx2RpmxmwjwYbnXLwedkiVYszEKkSLgI3KfHHYA0G5/vkrspSdSjyo9fovYWh2hoKF65vQx+JJJboQ5MUV3rKww+kCrHgDZpYw8/MJvMIQrWHsMszXha1N7DwrVJVE9fpesxinuJIfN9R3MDX6/iS4S2WwRzPoEicfQpmd8SCRAuucLz0ohB3tTOtlYWlp0q4CKbwzBpaMEFGeqzS7ZurB06yVGAuLNURsMJEMnQTWqaRhiTXKROPaM9qmhReVLiVXAo4vz8qGNPHJ1M2l6rd0f9CqZX/o3ETpzv+U4JZj/dDLrxMgrWz+8GO1xyyJ2meM9/F10mbkIGnOajvRBMV1rTpjT8YLBNi5JSlRaKbFcK6zTWDbhMJPGlZgY5i1XMVcfFIEPpbv7WYKjquv20x8mRwACEO5nT6EgVbGB6w8AhKJNlz/EvDllVqPzs4J27eBQ8VjBWPM5/LjVuYPiAS5/x8roL4eVmJChrV2fixeQK5YqKQ/zQbeYzUfNcmaPLoZrg7PS4iGTbRnMEmXgPBSLxwsLj65QQ7/gYn+EGWH225cCG3UsfAN/GXpFpkWQ5qEAczUAdWOYw76tf8rnYM9Pr8csfABQeZtiMaQjiGrwjVrUk4wZZogkJHcWN2/1v5JMjFPNRv74eDNfHkmeNfpTbrb9fO8OGsw2GGCoZSLQiw0stZ5GbGxyGJs9Aws+DK7Iz6mk9YVC/y8GJSEu4VuPDtdDH2KSu0JOhyLezixQd69eDUcKyyEP9GvG75hqdI6tjaLxvi2Wz6e3y/rSNZdXjgSFuURDL3DaDaj68Get694+U+EuclROaXhhCyzDGUyJ+vtPArpnRwFHnveAjzI5GEBPGHrSWv6OCZJOfzyNSrQxOwWbZjuNvBZZ1D4u3mMSZhhmjxaWiCqc9J3QXSSuZWLcs6qH9tK0XaQbn171aMcHrJtI9812ZgamYdvhuJVyrM5uu9/CKZw3znIVZoPjt/Ld95ZN3CI3kb409zXj5pql1bXw1gBMsMZrRjU/nIb+ZVPafe1N/+leoVLrRZKsx19HxpejxWJWgter5jRomaoIVbdr7AOWxAiztp61L18fDhcsO+XExntIR1NWvZMDNzEao/DCukOWGDKCnWHgPW5KrVuWX4gsHBD2mUEJ1sbvqBjE90/H3afipcxYkqiOaj5Kn0Im04iiW8p+8kgWdUPqdOYuUen4zgUn+Ku6crWgBnQ++wNyNxVwbmWgFMsY0TYZxDKfJPiJfeXt62Um101pOUVFVWZrOz2QU+2c4NpO2I7ZvOTY2t1XkIHNsGvb5EzJ1UCEZWvdR1G9IIjqo1zy8PfGJPr8uAEQrhSk7ejKjso1Br6LMw9boTcZZcps8n8Q6ReKsjifnFcjNZ3BNhRTV1lC9Vh/PHyQy2GOM/ggxHFn0OT2tcLiWJq6JUreLim8ABVDeXzzBzbLbJHrxPoeeqbeu6p5VoGiTXUE7W2xzkOzoEQ9hAes3ld+xcECzqRY6I1BFkXVsQJnpdrDq04qukpEFS9U6QASSaZrdJEY3zVk7jxa7G6ZUrsZL/NiYoImzpIbLovY1/pCwqV5XitWDg4OKW8rmzL6Cw0nXWh2s82/HFQLOSnEahMS4oDzbHHZqs+NEChX40LAwz3biE8ePRn4I+z1ahmzbpUQ36BZx6ocIB5n2YFWhvy30Mu531khtUn+PF+pMbpIwtuAOIl3KZf0N2DXdzAqRMuB7frxpB4WOqVX+02XyK2q2Z1eGh3j65EF8dRpouPXBJSdun/reQ7ixbHSpfpqrgOJP0wW0G0KncRFdWOtRR7AQn/4f+59SDJPg6vmdz246hVH0imkNQeGAzvInaJCH68tWmUXKPgBvnNJE/SYionqO3j2eJZex7pi32S4uS/Pns/D+TMUqnDIXXaYTpRuNpXiTwUO/OVT+V//bGuo1x3mJclkLNyMw86SiIj7uQYQTRVeJ3+VudC/CaM9u2ldjEPH9zJOWICz0b1Y3eY6WzZdgsNw4keifaZh/ldjxp4SXFmylVZu26ZtcMEde9lO+ztaSoletQ7X4KIue2VPx88vV1JN51FRxIRLNLA+oqepEVnewj/Ig+xGw2EtF5FHNcyfd6pBEUerIsp4tK4fDJOinHquRwXIoFd1wWEqXeR7YqaJuoHS6867w+jOTn2rj20Qz0Iey59rNBe9oeeNWAWaKUka0NfEq5SDs3goEDsIJHkAS6kHhv5xfhSRqle0BSY12pwrKwwRkPxUTttIEE+FSFDRfhuGBY4Tjp7sxDQ4Zmc1c4koIkdty555mAK8gl7ojEueBCDGXRejWNFJ7UdktnuYSE0wSj03T48s21y8R0/0PBHEIlWqkGotnuGfvbRLBmT9ge2TJ0WzezZ+u5guZ5pkiXVM+eZEF933n26MEfQJqRdy4+4lb/IBLnZGu29tc+48VLDuXKnyz53C1a5+vp6MdeTllFJD6QbibaKX7LwtFdyJ28mlbBIhIztiME5xoZuMs5X67+PmnHZdOOElIuOeBF7MBlK8q1BUC8lOvt5atsbmSxmGVPv83sLF1H2LQVpKXEndMNSR6ZnVn8dqMWt+UXk31Zso4j+g/TPzECOGa0xaFEPr7GYB86FPoxRBVJlFXSku5iTOtyP3PYsYWTsBppxtp5qo4seQ6b0cQJD1wwuF6hfH8uzYcBW5p1Toie9QX+qAtM1PFa3M3E/tExcYFxDDOrVqnPqC8+zKRZaDjOWNHMfB+erywNqzeuWlqp2fg4rtJWfGcphA0e4Zdp8wRpIJxSjsshRtj+aJsVpO6/Iamb61KtSgQxR2VzEG2dsuydMZQRi1XXWm7USC0nHViURPlLyVPifWlhEprO6xH8eC3rw7CtMt3o1Bor9ldjLNsb40jWbXdI4AD5iGs9KtqTRXq5s+6KxDWL5BzMqlqO9+1KFB7jeEaTsJc3/NdXSX5HNeR6LfEanHutVHZoUC7jWRe3oM0eKb4p5bbPNfvbiHxTwTcy3pGs7CHbVmY/wjqKWMMepA6DHdQE78illRThG+BKECJj0ILCi+z2DzZtUknx8lShveeuLPoktR9NoaXbcN1JmJ/qj1GjJNMIYSEcRmR2eh3HPj8ivGl7MT+m84dT77p6K3CP/miZt0WEEftsCxMQmojKzXXtWtNaMq7Z8UI3m9fTFLQ2ZNk3uLYizWDT3Pqo1T7HFsJxhk3MOz3QBcUVy9S+aCWCemdeibmugsoRuDbj9gsXVcBZzlQxl5dm65UFuFvvOv57nmPfp/MggdORCbd6xkmXjzNtj8UljjqPWCbu8Te6Cknvx2aWedjZNpnKtL4T5VxFW9sznJLJaAm2EzTsT6N/rZosdKbpbv+EP8G9S30VL1SDxfqqH5q5apAIXCe3+5erBQk6oPJ8LV/do6Et5G/iLqjXKxlH8hG9+ELbUwBkO7q/J6xY+o4l2oIRU1t6TJPM2r2xRb7Li7oSvv3+GIfyeiHh64vhfrYJoT2Pn7H89RtB2NNNUF3D9RUKr+Yh1p4rB7KzqbsvFBTz/PFzeCn7nTzhuF5EKKlYwfU8ku6tWtVqQ3M6mZZMV1TYdzpmMuQjybsKTRPu6wVPsQw1LMzjbowQdC0tJjMa56OQ8RRg+zVtMP/EraVqOU4TyVpOjpE3LjfEHFpfmzmialX2Wy0p0nr1kXUuaafogdauFIH23J6q0/RrB6m3rTMXQbuDwuFHPSfEXz2gHteaq9WZFjAFnyINaNpyouwzpYrkeZFbfml5qdY/Urd6NNy0WnHBTfJizlHuchPjWImPdX8TZzAKXdjpF2gDet+GpA5uC894x8md1W2xKacGF1OPux/6NlfEIUqjc21mTI87HSjqInO5ffW182OirdsKVXp3uE2UvdeLTsjTuHbeJGhZ99ajP2WcS2lJ6MMRXcD2O2rJVmk3xgq1DGcAOHcT2eclOJlz6TNWK9XO40F70qdzbHORBqgeFE0plGbm7UagrEz7ntJmS0weNIENn4rMXfV0IB5C3Y61qg5nAPTdHFsBF0xKIvtaVyv4kjEuJIMv1Gb4/wBtgN/XCQ8orXMlvvNZx1lewf8/obR7HGnCWcKlBaIKijCMZ8qNnNAhPHL0ZSF9xXWT0H45IR/rStJ85PwPF2Jg+IgJrGEAAAAASUVORK5CYII="
  , P2 = "/assets/5-BlEEkwXW.png"
  , L2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAgCAYAAADAHpCrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApdSURBVHgB7ZsLbBTHGYD/2d2z73BoIeCYhznvnc/YZyckYCB2GgopagmlKAGK0kBEC+SBCk1LIqX0gUIpEaVSA21JgaQJSZqEUjdtREuoIJGAKKGp4kIMfoDPd2cTzMvIBhvs897O5N8Dw9k3+7iHySnyJ61nb/+Z2dnZf//5Z+Y3wAADDDBAf0EgTfB4ZmaGw52W2jNpUrZSUVGhwgA3HUsvKN9ZVMoI2dqnJAUGlU5XzlP79+/vggQpkEvuCjO6GxsyCuKjnQGpFoFWZI8auuXQoUOd8RR2ubxfJxRex/sO48mxbgVlbzY01vzISn3uvOIlBNhjDEC6cZWEgIlr/E1H3zMqm5frnSOK8BSe2qOvEwLPNQRr39HOPXLJbyij06OEDO/XrIK0Khg8WgcmeDyebLU74yUsNrqvDOvpAFV4rOGzGp9ZPRJYgAgwmDGY2Osii/ydfDLQsg/Tf0KCqJQ+jB0Tr7JoDMYHLaNAys6ealtcJBfNrgvWBS2WxaLwK0zzmG4Wpj3i4wUFBRvr6+v9BnXBmDGF2H62AfMP71sHPuFWj2d8uc93+DyvbElJSUZnB3se88oxLWDk1qjWeDGZGCWM1C5A+BQmy8EYoiq2XagsZTwhGoOVfgvKApH7JQtj2ZAEFGiGWR5BINrXpg+B27uZ8EF+frEHLOBxFnvx+5xsIWsGdvS3zDJJEgyGGGXpaRvLp+Gup/XKhkIhtCrsK5AohAwxEjPUOpfsfRW7r4xfHjb5g7WbwCLJK0w/IkkE1q7IhPf/bIe9LzpgxcM2EHVbzHJZmP3WSr1UYFMx/yArebHDv2+Wxx4WbMaVwJNFRUUyfAG45eIl+BCP6Ih3O7Ju/ynEQVorzOafZ8DCWSI4RxJw5xJYucgGv1xmaJAezHcWfs2kWrTMMAssgl/m5NGji4ZBcji6O8kLcJMnGXJu4f14wxeJ5lTEEhRsyoLq6opuiIO0VZgRwwlMmyjGXJ87XYJhX9Xtd0KJdD8YkJdXKOOYbaZU0QiZNjYfkmemRy4yHd5SxdjcsaNFUXgZ+O84REl4js/nuwRxkrYKk+UgYOMYegeO+Bk2/Q8VvVlDBxoHtfvQRBuO+zFQYQEkD1EZWQ83wcqgI32LKoq7GH/mibM/MicYrD8CCZC2CvPZGQrB5tg5zJE6CudaqVFRu5EQneyZfAnDdR3yIVeETrVnhCcp5/5qNTDek+ddCv1M12X6CvbcBK6QCetwqWAPJEjaKkxIAdj4utLrmop68vxrCqiGS3ZM95lcLlcOrq9whyNChH8LAtumU3SompExA1IALl495/GMy4V+Ap3cZ3HGzR1CccL0L39T9VpIgrR2encfDMPByhvW5F38/d8q0wVe/aUVcEzBr3wkV0TJP+wg7kXVaeOJ0VOeCymB3MYU5XHoB/Jl74OoFau4QgJHVRBNZ3xmpLXC4JcCv0OLQjGlqDdbdobNCxF2wqDC7+hIuqlIDxwLHDuLHXtYJw86rGvi7y8CPMfyZwXOAjekAMKYN9/lXefO876A/fQGcIZkXMNqHiSKs5qajrZCkqS1wmjU+VU4fZ5FjoaT1Dgzg4MgdG/kiWRZHiIwMoVfkPwvEKhtuloH+zs/D2S5nTu/AXGCDuYOTELQq5kgqUT6w/z580VIEqxrPKPwCzz9IVrPrFg5wxGczD3WcOwkpIC0V5gwjkBnLzAInqaRc10Y1Pubau/z+/0XeWJJtU/GzuN+1USgf4FrQxklmW+B3rAmQPwOKyM70QwciLknwIzKyppy6GfwI3kjGKz5GFJE2iuMBrs2JBmBZrd93LhxDj05FclMPZnKbAd7zoPBI+jDEP6wxKAM75EFcUC0ZUKBrACOlUEvfrvD4UjayhhBU/yG015hBGxh9lACzhFC5FwPbRrZcUn5qDCyEdgbHI7smIE/nBD2ad/dXhxG3uHfBfKuXKKTIE78/tp6nJ39kSPyXG6ncS3Nxwuq6yKPXPgApIi0V5j8XAFGZeN29m0EcnNMmstgXFgQNB+kV0aRZZajrJhfKOJj9EIlQgUmvJANQil9CBLAlhnegMNQc4yA0Sfwr6V9LR6MwAFcEliMH8xq1HTecKyZuJdk+Y4iSAFprzDLHpK03WCw4bHg2+bRGDhyjfV4PLdEX2NMmIGdyS9MmR2no9+LPghVtTCCdm5+Ag+sWRP/bOnEiRMtFIT1HJG26myHBBGABBqC1a8GGmvX4ZbHbGzg5b55cEjPFpiyp7y83AFJktYKc8+dIsyccuM9PzpPwo1IMytDxXA4fD3TNJgm4UuerpufkDXYoTuiD3Q7NCdYZ2WXjdy+vWIqJMCtw+24MEhMg50SJRCo+YAIbANfSuRzzW17S0tLE7ZmGmmrMFoYwzNLbJAZtZ+kxcSsXW4zjI1B80wlSbruIgfyWu/AlzwBUtk2oN+FBKisrFQYY09CxBD2Dw2B2l9j8ieeDIete9suXHkWksBSxJ0ROFWdIMt3DcnKUiysqqHttdtDWseZ5XOOEqCkIFafy9Dq5AwjcKZFd0GXDho06PoEXABlOvC39xMG9bUcv1SblefoS6Cpdl++XLwPFSclWw08KMl5WmDnSvHt3N1Xhhb0GRx2DzcEa/8KCZB8RxL2hMBCrZ0dtN3K0dpy5YLbWTzdrFpFYZHpdF+0Vd+wgWqiuL2qqioS36tFm2GyUCdrO5qjOqMDC5/SuUfxxfOdYyFBulV1CfSjlQkG93epoGqhr9ywUOzXbW7n2HshAZK2MAkwGJXsUUzfN8p06hyDw7gzPbG4t07v+0iFljb97SKBsKNw7WXkjyn2EBHu5GYk8LI/WLMSDMCd5QnYuR9zHOZMKpB5mFZDApw8ebzZ7fJuwVaaxeImTGPj8YDb7V1AKLyNz9A3BBR/SztGjBg/4cwZfqyxHl+ID4NTU9NZgWZdfrI+BPs/UaH9MoOL7Qz+86EKqzYZBIgxCFNCNl//LcI3gR9/wnA5/V0ww6ZUYw/pBIDTeZAEYVVajes9fuhHcP3nPRWEH3OFhOU6Mrt2xbsQmdazpNPopyxdHYKpi7tg2pIuWL4uBJ1dRnH+8CbuCe3r+Y2rrFw/AV9UQMxQTJfLfT5fSNCLkcE1H6/Lmwem8MfPyEYgU38P/UwQp9w4NL3Gk2mB4R0XlbjaYE1hmKAtCMXt4FmBgGBar2ZdLnUY/kOIFvz0FjqUP+i55sKXiden6eTfYzk8kbHNeiKFkoVgCtH9n62GpuObUasNIt9o241mQNzhlD10dNqWY+/pfSBL3XLJBrCIJYXxNdYcwSXFV/DtniFXt+u7kjmwjuvjiiSxg/i7DRJD06JPBCItLJ1csihaIOC+D0ozYu9N6okEW63ewNdY+390nf+GVqmjb12oePdoea49TO/7YH58roowdBqFQmpbZMswb8PVOJyeA1oxfTtn1NAbkXEi2Yb9X4VWoSX6YJRdNHuGs2erLos2+2xtN19zhGPqYPQRObfgbrBAWvyrrLb/ozAyTJRE0404Nayq2oZeiJEuRZFOa50BAwwwwAADfAn4HOoA+aQaXjlNAAAAAElFTkSuQmCC";
function O2({className: t}) {
    const e = [{
        icon: b2,
        url: "/"
    }, {
        icon: A2,
        url: "/"
    }, {
        icon: M2,
        url: "/"
    }, {
        icon: E2,
        url: "/"
    }, {
        icon: P2,
        url: "/"
    }, {
        icon: L2,
        url: "/"
    }]
      , n = ["0x9dD3cc681F622866770F8Bb492555B26D82307D4"]
      , [i,r] = q.useState(!1)
      , s = () => {
        navigator.clipboard.writeText(n),
        r(!0),
        alert(n),
        setTimeout( () => {
            r(!1)
        }
        , 3e3)
    }
    ;
    return _.jsx("div", {
        className: `footer absolute w-ful bottom-5 md:bottom-8 left-0 w-full z-10 ${t}`,
        children: _.jsx(nu, {
            fluid: !0,
            children: _.jsx(ip, {
                children: _.jsx(ea, {
                    xs: 12,
                    children: _.jsxs("div", {
                        className: "footer flex flex-wrap items-center justify-center 2xl:justify-between gap-3 3xl:gap-0",
                        children: [_.jsxs("div", {
                            className: " mb-3 2xl:mb-0  py-2 md:py-[15px] px-5 md:px-6 copytext flex items-center gap-2 cursor-pointer",
                            onClick: () => s(),
                            children: [_.jsxs("svg", {
                                width: "25",
                                height: "24",
                                viewBox: "0 0 25 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [_.jsxs("g", {
                                    clipPath: "url(#clip0_39_785)",
                                    children: [_.jsx("path", {
                                        d: "M20.4307 8H10.4307C9.32609 8 8.43066 8.89543 8.43066 10V20C8.43066 21.1046 9.32609 22 10.4307 22H20.4307C21.5352 22 22.4307 21.1046 22.4307 20V10C22.4307 8.89543 21.5352 8 20.4307 8Z",
                                        stroke: "black",
                                        strokeWidth: "3",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), _.jsx("path", {
                                        d: "M4.43066 16C3.33066 16 2.43066 15.1 2.43066 14V4C2.43066 2.9 3.33066 2 4.43066 2H14.4307C15.5307 2 16.4307 2.9 16.4307 4",
                                        stroke: "black",
                                        strokeWidth: "3",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })]
                                }), _.jsx("defs", {
                                    children: _.jsx("clipPath", {
                                        id: "clip0_39_785",
                                        children: _.jsx("rect", {
                                            width: "24",
                                            height: "24",
                                            fill: "white",
                                            transform: "translate(0.430664)"
                                        })
                                    })
                                })]
                            }), _.jsx("p", {
                                className: "text-black leading-[160%] text-base md:text-xl lg:text-2xl uppercase",
                                children: "Address"
                            })]
                        }), _.jsx("div", {
                            className: " mb-3 2xl:mb-0 marquee-area rounded-xl py-3 md:py-4  bg-white border-[1.1px] border-[#A5C4E1] ",
                            children: _.jsx("div", {
                                className: "marquee-imt h-[26px] md:h-[32px] text-center",
                                children: _.jsx(C2, {
                                    direction: "left",
                                    speed: 60,
                                    autoFill: !0,
                                    children: e.map( (o, l) => _.jsx("div", {
                                        className: "marquee-item mr-5",
                                        children: _.jsx("img", {
                                            src: o.icon,
                                            alt: ""
                                        })
                                    }, l))
                                })
                            })
                        }), _.jsx("div", {
                            className: "social-area flex items-center justify-center",
                            children: _.jsx(w2, {})
                        })]
                    })
                })
            })
        })
    })
}
const T2 = "/assets/swap-img-D0jXxT-f.png"
  , D2 = "/assets/swap-logo-C3Ikm5M6.png";
function R2({onClick: t}) {
    return _.jsx("div", {
        className: "swap",
        children: _.jsx("div", {
            className: "swap-wrap modal lg:flex overflow-hidden relative  !bg-white",
            children: _.jsxs("div", {
                className: "inner lg:flex ",
                children: [_.jsx("div", {
                    className: "img lg:relative z-10",
                    children: _.jsx("img", {
                        src: T2,
                        alt: ""
                    })
                }), _.jsx("div", {
                    className: "content",
                    children: _.jsxs("div", {
                        className: "text",
                        children: [_.jsx("div", {
                            className: "Logo mx-auto",
                            children: _.jsx("img", {
                                src: D2,
                                alt: ""
                            })
                        }), _.jsx("h2", {
                            className: "uppercase text-white text-center",
                            children: "Swap your SOL to SENK"
                        })]
                    })
                }), _.jsx("button", {
                    className: "closeBtn absolute top-6 lg:top-10 right-6 lg:right-10",
                    onClick: t,
                    children: _.jsx("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: _.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.9996 14.1221L17.3026 19.4251C17.584 19.7065 17.9657 19.8646 18.3636 19.8646C18.7616 19.8646 19.1432 19.7065 19.4246 19.4251C19.706 19.1437 19.8641 18.7621 19.8641 18.3641C19.8641 17.9662 19.706 17.5845 19.4246 17.3031L14.1196 12.0001L19.4236 6.69711C19.5629 6.55778 19.6733 6.39238 19.7487 6.21036C19.824 6.02834 19.8628 5.83326 19.8627 5.63626C19.8627 5.43926 19.8238 5.2442 19.7484 5.06221C19.673 4.88022 19.5624 4.71488 19.4231 4.57561C19.2838 4.43634 19.1184 4.32588 18.9364 4.25054C18.7543 4.17519 18.5592 4.13644 18.3623 4.13648C18.1653 4.13653 17.9702 4.17538 17.7882 4.25081C17.6062 4.32624 17.4409 4.43678 17.3016 4.57611L11.9996 9.87911L6.6966 4.57611C6.5583 4.43278 6.39284 4.31843 6.20987 4.23973C6.0269 4.16103 5.83009 4.11956 5.63092 4.11774C5.43176 4.11591 5.23422 4.15377 5.04984 4.22911C4.86546 4.30444 4.69793 4.41574 4.55703 4.55652C4.41612 4.69729 4.30466 4.86471 4.22916 5.04902C4.15365 5.23333 4.1156 5.43083 4.11724 5.63C4.11887 5.82917 4.16016 6.02602 4.23869 6.20906C4.31721 6.3921 4.43141 6.55767 4.5746 6.69611L9.8796 12.0001L4.5756 17.3041C4.43241 17.4425 4.31821 17.6081 4.23969 17.7912C4.16116 17.9742 4.11987 18.1711 4.11824 18.3702C4.1166 18.5694 4.15465 18.7669 4.23016 18.9512C4.30566 19.1355 4.41712 19.3029 4.55803 19.4437C4.69893 19.5845 4.86646 19.6958 5.05084 19.7711C5.23522 19.8464 5.43276 19.8843 5.63192 19.8825C5.83109 19.8807 6.0279 19.8392 6.21087 19.7605C6.39384 19.6818 6.5593 19.5674 6.6976 19.4241L11.9996 14.1221Z",
                            fill: "black"
                        })
                    })
                })]
            })
        })
    })
}
const z2 = "/assets/logo-DiKUzyV4.png";
function Vf() {
    return _.jsx("a", {
        className: "logo block cursor-pointer",
        href: "/",
        children: _.jsx("img", {
            src: z2,
            alt: "site-logo"
        })
    })
}
const N2 = "/assets/main_video-BihY9PEu.mp4";
function j2() {
    const [t,e] = q.useState(!1)
      , [n,i] = q.useState(!1)
      , [r,s] = q.useState(!1)
      , [o,l] = q.useState(!1)
      , [a,u] = q.useState(!0)
      , [c,f] = q.useState(!1)
      , [d,h] = q.useState(!1)
      , m = q.useRef(null)
      , v = () => {
        m.current && (c ? m.current.pause() : m.current.play(),
        f(!c),
        h(!0),
        i(!1),
        s(!1),
        l(!1),
        u(!0),
        e(!1))
    }
      , x = () => {
        m.current && m.current.pause(),
        f(!1)
    }
      , g = () => {
        i(!0),
        s(!1),
        l(!1),
        e(!1),
        x()
    }
      , p = () => {
        i(!1),
        s(!0),
        l(!1),
        e(!1),
        x()
    }
      , y = () => {
        i(!1),
        s(!1),
        l(!1),
        m.current && m.current.play(),
        f(!0),
        h(!0)
    }
    ;
    return _.jsx(_.Fragment, {
        children: _.jsxs("div", {
            className: "main-body bg-cover bg-center bg-no-repeat relative flex items-center justify-center",
            children: [_.jsx("header", {
                className: `heading absolute top-0 left-0 w-full z-20 ${c ? "opacity-50" : ""}`,
                children: _.jsx(nu, {
                    fluid: !0,
                    children: _.jsxs("div", {
                        className: "heading-wrap flex items-center justify-between",
                        children: [_.jsx(Vf, {}), _.jsxs("nav", {
                            className: `heading-menu ${t ? "show-menu" : ""}`,
                            children: [_.jsxs("div", {
                                className: "title flex items-center justify-between lg:hidden",
                                children: [_.jsx(Vf, {}), _.jsx("button", {
                                    className: "heading-toggler",
                                    onClick: () => e(!t),
                                    children: _.jsxs("svg", {
                                        width: "25",
                                        height: "24",
                                        viewBox: "0 0 25 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [_.jsx("path", {
                                            d: "M16.3849 9.32205C16.481 9.23249 16.5585 9.12488 16.6129 9.00538C16.6674 8.88587 16.6978 8.75681 16.7024 8.62555C16.707 8.4943 16.6857 8.36342 16.6397 8.2404C16.5938 8.11737 16.524 8.00461 16.4344 7.90855C16.3449 7.81249 16.2373 7.73501 16.1178 7.68053C15.9982 7.62605 15.8692 7.59565 15.7379 7.59105C15.6067 7.58646 15.4758 7.60776 15.3528 7.65374C15.2297 7.69972 15.117 7.76949 15.0209 7.85905L12.0949 10.587L9.36692 7.66005C9.18439 7.47309 8.93593 7.36501 8.67472 7.35891C8.4135 7.35282 8.16028 7.44921 7.96923 7.62745C7.77818 7.8057 7.66448 8.05164 7.65246 8.31265C7.64044 8.57366 7.73106 8.829 7.90492 9.02405L10.6329 11.95L7.70592 14.6781C7.60647 14.7667 7.52573 14.8743 7.46846 14.9946C7.41118 15.1149 7.37852 15.2454 7.37239 15.3785C7.36626 15.5116 7.38679 15.6446 7.43277 15.7696C7.47875 15.8947 7.54925 16.0093 7.64014 16.1067C7.73103 16.2041 7.84047 16.2824 7.96203 16.3369C8.08359 16.3915 8.21482 16.4212 8.34802 16.4243C8.48121 16.4274 8.61369 16.4038 8.73766 16.355C8.86163 16.3062 8.97459 16.2331 9.06992 16.14L11.9959 13.413L14.7239 16.3391C14.812 16.4403 14.9196 16.5229 15.0402 16.5817C15.1609 16.6405 15.2922 16.6745 15.4262 16.6815C15.5603 16.6885 15.6943 16.6685 15.8205 16.6226C15.9466 16.5767 16.0622 16.5058 16.1604 16.4143C16.2586 16.3228 16.3374 16.2124 16.392 16.0898C16.4466 15.9672 16.476 15.8348 16.4784 15.7006C16.4807 15.5664 16.4561 15.4331 16.4058 15.3086C16.3556 15.1841 16.2808 15.071 16.1859 14.976L13.4589 12.05L16.3849 9.32205Z",
                                            fill: "currentColor"
                                        }), _.jsx("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M1.04492 12C1.04492 5.925 5.96992 1 12.0449 1C18.1199 1 23.0449 5.925 23.0449 12C23.0449 18.075 18.1199 23 12.0449 23C5.96992 23 1.04492 18.075 1.04492 12ZM12.0449 21C10.863 21 9.6927 20.7672 8.60077 20.3149C7.50884 19.8626 6.51669 19.1997 5.68096 18.364C4.84523 17.5282 4.1823 16.5361 3.73001 15.4442C3.27771 14.3522 3.04492 13.1819 3.04492 12C3.04492 10.8181 3.27771 9.64778 3.73001 8.55585C4.1823 7.46392 4.84523 6.47177 5.68096 5.63604C6.51669 4.80031 7.50884 4.13738 8.60077 3.68508C9.6927 3.23279 10.863 3 12.0449 3C14.4319 3 16.7211 3.94821 18.4089 5.63604C20.0967 7.32387 21.0449 9.61305 21.0449 12C21.0449 14.3869 20.0967 16.6761 18.4089 18.364C16.7211 20.0518 14.4319 21 12.0449 21Z",
                                            fill: "currentColor"
                                        })]
                                    })
                                })]
                            }), _.jsxs("ul", {
                                className: "lg:flex lg:gap-5 xl:gap-6 2xl:gap-8 items-center",
                                children: [_.jsx("li", {
                                    className: "d-block",
                                    children: _.jsx("button", {
                                        onClick: () => g(),
                                        className: `heading-link uppercase ${n ? "active" : ""}`,
                                        children: "about senk"
                                    })
                                })
                                // , _.jsx("li", {
                                //     className: "d-block",
                                //     children: _.jsx("a", {
                                //         href: "#",
                                //         target: "_blank",
                                //         className: `heading-link uppercase ${o ? "active" : ""}`,
                                //         children: "PRESALE"
                                //     })
                                // })
                                , _.jsx("li", {
                                    className: "d-block",
                                    children: _.jsx("button", {
                                        onClick: () => p(),
                                        className: `heading-link uppercase ${r ? "active" : ""}`,
                                        children: "Tokenomics"
                                    })
                                })]
                            })]
                        }), _.jsxs("div", {
                            className: "heading-actions flex items-center flex-wrap",
                            children: [d && _.jsx("button", {
                                onClick: () => v(),
                                className: "video-play",
                                children: c ? _.jsxs("svg", {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 48 48",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [_.jsx("path", {
                                        d: "M18.2307 10.5397H14.3849C13.3229 10.5397 12.462 11.4006 12.462 12.4626V35.5374C12.462 36.5994 13.3229 37.4603 14.3849 37.4603H18.2307C19.2927 37.4603 20.1536 36.5994 20.1536 35.5374V12.4626C20.1536 11.4006 19.2927 10.5397 18.2307 10.5397Z",
                                        fill: "black"
                                    }), _.jsx("path", {
                                        d: "M33.6139 10.5397H29.7681C28.7061 10.5397 27.8452 11.4006 27.8452 12.4626V35.5374C27.8452 36.5994 28.7061 37.4603 29.7681 37.4603H33.6139C34.6759 37.4603 35.5368 36.5994 35.5368 35.5374V12.4626C35.5368 11.4006 34.6759 10.5397 33.6139 10.5397Z",
                                        fill: "black"
                                    })]
                                }) : _.jsx("svg", {
                                    width: "26",
                                    height: "31",
                                    viewBox: "0 0 26 31",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: _.jsx("path", {
                                        d: "M24.026 12.0086C26.5499 13.5954 26.57 17.2669 24.0637 18.8812L6.90931 29.9301C4.19877 31.676 0.630571 29.7299 0.630572 26.5057L0.630576 4.67183C0.630577 1.46782 4.15907 -0.481687 6.87157 1.22366L24.026 12.0086Z",
                                        fill: "black"
                                    })
                                })
                            }), _.jsx("button", {
                                className: "heading-toggler lg:hidden",
                                onClick: () => e(!t),
                                children: _.jsxs("svg", {
                                    width: "25",
                                    height: "24",
                                    viewBox: "0 0 25 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [_.jsx("path", {
                                        d: "M3.08984 6H21.0898",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), _.jsx("path", {
                                        d: "M3.08984 12H21.0898",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }), _.jsx("path", {
                                        d: "M3.08984 18H21.0898",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }), _.jsxs("div", {
                className: `video absolute top-0 left-0 w-full h-full ${a ? "lg:flex" : "hidden"}`,
                children: [!c && _.jsx("button", {
                    onClick: () => v(),
                    className: "video-btn flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]",
                    children: _.jsx("svg", {
                        width: "71",
                        height: "88",
                        viewBox: "0 0 71 88",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: _.jsx("path", {
                            d: "M68.3025 39.9926C70.8264 41.5794 70.8466 45.2509 68.3403 46.8652L6.59946 86.6316C3.88892 88.3774 0.320723 86.4313 0.320721 83.2072L0.320742 4.62438C0.320743 1.42037 3.84923 -0.52913 6.56173 1.17622L68.3025 39.9926Z",
                            fill: "black"
                        })
                    })
                }), _.jsxs("video", {
                    onClick: () => v(),
                    ref: m,
                    loop: !0,
                    width: "100%",
                    height: "auto",
                    className: "w-full h-full object-cover",
                    children: [_.jsx("source", {
                        src: N2,
                        type: "video/mp4"
                    }), "Your browser does not support the video tag."]
                })]
            }), n && _.jsx(w1, {
                onClick: () => y()
            }), o && _.jsx(R2, {
                onClick: () => y()
            }), r && _.jsx(o2, {
                onClick: () => y()
            }), _.jsx(O2, {
                className: `${c ? "running-video" : ""}`
            })]
        })
    })
}
np(document.getElementById("root")).render(_.jsx(q.StrictMode, {
    children: _.jsx(j2, {})
}));
