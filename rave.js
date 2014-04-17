/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var link = require('curl/plugin/link');

exports.create = create;

function create (context) {
	if (!context.amdPluginMap) context.amdPluginMap = {};
	context.amdPluginMap.link = 'curl/plugin/link';
}
