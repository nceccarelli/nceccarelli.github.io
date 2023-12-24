const myFormatToCSS = (str: string) => {
    return str.replace(/[A-Z]/g, function(capitalLetter) {
        return '-' + capitalLetter.toLowerCase();
    });
}

const style = (dict: any) => {
    var styleStr = ""
    for (const [key, value] of Object.entries(dict)) {
        var fmtKey = myFormatToCSS(key)
        styleStr += (fmtKey + ':' + String(value) + ';')
    }
    return styleStr
}

export default style;