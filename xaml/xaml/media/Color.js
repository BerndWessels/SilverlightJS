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
 * @fileoverview Describes a color in terms of alpha, red, green, and blue channels.
 */

goog.provide('goog.xaml.media.Color');

/**
 * @constructor
 */
goog.xaml.media.Color = function () {
};

/**
 * @type {number}
 */
goog.xaml.media.Color.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.media.Color");

/**
 * Gets or sets the sRGB alpha channel value of the color.
 * @type {number}
 */
goog.xaml.media.Color.prototype.A;

/**
 * @type {number}
 */
goog.xaml.media.Color.prototype.a_ = 0;

Object.defineProperty(goog.xaml.media.Color.prototype, "A", {
    /**
     * @this {goog.xaml.media.Color}
     * @param {number} a
     */
    set:function (a) {
        this.a_ = a;
        this.name_ = 'rgba(' + this.r_ + ',' + this.g_ + ',' + this.b_ + ',' + this.a_ + ')';
    },
    /**
     * @this {goog.xaml.media.Color}
     * @return {number}
     */
    get:function () {
        return this.a_;
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the sRGB blue channel value of the color.
 * @type {number}
 */
goog.xaml.media.Color.prototype.B = 0;

/**
 * @type {number}
 */
goog.xaml.media.Color.prototype.b_ = 0;

Object.defineProperty(goog.xaml.media.Color.prototype, "B", {
    /**
     * @this {goog.xaml.media.Color}
     * @param {number} b
     */
    set:function (b) {
        this.b_ = b;
        this.name_ = 'rgba(' + this.r_ + ',' + this.g_ + ',' + this.b_ + ',' + this.a_ + ')';
    },
    /**
     * @this {goog.xaml.media.Color}
     * @return {number}
     */
    get:function () {
        return this.b_;
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the sRGB green channel value of the color.
 * @type {number}
 */
goog.xaml.media.Color.prototype.G = 0;

/**
 * @type {number}
 */
goog.xaml.media.Color.prototype.g_ = 0;

Object.defineProperty(goog.xaml.media.Color.prototype, "G", {
    /**
     * @this {goog.xaml.media.Color}
     * @param {number} g
     */
    set:function (g) {
        this.g_ = g;
        this.name_ = 'rgba(' + this.r_ + ',' + this.g_ + ',' + this.b_ + ',' + this.a_ + ')';
    },
    /**
     * @this {goog.xaml.media.Color}
     * @return {number}
     */
    get:function () {
        return this.g_;
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the string representation of the color value.
 * @type {string}
 */
goog.xaml.media.Color.prototype.Name;

/**
 * @type {string}
 */
goog.xaml.media.Color.prototype.name_ = 'rgba(0,0,0,1.0)';

Object.defineProperty(goog.xaml.media.Color.prototype, "Name", {
    /**
     * @this {goog.xaml.media.Color}
     * @param {string} name
     */
    set:function (name) {
        this.name_ = name;
    },
    /**
     * @this {goog.xaml.media.Color}
     * @return {string}
     */
    get:function () {
        return this.name_;
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the sRGB red channel value of the color.
 * @type {number}
 */
goog.xaml.media.Color.prototype.R = 0;

/**
 * @type {number}
 */
goog.xaml.media.Color.prototype.r_ = 0;

Object.defineProperty(goog.xaml.media.Color.prototype, "R", {
    /**
     * @this {goog.xaml.media.Color}
     * @param {number} r
     */
    set:function (r) {
        this.r_ = r;
        this.name_ = 'rgba(' + this.r_ + ',' + this.g_ + ',' + this.b_ + ',' + this.a_ + ')';
    },
    /**
     * @this {goog.xaml.media.Color}
     * @return {number}
     */
    get:function () {
        return this.r_;
    },
    enumerable:true,
    configurable:true
});
