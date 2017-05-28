(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["GraphQLDocs"] = factory(require("react"));
	else
		root["GraphQLDocs"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.GraphQLDocs = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SchemaDocsView = __webpack_require__(2);
	
	var _model = __webpack_require__(13);
	
	var _introspectionQuery = __webpack_require__(46);
	
	var _introspectionQuery2 = _interopRequireDefault(_introspectionQuery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GraphQLDocs = exports.GraphQLDocs = function (_React$Component) {
	    _inherits(GraphQLDocs, _React$Component);
	
	    function GraphQLDocs() {
	        _classCallCheck(this, GraphQLDocs);
	
	        return _possibleConstructorReturn(this, (GraphQLDocs.__proto__ || Object.getPrototypeOf(GraphQLDocs)).apply(this, arguments));
	    }
	
	    _createClass(GraphQLDocs, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this2 = this;
	
	            var promise = this.props.fetcher(_introspectionQuery2.default);
	
	            promise.then(function (json) {
	                _this2.setState({
	                    schema: new _model.Schema(json.data)
	                });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.state && this.state.schema) {
	                return _react2.default.createElement(_SchemaDocsView.SchemaDocsView, { schema: this.state.schema });
	            } else {
	                return _react2.default.createElement('div', null);
	            }
	        }
	    }]);
	
	    return GraphQLDocs;
	}(_react2.default.Component);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SchemaDocsView = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactTypeahead = __webpack_require__(3);
	
	var _model = __webpack_require__(13);
	
	var _schemaWalker = __webpack_require__(14);
	
	var _TypeDocsViews = __webpack_require__(15);
	
	var _SectionView = __webpack_require__(37);
	
	var _SectionView2 = _interopRequireDefault(_SectionView);
	
	var _SideNavSectionView = __webpack_require__(41);
	
	var _SideNavSectionView2 = _interopRequireDefault(_SideNavSectionView);
	
	var _SchemaDocsView = __webpack_require__(44);
	
	var StyleSheet = _interopRequireWildcard(_SchemaDocsView);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SchemaDocsView = exports.SchemaDocsView = function (_React$Component) {
	    _inherits(SchemaDocsView, _React$Component);
	
	    function SchemaDocsView(props) {
	        _classCallCheck(this, SchemaDocsView);
	
	        var _this = _possibleConstructorReturn(this, (SchemaDocsView.__proto__ || Object.getPrototypeOf(SchemaDocsView)).call(this, props));
	
	        _this.handleSelect = _this.handleSelect.bind(_this);
	        return _this;
	    }
	
	    _createClass(SchemaDocsView, [{
	        key: 'handleSelect',
	        value: function handleSelect(name) {
	            location.hash = '#' + name;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var types = (0, _schemaWalker.getReferencesInSchema)(this.props.schema).map(function (tn) {
	                return _this2.props.schema.types[tn];
	            });
	            var sections = {
	                schema: { name: 'Schema', items: [] },
	                objects: { name: 'Object Types', items: [] },
	                inputs: { name: 'Input Types', items: [] },
	                unions: { name: 'Unions', items: [] },
	                interfaces: { name: 'Interfaces', items: [] },
	                enums: { name: 'Enums', items: [] },
	                scalars: { name: 'Scalars', items: [] }
	            };
	            var options = [];
	
	            types.forEach(function (t) {
	                if (t instanceof _model.ObjectType) {
	                    var component = _react2.default.createElement(_TypeDocsViews.ObjectDocsView, {
	                        key: t.name,
	                        type: t,
	                        titleOverride: _this2.titleOverrideFor(t)
	                    });
	                    if (t === _this2.props.schema.getQueryType() || t === _this2.props.schema.getMutationType()) {
	                        sections.schema.items.push({ name: t.name, component: component });
	                        options.push(t.name);
	                    } else {
	                        sections.objects.items.push({ name: t.name, component: component });
	                        options.push(t.name);
	                    }
	                }
	                if (t instanceof _model.UnionType) {
	                    options.push(t.name);
	                    sections.unions.items.push({ name: t.name, component: _react2.default.createElement(_TypeDocsViews.UnionDocsView, {
	                            key: t.name,
	                            type: t
	                        }) });
	                }
	                if (t instanceof _model.InterfaceType) {
	                    options.push(t.name);
	                    sections.interfaces.items.push({ name: t.name, component: _react2.default.createElement(_TypeDocsViews.InterfaceDocsView, {
	                            key: t.name,
	                            type: t
	                        }) });
	                }
	                if (t instanceof _model.EnumType) {
	                    options.push(t.name);
	                    sections.enums.items.push({ name: t.name, component: _react2.default.createElement(_TypeDocsViews.EnumDocsView, {
	                            key: t.name,
	                            type: t
	                        }) });
	                }
	                if (t instanceof _model.InputObjectType) {
	                    options.push(t.name);
	                    sections.inputs.items.push({ name: t.name, component: _react2.default.createElement(_TypeDocsViews.InputObjectDocsView, {
	                            key: t.name,
	                            type: t
	                        }) });
	                }
	                if (t instanceof _model.ScalarType) {
	                    options.push(t.name);
	                    sections.scalars.items.push({ name: t.name, component: _react2.default.createElement(_TypeDocsViews.ScalarDocsView, {
	                            key: t.name,
	                            type: t
	                        }) });
	                }
	            });
	
	            Object.keys(sections).forEach(function (key) {
	                var section = sections[key];
	                section.items.sort(function (itemA, itemB) {
	                    if (itemA.name.toUpperCase() < itemB.name.toUpperCase()) {
	                        return -1;
	                    }
	                    if (itemA.name.toUpperCase() > itemB.name.toUpperCase()) {
	                        return 1;
	                    }
	                    return 0;
	                });
	            });
	
	            var customClasses = {
	                input: StyleSheet.selectInput,
	                results: StyleSheet.selectList,
	                listItem: StyleSheet.selectItem,
	                hover: StyleSheet.selectHover
	            };
	
	            return _react2.default.createElement(
	                'div',
	                { className: StyleSheet.wrapper },
	                _react2.default.createElement(
	                    'div',
	                    { className: StyleSheet.sidenav },
	                    _react2.default.createElement(_reactTypeahead.Typeahead, {
	                        options: options,
	                        maxVisible: 6,
	                        placeholder: 'Search types',
	                        customClasses: customClasses,
	                        onOptionSelected: this.handleSelect
	                    }),
	                    _react2.default.createElement('br', null),
	                    Object.keys(sections).map(function (key) {
	                        var section = sections[key];
	                        return section.items.length > 0 ? _react2.default.createElement(_SideNavSectionView2.default, { name: section.name, items: section.items }) : '';
	                    })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: StyleSheet.content },
	                    _react2.default.createElement(
	                        'div',
	                        { className: StyleSheet.container },
	                        Object.keys(sections).map(function (key) {
	                            var section = sections[key];
	                            return section.items.length > 0 ? _react2.default.createElement(_SectionView2.default, { name: section.name, items: section.items }) : '';
	                        })
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'titleOverrideFor',
	        value: function titleOverrideFor(t) {
	            if (t === this.props.schema.getQueryType()) {
	                return 'Query';
	            }
	            if (t === this.props.schema.getMutationType()) {
	                return 'Mutations';
	            }
	
	            return null;
	        }
	    }]);
	
	    return SchemaDocsView;
	}(_react2.default.Component);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var Typeahead = __webpack_require__(4);
	var Tokenizer = __webpack_require__(11);
	
	module.exports = {
	  Typeahead: Typeahead,
	  Tokenizer: Tokenizer
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var Accessor = __webpack_require__(5);
	var React = __webpack_require__(1);
	var TypeaheadSelector = __webpack_require__(6);
	var KeyEvent = __webpack_require__(9);
	var fuzzy = __webpack_require__(10);
	var classNames = __webpack_require__(8);
	
	/**
	 * A "typeahead", an auto-completing text input
	 *
	 * Renders an text input that shows options nearby that you can use the
	 * keyboard or mouse to select.  Requires CSS for MASSIVE DAMAGE.
	 */
	var Typeahead = React.createClass({
	  displayName: 'Typeahead',
	
	  propTypes: {
	    name: React.PropTypes.string,
	    customClasses: React.PropTypes.object,
	    maxVisible: React.PropTypes.number,
	    resultsTruncatedMessage: React.PropTypes.string,
	    options: React.PropTypes.array,
	    allowCustomValues: React.PropTypes.number,
	    initialValue: React.PropTypes.string,
	    value: React.PropTypes.string,
	    placeholder: React.PropTypes.string,
	    disabled: React.PropTypes.bool,
	    textarea: React.PropTypes.bool,
	    inputProps: React.PropTypes.object,
	    onOptionSelected: React.PropTypes.func,
	    onChange: React.PropTypes.func,
	    onKeyDown: React.PropTypes.func,
	    onKeyPress: React.PropTypes.func,
	    onKeyUp: React.PropTypes.func,
	    onFocus: React.PropTypes.func,
	    onBlur: React.PropTypes.func,
	    filterOption: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),
	    searchOptions: React.PropTypes.func,
	    displayOption: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),
	    inputDisplayOption: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),
	    formInputOption: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),
	    defaultClassNames: React.PropTypes.bool,
	    customListComponent: React.PropTypes.oneOfType([React.PropTypes.element, React.PropTypes.func]),
	    showOptionsWhenEmpty: React.PropTypes.bool
	  },
	
	  getDefaultProps: function () {
	    return {
	      options: [],
	      customClasses: {},
	      allowCustomValues: 0,
	      initialValue: "",
	      value: "",
	      placeholder: "",
	      disabled: false,
	      textarea: false,
	      inputProps: {},
	      onOptionSelected: function (option) {},
	      onChange: function (event) {},
	      onKeyDown: function (event) {},
	      onKeyPress: function (event) {},
	      onKeyUp: function (event) {},
	      onFocus: function (event) {},
	      onBlur: function (event) {},
	      filterOption: null,
	      searchOptions: null,
	      inputDisplayOption: null,
	      defaultClassNames: true,
	      customListComponent: TypeaheadSelector,
	      showOptionsWhenEmpty: false,
	      resultsTruncatedMessage: null
	    };
	  },
	
	  getInitialState: function () {
	    return {
	      // The options matching the entry value
	      searchResults: this.getOptionsForValue(this.props.initialValue, this.props.options),
	
	      // This should be called something else, "entryValue"
	      entryValue: this.props.value || this.props.initialValue,
	
	      // A valid typeahead value
	      selection: this.props.value,
	
	      // Index of the selection
	      selectionIndex: null,
	
	      // Keep track of the focus state of the input element, to determine
	      // whether to show options when empty (if showOptionsWhenEmpty is true)
	      isFocused: false,
	
	      // true when focused, false onOptionSelected
	      showResults: false
	    };
	  },
	
	  _shouldSkipSearch: function (input) {
	    var emptyValue = !input || input.trim().length == 0;
	
	    // this.state must be checked because it may not be defined yet if this function
	    // is called from within getInitialState
	    var isFocused = this.state && this.state.isFocused;
	    return !(this.props.showOptionsWhenEmpty && isFocused) && emptyValue;
	  },
	
	  getOptionsForValue: function (value, options) {
	    if (this._shouldSkipSearch(value)) {
	      return [];
	    }
	
	    var searchOptions = this._generateSearchFunction();
	    return searchOptions(value, options);
	  },
	
	  setEntryText: function (value) {
	    this.refs.entry.value = value;
	    this._onTextEntryUpdated();
	  },
	
	  focus: function () {
	    this.refs.entry.focus();
	  },
	
	  _hasCustomValue: function () {
	    if (this.props.allowCustomValues > 0 && this.state.entryValue.length >= this.props.allowCustomValues && this.state.searchResults.indexOf(this.state.entryValue) < 0) {
	      return true;
	    }
	    return false;
	  },
	
	  _getCustomValue: function () {
	    if (this._hasCustomValue()) {
	      return this.state.entryValue;
	    }
	    return null;
	  },
	
	  _renderIncrementalSearchResults: function () {
	    // Nothing has been entered into the textbox
	    if (this._shouldSkipSearch(this.state.entryValue)) {
	      return "";
	    }
	
	    // Something was just selected
	    if (this.state.selection) {
	      return "";
	    }
	
	    return React.createElement(this.props.customListComponent, {
	      ref: 'sel', options: this.props.maxVisible ? this.state.searchResults.slice(0, this.props.maxVisible) : this.state.searchResults,
	      areResultsTruncated: this.props.maxVisible && this.state.searchResults.length > this.props.maxVisible,
	      resultsTruncatedMessage: this.props.resultsTruncatedMessage,
	      onOptionSelected: this._onOptionSelected,
	      allowCustomValues: this.props.allowCustomValues,
	      customValue: this._getCustomValue(),
	      customClasses: this.props.customClasses,
	      selectionIndex: this.state.selectionIndex,
	      defaultClassNames: this.props.defaultClassNames,
	      displayOption: Accessor.generateOptionToStringFor(this.props.displayOption) });
	  },
	
	  getSelection: function () {
	    var index = this.state.selectionIndex;
	    if (this._hasCustomValue()) {
	      if (index === 0) {
	        return this.state.entryValue;
	      } else {
	        index--;
	      }
	    }
	    return this.state.searchResults[index];
	  },
	
	  _onOptionSelected: function (option, event) {
	    var nEntry = this.refs.entry;
	    nEntry.focus();
	
	    var displayOption = Accessor.generateOptionToStringFor(this.props.inputDisplayOption || this.props.displayOption);
	    var optionString = displayOption(option, 0);
	
	    var formInputOption = Accessor.generateOptionToStringFor(this.props.formInputOption || displayOption);
	    var formInputOptionString = formInputOption(option);
	
	    nEntry.value = optionString;
	    this.setState({ searchResults: this.getOptionsForValue(optionString, this.props.options),
	      selection: formInputOptionString,
	      entryValue: optionString,
	      showResults: false });
	    return this.props.onOptionSelected(option, event);
	  },
	
	  _onTextEntryUpdated: function () {
	    var value = this.refs.entry.value;
	    this.setState({ searchResults: this.getOptionsForValue(value, this.props.options),
	      selection: '',
	      entryValue: value });
	  },
	
	  _onEnter: function (event) {
	    var selection = this.getSelection();
	    if (!selection) {
	      return this.props.onKeyDown(event);
	    }
	    return this._onOptionSelected(selection, event);
	  },
	
	  _onEscape: function () {
	    this.setState({
	      selectionIndex: null
	    });
	  },
	
	  _onTab: function (event) {
	    var selection = this.getSelection();
	    var option = selection ? selection : this.state.searchResults.length > 0 ? this.state.searchResults[0] : null;
	
	    if (option === null && this._hasCustomValue()) {
	      option = this._getCustomValue();
	    }
	
	    if (option !== null) {
	      return this._onOptionSelected(option, event);
	    }
	  },
	
	  eventMap: function (event) {
	    var events = {};
	
	    events[KeyEvent.DOM_VK_UP] = this.navUp;
	    events[KeyEvent.DOM_VK_DOWN] = this.navDown;
	    events[KeyEvent.DOM_VK_RETURN] = events[KeyEvent.DOM_VK_ENTER] = this._onEnter;
	    events[KeyEvent.DOM_VK_ESCAPE] = this._onEscape;
	    events[KeyEvent.DOM_VK_TAB] = this._onTab;
	
	    return events;
	  },
	
	  _nav: function (delta) {
	    if (!this._hasHint()) {
	      return;
	    }
	    var newIndex = this.state.selectionIndex === null ? delta == 1 ? 0 : delta : this.state.selectionIndex + delta;
	    var length = this.props.maxVisible ? this.state.searchResults.slice(0, this.props.maxVisible).length : this.state.searchResults.length;
	    if (this._hasCustomValue()) {
	      length += 1;
	    }
	
	    if (newIndex < 0) {
	      newIndex += length;
	    } else if (newIndex >= length) {
	      newIndex -= length;
	    }
	
	    this.setState({ selectionIndex: newIndex });
	  },
	
	  navDown: function () {
	    this._nav(1);
	  },
	
	  navUp: function () {
	    this._nav(-1);
	  },
	
	  _onChange: function (event) {
	    if (this.props.onChange) {
	      this.props.onChange(event);
	    }
	
	    this._onTextEntryUpdated();
	  },
	
	  _onKeyDown: function (event) {
	    // If there are no visible elements, don't perform selector navigation.
	    // Just pass this up to the upstream onKeydown handler.
	    // Also skip if the user is pressing the shift key, since none of our handlers are looking for shift
	    if (!this._hasHint() || event.shiftKey) {
	      return this.props.onKeyDown(event);
	    }
	
	    var handler = this.eventMap()[event.keyCode];
	
	    if (handler) {
	      handler(event);
	    } else {
	      return this.props.onKeyDown(event);
	    }
	    // Don't propagate the keystroke back to the DOM/browser
	    event.preventDefault();
	  },
	
	  componentWillReceiveProps: function (nextProps) {
	    this.setState({
	      searchResults: this.getOptionsForValue(this.state.entryValue, nextProps.options)
	    });
	  },
	
	  render: function () {
	    var inputClasses = {};
	    inputClasses[this.props.customClasses.input] = !!this.props.customClasses.input;
	    var inputClassList = classNames(inputClasses);
	
	    var classes = {
	      typeahead: this.props.defaultClassNames
	    };
	    classes[this.props.className] = !!this.props.className;
	    var classList = classNames(classes);
	
	    var InputElement = this.props.textarea ? 'textarea' : 'input';
	    return React.createElement(
	      'div',
	      { className: classList },
	      this._renderHiddenInput(),
	      React.createElement(InputElement, _extends({ ref: 'entry', type: 'text',
	        disabled: this.props.disabled
	      }, this.props.inputProps, {
	        placeholder: this.props.placeholder,
	        className: inputClassList,
	        value: this.state.entryValue,
	        onChange: this._onChange,
	        onKeyDown: this._onKeyDown,
	        onKeyPress: this.props.onKeyPress,
	        onKeyUp: this.props.onKeyUp,
	        onFocus: this._onFocus,
	        onBlur: this._onBlur
	      })),
	      this.state.showResults && this._renderIncrementalSearchResults()
	    );
	  },
	
	  _onFocus: function (event) {
	    this.setState({ isFocused: true, showResults: true }, function () {
	      this._onTextEntryUpdated();
	    }.bind(this));
	    if (this.props.onFocus) {
	      return this.props.onFocus(event);
	    }
	  },
	
	  _onBlur: function (event) {
	    this.setState({ isFocused: false }, function () {
	      this._onTextEntryUpdated();
	    }.bind(this));
	    if (this.props.onBlur) {
	      return this.props.onBlur(event);
	    }
	  },
	
	  _renderHiddenInput: function () {
	    if (!this.props.name) {
	      return null;
	    }
	
	    return React.createElement('input', {
	      type: 'hidden',
	      name: this.props.name,
	      value: this.state.selection
	    });
	  },
	
	  _generateSearchFunction: function () {
	    var searchOptionsProp = this.props.searchOptions;
	    var filterOptionProp = this.props.filterOption;
	    if (typeof searchOptionsProp === 'function') {
	      if (filterOptionProp !== null) {
	        console.warn('searchOptions prop is being used, filterOption prop will be ignored');
	      }
	      return searchOptionsProp;
	    } else if (typeof filterOptionProp === 'function') {
	      return function (value, options) {
	        return options.filter(function (o) {
	          return filterOptionProp(value, o);
	        });
	      };
	    } else {
	      var mapper;
	      if (typeof filterOptionProp === 'string') {
	        mapper = Accessor.generateAccessor(filterOptionProp);
	      } else {
	        mapper = Accessor.IDENTITY_FN;
	      }
	      return function (value, options) {
	        return fuzzy.filter(value, options, { extract: mapper }).map(function (res) {
	          return options[res.index];
	        });
	      };
	    }
	  },
	
	  _hasHint: function () {
	    return this.state.searchResults.length > 0 || this._hasCustomValue();
	  }
	});
	
	module.exports = Typeahead;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	var Accessor = {
	  IDENTITY_FN: function (input) {
	    return input;
	  },
	
	  generateAccessor: function (field) {
	    return function (object) {
	      return object[field];
	    };
	  },
	
	  generateOptionToStringFor: function (prop) {
	    if (typeof prop === 'string') {
	      return this.generateAccessor(prop);
	    } else if (typeof prop === 'function') {
	      return prop;
	    } else {
	      return this.IDENTITY_FN;
	    }
	  },
	
	  valueForOption: function (option, object) {
	    if (typeof option === 'string') {
	      return object[option];
	    } else if (typeof option === 'function') {
	      return option(object);
	    } else {
	      return object;
	    }
	  }
	};
	
	module.exports = Accessor;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var TypeaheadOption = __webpack_require__(7);
	var classNames = __webpack_require__(8);
	
	/**
	 * Container for the options rendered as part of the autocompletion process
	 * of the typeahead
	 */
	var TypeaheadSelector = React.createClass({
	  displayName: 'TypeaheadSelector',
	
	  propTypes: {
	    options: React.PropTypes.array,
	    allowCustomValues: React.PropTypes.number,
	    customClasses: React.PropTypes.object,
	    customValue: React.PropTypes.string,
	    selectionIndex: React.PropTypes.number,
	    onOptionSelected: React.PropTypes.func,
	    displayOption: React.PropTypes.func.isRequired,
	    defaultClassNames: React.PropTypes.bool,
	    areResultsTruncated: React.PropTypes.bool,
	    resultsTruncatedMessage: React.PropTypes.string
	  },
	
	  getDefaultProps: function () {
	    return {
	      selectionIndex: null,
	      customClasses: {},
	      allowCustomValues: 0,
	      customValue: null,
	      onOptionSelected: function (option) {},
	      defaultClassNames: true
	    };
	  },
	
	  render: function () {
	    // Don't render if there are no options to display
	    if (!this.props.options.length && this.props.allowCustomValues <= 0) {
	      return false;
	    }
	
	    var classes = {
	      "typeahead-selector": this.props.defaultClassNames
	    };
	    classes[this.props.customClasses.results] = this.props.customClasses.results;
	    var classList = classNames(classes);
	
	    // CustomValue should be added to top of results list with different class name
	    var customValue = null;
	    var customValueOffset = 0;
	    if (this.props.customValue !== null) {
	      customValueOffset++;
	      customValue = React.createElement(
	        TypeaheadOption,
	        { ref: this.props.customValue, key: this.props.customValue,
	          hover: this.props.selectionIndex === 0,
	          customClasses: this.props.customClasses,
	          customValue: this.props.customValue,
	          onClick: this._onClick.bind(this, this.props.customValue) },
	        this.props.customValue
	      );
	    }
	
	    var results = this.props.options.map(function (result, i) {
	      var displayString = this.props.displayOption(result, i);
	      var uniqueKey = displayString + '_' + i;
	      return React.createElement(
	        TypeaheadOption,
	        { ref: uniqueKey, key: uniqueKey,
	          hover: this.props.selectionIndex === i + customValueOffset,
	          customClasses: this.props.customClasses,
	          onClick: this._onClick.bind(this, result) },
	        displayString
	      );
	    }, this);
	
	    if (this.props.areResultsTruncated && this.props.resultsTruncatedMessage !== null) {
	      var resultsTruncatedClasses = {
	        "results-truncated": this.props.defaultClassNames
	      };
	      resultsTruncatedClasses[this.props.customClasses.resultsTruncated] = this.props.customClasses.resultsTruncated;
	      var resultsTruncatedClassList = classNames(resultsTruncatedClasses);
	
	      results.push(React.createElement(
	        'li',
	        { key: 'results-truncated', className: resultsTruncatedClassList },
	        this.props.resultsTruncatedMessage
	      ));
	    }
	
	    return React.createElement(
	      'ul',
	      { className: classList },
	      customValue,
	      results
	    );
	  },
	
	  _onClick: function (result, event) {
	    return this.props.onOptionSelected(result, event);
	  }
	
	});
	
	module.exports = TypeaheadSelector;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var classNames = __webpack_require__(8);
	
	/**
	 * A single option within the TypeaheadSelector
	 */
	var TypeaheadOption = React.createClass({
	  displayName: 'TypeaheadOption',
	
	  propTypes: {
	    customClasses: React.PropTypes.object,
	    customValue: React.PropTypes.string,
	    onClick: React.PropTypes.func,
	    children: React.PropTypes.string,
	    hover: React.PropTypes.bool
	  },
	
	  getDefaultProps: function () {
	    return {
	      customClasses: {},
	      onClick: function (event) {
	        event.preventDefault();
	      }
	    };
	  },
	
	  render: function () {
	    var classes = {};
	    classes[this.props.customClasses.hover || "hover"] = !!this.props.hover;
	    classes[this.props.customClasses.listItem] = !!this.props.customClasses.listItem;
	
	    if (this.props.customValue) {
	      classes[this.props.customClasses.customAdd] = !!this.props.customClasses.customAdd;
	    }
	
	    var classList = classNames(classes);
	
	    return React.createElement(
	      'li',
	      { className: classList, onClick: this._onClick },
	      React.createElement(
	        'a',
	        { href: 'javascript: void 0;', className: this._getClasses(), ref: 'anchor' },
	        this.props.children
	      )
	    );
	  },
	
	  _getClasses: function () {
	    var classes = {
	      "typeahead-option": true
	    };
	    classes[this.props.customClasses.listAnchor] = !!this.props.customClasses.listAnchor;
	
	    return classNames(classes);
	  },
	
	  _onClick: function (event) {
	    event.preventDefault();
	    return this.props.onClick(event);
	  }
	});
	
	module.exports = TypeaheadOption;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	function classNames() {
		var classes = '';
		var arg;
	
		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}
	
			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}
	
	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}
	
	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/**
	 * PolyFills make me sad
	 */
	var KeyEvent = KeyEvent || {};
	KeyEvent.DOM_VK_UP = KeyEvent.DOM_VK_UP || 38;
	KeyEvent.DOM_VK_DOWN = KeyEvent.DOM_VK_DOWN || 40;
	KeyEvent.DOM_VK_BACK_SPACE = KeyEvent.DOM_VK_BACK_SPACE || 8;
	KeyEvent.DOM_VK_RETURN = KeyEvent.DOM_VK_RETURN || 13;
	KeyEvent.DOM_VK_ENTER = KeyEvent.DOM_VK_ENTER || 14;
	KeyEvent.DOM_VK_ESCAPE = KeyEvent.DOM_VK_ESCAPE || 27;
	KeyEvent.DOM_VK_TAB = KeyEvent.DOM_VK_TAB || 9;
	
	module.exports = KeyEvent;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/*
	 * Fuzzy
	 * https://github.com/myork/fuzzy
	 *
	 * Copyright (c) 2012 Matt York
	 * Licensed under the MIT license.
	 */
	
	(function() {
	
	var root = this;
	
	var fuzzy = {};
	
	// Use in node or in browser
	if (true) {
	  module.exports = fuzzy;
	} else {
	  root.fuzzy = fuzzy;
	}
	
	// Return all elements of `array` that have a fuzzy
	// match against `pattern`.
	fuzzy.simpleFilter = function(pattern, array) {
	  return array.filter(function(str) {
	    return fuzzy.test(pattern, str);
	  });
	};
	
	// Does `pattern` fuzzy match `str`?
	fuzzy.test = function(pattern, str) {
	  return fuzzy.match(pattern, str) !== null;
	};
	
	// If `pattern` matches `str`, wrap each matching character
	// in `opts.pre` and `opts.post`. If no match, return null
	fuzzy.match = function(pattern, str, opts) {
	  opts = opts || {};
	  var patternIdx = 0
	    , result = []
	    , len = str.length
	    , totalScore = 0
	    , currScore = 0
	    // prefix
	    , pre = opts.pre || ''
	    // suffix
	    , post = opts.post || ''
	    // String to compare against. This might be a lowercase version of the
	    // raw string
	    , compareString =  opts.caseSensitive && str || str.toLowerCase()
	    , ch;
	
	  pattern = opts.caseSensitive && pattern || pattern.toLowerCase();
	
	  // For each character in the string, either add it to the result
	  // or wrap in template if it's the next string in the pattern
	  for(var idx = 0; idx < len; idx++) {
	    ch = str[idx];
	    if(compareString[idx] === pattern[patternIdx]) {
	      ch = pre + ch + post;
	      patternIdx += 1;
	
	      // consecutive characters should increase the score more than linearly
	      currScore += 1 + currScore;
	    } else {
	      currScore = 0;
	    }
	    totalScore += currScore;
	    result[result.length] = ch;
	  }
	
	  // return rendered string if we have a match for every char
	  if(patternIdx === pattern.length) {
	    // if the string is an exact match with pattern, totalScore should be maxed
	    totalScore = (compareString === pattern) ? Infinity : totalScore;
	    return {rendered: result.join(''), score: totalScore};
	  }
	
	  return null;
	};
	
	// The normal entry point. Filters `arr` for matches against `pattern`.
	// It returns an array with matching values of the type:
	//
	//     [{
	//         string:   '<b>lah' // The rendered string
	//       , index:    2        // The index of the element in `arr`
	//       , original: 'blah'   // The original element in `arr`
	//     }]
	//
	// `opts` is an optional argument bag. Details:
	//
	//    opts = {
	//        // string to put before a matching character
	//        pre:     '<b>'
	//
	//        // string to put after matching character
	//      , post:    '</b>'
	//
	//        // Optional function. Input is an entry in the given arr`,
	//        // output should be the string to test `pattern` against.
	//        // In this example, if `arr = [{crying: 'koala'}]` we would return
	//        // 'koala'.
	//      , extract: function(arg) { return arg.crying; }
	//    }
	fuzzy.filter = function(pattern, arr, opts) {
	  if(!arr || arr.length === 0) {
	    return [];
	  }
	  if (typeof pattern !== 'string') {
	    return arr;
	  }
	  opts = opts || {};
	  return arr
	    .reduce(function(prev, element, idx, arr) {
	      var str = element;
	      if(opts.extract) {
	        str = opts.extract(element);
	      }
	      var rendered = fuzzy.match(pattern, str, opts);
	      if(rendered != null) {
	        prev[prev.length] = {
	            string: rendered.rendered
	          , score: rendered.score
	          , index: idx
	          , original: element
	        };
	      }
	      return prev;
	    }, [])
	
	    // Sort by score. Browsers are inconsistent wrt stable/unstable
	    // sorting, so force stable by using the index in the case of tie.
	    // See http://ofb.net/~sethml/is-sort-stable.html
	    .sort(function(a,b) {
	      var compare = b.score - a.score;
	      if(compare) return compare;
	      return a.index - b.index;
	    });
	};
	
	
	}());
	


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var Accessor = __webpack_require__(5);
	var React = __webpack_require__(1);
	var Token = __webpack_require__(12);
	var KeyEvent = __webpack_require__(9);
	var Typeahead = __webpack_require__(4);
	var classNames = __webpack_require__(8);
	
	function _arraysAreDifferent(array1, array2) {
	  if (array1.length != array2.length) {
	    return true;
	  }
	  for (var i = array2.length - 1; i >= 0; i--) {
	    if (array2[i] !== array1[i]) {
	      return true;
	    }
	  }
	}
	
	/**
	 * A typeahead that, when an option is selected, instead of simply filling
	 * the text entry widget, prepends a renderable "token", that may be deleted
	 * by pressing backspace on the beginning of the line with the keyboard.
	 */
	var TypeaheadTokenizer = React.createClass({
	  displayName: 'TypeaheadTokenizer',
	
	  propTypes: {
	    name: React.PropTypes.string,
	    options: React.PropTypes.array,
	    customClasses: React.PropTypes.object,
	    allowCustomValues: React.PropTypes.number,
	    defaultSelected: React.PropTypes.array,
	    initialValue: React.PropTypes.string,
	    placeholder: React.PropTypes.string,
	    disabled: React.PropTypes.bool,
	    inputProps: React.PropTypes.object,
	    onTokenRemove: React.PropTypes.func,
	    onKeyDown: React.PropTypes.func,
	    onKeyPress: React.PropTypes.func,
	    onKeyUp: React.PropTypes.func,
	    onTokenAdd: React.PropTypes.func,
	    onFocus: React.PropTypes.func,
	    onBlur: React.PropTypes.func,
	    filterOption: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),
	    searchOptions: React.PropTypes.func,
	    displayOption: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),
	    formInputOption: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.func]),
	    maxVisible: React.PropTypes.number,
	    resultsTruncatedMessage: React.PropTypes.string,
	    defaultClassNames: React.PropTypes.bool
	  },
	
	  getInitialState: function () {
	    return {
	      // We need to copy this to avoid incorrect sharing
	      // of state across instances (e.g., via getDefaultProps())
	      selected: this.props.defaultSelected.slice(0)
	    };
	  },
	
	  getDefaultProps: function () {
	    return {
	      options: [],
	      defaultSelected: [],
	      customClasses: {},
	      allowCustomValues: 0,
	      initialValue: "",
	      placeholder: "",
	      disabled: false,
	      inputProps: {},
	      defaultClassNames: true,
	      filterOption: null,
	      searchOptions: null,
	      displayOption: function (token) {
	        return token;
	      },
	      formInputOption: null,
	      onKeyDown: function (event) {},
	      onKeyPress: function (event) {},
	      onKeyUp: function (event) {},
	      onFocus: function (event) {},
	      onBlur: function (event) {},
	      onTokenAdd: function () {},
	      onTokenRemove: function () {}
	    };
	  },
	
	  componentWillReceiveProps: function (nextProps) {
	    // if we get new defaultProps, update selected
	    if (_arraysAreDifferent(this.props.defaultSelected, nextProps.defaultSelected)) {
	      this.setState({ selected: nextProps.defaultSelected.slice(0) });
	    }
	  },
	
	  focus: function () {
	    this.refs.typeahead.focus();
	  },
	
	  getSelectedTokens: function () {
	    return this.state.selected;
	  },
	
	  // TODO: Support initialized tokens
	  //
	  _renderTokens: function () {
	    var tokenClasses = {};
	    tokenClasses[this.props.customClasses.token] = !!this.props.customClasses.token;
	    var classList = classNames(tokenClasses);
	    var result = this.state.selected.map(function (selected) {
	      var displayString = Accessor.valueForOption(this.props.displayOption, selected);
	      var value = Accessor.valueForOption(this.props.formInputOption || this.props.displayOption, selected);
	      return React.createElement(
	        Token,
	        { key: displayString, className: classList,
	          onRemove: this._removeTokenForValue,
	          object: selected,
	          value: value,
	          name: this.props.name },
	        displayString
	      );
	    }, this);
	    return result;
	  },
	
	  _getOptionsForTypeahead: function () {
	    // return this.props.options without this.selected
	    return this.props.options;
	  },
	
	  _onKeyDown: function (event) {
	    // We only care about intercepting backspaces
	    if (event.keyCode === KeyEvent.DOM_VK_BACK_SPACE) {
	      return this._handleBackspace(event);
	    }
	    this.props.onKeyDown(event);
	  },
	
	  _handleBackspace: function (event) {
	    // No tokens
	    if (!this.state.selected.length) {
	      return;
	    }
	
	    // Remove token ONLY when bksp pressed at beginning of line
	    // without a selection
	    var entry = this.refs.typeahead.refs.entry;
	    if (entry.selectionStart == entry.selectionEnd && entry.selectionStart == 0) {
	      this._removeTokenForValue(this.state.selected[this.state.selected.length - 1]);
	      event.preventDefault();
	    }
	  },
	
	  _removeTokenForValue: function (value) {
	    var index = this.state.selected.indexOf(value);
	    if (index == -1) {
	      return;
	    }
	
	    this.state.selected.splice(index, 1);
	    this.setState({ selected: this.state.selected });
	    this.props.onTokenRemove(value);
	    return;
	  },
	
	  _addTokenForValue: function (value) {
	    if (this.state.selected.indexOf(value) != -1) {
	      return;
	    }
	    this.state.selected.push(value);
	    this.setState({ selected: this.state.selected });
	    this.refs.typeahead.setEntryText("");
	    this.props.onTokenAdd(value);
	  },
	
	  render: function () {
	    var classes = {};
	    classes[this.props.customClasses.typeahead] = !!this.props.customClasses.typeahead;
	    var classList = classNames(classes);
	    var tokenizerClasses = [this.props.defaultClassNames && "typeahead-tokenizer"];
	    tokenizerClasses[this.props.className] = !!this.props.className;
	    var tokenizerClassList = classNames(tokenizerClasses);
	
	    return React.createElement(
	      'div',
	      { className: tokenizerClassList },
	      this._renderTokens(),
	      React.createElement(Typeahead, { ref: 'typeahead',
	        className: classList,
	        placeholder: this.props.placeholder,
	        disabled: this.props.disabled,
	        inputProps: this.props.inputProps,
	        allowCustomValues: this.props.allowCustomValues,
	        customClasses: this.props.customClasses,
	        options: this._getOptionsForTypeahead(),
	        initialValue: this.props.initialValue,
	        maxVisible: this.props.maxVisible,
	        resultsTruncatedMessage: this.props.resultsTruncatedMessage,
	        onOptionSelected: this._addTokenForValue,
	        onKeyDown: this._onKeyDown,
	        onKeyPress: this.props.onKeyPress,
	        onKeyUp: this.props.onKeyUp,
	        onFocus: this.props.onFocus,
	        onBlur: this.props.onBlur,
	        displayOption: this.props.displayOption,
	        defaultClassNames: this.props.defaultClassNames,
	        filterOption: this.props.filterOption,
	        searchOptions: this.props.searchOptions })
	    );
	  }
	});
	
	module.exports = TypeaheadTokenizer;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var classNames = __webpack_require__(8);
	
	/**
	 * Encapsulates the rendering of an option that has been "selected" in a
	 * TypeaheadTokenizer
	 */
	var Token = React.createClass({
	  displayName: 'Token',
	
	  propTypes: {
	    className: React.PropTypes.string,
	    name: React.PropTypes.string,
	    children: React.PropTypes.string,
	    object: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object]),
	    onRemove: React.PropTypes.func,
	    value: React.PropTypes.string
	  },
	
	  render: function () {
	    var className = classNames(["typeahead-token", this.props.className]);
	
	    return React.createElement(
	      'div',
	      { className: className },
	      this._renderHiddenInput(),
	      this.props.children,
	      this._renderCloseButton()
	    );
	  },
	
	  _renderHiddenInput: function () {
	    // If no name was set, don't create a hidden input
	    if (!this.props.name) {
	      return null;
	    }
	
	    return React.createElement('input', {
	      type: 'hidden',
	      name: this.props.name + '[]',
	      value: this.props.value || this.props.object
	    });
	  },
	
	  _renderCloseButton: function () {
	    if (!this.props.onRemove) {
	      return "";
	    }
	    return React.createElement(
	      'a',
	      { className: 'typeahead-token-close', href: '#', onClick: function (event) {
	          this.props.onRemove(this.props.object);
	          event.preventDefault();
	        }.bind(this) },
	      '×'
	    );
	  }
	});
	
	module.exports = Token;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TYPE_KINDS = exports.TYPE_KINDS = ['SCALAR', 'INTERFACE', 'OBJECT', 'ENUM', 'INPUT_OBJECT', 'UNION'];
	
	var Schema = exports.Schema = function () {
	    function Schema(introspectionResult) {
	        var _this = this;
	
	        _classCallCheck(this, Schema);
	
	        if (!introspectionResult.__schema) {
	            throw new Error('Function  precondition failed: introspectionResult.__schema');
	        }
	
	        if (!Array.isArray(introspectionResult.__schema.types)) {
	            throw new Error('Function  precondition failed: Array.isArray(introspectionResult.__schema.types)');
	        }
	
	        if (!introspectionResult.__schema.queryType) {
	            throw new Error('Function  precondition failed: introspectionResult.__schema.queryType');
	        }
	
	        if (!(introspectionResult.__schema.mutationType === null || typeof introspectionResult.__schema.mutationType.name === 'string')) {
	            throw new Error('Function  precondition failed: introspectionResult.__schema.mutationType === null || typeof introspectionResult.__schema.mutationType.name === \'string\'');
	        }
	
	        this.types = {};
	        introspectionResult.__schema.types.forEach(function (t) {
	            if (!(typeof t.name === 'string')) {
	                throw new Error('Function  precondition failed: typeof t.name === \'string\'');
	            }
	
	            _this.types[t.name] = Type.fromIntrospectionType(t);
	        });
	
	        this.queryTypeId = introspectionResult.__schema.queryType.name;
	
	        if (introspectionResult.__schema.mutationType) {
	            this.mutationTypeId = introspectionResult.__schema.mutationType.name;
	        } else {
	            this.mutationTypeId = null;
	        }
	    }
	
	    _createClass(Schema, [{
	        key: 'getQueryType',
	        value: function getQueryType() {
	            var queryType = this.types[this.queryTypeId];
	
	            if (queryType instanceof ObjectType) {
	                return queryType;
	            } else {
	                throw new Error('Query type must be an ObjectType');
	            }
	        }
	    }, {
	        key: 'getMutationType',
	        value: function getMutationType() {
	            if (!this.mutationTypeId) {
	                return null;
	            }
	
	            var mutationType = this.types[this.mutationTypeId];
	
	            if (mutationType instanceof ObjectType) {
	                return mutationType;
	            } else {
	                throw new Error('Mutation type must be an ObjectType');
	            }
	        }
	    }]);
	
	    return Schema;
	}();
	
	var Type = exports.Type = function () {
	    _createClass(Type, null, [{
	        key: 'fromIntrospectionType',
	        value: function fromIntrospectionType(introspectionType) {
	            if (introspectionType.kind === 'OBJECT') {
	                return new ObjectType(introspectionType);
	            } else if (introspectionType.kind === 'SCALAR') {
	                return new ScalarType(introspectionType);
	            } else if (introspectionType.kind === 'INTERFACE') {
	                return new InterfaceType(introspectionType);
	            } else if (introspectionType.kind === 'ENUM') {
	                return new EnumType(introspectionType);
	            } else if (introspectionType.kind === 'INPUT_OBJECT') {
	                return new InputObjectType(introspectionType);
	            } else if (introspectionType.kind === 'UNION') {
	                return new UnionType(introspectionType);
	            } else {
	                throw new Error('Unsupported type kind: ' + introspectionType.kind);
	            }
	        }
	    }]);
	
	    function Type(introspectionType) {
	        _classCallCheck(this, Type);
	
	        if (!(this.constructor !== Type)) {
	            throw new Error('Function  precondition failed: this.constructor !== Type');
	        }
	
	        if (!(typeof introspectionType.name === 'string')) {
	            throw new Error('Function  precondition failed: typeof introspectionType.name === \'string\'');
	        }
	
	        if (!(introspectionType.description === null || typeof introspectionType.description === 'string')) {
	            throw new Error('Function  precondition failed: introspectionType.description === null || typeof introspectionType.description === \'string\'');
	        }
	
	        this.name = introspectionType.name;
	        this.description = introspectionType.description;
	    }
	
	    return Type;
	}();
	
	var ObjectType = exports.ObjectType = function (_Type) {
	    _inherits(ObjectType, _Type);
	
	    function ObjectType(introspectionType) {
	        _classCallCheck(this, ObjectType);
	
	        if (!(introspectionType.kind === 'OBJECT')) {
	            throw new Error('Function  precondition failed: introspectionType.kind === \'OBJECT\'');
	        }
	
	        if (!Array.isArray(introspectionType.fields)) {
	            throw new Error('Function  precondition failed: Array.isArray(introspectionType.fields)');
	        }
	
	        if (!(introspectionType.interfaces === null || Array.isArray(introspectionType.interfaces))) {
	            throw new Error('Function  precondition failed: introspectionType.interfaces === null || Array.isArray(introspectionType.interfaces)');
	        }
	
	        var _this2 = _possibleConstructorReturn(this, (ObjectType.__proto__ || Object.getPrototypeOf(ObjectType)).call(this, introspectionType));
	
	        _this2.fields = introspectionType.fields.map(function (f) {
	            return new Field(f);
	        });
	
	        if (introspectionType.interfaces) {
	            _this2.interfaces = introspectionType.interfaces.map(function (r) {
	                return TypeRef.fromIntrospectionRef(r);
	            });
	        } else {
	            _this2.interfaces = [];
	        }
	        return _this2;
	    }
	
	    return ObjectType;
	}(Type);
	
	var UnionType = exports.UnionType = function (_Type2) {
	    _inherits(UnionType, _Type2);
	
	    function UnionType(introspectionType) {
	        _classCallCheck(this, UnionType);
	
	        if (!(introspectionType.kind === 'UNION')) {
	            throw new Error('Function  precondition failed: introspectionType.kind === \'UNION\'');
	        }
	
	        if (!Array.isArray(introspectionType.possibleTypes)) {
	            throw new Error('Function  precondition failed: Array.isArray(introspectionType.possibleTypes)');
	        }
	
	        var _this3 = _possibleConstructorReturn(this, (UnionType.__proto__ || Object.getPrototypeOf(UnionType)).call(this, introspectionType));
	
	        _this3.possibleTypes = introspectionType.possibleTypes.map(function (r) {
	            return TypeRef.fromIntrospectionRef(r);
	        });
	        return _this3;
	    }
	
	    return UnionType;
	}(Type);
	
	var ScalarType = exports.ScalarType = function (_Type3) {
	    _inherits(ScalarType, _Type3);
	
	    function ScalarType(introspectionType) {
	        _classCallCheck(this, ScalarType);
	
	        if (!(introspectionType.kind === 'SCALAR')) {
	            throw new Error('Function  precondition failed: introspectionType.kind === \'SCALAR\'');
	        }
	
	        return _possibleConstructorReturn(this, (ScalarType.__proto__ || Object.getPrototypeOf(ScalarType)).call(this, introspectionType));
	    }
	
	    return ScalarType;
	}(Type);
	
	var InterfaceType = exports.InterfaceType = function (_Type4) {
	    _inherits(InterfaceType, _Type4);
	
	    function InterfaceType(introspectionType) {
	        _classCallCheck(this, InterfaceType);
	
	        if (!(introspectionType.kind === 'INTERFACE')) {
	            throw new Error('Function  precondition failed: introspectionType.kind === \'INTERFACE\'');
	        }
	
	        if (!Array.isArray(introspectionType.fields)) {
	            throw new Error('Function  precondition failed: Array.isArray(introspectionType.fields)');
	        }
	
	        if (!Array.isArray(introspectionType.possibleTypes)) {
	            throw new Error('Function  precondition failed: Array.isArray(introspectionType.possibleTypes)');
	        }
	
	        var _this5 = _possibleConstructorReturn(this, (InterfaceType.__proto__ || Object.getPrototypeOf(InterfaceType)).call(this, introspectionType));
	
	        _this5.fields = introspectionType.fields.map(function (f) {
	            return new Field(f);
	        });
	        _this5.possibleTypes = introspectionType.possibleTypes.map(function (r) {
	            return TypeRef.fromIntrospectionRef(r);
	        });
	        return _this5;
	    }
	
	    return InterfaceType;
	}(Type);
	
	var EnumType = exports.EnumType = function (_Type5) {
	    _inherits(EnumType, _Type5);
	
	    function EnumType(introspectionType) {
	        _classCallCheck(this, EnumType);
	
	        if (!(introspectionType.kind === 'ENUM')) {
	            throw new Error('Function  precondition failed: introspectionType.kind === \'ENUM\'');
	        }
	
	        if (!Array.isArray(introspectionType.enumValues)) {
	            throw new Error('Function  precondition failed: Array.isArray(introspectionType.enumValues)');
	        }
	
	        var _this6 = _possibleConstructorReturn(this, (EnumType.__proto__ || Object.getPrototypeOf(EnumType)).call(this, introspectionType));
	
	        _this6.enumValues = introspectionType.enumValues.map(function (v) {
	            return new EnumValue(v);
	        });
	        return _this6;
	    }
	
	    return EnumType;
	}(Type);
	
	var InputObjectType = exports.InputObjectType = function (_Type6) {
	    _inherits(InputObjectType, _Type6);
	
	    function InputObjectType(introspectionType) {
	        _classCallCheck(this, InputObjectType);
	
	        if (!(introspectionType.kind === 'INPUT_OBJECT')) {
	            throw new Error('Function  precondition failed: introspectionType.kind === \'INPUT_OBJECT\'');
	        }
	
	        if (!Array.isArray(introspectionType.inputFields)) {
	            throw new Error('Function  precondition failed: Array.isArray(introspectionType.inputFields)');
	        }
	
	        var _this7 = _possibleConstructorReturn(this, (InputObjectType.__proto__ || Object.getPrototypeOf(InputObjectType)).call(this, introspectionType));
	
	        _this7.inputFields = introspectionType.inputFields.map(function (f) {
	            return new InputValue(f);
	        });
	        return _this7;
	    }
	
	    return InputObjectType;
	}(Type);
	
	var Field = exports.Field = function Field(introspectionField) {
	    _classCallCheck(this, Field);
	
	    if (!(typeof introspectionField.name === 'string')) {
	        throw new Error('Function  precondition failed: typeof introspectionField.name === \'string\'');
	    }
	
	    if (!(introspectionField.description === null || typeof introspectionField.description === 'string')) {
	        throw new Error('Function  precondition failed: introspectionField.description === null || typeof introspectionField.description === \'string\'');
	    }
	
	    if (!introspectionField.type) {
	        throw new Error('Function  precondition failed: introspectionField.type');
	    }
	
	    if (!Array.isArray(introspectionField.args)) {
	        throw new Error('Function  precondition failed: Array.isArray(introspectionField.args)');
	    }
	
	    this.name = introspectionField.name;
	    this.description = introspectionField.description;
	    this.args = introspectionField.args.map(function (a) {
	        return new InputValue(a);
	    });
	    this.type = TypeRef.fromIntrospectionRef(introspectionField.type);
	};
	
	var InputValue = exports.InputValue = function InputValue(introspectionValue) {
	    _classCallCheck(this, InputValue);
	
	    if (!(typeof introspectionValue.name === 'string')) {
	        throw new Error('Function  precondition failed: typeof introspectionValue.name === \'string\'');
	    }
	
	    if (!(introspectionValue.description === null || typeof introspectionValue.description === 'string')) {
	        throw new Error('Function  precondition failed: introspectionValue.description === null || typeof introspectionValue.description === \'string\'');
	    }
	
	    if (!introspectionValue.type) {
	        throw new Error('Function  precondition failed: introspectionValue.type');
	    }
	
	    if (!(introspectionValue.defaultValue !== undefined)) {
	        throw new Error('Function  precondition failed: introspectionValue.defaultValue !== undefined');
	    }
	
	    this.name = introspectionValue.name;
	    this.type = TypeRef.fromIntrospectionRef(introspectionValue.type);
	    this.description = introspectionValue.description;
	    this.defaultValue = introspectionValue.defaultValue;
	};
	
	var TypeRef = exports.TypeRef = function () {
	    function TypeRef() {
	        _classCallCheck(this, TypeRef);
	
	        if (!(this.constructor !== TypeRef)) {
	            throw new Error('Function  precondition failed: this.constructor !== TypeRef');
	        }
	    }
	
	    _createClass(TypeRef, null, [{
	        key: 'fromIntrospectionRef',
	        value: function fromIntrospectionRef(introspectionRef) {
	            if (introspectionRef.kind === 'NON_NULL') {
	                return new NonNullTypeRef(introspectionRef);
	            } else if (introspectionRef.kind === 'LIST') {
	                return new ListTypeRef(introspectionRef);
	            } else if (TYPE_KINDS.indexOf(introspectionRef.kind) !== -1) {
	                return new NamedTypeRef(introspectionRef);
	            } else {
	                throw new Error('Unsupported type ref kind: ' + introspectionRef.kind);
	            }
	        }
	    }]);
	
	    return TypeRef;
	}();
	
	var NonNullTypeRef = exports.NonNullTypeRef = function (_TypeRef) {
	    _inherits(NonNullTypeRef, _TypeRef);
	
	    function NonNullTypeRef(introspectionRef) {
	        _classCallCheck(this, NonNullTypeRef);
	
	        if (!introspectionRef.ofType) {
	            throw new Error('Function  precondition failed: introspectionRef.ofType');
	        }
	
	        var _this8 = _possibleConstructorReturn(this, (NonNullTypeRef.__proto__ || Object.getPrototypeOf(NonNullTypeRef)).call(this));
	
	        _this8.ofType = TypeRef.fromIntrospectionRef(introspectionRef.ofType);
	        return _this8;
	    }
	
	    return NonNullTypeRef;
	}(TypeRef);
	
	var NamedTypeRef = exports.NamedTypeRef = function (_TypeRef2) {
	    _inherits(NamedTypeRef, _TypeRef2);
	
	    function NamedTypeRef(introspectionRef) {
	        _classCallCheck(this, NamedTypeRef);
	
	        if (!(typeof introspectionRef.name === 'string')) {
	            throw new Error('Function  precondition failed: typeof introspectionRef.name === \'string\'');
	        }
	
	        var _this9 = _possibleConstructorReturn(this, (NamedTypeRef.__proto__ || Object.getPrototypeOf(NamedTypeRef)).call(this));
	
	        _this9.typeName = introspectionRef.name;
	        return _this9;
	    }
	
	    return NamedTypeRef;
	}(TypeRef);
	
	var ListTypeRef = exports.ListTypeRef = function (_TypeRef3) {
	    _inherits(ListTypeRef, _TypeRef3);
	
	    function ListTypeRef(introspectionRef) {
	        _classCallCheck(this, ListTypeRef);
	
	        if (!introspectionRef.ofType) {
	            throw new Error('Function  precondition failed: introspectionRef.ofType');
	        }
	
	        var _this10 = _possibleConstructorReturn(this, (ListTypeRef.__proto__ || Object.getPrototypeOf(ListTypeRef)).call(this));
	
	        _this10.ofType = TypeRef.fromIntrospectionRef(introspectionRef.ofType);
	        return _this10;
	    }
	
	    return ListTypeRef;
	}(TypeRef);
	
	var EnumValue = exports.EnumValue = function EnumValue(introspectionValue) {
	    _classCallCheck(this, EnumValue);
	
	    if (!(typeof introspectionValue.name === 'string')) {
	        throw new Error('Function  precondition failed: typeof introspectionValue.name === \'string\'');
	    }
	
	    if (!(introspectionValue.description === null || typeof introspectionValue.description === 'string')) {
	        throw new Error('Function  precondition failed: introspectionValue.description === null || typeof introspectionValue.description === \'string\'');
	    }
	
	    if (!(typeof introspectionValue.isDeprecated === 'boolean')) {
	        throw new Error('Function  precondition failed: typeof introspectionValue.isDeprecated === \'boolean\'');
	    }
	
	    if (!(!introspectionValue.isDeprecated || typeof introspectionValue.deprecationReason === 'string')) {
	        throw new Error('Function  precondition failed: !introspectionValue.isDeprecated || typeof introspectionValue.deprecationReason === \'string\'');
	    }
	
	    if (!(introspectionValue.isDeprecated || introspectionValue.deprecationReason === null)) {
	        throw new Error('Function  precondition failed: introspectionValue.isDeprecated || introspectionValue.deprecationReason === null');
	    }
	
	    this.name = introspectionValue.name;
	    this.description = introspectionValue.description;
	    this.isDeprecated = introspectionValue.isDeprecated;
	    this.deprecationReason = introspectionValue.deprecationReason;
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getReferencesInSchema = getReferencesInSchema;
	
	var _model = __webpack_require__(13);
	
	function getReferencesInSchema(schema) {
	    var visitQueue = [];
	    var visited = [];
	
	    visitQueue.push(schema.getQueryType().name);
	
	    var mutationType = schema.getMutationType();
	    if (mutationType) {
	        visitQueue.push(mutationType.name);
	    }
	
	    while (visitQueue.length) {
	        var typeId = visitQueue.shift();
	        if (visited.indexOf(typeId) !== -1) {
	            continue;
	        }
	
	        var type = schema.types[typeId];
	
	        if (!type) {
	            throw new Error('Type ' + typeId + ' not found in schema');
	        }
	
	        var newRefs = getReferencesInType(type);
	
	        visited.push(typeId);
	
	        [].push.apply(visitQueue, Object.keys(newRefs));
	    }
	
	    return visited;
	}
	
	function getReferencesInType(type) {
	    var refs = {};
	    addTypeToBag(type, refs);
	
	    if (type instanceof _model.ObjectType) {
	        type.fields.forEach(function (f) {
	            return getReferencesInField(f, refs);
	        });
	        type.interfaces.forEach(function (r) {
	            return addTypeRefToBag(r, refs);
	        });
	    }
	
	    if (type instanceof _model.InterfaceType) {
	        type.fields.forEach(function (f) {
	            return getReferencesInField(f, refs);
	        });
	        type.possibleTypes.forEach(function (r) {
	            return addTypeRefToBag(r, refs);
	        });
	    }
	
	    if (type instanceof _model.UnionType) {
	        type.possibleTypes.forEach(function (r) {
	            return addTypeRefToBag(r, refs);
	        });
	    }
	
	    if (type instanceof _model.InputObjectType) {
	        type.inputFields.forEach(function (iv) {
	            return addTypeRefToBag(iv.type, refs);
	        });
	    }
	
	    return refs;
	}
	
	function getReferencesInField(field, refs) {
	    addTypeRefToBag(field.type, refs);
	
	    field.args.forEach(function (arg) {
	        return addTypeRefToBag(arg.type, refs);
	    });
	}
	
	function addTypeRefToBag(typeRef, refs) {
	    if (typeRef instanceof _model.NonNullTypeRef) {
	        addTypeRefToBag(typeRef.ofType, refs);
	    } else if (typeRef instanceof _model.ListTypeRef) {
	        addTypeRefToBag(typeRef.ofType, refs);
	    } else if (typeRef instanceof _model.NamedTypeRef) {
	        refs[typeRef.typeName] = (refs[typeRef.typeName] || 0) + 1;
	    } else {
	        throw new Error('Unknown type ref: ' + typeRef.toString());
	    }
	}
	
	function addTypeToBag(type, refs) {
	    refs[type.name] = (refs[type.name] || 0) + 1;
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.InputObjectDocsView = exports.ScalarDocsView = exports.EnumDocsView = exports.InterfaceDocsView = exports.UnionDocsView = exports.ObjectDocsView = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _model = __webpack_require__(13);
	
	var _DescriptionView = __webpack_require__(16);
	
	var _FieldView = __webpack_require__(22);
	
	var _TypeRefView = __webpack_require__(24);
	
	var _FieldArgumentsTableView = __webpack_require__(30);
	
	var _TypeDocsViews = __webpack_require__(35);
	
	var StyleSheet = _interopRequireWildcard(_TypeDocsViews);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ObjectDocsView = exports.ObjectDocsView = function (_React$Component) {
	    _inherits(ObjectDocsView, _React$Component);
	
	    function ObjectDocsView() {
	        _classCallCheck(this, ObjectDocsView);
	
	        return _possibleConstructorReturn(this, (ObjectDocsView.__proto__ || Object.getPrototypeOf(ObjectDocsView)).apply(this, arguments));
	    }
	
	    _createClass(ObjectDocsView, [{
	        key: 'render',
	        value: function render() {
	            var type = this.props.type;
	            return _react2.default.createElement(
	                'div',
	                { className: StyleSheet.type },
	                renderTitle(type.name, this.props.titleOverride),
	                renderDescription(type.description),
	                renderInterfaces(type.interfaces),
	                renderFields(type.fields)
	            );
	        }
	    }]);
	
	    return ObjectDocsView;
	}(_react2.default.Component);
	
	ObjectDocsView.defaultProps = {
	    titleOverride: null
	};
	
	var UnionDocsView = exports.UnionDocsView = function (_React$Component2) {
	    _inherits(UnionDocsView, _React$Component2);
	
	    function UnionDocsView() {
	        _classCallCheck(this, UnionDocsView);
	
	        return _possibleConstructorReturn(this, (UnionDocsView.__proto__ || Object.getPrototypeOf(UnionDocsView)).apply(this, arguments));
	    }
	
	    _createClass(UnionDocsView, [{
	        key: 'render',
	        value: function render() {
	            var type = this.props.type;
	            return _react2.default.createElement(
	                'div',
	                { className: StyleSheet.type },
	                renderTitle(type.name),
	                renderDescription(type.description),
	                renderPossibleTypes(type.possibleTypes)
	            );
	        }
	    }]);
	
	    return UnionDocsView;
	}(_react2.default.Component);
	
	var InterfaceDocsView = exports.InterfaceDocsView = function (_React$Component3) {
	    _inherits(InterfaceDocsView, _React$Component3);
	
	    function InterfaceDocsView() {
	        _classCallCheck(this, InterfaceDocsView);
	
	        return _possibleConstructorReturn(this, (InterfaceDocsView.__proto__ || Object.getPrototypeOf(InterfaceDocsView)).apply(this, arguments));
	    }
	
	    _createClass(InterfaceDocsView, [{
	        key: 'render',
	        value: function render() {
	            var type = this.props.type;
	            return _react2.default.createElement(
	                'div',
	                { className: StyleSheet.type },
	                renderTitle(type.name),
	                renderDescription(type.description),
	                renderImplementors(type.possibleTypes),
	                renderFields(type.fields)
	            );
	        }
	    }]);
	
	    return InterfaceDocsView;
	}(_react2.default.Component);
	
	var EnumDocsView = exports.EnumDocsView = function (_React$Component4) {
	    _inherits(EnumDocsView, _React$Component4);
	
	    function EnumDocsView() {
	        _classCallCheck(this, EnumDocsView);
	
	        return _possibleConstructorReturn(this, (EnumDocsView.__proto__ || Object.getPrototypeOf(EnumDocsView)).apply(this, arguments));
	    }
	
	    _createClass(EnumDocsView, [{
	        key: 'render',
	        value: function render() {
	            var type = this.props.type;
	            return _react2.default.createElement(
	                'div',
	                { className: StyleSheet.type },
	                renderTitle(type.name),
	                renderDescription(type.description),
	                renderEnumValues(type.enumValues)
	            );
	        }
	    }]);
	
	    return EnumDocsView;
	}(_react2.default.Component);
	
	var ScalarDocsView = exports.ScalarDocsView = function (_React$Component5) {
	    _inherits(ScalarDocsView, _React$Component5);
	
	    function ScalarDocsView() {
	        _classCallCheck(this, ScalarDocsView);
	
	        return _possibleConstructorReturn(this, (ScalarDocsView.__proto__ || Object.getPrototypeOf(ScalarDocsView)).apply(this, arguments));
	    }
	
	    _createClass(ScalarDocsView, [{
	        key: 'render',
	        value: function render() {
	            var type = this.props.type;
	            return _react2.default.createElement(
	                'div',
	                { className: StyleSheet.type },
	                renderTitle(type.name),
	                renderDescription(type.description)
	            );
	        }
	    }]);
	
	    return ScalarDocsView;
	}(_react2.default.Component);
	
	var InputObjectDocsView = exports.InputObjectDocsView = function (_React$Component6) {
	    _inherits(InputObjectDocsView, _React$Component6);
	
	    function InputObjectDocsView() {
	        _classCallCheck(this, InputObjectDocsView);
	
	        return _possibleConstructorReturn(this, (InputObjectDocsView.__proto__ || Object.getPrototypeOf(InputObjectDocsView)).apply(this, arguments));
	    }
	
	    _createClass(InputObjectDocsView, [{
	        key: 'render',
	        value: function render() {
	            var type = this.props.type;
	
	            return _react2.default.createElement(
	                'div',
	                { className: StyleSheet.type },
	                renderTitle(type.name),
	                renderDescription(type.description),
	                _react2.default.createElement(_FieldArgumentsTableView.FieldArgumentsTableView, {
	                    args: type.inputFields
	                })
	            );
	        }
	    }]);
	
	    return InputObjectDocsView;
	}(_react2.default.Component);
	
	function renderTitle(typeName) {
	    var titleOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	    return _react2.default.createElement(
	        'h3',
	        { className: StyleSheet.heading },
	        _react2.default.createElement('a', { name: typeName }),
	        titleOverride || typeName
	    );
	}
	
	function renderDescription(description) {
	    if (!description) {
	        return null;
	    }
	
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_DescriptionView.DescriptionView, { description: description })
	    );
	}
	
	function renderFields(fields) {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'div',
	            { className: StyleSheet.subHeading },
	            'Fields'
	        ),
	        fields.map(function (f) {
	            return _react2.default.createElement(_FieldView.FieldView, { key: f.name, field: f });
	        })
	    );
	}
	
	function renderInterfaces(interfaces) {
	    if (!interfaces.length) {
	        return null;
	    }
	
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'div',
	            { className: StyleSheet.subHeading },
	            'Implements'
	        ),
	        _react2.default.createElement(
	            'ul',
	            { className: StyleSheet.interfacesList },
	            interfaces.map(function (r, i) {
	                return _react2.default.createElement(
	                    'li',
	                    { key: i },
	                    _react2.default.createElement(_TypeRefView.TypeRefView, { key: i, typeRef: r })
	                );
	            })
	        )
	    );
	}
	
	function renderPossibleTypes(possibleTypes) {
	    if (!possibleTypes.length) {
	        return null;
	    }
	
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'div',
	            { className: StyleSheet.subHeading },
	            'Possible Types'
	        ),
	        _react2.default.createElement(
	            'ul',
	            { className: StyleSheet.interfacesList },
	            possibleTypes.map(function (r, i) {
	                return _react2.default.createElement(
	                    'li',
	                    { key: i },
	                    _react2.default.createElement(_TypeRefView.TypeRefView, { key: i, typeRef: r })
	                );
	            })
	        )
	    );
	}
	
	function renderImplementors(possibleTypes) {
	    if (!possibleTypes.length) {
	        return null;
	    }
	
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'div',
	            { className: StyleSheet.subHeading },
	            'Implemented by'
	        ),
	        _react2.default.createElement(
	            'ul',
	            { className: StyleSheet.interfacesList },
	            possibleTypes.map(function (r, i) {
	                return _react2.default.createElement(
	                    'li',
	                    { key: i },
	                    _react2.default.createElement(_TypeRefView.TypeRefView, { key: i, typeRef: r })
	                );
	            })
	        )
	    );
	}
	
	function renderEnumValues(enumValues) {
	    if (!enumValues.length) {
	        return null;
	    }
	
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            'div',
	            { className: StyleSheet.subHeading },
	            'Possible Enum Values'
	        ),
	        _react2.default.createElement(
	            'table',
	            null,
	            _react2.default.createElement(
	                'tbody',
	                null,
	                enumValues.map(function (v) {
	                    return _react2.default.createElement(
	                        'tr',
	                        {
	                            key: v.name,
	                            className: StyleSheet.enumRow
	                        },
	                        _react2.default.createElement(
	                            'td',
	                            {
	                                className: StyleSheet.enumName
	                            },
	                            v.name
	                        ),
	                        _react2.default.createElement(
	                            'td',
	                            null,
	                            v.description && _react2.default.createElement(_DescriptionView.DescriptionView, { description: v.description })
	                        )
	                    );
	                })
	            )
	        )
	    );
	}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DescriptionView = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _marked = __webpack_require__(17);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	var _DescriptionView = __webpack_require__(18);
	
	var StyleSheet = _interopRequireWildcard(_DescriptionView);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DescriptionView = exports.DescriptionView = function (_React$Component) {
	    _inherits(DescriptionView, _React$Component);
	
	    function DescriptionView() {
	        _classCallCheck(this, DescriptionView);
	
	        return _possibleConstructorReturn(this, (DescriptionView.__proto__ || Object.getPrototypeOf(DescriptionView)).apply(this, arguments));
	    }
	
	    _createClass(DescriptionView, [{
	        key: 'render',
	        value: function render() {
	            var html = (0, _marked2.default)(this.props.description);
	
	            return _react2.default.createElement('div', {
	                className: [StyleSheet.container, this.props.className].join(' '),
	                dangerouslySetInnerHTML: { __html: html }
	            });
	        }
	    }]);
	
	    return DescriptionView;
	}(_react2.default.Component);
	
	DescriptionView.defaultProps = {
	    className: ''
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */
	
	;(function() {
	
	/**
	 * Block-Level Grammar
	 */
	
	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	  table: noop,
	  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	  text: /^[^\n]+/
	};
	
	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = replace(block.item, 'gm')
	  (/bull/g, block.bullet)
	  ();
	
	block.list = replace(block.list)
	  (/bull/g, block.bullet)
	  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
	  ('def', '\\n+(?=' + block.def.source + ')')
	  ();
	
	block.blockquote = replace(block.blockquote)
	  ('def', block.def)
	  ();
	
	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';
	
	block.html = replace(block.html)
	  ('comment', /<!--[\s\S]*?-->/)
	  ('closed', /<(tag)[\s\S]+?<\/\1>/)
	  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
	  (/tag/g, block._tag)
	  ();
	
	block.paragraph = replace(block.paragraph)
	  ('hr', block.hr)
	  ('heading', block.heading)
	  ('lheading', block.lheading)
	  ('blockquote', block.blockquote)
	  ('tag', '<' + block._tag)
	  ('def', block.def)
	  ();
	
	/**
	 * Normal Block Grammar
	 */
	
	block.normal = merge({}, block);
	
	/**
	 * GFM Block Grammar
	 */
	
	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
	  paragraph: /^/,
	  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	});
	
	block.gfm.paragraph = replace(block.paragraph)
	  ('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  ();
	
	/**
	 * GFM + Tables Block Grammar
	 */
	
	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});
	
	/**
	 * Block Lexer
	 */
	
	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;
	
	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}
	
	/**
	 * Expose Block Rules
	 */
	
	Lexer.rules = block;
	
	/**
	 * Static Lex Method
	 */
	
	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};
	
	/**
	 * Preprocessing
	 */
	
	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');
	
	  return this.token(src, true);
	};
	
	/**
	 * Lexing
	 */
	
	Lexer.prototype.token = function(src, top, bq) {
	  var src = src.replace(/^ +$/gm, '')
	    , next
	    , loose
	    , cap
	    , bull
	    , b
	    , item
	    , space
	    , i
	    , l;
	
	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }
	
	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }
	
	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3] || ''
	      });
	      continue;
	    }
	
	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }
	
	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);
	
	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };
	
	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }
	
	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }
	
	      this.tokens.push(item);
	
	      continue;
	    }
	
	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }
	
	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }
	
	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);
	
	      this.tokens.push({
	        type: 'blockquote_start'
	      });
	
	      cap = cap[0].replace(/^ *> ?/gm, '');
	
	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top, true);
	
	      this.tokens.push({
	        type: 'blockquote_end'
	      });
	
	      continue;
	    }
	
	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];
	
	      this.tokens.push({
	        type: 'list_start',
	        ordered: bull.length > 1
	      });
	
	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);
	
	      next = false;
	      l = cap.length;
	      i = 0;
	
	      for (; i < l; i++) {
	        item = cap[i];
	
	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');
	
	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }
	
	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }
	
	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }
	
	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });
	
	        // Recurse.
	        this.token(item, false, bq);
	
	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }
	
	      this.tokens.push({
	        type: 'list_end'
	      });
	
	      continue;
	    }
	
	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: !this.options.sanitizer
	          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	        text: cap[0]
	      });
	      continue;
	    }
	
	    // def
	    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.links[cap[1].toLowerCase()] = {
	        href: cap[2],
	        title: cap[3]
	      };
	      continue;
	    }
	
	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);
	
	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };
	
	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }
	
	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }
	
	      this.tokens.push(item);
	
	      continue;
	    }
	
	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }
	
	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }
	
	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }
	
	  return this.tokens;
	};
	
	/**
	 * Inline-Level Grammar
	 */
	
	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	};
	
	inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
	
	inline.link = replace(inline.link)
	  ('inside', inline._inside)
	  ('href', inline._href)
	  ();
	
	inline.reflink = replace(inline.reflink)
	  ('inside', inline._inside)
	  ();
	
	/**
	 * Normal Inline Grammar
	 */
	
	inline.normal = merge({}, inline);
	
	/**
	 * Pedantic Inline Grammar
	 */
	
	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});
	
	/**
	 * GFM Inline Grammar
	 */
	
	inline.gfm = merge({}, inline.normal, {
	  escape: replace(inline.escape)('])', '~|])')(),
	  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: replace(inline.text)
	    (']|', '~]|')
	    ('|', '|https?://|')
	    ()
	});
	
	/**
	 * GFM + Line Breaks Inline Grammar
	 */
	
	inline.breaks = merge({}, inline.gfm, {
	  br: replace(inline.br)('{2,}', '*')(),
	  text: replace(inline.gfm.text)('{2,}', '*')()
	});
	
	/**
	 * Inline Lexer & Compiler
	 */
	
	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer;
	  this.renderer.options = this.options;
	
	  if (!this.links) {
	    throw new
	      Error('Tokens array requires a `links` property.');
	  }
	
	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}
	
	/**
	 * Expose Inline Rules
	 */
	
	InlineLexer.rules = inline;
	
	/**
	 * Static Lexing/Compiling Method
	 */
	
	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};
	
	/**
	 * Lexing/Compiling
	 */
	
	InlineLexer.prototype.output = function(src) {
	  var out = ''
	    , link
	    , text
	    , href
	    , cap;
	
	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }
	
	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = cap[1].charAt(6) === ':'
	          ? this.mangle(cap[1].substring(7))
	          : this.mangle(cap[1]);
	        href = this.mangle('mailto:') + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }
	
	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      src = src.substring(cap[0].length);
	      text = escape(cap[1]);
	      href = text;
	      out += this.renderer.link(href, null, text);
	      continue;
	    }
	
	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? this.options.sanitizer
	          ? this.options.sanitizer(cap[0])
	          : escape(cap[0])
	        : cap[0]
	      continue;
	    }
	
	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }
	
	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }
	
	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }
	
	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }
	
	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2], true));
	      continue;
	    }
	
	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }
	
	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }
	
	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.text(escape(this.smartypants(cap[0])));
	      continue;
	    }
	
	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }
	
	  return out;
	};
	
	/**
	 * Compile Link
	 */
	
	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href)
	    , title = link.title ? escape(link.title) : null;
	
	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};
	
	/**
	 * Smartypants Transformations
	 */
	
	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/---/g, '\u2014')
	    // en-dashes
	    .replace(/--/g, '\u2013')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};
	
	/**
	 * Mangle Links
	 */
	
	InlineLexer.prototype.mangle = function(text) {
	  if (!this.options.mangle) return text;
	  var out = ''
	    , l = text.length
	    , i = 0
	    , ch;
	
	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }
	
	  return out;
	};
	
	/**
	 * Renderer
	 */
	
	function Renderer(options) {
	  this.options = options || {};
	}
	
	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }
	
	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }
	
	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};
	
	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};
	
	Renderer.prototype.html = function(html) {
	  return html;
	};
	
	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};
	
	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};
	
	Renderer.prototype.list = function(body, ordered) {
	  var type = ordered ? 'ol' : 'ul';
	  return '<' + type + '>\n' + body + '</' + type + '>\n';
	};
	
	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};
	
	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};
	
	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};
	
	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};
	
	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};
	
	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};
	
	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};
	
	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};
	
	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};
	
	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};
	
	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return '';
	    }
	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
	      return '';
	    }
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};
	
	Renderer.prototype.image = function(href, title, text) {
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};
	
	Renderer.prototype.text = function(text) {
	  return text;
	};
	
	/**
	 * Parsing & Compiling
	 */
	
	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer;
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}
	
	/**
	 * Static Parse Method
	 */
	
	Parser.parse = function(src, options, renderer) {
	  var parser = new Parser(options, renderer);
	  return parser.parse(src);
	};
	
	/**
	 * Parse Loop
	 */
	
	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options, this.renderer);
	  this.tokens = src.reverse();
	
	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }
	
	  return out;
	};
	
	/**
	 * Next Token
	 */
	
	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};
	
	/**
	 * Preview Next Token
	 */
	
	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};
	
	/**
	 * Parse Text Tokens
	 */
	
	Parser.prototype.parseText = function() {
	  var body = this.token.text;
	
	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }
	
	  return this.inline.output(body);
	};
	
	/**
	 * Parse Current Token
	 */
	
	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        this.token.text);
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = ''
	        , body = ''
	        , i
	        , row
	        , cell
	        , flags
	        , j;
	
	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        flags = { header: true, align: this.token.align[i] };
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);
	
	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];
	
	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }
	
	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      var body = '';
	
	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }
	
	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      var body = ''
	        , ordered = this.token.ordered;
	
	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }
	
	      return this.renderer.list(body, ordered);
	    }
	    case 'list_item_start': {
	      var body = '';
	
	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }
	
	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      var body = '';
	
	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }
	
	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};
	
	/**
	 * Helpers
	 */
	
	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}
	
	function unescape(html) {
		// explicitly match decimal, hex, and named HTML entities 
	  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}
	
	function replace(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return function self(name, val) {
	    if (!name) return new RegExp(regex, opt);
	    val = val.source || val;
	    val = val.replace(/(^|[^\[])\^/g, '$1');
	    regex = regex.replace(name, val);
	    return self;
	  };
	}
	
	function noop() {}
	noop.exec = noop;
	
	function merge(obj) {
	  var i = 1
	    , target
	    , key;
	
	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }
	
	  return obj;
	}
	
	
	/**
	 * Marked
	 */
	
	function marked(src, opt, callback) {
	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }
	
	    opt = merge({}, marked.defaults, opt || {});
	
	    var highlight = opt.highlight
	      , tokens
	      , pending
	      , i = 0;
	
	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }
	
	    pending = tokens.length;
	
	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }
	
	      var out;
	
	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }
	
	      opt.highlight = highlight;
	
	      return err
	        ? callback(err)
	        : callback(null, out);
	    };
	
	    if (!highlight || highlight.length < 3) {
	      return done();
	    }
	
	    delete opt.highlight;
	
	    if (!pending) return done();
	
	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }
	
	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/chjj/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occured:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}
	
	/**
	 * Options
	 */
	
	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};
	
	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  sanitizer: null,
	  mangle: true,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer,
	  xhtml: false
	};
	
	/**
	 * Expose
	 */
	
	marked.Parser = Parser;
	marked.parser = Parser.parse;
	
	marked.Renderer = Renderer;
	
	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;
	
	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;
	
	marked.parse = marked;
	
	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  this.marked = marked;
	}
	
	}).call(function() {
	  return this || (typeof window !== 'undefined' ? window : global);
	}());
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./DescriptionView.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./DescriptionView.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, "._2lrrBFpl54pdapGsWmQMh2 :first-child {\r\n    margin-top: 0;\r\n}\r\n\r\n._2lrrBFpl54pdapGsWmQMh2 :last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n._2lrrBFpl54pdapGsWmQMh2 h1 {\r\n    font-size: 1.3em;\r\n}\r\n\r\n._2lrrBFpl54pdapGsWmQMh2 h2 {\r\n    font-size: 1.1em;\r\n}\r\n\r\n._2lrrBFpl54pdapGsWmQMh2 h3 {\r\n    font-size: 1em;\r\n    -webkit-font-feature-settings: \"c2sc\";\r\n            font-feature-settings: \"c2sc\";\r\n    font-variant: small-caps;\r\n}\r\n\r\n._2lrrBFpl54pdapGsWmQMh2 blockquote {\r\n    border-left: 8px solid #e8e8e8;\r\n    margin-top: -0.3em;\r\n    padding-top: 0.3em;\r\n    margin-left: 20px;\r\n    padding-left: 12px;\r\n    margin-bottom: -0.5em;\r\n    padding-bottom: 0.5em;\r\n}\r\n", ""]);
	
	// exports
	exports.locals = {
		"container": "_2lrrBFpl54pdapGsWmQMh2"
	};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FieldView = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _model = __webpack_require__(13);
	
	var _DescriptionView = __webpack_require__(16);
	
	var _FieldSyntaxView = __webpack_require__(23);
	
	var _FieldArgumentsTableView = __webpack_require__(30);
	
	var _FieldView = __webpack_require__(33);
	
	var StyleSheet = _interopRequireWildcard(_FieldView);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FieldView = exports.FieldView = function (_React$Component) {
	    _inherits(FieldView, _React$Component);
	
	    function FieldView() {
	        _classCallCheck(this, FieldView);
	
	        return _possibleConstructorReturn(this, (FieldView.__proto__ || Object.getPrototypeOf(FieldView)).apply(this, arguments));
	    }
	
	    _createClass(FieldView, [{
	        key: 'render',
	        value: function render() {
	            var field = this.props.field;
	
	            return _react2.default.createElement(
	                'div',
	                {
	                    key: field.name,
	                    className: StyleSheet.container
	                },
	                _react2.default.createElement(_FieldSyntaxView.FieldSyntaxView, { field: field }),
	                this.renderDescription(field.description),
	                _react2.default.createElement(_FieldArgumentsTableView.FieldArgumentsTableView, { args: field.args })
	            );
	        }
	    }, {
	        key: 'renderDescription',
	        value: function renderDescription(description) {
	            if (!description) {
	                return null;
	            }
	
	            return _react2.default.createElement(_DescriptionView.DescriptionView, {
	                className: StyleSheet.description,
	                description: description
	            });
	        }
	    }]);
	
	    return FieldView;
	}(_react2.default.Component);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FieldSyntaxView = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _model = __webpack_require__(13);
	
	var _TypeRefView = __webpack_require__(24);
	
	var _FieldSyntaxView = __webpack_require__(28);
	
	var StyleSheet = _interopRequireWildcard(_FieldSyntaxView);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FieldSyntaxView = exports.FieldSyntaxView = function (_React$Component) {
	    _inherits(FieldSyntaxView, _React$Component);
	
	    function FieldSyntaxView() {
	        _classCallCheck(this, FieldSyntaxView);
	
	        return _possibleConstructorReturn(this, (FieldSyntaxView.__proto__ || Object.getPrototypeOf(FieldSyntaxView)).apply(this, arguments));
	    }
	
	    _createClass(FieldSyntaxView, [{
	        key: 'render',
	        value: function render() {
	            var field = this.props.field;
	
	            return _react2.default.createElement(
	                'div',
	                { className: StyleSheet.container },
	                _react2.default.createElement(
	                    'span',
	                    { className: StyleSheet.name },
	                    field.name
	                ),
	                this.renderFieldArgs(field.args),
	                ': ',
	                _react2.default.createElement(_TypeRefView.TypeRefView, { typeRef: field.type })
	            );
	        }
	    }, {
	        key: 'renderFieldArgs',
	        value: function renderFieldArgs(args) {
	            var _this2 = this;
	
	            if (!args.length) {
	                return null;
	            }
	
	            return _react2.default.createElement(
	                'span',
	                null,
	                '(',
	                args.map(function (arg, idx) {
	                    return _this2.renderField(arg, idx);
	                }),
	                ')'
	            );
	        }
	    }, {
	        key: 'renderField',
	        value: function renderField(arg, index) {
	            return _react2.default.createElement(
	                'span',
	                { key: arg.name },
	                index > 0 ? _react2.default.createElement(
	                    'span',
	                    null,
	                    ', '
	                ) : null,
	                _react2.default.createElement(
	                    'span',
	                    { className: StyleSheet.argumentName },
	                    arg.name
	                ),
	                ': ',
	                _react2.default.createElement(_TypeRefView.TypeRefView, { typeRef: arg.type }),
	                this.renderDefaultValue(arg.defaultValue)
	            );
	        }
	    }, {
	        key: 'renderDefaultValue',
	        value: function renderDefaultValue(defaultValue) {
	            if (!defaultValue) {
	                return null;
	            }
	
	            return _react2.default.createElement(
	                'span',
	                { className: StyleSheet.defaultValue },
	                ' = ',
	                defaultValue
	            );
	        }
	    }]);
	
	    return FieldSyntaxView;
	}(_react2.default.Component);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TypeRefView = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _model = __webpack_require__(13);
	
	var _TypeRefView = __webpack_require__(25);
	
	var StyleSheet = _interopRequireWildcard(_TypeRefView);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TypeRefView = exports.TypeRefView = function (_React$Component) {
	    _inherits(TypeRefView, _React$Component);
	
	    function TypeRefView() {
	        _classCallCheck(this, TypeRefView);
	
	        return _possibleConstructorReturn(this, (TypeRefView.__proto__ || Object.getPrototypeOf(TypeRefView)).apply(this, arguments));
	    }
	
	    _createClass(TypeRefView, [{
	        key: 'render',
	        value: function render() {
	            var ref = this.props.typeRef;
	
	            if (ref instanceof _model.NamedTypeRef) {
	                return _react2.default.createElement(
	                    'a',
	                    {
	                        className: StyleSheet.typeRef,
	                        href: '#' + ref.typeName
	                    },
	                    ref.typeName
	                );
	            } else if (ref instanceof _model.NonNullTypeRef) {
	                return _react2.default.createElement(
	                    'span',
	                    null,
	                    _react2.default.createElement(TypeRefView, { typeRef: ref.ofType }),
	                    '!'
	                );
	            } else if (ref instanceof _model.ListTypeRef) {
	                return _react2.default.createElement(
	                    'span',
	                    null,
	                    '[',
	                    _react2.default.createElement(TypeRefView, { typeRef: ref.ofType }),
	                    ']'
	                );
	            }
	
	            throw new Error('Unknown type ref: ' + ref.toString());
	        }
	    }]);
	
	    return TypeRefView;
	}(_react2.default.Component);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./TypeRefView.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./TypeRefView.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	exports.i(__webpack_require__(27), undefined);
	
	// module
	exports.push([module.id, "._3YrhGPCesSru7PrfrJpq0L {\r\n}\r\n", ""]);
	
	// exports
	exports.locals = {
		"typeRef": "_3YrhGPCesSru7PrfrJpq0L " + __webpack_require__(27).locals["typeLink"] + ""
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, "html::-webkit-scrollbar\r\n{\r\n    width: 12px;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\nhtml::-webkit-scrollbar-thumb\r\n{\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);\r\n    background-color: #d0d0d0;\r\n}\r\n\r\n.AWISa_AQ6Kv8d4vGk-y2 {\r\n    color: #5b2699;\r\n}\r\n\r\n._34YIXsWVsrcl3suK_TFy54 {\r\n    padding-right: 16px;\r\n    padding-right: 1rem;\r\n    white-space: nowrap;\r\n}\r\n\r\n._3bCFlcdjknktWs9Kv28mg- {\r\n    line-height: 1.3;\r\n}\r\n\r\n._2jil82oRFO9p_nTETzt3ft {\r\n    color: #64381f;\r\n}\r\n\r\n.hoeEPQEwcTo5mb6e5wqWF {\r\n    color: #836c28;\r\n}\r\n\r\n._3b2Ma2rq3LDEfsbgiLEnAI {\r\n    color: #007400;\r\n    text-decoration: none;\r\n}\r\n\r\n.bxpnHf2SRwpvQBukNAp6N,\r\n.bxpnHf2SRwpvQBukNAp6N:active,\r\n.bxpnHf2SRwpvQBukNAp6N:hover,\r\n.bxpnHf2SRwpvQBukNAp6N:visited {\r\n    color: #007400;\r\n    text-decoration: none;\r\n}\r\n", ""]);
	
	// exports
	exports.locals = {
		"argumentName": "AWISa_AQ6Kv8d4vGk-y2",
		"argumentCell": "_34YIXsWVsrcl3suK_TFy54",
		"argumentRow": "_3bCFlcdjknktWs9Kv28mg-",
		"fieldName": "_2jil82oRFO9p_nTETzt3ft",
		"defaultValue": "hoeEPQEwcTo5mb6e5wqWF",
		"typeName": "_3b2Ma2rq3LDEfsbgiLEnAI",
		"typeLink": "bxpnHf2SRwpvQBukNAp6N"
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./FieldSyntaxView.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./FieldSyntaxView.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	exports.i(__webpack_require__(27), undefined);
	
	// module
	exports.push([module.id, "._2L9xA27DMEbbq-N0RMbn_z {\r\n    margin-bottom: 3.2px;\r\n    margin-bottom: 0.2rem;\r\n}\r\n\r\n._1XwbHvBHdQjBsNYmsXimxa {\r\n}\r\n\r\n.Y624M2BNHPp6ruE1CIcE3 {\r\n}\r\n\r\n._1M5AZjSiUiYBwb9AWTk1AQ {\r\n}\r\n", ""]);
	
	// exports
	exports.locals = {
		"container": "_2L9xA27DMEbbq-N0RMbn_z",
		"name": "_1XwbHvBHdQjBsNYmsXimxa " + __webpack_require__(27).locals["fieldName"] + "",
		"argumentName": "Y624M2BNHPp6ruE1CIcE3 " + __webpack_require__(27).locals["argumentName"] + "",
		"defaultValue": "_1M5AZjSiUiYBwb9AWTk1AQ " + __webpack_require__(27).locals["defaultValue"] + ""
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FieldArgumentsTableView = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _model = __webpack_require__(13);
	
	var _TypeRefView = __webpack_require__(24);
	
	var _DescriptionView = __webpack_require__(16);
	
	var _FieldArgumentsTableView = __webpack_require__(31);
	
	var StyleSheet = _interopRequireWildcard(_FieldArgumentsTableView);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FieldArgumentsTableView = exports.FieldArgumentsTableView = function (_React$Component) {
	    _inherits(FieldArgumentsTableView, _React$Component);
	
	    function FieldArgumentsTableView() {
	        _classCallCheck(this, FieldArgumentsTableView);
	
	        return _possibleConstructorReturn(this, (FieldArgumentsTableView.__proto__ || Object.getPrototypeOf(FieldArgumentsTableView)).apply(this, arguments));
	    }
	
	    _createClass(FieldArgumentsTableView, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var withDescription = this.props.args.filter(function (a) {
	                return a.description;
	            });
	
	            if (!withDescription.length) {
	                return null;
	            }
	
	            return _react2.default.createElement(
	                'table',
	                { className: StyleSheet.table },
	                _react2.default.createElement(
	                    'thead',
	                    null,
	                    _react2.default.createElement(
	                        'tr',
	                        null,
	                        _react2.default.createElement(
	                            'th',
	                            {
	                                colSpan: '2',
	                                className: StyleSheet.header
	                            },
	                            'Arguments'
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'tbody',
	                    null,
	                    withDescription.map(function (a) {
	                        return _this2.renderRow(a);
	                    })
	                )
	            );
	        }
	    }, {
	        key: 'renderRow',
	        value: function renderRow(arg) {
	            return _react2.default.createElement(
	                'tr',
	                { key: arg.name, className: StyleSheet.row },
	                _react2.default.createElement(
	                    'td',
	                    {
	                        className: StyleSheet.key
	                    },
	                    _react2.default.createElement(
	                        'span',
	                        { className: StyleSheet.argumentName },
	                        arg.name
	                    ),
	                    ': ',
	                    _react2.default.createElement(_TypeRefView.TypeRefView, { typeRef: arg.type })
	                ),
	                _react2.default.createElement(
	                    'td',
	                    {
	                        className: StyleSheet.value
	                    },
	                    arg.description && _react2.default.createElement(_DescriptionView.DescriptionView, { description: arg.description })
	                )
	            );
	        }
	    }]);
	
	    return FieldArgumentsTableView;
	}(_react2.default.Component);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./FieldArgumentsTableView.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./FieldArgumentsTableView.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	exports.i(__webpack_require__(27), undefined);
	
	// module
	exports.push([module.id, "._38eoHDhGyPCFeLOBIjFIeJ {\r\n    margin-top: 16px;\r\n    margin-top: 1rem;\r\n    margin-left: 32px;\r\n    margin-left: 2rem;\r\n    width: calc(100% - 2rem);\r\n}\r\n\r\n._1zZivwxb0dAmeg4GVgg505 {\r\n    text-align: left;\r\n    font-size: 17.6px;\r\n    font-size: 1.1rem;\r\n    border-bottom: 1px solid #d9d9d9;\r\n}\r\n\r\n._3DDrXHFUubJb72bFuOrT6A {\r\n}\r\n\r\n._3Zh141RnIpkZG3uocM-frU {\r\n    width: 100%;\r\n}\r\n\r\n._2jmKNgEoWIJLQ2rpaw-7h5 {\r\n}\r\n\r\n._1DMIDO68ob2tAYVhOo_i-2 {\r\n}\r\n", ""]);
	
	// exports
	exports.locals = {
		"table": "_38eoHDhGyPCFeLOBIjFIeJ",
		"header": "_1zZivwxb0dAmeg4GVgg505",
		"key": "_3DDrXHFUubJb72bFuOrT6A " + __webpack_require__(27).locals["argumentCell"] + "",
		"value": "_3Zh141RnIpkZG3uocM-frU",
		"row": "_2jmKNgEoWIJLQ2rpaw-7h5 " + __webpack_require__(27).locals["argumentRow"] + "",
		"argumentName": "_1DMIDO68ob2tAYVhOo_i-2 " + __webpack_require__(27).locals["argumentName"] + ""
	};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./FieldView.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./FieldView.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, "._2__u8PlNPSAn-LLyDog2rc {\r\n    margin-bottom: 24px;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n._2i-zhiLHB8PxvLQFmU5rZJ {\r\n    margin-left: 32px;\r\n    margin-left: 2rem;\r\n}\r\n\r\n._2i-zhiLHB8PxvLQFmU5rZJ p {\r\n    margin-top: 0;\r\n}\r\n", ""]);
	
	// exports
	exports.locals = {
		"container": "_2__u8PlNPSAn-LLyDog2rc",
		"description": "_2i-zhiLHB8PxvLQFmU5rZJ"
	};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./TypeDocsViews.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./TypeDocsViews.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	exports.i(__webpack_require__(27), undefined);
	
	// module
	exports.push([module.id, "._14GiohI_QzlvTCpgm4smDz {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.BHlkP7LCKipb0QwsMcnN6 {\r\n    margin-bottom: 8px;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n._1l_EuCD1R2-VE8ynHtdck- {\r\n    -webkit-font-feature-settings: \"c2sc\";\r\n            font-feature-settings: \"c2sc\";\r\n    font-variant: small-caps;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    color: #4a4a4a;\r\n    border-bottom: 1px solid #d9d9d9;\r\n    margin-top: 16px;\r\n    margin-top: 1rem;\r\n    margin-bottom: 8px;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.vYEVttTWl1ekl4MK-FTwL {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.eSNCbWsofis41y2WFFp-i {\r\n}\r\n\r\n.BnHsnoSNYpKC5rHcDxk10 {\r\n}\r\n", ""]);
	
	// exports
	exports.locals = {
		"type": "_14GiohI_QzlvTCpgm4smDz",
		"heading": "BHlkP7LCKipb0QwsMcnN6",
		"subHeading": "_1l_EuCD1R2-VE8ynHtdck-",
		"interfacesList": "vYEVttTWl1ekl4MK-FTwL",
		"enumName": "eSNCbWsofis41y2WFFp-i " + __webpack_require__(27).locals["argumentName"] + " " + __webpack_require__(27).locals["argumentCell"] + "",
		"enumRow": "BnHsnoSNYpKC5rHcDxk10 " + __webpack_require__(27).locals["argumentRow"] + ""
	};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SectionView = __webpack_require__(38);
	
	var StyleSheet = _interopRequireWildcard(_SectionView);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SectionView = function (_React$Component) {
	    _inherits(SectionView, _React$Component);
	
	    function SectionView() {
	        _classCallCheck(this, SectionView);
	
	        return _possibleConstructorReturn(this, (SectionView.__proto__ || Object.getPrototypeOf(SectionView)).apply(this, arguments));
	    }
	
	    _createClass(SectionView, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: StyleSheet.section },
	                _react2.default.createElement('a', { name: this.props.name }),
	                _react2.default.createElement(
	                    'h2',
	                    null,
	                    this.props.name
	                ),
	                this.props.items.map(function (item) {
	                    return item.component;
	                })
	            );
	        }
	    }]);
	
	    return SectionView;
	}(_react2.default.Component);
	
	exports.default = SectionView;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./SectionView.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./SectionView.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	exports.i(__webpack_require__(40), "");
	
	// module
	exports.push([module.id, "._35GXFfFvgsE9MAYT-BmkaN {\r\n    padding: 10px;\r\n}", ""]);
	
	// exports
	exports.locals = {
		"section": "_35GXFfFvgsE9MAYT-BmkaN"
	};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/**\r\n * 1. Change the default font family in all browsers (opinionated).\r\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\r\n */\r\n\r\nhtml {\r\n  font-family: -apple-system, BlinkMacSystemFont,\r\n    \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\",\r\n    \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\r\n    sans-serif; /* 1 */\r\n  -ms-text-size-adjust: 100%; /* 2 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the margin in all browsers (opinionated).\r\n */\r\n\r\nbody {\r\n  margin: 0 8px;\r\n}\r\n\r\n/* HTML5 display definitions\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 9-.\r\n * 1. Add the correct display in Edge, IE, and Firefox.\r\n * 2. Add the correct display in IE.\r\n */\r\n\r\narticle,\r\naside,\r\ndetails, /* 1 */\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nmain, /* 2 */\r\nmenu,\r\nnav,\r\nsection,\r\nsummary { /* 1 */\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 9-.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  display: inline-block;\r\n}\r\n\r\n/**\r\n * Add the correct display in iOS 4-7.\r\n */\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10-.\r\n * 1. Add the correct display in IE.\r\n */\r\n\r\ntemplate, /* 1 */\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\n/* Links\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Remove the gray background on active links in IE 10.\r\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\r\n */\r\n\r\na {\r\n  background-color: transparent; /* 1 */\r\n   -webkit-text-decoration-skip: ink;  /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the outline on focused links when they are also active or hovered\r\n * in all browsers (opinionated).\r\n */\r\n\r\na:active,\r\na:hover {\r\n  outline-width: 0;\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Remove the bottom border in Firefox 39-.\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: inherit;\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * Add the correct font style in Android 4.3-.\r\n */\r\n\r\ndfn {\r\n  font-style: italic;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/**\r\n * Add the correct background and color in IE 9-.\r\n */\r\n\r\nmark {\r\n  background-color: #ff0;\r\n  color: #000;\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10-.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/**\r\n * Hide the overflow in IE.\r\n */\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct margin in IE 8.\r\n */\r\n\r\nfigure {\r\n  margin: 1em 40px;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change font properties to `inherit` in all browsers (opinionated).\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font: inherit; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Restore the font weight unset by the previous rule.\r\n */\r\n\r\noptgroup {\r\n  font-weight: bold;\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput { /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect { /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n *    controls in Android 4.\r\n * 2. Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\nhtml [type=\"button\"], /* 1 */\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Change the border, margin, and padding in all browsers (opinionated).\r\n */\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10-.\r\n * 2. Remove the padding in IE 10-.\r\n */\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\r\n */\r\n\r\n[type=\"search\"]::-webkit-search-cancel-button,\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\r\n */\r\n\r\n::-webkit-input-placeholder {\r\n  color: inherit;\r\n  opacity: 0.54;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n", ""]);
	
	// exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SideNavSectionView = __webpack_require__(42);
	
	var StyleSheet = _interopRequireWildcard(_SideNavSectionView);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SideNavSectionView = function (_React$Component) {
	    _inherits(SideNavSectionView, _React$Component);
	
	    function SideNavSectionView() {
	        _classCallCheck(this, SideNavSectionView);
	
	        return _possibleConstructorReturn(this, (SideNavSectionView.__proto__ || Object.getPrototypeOf(SideNavSectionView)).apply(this, arguments));
	    }
	
	    _createClass(SideNavSectionView, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: StyleSheet.sidenavSection },
	                _react2.default.createElement(
	                    'div',
	                    { className: StyleSheet.sectionLink },
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#' + this.props.name },
	                        this.props.name
	                    )
	                ),
	                this.props.items.map(function (item) {
	                    return _react2.default.createElement(
	                        'div',
	                        { className: StyleSheet.typeLink },
	                        _react2.default.createElement(
	                            'a',
	                            { href: '#' + item.name },
	                            '\xA0\xA0',
	                            item.name
	                        )
	                    );
	                })
	            );
	        }
	    }]);
	
	    return SideNavSectionView;
	}(_react2.default.Component);
	
	exports.default = SideNavSectionView;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./SideNavSectionView.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./SideNavSectionView.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	exports.i(__webpack_require__(40), "");
	
	// module
	exports.push([module.id, "._3snReR-zjRkZnaYhkn44H2 {\r\n    width: 100%;\r\n}\r\n\r\n._17WopTR1apuAeanXWTDwDi,\r\n._3LDDiq4icLjja1PVeMGymW {\r\n    width: 100%;\r\n}\r\n\r\n._17WopTR1apuAeanXWTDwDi > a,\r\n._3LDDiq4icLjja1PVeMGymW > a {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 10px;\r\n    text-decoration: none;\r\n    color: darkgray;\r\n}\r\n\r\n._17WopTR1apuAeanXWTDwDi > a {\r\n    text-transform: uppercase;\r\n    color: #222222;\r\n}\r\n\r\n._3LDDiq4icLjja1PVeMGymW:hover,\r\n._17WopTR1apuAeanXWTDwDi:hover {\r\n    background: lightgray;\r\n}", ""]);
	
	// exports
	exports.locals = {
		"sidenavSection": "_3snReR-zjRkZnaYhkn44H2",
		"sectionLink": "_17WopTR1apuAeanXWTDwDi",
		"typeLink": "_3LDDiq4icLjja1PVeMGymW"
	};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./SchemaDocsView.css", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?modules&importLoaders=1!../../node_modules/postcss-loader/index.js!./SchemaDocsView.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	exports.i(__webpack_require__(40), "");
	
	// module
	exports.push([module.id, "._3OG4DV5OpCPYOAFuZk6E33 {\r\n    height: 100vh;\r\n}\r\n\r\n._1PKyCmYZcgkownwgVZDLiX {\r\n    padding-right: 10%;\r\n    padding-left: 10%;\r\n}\r\n\r\n._2psgRClksBjhA2dMZIto8n {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin-left: 270px;\r\n}\r\n\r\n._1r5McibAbKcxghYda4fb5P {\r\n    position: fixed;\r\n    overflow-y: scroll;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 250px;\r\n}\r\n\r\n._1r5McibAbKcxghYda4fb5P::-webkit-scrollbar\r\n{\r\n    width: 12px;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n._1r5McibAbKcxghYda4fb5P::-webkit-scrollbar-thumb\r\n{\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);\r\n    background-color: #d0d0d0;\r\n}\r\n\r\n._1QM-mXJuvu7pDNLGStlP5U {\r\n    display: block;\r\n    border-radius: 10px;\r\n    border: 2px solid darkgray;\r\n    color: darkgray;\r\n    width: 220px;\r\n    font-size: 16px;\r\n    font-size: 1rem;\r\n    padding: 10px;\r\n    margin: 20px 10px 0 10px;\r\n}\r\n\r\n._1QM-mXJuvu7pDNLGStlP5U:hover,\r\n._1QM-mXJuvu7pDNLGStlP5U:focus\r\n{\r\n    outline: none;\r\n}\r\n\r\n._3Nojj1QOzq7EOxzSPyQ9JJ {\r\n    list-style: none;\r\n    margin:0;\r\n    padding:0;\r\n}\r\n\r\n._1tpeYqhKd1wyic6LdiWicA {\r\n    padding: 3px 3px 3px 18px;\r\n    width: 100%;\r\n}\r\n\r\n._1tpeYqhKd1wyic6LdiWicA:hover {\r\n    background: lightgray;\r\n}\r\n\r\n._1tpeYqhKd1wyic6LdiWicA > a {\r\n    display: block;\r\n    width: 100%;\r\n    color: darkgray;\r\n    text-decoration: none;\r\n    padding: 3px;\r\n}\r\n\r\n._6IUXxUgfgw_Lnpp21CMG2 {\r\n    background: lightgray;\r\n}", ""]);
	
	// exports
	exports.locals = {
		"wrapper": "_3OG4DV5OpCPYOAFuZk6E33",
		"container": "_1PKyCmYZcgkownwgVZDLiX",
		"content": "_2psgRClksBjhA2dMZIto8n",
		"sidenav": "_1r5McibAbKcxghYda4fb5P",
		"selectInput": "_1QM-mXJuvu7pDNLGStlP5U",
		"selectList": "_3Nojj1QOzq7EOxzSPyQ9JJ",
		"selectItem": "_1tpeYqhKd1wyic6LdiWicA",
		"selectHover": "_6IUXxUgfgw_Lnpp21CMG2"
	};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	module.exports = "query IntrospectionQuery {\r\n  __schema {\r\n    queryType {\r\n      name\r\n    }\r\n    mutationType {\r\n      name\r\n    }\r\n    subscriptionType {\r\n      name\r\n    }\r\n    types {\r\n      ...FullType\r\n    }\r\n    directives {\r\n      name\r\n      description\r\n      args {\r\n        ...InputValue\r\n      }\r\n      onOperation\r\n      onFragment\r\n      onField\r\n    }\r\n  }\r\n}\r\n\r\nfragment FullType on __Type {\r\n  kind\r\n  name\r\n  description\r\n  fields(includeDeprecated: true) {\r\n    name\r\n    description\r\n    args {\r\n      ...InputValue\r\n    }\r\n    type {\r\n      ...TypeRef\r\n    }\r\n    isDeprecated\r\n    deprecationReason\r\n  }\r\n  inputFields {\r\n    ...InputValue\r\n  }\r\n  interfaces {\r\n    ...TypeRef\r\n  }\r\n  enumValues(includeDeprecated: true) {\r\n    name\r\n    description\r\n    isDeprecated\r\n    deprecationReason\r\n  }\r\n  possibleTypes {\r\n    ...TypeRef\r\n  }\r\n}\r\n\r\nfragment InputValue on __InputValue {\r\n  name\r\n  description\r\n  type {\r\n    ...TypeRef\r\n  }\r\n  defaultValue\r\n}\r\n\r\nfragment TypeRef on __Type {\r\n  kind\r\n  name\r\n  ofType {\r\n    kind\r\n    name\r\n    ofType {\r\n      kind\r\n      name\r\n      ofType {\r\n        kind\r\n        name\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n"

/***/ })
/******/ ])
});
;
//# sourceMappingURL=graphql-docs.js.map