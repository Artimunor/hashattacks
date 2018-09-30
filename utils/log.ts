export const LOG_LEVEL = {
    ERROR:  0x01,
    WARN:   0x02,
    INFO:   0x04,
    DEBUG:  0x08,
    ALL:    0xff,
};

export class Log {

    public static level: number = 0;

    public static debug(tag: string, ...args: any[]) {
        Log.log(LOG_LEVEL.DEBUG, "DEBUG", tag, ...args);
    }

    public static info(tag: string, ...args: any[]) {
        Log.log(LOG_LEVEL.INFO, "INFO", tag, ...args);
    }

    public static warn(tag: string, ...args: any[]) {
        Log.log(LOG_LEVEL.WARN, "WARN", tag, ...args);
    }

    public static error(tag: string, ...args: any[]) {
        Log.log(LOG_LEVEL.ERROR, "ERROR", tag, ...args);
    }

    private static log(level: number, type: string, tag: string, ...args: any[]) {
        if (Log.level & level) {
            console.log(`${new Date().toISOString()} [${type}] ${tag}:`, ...args);
        }
    }
}