<!DOCTYPE HTML>
<html>
<head>
	<link rel="stylesheet" href="style.css">
</head>

<body>
	<header class="hd1">
		<form method="calc" action="<?php echo $_SERVER['PHP_SELF'];?>">
		Name: <input type="text" name="fname">
		<input type="submit">
		</form>
		<?php
		$billTotal = '';
		$tax = '';
		$tipPercentage = 20;
		$numPeople = 1;
		?>
	</header>
</body>