import { UAParser } from 'ua-parser-js';
export const parser = new UAParser();
export const result = parser.getResult();
export const isiOS = result.os.name === 'iOS' || result.os.name === 'Mac OS';
export const isAndroid = result.os.name === 'Android';
export const isMobile = result.device.type === 'mobile';
export const isTablet = result.device.type === 'tablet';
