//
//  QOverlayView.h
//  QMapKit
//
//
//  Created by jeff on 14-8-4.
//  Copyright (c) 2014年 Tencent. All rights reserved.

#import <UIKit/UIKit.h>
#import "QGeometry.h"
#import "QOverlay.h"

/*!
 *  该类是地图覆盖物View的基类, 提供了绘制overlay的接口, 但是没有实际实现。希望不要直接实例化,通常通过子类重写[drawMapRect:zoomScale:inContext:]来绘制内容
 */
@interface QOverlayView : UIView

/*!
 *  @brief  初始化并返回一个overlayView
 *
 *  @param overlay 关联的overlay对象
 *
 *  @return 初始化成功则返回overlayView,否则返回nil
 */
- (id)initWithOverlay:(id <QOverlay>)overlay;

/*!
 *  @brief  关联的overlay对象
 */
@property (nonatomic, readonly, strong) id <QOverlay> overlay;

/*!
 *  @brief  将QMapPoint转化为相对于overlayView的坐标
 *
 *  @param mapPoint 要转化的mapPoint
 *
 *  @return 相对于overlayView的本地坐标
 */
- (CGPoint)pointForMapPoint:(QMapPoint)mapPoint;

/*!
 *  @brief  将相对于overlayView的本地坐标转化为QMapPoint坐标
 *
 *  @param point 要转化的overlayView点坐标
 *
 *  @return 相对于mapView的坐标
 */
- (QMapPoint)mapPointForPoint:(CGPoint)point;

/*!
 *  @brief  将QMapRect转化为相对于overlayView的rect
 *
 *  @param mapRect 要转化的mapRect
 *
 *  @return 相对于overlayView的本地rect
 */
- (CGRect)rectForMapRect:(QMapRect)mapRect;

/*!
 *  @brief  将相对于overlayView的rect转化为QMapRect
 *
 *  @param rect 要转化的overlayView上的rect
 *
 *  @return 相对于mapView的mapRect
 */
- (QMapRect)mapRectForRect:(CGRect)rect;

/*!
 *  @brief  判断overlayView是否可以绘制包含的内容
 *
 *  @param mapRect   该QMapRect范围内需要绘制
 *  @param zoomScale 当前的缩放比例值
 *
 *  @return 是否可以进行绘制
 */
- (BOOL)canDrawMapRect:(QMapRect)mapRect
             zoomScale:(QZoomScale)zoomScale;

/*!
 *  @brief  绘制overlayView的内容
 *
 *  @param mapRect   该QMapRect范围内需要更新
 *  @param zoomScale 当前的缩放比例值
 *  @param context   绘制操作的graphics context
 */
- (void)drawMapRect:(QMapRect)mapRect
          zoomScale:(CGFloat)zoomScale
          inContext:(CGContextRef)context;

@end
