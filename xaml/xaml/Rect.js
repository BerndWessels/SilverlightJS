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
 * @fileoverview Describes the width, height, and point origin of a rectangle.
 */

goog.provide('goog.xaml.Rect');

/**
 * @constructor
 */
goog.xaml.Rect = function () {
};

/**
 * Gets the y-axis value of the bottom of the rectangle.
 * @return {number}
 */
goog.xaml.Rect.prototype.Bottom;

Object.defineProperty(goog.xaml.Rect.prototype, "Bottom", {
    /**
     * @this {goog.xaml.Rect}
     * @return {number}
     */
    get:function () {
        return this.Y + this.Height;
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets a special value that represents a rectangle with no position or area.
 * @return {goog.xaml.Rect}
 */
goog.xaml.Rect.prototype.Empty;

Object.defineProperty(goog.xaml.Rect.prototype, "Empty", {
    /**
     * @this {goog.xaml.Rect}
     * @return {goog.xaml.Rect}
     */
    get:function () {
        return new goog.xaml.Rect();
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the height of the rectangle.
 * @type {number}
 */
goog.xaml.Rect.prototype.Height = 0;

/**
 * Gets a value that indicates whether the rectangle is the Empty rectangle.
 * @type {boolean}
 */
goog.xaml.Rect.prototype.IsEmpty = true;

/**
 * Gets the x-axis value of the left side of the rectangle.
 * @type {number}
 */
goog.xaml.Rect.prototype.Left;

Object.defineProperty(goog.xaml.Rect.prototype, "Left", {
    /**
     * @this {goog.xaml.Rect}
     * @return {number}
     */
    get:function () {
        return this.X;
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets the x-axis value of the right side of the rectangle.
 * @type {number}
 */
goog.xaml.Rect.prototype.Right;

Object.defineProperty(goog.xaml.Rect.prototype, "Right", {
    /**
     * @this {goog.xaml.Rect}
     * @return {number}
     */
    get:function () {
        return this.X + this.Width;
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets the y-axis position of the top of the rectangle.
 * @return {number}
 */
goog.xaml.Rect.prototype.Top;

Object.defineProperty(goog.xaml.Rect.prototype, "Top", {
    /**
     * @this {goog.xaml.Rect}
     * @return {number}
     */
    get:function () {
        return this.Y;
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the width of the rectangle.
 * @type {number}
 */
goog.xaml.Rect.prototype.Width = 0;

/**
 * Gets or sets the x-axis value of the left side of the rectangle.
 * @type {number}
 */
goog.xaml.Rect.prototype.X = 0;

/**
 * Gets or sets the y-axis value of the top side of the rectangle.
 * @type {number}
 */
goog.xaml.Rect.prototype.Y = 0;

/**
 * Indicates whether the rectangle described by the Rect contains the specified point.
 * @param {goog.xaml.Point} point
 * @return {boolean}
 */
goog.xaml.Rect.prototype.Contains = function (point) {
    return false;
};

/**
 * Indicates whether the specified Rect is equal to the current Rect.
 * @param {goog.xaml.Rect} rect
 * @return {boolean}
 */
goog.xaml.Rect.prototype.Equals = function (rect) {
    return false;
};

/**
 * Finds the intersection of the rectangle represented by the current Rect
 * and the rectangle represented by the specified Rect, and stores the result as the current Rect.
 * @param {goog.xaml.Rect} rect
 */
goog.xaml.Rect.prototype.Intersect = function (rect) {
};

/**
 * Expands the rectangle represented by the current Rect exactly enough to contain the specified point.
 * Expands the rectangle represented by the current Rect exactly enough to contain the specified rectangle.
 * @param {goog.xaml.Point|goog.xaml.Rect} pointOrRect
 */
goog.xaml.Rect.prototype.Union = function (pointOrRect) {
};
