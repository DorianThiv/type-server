
/**
 * Server Modules Interface
 * ------------------------
 * Interface all modules to be loaded more efficiently
 */

export interface IServerModule {

    initialize(): boolean;
    
    execute(): boolean;

    uninitialize(): boolean;

}
