<?php

require 'config.php';

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $stmt = $conn->prepare("/*" . MYSQLND_QC_ENABLE_SWITCH . "*/" . "SELECT id, fl511_status, datetime FROM status_log ORDER BY datetime DESC LIMIT 1"); 
    $stmt->execute();

    // set the resulting array to associative
    $skyway_status = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($skyway_status as $skyway_status) {
        $fl511_status = $skyway_status["fl511_status"];
        $fetch_datetime = date_create($skyway_status["datetime"]);

    }
    
}

catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$conn = null;

// Set global_status
if (is_null($fl511_status)) {
    $global_status_string = "unknown – cannot fetch status";
    $global_status_modifier = "error";
    $global_status_css_color = "#4A4A4A";
} elseif ($fl511_status == 0) {
    $global_status_string = "closed";
    $global_status_modifier = "closed";
    $global_status_css_color = "red";
} elseif ($fl511_status == 10) {
    $global_status_string = "open";
    $global_status_modifier = "open";
    $global_status_css_color = "darkgreen";
} elseif (!empty($fl511_status)) {
    $global_status_string = "open with an advisory";
    $global_status_modifier = "caution";
    $global_status_css_color = "#FFB600";
} else {
    $global_status_string = "unknown – cannot fetch status";
    $global_status_modifier = "error";
    $global_status_css_color = "#4A4A4A";
} 

// Set fl511_status


if (is_null($fl511_status)) {
    $fl511_status_string = "unable to fetch status";
    $fl511_status_modifier = "error";
} elseif ($fl511_status == 0) {
    $fl511_status_string = "closed";
    $fl511_status_modifier = "closed";
} elseif ($fl511_status == 1) {
    $fl511_status_string = "closed Northbound";
    $fl511_status_modifier = "closed";
} elseif ($fl511_status == 2) {
    $fl511_status_string = "closed Southbound";
    $fl511_status_modifier = "closed";
} elseif ($fl511_status == 3) {
    $fl511_status_string = "under caution for rain";
    $fl511_status_modifier = "caution";
} elseif ($fl511_status == 4) {
    $fl511_status_string = "under caution for high winds";
    $fl511_status_modifier = "caution";
} elseif ($fl511_status == 5) {
    $fl511_status_string = "under caution for fog";
    $fl511_status_modifier = "caution";
} elseif ($fl511_status == 8) {
    $fl511_status_string = "under caution for police activity";
    $fl511_status_modifier = "caution";
} elseif ($fl511_status == 9) {
    $fl511_status_string = "under caution";
    $fl511_status_modifier = "caution";
} elseif ($fl511_status == 10) {
    $fl511_status_string = "open";
    $fl511_status_modifier = "open";
} else {
    $fl511_status_string = "unable to fetch status";
    $fl511_status_modifier = "error";
}

?>

