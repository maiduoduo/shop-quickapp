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

	__webpack_require__(12)
	__webpack_require__(16)
	__webpack_require__(18)
	__webpack_require__(23)
	var $app_template$ = __webpack_require__(20)
	var $app_style$ = __webpack_require__(21)
	var $app_script$ = __webpack_require__(22)
	
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(13)
	var $app_style$ = __webpack_require__(14)
	var $app_script$ = __webpack_require__(15)
	
	$app_define$('@app-component/home', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "list",
	  "attr": {},
	  "children": [
	    {
	      "type": "list-item",
	      "attr": {
	        "type": "swiper"
	      },
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
	                    "src": "https://img.alicdn.com/bao/uploaded/TB1U5w_db1YBuNjSszeSuublFXa.jpg_q90.jpg_.webp"
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
	                    "src": "https://img.alicdn.com/bao/uploaded/TB1U5w_db1YBuNjSszeSuublFXa.jpg_q90.jpg_.webp"
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
	      "type": "list-item",
	      "attr": {
	        "type": "jiugong"
	      },
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "home_list"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "home_list_li"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://p6563v2ck.bkt.clouddn.com/tx.png",
	                    "alt": "图片"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "T恤"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "home_list_li"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://p6563v2ck.bkt.clouddn.com/wt.png",
	                    "alt": "图片"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "外套"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "home_list_li"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://p6563v2ck.bkt.clouddn.com/kz.png",
	                    "alt": "图片"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "裤子"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "home_list_li"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://p6563v2ck.bkt.clouddn.com/xz.png",
	                    "alt": "图片"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "鞋子"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "home_list_li"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://p6563v2ck.bkt.clouddn.com/rm.png",
	                    "alt": "图片"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "热卖"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "home_list_li"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://p6563v2ck.bkt.clouddn.com/wz.png",
	                    "alt": "图片"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "袜子"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "home_list_li"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://p6563v2ck.bkt.clouddn.com/sb.png",
	                    "alt": "图片"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "手表"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "home_list_li"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "http://p6563v2ck.bkt.clouddn.com/mz.png",
	                    "alt": "图片"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "帽子"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "list-item",
	      "attr": {
	        "type": "jiugong"
	      },
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "proposal"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "http://p6563v2ck.bkt.clouddn.com/tuijian.png",
	                "alt": "新品推荐"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "list-item",
	      "attr": {},
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "box"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "list_box"
	              ],
	              "repeat": function () {return this.list},
	              "events": {
	                "click": function (evt) {this.goDetail(this.$item,evt)}
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "list_box_img"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": function () {return this.$item.image},
	                        "alt": "图片"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "list_box_name"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.name}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "list_box_box"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return '¥' + (this.$item.price)}
	                      },
	                      "classList": [
	                        "price"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return '¥' + (this.$item.agio)}
	                      },
	                      "classList": [
	                        "agio"
	                      ]
	                    }
	                  ]
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
/* 14 */
/***/ function(module, exports) {

	module.exports = {
	  ".home_list": {
	    "width": "100%",
	    "height": "330px",
	    "justifyContent": "center",
	    "flexWrap": "wrap"
	  },
	  ".home_list_li": {
	    "width": "150px",
	    "height": "150px",
	    "float": "left",
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "flexWrap": "wrap",
	    "alignItems": "center"
	  },
	  ".home_list_li image": {
	    "width": "90px",
	    "height": "90px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "home_list_li"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "image"
	        }
	      ]
	    }
	  },
	  ".proposal": {
	    "width": "100%",
	    "height": "120px"
	  },
	  ".banner": {
	    "width": "100%",
	    "height": "400px",
	    "backgroundColor": "#000000"
	  },
	  ".banner-image": {
	    "width": "100%",
	    "height": "100%"
	  },
	  ".box": {
	    "flexWrap": "wrap"
	  },
	  ".list_box": {
	    "width": "50%",
	    "height": "450px",
	    "justifyContent": "center",
	    "flexWrap": "wrap"
	  },
	  ".list_box_img": {
	    "width": "100%",
	    "height": "340px",
	    "paddingTop": "10px",
	    "display": "flex",
	    "paddingLeft": "2px"
	  },
	  ".list_box_name": {
	    "width": "500px",
	    "paddingLeft": "13px",
	    "paddingTop": "3px"
	  },
	  ".list_box_name text": {
	    "fontSize": "25px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "list_box_name"
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
	  ".list_box_box": {
	    "width": "100%",
	    "height": "50px"
	  },
	  ".list_box_box .price": {
	    "float": "left",
	    "color": "#ff6702",
	    "paddingLeft": "13px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "list_box_box"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "price"
	        }
	      ]
	    }
	  },
	  ".list_box_box .agio": {
	    "color": "#a8a8a8",
	    "paddingLeft": "100px",
	    "fontSize": "19px",
	    "textDecoration": "line-through",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "list_box_box"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "agio"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _system = $app_require$('@app-module/system.router');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.fetch');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: {
	    title: '示例页面',
	    list: [],
	    chaishu: 'Hello, world!'
	  },
	  getlist: function getlist() {
	    var _this = this;
	    _system4.default.fetch({
	      url: "http://p6acqdvet.bkt.clouddn.com/_data_json.json",
	      success: function success(res) {
	        var json = JSON.parse(res.data).json;
	        _this.list = json;
	      }
	    });
	  },
	
	  goDetail: function goDetail(item) {
	    console.log(item.image);
	    _system2.default.push({
	      uri: '/HomeDetail',
	      params: {
	        name: item.name,
	        price: item.price,
	        image: item.image,
	        agio: item.agio,
	        amount: item.amount
	      }
	    });
	  },
	  onInit: function onInit() {
	    this.getlist();
	    this.$page.setTitleBar({ text: '首页' });
	  }
	};}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(17)
	
	$app_define$('@app-component/dynamic', [], function($app_require$, $app_exports$, $app_module$){
	     $app_module$.exports.template = $app_template$
	})


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "dongtai"
	  },
	  "id": "dongtai",
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": "这里是动态"
	      }
	    }
	  ]
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(19)
	
	$app_define$('@app-component/cart', [], function($app_require$, $app_exports$, $app_module$){
	     $app_module$.exports.template = $app_template$
	})


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": "this is cart"
	      }
	    }
	  ]
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "wanandroid-page"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "flexible-tabs"
	      ],
	      "children": [
	        {
	          "type": "tabs",
	          "attr": {
	            "index": function () {return this.footerIndex}
	          },
	          "events": {
	            "change": "changeTabactive"
	          },
	          "children": [
	            {
	              "type": "tab-content",
	              "attr": {},
	              "classList": [
	                "flexible-tab-content"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "home",
	                      "attr": {},
	                      "shown": function () {return this.tabItems[0]}
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "dynamic",
	                      "attr": {},
	                      "shown": function () {return this.tabItems[1]}
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "cart",
	                      "attr": {},
	                      "shown": function () {return this.tabItems[2]}
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "tab-content-section"
	                  ],
	                  "children": [
	                    {
	                      "type": "my",
	                      "attr": {},
	                      "shown": function () {return this.tabItems[3]}
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
	            "flexible-tabbar"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "repeat": {
	                "exp": function () {return this.tabItems},
	                "key": "index",
	                "value": "item"
	              },
	              "classList": [
	                "tab-item"
	              ],
	              "events": {
	                "click": function (evt) {this.clickTabBar(this.index,evt)}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.item.icon[this.footerIndex===this.index?1:0]}
	                  },
	                  "classList": [
	                    "tab-icon"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.item.text}
	                  },
	                  "classList": function () {return [this.footerIndex===this.index?'active':'tab-text']}
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
/* 21 */
/***/ function(module, exports) {

	module.exports = {
	  ".wanandroid-page .flexible-tabs": {
	    "display": "flex",
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "wanandroid-page"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabs"
	        }
	      ]
	    }
	  },
	  ".flexible-tabs .flexible-tabbar": {
	    "display": "flex",
	    "borderTopWidth": "1px",
	    "borderTopColor": "#eeeeee",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabs"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabbar"
	        }
	      ]
	    }
	  },
	  ".flexible-tabbar .tab-item": {
	    "flex": 1,
	    "paddingTop": "10px",
	    "paddingRight": "10px",
	    "paddingBottom": "10px",
	    "paddingLeft": "10px",
	    "display": "flex",
	    "alignItems": "center",
	    "flexDirection": "column",
	    "fontSize": "12px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "flexible-tabbar"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-item"
	        }
	      ]
	    }
	  },
	  ".tab-item .tab-icon": {
	    "width": "56px",
	    "height": "56px",
	    "paddingTop": "5px",
	    "paddingRight": "5px",
	    "paddingBottom": "5px",
	    "paddingLeft": "5px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-icon"
	        }
	      ]
	    }
	  },
	  ".tab-item .tab-text": {
	    "fontSize": "20px",
	    "color": "#aaaaaa",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-text"
	        }
	      ]
	    }
	  },
	  ".tab-item .active": {
	    "fontSize": "20px",
	    "color": "#ff6702",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "active"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = {
	  data: function data() {
	    return {
	      footerIndex: 0,
	      tabItems: [{
	        text: '首页',
	        icon: ['http://p6drtc064.bkt.clouddn.com/home.png', 'http://p6drtc064.bkt.clouddn.com/home_xz.png']
	      }, {
	        text: '购物车',
	        icon: ['http://p6drtc064.bkt.clouddn.com/gwc.png', 'http://p6drtc064.bkt.clouddn.com/gwc_xz.png']
	      }, {
	        text: '动态',
	        icon: ['http://p6jnqmfwv.bkt.clouddn.com/dynamic.png', 'http://p6jnqmfwv.bkt.clouddn.com/dynamic-selected.png']
	      }, {
	        text: '我的',
	        icon: ['http://p6drtc064.bkt.clouddn.com/my.png', 'http://p6drtc064.bkt.clouddn.com/my_xz.png']
	      }]
	    };
	  },
	  changeTabactive: function changeTabactive(e) {
	    this.changeCurrent(e.index);
	  },
	  clickTabBar: function clickTabBar(index) {
	    this.changeCurrent(index);
	  },
	  changeCurrent: function changeCurrent(index) {
	    this.$page.setTitleBar({ text: this.tabItems[index].text });
	    this.tabItems[index].show = true;
	    this.footerIndex = index;
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

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(24)
	
	$app_define$('@app-component/my', [], function($app_require$, $app_exports$, $app_module$){
	     $app_module$.exports.template = $app_template$
	})


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "text",
	  "attr": {
	    "value": " this is my "
	  }
	}

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