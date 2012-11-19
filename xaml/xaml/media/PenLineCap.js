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
 * @fileoverview Describes the shape at the end of a line or segment.
 */

goog.provide('goog.xaml.media.PenLineCap');

/**
 * @enum {number}
 */
goog.xaml.media.PenLineCap = {
    Flat:0,
    Square:1,
    Round:2,
    Triangle:3
};

/**
 * @type {number}
 */
goog.xaml.media.PenLineCap.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.media.PenLineCap");
