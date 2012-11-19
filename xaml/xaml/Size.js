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
 * @fileoverview Describes the width and height of an object.
 */

goog.provide('goog.xaml.Size');

/**
 * @constructor
 */
goog.xaml.Size = function () {
};

/**
 * Gets a value that represents a static empty Size.
 * @return {goog.xaml.Size}
 */
goog.xaml.Size.prototype.Empty = function () {
    return new goog.xaml.Size();
};

/**
 * Gets or sets the height of this instance of Size.
 * @type {number}
 */
goog.xaml.Size.prototype.Height = 0;

/**
 * Gets a value that indicates whether this instance of Size is Empty.
 * @type {boolean}
 */
goog.xaml.Size.prototype.IsEmpty = true;

/**
 * Gets or sets the width of this instance of Size.
 * @type {number}
 */
goog.xaml.Size.prototype.Width = 0;

/**
 * Compares a value to an instance of Size for equality.
 * @param {goog.xaml.Size} size
 * @return {boolean}
 */
goog.xaml.Size.prototype.Equals = function (size) {
    return false;
};
