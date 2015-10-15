//
//  RNTencentMap.m
//  RNTencentMap
//
//  Created by soliury on 15/10/13.
//  Copyright (c) 2015年 meituan. All rights reserved.
//

#import "RNTencentMapManager.h"


@interface RNTencentMapManager() <QMapViewDelegate>
@end


@implementation RNTencentMapManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)
RCT_EXPORT_VIEW_PROPERTY(hidden, BOOL)
RCT_EXPORT_VIEW_PROPERTY(scrollEnabled,BOOL)
RCT_EXPORT_VIEW_PROPERTY(showsUserLocation,BOOL)

RCT_CUSTOM_VIEW_PROPERTY(frame, CGRect, RNTencentMapManager){
    
}



- (QMapView *)view
{
    [QMapServices sharedServices].apiKey = @"ZPZBZ-3V2HD-ENU4M-PYUZO-GEQVE-KPB2S";
    QMapView *map = [[QMapView alloc] initWithFrame:CGRectMake(0, 0, 350, 350)];
    
    map.multipleTouchEnabled=YES;
    [map sizeToFit];
    
    
    map.delegate = self;
    self.mapView = map;
    return map;
}





-(void) mapViewWillStartLocatingUser:(QMapView *)mapView{
    
}


-(void) mapViewDidFailLoadingMap:(QMapView *)mapView withError:(NSError *)error{
    
}



-(void) mapView:(QMapView *)mapView regionDidChangeAnimated:(BOOL)animated{
    QCoordinateRegion region = mapView.region;
    
    [self.bridge.eventDispatcher sendDeviceEventWithName: @"RegionChange"
                                                    body: @{
                                                            @"latitude": @(region.center.latitude),
                                                            @"longitude": @(region.center.longitude),
                                                            @"latitudeDelta": @(region.span.latitudeDelta),
                                                            @"longitudeDelta": @(region.span.longitudeDelta),
                                                            }];
}
@end


