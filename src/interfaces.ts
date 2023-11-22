interface ExtendedScreenOrientation extends ScreenOrientation {
  lock(orientation: string): Promise<void>;
}
interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<"granted" | "denied">;
}
