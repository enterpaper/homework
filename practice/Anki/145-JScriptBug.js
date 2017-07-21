if('ab'.substr(-1) != 'b') {
	String.prototype.substr = function(substr) {
		return function(start, length) {
			return substr.call(this,
				start < 0? this.length + start : start,
				length)
		}
	}(String.prototype.substr);
}