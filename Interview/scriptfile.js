var latestStories = [
            {
                "title": "Hong Kong adopts sweeping security laws, Bowing to Beijing",
                "url": "https://www.nytimes.com/2024/03/19/world/asia/hong-kong-security-law-article-23.html"
            },
            {
                "title": "From Russia Elaborate Tales of Fake Journalists",
                "url": "https://www.nytimes.com/2024/03/18/business/media/russia-fake-journalists.html"
            },
            {
                "title": "Israel Faces a tough balancing act when it comes to russia and the west",
                "url": "https://www.nytimes.com/2024/03/19/world/europe/israel-russia-us-ukraine.html"
            },
            {
                "title": "Walter massey, a Physicist With a Higher Calling",
                "url": "https://www.nytimes.com/2024/03/19/science/physics-massey-black.html"
            },
            {
                "title": "What we know about Trump's Failure to arrange a Half-billion-dollar Bond",
                "url": "https://www.nytimes.com/2024/03/19/nyregion/trump-bond-ny-fraud-case.html"
            },
            {
                "title": "Outside groups pledge over $1 Billion to aid Biden's Re-election Effort",
                "url": "https://www.nytimes.com/2024/03/19/us/politics/biden-election-donation.html"
            }
        ];

        var colo = document.getElementById("colo");
        var heading = document.createElement("h2");
        heading.textContent = "Latest Stories";
        colo.appendChild(heading);

        latestStories.forEach(function (story) {
            var link = document.createElement("a");
            link.href = story.url;
            link.target = "_blank";
            var headline = document.createElement("h3");
            headline.textContent = story.title;
            link.appendChild(headline);
            colo.appendChild(link);
        });
