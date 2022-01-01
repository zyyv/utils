// @ts-ignore
export const isWindow = (val: any): boolean => typeof window !== 'undefined' && toString(val) === '[object Window]'

// @ts-ignore
export const inBrowser = typeof window !== 'undefined'

// @ts-ignore
export const isWechatBrowser = () => (navigator?.userAgent.toLowerCase() as string).includes('micromessenger')

// @ts-ignore
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
export const isIE = UA && /msie|trident/.test(UA)
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
export const isEdge = UA && UA.indexOf('edge/') > 0
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
export const isPhantomJS = UA && /phantomjs/.test(UA)
export const isFF = UA && UA.match(/firefox\/(\d+)/)
