
export interface IWebServiceConfiguration {
    name: string;
    protocol: string;
}

export interface IWebServiceController {
    scrutanize(...args: any[]);
}