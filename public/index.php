<?php 

require 'data/fetch-status-data.php';
require 'data/fetch-active-statements.php';
require 'data/fetch-planned-closures.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Skyway Bridge Status | Is the Sunshine Skyway Bridge open?</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="Keywords" content="sunshine skyway bridge, sunshine skyway bridge, skyway bridge, skyway bridge status, skyway bridge closure, sunshine skyway, skyway bridge closed, is the skyway bridge closed, sunshine skyway bridge closure, sunshine skyway bridge closed, skyway bridge open or closed, skyway bridge news, skyway bridge traffic, skyway bridge crash, sunshine skyway bridge open">
    <meta name="Description" content="Want to know if the Sunshine Skyway Bridge is open or closed? You've come to the right place! We pull and report the Skyway Bridge status every 5 minutes.">
    <link rel="canonical" href="https://www.skywaybridgestatus.com" />
    <!-- Open Graph Meta Tags -->
    <meta property="og:url" content="https://www.skywaybridgestatus.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Skyway Bridge Status" />
    <meta property="og:description" content="Want to know if the Sunshine Skyway Bridge is open or closed? You've come to the right place! We pull and report the Skyway Bridge status every 5 minutes." />
    <meta property="og:image" content="/assets/img/skywaystatus-og.jpg" />
    <?php include 'template-parts/styles-and-fonts.php';?>
    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <?php include 'template-parts/tracking.php';?>
</head>
<body>

<?php include 'template-parts/header.php';?>

<div class="main">
    <div class="container">

        <section class="status row">
            <div class="status__header col-12">
                <h1>The Sunshine Skyway Bridge is currently 
                <br/>
                <span class="status--<?php echo $global_status_modifier;?>"><?php echo $global_status_string;?></span></h1>
                <p><a href="." onclick="ga('send', 'event', 'Status Refresh', 'Link Click', 'Homepage Refresh');">Refresh this page</a> for the latest data. <br/>We update our main status every 5 minutes from <a href="https://fl511.com/List/Alerts">FL511</a>.</p>
                <p class="status__data-refreshed">(Status last updated: <?php echo date_format($fetch_datetime,'F jS, Y \a\t g:ia');?>)</p>
            </div>
        </section>

        <?php
        // Only display section if there is data to display
        if(!empty($active_statements) || !empty($planned_closure)) {
        ?>
        
        <section class="statements row">

            <?php
            // Check if active_statements array has content and is defined
            if(!empty($active_statements) && isset($active_statements)) {
            ?>

            <div class="statements__content">
                <h2>Current Status</h2>
                <?php
                echo "<table>";
                echo "<tr class=\"statement\">
                    <th>Source</th>
                    <th>Location</th>
                    <th>Message</th>
                    <th>Last Fetched</th>
                </tr>";
                foreach($active_statements as $key=>$row) {
                    echo "<tr class=\"statement\">";
                    foreach($row as $key2=>$row2){
                        echo "<td>" . $row2 . "</td>";
                    }
                    echo "</tr>";
                }
                echo "</table>";
                ?>
            </div>

            <?php
            }; // end active_statements condition
            ?>

            <?php
            // Loop for annoucement – SQL limited to 1 result
            foreach($planned_closure as $planned_closure):
                
                // Store new date variables
                $start_date = date_create($planned_closure["start_datetime"]);
                $end_date = date_create($planned_closure["end_datetime"]);
            
            ?>
            <div class="planned-closures__content">
                <h2>Planned Closures</h2>
                <?php echo $planned_closure["closed_direction"]; ?> traffic on the Skyway Bridge will be suspended from <?php echo date_format($start_date,'g:ia \o\n l F jS, Y'); ?> to <?php echo date_format($end_date,'g:ia \o\n l F jS, Y'); ?> for <?php echo $planned_closure["reason"]; ?>. <a href="<?php echo $planned_closure["url"]; ?>"> Learn more.</a>
            </div>
            <?php endforeach; ?>

            <iframe width="100%" height="400" src="https://embed.windy.com/embed2.html?lat=27.613&lon=-82.652&detailLat=26.554&detailLon=-81.902&width=1036&height=400&zoom=10&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1" frameborder="0"></iframe>

        </section>

        <?php
        }; //end active statements and planned closure condition
        ?>

        <section class="support row">
            <div class="support__content col-12">
                <h2>Was this helpful?</h2>
                <p>If so, please consider supporting this site by sharing with a friend, or by supporting my caffeine addiction. 😝</p>
                <div class="status__facebook-like-button">
                    <div class="fb-like" data-href="https://www.skywaybridgestatus.com" data-layout="button_count" data-action="like" data-size="large" data-show-faces="false" data-share="true"></div>
                    <style>.bmc-button img{width: 20px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{    line-height:24px !important;height: 27px !important;top: 7px;position: relative; !important;text-decoration: none !important;display:inline-flex !important;color:#000000 !important;background-color:#FFFFFF !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 0px 6px !important;font-size: 14px !important;letter-spacing:-0.08px !important;;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 1px !important;font-family:'Roboto', sans-serif !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#000000 !important;}</style><a class="bmc-button"  href="https://www.buymeacoffee.com/iannerney" target="_blank" rel="noopener"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Coffee icon"><span style="margin-left:5px;margin-right:5px;">Buy me a coffee</span></a>
                </div>
            </div>
        </section>

        <section class="subscribe row">
            <div class="subscribe__content">
                <h2><span class="subscribe__coming-soon">Coming Soon! </span><br/>Notifications by Text and Email</h2>
                <p>I've had many requests to provide status notifications by text and email, and I'm happy to say I should have this feature live in February. If you'd like to have early access to this new feature, please input your email below, and I'll let you know when it's ready! <br/><br/>Thanks for using Skyway Bridge Status! <br/>&mdash; Ian</p>
                <!-- Begin Mailchimp Signup Form -->
                <div id="mc_embed_signup">
                <form action="https://skywaybridgestatus.us7.list-manage.com/subscribe/post?u=f0159a3cfad26bb6d5c07f288&amp;id=b3f668b8e6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                <div class="mc-field-group">
                    <label for="mce-FNAME">First Name</label>
                    <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
                </div>
                <div class="mc-field-group">
                    <label for="mce-EMAIL">Email Address</label>
                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                </div>
                <div class="mc-field-group">
                    <label for="mce-PHONE">Mobile Phone Number</label>
                    <input type="text" value="" name="PHONE" class="" id="mce-PHONE">
                </div>
                <div class="mc-field-group">
                    <label for="mce-MMERGE5">Notification Preference </label>
                    <select name="MMERGE5" class="" id="mce-MMERGE5">
                        <option value=""></option>
                        <option value="Both Email and Text">Both Email and Text</option>
                        <option value="Text Message (SMS) Only">Text Message (SMS) Only</option>
                        <option value="Email Only">Email Only</option>
                    </select>
                </div>
                    <div id="mce-responses" class="clear">
                        <div class="response" id="mce-error-response" style="display:none"></div>
                        <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_f0159a3cfad26bb6d5c07f288_b3f668b8e6" tabindex="-1" value=""></div>
                    <div class="clear"><input type="submit" value="Get Early Access" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                    </div>
                </form>
                </div>

                <!--End mc_embed_signup-->
            </div>
        </section>

        <section class="project-information row">
            <div class="project-information__about col-8">
                <h2>About This Project</h2>
                <p>SkywayBridgeStatus.com is an open-source project aimed at helping Tampa Bay commuters plan for unexpected closures of the Sunshine Skyway Bridge. This web application actively collects real-time weather and traffic data from reputable sources. My goal is to use this historical data to create a closure prediction model available to the public.</p>
            </div>
            <div class="project-information__contribute col-4">
                <h2>Contribute</h2>
                <p>If you’re interested in contributing to, or sponsoring this project, please visit our <a href="https://github.com/iannerney/skywaybridgestatus">GitHub page</a>, or <a href="mailto:contribute@skywaybridgestatus.com">email us</a>.</p>
            </div>
        </section>

        <?php include 'template-parts/footer.php';?>

    </div>
</div>
</body>
</html>
