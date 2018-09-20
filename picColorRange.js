// Autor: Fedor Mikhaylov
// vk.com/farsash


// Шаманим
var RangeColor = function( color1, color2, positionPercent ){

  var colorLength = [];
  var colors = [];
  
  // Возвращает массив значений цвета
  // Дробит цвет на каналы
  var rgb_1 = CountColor( color1 );
  var rgb_2 = CountColor( color2 );
  
  var lessers = CompareColor( rgb_1, rgb_2 );
  
  for (var t = 0; t < 3; t++) {

    
    
    var data =  Math.abs(rgb_1[t] - rgb_2[t]);
 
    if ( data === 0){
        colorLength.push(0);
    } else {
        colorLength.push(Math.abs(data));
    }


  }
  var posColors = [];
  
  var positionColor_r = Math.round(positionPercent / 100 *      colorLength[0]);  
  posColors.push(positionColor_r);
  var positionColor_g = Math.round(positionPercent / 100 * colorLength[1]);
  posColors.push(positionColor_g);
  var positionColor_b = Math.round(positionPercent / 100 * colorLength[2]);
  posColors.push(positionColor_b);
  
  for (var t = 0; t < 3; t++) {
    
    var kst;
    
    if (lessers[0] === true){
      kst = rgb_1[t] + posColors[t];
      colors.push(kst);
    } else if (lessers[0] === false){
      kst = rgb_1[t] - posColors[t];
      colors.push(kst);
    } else if (lessers[0] == null){
      kst = rgb_1[t] + posColors[t];
      colors.push(kst);
    }
    
  }
  
  
  return('rgb(' + Math.abs(colors[0]) + ',' + Math.abs(colors[1]) + ',' + Math.abs(colors[2]) + ')');
  
}

// Cчитаем
function CountColor( color ){ 
  
    var chanalColor = [];
  
    var stNum = 4;
  
    for (var i = 0; i < 3; i++) {
      
        var sumClr = SumColor(color, stNum);
        stNum = sumClr.posStrng;
        chanalColor.push(sumClr.rgb);
      
    }
  
    return chanalColor;
  
}


function SumColor( color, number ){
    var num = '';
    var pos = 0;
  
    for (var i = 0; i < 3; i++) {
      
       if ( i === 0){
           num = color.charAt(number + i);
       } else {
           num += color.charAt(number + i);        
       }
      
       if ( color.charAt(number + i) === ','){
           break;
       } 
       pos = number + i;
    }

    var obj = { rgb:parseInt(num), posStrng: pos + 2 }
    return obj;
 
  }

// Определяем направление
function CompareColor( data_1, data_2 ){
  
  var dt = [];
  
  for (var i = 0; i < 3; i++) {
    
    var d = data_1[i];
    var d_2 = data_2[i];
    
    
    if (d < d_2){
        dt.push(true);
    } else if (d > d_2 ){
               dt.push(false);
           } else if (d === d_2 ){
                         dt.push(null);
                  } else {
                    console.log('Ошибка синтексиса');
                  }
    
  }
  return dt;

}