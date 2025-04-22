"use strict";

import { TurboModuleRegistry } from 'react-native';
const module = TurboModuleRegistry.getEnforcing('TPMusicModule');
export const Constants = module?.getConstants();
export default module;
//# sourceMappingURL=NativeTPMusicModule.js.map