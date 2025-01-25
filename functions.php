<?php 

$apiKey = 'YOUR-API-KEY';  // Replace with your Subscan API key

if(!isset($_GET['id']))
{
	$account = '13zHmqX4KwmmD3Sr4D7GHPX2FirVZmadm1yyeQaKfVEsi9CL';  // default polkadot address 
} else 
{
	$account = filter_input(INPUT_GET,"id",FILTER_SANITIZE_STRING);
}

// function to extract
function getstring($string, $start, $end) {
    if (strpos($string, $start) === false || strpos($string, $end) === false) return '';
    return explode($end, explode($start, $string)[1])[0];
}

// curl $get_price Polkadot real time
$ah = curl_init();

curl_setopt($ah, CURLOPT_URL, 'https://polkadot.api.subscan.io/api/open/price');
curl_setopt($ah, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ah, CURLOPT_POST, 1);
curl_setopt($ah, CURLOPT_POSTFIELDS, "{\n    \"time\": ".time()."\n  }");

$headers = array();
$headers[] = 'Content-Type: application/json';
$headers[] = 'X-Api-Key: '.$apiKey.'';
curl_setopt($ah, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ah, CURLOPT_FOLLOWLOCATION, TRUE);
curl_setopt($ah, CURLOPT_SSL_VERIFYPEER, false);

$get_price = curl_exec($ah);
if (curl_errno($ah)) {
    echo 'Error:' . curl_error($ah);
}
curl_close($ah);

//save price
$price = getstring($get_price, '"price":"', '"');


//curl balance and address information
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://polkadot.api.subscan.io/api/v2/scan/search');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, "{\n    \"key\": \"".$account."\"\n  }");
curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );

$headers = array();
$headers[] = 'Content-Type: application/json';
$headers[] = 'X-Api-Key: '.$apiKey.'';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
curl_close($ch);

$bonded = getstring($result,'"balance_lock":"','"');
$balance = getstring($result,'"balance":"','"');


// get_Rewards - if many rewards then is little slow
function fetchRewards($account, $apiKey) {
    $url = 'https://polkadot.api.subscan.io/api/scan/account/reward_slash';
    $rewards = [];
    $page = 0;

    do {
        // Prepare API request
        $data = [
            'row' => 100, // Number of rows per page
            'page' => $page,
            'address' => $account,
        ];

        $headers = [
            'Content-Type: application/json',
            'X-API-Key: ' . $apiKey,
        ];

        // Initialize cURL
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        $response = curl_exec($ch);
        curl_close($ch);

        // Parse the response
        $responseData = json_decode($response, true);

        if (isset($responseData['data']['list']) && is_array($responseData['data']['list'])) {
			$dataArray = [];
            foreach ($responseData['data']['list'] as $k => $reward) {
                $rewards[] = [
                    'date' => date('Y-m-d', $reward['block_timestamp']), // Timestamp of reward
                    'amount' => $reward['amount']/10000000000, // Reward amount
                ];
            }

            // Stop if no more data
            if (count($responseData['data']['list']) < 100) {
                break;
            }
        } else {
            // Handle errors or empty results
            break;
        }

        $page++;
    } while (true);

    return $rewards;
}
$rewards = fetchRewards($account, $apiKey);

// create months
$months = array_fill_keys([
    'January', 'February', 'March', 'April', 'May', 
    'June', 'July', 'August', 'September', 
    'October', 'November', 'December'
], 0);

extract($months);

if(empty($rewards[0]['amount']))
	die('Get rewards not working properly');

// Month names array for mapping
$month_names = [
    '01' => 'January',
    '02' => 'February',
    '03' => 'March',
    '04' => 'April',
    '05' => 'May',
    '06' => 'June',
    '07' => 'July',
    '08' => 'August',
    '09' => 'September',
    '10' => 'October',
    '11' => 'November',
    '12' => 'December'
];

// Calculate the limits for last 7 and 30 days
$last_7_days_limit = strtotime("-7 days");
$last_30_days_limit = strtotime("-30 days");

// Current year and months for aggregation
$current_year = date('Y');
$start_of_year = strtotime("first day of January $current_year");
$start_of_january_2025 = strtotime("first day of January 2025");
$start_of_december_2024 = strtotime("first day of December 2024");

$monthly_data = [];
$sum_last_7_days = 0;
$sum_last_30_days = 0;
$count_last_7_days = 0;
$count_last_30_days = 0;
$sum_this_year = 0;
$sum_per_month = []; // To store sums for each month

foreach ($rewards as $entry) {
    // Convert the date to a timestamp
    $entry_date = strtotime($entry['date']);
    $amount = $entry['amount'];
    
    // Last 7 Days Calculation
    if ($entry_date >= $last_7_days_limit) {
        $sum_last_7_days += $amount;
        $count_last_7_days++;
    } 
    
    // Last 30 Days Calculation
    if ($entry_date >= $last_30_days_limit) {
        $sum_last_30_days += $amount;
        $count_last_30_days++;
    }
    
// Monthly Aggregation (group by month)
    $month = date('Y-m', $entry_date);
    $month_number = date('m', $entry_date);
    if (!isset($monthly_data[$month])) {
        $monthly_data[$month] = ['total' => 0, 'count' => 0];
    }
    $monthly_data[$month]['total'] += $amount;
    $monthly_data[$month]['count']++;
    
    // Yearly and specific month sums
    $year = date('Y', $entry_date);
    if ($year >= 2020) {
        if (!isset($sum_per_month[$year])) {
            $sum_per_month[$year] = [];
        }
        if (!isset($sum_per_month[$year][$month])) {
            $sum_per_month[$year][$month] = 0;
        }
        $sum_per_month[$year][$month] += $amount;
    }

    if ($entry_date >= $start_of_year) {
        $sum_this_year += $amount;
    }
}

// Calculate APY
$apy_last_7_days = round((($sum_last_7_days * 5200) / $bonded), 2);
$apy_last_30_days = round((($sum_last_30_days * 1200) / $bonded), 2);
$apy_this_year = round(($sum_this_year / count($sum_per_month)) , 2);

// Output Yearly and Monthly Data

foreach ($sum_per_month as $year => $months) {
    foreach ($months as $month => $total) {
        $total = !empty($total) ? $total : 0;
        $arr[$year][$month_names[date('m', strtotime($month))]] = $total;
    }
}

?>