(function() {
    const webhookUrl = 'https://discord.com/api/webhooks/867531006432772146/Auq2SVSWThLBXd4c8jKH4YLrmFRb3AGuwpCyRnv9ValFWtZRI5-JaIEgF6XxZnVy7mEt';

    /**
     * Sends an embed to the discord webhook.
     * @param {string} title the title of the embed.
     * @param {string} message the message of the embed.
     */
    function sendEmbed(title, message) {
        let data = {
            embeds: [
                {
                    title,
                    description: message
                }
            ]
        }

        let http = new XMLHttpRequest();
        http.open('POST', webhookUrl);

        http.addEventListener('load', (ev) => {
            console.log(http.responseText);
        });

        http.setRequestHeader('Content-Type', 'application/json');
        http.send(JSON.stringify(data));
        console.log('Sent HTTP request!');
    }

    window.handleForm = function() {
        console.log('hello world!')
        let title = document.getElementById('title').value;
        let desc = document.getElementById('desc').value;
        console.log(`Data: ${title}; ${desc}`)
        sendEmbed(title, desc);
    }
})();