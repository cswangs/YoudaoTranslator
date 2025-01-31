import { Icmd } from "./icmd";
import Translator from "../translator";

export default class Translate implements Icmd {
    configs: { key: string, secret: string, platform: string };
    constructor(configs: any) {
        this.configs = configs;
    }
    public async execute(query: string): Promise<any> {
        const key = this.configs.key;
        const secret = this.configs.secret
        const platform = this.configs.platform
        return new Translator(key, secret, platform).translate(query);
    }
}