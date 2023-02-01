const app = express();

function readCertsSync() {
    return {
        key: fs.readFileSync(sslKeyPath),
        cert: fs.readFileSync(sslCertPath) + fs.readFileSync(sslFullChainPath)
    }
}

let httpd = https.createServer(readCertsSync(), app).listen(port, onReady);

// Refresh httpd's certs when certs change on disk. The timeout stuff 
// "ensures" that all 3 relevant files are updated, and accounts for 
// sometimes trigger-happy fs.watch.
let waitForCertAndFullChainToGetUpdatedTooTimeout;
fs.watch(sslKeyPath, () => {
    clearTimeout(waitForCertAndFullChainToGetUpdatedTooTimeout);
    waitForCertAndFullChainToGetUpdatedTooTimeout = setTimeout(() => {
        httpd.setSecureContext(readCertsSync());
    }, 1000);
});