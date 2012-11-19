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
 * @fileoverview Represents the behavior of caching a visual element or tree of elements as bitmap surfaces.
 * This can yield significant performance improvements for some scenarios.
 */

goog.provide('goog.xaml.media.BitmapCache');

goog.require('goog.xaml.media.CacheMode');
goog.require('goog.xaml.DependencyType');

/**
 * @constructor
 * @extends {goog.xaml.media.CacheMode}
 */
goog.xaml.media.BitmapCache = function () {
    goog.xaml.media.CacheMode.call(this);
};

goog.inherits(goog.xaml.media.BitmapCache, goog.xaml.media.CacheMode);

/**
 * @type {number}
 */
goog.xaml.media.BitmapCache.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.media.BitmapCache");

/**
 * @type {number}
 */
goog.xaml.media.BitmapCache.prototype.DependencyType = goog.xaml.media.BitmapCache.DependencyType;

/**
 * Gets or sets the scale at which the object is rendered on the cached bitmap surface.
 * Use this property for cached objects that are scaled to improve performance.
 * @type {number}
 */
goog.xaml.media.BitmapCache.prototype.RenderAtScale;

/**
 * @type {number}
 */
goog.xaml.media.BitmapCache.RenderAtScaleProperty = goog.xaml.DependencyProperty.Register(
    "RenderAtScale", goog.xaml.Number.DependencyType, goog.xaml.media.BitmapCache.DependencyType, new goog.xaml.PropertyMetadata(1)
);

Object.defineProperty(goog.xaml.media.BitmapCache.prototype, "RenderAtScale", {
    /**
     * @this {goog.xaml.media.BitmapCache}
     * @param {number} renderAtScale
     */
    set:function (renderAtScale) {
        this.SetValue(goog.xaml.media.BitmapCache.RenderAtScaleProperty, renderAtScale);
    },
    /**
     * @this {goog.xaml.media.BitmapCache}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.media.BitmapCache.RenderAtScaleProperty));
    },
    enumerable:true,
    configurable:true
});
