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
 * @fileoverview Applies a value to a property in a Style.
 */

goog.provide('goog.xaml.Setter');

goog.require('goog.xaml.DependencyObject');
goog.require('goog.xaml.DependencyType');

/**
 * @constructor
 * @extends goog.xaml.DependencyObject
 */
goog.xaml.Setter = function () {
    goog.xaml.DependencyObject.call(this);
};

goog.inherits(goog.xaml.Setter, goog.xaml.DependencyObject);

/**
 * @type {number}
 */
goog.xaml.Setter.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.Setter");

/**
 * @type {number}
 */
goog.xaml.Setter.prototype.DependencyType = goog.xaml.Setter.DependencyType;

/**
 * Gets a value that indicates whether this object is in an immutable state.
 * @type {boolean}
 */
goog.xaml.Setter.prototype.IsSealed = false;

/**
 * Gets or sets the property to apply the Value to.
 * @type {number?}
 */
goog.xaml.Setter.prototype.Property = null;

/**
 * Gets or sets the value to apply to the property that is specified by the Setter.
 * @type {*?}
 */
goog.xaml.Setter.prototype.Value = null;
