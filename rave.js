/** @license MIT License (c) copyright 2014 original authors */
/** @author Brian Cavalier */
/** @author John Hann */

var link = require('curl/plugin/link');

exports.create = create;

function create (context) {
	var info = {
		name: 'curl/plugin/link',
		module: link
	};
	if (!context.amdPluginMap) context.amdPluginMap = {};
	context.amdPluginMap['link']
		= context.amdPluginMap['curl/plugin/link']
		= info;
}
