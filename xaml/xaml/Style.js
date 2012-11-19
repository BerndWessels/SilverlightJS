// Copyright 2012 The Closure Xaml Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Contains property setters that can be shared between instances of a type.
 */

goog.provide('goog.xaml.Style');

goog.require('goog.xaml.DependencyObject');
goog.require('goog.xaml.DependencyType');
goog.require('goog.xaml.Setter');

/**
 * @constructor
 * @extends goog.xaml.DependencyObject
 */
goog.xaml.Style = function () {
    goog.xaml.DependencyObject.call(this);
    this.Setters = new Object();
};

goog.inherits(goog.xaml.Style, goog.xaml.DependencyObject);

/**
 * @param {goog.xaml.Setter} setter
 */
goog.xaml.Style.prototype.addSetter = function (setter) {
    this.Setters[setter.Property] = setter;
};

/**
 * Gets or sets a defined style that is the basis of the current style.
 * @type {goog.xaml.Style?}
 */
goog.xaml.Style.prototype.BasedOn = null;

/**
 * @type {number}
 */
goog.xaml.Style.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.Style");

/**
 * @type {number}
 */
goog.xaml.Style.prototype.DependencyType = goog.xaml.Style.DependencyType;

/**
 * Gets a value that indicates whether the style is read-only and cannot be changed.
 * @type {boolean}
 */
goog.xaml.Style.prototype.IsSealed = false;

/**
 * Gets a collection of Setter objects.
 * @type {Object}
 */
goog.xaml.Style.prototype.Setters;

/**
 * Gets or sets the type for which the style is intended.
 * @type {number}
 */
goog.xaml.Style.prototype.TargetType;

/**
 * Locks the style so that the TargetType property or any Setter in the Setters collection cannot be changed.
 */
goog.xaml.Style.prototype.Seal = function () {
    this.IsSealed = true;
};
