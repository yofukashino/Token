import { types as DefaultTypes } from "replugged";
export { types as DefaultTypes } from "replugged";
export { ReactElement, ComponentClass, UIEvent } from "react";
import { ComponentClass, ReactElement } from "react";
declare global {
  interface Window {
    HomeButtonContextMenuApi: HomeButtonContextMenuApi;
  }
}
export interface ContextMenuArgs {
  className: string;
  config: { context: string };
  context: string;
  onHeightUpdate: DefaultTypes.AnyFunction;
  position: null | number;
  target: HTMLElement;
  theme: string;
}
export interface ExtendedContextMenuArgs extends ContextMenuArgs {
  onClose: DefaultTypes.AnyFunction;
}
export interface ContextMenu {
  close: DefaultTypes.AnyFunction;
  open: (
    event: React.UIEvent,
    render?: ContextMenu,
    options?: { enableSpellCheck?: boolean },
    renderLazy?: Promise<ContextMenu>,
  ) => void;
  openLazy: (
    event: React.UIEvent,
    renderLazy?: Promise<ContextMenu>,
    options?: { enableSpellCheck?: boolean },
  ) => void;
}
export interface HomeButtonContextMenuApi {
  items?: Map<string, ReactElement>;
  constructor?: DefaultTypes.AnyFunction;
  addItem?: DefaultTypes.AnyFunction;
  removeItem?: DefaultTypes.AnyFunction;
  forceUpdate?: DefaultTypes.AnyFunction;
  openContextMenu?: DefaultTypes.AnyFunction;
}
export interface NavBarClasses {
  activityPanel: string;
  badgeIcon: string;
  base: string;
  circleButtonBase: string;
  circleIcon: string;
  circleIconButton: string;
  container: string;
  content: string;
  createJoinContainer: string;
  downloadProgressCircle: string;
  dragInner: string;
  errorInner: string;
  fullWidth: string;
  guildSeparator: string;
  guilds: string;
  guildsError: string;
  hasNotice: string;
  hidden: string;
  iconBadge: string;
  listItem: string;
  listItemTooltip: string;
  listItemWidth: string;
  listItemWrapper: string;
  navigationIcon: string;
  nitroUpsell: string;
  nitroUpsellIcon: string;
  panels: string;
  participating: string;
  pill: string;
  placeholderMask: string;
  plus: string;
  scroller: string;
  scrolling: string;
  selected: string;
  sidebar: string;
  tree: string;
  tutorialContainer: string;
  unavailableBadge: string;
  unreadMentionsBar: string;
  unreadMentionsIndicatorBottom: string;
  unreadMentionsIndicatorTop: string;
  upsellIcon: string;
  upsellText: string;
  upsellTooltip: string;
  wrapper: string;
}
export interface AuthBoxUtilsButtons extends ComponentClass {
  Colors: {
    BLACK: string;
    BRAND: string;
    BRAND_NEW: string;
    CUSTOM: string;
    GREEN: string;
    LINK: string;
    PRIMARY: string;
    RED: string;
    TRANSPARENT: string;
    WHITE: string;
    YELLOW: string;
  };
  Looks: {
    BLANK: string;
    FILLED: string;
    INVERTED: string;
    LINK: string;
    OUTLINED: string;
  };
  Sizes: {
    ICON: string;
    LARGE: string;
    MAX: string;
    MEDIUM: string;
    MIN: string;
    NONE: string;
    SMALL: string;
    TINY: string;
    XLARGE: string;
  };
}
export enum ModalTransitionState {
  ENTERING,
  ENTERED,
  EXITING,
  EXITED,
  HIDDEN,
}
export interface TokenLoginModalProps {
  token?: undefined | string;
  transitionState: ModalTransitionState;
  onClose: () => Promise<void>;
}
export interface LoginUtils {
  authorizeIPAddress: DefaultTypes.AnyFunction;
  authorizePayment: DefaultTypes.AnyFunction;
  forgotPassword: DefaultTypes.AnyFunction;
  getExperiments: DefaultTypes.AnyFunction;
  getLocationMetadata: DefaultTypes.AnyFunction;
  login: DefaultTypes.AnyFunction;
  loginMFA: DefaultTypes.AnyFunction;
  loginReset: DefaultTypes.AnyFunction;
  loginSMS: DefaultTypes.AnyFunction;
  loginStatusReset: DefaultTypes.AnyFunction;
  loginToken: DefaultTypes.AnyFunction;
  logout: DefaultTypes.AnyFunction;
  requestSMSToken: DefaultTypes.AnyFunction;
  resetPassword: DefaultTypes.AnyFunction;
  resetPasswordMFA: DefaultTypes.AnyFunction;
  setFingerprint: DefaultTypes.AnyFunction;
  setLoginCredentials: DefaultTypes.AnyFunction;
  startSession: DefaultTypes.AnyFunction;
  switchAccountToken: DefaultTypes.AnyFunction;
  verify: DefaultTypes.AnyFunction;
  verifyResend: DefaultTypes.AnyFunction;
  verifySSOToken: DefaultTypes.AnyFunction;
}
export interface AuthenticationStore {
  allowLogoutRedirect: DefaultTypes.AnyFunction;
  didVerifyFail: DefaultTypes.AnyFunction;
  didVerifySucceed: DefaultTypes.AnyFunction;
  getAnalyticsToken: DefaultTypes.AnyFunction;
  getAuthSessionIdHash: DefaultTypes.AnyFunction;
  getCredentials: DefaultTypes.AnyFunction;
  getCurrentRegistrationOptions: DefaultTypes.AnyFunction;
  getEmail: DefaultTypes.AnyFunction;
  getErrors: DefaultTypes.AnyFunction;
  getFingerprint: DefaultTypes.AnyFunction;
  getId: DefaultTypes.AnyFunction;
  getLogin: DefaultTypes.AnyFunction;
  getLoginStatus: DefaultTypes.AnyFunction;
  getMFASMS: DefaultTypes.AnyFunction;
  getMFATicket: DefaultTypes.AnyFunction;
  getMaskedPhone: DefaultTypes.AnyFunction;
  getRegisterStatus: DefaultTypes.AnyFunction;
  getSessionId: DefaultTypes.AnyFunction;
  getToken: DefaultTypes.AnyFunction;
  getVerifyErrors: DefaultTypes.AnyFunction;
  getVerifyingUserId: DefaultTypes.AnyFunction;
  getWebAuthnChallenge: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
  isAuthenticated: DefaultTypes.AnyFunction;
}
export interface DiscordNative {
  accessibility: {
    isAccessibilitySupportEnabled: DefaultTypes.AnyFunction;
  };
  app: {
    dock: {
      setBadge: DefaultTypes.AnyFunction;
      bounce: DefaultTypes.AnyFunction;
      cancelBounce: DefaultTypes.AnyFunction;
    };
    getBuildNumber: DefaultTypes.AnyFunction;
    getDefaultDoubleClickAction: DefaultTypes.AnyFunction;
    getModuleVersions: DefaultTypes.AnyFunction;
    getPath: DefaultTypes.AnyFunction;
    getReleaseChannel: DefaultTypes.AnyFunction;
    getVersion: DefaultTypes.AnyFunction;
    registerUserInteractionHandler: DefaultTypes.AnyFunction;
    relaunch: DefaultTypes.AnyFunction;
    setBadgeCount: DefaultTypes.AnyFunction;
  };
  clipboard: {
    copy: DefaultTypes.AnyFunction;
    copyImage: DefaultTypes.AnyFunction;
    cut: DefaultTypes.AnyFunction;
    paste: DefaultTypes.AnyFunction;
    read: DefaultTypes.AnyFunction;
  };
  clips: {
    deleteClip: DefaultTypes.AnyFunction;
    loadClip: DefaultTypes.AnyFunction;
    loadClipsDirectory: DefaultTypes.AnyFunction;
  };
  crashReporter: {
    getMetadata: DefaultTypes.AnyFunction;
    updateCrashReporter: DefaultTypes.AnyFunction;
  };
  desktopCapture: {
    getDesktopCaptureSources: DefaultTypes.AnyFunction;
  };
  features: {
    declareSupported: DefaultTypes.AnyFunction;
    supports: DefaultTypes.AnyFunction;
  };
  fileManager: {
    basename: DefaultTypes.AnyFunction;
    cleanupTempFiles: DefaultTypes.AnyFunction;
    dirname: DefaultTypes.AnyFunction;
    extname: DefaultTypes.AnyFunction;
    getModuleDataPathSync: DefaultTypes.AnyFunction;
    getModulePath: DefaultTypes.AnyFunction;
    join: DefaultTypes.AnyFunction;
    openFiles: DefaultTypes.AnyFunction;
    readLogFiles: DefaultTypes.AnyFunction;
    readTimeSeriesLogFiles: DefaultTypes.AnyFunction;
    saveWithDialog: DefaultTypes.AnyFunction;
    showItemInFolder: DefaultTypes.AnyFunction;
    showOpenDialog: DefaultTypes.AnyFunction;
  };
  gpuSettings: {
    getEnableHardwareAcceleration: DefaultTypes.AnyFunction;
    setEnableHardwareAcceleration: DefaultTypes.AnyFunction;
  };
  http: {
    getAPIEndpoint: DefaultTypes.AnyFunction;
    makeChunkedRequest: DefaultTypes.AnyFunction;
  };
  ipc: {
    invoke: DefaultTypes.AnyFunction;
    on: DefaultTypes.AnyFunction;
    send: DefaultTypes.AnyFunction;
  };
  isRenderer: boolean;
  nativeModules: {
    canBootstrapNewUpdater: boolean;
    ensureModule: DefaultTypes.AnyFunction;
    requireModule: DefaultTypes.AnyFunction;
  };
  os: {
    arch: string;
    release: string;
  };
  powerMonitor: {
    getSystemIdleTimeMs: DefaultTypes.AnyFunction;
    on: DefaultTypes.AnyFunction;
    removeAllListeners: DefaultTypes.AnyFunction;
    removeListener: DefaultTypes.AnyFunction;
  };
  powerSaveBlocker: {
    blockDisplaySleep: DefaultTypes.AnyFunction;
    cleanupDisplaySleep: DefaultTypes.AnyFunction;
    unblockDisplaySleep: DefaultTypes.AnyFunction;
  };
  process: {
    arch: string;
    env: object;
    platform: string;
  };
  processUtils: {
    flushCookies: DefaultTypes.AnyFunction;
    flushDNSCache: DefaultTypes.AnyFunction;
    flushStorageData: DefaultTypes.AnyFunction;
    getCPUCoreCount: DefaultTypes.AnyFunction;
    getCurrentCPUUsagePercent: DefaultTypes.AnyFunction;
    getCurrentMemoryUsageKB: DefaultTypes.AnyFunction;
    getLastCrash: DefaultTypes.AnyFunction;
    getMainArgvSync: DefaultTypes.AnyFunction;
    purgeMemory: DefaultTypes.AnyFunction;
  };
  remoteApp: {
    dock: {
      setBadge: DefaultTypes.AnyFunction;
      bounce: DefaultTypes.AnyFunction;
      cancelBounce: DefaultTypes.AnyFunction;
    };
    getBuildNumber: DefaultTypes.AnyFunction;
    getDefaultDoubleClickAction: DefaultTypes.AnyFunction;
    getModuleVersions: DefaultTypes.AnyFunction;
    getPath: DefaultTypes.AnyFunction;
    getReleaseChannel: DefaultTypes.AnyFunction;
    getVersion: DefaultTypes.AnyFunction;
    registerUserInteractionHandler: DefaultTypes.AnyFunction;
    relaunch: DefaultTypes.AnyFunction;
    setBadgeCount: DefaultTypes.AnyFunction;
  };
  remotePowerMonitor: {
    getSystemIdleTimeMs: DefaultTypes.AnyFunction;
    on: DefaultTypes.AnyFunction;
    removeAllListeners: DefaultTypes.AnyFunction;
    removeListener: DefaultTypes.AnyFunction;
  };
  safeStorage: {
    decryptString: DefaultTypes.AnyFunction;
    encryptString: DefaultTypes.AnyFunction;
    isEncryptionAvailable: DefaultTypes.AnyFunction;
  };
  setUncaughtExceptionHandler: DefaultTypes.AnyFunction;
  settings: {
    get: DefaultTypes.AnyFunction;
    getSync: DefaultTypes.AnyFunction;
    set: DefaultTypes.AnyFunction;
  };
  spellCheck: {
    getAvailableDictionaries: DefaultTypes.AnyFunction;
    on: DefaultTypes.AnyFunction;
    removeListener: DefaultTypes.AnyFunction;
    replaceMisspelling: DefaultTypes.AnyFunction;
    setLearnedWords: DefaultTypes.AnyFunction;
    setLocale: DefaultTypes.AnyFunction;
  };
  thumbar: { setThumbarButtons: DefaultTypes.AnyFunction };
  userDataCache: {
    cacheUserData: DefaultTypes.AnyFunction;
    deleteCache: DefaultTypes.AnyFunction;
    getCached: DefaultTypes.AnyFunction;
  };
  window: {
    USE_OSX_NATIVE_TRAFFIC_LIGHTS: boolean;
    blur: DefaultTypes.AnyFunction;
    close: DefaultTypes.AnyFunction;
    flashFrame: DefaultTypes.AnyFunction;
    focus: DefaultTypes.AnyFunction;
    fullscreen: DefaultTypes.AnyFunction;
    isAlwaysOnTop: DefaultTypes.AnyFunction;
    maximize: DefaultTypes.AnyFunction;
    minimize: DefaultTypes.AnyFunction;
    restore: DefaultTypes.AnyFunction;
    setAlwaysOnTop: DefaultTypes.AnyFunction;
    setBackgroundThrottling: DefaultTypes.AnyFunction;
    setDevtoolsCallbacks: DefaultTypes.AnyFunction;
    setProgressBar: DefaultTypes.AnyFunction;
    setZoomFactor: DefaultTypes.AnyFunction;
  };
}
export interface LocaleManager {
  Messages: DefaultTypes.ObjectExports;
  loadPromise: DefaultTypes.ObjectExports;
  _chosenLocale: string;
  _events: DefaultTypes.ObjectExports;
  _eventsCount: number;
  _getMessages: DefaultTypes.AnyFunction;
  _getParsedMessages: DefaultTypes.AnyFunction;
  _handleNewListener: DefaultTypes.AnyFunction;
  _languages: Array<{
    code: string;
    enabled: boolean;
    englishName: string;
    name: string;
    postgresLang: string;
  }>;
  _maxListeners: undefined | string;
  _provider: DefaultTypes.ObjectExports;
  _requestedLocale: string;
}
export interface GenericModule {
  [key: string]: DefaultTypes.AnyFunction;
}
export interface Settings {
  showToast: boolean;
}
