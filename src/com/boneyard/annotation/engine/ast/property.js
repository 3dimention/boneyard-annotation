/**
*	@module com.boneyard.annotation.engine.ast
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import _ from 'underscore';
import _s from 'underscore.string';
import  {EventEmitter} from 'events';

/**
*	Class ASTProperty
*	@namespace com.boneyard.annotation.engine.ast
*	@class com.boneyard.annotation.engine.ast.ASTProperty
*	@extends events.EventEmitter
*
*	@requires underscore
*	@requires underscore.string
*	@requires events.EventEmitter
**/
class ASTProperty extends EventEmitter {

	/**
	*	@constructor
	*	@param [attrs] {Object} attributes
	*	@return com.boneyard.annotation.engine.ast.ASTProperty
	**/
	constructor(attrs = {}) {
		return super(attrs);
	}

}

export default ASTProperty;
