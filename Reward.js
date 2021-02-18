class Reward {

    constructor(selected) {
        this.selected = selected;
    }

    getRewards(selected) {
        document.getElementById('rewardstitle').appendChild(document.createTextNode('Your Rewards List'))
        selected.forEach((select) => {    
    
        let rewardsList = document.getElementById('rewards')
        switch(select) {
            case 'sports':
              let sportsItem = document.createElement('li');
              sportsItem.appendChild(document.createTextNode('Champions League Final Ticket'));
              rewardsList.appendChild(sportsItem);
              break;
            case 'kids':
                let kidsItem = document.createElement('li');
                kidsItem.appendChild(document.createTextNode('Sorry - No rewards available for Kids Channel Subscribers'));
                rewardsList.appendChild(kidsItem);
                console.log('N/A - No Rewards available for Kids Channel subscription')
              break;
            case 'music':
                let musicItem = document.createElement('li');
                musicItem.appendChild(document.createTextNode('Karaoke Pro Microphone'));
                rewardsList.appendChild(musicItem);
              break;
            case 'news':
                let newsItem = document.createElement('li');
                newsItem.appendChild(document.createTextNode('Sorry - No rewards available for News Channel Subscribers'));
                rewardsList.appendChild(newsItem);
                console.log('N/A - No Rewards available for News Channel subscription')
              break;
            case 'movies':
                let moviesItem = document.createElement('li');
                moviesItem.appendChild(document.createTextNode('Pirates of the Carribean collection'));
                rewardsList.appendChild(moviesItem);
              break;
          }
        }
    )}
    



}