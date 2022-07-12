export enum IpcChannels {
  MENU_NEW_PROJECT = 'MENU_NEW_PROJECT',
  MENU_OPEN_SETTINGS = 'MENU_OPEN_SETTINGS',
  MENU_IMPORT_PROJECT = 'MENU_IMPORT_PROJECT',

  PROJECT_CREATE_SCAN = 'PROJECT_CREATE_SCAN',
  PROJECT_OPEN_SCAN = 'PROJECT_OPEN_SCAN',
  PROJECT_RESUME_SCAN = 'PROJECT_RESUME_SCAN',
  PROJECT_STOP_SCAN = 'PROJECT_STOP_SCAN',
  PROJECT_RESCAN = 'PROJECT_RESCAN',

  PROJECT_SET_ROOT = 'PROJECT_SET_ROOT',
  PROJECT_DEFINE_COMPONENTS = 'PROJECT_DEFINE_COMPONENTS',
  PROJECT_DEFINE_LICENSES = 'PROJECT_DEFINE_LICENSES',
  PROJECT_INCLUDE_ITEM = 'PROJECT_INCLUDE_ITEM',

  PROJECT_READ_TREE = 'PROJECT_READ_TREE',

  PROJECT_ADD_FILTER = 'PROJECT_ADD_FILTER',
  PROJECT_DELETE_FILTER = 'PROJECT_DELETE_FILTER',
  PROJECT_SET_FILTER = 'PROJECT_SET_FILTER',
  PROJECT_SET_FILE_TREE_VIEW_MODE = 'PROJECT_SET_FILE_TREE_VIEW_MODE',

  SCANNER_INIT_SCAN = 'SCANNER_INIT_SCAN',
  SCANNER_FINISH_SCAN = 'SCANNER_FINISH_SCAN',
  SCANNER_UPDATE_STATUS = 'SCANNER_UPDATE_STATUS',
  SCANNER_ERROR_STATUS = 'SCANNER_ERROR_STATUS',
  SCANNER_RESUME = 'SCANNER_RESUME',
  SCANNER_STOP = 'SCANNER_STOP',

  SCANNER_ABORTED = 'SCANNER_ABORTED',

  UTILS_GET_PROJECT_DTO = 'UTILS_GET_PROJECT_DTO',
  UTILS_PROJECT_NAME = 'UTILS_PROJECT_NAME',
  UTILS_GET_NODE_FROM_PATH = ' UTILS_GET_NODE_FROM_PATH',
  GET_TOKEN = 'GET_TOKEN',
  GET_API_KEY = 'GET_API_KEY',
  GET_LICENSES = 'GET_LICENSES',

  INVENTORY_CREATE = 'INVENTORY_CREATE',
  INVENTORY_GET = 'INVENTORY_GET',
  INVENTORY_GET_ALL = 'INVENTORY_GET_ALL',
  INVENTORY_DELETE = 'INVENTORY_DELETE',
  INVENTORY_UPDATE = 'INVENTORY_UPDATE',
  INVENTORY_ATTACH_FILE = 'INVENTORY_ATTACH_FILE',
  INVENTORY_DETACH_FILE = 'INVENTORY_DETACH_FILE',
  INVENTORY_FROM_COMPONENT = 'INVENTORY_FROM_COMPONENT',
  INVENTORY_BATCH = 'INVENTORY_BATCH',
  INVENTORY_ACCEPT_PRE_LOAD = 'INVENTORY_ACCEPT_PRE_LOAD',

  COMPONENT_CREATE = 'COMPONENT_CREATE',
  COMPONENT_DELETE = 'COMPONENT_DELETE',
  COMPONENT_UPDATE = 'COMPONENT_UPDATE',
  COMPONENT_GET_FILES = 'COMPONENT_GET_FILES',
  COMPONENT_ATTACH_LICENSE = 'COMPONENT_ATTACH_LICENSE',
  COMPONENT_DETACH_LICENSE = 'COMPONENT_DETACH_LICENSE',
  COMPONENT_GET_ALL = 'COMPONENT_GET_ALL',
  COMPONENT_GET = 'COMPONENT_GET',
  COMPONENT_GET_GLOBAL_COMPONENTS = 'COMPONENT_GET_GLOBAL_COMPONENTS',
  COMPONENT_GET_GLOBAL_COMPONENT_VERSION = 'COMPONENT_GET_GLOBAL_COMPONENT_VERSION',

  LICENSE_CREATE = 'LICENSE_CREATE',
  LICENSE_GET = 'LICENSE_GET',
  LICENSE_GET_ALL = 'LICENSE_GET_ALL',
  LICENSE_DELETE = 'LICENSE_DELETE',
  LICENSE_UPDATE = 'LICENSE_UPDATE',

  FILE_GET_CONTENT = 'FILE_GET_CONTENT',
  IGNORED_FILES = 'IGNORED_FILES',
  FILE_GET = 'FILE_GET',

  RESULTS_GET = 'RESULTS_GET',

  EXPORT = 'EXPORT',
  EXPORT_NOTARIZE_SBOM = ' EXPORT_NOTARIZE_SBOM',

  WORKSPACE_PROJECT_LIST = 'WORKSPACE_PROJECT_LIST',
  WORKSPACE_DELETE_PROJECT = 'WORKSPACE_DELETE_PROJECT',
  WORKSPACE_CREATE_PROJECT = 'WORKSPACE_CREATE_PROJECT',
  WORKSPACE_IMPORT_PROJECT = 'WORKSPACE_IMPORT_PROJECT',
  WORKSPACE_EXPORT_PROJECT = 'WORKSPACE_EXPORT_PROJECT',

  REPORT_SUMMARY = 'REPORT_SUMMARY',
  REPORT_DETECTED = 'REPORT_DETECTED',
  REPORT_IDENTIFIED = 'REPORT_IDENTIFIED',

  USER_SETTING_SET = 'USER_SETTING_SET',
  USER_SETTING_GET = 'USER_SETTING_GET',

  TREE_UPDATING = 'UPDATING_TREE',
  TREE_UPDATED = 'TREE_UPDATED',

  SEARCH_ENGINE_START_INDEXING = 'SEARCH_ENGINE_START_INDEXING',
  SEARCH_ENGINE_SEARCH = 'SEARCH_ENGINE_SEARCH',
  SEARCH_ENGINE_SEARCH_RESPONSE = 'SEARCH_ENGINE_SEARCH_RESPONSE',

  DEPENDENCY_GET_ALL = 'DEPENDENCY_GET_ALL',
  DEPENDENCY_ACCEPT = 'DEPENDENCY_ACCEPT',
  DEPENDENCY_RESTORE_ALL = 'DEPENDENCY_RESTORE_ALL',
  DEPENDENCY_RESTORE = 'DEPENDENCY_RESTORE',
  DEPENDENCY_ACCEPT_ALL = 'DEPENDENCY_ACCEPT_ALL',
  DEPENDENCY_REJECT = 'DEPENDENCY_REJECT',
  DEPENDENCY_REJECT_ALL = 'DEPENDENCY_REJECT_ALL',

  DIALOG_SHOW_OPEN_DIALOG = 'DIALOG_SHOW_OPEN_DIALOG',
  DIALOG_SHOW_SAVE_DIALOG = 'DIALOG_SHOW_SAVE_DIALOG',
  DIALOG_SHOW_ERROR_BOX = 'DIALOG_SHOW_ERROR_BOX',
  DIALOG_BUILD_CUSTOM_POPUP_MENU = 'DIALOG_BUILD_CUSTOM_POPUP_MENU',

  APP_GET_APP_INFO = 'APP_GET_APP_INFO',

  CONTEXT_MENU_COMMAND = 'CONTEXT_MENU_COMMAND',
  MIGRATION_INIT = 'MIGRATION_INIT',

  MIGRATION_FINISH = 'MIGRATION_FINISH',
}

export const ipcMainEvents = [
  IpcChannels.SCANNER_UPDATE_STATUS,
  IpcChannels.SCANNER_FINISH_SCAN,
  IpcChannels.SCANNER_ERROR_STATUS,
  IpcChannels.SCANNER_ABORTED,
];

export const ipcRendererEvents = [
  IpcChannels.PROJECT_CREATE_SCAN,
  IpcChannels.PROJECT_SET_ROOT,
  IpcChannels.PROJECT_DEFINE_COMPONENTS,
  IpcChannels.PROJECT_DEFINE_LICENSES,
  IpcChannels.PROJECT_INCLUDE_ITEM,
  IpcChannels.PROJECT_ADD_FILTER,
  IpcChannels.PROJECT_DELETE_FILTER,
  IpcChannels.PROJECT_SET_FILTER,
  IpcChannels.PROJECT_SET_FILE_TREE_VIEW_MODE,

  IpcChannels.SCANNER_INIT_SCAN,
  IpcChannels.SCANNER_RESUME,

  IpcChannels.INVENTORY_CREATE,
  IpcChannels.INVENTORY_GET,
  IpcChannels.INVENTORY_GET_ALL,
  IpcChannels.INVENTORY_DELETE,
  IpcChannels.INVENTORY_UPDATE,
  IpcChannels.INVENTORY_ATTACH_FILE,
  IpcChannels.INVENTORY_DETACH_FILE,
  IpcChannels.INVENTORY_FROM_COMPONENT,
  IpcChannels.INVENTORY_BATCH,
  IpcChannels.INVENTORY_ACCEPT_PRE_LOAD,

  IpcChannels.COMPONENT_CREATE,
  IpcChannels.COMPONENT_DELETE,
  IpcChannels.COMPONENT_GET,
  IpcChannels.COMPONENT_GET_ALL,
  IpcChannels.COMPONENT_DETACH_LICENSE,
  IpcChannels.COMPONENT_ATTACH_LICENSE,
  IpcChannels.COMPONENT_GET_FILES,
  IpcChannels.COMPONENT_GET_ALL,
  IpcChannels.COMPONENT_GET_GLOBAL_COMPONENTS,
  IpcChannels.COMPONENT_GET_GLOBAL_COMPONENT_VERSION,

  IpcChannels.LICENSE_CREATE,
  IpcChannels.LICENSE_GET,
  IpcChannels.LICENSE_GET_ALL,
  IpcChannels.LICENSE_UPDATE,
  IpcChannels.LICENSE_DELETE,

  IpcChannels.FILE_GET_CONTENT,
  IpcChannels.FILE_GET,
  IpcChannels.IGNORED_FILES,

  IpcChannels.RESULTS_GET,

  IpcChannels.EXPORT,
  IpcChannels.EXPORT_NOTARIZE_SBOM,

  IpcChannels.REPORT_SUMMARY,
  IpcChannels.REPORT_DETECTED,
  IpcChannels.REPORT_IDENTIFIED,

  IpcChannels.UTILS_GET_PROJECT_DTO,
  IpcChannels.UTILS_PROJECT_NAME,
  IpcChannels.UTILS_GET_NODE_FROM_PATH,
  IpcChannels.GET_TOKEN,
  IpcChannels.GET_API_KEY,
  IpcChannels.GET_LICENSES,

  IpcChannels.WORKSPACE_PROJECT_LIST,
  IpcChannels.WORKSPACE_DELETE_PROJECT,
  IpcChannels.WORKSPACE_CREATE_PROJECT,

  IpcChannels.USER_SETTING_SET,
  IpcChannels.USER_SETTING_GET,

  IpcChannels.DEPENDENCY_GET_ALL,
  IpcChannels.DEPENDENCY_ACCEPT,
  IpcChannels.DEPENDENCY_REJECT,
  IpcChannels.DEPENDENCY_ACCEPT_ALL,
  IpcChannels.DEPENDENCY_REJECT,
  IpcChannels.DEPENDENCY_REJECT_ALL,
  IpcChannels.DEPENDENCY_RESTORE,
  IpcChannels.DEPENDENCY_RESTORE_ALL,

  IpcChannels.DIALOG_SHOW_OPEN_DIALOG,
  IpcChannels.DIALOG_SHOW_SAVE_DIALOG,
  IpcChannels.DIALOG_SHOW_ERROR_BOX,
  IpcChannels.DIALOG_BUILD_CUSTOM_POPUP_MENU,

  IpcChannels.APP_GET_APP_INFO,

  IpcChannels.CONTEXT_MENU_COMMAND,

  IpcChannels.SEARCH_ENGINE_START_INDEXING,
  IpcChannels.SEARCH_ENGINE_SEARCH_RESPONSE,

  IpcChannels.MIGRATION_INIT,
  IpcChannels.MIGRATION_FINISH,
];
