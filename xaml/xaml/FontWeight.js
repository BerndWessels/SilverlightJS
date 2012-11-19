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
 * @fileoverview Refers to the density of a typeface, in terms of the lightness or heaviness of the strokes.
 */

goog.provide('goog.xaml.FontWeight');

/**
 * @enum {number}
 */
goog.xaml.FontWeight = {
    Thin:100,
    ExtraLight:200,
    Light:300,
    Normal:400,
    Medium:500,
    SemiBold:600,
    Bold:700,
    ExtraBold:800,
    Black:900,
    ExtraBlack:950
};

/**
 * @type {number}
 */
goog.xaml.FontWeight.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.FontWeight");
