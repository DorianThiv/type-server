
/**
 * Quartz Modules Interface
 * ------------------------
 * Interface all modules to be loaded more efficiently
 */

export interface IQuartzModule {

    initialize();
    
    execute();

    uninitialize();

}
