'use strict';

System.register(['onsenui', 'aurelia-dependency-injection', 'aurelia-pal', 'aurelia-templating', './page-loader'], function (_export, _context) {
  "use strict";

  var ons, inject, Container, DOM, ViewSlot, CompositionEngine, customElement, noView, bindable, PageLoader, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, OnsNavigatorView;

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

  return {
    setters: [function (_onsenui) {
      ons = _onsenui.default;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
      Container = _aureliaDependencyInjection.Container;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }, function (_aureliaTemplating) {
      ViewSlot = _aureliaTemplating.ViewSlot;
      CompositionEngine = _aureliaTemplating.CompositionEngine;
      customElement = _aureliaTemplating.customElement;
      noView = _aureliaTemplating.noView;
      bindable = _aureliaTemplating.bindable;
    }, function (_pageLoader) {
      PageLoader = _pageLoader.PageLoader;
    }],
    execute: function () {
      _export('OnsNavigatorView', OnsNavigatorView = (_dec = customElement('ons-tab'), _dec2 = inject(DOM.Element, Container, CompositionEngine, PageLoader, ViewSlot), _dec(_class = noView(_class = _dec2(_class = (_class2 = function () {
        function OnsNavigatorView(element, container, compositionEngine, pageLoader, viewSlot) {
          _classCallCheck(this, OnsNavigatorView);

          _initDefineProp(this, 'page', _descriptor, this);

          _initDefineProp(this, 'active', _descriptor2, this);

          this.element = element;
          this.container = container;
          this.compositionEngine = compositionEngine;
          this.pageLoader = pageLoader;
          this.viewSlot = viewSlot;

          this.element.pageLoader = new ons.PageLoader(this.load.bind(this), this.unload.bind(this));

          this.controller;
        }

        OnsNavigatorView.prototype.created = function created(owningView) {
          this.owningView = owningView;
        };

        OnsNavigatorView.prototype.bind = function bind(bindingContext, overrideContext) {
          this.container.viewModel = bindingContext;
          this.overrideContext = overrideContext;
        };

        OnsNavigatorView.prototype.load = function load(_ref, done) {
          var _this = this;

          var page = _ref.page,
              parent = _ref.parent,
              params = _ref.params;

          var config = {
            moduleId: page,
            model: params,
            skipActivation: true
          };
          this.pageLoader.loadPage(this, config).then(function (context) {
            _this.compositionEngine.createController(context).then(function (controller) {
              var pageElement = controller.view.firstChild;
              controller.automate(_this.overrideContext, _this.owningView);
              _this.viewSlot.add(controller.view);
              _this.controller = controller;
              done(pageElement);
            });
          });
        };

        OnsNavigatorView.prototype.unload = function unload(pageElement) {
          var controller = this.controller;
          this.viewSlot.remove(controller.view);
          controller.view.unbind();
        };

        return OnsNavigatorView;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'page', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'active', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class) || _class));

      _export('OnsNavigatorView', OnsNavigatorView);
    }
  };
});