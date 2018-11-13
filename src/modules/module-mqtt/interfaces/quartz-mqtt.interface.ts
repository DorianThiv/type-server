
export interface IMqttConfiguration {
    name: string;
    protocol: string;
    broker: string;
    port: number;
    topics: string[];
}