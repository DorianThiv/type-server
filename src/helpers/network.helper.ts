
import * as os from 'os';

export class NetworkHelper {

    public static ip() {
        const ifaces = os.networkInterfaces();
        Object.keys(ifaces).forEach(function (ifname) {
            let alias = 0;
            ifaces[ifname].forEach(function (iface) {
                console.log(ifname);
                console.log(iface);
                if ('IPv4' !== iface.family || iface.internal !== false) {
                    return;
                }
                if (alias >= 1) {
                    console.log(ifname + ':' + alias, iface.address);
                } else {
                    console.log(ifname, iface.address);
                }
            ++alias;
            });
        });    
    }

} 
