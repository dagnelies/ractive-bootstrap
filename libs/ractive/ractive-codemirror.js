/*

	ractive-components-ractive-codemirror
	=====================================

	Version 1.0.
	A simple codemirror widget for ractive.
	
	Dependencies:
	- RactiveJS
	- Codemirror
*/

(function ( global, factory ) {

	'use strict';

	// AMD environment
	if ( typeof define === 'function' && define.amd ) {
		define([ 'ractive' ], factory );
	}

	// Common JS (i.e. node/browserify)
	else if ( typeof module !== 'undefined' && module.exports && typeof require === 'function' ) {
		factory( require( 'ractive' ) );
	}

	// browser global
	else if ( global.Ractive ) {
		factory( global.Ractive );
	}

	else {
		throw new Error( 'Could not find Ractive! It must be loaded before the ractive-components-ractive-codemirror plugin' );
	}

}( typeof window !== 'undefined' ? window : this, function ( Ractive ) {

	'use strict';

	Ractive.components['codemirror'] = Ractive.extend({
		template: "<textarea></textarea>",
		isolated: true,
		onrender: function () {
			var self = this
			var textarea = this.find('textarea')
			
			var mode = this.get('mode') || 'htmlmixed'
			if( mode === 'html' )
				mode = 'htmlmixed'
			if ( mode === 'json' )
				mode = { name: 'javascript', json: true }
			
			var updating = false
			
			var editor = CodeMirror.fromTextArea( textarea, {
				mode: mode,
				lineNumbers: true
			})
			editor.on('change', function() {
				if( updating )
					return
				updating = true
				self.set('value', editor.getValue())
				updating = false
			})
			this.observe('value', function(val) {
				if( updating )
					return
				updating = true
				editor.setValue( val )
				updating = false
			})
			this.observe('mode', function( mode ) {
				if( mode === 'html' )
					mode = 'htmlmixed'
				if ( mode === 'json' )
					mode = { name: 'javascript', json: true }
				editor.setOption("mode", mode )
			})
			this.on( 'teardown', function () {
				editor.toTextArea();
			});
		}
		
	})



}));
