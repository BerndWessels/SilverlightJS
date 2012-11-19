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
 * @fileoverview Provides a framework of common APIs for objects that participate in xaml layout.
 * FrameworkElement also defines APIs related to data binding, object tree,
 * and object lifetime feature areas in xaml.
 */

goog.provide('goog.xaml.FrameworkElement');

goog.require('goog.xaml.DependencyProperty');
goog.require('goog.xaml.DependencyType');
goog.require('goog.xaml.FlowDirection');
goog.require('goog.xaml.HorizontalAlignment');
goog.require('goog.xaml.input.Cursor');
goog.require('goog.xaml.ResourceDictionary');
goog.require('goog.xaml.Style');
goog.require('goog.xaml.Thickness');
goog.require('goog.xaml.UIElement');
goog.require('goog.xaml.VerticalAlignment');

/**
 * @constructor
 * @extends goog.xaml.UIElement
 */
goog.xaml.FrameworkElement = function () {
    goog.xaml.UIElement.call(this);
};

goog.inherits(goog.xaml.FrameworkElement, goog.xaml.UIElement);

/**
 * @override
 */
goog.xaml.FrameworkElement.prototype.createComponent = function () {
    goog.xaml.FrameworkElement.superClass_.createComponent.call(this);
    if (this.Parent === null) {
        this.uiComponent_.render();
    } else {
        this.uiComponent_.render(this.Parent.uiComponent_.getElement());
    }
};

/**
 * @override
 */
goog.xaml.FrameworkElement.prototype.measure = function (availableSize) {
    if (!this.DesiredSize) {
        this.DesiredSize = new goog.xaml.Size();
    }
    // Calculate the desired width.
    var width = this.Width || 0;
    if (this.HorizontalAlignment === goog.xaml.HorizontalAlignment.Stretch) {
        if (this.Width === null) {
            var horizontalMargin = this.Margin === null ? 0 : this.Margin.Left + this.Margin.Right;
            width = availableSize.Width - horizontalMargin;
        }
    }
    width = Math.min(width, this.MinWidth || width);
    width = Math.max(width, this.MaxWidth || width);
    // Calculate the desired height.
    var height = this.Height || 0;
    if (this.HorizontalAlignment === goog.xaml.HorizontalAlignment.Stretch) {
        if (this.Height === null) {
            var verticalMargin = this.Margin === null ? 0 : this.Margin.Top + this.Margin.Bottom;
            height = availableSize.Height - verticalMargin;
        }
    }
    height = Math.min(height, this.MinHeight || height);
    height = Math.max(height, this.MaxHeight || height);
    // Store the new DesiredSize.
    this.DesiredSize.Height = height;
    this.DesiredSize.Width = width;
};

/**
 * Gets the rendered height of a FrameworkElement.
 * @type {number}
 */
goog.xaml.FrameworkElement.prototype.ActualHeight;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.ActualHeightProperty = goog.xaml.DependencyProperty.Register(
    "ActualHeight", goog.xaml.Number.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "ActualHeight", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {number} actualHeight
     */
    set:function (actualHeight) {
        this.SetValue(goog.xaml.FrameworkElement.ActualHeightProperty, actualHeight);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.FrameworkElement.ActualHeightProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets the rendered left offset of a FrameworkElement.
 * @type {number}
 */
goog.xaml.FrameworkElement.prototype.ActualLeft;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.ActualLeftProperty = goog.xaml.DependencyProperty.Register(
    "ActualLeft", goog.xaml.Number.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "ActualLeft", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {number} actualLeft
     */
    set:function (actualLeft) {
        this.SetValue(goog.xaml.FrameworkElement.ActualLeftProperty, actualLeft);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.FrameworkElement.ActualLeftProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets the rendered top of a FrameworkElement.
 * @type {number}
 */
goog.xaml.FrameworkElement.prototype.ActualTop;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.ActualTopProperty = goog.xaml.DependencyProperty.Register(
    "ActualTop", goog.xaml.Number.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "ActualTop", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {number} actualTop
     */
    set:function (actualTop) {
        this.SetValue(goog.xaml.FrameworkElement.ActualTopProperty, actualTop);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.FrameworkElement.ActualTopProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets the rendered width of a FrameworkElement.
 * @type {number}
 */
goog.xaml.FrameworkElement.prototype.ActualWidth;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.ActualWidthProperty = goog.xaml.DependencyProperty.Register(
    "ActualWidth", goog.xaml.Number.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(0)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "ActualWidth", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {number} actualWidth
     */
    set:function (actualWidth) {
        this.SetValue(goog.xaml.FrameworkElement.ActualWidthProperty, actualWidth);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.FrameworkElement.ActualWidthProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the cursor image that displays while the mouse pointer is over a FrameworkElement.
 * @type {goog.xaml.input.Cursor?}
 */
goog.xaml.FrameworkElement.prototype.Cursor;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.CursorProperty = goog.xaml.DependencyProperty.Register(
    "Cursor", goog.xaml.input.Cursor.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "Cursor", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {goog.xaml.input.Cursor?} cursor
     */
    set:function (cursor) {
        this.SetValue(goog.xaml.FrameworkElement.CursorProperty, cursor);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {goog.xaml.input.Cursor?}
     */
    get:function () {
        return /** @type {goog.xaml.input.Cursor?} */(this.GetValue(goog.xaml.FrameworkElement.CursorProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the data context for a FrameworkElement when it participates in data binding.
 * @type {Object?}
 */
goog.xaml.FrameworkElement.prototype.DataContext;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.DataContextProperty = goog.xaml.DependencyProperty.Register(
    "DataContext", goog.xaml.Object.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "DataContext", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {Object?} dataContext
     */
    set:function (dataContext) {
        this.SetValue(goog.xaml.FrameworkElement.DataContextProperty, dataContext);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {Object?}
     */
    get:function () {
        return /** @type {Object?} */(this.GetValue(goog.xaml.FrameworkElement.DataContextProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.FrameworkElement");

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.prototype.DependencyType = goog.xaml.FrameworkElement.DependencyType;

/**
 * Gets or sets the direction that text
 * and other user interface elements flow within any parent element that controls their layout.
 * @type {goog.xaml.FlowDirection}
 */
goog.xaml.FrameworkElement.prototype.FlowDirection;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.FlowDirectionProperty = goog.xaml.DependencyProperty.Register(
    "FlowDirection", goog.xaml.FlowDirection.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(goog.xaml.FlowDirection.LeftToRight)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "FlowDirection", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {goog.xaml.FlowDirection} flowDirection
     */
    set:function (flowDirection) {
        this.SetValue(goog.xaml.FrameworkElement.FlowDirectionProperty, flowDirection);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {goog.xaml.FlowDirection}
     */
    get:function () {
        return /** @type {goog.xaml.FlowDirection} */(this.GetValue(goog.xaml.FrameworkElement.FlowDirectionProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the suggested height of a FrameworkElement.
 * The return value of this property is always the same as any value that was set to it.
 * In contrast, the value of the ActualHeight may vary.
 * @type {number?}
 */
goog.xaml.FrameworkElement.prototype.Height;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.HeightProperty = goog.xaml.DependencyProperty.Register(
    "Height", goog.xaml.Number.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "Height", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {number?} height
     */
    set:function (height) {
        this.SetValue(goog.xaml.FrameworkElement.HeightProperty, height);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {number?}
     */
    get:function () {
        return /** @type {number?} */(this.GetValue(goog.xaml.FrameworkElement.HeightProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the horizontal alignment characteristics that are applied to a FrameworkElement
 * when it is composed in a layout parent, such as a panel or items control.
 * @type {goog.xaml.HorizontalAlignment}
 */
goog.xaml.FrameworkElement.prototype.HorizontalAlignment;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.HorizontalAlignmentProperty = goog.xaml.DependencyProperty.Register(
    "HorizontalAlignment", goog.xaml.HorizontalAlignment.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(goog.xaml.HorizontalAlignment.Stretch)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "HorizontalAlignment", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {goog.xaml.HorizontalAlignment} horizontalAlignment
     */
    set:function (horizontalAlignment) {
        this.SetValue(goog.xaml.FrameworkElement.HorizontalAlignmentProperty, horizontalAlignment);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {goog.xaml.HorizontalAlignment}
     */
    get:function () {
        return /** @type {goog.xaml.HorizontalAlignment} */(this.GetValue(goog.xaml.FrameworkElement.HorizontalAlignmentProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets localization/globalization language information that applies to a FrameworkElement.
 * @type {string}
 */
goog.xaml.FrameworkElement.prototype.Language;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.LanguageProperty = goog.xaml.DependencyProperty.Register(
    "Language", goog.xaml.String.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata('en-us')
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "Language", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {string} language
     */
    set:function (language) {
        this.SetValue(goog.xaml.FrameworkElement.LanguageProperty, language);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {string}
     */
    get:function () {
        return /** @type {string} */(this.GetValue(goog.xaml.FrameworkElement.LanguageProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the outer margin of a FrameworkElement.
 * @type {goog.xaml.Thickness?}
 */
goog.xaml.FrameworkElement.prototype.Margin;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.MarginProperty = goog.xaml.DependencyProperty.Register(
    "Margin", goog.xaml.Thickness.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(new goog.xaml.Thickness())
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "Margin", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {goog.xaml.Thickness?} margin
     */
    set:function (margin) {
        this.SetValue(goog.xaml.FrameworkElement.MarginProperty, margin);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {goog.xaml.Thickness?}
     */
    get:function () {
        return /** @type {goog.xaml.Thickness?} */(this.GetValue(goog.xaml.FrameworkElement.MarginProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the maximum height constraint of a FrameworkElement.
 * @type {number?}
 */
goog.xaml.FrameworkElement.prototype.MaxHeight;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.MaxHeightProperty = goog.xaml.DependencyProperty.Register(
    "MaxHeight", goog.xaml.Number.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "MaxHeight", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {number?} maxHeight
     */
    set:function (maxHeight) {
        this.SetValue(goog.xaml.FrameworkElement.MaxHeightProperty, maxHeight);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {number?}
     */
    get:function () {
        return /** @type {number?} */(this.GetValue(goog.xaml.FrameworkElement.MaxHeightProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the maximum width constraint of a FrameworkElement.
 * @type {number?}
 */
goog.xaml.FrameworkElement.prototype.MaxWidth;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.MaxWidthProperty = goog.xaml.DependencyProperty.Register(
    "MaxWidth", goog.xaml.Number.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "MaxWidth", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {number?} maxWidth
     */
    set:function (maxWidth) {
        this.SetValue(goog.xaml.FrameworkElement.MaxWidthProperty, maxWidth);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {number?}
     */
    get:function () {
        return /** @type {number?} */(this.GetValue(goog.xaml.FrameworkElement.MaxWidthProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the minimum height constraint of a FrameworkElement.
 * @type {number?}
 */
goog.xaml.FrameworkElement.prototype.MinHeight;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.MinHeightProperty = goog.xaml.DependencyProperty.Register(
    "MinHeight", goog.xaml.Number.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "MinHeight", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {number?} minHeight
     */
    set:function (minHeight) {
        this.SetValue(goog.xaml.FrameworkElement.MinHeightProperty, minHeight);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {number?}
     */
    get:function () {
        return /** @type {number?} */(this.GetValue(goog.xaml.FrameworkElement.MinHeightProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the minimum width constraint of a FrameworkElement.
 * @type {number?}
 */
goog.xaml.FrameworkElement.prototype.MinWidth;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.MinWidthProperty = goog.xaml.DependencyProperty.Register(
    "MinWidth", goog.xaml.Number.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "MinWidth", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {number?} minWidth
     */
    set:function (minWidth) {
        this.SetValue(goog.xaml.FrameworkElement.MinWidthProperty, minWidth);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {number?}
     */
    get:function () {
        return /** @type {number?} */(this.GetValue(goog.xaml.FrameworkElement.MinWidthProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the identifying name of the object.
 * When a XAML processor creates the object tree from XAML markup,
 * run-time code can refer to the XAML-declared object by this name.
 * @type {string?}
 */
goog.xaml.FrameworkElement.prototype.Name;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.NameProperty = goog.xaml.DependencyProperty.Register(
    "Name", goog.xaml.String.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "Name", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {string?} name
     */
    set:function (name) {
        this.SetValue(goog.xaml.FrameworkElement.NameProperty, name);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {string?}
     */
    get:function () {
        return /** @type {string?} */(this.GetValue(goog.xaml.FrameworkElement.NameProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets the parent object of this FrameworkElement in the object tree.
 * @type {goog.xaml.DependencyObject?}
 */
goog.xaml.FrameworkElement.prototype.Parent = null;

/**
 * Gets the locally defined resource dictionary.
 * In XAML, you can establish resource items as child object elements
 * of a frameworkElement.Resources property element, through XAML implicit collection syntax.
 * @type {goog.xaml.ResourceDictionary?}
 */
goog.xaml.FrameworkElement.prototype.Resources = null;

/**
 * Gets or sets an instance Style that is applied for this object during rendering.
 * @type {goog.xaml.Style?}
 */
goog.xaml.FrameworkElement.prototype.Style;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.StyleProperty = goog.xaml.DependencyProperty.Register(
    "Style", goog.xaml.Style.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "Style", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {goog.xaml.Style?} style
     */
    set:function (style) {
        this.SetValue(goog.xaml.FrameworkElement.StyleProperty, style);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {goog.xaml.Style?}
     */
    get:function () {
        return /** @type {goog.xaml.Style?} */(this.GetValue(goog.xaml.FrameworkElement.StyleProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets an arbitrary object value that can be used to store custom information about this object.
 * @type {Object?}
 */
goog.xaml.FrameworkElement.prototype.Tag;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.TagProperty = goog.xaml.DependencyProperty.Register(
    "Tag", goog.xaml.Object.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "Tag", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {Object?} tag
     */
    set:function (tag) {
        this.SetValue(goog.xaml.FrameworkElement.TagProperty, tag);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {Object?}
     */
    get:function () {
        return /** @type {Object?} */(this.GetValue(goog.xaml.FrameworkElement.TagProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets the collection of triggers for animations that are defined for a FrameworkElement.
 * @type {*?} //{Array.<goog.xaml.Trigger>?}
 */
goog.xaml.FrameworkElement.prototype.Triggers = null;

/**
 * Gets or sets the vertical alignment characteristics that are applied to a FrameworkElement
 * when it is composed in a parent object such as a panel or items control.
 * @type {goog.xaml.VerticalAlignment}
 */
goog.xaml.FrameworkElement.prototype.VerticalAlignment;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.VerticalAlignmentProperty = goog.xaml.DependencyProperty.Register(
    "VerticalAlignment", goog.xaml.VerticalAlignment.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(goog.xaml.VerticalAlignment.Stretch)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "VerticalAlignment", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {goog.xaml.VerticalAlignment} verticalAlignment
     */
    set:function (verticalAlignment) {
        this.SetValue(goog.xaml.FrameworkElement.VerticalAlignmentProperty, verticalAlignment);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {goog.xaml.VerticalAlignment}
     */
    get:function () {
        return /** @type {goog.xaml.VerticalAlignment} */(this.GetValue(goog.xaml.FrameworkElement.VerticalAlignmentProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the width of a FrameworkElement.
 * The return value of this property is always the same as any value that was set to it.
 * In contrast, the value of the ActualWidth may vary.
 * @type {number?}
 */
goog.xaml.FrameworkElement.prototype.Width;

/**
 * @type {number}
 */
goog.xaml.FrameworkElement.WidthProperty = goog.xaml.DependencyProperty.Register(
    "Width", goog.xaml.Number.DependencyType, goog.xaml.FrameworkElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.FrameworkElement.prototype, "Width", {
    /**
     * @this {goog.xaml.FrameworkElement}
     * @param {number?} width
     */
    set:function (width) {
        this.SetValue(goog.xaml.FrameworkElement.WidthProperty, width);
    },
    /**
     * @this {goog.xaml.FrameworkElement}
     * @return {number?}
     */
    get:function () {
        return /** @type {number?} */(this.GetValue(goog.xaml.FrameworkElement.WidthProperty));
    },
    enumerable:true,
    configurable:true
});
