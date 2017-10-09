// console.log('this is loaded');

//Twitter
//Consumer Key (API Key)	ILc0sUqXCAT54NxSDTh9L3MXD
//Consumer Secret (API Secret)	ITM7WDnsLWaE7WE28S60SVmO53DsVlX4OYmBRDsmDMe4GIMmXh

var twitterKeys = {
  consumer_key: 'ILc0sUqXCAT54NxSDTh9L3MXD',
  consumer_secret: 'ITM7WDnsLWaE7WE28S60SVmO53DsVlX4OYmBRDsmDMe4GIMmXh',
  access_token_key: '915373621547294720-vcSrP4LkzMdOPFhyOePga8tzAa0Bnkw',
  access_token_secret: 'mIyljsk1TAFkg9LBSKIyjYa04UAhp53RiBIRnyrftMzMd',
}

// console.log(twitterKeys.consumer_key);

//Spotify
//Client ID 2a7a4f86917d4de9966d77b898ab75ad
//Client Secret fb7781fd90de45998f986ba52e1550e9

var spotifyKeys = {
    consumer_key: '2a7a4f86917d4de9966d77b898ab75ad',
    consumer_secret: 'fb7781fd90de45998f986ba52e1550e9',
    //no access_token_key 
    //no access_token_secret
}

// console.log(spotifyKeys.consumer_key);

module.exports = {twitterKeys: twitterKeys,
                  spotifyKeys: spotifyKeys}





