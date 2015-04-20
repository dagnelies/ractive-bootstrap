Ractive.components['example'] = Ractive.extend({
	isolated: true,
	template: "\
<row>\
	<col-md-6>\
		<codemirror mode='html' value='{{src}}' />\
	</col-md-6>\
	<col-md-6>\
		{{#if error}}\
		<pre class='alert alert-danger'>{{error}}</pre>\
		{{/if}}\
		<div class='output'></div>\
	</col-md-6>\
</row>\
",
	data: {
		src: "",
	},
	onrender: function() {
		var output = this.find(".output")
		var instance = null
		var self = this
		
		var url = this.get('url')
		if( url ) {
			$.ajax({
				url: url,
				dataType: "text",
				success: function(result){
					self.set('src', result)
				},
				error: function(xhr, status, error) {
					self.set('error', error)
				}
			})
		}
		
		this.observe('src', function(val) {
			try {
				if( instance ) {
					instance.teardown()
					instance = null
				}
				instance = new Ractive({
					el: output,
					template: val
				})
				
				self.set('error',null)
			}
			catch( e ) {
				self.set('error', "ERROR:\n" + e.message)
			}
		})
	}
})