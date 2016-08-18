//The values array is structured as counts > movements between counts > individual movements of bars
//The movements go in counts of three  --  
var values = [
	//Second count
	[
		[
			['first', 9000, 7500, 6500, 5000, 5000, 0],
			['second', 0, 0, 0, 0, 0, 500],
			['third', 0, 0, 0, 0, 0, 1000],
			['fourth', 0, 0, 0, 0, 0, 1500],
			['fifth', 0, 0, 0, 0, 0, 500]
		],
		[
			['first', 9000, 7500, 6500, 5000, 5000, 0],
			['second', 0, 0, 0, 0, 500, 0],
			['third', 0, 0, 0, 0, 0, 1000],
			['fourth', 0, 0, 0, 0, 0, 1500],
			['fifth', 0, 0, 0, 0, 0, 500]
		],
		[
			['first', 9000, 7500, 6500, 5000, 5000, 0],
			['second', 0, 0, 0, 0, 500, 0],
			['third', 0, 0, 0, 1000, 0, 0],
			['fourth', 0, 0, 0, 0, 0, 1500],
			['fifth', 0, 0, 0, 0, 0, 500]
		],
		[
			['first', 9000, 7500, 6500, 5000, 5000, 0],
			['second', 0, 0, 0, 0, 500, 0],
			['third', 0, 0, 0, 1000, 0, 0],
			['fourth', 0, 1500, 0, 0, 0, 0],
			['fifth', 0 , 0, 0, 0, 0, 500]
		],
		[
			['first', 9000, 7500, 6500, 5000, 5000, 0],
			['second', 0, 0, 0, 0, 500, 0],
			['third', 0, 0, 0, 1000, 0, 0],
			['fourth', 0, 1500, 0, 0, 0, 0],
			['fifth', 500, 0, 0, 0, 0, 0]
		],
		[
			['first', 9500, 9000, 6500, 6000, 5500, 0],
			['second', 0, 0, 0, 0, 0, 0],
			['third', 0, 0, 0, 0, 0, 0],
			['fourth', 0, 0, 0, 0, 0, 0],
			['fifth', 0, 0, 0, 0, 0, 0]
		],
	],
	//Third count
	[
		[
			['first', 9500, 9000, 6500, 6000, 0, 0],
			['second', 0, 0, 0, 0, 1500, 0],
			['third', 0, 0, 0, 0, 1000, 0],
			['fourth', 0, 0, 0, 0, 1000, 0],
			['fifth', 0, 0, 0, 0, 2000, 0]
		],
		[
			['first', 9500, 9000, 6500, 6000, 0, 0],
			['second', 0, 0, 0, 1500, 0, 0],
			['third', 0, 0, 0, 0, 1000, 0],
			['fourth', 0, 0, 0, 0, 1000, 0],
			['fifth', 0, 0, 0, 0, 2000, 0]
		],
		[
			['first', 9500, 9000, 6500, 6000, 0, 0],
			['second', 0, 0, 0, 1500, 0, 0],
			['third', 0, 0, 1000, 0, 0, 0],
			['fourth', 0, 0, 0, 0, 1000, 0],
			['fifth', 0, 0, 0, 0, 2000, 0]
		],
		[
			['first', 9500, 9000, 6500, 6000, 0, 0],
			['second', 0, 0, 0, 1500, 0, 0],
			['third', 0, 0, 1000, 0, 0, 0],
			['fourth', 0, 1000, 0, 0, 0, 0],
			['fifth', 0, 0, 0, 0, 2000, 0]
		],
		[
			['first', 9500, 9000, 6500, 6000, 0, 0],
			['second', 0, 0, 0, 1500, 0, 0],
			['third', 0, 0, 1000, 0, 0, 0],
			['fourth', 0, 1000, 0, 0, 0, 0],
			['fifth', 2000, 0, 0, 0, 0, 0]
		],
		[
			['first', 11500, 10000, 7500, 7500, 0, 0],
			['second', 0, 0, 0, 0, 0, 0],
			['third', 0, 0, 0, 0, 0, 0],
			['fourth', 0, 0, 0, 0, 0, 0],
			['fifth', 0, 0, 0, 0, 0, 0]	
		]
	],
	//Fourth count
	[
		[
			['first', 11500, 10000, 7500, 0, 0, 0],
			['second', 0, 0, 0, 3300, 0, 0],
			['third', 0, 0, 0, 2700, 0, 0],
			['fourth', 0, 0, 0, 1500, 0, 0],
			['fifth', 0, 0, 0, 0, 0, 0]	
		],
		[
			['first', 11500, 10000, 7500, 0, 0, 0],
			['second', 0, 0, 3300, 0, 0, 0],
			['third', 0, 0, 0, 2700, 0, 0],
			['fourth', 0, 0, 0, 1500, 0, 0],
			['fifth', 0, 0, 0, 0, 0, 0]
		],
		[
			['first', 11500, 10000, 7500, 0, 0, 0],
			['second', 0, 0, 3300, 0, 0, 0],
			['third', 0, 2700, 0, 0, 0, 0],
			['fourth', 0, 0, 0, 1500, 0, 0],
			['fifth', 0, 0, 0, 0, 0, 0]
		],
		[
			['first', 11500, 10000, 7500, 0, 0, 0],
			['second', 0, 0, 3300, 0, 0, 0],
			['third', 0, 2700, 0, 0, 0, 0],
			['fourth', 1500, 0, 0, 0, 0, 0],
			['fifth', 0, 0, 0, 0, 0, 0]
		],
		[
			['first', 13000, 12700, 10800, 0, 0, 0],
			['second', 0, 0, 0, 0, 0, 0],
			['third', 0, 0, 0, 0, 0, 0],
			['fourth', 0, 0, 0, 0, 0, 0],
			['fifth', 0, 0, 0, 0, 0, 0]
		]		
	],
	//Fifth count
	[
		[
			['first', 13000, 12700, 0, 0, 0, 0],
			['second', 0, 0, 6800, 0, 0, 0],
			['third', 0, 0, 4000, 0, 0, 0],
			['fourth', 0, 0, 0, 0, 0, 0],
			['fifth', 0, 0, 0, 0, 0, 0]	
		],
		[
			['first', 13000, 12700, 0, 0, 0, 0],
			['second', 0, 6800, 0, 0, 0, 0],
			['third', 0, 0, 4000, 0, 0, 0],
			['fourth', 0, 0, 0, 0, 0, 0],
			['fifth', 0, 0, 0, 0, 0, 0]	
		],
		[
			['first', 13000, 12700, 0, 0, 0, 0],
			['second', 0, 6800, 0, 0, 0, 0],
			['third', 4000, 0, 0, 0, 0, 0],
			['fourth', 0, 0, 0, 0, 0, 0],
			['fifth', 0, 0, 0, 0, 0, 0]
		],	
		[
			['first', 17000, 19500, 0, 0, 0, 0],
			['second', 0, 0, 0, 0, 0, 0],
			['third', 0, 0, 0, 0, 0, 0],
			['fourth', 0, 0, 0, 0, 0, 0],
			['fifth', 0, 0, 0, 0, 0, 0]		
		]
	]
]