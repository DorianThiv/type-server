
import * as path from 'path';
import * as fs from 'fs';
import { ConvertionType } from '../enums/quartz-converion.enum';

export class QuartzFileReaderService {

    private _currentDir: string;
    private _separator: string;

    constructor() {
        this._currentDir = __dirname;
        this._separator = path.sep;
    }

    /**
     * Read synchronously a given file and retrun the content in a specified format type.
     * @param {string} filePath file path begin by assets/etc/etc.etc
     * @param {ConvertionType} convertionType return type.
     */
    public readSync(filePath: string, convertionType = ConvertionType.String) {
        if (filePath.startsWith('assets') && (!filePath.startsWith('.') || !filePath.startsWith('\\') || !filePath.startsWith('.'))) {
            filePath = this._currentDir + this._separator + '..' + this._separator + filePath;
            const content = fs.readFileSync(filePath);
            switch (convertionType) {
                case ConvertionType.String:
                    return content.toString();
                case ConvertionType.Json:
                    return JSON.parse(content.toString());
                case ConvertionType.Xml:
                    return content.toString();
                case ConvertionType.Buffer:
                    return content;
                default:
                    return content.toString();
            }
        } else {
            console.log('File reader service [warning] [readSync()] : Path \'' + filePath + '\' must start with \'assets\'.');
        }
    }

}