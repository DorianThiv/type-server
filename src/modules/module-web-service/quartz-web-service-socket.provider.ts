import * as http from 'http';
import * as express from 'express';
import * as WebSocket from 'ws';

import { QuartzWebServiceModule } from "./quartz-web-service.module";
import { QuartzWebServiceProvider } from "./quartz-web-service.provider";
import { AddressInfo } from 'net';
import { WebServiceActionType } from './enums/web-service-action.enum';

export class QuartzWebServiceSocketProvider extends QuartzWebServiceProvider {

    private _wsserver: WebSocket.Server;
    private _ws: WebSocket;

    constructor(module: QuartzWebServiceModule, port?: number) {
        super(module);
        this._port = port ? port : 8999
    }

    public execute() {
        const app = express.default();
        this._server = http.createServer(app);
        const server = this._server;
        this._wsserver = new WebSocket.Server({ server });
        this._wsserver.on('connection', (ws) => {
            this._ws = <WebSocket>ws;
            this._ws.on('message', (message: any) => {
                this.onMessage(message);
            });
            this._ws.on('error', (error: any) => {
                this.onError(error);
            });
            this._ws.on('close', () => {
                this.onClose();
            });
        });
        this.start();
    }

    public action(action: WebServiceActionType, data: any) {
        try {
            switch (action) {
                case WebServiceActionType.Send:
                    if (this._ws && this._ws.readyState === WebSocket.OPEN) {
                        this._ws.send(data.message.toString());
                    }
                    break;
                default:
                    console.error(`Quartz web service : unknow action : ${action}`);
                    break;
            }
        } catch (error) {
            console.error('Quartz web service [error] [action()] : ' + error);
        }
    }

    private start() {
        this._server.listen(process.env.PORT || this._port, () => {
            console.log(`Quartz websocket started on port : ${(<AddressInfo>this._server.address()).port}`);
        });
    }

    private onMessage(message: any) {
        this._ws.send(`Server response: you sent -> ${message}`);
    }

    private onError(error: any) {
        console.error(error);
        this._ws.close();
        this._ws = null;
    }

    private onClose() {
        console.log('Close websocket connection');
        this._ws = null;
    }

}