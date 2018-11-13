
import { QuartzIOType } from "../../enums/quartz-io.enum";

export interface IQuartzSubscription {
    action: QuartzIOType,
    method(action: QuartzIOType, data: any): Function
}
