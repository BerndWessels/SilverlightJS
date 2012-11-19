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
 * @fileoverview UIElement is a base class for most of the objects that have visual appearance
 * and can process basic input.
 */

goog.provide('goog.xaml.UIElement');

goog.require('goog.xaml.DependencyObject');
goog.require('goog.xaml.DependencyProperty');
goog.require('goog.xaml.DependencyType');
goog.require('goog.xaml.media.Brush');
goog.require('goog.xaml.media.CacheMode');
goog.require('goog.xaml.media.Effect');
goog.require('goog.xaml.media.Geometry');
goog.require('goog.xaml.media.Projection');
goog.require('goog.xaml.media.Transform');
goog.require('goog.xaml.Point');
goog.require('goog.xaml.Size');
goog.require('goog.xaml.UIComponent');
goog.require('goog.xaml.Visibility');

/**
 * @constructor
 * @extends goog.xaml.DependencyObject
 */
goog.xaml.UIElement = function () {
    goog.xaml.DependencyObject.call(this);
};

goog.inherits(goog.xaml.UIElement, goog.xaml.DependencyObject);

/**
 * Indicates the validity of the previous arrangement.
 * @type {boolean}
 * @private
 */
goog.xaml.UIElement.prototype.isArrangementValid_ = false;

/**
 * Indicated the validity of the previous measurement.
 * @type {boolean}
 * @private
 */
goog.xaml.UIElement.prototype.isMeasurementValid_ = false;

/**
 * The DOM representation of the UIElement.
 * @type {goog.xaml.UIComponent}
 */
goog.xaml.UIElement.prototype.uiComponent_ = null;

/**
 * Positions child objects and determines a size for a UIElement.
 * Parent objects that implement custom layout for their child elements should call this method
 * from their layout override implementations to form a recursive layout update.
 * @param {goog.xaml.Rect} finalRect
 */
goog.xaml.UIElement.prototype.arrange = function (finalRect) {
};

/**
 * Creates the DOM representation of the UIElement.
 */
goog.xaml.UIElement.prototype.createComponent = function () {
    this.uiComponent_ = new goog.xaml.UIComponent();
};

/**
 * Invalidates the arrange state (layout) for a UIElement.
 * After the invalidation, the UIElement will have its layout updated, which will occur asynchronously.
 */
goog.xaml.UIElement.prototype.invalidateArrange = function () {
    this.isArrangementValid_ = false;
};

/**
 * Invalidates the measurement state (layout) for a UIElement.
 */
goog.xaml.UIElement.prototype.invalidateMeasure = function () {
    this.isMeasurementValid_ = false;
};

/**
 * Updates the DesiredSize of a UIElement.
 * Typically, objects that implement custom layout for their layout children call this method
 * from their own MeasureOverride implementations to form a recursive layout update.
 * @param {goog.xaml.Size} availableSize
 */
goog.xaml.UIElement.prototype.measure = function (availableSize) {
    if (!this.DesiredSize) {
        this.DesiredSize = new goog.xaml.Size();
    }
    this.DesiredSize.Height = 0;
    this.DesiredSize.Width = 0;
};

/**
 * Renders the UIElement after it has been measured and arranged recursively.
 */
goog.xaml.UIElement.prototype.render = function () {
    //goog.style.setPosition(this.getElement(), Math.floor(finalRect.Left), Math.floor(finalRect.Top()));
    //this.getElement().height = finalRect.Height;
    //this.getElement().width = finalRect.Width;
};

/**
 * Gets or sets a value that determines whether this UIElement can be a drop target
 * for purposes of drag-and-drop operations.
 * @type {boolean}
 * @public
 */
goog.xaml.UIElement.prototype.AllowDrop;

/**
 * @type {number}
 */
goog.xaml.UIElement.AllowDropProperty = goog.xaml.DependencyProperty.Register(
    "AllowDrop", goog.xaml.Boolean.DependencyType, goog.xaml.UIElement.DependencyType, new goog.xaml.PropertyMetadata(false)
);

Object.defineProperty(goog.xaml.UIElement.prototype, "AllowDrop", {
    /**
     * @this {goog.xaml.UIElement}
     * @param {boolean} allowDrop
     */
    set:function (allowDrop) {
        this.SetValue(goog.xaml.UIElement.AllowDropProperty, allowDrop);
    },
    /**
     * @this {goog.xaml.UIElement}
     * @return {boolean}
     */
    get:function () {
        return /** @type {boolean} */(this.GetValue(goog.xaml.UIElement.AllowDropProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a value that indicates that rendered content should be cached when possible.
 * @type {goog.xaml.media.CacheMode?}
 */
goog.xaml.UIElement.prototype.CacheMode;

/**
 * @type {number}
 */
goog.xaml.UIElement.CacheModeProperty = goog.xaml.DependencyProperty.Register(
    "CacheMode", goog.xaml.media.CacheMode.DependencyType, goog.xaml.UIElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.UIElement.prototype, "CacheMode", {
    /**
     * @this {goog.xaml.UIElement}
     * @param {goog.xaml.media.CacheMode?} cacheMode
     */
    set:function (cacheMode) {
        this.SetValue(goog.xaml.UIElement.CacheModeProperty, cacheMode);
    },
    /**
     * @this {goog.xaml.UIElement}
     * @return {goog.xaml.media.CacheMode?}
     */
    get:function () {
        return /** @type {goog.xaml.media.CacheMode?} */(this.GetValue(goog.xaml.UIElement.CacheModeProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the Geometry used to define the outline of the contents of a UIElement.
 * @type {goog.xaml.media.Geometry?}
 */
goog.xaml.UIElement.prototype.Clip;

/**
 * @type {number}
 */
goog.xaml.UIElement.ClipProperty = goog.xaml.DependencyProperty.Register(
    "Clip", goog.xaml.media.Geometry.DependencyType, goog.xaml.UIElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.UIElement.prototype, "Clip", {
    /**
     * @this {goog.xaml.UIElement}
     * @param {goog.xaml.media.Geometry?} clip
     */
    set:function (clip) {
        this.SetValue(goog.xaml.UIElement.ClipProperty, clip);
    },
    /**
     * @this {goog.xaml.UIElement}
     * @return {goog.xaml.media.Geometry?}
     */
    get:function () {
        return /** @type {goog.xaml.media.Geometry?} */(this.GetValue(goog.xaml.UIElement.ClipProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * @type {number}
 */
goog.xaml.UIElement.DependencyType = goog.xaml.DependencyType.Register("goog.xaml.UIElement");

/**
 * @type {number}
 */
goog.xaml.UIElement.prototype.DependencyType = goog.xaml.UIElement.DependencyType;

/**
 * Gets the size that this UIElement computed during the measure pass of the layout process.
 * @type {goog.xaml.Size?}
 */
goog.xaml.UIElement.prototype.DesiredSize = null;

/**
 * Gets or sets the pixel shader effect to use for rendering this UIElement.
 * @type {goog.xaml.media.Effect?}
 */
goog.xaml.UIElement.prototype.Effect;

/**
 * @type {number}
 */
goog.xaml.UIElement.EffectProperty = goog.xaml.DependencyProperty.Register(
    "Effect", goog.xaml.media.Effect.DependencyType, goog.xaml.UIElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.UIElement.prototype, "Effect", {
    /**
     * @this {goog.xaml.UIElement}
     * @param {goog.xaml.media.Effect?} effect
     */
    set:function (effect) {
        this.SetValue(goog.xaml.UIElement.EffectProperty, effect);
    },
    /**
     * @this {goog.xaml.UIElement}
     * @return {goog.xaml.media.Effect?}
     */
    get:function () {
        return /** @type {goog.xaml.media.Effect?} */(this.GetValue(goog.xaml.UIElement.EffectProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets whether the contained area of this UIElement can return true values for hit testing.
 * @type {boolean}
 */
goog.xaml.UIElement.prototype.IsHitTestVisible;

/**
 * @type {number}
 */
goog.xaml.UIElement.IsHitTestVisibleProperty = goog.xaml.DependencyProperty.Register(
    "IsHitTestVisible", goog.xaml.Boolean.DependencyType, goog.xaml.UIElement.DependencyType, new goog.xaml.PropertyMetadata(true)
);

Object.defineProperty(goog.xaml.UIElement.prototype, "IsHitTestVisible", {
    /**
     * @this {goog.xaml.UIElement}
     * @param {boolean} isHitTestVisible
     */
    set:function (isHitTestVisible) {
        this.SetValue(goog.xaml.UIElement.IsHitTestVisibleProperty, isHitTestVisible);
    },
    /**
     * @this {goog.xaml.UIElement}
     * @return {boolean}
     */
    get:function () {
        return /** @type {boolean} */(this.GetValue(goog.xaml.UIElement.IsHitTestVisibleProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the degree of the object's opacity.
 * @type {number}
 */
goog.xaml.UIElement.prototype.Opacity;

/**
 * @type {number}
 */
goog.xaml.UIElement.OpacityProperty = goog.xaml.DependencyProperty.Register(
    "Opacity", goog.xaml.Number.DependencyType, goog.xaml.UIElement.DependencyType, new goog.xaml.PropertyMetadata(1)
);

Object.defineProperty(goog.xaml.UIElement.prototype, "Opacity", {
    /**
     * @this {goog.xaml.UIElement}
     * @param {number} opacity
     */
    set:function (opacity) {
        this.SetValue(goog.xaml.UIElement.OpacityProperty, opacity);
    },
    /**
     * @this {goog.xaml.UIElement}
     * @return {number}
     */
    get:function () {
        return /** @type {number} */(this.GetValue(goog.xaml.UIElement.OpacityProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the brush used to alter the opacity of regions of this object.
 * @type {goog.xaml.media.Brush?}
 */
goog.xaml.UIElement.prototype.OpacityMask = null;

/**
 * @type {number}
 */
goog.xaml.UIElement.OpacityMaskProperty = goog.xaml.DependencyProperty.Register(
    "OpacityMask", goog.xaml.media.Brush.DependencyType, goog.xaml.UIElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.UIElement.prototype, "OpacityMask", {
    /**
     * @this {goog.xaml.UIElement}
     * @param {goog.xaml.media.Brush?} opacityMask
     */
    set:function (opacityMask) {
        this.SetValue(goog.xaml.UIElement.OpacityMaskProperty, opacityMask);
    },
    /**
     * @this {goog.xaml.UIElement}
     * @return {goog.xaml.media.Brush?}
     */
    get:function () {
        return /** @type {goog.xaml.media.Brush?} */(this.GetValue(goog.xaml.UIElement.OpacityMaskProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the perspective projection (3-D effect) to apply when rendering this UIElement.
 * @type {goog.xaml.media.Projection?}
 */
goog.xaml.UIElement.prototype.Projection;

/**
 * @type {number}
 */
goog.xaml.UIElement.ProjectionProperty = goog.xaml.DependencyProperty.Register(
    "Projection", goog.xaml.media.Projection.DependencyType, goog.xaml.UIElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.UIElement.prototype, "Projection", {
    /**
     * @this {goog.xaml.UIElement}
     * @param {goog.xaml.media.Projection?} projection
     */
    set:function (projection) {
        this.SetValue(goog.xaml.UIElement.ProjectionProperty, projection);
    },
    /**
     * @this {goog.xaml.UIElement}
     * @return {goog.xaml.media.Projection?}
     */
    get:function () {
        return /** @type {goog.xaml.media.Projection?} */(this.GetValue(goog.xaml.UIElement.ProjectionProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets the final render size of a UIElement.
 * @type {goog.xaml.Size?}
 */
goog.xaml.UIElement.prototype.RenderSize = null;

/**
 * Gets or sets transform information that affects the rendering position of a UIElement.
 * @type {goog.xaml.media.Transform?}
 */
goog.xaml.UIElement.prototype.RenderTransform;

/**
 * @type {number}
 */
goog.xaml.UIElement.RenderTransformProperty = goog.xaml.DependencyProperty.Register(
    "RenderTransform", goog.xaml.media.Transform.DependencyType, goog.xaml.UIElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.UIElement.prototype, "RenderTransform", {
    /**
     * @this {goog.xaml.UIElement}
     * @param {goog.xaml.media.Transform?} renderTransform
     */
    set:function (renderTransform) {
        this.SetValue(goog.xaml.UIElement.RenderTransformProperty, renderTransform);
    },
    /**
     * @this {goog.xaml.UIElement}
     * @return {goog.xaml.media.Transform?}
     */
    get:function () {
        return /** @type {goog.xaml.media.Transform?} */(this.GetValue(goog.xaml.UIElement.RenderTransformProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the origin point of any possible render transform declared by RenderTransform,
 * relative to the bounds of the UIElement.
 * @type {goog.xaml.Point?}
 */
goog.xaml.UIElement.prototype.RenderTransformOrigin;

/**
 * @type {number}
 */
goog.xaml.UIElement.RenderTransformOriginProperty = goog.xaml.DependencyProperty.Register(
    "RenderTransformOrigin", goog.xaml.Point.DependencyType, goog.xaml.UIElement.DependencyType, new goog.xaml.PropertyMetadata(null)
);

Object.defineProperty(goog.xaml.UIElement.prototype, "RenderTransformOrigin", {
    /**
     * @this {goog.xaml.UIElement}
     * @param {goog.xaml.Point?} renderTransformOrigin
     */
    set:function (renderTransformOrigin) {
        this.SetValue(goog.xaml.UIElement.RenderTransformOriginProperty, renderTransformOrigin);
    },
    /**
     * @this {goog.xaml.UIElement}
     * @return {goog.xaml.Point?}
     */
    get:function () {
        return /** @type {goog.xaml.Point?} */(this.GetValue(goog.xaml.UIElement.RenderTransformOriginProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets a value that determines
 * whether rendering for the object and its visual subtree
 * should use rounding behavior that aligns rendering to whole pixels.
 * @type {boolean}
 */
goog.xaml.UIElement.prototype.UseLayoutRounding;

/**
 * @type {number}
 */
goog.xaml.UIElement.UseLayoutRoundingProperty = goog.xaml.DependencyProperty.Register(
    "UseLayoutRounding", goog.xaml.Boolean.DependencyType, goog.xaml.UIElement.DependencyType, new goog.xaml.PropertyMetadata(true)
);

Object.defineProperty(goog.xaml.UIElement.prototype, "UseLayoutRounding", {
    /**
     * @this {goog.xaml.UIElement}
     * @param {boolean} useLayoutRounding
     */
    set:function (useLayoutRounding) {
        this.SetValue(goog.xaml.UIElement.UseLayoutRoundingProperty, useLayoutRounding);
    },
    /**
     * @this {goog.xaml.UIElement}
     * @return {boolean}
     */
    get:function () {
        return /** @type {boolean} */(this.GetValue(goog.xaml.UIElement.UseLayoutRoundingProperty));
    },
    enumerable:true,
    configurable:true
});

/**
 * Gets or sets the visibility of a UIElement.
 * A UIElement that is not visible does not render and does not communicate its desired size to layout.
 * @type {goog.xaml.Visibility}
 */
goog.xaml.UIElement.prototype.Visibility;

/**
 * @type {number}
 */
goog.xaml.UIElement.VisibilityProperty = goog.xaml.DependencyProperty.Register(
    "Visibility", goog.xaml.Visibility.DependencyType, goog.xaml.UIElement.DependencyType, new goog.xaml.PropertyMetadata(goog.xaml.Visibility.Visible)
);

Object.defineProperty(goog.xaml.UIElement.prototype, "Visibility", {
    /**
     * @this {goog.xaml.UIElement}
     * @param {goog.xaml.Visibility} visibility
     */
    set:function (visibility) {
        this.SetValue(goog.xaml.UIElement.VisibilityProperty, visibility);
    },
    /**
     * @this {goog.xaml.UIElement}
     * @return {goog.xaml.Visibility}
     */
    get:function () {
        return /** @type {goog.xaml.Visibility} */(this.GetValue(goog.xaml.UIElement.VisibilityProperty));
    },
    enumerable:true,
    configurable:true
});
