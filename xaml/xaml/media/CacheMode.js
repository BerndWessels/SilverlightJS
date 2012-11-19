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
 * @fileoverview Represents cached content.
 */

goog.provide('goog.xaml.media.CacheMode');

goog.require('goog.xaml.DependencyObject');
goog.require('goog.xaml.DependencyType');

/**
 * You cannot use this class directly to cache an object;
 * rather, you use the derived class BitmapCache.
 * @constructor
 * @extends goog.xaml.DependencyObject
 */
goog.xaml.media.CacheMode = function () {
    goog.xaml.DependencyObject.call(this);
};

goog.inherits(goog.xaml.media.CacheMode, goog.xaml.DependencyObject);

/**
 * @type {number}
 */
goog.xaml.media.CacheMode.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.media.CacheMode");

/**
 * @type {number}
 */
goog.xaml.media.CacheMode.prototype.DependencyType = goog.xaml.media.CacheMode.DependencyType;
