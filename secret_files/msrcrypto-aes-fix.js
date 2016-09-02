try { window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['msrcrypto-aes-fix.js'] = (new Date()).getTime();
msrCrypto.subtle.forceSync = true;
// We want to use web crypto if available.
if (window.msCrypto) {
    msrCrypto.subtle = msCrypto.subtle;
};
window.scriptsLoaded['msrcrypto-aes-fix.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['msrcrypto-aes-fix.js'] = (new Date()).getTime(); } catch(e) { window.owaLastErrorReported = e; throw e; }
