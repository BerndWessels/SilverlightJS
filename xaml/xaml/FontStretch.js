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
 * @fileoverview Describes the degree to which a font has been stretched,
 * compared to the normal aspect ratio of that font.
 */

goog.provide('goog.xaml.FontStretch');

/**
 * @enum {number}
 */
goog.xaml.FontStretch = {
    UltraCondensed:1,
    ExtraCondensed:2,
    Condensed:3,
    SemiCondensed:4,
    Normal:5,
    SemiExpanded:6,
    Expanded:7,
    ExtraExpanded:8,
    UltraExpanded:9
};

/**
 * @type {number}
 */
goog.xaml.FontStretch.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.FontStretch");
