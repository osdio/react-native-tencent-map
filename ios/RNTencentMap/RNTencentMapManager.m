//
//  RNTencentMap.m
//  RNTencentMap
//
//  Created by soliury on 15/10/13.
//  Copyright (c) 2015年 meituan. All rights reserved.
//

#import "RNTencentMapManager.h"


@implementation RNTencentMap

RCT_EXPORT_MODULE()

- (QMapView *)view
{
    return [[QMapView alloc] init];
}

@end
