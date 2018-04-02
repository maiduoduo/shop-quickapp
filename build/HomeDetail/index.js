(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(7)
	var $app_style$ = __webpack_require__(8)
	var $app_script$ = __webpack_require__(9)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "Detail-page"
	  },
	  "id": "Detail-page",
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "Detail-swiper"
	      ],
	      "children": [
	        {
	          "type": "swiper",
	          "attr": {
	            "autoplay": "true",
	            "interval": "4000"
	          },
	          "classList": [
	            "banner"
	          ],
	          "children": [
	            {
	              "type": "stack",
	              "attr": {},
	              "classList": [
	                "banner"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.image},
	                    "alt": "详情图片"
	                  },
	                  "classList": [
	                    "banner-image"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "stack",
	              "attr": {},
	              "classList": [
	                "banner"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.image},
	                    "alt": "详情图片"
	                  },
	                  "classList": [
	                    "banner-image"
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "Detail-box"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "Detail-box-name"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.name}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "Detail-box-price"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return '¥' + (this.price)}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "Detail-box-"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "运费:包邮"
	              },
	              "classList": [
	                "freight"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return '销量:' + (this.amount)}
	              },
	              "classList": [
	                "amount"
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "Detail-detail"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "Detail-detail-left"
	          ]
	        },
	        {
	          "type": "image",
	          "attr": {
	            "src": "http://p6563v2ck.bkt.clouddn.com/3.1%E5%9B%BE%E6%96%87%E8%AF%A6%E6%83%85.png",
	            "alt": "图片"
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "详情"
	          }
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "Detail-detail-rigth"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "Detail-footer"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "Detail-footer-left"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "cart"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://p6563v2ck.bkt.clouddn.com/%E8%B4%AD%E7%89%A9%E8%BD%A6.png"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "购物车"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "shop"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://p6563v2ck.bkt.clouddn.com/%E5%BA%97%E9%93%BA_2.png"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "店铺"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "Detail-footer-rigth"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "addCart"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "加入购物车"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "addPay"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "立即购买"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "#Detail-page": {
	    "flexWrap": "wrap"
	  },
	  ".Detail-swiper": {
	    "width": "100%",
	    "height": "400px"
	  },
	  ".banner-image": {
	    "width": "100%",
	    "height": "100%"
	  },
	  ".Detail-box": {
	    "width": "100%",
	    "height": "150px",
	    "backgroundColor": "#ffffff",
	    "flexWrap": "wrap"
	  },
	  ".Detail-box-name": {
	    "width": "100%",
	    "paddingLeft": "20px",
	    "paddingTop": "10px",
	    "textAlign": "center"
	  },
	  ".Detail-box-price": {
	    "width": "100%",
	    "paddingLeft": "20px",
	    "paddingTop": "10px"
	  },
	  ".Detail-box-": {
	    "width": "100%",
	    "paddingLeft": "20px",
	    "paddingTop": "10px"
	  },
	  ".Detail-box-price text": {
	    "color": "#ff6600",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "Detail-box-price"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".Detail-box- .amount": {
	    "paddingLeft": "50px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "Detail-box-"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "amount"
	        }
	      ]
	    }
	  },
	  ".Detail-detail": {
	    "width": "100%",
	    "height": "70px",
	    "backgroundColor": "#f4f4f4",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  ".Detail-detail img": {
	    "width": "10px",
	    "height": "10px",
	    "display": "flex",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "Detail-detail"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "img"
	        }
	      ]
	    }
	  },
	  ".Detail-detail-left": {
	    "width": "100px",
	    "height": "2px",
	    "backgroundColor": "#cccccc",
	    "marginRight": "15px"
	  },
	  ".Detail-detail-rigth": {
	    "width": "100px",
	    "height": "2px",
	    "backgroundColor": "#cccccc",
	    "marginLeft": "15px"
	  },
	  ".Detail-footer": {
	    "width": "100%",
	    "height": "100px",
	    "position": "fixed",
	    "bottom": "0px",
	    "borderTopWidth": "1px",
	    "borderTopColor": "#cccccc",
	    "borderRightColor": "#cccccc",
	    "borderBottomColor": "#cccccc",
	    "borderLeftColor": "#cccccc",
	    "borderStyle": "solid"
	  },
	  ".Detail-footer-left": {
	    "width": "40%"
	  },
	  ".cart": {
	    "borderRightWidth": "1px",
	    "borderTopColor": "#cccccc",
	    "borderRightColor": "#cccccc",
	    "borderBottomColor": "#cccccc",
	    "borderLeftColor": "#cccccc",
	    "borderStyle": "solid",
	    "width": "50%",
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".shop": {
	    "borderRightWidth": "1px",
	    "borderTopColor": "#cccccc",
	    "borderRightColor": "#cccccc",
	    "borderBottomColor": "#cccccc",
	    "borderLeftColor": "#cccccc",
	    "borderStyle": "solid",
	    "width": "50%",
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".cart text": {
	    "fontSize": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "cart"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".shop text": {
	    "fontSize": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "shop"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".Detail-footer-rigth": {
	    "width": "60%"
	  },
	  ".addCart": {
	    "width": "50%",
	    "backgroundColor": "#ff9400",
	    "justifyContent": "center"
	  },
	  ".addCart text": {
	    "color": "#ffffff",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "addCart"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".addPay": {
	    "width": "50%",
	    "backgroundColor": "#f70000",
	    "justifyContent": "center"
	  },
	  ".addPay text": {
	    "color": "#ffffff",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "addPay"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: {
	    detail: []
	  },
	  onInit: function onInit() {
	    this.$page.setTitleBar({ text: '商品详情' });
	  },
	  onMenuPress: function onMenuPress() {
	    this.$app.showMenu();
	  }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	  return moduleOwn[acc];
	})) {
	  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	  moduleOwn.data = {};
	  moduleOwn._descriptor = {};
	  accessors.forEach(function (acc) {
	    var accType = _typeof(moduleOwn[acc]);
	    if (accType === 'object') {
	      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	      for (var name in moduleOwn[acc]) {
	        moduleOwn._descriptor[name] = { access: acc };
	      }
	    } else if (accType === 'function') {
	      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	    }
	  });
	}}

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map