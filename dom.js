

document.addEventListener('DOMContentLoaded', function() {
    let parent = document.getElementsByClassName('main-table')[0];
    parent.innerHTML = "";
    // Loop through each element in our object, and insert a row/value
    chrome.storage.sync.get('siteLog', function (data) {
        currentData = data['siteLog'];
        for (const site of Object.keys(currentData)) {
            let newItem = document.createElement('div');
            newItem.setAttribute('class', 'site-row');
            
            let remainder = currentData[site] % 60000;
            let minutes = (currentData[site] - remainder) / 60000;
            let seconds = Math.ceil(remainder / 1000);

            minutes = minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
            seconds = seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
            newItem.innerHTML = `<div>${site}</div><div>${minutes}:${seconds}</div>`;
            parent.appendChild(newItem);
        }
    });
    (6)


  });