import { r as requireReact, a as reactExports } from './index.BwsJR0Fq.js';

var jsxDevRuntime = {exports: {}};

var reactJsxDevRuntime_development = {};

var hasRequiredReactJsxDevRuntime_development;

function requireReactJsxDevRuntime_development () {
	if (hasRequiredReactJsxDevRuntime_development) return reactJsxDevRuntime_development;
	hasRequiredReactJsxDevRuntime_development = 1;
	/**
	 * @license React
	 * react-jsx-dev-runtime.development.js
	 *
	 * Copyright (c) Meta Platforms, Inc. and affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	(function() {
	  function getComponentNameFromType(type) {
	    if (null == type) return null;
	    if ("function" === typeof type)
	      return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
	    if ("string" === typeof type) return type;
	    switch (type) {
	      case REACT_FRAGMENT_TYPE:
	        return "Fragment";
	      case REACT_PROFILER_TYPE:
	        return "Profiler";
	      case REACT_STRICT_MODE_TYPE:
	        return "StrictMode";
	      case REACT_SUSPENSE_TYPE:
	        return "Suspense";
	      case REACT_SUSPENSE_LIST_TYPE:
	        return "SuspenseList";
	      case REACT_ACTIVITY_TYPE:
	        return "Activity";
	    }
	    if ("object" === typeof type)
	      switch ("number" === typeof type.tag && console.error(
	        "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
	      ), type.$$typeof) {
	        case REACT_PORTAL_TYPE:
	          return "Portal";
	        case REACT_CONTEXT_TYPE:
	          return type.displayName || "Context";
	        case REACT_CONSUMER_TYPE:
	          return (type._context.displayName || "Context") + ".Consumer";
	        case REACT_FORWARD_REF_TYPE:
	          var innerType = type.render;
	          type = type.displayName;
	          type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
	          return type;
	        case REACT_MEMO_TYPE:
	          return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
	        case REACT_LAZY_TYPE:
	          innerType = type._payload;
	          type = type._init;
	          try {
	            return getComponentNameFromType(type(innerType));
	          } catch (x) {
	          }
	      }
	    return null;
	  }
	  function testStringCoercion(value) {
	    return "" + value;
	  }
	  function checkKeyStringCoercion(value) {
	    try {
	      testStringCoercion(value);
	      var JSCompiler_inline_result = false;
	    } catch (e) {
	      JSCompiler_inline_result = true;
	    }
	    if (JSCompiler_inline_result) {
	      JSCompiler_inline_result = console;
	      var JSCompiler_temp_const = JSCompiler_inline_result.error;
	      var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
	      JSCompiler_temp_const.call(
	        JSCompiler_inline_result,
	        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
	        JSCompiler_inline_result$jscomp$0
	      );
	      return testStringCoercion(value);
	    }
	  }
	  function getTaskName(type) {
	    if (type === REACT_FRAGMENT_TYPE) return "<>";
	    if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
	      return "<...>";
	    try {
	      var name = getComponentNameFromType(type);
	      return name ? "<" + name + ">" : "<...>";
	    } catch (x) {
	      return "<...>";
	    }
	  }
	  function getOwner() {
	    var dispatcher = ReactSharedInternals.A;
	    return null === dispatcher ? null : dispatcher.getOwner();
	  }
	  function UnknownOwner() {
	    return Error("react-stack-top-frame");
	  }
	  function hasValidKey(config) {
	    if (hasOwnProperty.call(config, "key")) {
	      var getter = Object.getOwnPropertyDescriptor(config, "key").get;
	      if (getter && getter.isReactWarning) return false;
	    }
	    return void 0 !== config.key;
	  }
	  function defineKeyPropWarningGetter(props, displayName) {
	    function warnAboutAccessingKey() {
	      specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
	        "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
	        displayName
	      ));
	    }
	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, "key", {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	  function elementRefGetterWithDeprecationWarning() {
	    var componentName = getComponentNameFromType(this.type);
	    didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
	      "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
	    ));
	    componentName = this.props.ref;
	    return void 0 !== componentName ? componentName : null;
	  }
	  function ReactElement(type, key, props, owner, debugStack, debugTask) {
	    var refProp = props.ref;
	    type = {
	      $$typeof: REACT_ELEMENT_TYPE,
	      type,
	      key,
	      props,
	      _owner: owner
	    };
	    null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
	      enumerable: false,
	      get: elementRefGetterWithDeprecationWarning
	    }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
	    type._store = {};
	    Object.defineProperty(type._store, "validated", {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: 0
	    });
	    Object.defineProperty(type, "_debugInfo", {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: null
	    });
	    Object.defineProperty(type, "_debugStack", {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: debugStack
	    });
	    Object.defineProperty(type, "_debugTask", {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: debugTask
	    });
	    Object.freeze && (Object.freeze(type.props), Object.freeze(type));
	    return type;
	  }
	  function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
	    var children = config.children;
	    if (void 0 !== children)
	      if (isStaticChildren)
	        if (isArrayImpl(children)) {
	          for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
	            validateChildKeys(children[isStaticChildren]);
	          Object.freeze && Object.freeze(children);
	        } else
	          console.error(
	            "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
	          );
	      else validateChildKeys(children);
	    if (hasOwnProperty.call(config, "key")) {
	      children = getComponentNameFromType(type);
	      var keys = Object.keys(config).filter(function(k) {
	        return "key" !== k;
	      });
	      isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
	      didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
	        'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
	        isStaticChildren,
	        children,
	        keys,
	        children
	      ), didWarnAboutKeySpread[children + isStaticChildren] = true);
	    }
	    children = null;
	    void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
	    hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
	    if ("key" in config) {
	      maybeKey = {};
	      for (var propName in config)
	        "key" !== propName && (maybeKey[propName] = config[propName]);
	    } else maybeKey = config;
	    children && defineKeyPropWarningGetter(
	      maybeKey,
	      "function" === typeof type ? type.displayName || type.name || "Unknown" : type
	    );
	    return ReactElement(
	      type,
	      children,
	      maybeKey,
	      getOwner(),
	      debugStack,
	      debugTask
	    );
	  }
	  function validateChildKeys(node) {
	    isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
	  }
	  function isValidElement(object) {
	    return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	  var React = requireReact(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
	    return null;
	  };
	  React = {
	    react_stack_bottom_frame: function(callStackForError) {
	      return callStackForError();
	    }
	  };
	  var specialPropKeyWarningShown;
	  var didWarnAboutElementRef = {};
	  var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
	    React,
	    UnknownOwner
	  )();
	  var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
	  var didWarnAboutKeySpread = {};
	  reactJsxDevRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	  reactJsxDevRuntime_development.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
	    var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	    return jsxDEVImpl(
	      type,
	      config,
	      maybeKey,
	      isStaticChildren,
	      trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
	      trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	    );
	  };
	})();
	return reactJsxDevRuntime_development;
}

var hasRequiredJsxDevRuntime;

function requireJsxDevRuntime () {
	if (hasRequiredJsxDevRuntime) return jsxDevRuntime.exports;
	hasRequiredJsxDevRuntime = 1;
	{
	  jsxDevRuntime.exports = requireReactJsxDevRuntime_development();
	}
	return jsxDevRuntime.exports;
}

var jsxDevRuntimeExports = requireJsxDevRuntime();

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return reactExports.createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ArrowRight = createLucideIcon("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ChevronLeft = createLucideIcon("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);

function NewsSection({
  initialPosts = [],
  initialHasNext = false,
  initialHasPrevious = false,
  initialNextCursor,
  initialPreviousCursor
}) {
  const parsedInitialPosts = reactExports.useMemo(() => {
    if (typeof initialPosts === "string") {
      try {
        return JSON.parse(initialPosts);
      } catch (error2) {
        console.error("Failed to parse initialPosts:", error2);
        return [];
      }
    }
    return Array.isArray(initialPosts) ? initialPosts : [];
  }, [initialPosts]);
  const [posts, setPosts] = reactExports.useState(parsedInitialPosts);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [hasNext, setHasNext] = reactExports.useState(initialHasNext);
  const [hasPrevious, setHasPrevious] = reactExports.useState(initialHasPrevious);
  const [nextCursor, setNextCursor] = reactExports.useState(
    initialNextCursor
  );
  const [previousCursor, setPreviousCursor] = reactExports.useState(
    initialPreviousCursor
  );
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const fetchPosts = async (cursor, direction = "next") => {
    setLoading(true);
    setError(null);
    try {
      console.log("NewsSection fetching:", { cursor, direction });
      const params = new URLSearchParams({
        limit: "3"
      });
      if (direction === "next" && cursor) {
        params.append("after", cursor);
      } else if (direction === "previous" && cursor) {
        params.append("before", cursor);
      }
      const response = await fetch(`/api/facebook-posts?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      console.log("NewsSection response:", data);
      setPosts(data.posts);
      setHasNext(data.hasNext);
      setHasPrevious(data.hasPrevious);
      setNextCursor(data.nextCursor);
      setPreviousCursor(data.previousCursor);
      if (direction === "next") {
        setCurrentPage((prev) => prev + 1);
      } else {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Failed to load posts from Facebook.");
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    if (parsedInitialPosts.length === 0) {
      fetchPosts(void 0, "next");
    }
  }, [parsedInitialPosts.length]);
  const handleNextPage = () => {
    if (hasNext && nextCursor) {
      fetchPosts(nextCursor, "next");
    }
  };
  const handlePreviousPage = () => {
    if (hasPrevious && previousCursor) {
      fetchPosts(previousCursor, "previous");
    }
  };
  const displayPosts = posts.length > 0 ? posts : [];
  return /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("section", { id: "news", className: "py-16 lg:py-24 bg-background", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "container mx-auto px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-sm text-primary font-medium mb-3 block tracking-wide", children: "THE PRESS" }, void 0, false, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h3", { className: "font-serif text-4xl lg:text-5xl text-foreground mb-4", children: "Latest News" }, void 0, false, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-20 h-1 bg-secondary" }, void 0, false, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 128,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this),
    loading ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "group block border-b border-border/40 last:border-b-0 py-8 lg:py-12 -mx-6 px-6 lg:-mx-12 lg:px-12", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid lg:grid-cols-[180px_200px_1fr_auto] gap-6 lg:gap-8 items-start animate-pulse", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-4 bg-muted rounded w-16 mb-2" }, void 0, false, {
          fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
          lineNumber: 137,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-6 bg-muted rounded w-20" }, void 0, false, {
          fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
          lineNumber: 138,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 136,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative aspect-[4/3] rounded-lg overflow-hidden bg-muted/20 hidden lg:block" }, void 0, false, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 140,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-8 bg-muted rounded w-3/4 mb-3" }, void 0, false, {
          fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
          lineNumber: 142,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-4 bg-muted rounded w-full mb-2" }, void 0, false, {
          fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
          lineNumber: 143,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-4 bg-muted rounded w-5/6" }, void 0, false, {
          fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
          lineNumber: 144,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-4 pt-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-3 bg-muted rounded w-12" }, void 0, false, {
            fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
            lineNumber: 146,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-3 bg-muted rounded w-16" }, void 0, false, {
            fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
            lineNumber: 147,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "h-3 bg-muted rounded w-14" }, void 0, false, {
            fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
            lineNumber: 148,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
          lineNumber: 145,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 141,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "hidden lg:flex items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-12 h-12 rounded-full border border-border bg-muted" }, void 0, false, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 152,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 151,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
      lineNumber: 135,
      columnNumber: 17
    }, this) }, i, false, {
      fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
      lineNumber: 134,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
      lineNumber: 132,
      columnNumber: 11
    }, this) : displayPosts ? /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-1", children: displayPosts.map((item) => /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("a", { href: `/news/${item.id}`, className: "block", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("article", { className: "group block border-b border-border/40 last:border-b-0 py-8 lg:py-12 hover:bg-muted/30 transition-all duration-300 -mx-6 px-6 lg:-mx-12 lg:px-12", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "grid lg:grid-cols-[180px_200px_1fr_auto] gap-6 lg:gap-8 items-start", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("time", { className: "text-sm tracking-wider text-muted-foreground uppercase font-medium", children: [
          item.date,
          ", ",
          item.year
        ] }, void 0, true, {
          fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
          lineNumber: 166,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-secondary w-fit", children: item.category }, void 0, false, {
          fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
          lineNumber: 169,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 165,
        columnNumber: 21
      }, this),
      item.image && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "relative aspect-[4/3] rounded-lg overflow-hidden bg-muted/20 hidden lg:block", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
          "img",
          {
            src: item.image,
            alt: item.title,
            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          },
          void 0,
          false,
          {
            fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
            lineNumber: 177,
            columnNumber: 25
          },
          this
        ),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-300" }, void 0, false, {
          fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
          lineNumber: 182,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" }, void 0, false, {
          fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
          lineNumber: 183,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 176,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "font-serif text-2xl lg:text-4xl text-foreground leading-tight group-hover:text-secondary transition-colors text-balance", children: item.title }, void 0, false, {
          fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
          lineNumber: 189,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-base lg:text-lg text-muted-foreground leading-relaxed text-pretty", children: item.excerpt }, void 0, false, {
          fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
          lineNumber: 192,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "flex items-center gap-4 text-sm text-muted-foreground pt-2", children: [
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
            item.likes,
            " likes"
          ] }, void 0, true, {
            fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
            lineNumber: 196,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "•" }, void 0, false, {
            fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
            lineNumber: 197,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
            item.comments,
            " comments"
          ] }, void 0, true, {
            fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
            lineNumber: 198,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: "•" }, void 0, false, {
            fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
            lineNumber: 199,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { children: [
            item.shares,
            " shares"
          ] }, void 0, true, {
            fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
            lineNumber: 200,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
          lineNumber: 195,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 188,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "hidden lg:flex items-center justify-center", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "w-12 h-12 rounded-full border border-border group-hover:border-secondary group-hover:bg-secondary/5 flex items-center justify-center transition-all", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "w-5 h-5 text-muted-foreground group-hover:text-secondary group-hover:translate-x-1 transition-all" }, void 0, false, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 207,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 206,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 205,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
      lineNumber: 163,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
      lineNumber: 162,
      columnNumber: 17
    }, this) }, item.id, false, {
      fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
      lineNumber: 161,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
      lineNumber: 159,
      columnNumber: 11
    }, this) : /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("h2", { className: "text-2xl font-serif text-foreground mb-4", children: "No Data Found" }, void 0, false, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 217,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("p", { className: "text-muted-foreground", children: error || "No news articles are available at this time. Please check back later." }, void 0, false, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 220,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
      lineNumber: 216,
      columnNumber: 11
    }, this),
    !loading && displayPosts && (hasPrevious || hasNext) && /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-12 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          onClick: handlePreviousPage,
          disabled: !hasPrevious || loading,
          className: "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
          children: [
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronLeft, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
              lineNumber: 234,
              columnNumber: 15
            }, this),
            "Previous"
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
          lineNumber: 229,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("span", { className: "text-sm text-muted-foreground", children: [
        "Page ",
        currentPage
      ] }, void 0, true, {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 238,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
        "button",
        {
          onClick: handleNextPage,
          disabled: !hasNext || loading,
          className: "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
          children: [
            "Next",
            /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ChevronRight, { className: "w-4 h-4" }, void 0, false, {
              fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
              lineNumber: 248,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
          lineNumber: 242,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
      lineNumber: 228,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV("div", { className: "mt-12", children: /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(
      "a",
      {
        href: "/news",
        className: "inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors",
        children: [
          "View all news",
          /* @__PURE__ */ jsxDevRuntimeExports.jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
            fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
            lineNumber: 259,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
        lineNumber: 254,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
      lineNumber: 253,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
    lineNumber: 120,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/home/yuuki/Documents/GitHub/dccp-main-website/src/components/news-section.tsx",
    lineNumber: 119,
    columnNumber: 5
  }, this);
}

export { NewsSection };
