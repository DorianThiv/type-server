
import { QuartzIOType } from "../../enums/quartz-io.enum";

export interface IQuartzSubscription {
    ioType: QuartzIOType,
    method(action: QuartzIOType, data: any): Function
}
