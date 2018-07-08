var app = new Vue ({
	el: '#app',
	data: {
		message: 'Hello'

	},
	methods: {
		reverseText: function(){
			this.message = this.message.split('').reverse().join('')
		}
	}

});

app1 = new Vue ({
	el: '#app1',
	data: {
		count: 0,
		href:'URL',
		visibleInput: false
	},
	methods: {
		upCount: function(){
			this.count += 1
		},
		downCount: function(){
			this.count -= 1
		},
		changeText: function(){
			this.count = Number(this.count);
			this.visibleInput = true;
			this.href = 'URL' + this.count;
		}
	}

})

var app2 = new Vue ({
	el: '#app2',
	data: {
		sizeToggle: false,
		isRounded: false,
		disabled: false,
		fontColor:'red',
		backgroundColor:'orange'
	},
	computed: {
		styles: function(){
			return{
				color: this.fontColor,
				background: this.backgroundColor
			}
		}
	}

});