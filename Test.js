var Range = function (start, end, step) {
    // TODO: Implement me!
    this.storageObj = {};
    if (step === undefined) {
        step = 1;
    } else if (Math.sign(step) === -1) {
        step *= -1;
    }
    if (end === 0 || end) {
        if (start < end) {
            for (; start <= end; start += step) {
                this.storageObj[start] = start;
            }
        } else {

            for (; start >= end; start -= step) {
                this.storageObj[start] = start;
            }
        }
    } else {
        this.storageObj[start] = start;
    }
};

Range.prototype.size = function () {
    // TODO: Implement me!
    let size = 0;
    for (let key in this.storageObj) {
        size++;
    }
    return size;
};

Range.prototype.each = function (callback) {
    // TODO: Implement me!
    for (let key in this.storageObj) {
        callback(key);
    }
};

Range.prototype.includes = function (val) {
    // TODO: Implement me!
};

var range = new Range(10, 0);

