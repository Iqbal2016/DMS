			var shapes = [];
			
			var canvas = document.getElementById("myCanvas");
			var ctx = canvas.getContext("2d");
			var isDrawing = false;
			var isDragging = false;
			var isDirty = true;
			var drawingShape;
			var dragStartPos = null;
			var dragShapeIndex = -1;

			document.getElementById("btnEnd").addEventListener("click", function(){
				isDrawing = false;
				canvas.style.cursor = "pointer";
				shapes.push(drawingShape);
				isDirty = true;
			});
			canvas.addEventListener('mousedown', function(evt) {
				if(!isDrawing){
					dragStartPos = getMousePos(canvas, evt);
					dragShapeIndex = getShapeIndex(dragStartPos);
					if(dragShapeIndex >= 0){
						isDragging = true;
					}
				}

			});
			canvas.addEventListener('mouseup', function(evt) {
				var mousePos = getMousePos(canvas, evt);
				if(isDrawing){
					if(drawingShape.points.length > 0){
						ctx.lineTo(mousePos.x, mousePos.y);
						ctx.stroke();
					}
					else{
						ctx.moveTo(mousePos.x, mousePos.y);
					}
					drawingShape.points.push({x:mousePos.x, y:mousePos.y});
				}
				else if(isDragging){
					var offsetX = mousePos.x - dragStartPos.x;
					var offsetY = mousePos.y -dragStartPos.y ;

					moveShape(dragShapeIndex , offsetX, offsetY);
					isDragging = false;
				}
			});


			function getShapeIndex(point){
				for(i = 0; i < shapes.length; i++){
					var c = getCornerPoints(shapes[i].points);
					if(isInside(point, c)){
						return i;
					}
				}
				return -1;			
			}
			
			function getMousePos(canvas, evt) {
				var rect = canvas.getBoundingClientRect();
				var pos = {
						x: evt.clientX - rect.left,
						y: evt.clientY - rect.top
				};
				return pos;
			}

			function getRandomColor() {
				var r = Math.floor(Math.random()* 255);
				var g = Math.floor(Math.random()* 255);
				var b = Math.floor(Math.random()* 255);
				var a = 0.5;
				return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
			}

			function drawCanvas(){
				if(isDirty){
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					for (var i = 0; i <= shapes.length - 1; i++) {
						drawShape(i);
					}
					isDirty = false;
				}				
			}

			setInterval(drawCanvas, 5);

			function drawShape(shapeIndex){
				var points = shapes[shapeIndex].points;
				var color = shapes[shapeIndex].color;
				var name = shapes[shapeIndex].name;
				ctx.beginPath();
				for (var i = 0; i <= points.length - 1; i++) {
					ctx.lineTo(points[i].x, points[i].y);
				}
				ctx.closePath();
				ctx.fillStyle = color;
				ctx.stroke();
				ctx.fill();
				var c = getCornerPoints(points);
				ctx.fillStyle = "#000";
				ctx.fillText(name, (c.x1 + c.x2)/ 2, (c.y1 + c.y2)/ 2);
				if(shapeIndex == dragShapeIndex){
					ctx.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
					ctx.strokeStyle = "#bbbbbb";
					ctx.stroke();
				}
				
				var shapeArea = JSON.stringify(shapes)
				
				console.log(JSON.stringify(shapes));
				$("#area_data").val(shapeArea);
			}

			function getCornerPoints(points){
				var minX = 1000;
				var minY = 600;
				var maxX = 0;
				var maxY = 0;

				for (var i = 0; i <= points.length - 1; i++) {
					if(points[i].x < minX ){
						minX = points[i].x;
					}
					if(points[i].y < minY ){
						minY = points[i].y;
					}
					if(points[i].x > maxX ){
						maxX = points[i].x;
					}
					if(points[i].y > maxY ){
						maxY = points[i].y;
					}

					ctx.lineTo(points[i].x, points[i].y);
					
				}
				return {x1 : minX, y1 : minY, x2: maxX, y2: maxY};
			}

			function isInside(point, cornerPoints){
				// point {4, 3}
				// cornerPoints {x1 : 23, y1 : 3, x2: 3, y2: 5}
		
				return point.x >= cornerPoints.x1 && point.x <= cornerPoints.x2 && 
					point.y >= cornerPoints.y1 && point.y <= cornerPoints.y2;
			}
			function moveShape(index, offsetX, offsetY){
				for (var i = 0; i <= shapes[index].points.length - 1; i++) {
					shapes[index].points[i].x += offsetX;
					shapes[index].points[i].y += offsetY;
				}	
				isDirty = true;
			}
			function deleteShape(){
				if(dragShapeIndex != -1){
					shapes.splice(dragShapeIndex,1);
					dragShapeIndex = -1;
					isDirty = true;
				}
			}
			function validate(){
				document.getElementById("shapedata").value = JSON.stringify(shapes);
			}