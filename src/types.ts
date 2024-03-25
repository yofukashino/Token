import { types } from "replugged";
import type Util from "replugged/dist/renderer/util";
import type HBCM from "./lib/HomeButtonContextMenuApi";
export namespace Types {
  export import DefaultTypes = types;
  export type ReactTree = Util.Tree & React.ReactElement;
  export type GenericModule = Record<string, DefaultTypes.AnyFunction>;
  export interface WebAuth {
    Button: React.ComponentType<{
      color: string;
      look: string;
      className: string;
      onClick: () => void;
      children: string;
    }> & {
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
    };
    IncompatibleBrowser: DefaultTypes.AnyFunction;
    default: DefaultTypes.AnyFunction;
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
    getToken: () => string;
    getVerifyErrors: DefaultTypes.AnyFunction;
    getVerifyingUserId: DefaultTypes.AnyFunction;
    getWebAuthnChallenge: DefaultTypes.AnyFunction;
    initialize: DefaultTypes.AnyFunction;
    isAuthenticated: DefaultTypes.AnyFunction;
  }

  export interface Settings {
    showToast: boolean;
  }
}
export default Types;

declare global {
  interface Window {
    HomeButtonContextMenuApi: HBCM;
  }
  export const DiscordNative: {
    accessibility: {
      isAccessibilitySupportEnabled: Types.DefaultTypes.AnyFunction;
    };
    app: {
      dock: {
        setBadge: Types.DefaultTypes.AnyFunction;
        bounce: Types.DefaultTypes.AnyFunction;
        cancelBounce: Types.DefaultTypes.AnyFunction;
      };
      getBuildNumber: Types.DefaultTypes.AnyFunction;
      getDefaultDoubleClickAction: Types.DefaultTypes.AnyFunction;
      getModuleVersions: Types.DefaultTypes.AnyFunction;
      getPath: Types.DefaultTypes.AnyFunction;
      getReleaseChannel: Types.DefaultTypes.AnyFunction;
      getVersion: Types.DefaultTypes.AnyFunction;
      registerUserInteractionHandler: Types.DefaultTypes.AnyFunction;
      relaunch: Types.DefaultTypes.AnyFunction;
      setBadgeCount: Types.DefaultTypes.AnyFunction;
    };
    clipboard: {
      copy: Types.DefaultTypes.AnyFunction;
      copyImage: Types.DefaultTypes.AnyFunction;
      cut: Types.DefaultTypes.AnyFunction;
      paste: Types.DefaultTypes.AnyFunction;
      read: Types.DefaultTypes.AnyFunction;
    };
    clips: {
      deleteClip: Types.DefaultTypes.AnyFunction;
      loadClip: Types.DefaultTypes.AnyFunction;
      loadClipsDirectory: Types.DefaultTypes.AnyFunction;
    };
    crashReporter: {
      getMetadata: Types.DefaultTypes.AnyFunction;
      updateCrashReporter: Types.DefaultTypes.AnyFunction;
    };
    desktopCapture: {
      getDesktopCaptureSources: Types.DefaultTypes.AnyFunction;
    };
    features: {
      declareSupported: Types.DefaultTypes.AnyFunction;
      supports: Types.DefaultTypes.AnyFunction;
    };
    fileManager: {
      basename: Types.DefaultTypes.AnyFunction;
      cleanupTempFiles: Types.DefaultTypes.AnyFunction;
      dirname: Types.DefaultTypes.AnyFunction;
      extname: Types.DefaultTypes.AnyFunction;
      getModuleDataPathSync: Types.DefaultTypes.AnyFunction;
      getModulePath: Types.DefaultTypes.AnyFunction;
      join: Types.DefaultTypes.AnyFunction;
      openFiles: Types.DefaultTypes.AnyFunction;
      readLogFiles: Types.DefaultTypes.AnyFunction;
      readTimeSeriesLogFiles: Types.DefaultTypes.AnyFunction;
      saveWithDialog: Types.DefaultTypes.AnyFunction;
      showItemInFolder: Types.DefaultTypes.AnyFunction;
      showOpenDialog: Types.DefaultTypes.AnyFunction;
    };
    gpuSettings: {
      getEnableHardwareAcceleration: Types.DefaultTypes.AnyFunction;
      setEnableHardwareAcceleration: Types.DefaultTypes.AnyFunction;
    };
    http: {
      getAPIEndpoint: Types.DefaultTypes.AnyFunction;
      makeChunkedRequest: Types.DefaultTypes.AnyFunction;
    };
    ipc: {
      invoke: Types.DefaultTypes.AnyFunction;
      on: Types.DefaultTypes.AnyFunction;
      send: Types.DefaultTypes.AnyFunction;
    };
    isRenderer: boolean;
    nativeModules: {
      canBootstrapNewUpdater: boolean;
      ensureModule: Types.DefaultTypes.AnyFunction;
      requireModule: Types.DefaultTypes.AnyFunction;
    };
    os: {
      arch: string;
      release: string;
    };
    powerMonitor: {
      getSystemIdleTimeMs: Types.DefaultTypes.AnyFunction;
      on: Types.DefaultTypes.AnyFunction;
      removeAllListeners: Types.DefaultTypes.AnyFunction;
      removeListener: Types.DefaultTypes.AnyFunction;
    };
    powerSaveBlocker: {
      blockDisplaySleep: Types.DefaultTypes.AnyFunction;
      cleanupDisplaySleep: Types.DefaultTypes.AnyFunction;
      unblockDisplaySleep: Types.DefaultTypes.AnyFunction;
    };
    process: {
      arch: string;
      env: object;
      platform: string;
    };
    processUtils: {
      flushCookies: Types.DefaultTypes.AnyFunction;
      flushDNSCache: Types.DefaultTypes.AnyFunction;
      flushStorageData: Types.DefaultTypes.AnyFunction;
      getCPUCoreCount: Types.DefaultTypes.AnyFunction;
      getCurrentCPUUsagePercent: Types.DefaultTypes.AnyFunction;
      getCurrentMemoryUsageKB: Types.DefaultTypes.AnyFunction;
      getLastCrash: Types.DefaultTypes.AnyFunction;
      getMainArgvSync: Types.DefaultTypes.AnyFunction;
      purgeMemory: Types.DefaultTypes.AnyFunction;
    };
    remoteApp: {
      dock: {
        setBadge: Types.DefaultTypes.AnyFunction;
        bounce: Types.DefaultTypes.AnyFunction;
        cancelBounce: Types.DefaultTypes.AnyFunction;
      };
      getBuildNumber: Types.DefaultTypes.AnyFunction;
      getDefaultDoubleClickAction: Types.DefaultTypes.AnyFunction;
      getModuleVersions: Types.DefaultTypes.AnyFunction;
      getPath: Types.DefaultTypes.AnyFunction;
      getReleaseChannel: Types.DefaultTypes.AnyFunction;
      getVersion: Types.DefaultTypes.AnyFunction;
      registerUserInteractionHandler: Types.DefaultTypes.AnyFunction;
      relaunch: Types.DefaultTypes.AnyFunction;
      setBadgeCount: Types.DefaultTypes.AnyFunction;
    };
    remotePowerMonitor: {
      getSystemIdleTimeMs: Types.DefaultTypes.AnyFunction;
      on: Types.DefaultTypes.AnyFunction;
      removeAllListeners: Types.DefaultTypes.AnyFunction;
      removeListener: Types.DefaultTypes.AnyFunction;
    };
    safeStorage: {
      decryptString: Types.DefaultTypes.AnyFunction;
      encryptString: Types.DefaultTypes.AnyFunction;
      isEncryptionAvailable: Types.DefaultTypes.AnyFunction;
    };
    setUncaughtExceptionHandler: Types.DefaultTypes.AnyFunction;
    settings: {
      get: Types.DefaultTypes.AnyFunction;
      getSync: Types.DefaultTypes.AnyFunction;
      set: Types.DefaultTypes.AnyFunction;
    };
    spellCheck: {
      getAvailableDictionaries: Types.DefaultTypes.AnyFunction;
      on: Types.DefaultTypes.AnyFunction;
      removeListener: Types.DefaultTypes.AnyFunction;
      replaceMisspelling: Types.DefaultTypes.AnyFunction;
      setLearnedWords: Types.DefaultTypes.AnyFunction;
      setLocale: Types.DefaultTypes.AnyFunction;
    };
    thumbar: { setThumbarButtons: Types.DefaultTypes.AnyFunction };
    userDataCache: {
      cacheUserData: Types.DefaultTypes.AnyFunction;
      deleteCache: Types.DefaultTypes.AnyFunction;
      getCached: Types.DefaultTypes.AnyFunction;
    };
    window: {
      USE_OSX_NATIVE_TRAFFIC_LIGHTS: boolean;
      blur: Types.DefaultTypes.AnyFunction;
      close: Types.DefaultTypes.AnyFunction;
      flashFrame: Types.DefaultTypes.AnyFunction;
      focus: Types.DefaultTypes.AnyFunction;
      fullscreen: Types.DefaultTypes.AnyFunction;
      isAlwaysOnTop: Types.DefaultTypes.AnyFunction;
      maximize: Types.DefaultTypes.AnyFunction;
      minimize: Types.DefaultTypes.AnyFunction;
      restore: Types.DefaultTypes.AnyFunction;
      setAlwaysOnTop: Types.DefaultTypes.AnyFunction;
      setBackgroundThrottling: Types.DefaultTypes.AnyFunction;
      setDevtoolsCallbacks: Types.DefaultTypes.AnyFunction;
      setProgressBar: Types.DefaultTypes.AnyFunction;
      setZoomFactor: Types.DefaultTypes.AnyFunction;
    };
  };
}
