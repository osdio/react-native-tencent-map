//
//  QPinAnnotationView.h
//  QMapKit
//
//
//  Created by jeff on 14-8-4.
//  Copyright (c) 2014年 Tencent. All rights reserved.

#import "QAnnotationView.h"

typedef NS_ENUM(NSUInteger, QPinAnnotationColor) {
    QPinAnnotationColorRed = 0, ///<大头针红色
    QPinAnnotationColorGreen,   ///<大头针绿色
    QPinAnnotationColorPurple   ///<大头针紫色
};

/*!
 *  提供类似大头针效果的annotationView
 */
@interface QPinAnnotationView : QAnnotationView

/*!
 *  @brief  大头针的颜色
 */
@property (nonatomic) QPinAnnotationColor pinColor;

/*!
 *  @brief  动画效果
 */
@property (nonatomic) BOOL animatesDrop;

@end
