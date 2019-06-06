declare function isFile(v: any): boolean;
declare function isFunction(v: any): boolean;
declare function isString(v: any): boolean;
declare function noop(): void;
declare function delay(ms: number): Promise<{}>;
declare const _default: {
    isFile: typeof isFile;
    isFunction: typeof isFunction;
    isString: typeof isString;
    noop: typeof noop;
    delay: typeof delay;
};
export default _default;
