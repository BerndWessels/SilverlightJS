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
 * @fileoverview Provides a base class for all bitmap effects.
 */

goog.provide('goog.xaml.media.Effect');

goog.require('goog.xaml.DependencyObject');
goog.require('goog.xaml.DependencyType');

/**
 * Derive from the Effect class to implement a custom bitmap effect.
 * In most cases, you should derive from ShaderEffect.
 * @constructor
 * @extends goog.xaml.DependencyObject
 */
goog.xaml.media.Effect = function () {
    goog.xaml.DependencyObject.call(this);
};

goog.inherits(goog.xaml.media.Effect, goog.xaml.DependencyObject);

/**
 * @type {number}
 */
goog.xaml.media.Effect.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.media.Effect");

/**
 * @type {number}
 */
goog.xaml.media.Effect.prototype.DependencyType = goog.xaml.media.Effect.DependencyType;

/**
 * When overridden in a derived class, transforms mouse input and coordinate systems through the effect.
 * @type {goog.xaml.media.Transform?}
 */
goog.xaml.media.Effect.prototype.EffectMapping;

/**
 * Gets a Brush that, when it is used as an input for an Effect,
 * causes the bitmap of the UIElement that the Effect is applied to be that input.
 * @type {goog.xaml.media.Brush?}
 */
goog.xaml.media.Effect.prototype.ImplicitInput;
