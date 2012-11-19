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
 * @fileoverview Represents a dependency type that is registered with the xaml dependency property system.
 * Dependency types provide support for value expressions,
 * data binding, animation, and property change notification.
 */

goog.provide('goog.xaml.Boolean.DependencyType');
goog.provide('goog.xaml.DependencyType');
goog.provide('goog.xaml.Number.DependencyType');
goog.provide('goog.xaml.NumberArray.DependencyType');
goog.provide('goog.xaml.Object.DependencyType');
goog.provide('goog.xaml.String.DependencyType');

/**
 * The global storage that holds all registered dependency types.
 * @type {Array.<string>}
 */
goog.xaml.DependencyType.RegisteredDependencyTypes = new Array();

/**
 * @param {string} name
 * @returns {number}
 */
goog.xaml.DependencyType.Register = function (name) {
    goog.xaml.DependencyType.RegisteredDependencyTypes.push(name);
    return goog.xaml.DependencyType.RegisteredDependencyTypes.length - 1;
};

goog.xaml.Boolean.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.Number");
goog.xaml.Number.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.Number");
goog.xaml.NumberArray.DependencyType = goog.xaml.DependencyType.Register("Array.<goog.xaml.Number>");
goog.xaml.Object.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.Number");
goog.xaml.String.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.Number");
