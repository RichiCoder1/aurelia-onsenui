var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
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

import { inject } from 'aurelia-dependency-injection';
import { DOM } from 'aurelia-pal';
import { customElement, noView, bindable } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';

export let OnsRange = (_dec = customElement('ons-range'), _dec2 = inject(DOM.Element), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = noView(_class = _dec2(_class = (_class2 = class OnsRange {

  constructor(element) {
    _initDefineProp(this, 'value', _descriptor, this);

    this.element = element;
    this.element.oninput = this.onInput.bind(this);
  }

  onInput() {
    this.value = this.element.value;
  }

  valueChanged(newValue, oldValue) {
    this.element.value = newValue;
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);