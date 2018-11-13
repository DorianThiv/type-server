import { IQuartzSubscription } from "../interfaces/quartz-subscription.interface";
import { QuartzIOType } from "../../enums/quartz-io.enum";
import { QuartzModuleLoader } from "../quartz.loader";
import { QuartzBaseModule } from "./quartz-base.module";

export class QuartzBaseSubscriber {

    protected _module: QuartzBaseModule;
    protected _modulesToSubscribe: string[];

    public subscriptions: Map<string, IQuartzSubscription[]>;

    constructor(module: QuartzBaseModule) {
        this._module = module;
        this.subscriptions = new Map<string, IQuartzSubscription[]>();
    }

    public subscribe(ref: string, sub: IQuartzSubscription) {
        if (this.subscriptions) {
            const subs = this.subscriptions.get(ref);
            if (subs) {
                subs.push(sub);
            } else {
                this.subscriptions.set(ref, [sub]);
            }
        }
    }

    public subscribeTo(ref: string, action: QuartzIOType, method: Function) {
        const subscriber = QuartzModuleLoader.getModuleSubscriber(ref);
        if (subscriber) {
            console.log(subscriber);
        }
    }

    public subscribeAll(action: QuartzIOType, method: Function) {
        this._modulesToSubscribe.forEach(mod => {
            const subscriber = QuartzModuleLoader.getModuleSubscriber(mod);
            if (subscriber) {
                subscriber.subscribe(this._module.reference, { action: action, method: method() });
            }
        });
    }

    public notify(ref: string, action: QuartzIOType, data: any) {
        if (this.subscriptions) {
            const subs = this.subscriptions.get(ref);
            if (subs) {
                subs.forEach(sub => { if (sub.action === action) { sub.method(sub.action, data); } });
            }
        }
    }

    public notifyAll(ref: string, data: any) {
        if (this.subscriptions) {
            const subs = this.subscriptions.get(ref);
            if (subs) {
                subs.forEach(sub => sub.method(sub.action, data));
            }
        }
    }

}
