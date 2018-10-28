import { QuartzBaseService } from "../module-base/quartz-base.service";
import { QuartzModuleLoader } from "../quartz.loader";
import { WebServiceActionType } from "../module-web-service/enums/web-service-action.enum";
import { QuartzWebServiceModule } from "../module-web-service/quartz-web-service.module";
import { WebServiceConnectionType } from "../module-web-service/enums/web-service-connection.enum";

export class QuartzMqttService extends QuartzBaseService {

    public sendMessage(message: string) {
        const web = QuartzModuleLoader.getModule('webservice');
        if (web && (<QuartzWebServiceModule>web).connectionType === WebServiceConnectionType.Socket) {
            web.action(WebServiceActionType.Send, { message: message });
        }
    }

}