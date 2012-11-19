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
 * @fileoverview Provides a base class for projections,
 * which describe how to transform an object in 3-D space using perspective transforms.
 */

goog.provide('goog.xaml.media.Projection');

goog.require('goog.xaml.DependencyObject');
goog.require('goog.xaml.DependencyType');

/**
 * When rotating an object in 3-D space, use PlaneProjection, which derives from Projection.
 * @constructor
 * @extends goog.xaml.DependencyObject
 */
goog.xaml.media.Projection = function () {
    goog.xaml.DependencyObject.call(this);
};

goog.inherits(goog.xaml.media.Projection, goog.xaml.DependencyObject);

/**
 * @type {number}
 */
goog.xaml.media.Projection.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.media.Projection");

/**
 * @type {number}
 */
goog.xaml.media.Projection.prototype.DependencyType = goog.xaml.media.Projection.DependencyType;
