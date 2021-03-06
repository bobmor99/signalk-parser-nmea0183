/* 
 * index.js
 *
 * @description 	Reads codec directory and adds the codecs to an object.
 * @repository 		https://github.com/signalk/nmea-signalk
 * @author 			Fabian Tollenaar <fabian@starting-point.nl>
 *
 *
 *
 * Copyright 2014, Fabian Tollenaar
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

var codecs = {};

require("fs").readdirSync(__dirname).forEach(function(codec) {
	if(codec !== 'index.js' && codec.charAt(0) !== '.' && codec.charAt(0) !== '_') {
		var module = require('./' + codec);

		if(typeof module === 'function') {
			codecs[codec.replace('.js', '').toUpperCase()] = module();
		} else {
			codecs[codec.replace('.js', '').toUpperCase()] = module;
		}
	}
});

module.exports = codecs;