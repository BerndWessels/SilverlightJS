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
 * @fileoverview Represents a dependency property that is registered with the xaml dependency property system.
 * Dependency properties provide support for value expressions,
 * data binding, animation, and property change notification.
 */

goog.provide('goog.xaml.DependencyProperty');

goog.require('goog.xaml.PropertyMetadata');

/**
 * @param {goog.xaml.PropertyMetadata?} metadata
 * @constructor
 */
goog.xaml.DependencyProperty = function (metadata) {
    this.metadata_ = metadata;
};

/**
 * @type {goog.xaml.PropertyMetadata?}
 * @private
 */
goog.xaml.DependencyProperty.prototype.metadata_ = null;

/**
 * Retrieves the property metadata value for the dependency property as registered to the specified Type.
 * @param {*=} opt_type
 * @returns {goog.xaml.PropertyMetadata}
 */
goog.xaml.DependencyProperty.prototype.GetMetadata = function (opt_type) {
    // The type is only useful in WPF but not in Silverlight.
    return this.metadata_;
};

/**
 * The global storage that holds all registered dependency properties.
 * @type {Array.<goog.xaml.DependencyProperty>}
 */
goog.xaml.DependencyProperty.RegisteredDependencyProperties = new Array();

/**
 *
 * @param {string} name
 * @param {number} propertyType
 * @param {number} ownerType
 * @param {goog.xaml.PropertyMetadata?} typeMetadata
 * @returns {number}
 */
goog.xaml.DependencyProperty.Register = function (name, propertyType, ownerType, typeMetadata) {
    var dependencyProperty = new goog.xaml.DependencyProperty(typeMetadata);
    goog.xaml.DependencyProperty.RegisteredDependencyProperties.push(dependencyProperty);
    return goog.xaml.DependencyProperty.RegisteredDependencyProperties.length - 1;
};

/**
 *
 * @param {string} name
 * @param {*} propertyType
 * @param {*} ownerType
 * @param {goog.xaml.PropertyMetadata?} defaultMetadata
 * @returns {number}
 */
goog.xaml.DependencyProperty.RegisterAttached = function (name, propertyType, ownerType, defaultMetadata) {
    var dependencyProperty = new goog.xaml.DependencyProperty(defaultMetadata);
    goog.xaml.DependencyProperty.RegisteredDependencyProperties.push(dependencyProperty);
    return goog.xaml.DependencyProperty.RegisteredDependencyProperties.length - 1;
};
