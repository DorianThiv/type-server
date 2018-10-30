
import * as fs from 'fs';

export class QuartzFileReaderService {

    constructor() {
        console.log(__dirname);
    }

    public readSync(path: string) {
        const content = fs.readFileSync('../' + path);
        console.log(content);
    }

}