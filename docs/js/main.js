(function() {
    const defaultWebhook = 'https://discord.com/api/webhooks/867531006432772146/Auq2SVSWThLBXd4c8jKH4YLrmFRb3AGuwpCyRnv9ValFWtZRI5-JaIEgF6XxZnVy7mEt';

    /**
     * Sends an embed to the discord webhook.
     * @param {string} title the title of the embed.
     * @param {string} message the message of the embed.
     */
    function sendEmbed(webhook, title, message) {
        let data = {
            embeds: [
                {
                    title,
                    description: message
                }
            ]
        }

        let http = new XMLHttpRequest();
        http.open('POST', webhook);
        http.setRequestHeader('Content-Type', 'application/json');
        http.send(JSON.stringify(data));
    }

    window.handleForm = function() {
        let webhook = document.getElementById('webhook').value;
        let title = document.getElementById('title').value;
        let desc = document.getElementById('desc').value;

        if (!webhook || webhook.trim() == '')
            return sendEmbed(defaultWebhook, title, desc);

        sendEmbed(webhook, title, desc);
    }
})();