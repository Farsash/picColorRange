var slider = document.getElementById('slider').addEventListener('input', sliderChange);

function sliderChange() {
  AddStyle(this.value); 
}

function AddStyle( x ) {
    var color = RangeColor( 'rgb(255,0,0)', 'rgb(0,255,0)', x );
    document.querySelector('[data="style"]').innerHTML = ".slider::-webkit-slider-thumb {  background:" + color + "!important; }";
}