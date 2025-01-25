<center><img src="https://nitapaul.ro/projects/DoT-Staking-Rewards/assets/images/logo.png" width="20%" /></center>
# v1.0 Polkadot APY Interest Calculator for each individual native Polkadot address
<hr>

<p>This is an open-source project that allows you to check interest rates over years of staking on the native Polkadot blockchain. It runs exclusively for native staking and not for third-party apps.</p>
<p>You can check using an easy-to-navigate interface with graphical tools for enhanced convenience, letting you see your APY percentage in the past, grouped by year and month.
</p>

> [!IMPORTANT]  
> Check out the live version on <a href="https://nitapaul.ro/projects/DoT-Staking-Rewards/">https://nitapaul.ro/projects/DoT-Staking-Rewards/</a>

# Installation

Click "Code" -> "Download ZIP". After the download is complete, unzip the archive to a location convenient

**Now go to https://pro.subscan.io/login, create an account, and click on API Key under Tools & Services in the left sidebar.

After generating the API Key Token, open your files and locate functions.php. Inside, you will find:<br />
`$apiKey = 'YOUR-API-KEY'; // Replace with your Subscan API key`
<br />

> [!WARNING]
> If the Polkadot address entered is old enough and has accumulated many rewards, it may take longer to process the data. We are aware of this issue and plan to resolve it in future releases. Currently, data is retrieved in real-time using cURL, and we do not store it in a database. Response time also depends on the features and performance of the web hosting or local machine.

# Roadmap
Our project will be regularly updated to reflect improvements with each release.

- [x] #release initial version v1.0
- [ ] Return a 404 error if the Polkadot address is incorrect
- [ ] Remove unnecessary code repetitions
- [ ] Speed and performance optimizations
- [ ] Store data in the database to improve performance

# Contributing
We welcome contributions!
<p>Everything in this repository is open to constructive criticism, including features, implementations, code style, code review processes, documentation, and anything else related to the project.</p>

If you have a suggestion to improve the project, feel free to open an issue...

# License
This project is licensed under the the MIT License.
      
