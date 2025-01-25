<?php 
	include 'functions.php';
	include 'template/header.php';
?>

<div class="app-main">
 <?php include 'template/sidebar.php'; ?>
    <div class="app-main__outer">
                    <div class="app-main__inner">
					    <div class="app-page-title">
                            <div class="page-title-wrapper">
                                <div class="page-title-heading">
                                    <div class="page-title-icon">
                                       <img class="pe-7s-menu icon-gradient bg-ripe-malin" src= "assets/images/logo-small.png" />
									  
                                    </div>
                                    <div>Polkadot Account Details
                                        <div class="page-title-subheading"><b class="icon-gradient bg-love-kiss"><?php echo $account;?></b>
                                        </div>
                                    </div>
                                </div>
                                <div class="page-title-actions">
                                    <button type="button" class="btn-shadow mr-3 btn btn-dark"data-toggle="tooltip" title="If you like my project, please donate it!" data-placement="bottom"><i class="fa fa-star"></i> DONATE</button>
                                    
                                </div>    </div>
                        </div>         
						 <div class="mbg-3 alert alert-info alert-dismissible fade show" role="alert">
                        <span class="pr-2">
                            <i class="fa fa-question-circle"></i>
                        </span>
						If you like my project, please donate it!<br />
						<b>Polkadot native address: 1S7RF4Ean8tGR26mXvqcGsWEaqjxNxZnazKrqdJM7mkUHG6 </b>
                    </div> 
					<div class="row">
                            <div class="col-md-6 col-xl-4">
                                <div class="card mb-3 widget-content bg-midnight-bloom">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Balance</div>
                                            <div class="widget-subheading">Total balance</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-white" style="font-size: 1.6rem;"><span><?php echo number_format($balance , 4);?> DOT</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-4">
                                <div class="card mb-3 widget-content bg-arielle-smile">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Bonded</div>
                                            <div class="widget-subheading">Total staking</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-white" style="font-size: 1.6rem;"><span><?php echo number_format($bonded, 10);?></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-4">
                                <div class="card mb-3 widget-content bg-grow-early">
                                    <div class="widget-content-wrapper text-white">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Last reward</div>
                                            <div class="widget-subheading"><?php echo $rewards[0]['date'];?></div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-white" style="font-size: 1.6rem;"><span><?php echo $rewards[0]['amount'];?></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-lg-6">
                                <div class="mb-3 card">
                                    <div class="card-header-tab card-header-tab-animation card-header">
                                        <div class="card-header-title">
                                            <i class="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                            Rewards
                                        </div>
                                        <ul class="nav">
                                           <?php 
										for ($k = 2020; $k < date("Y"); $k++) { ?>
											<li class="nav-item">
                                                <a data-toggle="tab" href="#tabs-eg-<?php echo $k;?>" class="nav-link second-tab-toggle"><?php echo $k; ?></a>
											</li>	
										<?php } ?>
											<li class="nav-item">
                                                <a data-toggle="tab" href="#tabs-eg-<?php echo date("Y");?>" class="active nav-link"><?php echo date("Y"); ?></a>
											</li>
                                        </ul>
                                    </div>
                                    <div class="card-body">
                                        <div class="tab-content">
<?php for ($k = 2020; $k <= date("Y"); $k++) { ?>                                            
											
<div class="tab-pane fade <?php if (date("Y") == $k) echo 'show active'; ?>" id="tabs-eg-<?php echo $k;?>">
	<div class="card mb-3 widget-chart widget-chart2 text-left w-100">
		<div class="widget-chat-wrapper-outer">
			<div class="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
			   <div id="canvas<?php echo $k;?>"></div>
<script>var options={series:[{name:"Rewards",data:[<?php echo $arr[$k]['January'] ?? 0;?>, <?php echo $arr[$k]['February'] ?? 0;?>, <?php echo $arr[$k]['March'] ?? 0;?>, <?php echo $arr[$k]['April'] ?? 0;?>, <?php echo $arr[$k]['May'] ?? 0;?>, <?php echo $arr[$k]['June'] ?? 0;?>, <?php echo $arr[$k]['July'] ?? 0;?>, <?php echo $arr[$k]['August'] ?? 0;?>, <?php echo $arr[$k]['September'] ?? 0;?>, <?php echo $arr[$k]['October'] ?? 0;?>, <?php echo $arr[$k]['November'] ?? 0;?>, <?php echo $arr[$k]['December'] ?? 0;?>]}],chart:{type:"bar",height:330},plotOptions:{bar:{horizontal:!1,columnWidth:"85%",borderRadius:5,borderRadiusApplication:"end"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},yaxis:{labels:{formatter:function(r){return r+""}}},xaxis:{categories:["January","February","March","April","May","June","July","August","September","October","November","December"]},fill:{opacity:1},tooltip:{y:{formatter:function(r){return r+" DOT"}}}},chart=new ApexCharts(document.querySelector("#canvas<?php echo $k;?>"),options);chart.render();</script>
			</div>
		</div>
	</div>
</div>
<?php } ?>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-6">
                                <div class="mb-3 card">
                                    <div class="card-header-tab card-header">
                                        <div class="card-header-title">
                                            <i class="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                            Balance Distribution Reports
                                        </div>
                                        
                                    </div>
                                    <div class="tab-content">
                                        <div class="tab-pane fade active show" id="tab-eg-55">
                                            <div class="widget-chart p-3">
                                                <div style="height: 350px">
                                                    <canvas id="chart-area"></canvas>
                                                </div>
                                               
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-xl-4">
                                <div class="card mb-3 widget-content">
                                    <div class="widget-content-outer">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left">
                                                <div class="widget-heading">APY Last 7 days</div>
                                                <div class="widget-subheading"><?php echo $sum_last_7_days;?> DOT</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <div class="widget-numbers text-success"><?php echo $apy_last_7_days; ?> %</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-4">
                                <div class="card mb-3 widget-content">
                                    <div class="widget-content-outer">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left">
                                                <div class="widget-heading">APY Last 30 days</div>
                                                <div class="widget-subheading"><?php echo $sum_last_30_days;?> DOT</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <div class="widget-numbers text-warning"><?php echo $apy_last_30_days; ?> %</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-xl-4">
                                <div class="card mb-3 widget-content">
                                    <div class="widget-content-outer">
                                        <div class="widget-content-wrapper">
                                            <div class="widget-content-left">
                                                <div class="widget-heading">APY Current year</div>
                                                <div class="widget-subheading"><?php echo $sum_this_year;?> DOT</div>
                                            </div>
                                            <div class="widget-content-right">
                                                <div class="widget-numbers text-danger"><?php echo $apy_this_year;?> %</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="main-card mb-3 card">
                                    <div class="card-header">Statistics
                                    </div>
                                    <div class="table-responsive">
                                        <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                            <thead>
                                            <tr>
                                                <th class="text-center">#</th>
                                                <th>Period</th>
                                                <th class="text-center">Rewards</th>
                                                <th class="text-center">My APY</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            
<?php
// Start and end dates
$start_date = new DateTime('2020-08-01');
$end_date = new DateTime();
$current_date = clone $end_date;
$i = 1; // Initialize month count

while ($current_date >= $start_date) {
    $era = $current_date->format('Y'); 
    $period = $current_date->format('F');

// Check if are either empty, null, or not set
    if (empty( $arr[$era][$period]) || !isset($arr[$era][$period])) {
        // If any of them are empty or not set, break the loop
        break;
    } else {
		$apr = round((($arr[$era][$period]*1200) / $bonded), 2);
	}
    ?>
    <tr>
        <td class="text-center text-muted">#<?php echo $i; ?></td>
        <td>
            <div class="widget-content p-0">
                <div class="widget-content-wrapper">
                    <div class="widget-content-left flex2">
                        <div class="widget-heading"><?php echo $current_date->format('F') . ' ' .$current_date->format('Y'); ?></div>
                    </div>
                </div>
            </div>
        </td>
        <td class="text-center"><?php echo $arr[$era][$period] ?> DOT</td>
        <td class="text-center">
            <button type="button" id="PopoverCustomT-1" class="btn btn-outline-primary btn-sm btn-block" data-toggle="tooltip" data-placement="top">
                <strong><?php echo $apr; ?> %</strong>
            </button>
        </td>
    </tr>
    <?php
    // Move to the previous month and increment month count
    $current_date->modify('-1 month');
	$i++;
}
?>
                                            <tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-3">
                                <div class="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                    <div class="widget-content">
                                        <div class="widget-content-outer">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left pr-2 fsize-1">
                                                    <div class="widget-numbers mt-0 fsize-3 text-danger"><?php echo number_format(($balance-$bonded), 4);?> DOT</div>
                                                </div>
                                                
                                            </div>
                                            <div class="widget-content-left fsize-1">
                                                <div class="text-muted opacity-6">Transferable</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                                    <div class="widget-content">
                                        <div class="widget-content-outer">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left pr-2 fsize-1">
                                                    <div class="widget-numbers mt-0 fsize-3 text-success"><?php echo number_format($bonded, 2);?> DOT</div>
                                                </div>
                                                
                                            </div>
                                            <div class="widget-content-left fsize-1">
                                                <div class="text-muted opacity-6">Staking</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                                    <div class="widget-content">
                                        <div class="widget-content-outer">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left pr-2 fsize-1">
                                                    <div class="widget-numbers mt-0 fsize-3 text-warning"><?php echo count($rewards);?></div>
                                                </div>
                                                
                                            </div>
                                            <div class="widget-content-left fsize-1">
                                                <div class="text-muted opacity-6">Rewards day
												</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3">
                                <div class="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                                    <div class="widget-content">
                                        <div class="widget-content-outer">
                                            <div class="widget-content-wrapper">
                                                <div class="widget-content-left pr-2 fsize-1">
                                                    <div class="widget-numbers mt-0 fsize-3 text-info">$<?php echo number_format($balance*$price, 3);?></div>
                                                </div>
                                                
                                            </div>
                                            <div class="widget-content-left fsize-1">
                                                <div class="text-muted opacity-6">Total Value</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   <?php include 'template/footer.php'; ?>
				   </div>
        </div>
    </div>
	<?php include 'assets/scripts/js.php'; ?>
	</body>
</html>