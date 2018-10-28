
/**
 * Quartz Modules Interface
 * ------------------------
 * Interface all modules to be loaded more efficiently
 */

export interface IQuartzModule {

    initialize(): boolean;
    
    execute(): boolean;

    uninitialize(): boolean;

}
