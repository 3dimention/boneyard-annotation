/**
*	Annotation Scanner
*	@module com.spinal.annotation
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import {EventEmitter} from 'events';
import _ from 'underscore';
import Parser from 'engine/parser';

/**
*	Class Scanner
*	@namespace com.spinal.annotation
*	@class com.spinal.annotation.Scanner
*
*	@requires events.EventEmitter
*	@requires underscore
*	@requires com.spinal.annotation.engine.Parser
**/
export default class Scanner extends EventEmitter {

	/**
	*	@constructor
	*	@param runner {com.spinal.annotation.commands.Runner} runner
	*	@return com.spinal.annotation.Scanner
	**/
	constructor(runner) {
		super();
		this.runner = runner;
		this.parser = new Parser();
		this.parser
			.once(Parser.Events.start, this.onStart)
			.once(Parser.Events.end, this.onEnd);
		return this;
	}

	/**
	*	Default Scanner Start Handler
	*	@public
	*	@method onStart
	*	@param parser {com.spinal.annotation.engine.Parser}
	*	@return com.spinal.annotation.Scanner
	**/
	onStart(parser) {
		console.log('\nScanning annotations...\n');
		return parser.on(Parser.Events.read, this.onRead);
	}

	/**
	*	Parse Source path
	*	@public
	*	@method parse
	*	@return com.spinal.annotation.Scanner
	**/
	load() {
		this.parser.parse({
			basePath: "/"
			path: this.runner.source,
			ignore: this.ignoreList
		});
		return this;
	}

	/**
	*	Default Scanner Read Handler
	*	@public
	*	@method onRead
	*	@param file {Object} file reference
	*	@return com.spinal.annotation.Scanner
	**/
	onRead(file) {
		console.log(`File ${file.name}:\n`);
		return this;
	}

	/**
	*	Default Scanner End Handler
	*	@public
	*	@method onEnd
	*	@param parser {com.spinal.annotation.engine.Parser}
	*	@return com.spinal.annotation.Scanner
	**/
	onEnd() {
		console.log('Summary?');
		return this;
	}

	/**
	*	Ignore List
	*	@public
	*	@property ignoreList
	*	@type Array
	**/
	get ignoreList() {
		return ['libraries/**/*.*', 'main.js'];
	}

}
