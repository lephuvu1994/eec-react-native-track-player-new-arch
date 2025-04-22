#import "TPMusicModule.h"
#import <React/RCTEventEmitter.h>

#if __has_include("react_native_track_player-Swift.h")
#import "react_native_track_player-Swift.h"
#else
#import "react_native_track_player/react_native_track_player-Swift.h"
#endif

@interface TPMusicModule () <RNTrackPlayerImplDelegate>
@end

@implementation TPMusicModule {
  RNTrackPlayerImpl *musicModule;
}

RCT_EXPORT_MODULE(TPMusicModule)

- (instancetype) init {
  self = [super init];
  if (self) {
    musicModule = [RNTrackPlayerImpl new];
    // Critical: Register ourselves as the Objective-C bridge's event emitter
    musicModule.delegate = self;
  }
  return self;
}

- (NSArray<NSString *> *)supportedEvents {
  return [RNTrackPlayerImpl supportedEvents];
}

+ (BOOL)requiresMainQueueSetup {
  return NO;
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeTPMusicModuleSpecJSI>(params);
}

- (void)add:(NSArray *)tracks insertBeforeIndex:(NSNumber *)insertBeforeIndex resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule add:tracks before:insertBeforeIndex resolver:resolve rejecter:reject];
}

- (void)clearNowPlayingMetadata:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule clearNowPlayingMetadata:resolve rejecter:reject];
}

// Regular ObjC method for constants - this will be used by the old bridge
- (NSDictionary *)constantsToExport {
  return [RNTrackPlayerImpl constantsToExport];
}

- (void)getActiveTrack:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule getActiveTrack:resolve rejecter:reject];
}

- (void)getActiveTrackIndex:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule getActiveTrackIndex:resolve rejecter:reject];
}

- (void)getBufferedPosition:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule getBufferedPosition:resolve rejecter:reject];
}

- (void)getDuration:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule getDuration:resolve rejecter:reject];
}

- (void)getPlayWhenReady:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule getPlayWhenReady:resolve rejecter:reject];
}

- (void)getPlaybackState:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule getPlaybackState:resolve rejecter:reject];
}

- (void)getPosition:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule getPosition:resolve rejecter:reject];
}

- (void)getProgress:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule getProgress:resolve rejecter:reject];
}

- (void)getQueue:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule getQueue:resolve rejecter:reject];
}

- (void)getRate:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule getRate:resolve rejecter:reject];
}

- (void)getRepeatMode:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule getRepeatMode:resolve rejecter:reject];
}

- (void)getTrack:(double)trackIndex resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule getTrack:@(trackIndex) resolver:resolve rejecter:reject];
}

- (void)getVolume:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule getVolume:resolve rejecter:reject];
}

- (void)isServiceRunning:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule isServiceRunning:resolve rejecter:reject];
}

- (void)load:(NSDictionary *)track resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule load:track resolver:resolve rejecter:reject];
}

- (void)move:(double)fromIndex toIndex:(double)toIndex resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule move:@(fromIndex) toIndex:@(toIndex) resolver:resolve rejecter:reject];
}

- (void)pause:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule pause:resolve rejecter:reject];
}

- (void)play:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule play:resolve rejecter:reject];
}

- (void)remove:(NSArray *)indices resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule remove:indices resolver:resolve rejecter:reject];
}

- (void)removeUpcomingTracks:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule removeUpcomingTracks:resolve rejecter:reject];
}

- (void)reset:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule reset:resolve rejecter:reject];
}

- (void)retry:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule retry:resolve rejecter:reject];
}

- (void)seekBy:(double)seconds resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule seekBy:seconds resolver:resolve rejecter:reject];
}

- (void)seekTo:(double)seconds resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule seekTo:seconds resolver:resolve rejecter:reject];
}

- (void)setPlayWhenReady:(BOOL)playWhenReady resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule setPlayWhenReady:playWhenReady resolver:resolve rejecter:reject];
}

- (void)setQueue:(NSArray *)tracks resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule setQueue:tracks resolver:resolve rejecter:reject];
}

- (void)setRate:(double)rate resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule setRate:rate resolver:resolve rejecter:reject];
}

- (void)setRepeatMode:(double)mode resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule setRepeatMode:@(mode) resolver:resolve rejecter:reject];
}

- (void)setVolume:(double)volume resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule setVolume:volume resolver:resolve rejecter:reject];
}

- (void)setupPlayer:(NSDictionary *)options resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule setupPlayer:options resolver:resolve rejecter:reject];
}

- (void)skip:(double)index initialPosition:(NSNumber *)initialPosition resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule skip:@(index) initialTime:[initialPosition doubleValue] resolver:resolve rejecter:reject];
}

- (void)skipToNext:(NSNumber *)initialPosition resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule skipToNext:[initialPosition doubleValue] resolver:resolve rejecter:reject];
}

- (void)skipToPrevious:(NSNumber *)initialPosition resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule skipToPrevious:[initialPosition doubleValue] resolver:resolve rejecter:reject];
}

- (void)stop:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule stop:resolve rejecter:reject];
}

- (void)updateMetadataForTrack:(double)trackIndex metadata:(NSDictionary *)metadata resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule updateMetadataForTrack:@(trackIndex) metadata:metadata resolver:resolve rejecter:reject];
}

- (void)updateNowPlayingMetadata:(NSDictionary *)metadata resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule updateNowPlayingMetadata:metadata resolver:resolve rejecter:reject];
}

- (void)updateOptions:(NSDictionary *)options resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject { 
  [musicModule updateOptions:options resolver:resolve rejecter:reject];
}

// Implement the RNTrackPlayerImplDelegate protocol
- (void)sendEvent:(NSString *)name body:(id)body {
  [super sendEventWithName:name body:body];
}

- (NSDictionary *)getConstants {
    return [self constantsToExport];
}

@end
