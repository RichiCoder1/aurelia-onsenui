define(['exports', 'onsenui', 'aurelia-dependency-injection', 'aurelia-pal', 'aurelia-templating', './page-loader', './lifecycle'], function (exports, _onsenui, _aureliaDependencyInjection, _aureliaPal, _aureliaTemplating, _pageLoader, _lifecycle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.OnsNavigator = undefined;

  var _onsenui2 = _interopRequireDefault(_onsenui);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

  var OnsNavigator = exports.OnsNavigator = (_dec = (0, _aureliaTemplating.customElement)('ons-navigator'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaDependencyInjection.Container, _aureliaTemplating.CompositionEngine, _pageLoader.PageLoader, _aureliaTemplating.ViewSlot), _dec(_class = (0, _aureliaTemplating.noView)(_class = _dec2(_class = (_class2 = function () {
    function OnsNavigator(element, container, compositionEngine, pageLoader, viewSlot) {
      _classCallCheck(this, OnsNavigator);

      _initDefineProp(this, 'page', _descriptor, this);

      this.element = element;
      this.container = container;
      this.compositionEngine = compositionEngine;
      this.pageLoader = pageLoader;
      this.viewSlot = viewSlot;

      this.element.pageLoader = new _onsenui2.default.PageLoader(this.load.bind(this), this.unload.bind(this));
      this._pushPage = this.element.pushPage.bind(element);
      this._popPage = this.element.popPage.bind(element);
      this.element.pushPage = this.pushPage.bind(this);
      this.element.popPage = this.popPage.bind(this);

      this.controllers = [];
    }

    OnsNavigator.prototype.created = function created(owningView) {
      this.owningView = owningView;
    };

    OnsNavigator.prototype.bind = function bind(bindingContext, overrideContext) {
      this.container.viewModel = bindingContext;
      this.overrideContext = overrideContext;
    };

    OnsNavigator.prototype.load = function load(_ref, done) {
      var _this = this;

      var page = _ref.page,
          parent = _ref.parent,
          params = _ref.params;

      this.compositionEngine.createController(this.nextPage).then(function (controller) {
        var pageElement = controller.view.firstChild;
        _this.nextPage = null;
        controller.automate(_this.overrideContext, _this.owningView);
        _this.viewSlot.add(controller.view);
        _this.controllers.push(controller);
        done(pageElement);
      });
    };

    OnsNavigator.prototype.unload = function unload(pageElement) {
      var _this2 = this;

      var controller = this.controllers.pop();
      return (0, _lifecycle.invokeLifecycle)(controller.viewModel, 'deactivate').then(function () {
        _this2.viewSlot.remove(controller.view);
        controller.view.unbind();
      });
    };

    OnsNavigator.prototype.pushPage = function pushPage(page, options) {
      var _this3 = this;

      options = options || {};
      var config = {
        moduleId: page,
        model: options.data || {}
      };
      return this.pageLoader.loadPage(this, config).then(function (context) {
        (0, _lifecycle.invokeLifecycle)(context.viewModel, 'canActivate', context.model).then(function (canActivate) {
          if (canActivate) {
            _this3.nextPage = context;
            _this3._pushPage(page, options);
          }
        });
      });
    };

    OnsNavigator.prototype.popPage = function popPage(options) {
      var _this4 = this;

      var controller = this.controllers[this.controllers.length - 1];
      return (0, _lifecycle.invokeLifecycle)(controller.viewModel, 'canDeactivate').then(function (canDeactivate) {
        if (canDeactivate) {
          _this4._popPage(options);
        }
      });
    };

    return OnsNavigator;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'page', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class) || _class);
});