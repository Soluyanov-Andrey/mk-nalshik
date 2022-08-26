<?php
/**
 * Реализует доп функции.
 *
 *
 */
class add_function{


	// Метод selection_of_parts, возвращает массив из разобранного url,
	// например, передали http://localhost/game/1, вернет,
	//   array (size=3)
	//   0 => string '' (length=0)
	//   1 => string 'game' (length=4)
	//   2 => string '1' (length=1)

	public static function selection_of_parts($url){
		$r_array=array();
		$arr = parse_url($url);
		$b=0;

		for ($key = 0, $size = strlen($arr["path"]); $key <$size; $key++) {

			if($arr["path"][$key]=="/"){
				
				if($b==0){
					array_push($r_array,substr($arr["path"],$b,$key));
				}
				
				if($b>0){
					array_push($r_array,substr($arr["path"],$b,$key-$b));
				}
				
				$b=$key+1;
			}
			if($arr["path"][strlen($arr["path"])-1] !="/" and $key==strlen($arr["path"])-1){

				array_push($r_array,substr($arr["path"],$b,$key+1-$b));
			}
		}
		return $r_array;
	}

}

