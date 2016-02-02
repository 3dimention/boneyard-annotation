/**
*	@module com.boneyard.annotation.support
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

import _ from 'underscore';
import _s from 'underscore.string';
import Annotation from '../engine/annotation/annotation';
import Context from '../engine/annotation/context';

/**
*	Class Action
*	@namespace com.boneyard.annotation.support
*	@class com.boneyard.annotation.support.Action
*	@extends com.boneyard.annotation.engine.annotation.Annotation
*
*	@requires underscore
*	@requires underscore.string
*	@requires com.boneyard.annotation.engine.writer.templates.actionTpl
*	@requires com.boneyard.annotation.engine.annotation.Annotation
*	@requires com.boneyard.annotation.engine.annotation.Context
**/
class Action extends Annotation {

	/**
	*	Constructor
	*	@constructor
	*	@param [...attrs] {Object} constructor parameters
	*	@return com.boneyard.annotation.support.Action
	**/
	constructor(...attrs) {
		return super(...attrs);
	}

	/**
	*	Retrieves target bone on this Action
	*	@public
	*	@property bone
	*	@type String
	**/
	get bone() {
		return this.params.bone;
	}

	/**
	*	Retrieves target bone method to call on this Action
	*	@public
	*	@property method
	*	@type String
	**/
	get method() {
		return this.params.method;
	}

	/**
	*	Retrieves spec id in which this action belongs to
	*	@public
	*	@property spec
	*	@type String
	**/
	get spec() {
		return this.params.spec;
	}

	/**
	*	Retrieves list of context in which this annotation should be found
	*	@public
	*	@property contexts
	*	@type Array
	**/
	get contexts() {
		return [Context.TYPES.Class, Context.TYPES.Method];
	}

	/**
	*	JSON serialization strategy
	*	@public
	*	@override
	*	@method serialize
	*	@return Object
	**/
	serialize() {
		// TODO
		return {};
	}

	/**
	*	Class Name
	*	@static
	*	@property NAME
	*	@type String
	**/
	static get NAME() {
		return 'Action';
	}

}

export default Action;
