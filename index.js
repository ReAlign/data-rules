// import DataRules from './src/data-rules';

// export default DataRules;

// 'use strict';

let _ = {};

require('./src/lib/base/util')(_);
require('./src/lib/base/base-enum')(_);
require('./src/lib/base/base-reqex')(_);

require('./src/data-rules')(_);

// Export it
module.exports = _;