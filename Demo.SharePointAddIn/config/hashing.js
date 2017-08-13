var path = require('path');
var fs = require('fs');

function Hashing(config) {
    this.skip = config.skip || false;
    this.entry = config.entry;
    this.output = config.output;
    this.hashValue = config.hashValue;
}

Hashing.prototype.apply = function (compiler) {
    var self = this;
    var folder = compiler.options.context;
    var entry = path.join(folder, self.entry);
    var output = path.join(folder, self.output);

    fs.readFile(entry, 'utf8', function (err, data) {
        compiler.plugin('done', function (stats) {

            var reg = new RegExp('h\\=[a-zA-Z0-9]+', 'g');
            var changeWith = typeof self.hashValue === 'string' ? self.hashValue : stats.hash;
            data = data.replace(reg, 'h=' + changeWith);

            fs.writeFileSync(output, data);
        });
    });
};

module.exports = Hashing;