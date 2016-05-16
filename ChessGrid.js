/**
 * Return a Chess grid with especified columns and rows
 * Exercise proposted in:
 * https://github.com/braziljs/eloquente-javascript/blob/master/chapters/02-estrutura-do-programa.md#tabuleiro-de-xadrez
 *
 * @author Carlos Henrique Carvalho de Santana <carlohcs@gmail.com>
 */
(function(){
 var 
   ChessGrid = function(dimensionX, dimensionY) {
      var
	DIMENSION_X = 8 || dimensionX,
        DIMENSION_Y = 4 || dimensionY,
	SYMBOL = '#',
	output = '',
	indexX,
	indexY,
	aux;

      for(indexX = 0; indexX < DIMENSION_X; indexX++) {
	aux = [];
        for(indexY = 0; indexY < DIMENSION_Y; indexY++) {
          aux.push(SYMBOL);
	}
        output += (indexX % 2 !== 0 ? ' ' : '') + aux.join(" ") + "\n"; 
      }

      console.log(output);
   };

   new ChessGrid();
})();
