<?php

$language = strtolower($_POST['language']);
$code = $_POST['code'];
// echo $code;
// echo $language;

$random = substr(md5(mt_rand()), 0, 7);

$filePath = "temp/" . $random . "." . $language;
$programFile = fopen($filePath, "w");
fwrite($programFile, $code);
fclose($programFile);


if($language == "php") {
    //"C:\wamp64\bin\php\php8.2.0"
    $output = shell_exec("C:\wamp64\bin\php\php8.2.0\php.exe $filePath 2>&1");
    echo $output;
}
// if($language == "python") {
//     $output = shell_exec("C:\Users\KOUSIK\AppData\Local\Programs\Python\Python39\python.exe $filePath 2>&1");
//     echo $output;
// }
if($language == "node") {
    rename($filePath, $filePath.".js");
    $output = shell_exec("node $filePath.js 2>&1");
    echo $output;
}
// if($language == "c") {
//     $outputExe = $random . ".exe";
//     shell_exec("gcc $filePath -o $outputExe");
//     $output = shell_exec(__DIR__ . "//$outputExe");
//     echo $output;
// }
// if($language == "cpp") {
//     $outputExe = $random . ".exe";
//     shell_exec("g++ $filePath -o $outputExe");
//     $output = shell_exec(__DIR__ . "//$outputExe");
//     echo $output;
// }

?>