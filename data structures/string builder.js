function StringBuilder(){
			
				var array = [];
				
				StringBuilder.prototype.append = function(word){				
					array.push(word);
				}
				
				StringBuilder.prototype.toString = function(word){				
					 return array.join("");
				}
			}