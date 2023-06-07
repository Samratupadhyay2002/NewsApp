import React, { Component } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
    articles = [
        {
        "source": {
        "id": null,
        "name": "Electrek"
        },
        "author": "Fred Lambert",
        "title": "GM CEO says Tesla has the lead in electric cars, doesn't see profitable $30-40k EVs until end of decade",
        "description": "GM CEO says Tesla has the lead in electric cars, doesn't see profitable $30-40k EVs until end of decadeelectrek.co",
        "url": "https://electrek.co/2023/06/05/gm-ceo-tesla-lead-electric-cars-no-profitable-30-40k-evs/",
        "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/04/GM-executive-Mary-Barra.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-06-05T12:25:34Z",
        "content": "GM CEO Mary Barra says that she doesn’t see profitable electric cars in the $30,000 to $40,000 range until the end of the decade or “maybe even later.”\r\nHere’s why she is wrong and why it doesn’t eve… [+2351 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "orchidmedcentre1",
        "title": "Best Neuro Physician and Neurologist In Ranchi for Epilepsy, Stroke Management,",
        "description": "Department of NeurologyThe Department of Neurology is a highly advanced Super- Speciality department in Orchid Medical Centre. A Dedicated & Integegrated Multi-Disciplinary Neuro Science Team including the best neuro physician in ranchi, Neuro Technician & Re…",
        "url": "https://slashdot.org/submission/17237949/best-neuro-physician-and-neurologist-in-ranchi-for-epilepsy-stroke-management",
        "urlToImage": null,
        "publishedAt": "2023-06-05T12:23:56Z",
        "content": "Department of NeurologyThe Department of Neurology is a highly advanced Super- Speciality department in Orchid Medical Centre. A Dedicated &amp; Integegrated Multi-Disciplinary Neuro Science Team inc… [+613 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AutoExpress"
        },
        "author": null,
        "title": "New BMW Z4 M40i 2023 facelift review - pictures",
        "description": "Pictures of the facelifted BMW Z4 M40i. Photographer: Pete Gibson",
        "url": "https://www.autoexpress.co.uk/bmw/z4/360343/new-bmw-z4-m40i-2023-facelift-review-pictures",
        "urlToImage": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1685964344/autoexpress/2023/06/BMW Z4 M40i facelift 2023 UK-22.jpg",
        "publishedAt": "2023-06-05T12:16:45Z",
        "content": "New 2023 Tesla Model 3 facelift to get Roadster inspiration\r\nThe updated Tesla Model 3 will feature styling cues from the Roadster, while also inheriting the digital dash from the Model X"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "marketbeat.com",
        "title": "Analysts are Giving ChargePoint a Boost, but is it a Buy?",
        "description": "Somebody forgot to tell ChargePoint Holdings, Inc. NYSE: CHPT that the market is exiting bear market territory. On Friday, June 2, CHPT stock is down over 5% in late-day trading. This has taken the shine off a week that started with the stock popping over 15%…",
        "url": "https://biztoc.com/x/87dff184e38162b8",
        "urlToImage": "https://c.biztoc.com/p/87dff184e38162b8/s.webp",
        "publishedAt": "2023-06-05T12:14:14Z",
        "content": "Somebody forgot to tell ChargePoint Holdings, Inc. NYSE: CHPT that the market is exiting bear market territory. On Friday, June 2, CHPT stock is down over 5% in late-day trading. This has taken the s… [+304 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "TweakTown"
        },
        "author": "Jak Connor",
        "title": "Elon Musk reveals Twitter has discovered a hidden layer of 'censorship'",
        "description": "Elon Musk has sat down for an interview where he discusses overall censorship and if new laws should be introduced to protect users from private companies. Continue reading at TweakTown >",
        "url": "https://www.tweaktown.com/news/91728/elon-musk-reveals-twitter-has-discovered-hidden-layer-of-censorship/index.html",
        "urlToImage": "https://static.tweaktown.com/news/9/1/91728_25_elon-musk-reveals-twitter-has-discovered-hidden-layer-of-censorship_full.png",
        "publishedAt": "2023-06-05T12:04:03Z",
        "content": "During an interview with The Babylon Bee at Twitter headquarters, Elon Musk has discussed censorship by private companies such as Google and if new laws should be introduced that protect users from p… [+2451 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "investors.com",
        "title": "Nio Earnings: Delivery Guidance, New EVs In Focus As Nio Stock Struggles",
        "description": "China's Nio (NIO) prepares to report first-quarter earnings on Friday, June 9 as important new electric vehicles roll out in a hunt for growth. Nio stock rose on June, near a 52-week low. Nio has been struggling with soft sales, a laggard vs. its startup riva…",
        "url": "https://biztoc.com/x/3191ccd301669fd5",
        "urlToImage": "https://c.biztoc.com/p/3191ccd301669fd5/s.webp",
        "publishedAt": "2023-06-05T11:54:05Z",
        "content": "China's Nio (NIO) prepares to report first-quarter earnings on Friday, June 9 as important new electric vehicles roll out in a hunt for growth. Nio stock rose on June, near a 52-week low.Nio has been… [+268 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "GlobeNewswire"
        },
        "author": "ReportLinker",
        "title": "Strategic Profiling of Tesla on Electric Mobility",
        "description": "This study offers a strategic overview of Tesla to identify and analyze the factors actively electrifying its product lineup. Tesla is accelerating its growth in the pure battery electric vehicle (BEV) market by catering to the luxury and mass-market segments…",
        "url": "https://www.globenewswire.com/news-release/2023/06/05/2681868/0/en/Strategic-Profiling-of-Tesla-on-Electric-Mobility.html",
        "urlToImage": "https://ml.globenewswire.com/Resource/Download/3e0b82c2-02d7-44c8-b22f-561e0f321f39",
        "publishedAt": "2023-06-05T11:52:00Z",
        "content": "New York, June 05, 2023 (GLOBE NEWSWIRE) -- Reportlinker.com announces the release of the report \"Strategic Profiling of Tesla on Electric Mobility\" - https://www.reportlinker.com/p06465485/?utm_sour… [+1301 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Investing.com"
        },
        "author": "Investing.com",
        "title": "Tesla's Model Y surpasses Toyota’s RAV4 to become the best selling SUV in Australia",
        "description": "Tesla's Model Y surpasses Toyota’s RAV4 to become the best selling SUV in Australia",
        "url": "https://www.investing.com/news/stock-market-news/teslas-model-y-surpasses-toyotas-rav4-to-become-the-best-selling-suv-in-australia-432SI-3098185",
        "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEC6Q03Q_L.jpg",
        "publishedAt": "2023-06-05T11:44:26Z",
        "content": "The latest data received from the Federated Chamber of Automotive Industries shows that Tesla (NASDAQ:TSLA) sold 3,178 units of the Model Y in May, overtaking the Toyota (NYSE:TM) RAV4 as the bestsel… [+1306 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Tesla Powers Ahead As Made-In-China Sales Surge 142% In May",
        "description": "EV giant Tesla Inc TSLA sold 77,695 made-in-China vehicles last month, as per China Passenger Car Association data. The numbers are inclusive of both exports and in-China sales. What Happened: The new numbers mark a 2.4% increase in Tesla China sales from Apr…",
        "url": "https://biztoc.com/x/f1da849bd4326dc9",
        "urlToImage": "https://c.biztoc.com/p/f1da849bd4326dc9/s.webp",
        "publishedAt": "2023-06-05T11:38:08Z",
        "content": "EV giant Tesla Inc TSLA sold 77,695 made-in-China vehicles last month, as per China Passenger Car Association data. The numbers are inclusive of both exports and in-China sales.What Happened: The new… [+297 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Slashdot.org"
        },
        "author": "feedfeeder",
        "title": "The Morning After: Amazon reportedly exploring free cell phone service for Prime subscribers",
        "description": "According to Bloomberg, Amazon is in discussions with multiple US-based phone carriers about offering cheap – around $this.props.pageSize a month – or even free phone service to Prime customers. The company is reportedly negotiating with Verizon, AT&T and T-Mobile as well as …",
        "url": "https://slashdot.org/firehose.pl?op=view&amp;id=17this.props.pageSize92089",
        "urlToImage": null,
        "publishedAt": "2023-06-05T11:32:07Z",
        "content": "According to Bloomberg, Amazon is in discussions with multiple US-based phone carriers about offering cheap – around $this.props.pageSize a month – or even free phone service to Prime customers. The company is report… [+3800 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "Ben Lovejoy",
        "title": "Apple headset is ‘the single greatest thing that could happen to this industry’",
        "description": "There are very mixed views as to whether the Apple headset and its successors can be the device to transform AR/VR from a niche interest to a mass-market product. But a report today says that those working within the sector firmly believe that it can.\nOculus …",
        "url": "https://9to5mac.com/2023/06/05/apple-headset-greatest-thing/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/Apple-headset-render.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-06-05T11:30:43Z",
        "content": "There are very mixed views as to whether the Apple headset and its successors can be the device to transform AR/VR from a niche interest to a mass-market product. But a report today says that those w… [+4347 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "MarketScreener",
        "title": "TESLA : UBS reaffirms its Buy rating",
        "description": "(marketscreener.com) Patrick Hummel from UBS retains his positive opinion on the stock with a Buy rating. The target price remains unchanged at USD 220.https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/TESLA-UBS-reaffirms-its-Buy-rating-440393…",
        "url": "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/TESLA-UBS-reaffirms-its-Buy-rating-44039306/?utm_medium=RSS&utm_content=20230605",
        "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
        "publishedAt": "2023-06-05T11:25:06Z",
        "content": "Patrick Hummel from UBS retains his positive opinion on the stock with a Buy rating. The target price remains unchanged at USD 220."
        },
        {
        "source": {
        "id": null,
        "name": "Topdollarinvestor.com"
        },
        "author": "Josh Dudick",
        "title": "Riding the AI Wave: The Golden Opportunity for Long-Term Investors",
        "description": "The top site for Artificial intelligence (AI), Openai.com, saw traffic increase a record 54.21% in March – more than any other of the world's leading ... Read More",
        "url": "https://topdollarinvestor.com/ai-sector-long-term-investment-opportunities/",
        "urlToImage": "https://wealthofgeeks.com/wp-content/uploads/2023/05/unbelievable-news.jpg",
        "publishedAt": "2023-06-05T11:23:42Z",
        "content": "The top site for Artificial intelligence (AI), Openai.com, saw traffic increase a record 54.21% in March more than any other of the world's leading websites. Its most popular feature, ChatGPT, is fas… [+6304 chars]"
        },
        {
        "source": {
        "id": "engadget",
        "name": "Engadget"
        },
        "author": "Mat Smith",
        "title": "The Morning After: Amazon reportedly exploring free cell phone service for Prime subscribers",
        "description": "According to Bloomberg, Amazon is in discussions with multiple US-based phone carriers about offering cheap – around $this.props.pageSize a month – or even free phone service to Prime customers. The company is reportedly negotiating with Verizon, AT&T and T-Mobile as well as …",
        "url": "https://www.engadget.com/the-morning-after-amazon-reportedly-exploring-free-cell-phone-service-for-prime-subscribers-111534986.html",
        "urlToImage": "https://s.yimg.com/uu/api/res/1.2/HmsvtziJYdqRgOmp6rrD6w--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/f9ec65this.props.pageSize-ffeb-11ed-bdff-a4f87fd8a5b3.cf.jpg",
        "publishedAt": "2023-06-05T11:15:34Z",
        "content": "According to Bloomberg, Amazon is in discussions with multiple US-based phone carriers about offering cheap around $this.props.pageSize a month or even free phone service to Prime customers. The company is reportedly… [+3366 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "finance.yahoo.com",
        "title": "Tesla's China-made EV sales rose 2.4% in May from April",
        "description": "U.S. automaker Tesla Inc delivered 77,695 China-made electric vehicles (EVs) in May, a 2.4% jump from April, data from the China Passenger Car Association (CPCA) showed on Monday. On a yearly basis, sales rose 142% in May from 32,165 vehicles in the same mont…",
        "url": "https://biztoc.com/x/2ce280198188b729",
        "urlToImage": "https://c.biztoc.com/p/2ce280198188b729/s.webp",
        "publishedAt": "2023-06-05T11:12:05Z",
        "content": "U.S. automaker Tesla Inc delivered 77,695 China-made electric vehicles (EVs) in May, a 2.4% jump from April, data from the China Passenger Car Association (CPCA) showed on Monday.On a yearly basis, s… [+292 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "marketwatch.com",
        "title": "Tesla recalls some Model Y EVs, stock rises toward 7-day win streak",
        "description": "Tesla Inc. has issued a voluntary safety recall of certain Model Y electric vehicles, due to risks of loss of steering control. The Texas-based EV maker said the recall affects 137 Model Y vehicles from model years 2022 and 2023. “A loose fastener may allow t…",
        "url": "https://biztoc.com/x/59d099915644b36c",
        "urlToImage": "https://c.biztoc.com/p/59d099915644b36c/s.webp",
        "publishedAt": "2023-06-05T11:12:04Z",
        "content": "Tesla Inc. has issued a voluntary safety recall of certain Model Y electric vehicles, due to risks of loss of steering control.The Texas-based EV maker said the recall affects 137 Model Y vehicles fr… [+244 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AutoExpress"
        },
        "author": null,
        "title": "Best car colour restorers 2023 - pictures",
        "description": "Pictures of the best car colour restorers to buy",
        "url": "https://www.autoexpress.co.uk/product-group-tests/360341/best-car-colour-restorers-2023-pictures",
        "urlToImage": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1685961449/autoexpress/2023/06/Best colour restorers 2023.jpg",
        "publishedAt": "2023-06-05T11:06:18Z",
        "content": "New 2023 Tesla Model 3 facelift to get Roadster inspiration\r\nThe updated Tesla Model 3 will feature styling cues from the Roadster, while also inheriting the digital dash from the Model X"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "investors.com",
        "title": "Nio Earnings: Delivery Guidance, New EVs In Focus As Nio Stock Struggles",
        "description": "China's Nio (NIO) prepares to report first-quarter earnings on Friday, June 9 as important new electric vehicles roll out in a hunt for growth. Nio stock rose on June, near a 52-week low. X & Nio has been struggling with soft sales, a laggard vs. its startup …",
        "url": "https://biztoc.com/x/143b5c5d93d84ec9",
        "urlToImage": "https://c.biztoc.com/201/og.png",
        "publishedAt": "2023-06-05T11:02:19Z",
        "content": "China's Nio (NIO) prepares to report first-quarter earnings on Friday, June 9 as important new electric vehicles roll out in a hunt for growth. Nio stock rose on June, near a 52-week low.\r\nX\r\n&amp;Ni… [+268 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Barbara Kollmeyer",
        "title": "Morgan Stanley sees an earnings wipe out ahead for Wall Street’s unloved stock rally",
        "description": "Morgan Stanley strategist Mike Wilson still expects \"a meaningful earnings recession this year (-16% year-over-year decline) that has yet to be priced in,\" by stock markets.",
        "url": "https://www.marketwatch.com/story/morgan-stanley-sees-an-earnings-wipe-out-ahead-for-wall-streets-unloved-stock-rally-dec4b3be",
        "urlToImage": "https://images.mktw.net/im-794181/social",
        "publishedAt": "2023-06-05T11:02:00Z",
        "content": "Hunting for optimists the Monday after an explosive jobs and debt-ceiling fueled relief rally that sent the S&amp;P 500 \r\n SPX,\r\n +1.45%\r\nto the edge of a bull market, is proving a little tough. That… [+6509 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hackaday"
        },
        "author": "Navarre Bartz",
        "title": "Navy Program PUMPs Up Hopes for Magnetic Propulsion",
        "description": "The “caterpillar drive” in The Hunt for Red October allowed the sub to travel virtually undetected through the ocean, but real examples of magnetohydrodynamic drives (MHDs) are rare. The US …read more",
        "url": "https://hackaday.com/2023/06/05/navy-program-pumps-up-hopes-for-magnetic-propulsion/",
        "urlToImage": "https://hackaday.com/wp-content/uploads/2023/05/Yamato1_1.jpg",
        "publishedAt": "2023-06-05T11:00:35Z",
        "content": "The “caterpillar drive” in The Hunt for Red October allowed the sub to travel virtually undetected through the ocean, but real examples of magnetohydrodynamic drives (MHDs) are rare. The US Navy’s re… [+this.props.pageSize35 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Noi Mahoney",
        "title": "Is Canada losing out to US and Mexico on nearshoring boom?",
        "description": "Nearshoring and reshoring manufacturing developments bypassing Canada for the U.S. and Mexico. The post Is Canada losing out to US and Mexico on nearshoring ...",
        "url": "https://finance.yahoo.com/news/canada-losing-us-mexico-nearshoring-1this.props.pageSize0006this.props.pageSize.html",
        "urlToImage": "https://media.zenfs.com/en/freightwaves_373/d126e5931c1ddde2a50db3a06c757bae",
        "publishedAt": "2023-06-05T11:00:00Z",
        "content": "Since 2021, the U.S. and Mexico have attracted a wave of high-tech factories related to gas-powered cars, electric vehicles and chip manufacturing, while Canada has attracted only a few. (Photo: Shut… [+8882 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "TweakTown"
        },
        "author": "Jak Connor",
        "title": "Elon Musk on AI: the good news about Russian roulette is 5 barrels aren't loaded",
        "description": "Elon Musk was asked how long human civilization has left and what he thinks are the risks that would cause society to fall into darkness. Continue reading at TweakTown >",
        "url": "https://www.tweaktown.com/news/91726/elon-musk-on-ai-the-good-news-about-russian-roulette-is-5-barrels-arent-loaded/index.html",
        "urlToImage": "https://static.tweaktown.com/news/9/1/91726_2514_elon-musk-on-ai-the-good-news-about-russian-roulette-is-5-barrels-arent-loaded_full.jpg",
        "publishedAt": "2023-06-05Tthis.props.pageSize:52:03Z",
        "content": "Twitter owner, SpaceX and Tesla CEO Elon Musk has sat down for an interview where he discusses various topics, such as the potential risks to the downfall of civilization.\r\nStemming off of a conversa… [+2792 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Tomi Kilgore",
        "title": ": Tesla recalls some Model Y EVs, stock rises toward 7-day win streak",
        "description": "Tesla has issued a voluntary safety recall of certain Model Y electric vehicles, due to a risk of loss of steering control.",
        "url": "https://www.marketwatch.com/story/tesla-recalls-some-model-y-evs-stock-rises-toward-7-day-win-streak-49f883ef",
        "urlToImage": "https://images.mktw.net/im-794183/social",
        "publishedAt": "2023-06-05Tthis.props.pageSize:50:09Z",
        "content": "Tesla Inc. has issued a voluntary safety recall of certain Model Y electric vehicles, due to risks of loss of steering control.The Texas-based EV maker said the recall affects 137 Model Y vehicles fr… [+this.props.pageSize73 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Pavel Orlov, Forbes Councils Member, \n Pavel Orlov, Forbes Councils Member\n https://www.forbes.com/sites/forbestechcouncil/people/pavelorlov/",
        "title": "How Computer Vision Is Driving Innovation Across Industries",
        "description": "The fusion of AI and computer vision is reshaping countless sectors, ranging from healthcare and manufacturing to retail and transportation.",
        "url": "https://www.forbes.com/sites/forbestechcouncil/2023/06/05/how-computer-vision-is-driving-innovation-across-industries/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6479e7d30717c50fb50b6f29/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2023-06-05Tthis.props.pageSize:45:00Z",
        "content": "As a cofounder at Innowise Group with 20 years of experience in IT, Pavel loves helping businesses grow through IoT development.\r\ngetty\r\nIn today's rapidly evolving world, the transformative power of… [+7452 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MarketWatch"
        },
        "author": "Tomi Kilgore",
        "title": "Tesla recalls some Model Y EVs, stock rises toward 7-day win streak",
        "description": "Tesla has issued a voluntary safety recall of certain Model Y electric vehicles, due to a risk of loss of steering control.",
        "url": "https://www.marketwatch.com/story/tesla-recalls-some-model-y-evs-stock-rises-toward-7-day-win-streak-49f883ef",
        "urlToImage": "https://images.mktw.net/im-794183/social",
        "publishedAt": "2023-06-05Tthis.props.pageSize:40:00Z",
        "content": "Tesla Inc. has issued a voluntary safety recall of certain Model Y electric vehicles, due to risks of loss of steering control.The Texas-based EV maker said the recall affects 137 Model Y vehicles fr… [+this.props.pageSize73 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "hbullock@insider.com (Hallam Bullock)",
        "title": "this.props.pageSize Things in Tech: Apple's big metaverse push",
        "description": "In today's edition: What it was like to work with Elizabeth Holmes, Elon Musk's China trip ends, and Nvidia's founders were not good Denny's customers.",
        "url": "https://www.businessinsider.com/this.props.pageSize-things-in-tech-apple-musk-and-nvidia-founders-2023-6",
        "urlToImage": "https://i.insider.com/647d8de6a52c4b0019369319?width=1200&format=jpeg",
        "publishedAt": "2023-06-05Tthis.props.pageSize:35:00Z",
        "content": "Hello, readers. Hallam Bullock, an editor on Insider's audience team, reporting from London. This week, Apple is preparing to do what no tech firm has managed yet: make the metaverse cool. \r\nLet's ge… [+3894 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daily Mail"
        },
        "author": "Neil Simpson",
        "title": "Stylish new hotels and events to experience in Majorca (plus, a guide to the island's best beaches)",
        "description": "Everyone from Sir Richard Branson to Rafael Nadal is launching hotels on the isle of Majorca. What's more, the island has more than 250 beaches to choose from...",
        "url": "https://www.dailymail.co.uk/travel/article-12155015/Stylish-new-hotels-events-experience-Majorca-plus-guide-islands-best-beaches.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/05/09/71771881-0-image-a-13_1685955119663.jpg",
        "publishedAt": "2023-06-05Tthis.props.pageSize:19:13Z",
        "content": "Move over Magaluf. Where Majorca was known as a mecca for lads on tour and cheap package deals, today its all change.\r\nIndeed, the tourist board has been quietly looking to improve the islands image … [+7354 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daily Mail"
        },
        "author": "Neil Simpson",
        "title": "Stylish new hotels and events to experience in Majorca (plus, a guide to the island's best beaches)",
        "description": "Everyone from Sir Richard Branson to Rafael Nadal is launching hotels on the isle of Majorca. What's more, the island has more than 250 beaches to choose from...",
        "url": "https://www.dailymail.co.uk/travel/article-12155015/Stylish-new-hotels-events-experience-Majorca-plus-guide-islands-best-beaches.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/05/09/71771881-0-image-a-13_1685955119663.jpg",
        "publishedAt": "2023-06-05Tthis.props.pageSize:19:13Z",
        "content": "Move over Magaluf. Where Majorca was known as a mecca for lads on tour and cheap package deals, today its all change.\r\nIndeed, the tourist board has been quietly looking to improve the islands image … [+7354 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "beincrypto.com",
        "title": "Avorak AI Aims To Become Best Crypto To Buy Now",
        "description": "Crypto Market Overview: Bull or Bear? The debate on whether the crypto market is in a bull or bear phase is ongoing, as both sides present valid arguments. However, certain factors suggest the market is currently entering a bullish phase. Initially, leading c…",
        "url": "https://biztoc.com/x/93ecdd00b9f3e046",
        "urlToImage": "https://c.biztoc.com/p/93ecdd00b9f3e046/s.webp",
        "publishedAt": "2023-06-05Tthis.props.pageSize:16:07Z",
        "content": "Crypto Market Overview: Bull or Bear?The debate on whether the crypto market is in a bull or bear phase is ongoing, as both sides present valid arguments. However, certain factors suggest the market … [+283 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "energycentral.com",
        "title": "Tesla Master Plan Part 3; Teardown By an Energy System Modeler",
        "description": "This article tackles a deceptively dangerous notion concerning energy, economics, and sustainability: • We can practically and economically run our world almost exclusively on wind and solar power. • We can accomplish this total transformation of the foundati…",
        "url": "https://biztoc.com/x/300765e4f5d65220",
        "urlToImage": "https://c.biztoc.com/p/300765e4f5d65220/s.webp",
        "publishedAt": "2023-06-05Tthis.props.pageSize:08:07Z",
        "content": "This article tackles a deceptively dangerous notion concerning energy, economics, and sustainability:We can practically and economically run our world almost exclusively on wind and solar power.We ca… [+272 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "TechNode"
        },
        "author": "TechNode Feed",
        "title": "BYD becomes best-selling EV brand in Israel in the first five months of 2023",
        "description": "The Israel Vehicle Importers Association’s latest data shows that Chinese auto giant BYD has become the best-selling EV brand in Israel in the first five months of 2023, according to Chinese state news agency Xinhua. A total of 8,497 electric cars, many of th…",
        "url": "http://technode.com/2023/06/05/byd-becomes-best-selling-ev-brand-in-israel-in-the-first-five-months-of-2023/",
        "urlToImage": "https://i0.wp.com/technode.com/wp-content/uploads/2021/08/technode-news-feed-1-1.png?fit=540%2C540&ssl=1",
        "publishedAt": "2023-06-05Tthis.props.pageSize:07:00Z",
        "content": "The Israel Vehicle Importers Associations latest data shows that Chinese auto giant BYD has become the best-selling EV brand in Israel in the first five months of 2023, according to Chinese state new… [+580 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "TweakTown"
        },
        "author": "Jak Connor",
        "title": "Elon Musk says Twitter lost $40 million over advertisers being Community Noted",
        "description": "Twitter owner Elon Musk has sat down for an interview where he explained that Twitter has lost $40 million in advertising through Community Notes. Continue reading at TweakTown >",
        "url": "https://www.tweaktown.com/news/91725/elon-musk-says-twitter-lost-40-million-over-advertisers-being-community-noted/index.html",
        "urlToImage": "https://static.tweaktown.com/news/9/1/91725_554_elon-musk-says-twitter-lost-40-million-over-advertisers-being-community-noted_full.png",
        "publishedAt": "2023-06-05Tthis.props.pageSize:04:03Z",
        "content": "SpaceX and Tesla CEO Elon Musk has sat down for an interview with Babylon Bee at Twitter headquarters to discuss Musk's rollercoaster takeover of the company and what the future looks like with the w… [+2529 chars]"
        },
        {
        "source": {
        "id": "the-washington-post",
        "name": "The Washington Post"
        },
        "author": "Jeanne Whalen",
        "title": "Electric vehicles appeal to conservative buyers sick of gas guzzlers",
        "description": "Electric vehicles are often associated with liberal coastal types who speak of saving the planet. But in this Republican stronghold north of Dallas, more and more drivers are deciding EVs are just common sense.",
        "url": "https://www.washingtonpost.com/technology/2023/06/05/ev-conservative-buyer-uptick/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/F2TQZ3XRTJ32XKEUGTUDIVOEYI.jpg&w=1440",
        "publishedAt": "2023-06-05Tthis.props.pageSize:01:56Z",
        "content": "Comment on this story\r\nComment\r\nPLANO, Tex. Tony Federico bought his Tesla Model 3 in 2018. A former Marine who votes Republican, Federico said he was drawn by the cool technology and the chance to s… [+9872 chars]"
        },
        {
        "source": {
        "id": "financial-post",
        "name": "Financial Post"
        },
        "author": "Martin Pelletier",
        "title": "Nvidia, Apple and other soaring megacaps are hiding a weak market",
        "description": "Giving into FOMO can do a lot of damage to an investment portfolio if you get the timing wrong, says Martin Pelletier. Read more.",
        "url": "https://financialpost.com/investing/nvidia-apple-soaring-megacaps-hiding-weak-market",
        "urlToImage": "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2023/06/no0602pelletier.jpeg",
        "publishedAt": "2023-06-05Tthis.props.pageSize:00:41Z",
        "content": "Martin Pelletier: Giving into FOMO can do a lot of damage to a portfolio if you get the timing wrong \r\nWagon of Fools by Hendrik Gerritsz Pot, 1637. The painting depicts tulip mania, in which people … [+8423 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Elon Musk Takes Swipe At Rivals' Self-Driving Technology: 'Brittle And Unscalable'",
        "description": "Tesla Inc TSLA CEO Elon Musk on Sunday criticized the self-driving tech developed by competitors including Alphabet Inc‘s GOOG GOOGL Waymo and General Motors-backed GM Cruise LLC. What Happened: “Yeah, extremely brittle to local conditions & doesn't scale,” s…",
        "url": "https://biztoc.com/x/feae05fb1547001b",
        "urlToImage": "https://c.biztoc.com/p/feae05fb1547001b/s.webp",
        "publishedAt": "2023-06-05Tthis.props.pageSize:00:11Z",
        "content": "Tesla Inc TSLA CEO Elon Musk on Sunday criticized the self-driving tech developed by competitors including Alphabet Incs GOOG GOOGL Waymo and General Motors-backed GM Cruise LLC.What Happened: Yeah, … [+292 chars]"
        },
        {
        "source": {
        "id": "newsweek",
        "name": "Newsweek"
        },
        "author": "John James",
        "title": "Unless President Biden Stops Them, China will Control America's EV Future | Opinion",
        "description": "Hopefully, the Biden administration will heed the lessons of the past and prevent another American industry from losing its grip to China.",
        "url": "https://www.newsweek.com/unless-president-biden-stops-them-china-will-control-americas-ev-future-opinion-1803896",
        "urlToImage": "https://d.newsweek.com/en/full/2242093/tesla-cars-charging.jpg",
        "publishedAt": "2023-06-05Tthis.props.pageSize:00:02Z",
        "content": "President Joe Biden is pushing for half of United States auto sales to be electric vehicles (EVs) by 2030. Despite economic and humanitarian warning signs that our technology, workforce, infrastructu… [+5076 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AutoExpress"
        },
        "author": null,
        "title": "New MG HS 2023 facelift review - pictures",
        "description": "Pictures of the facelifted MG HS. Photographer: Pete Gibson",
        "url": "https://www.autoexpress.co.uk/mg/hs/360339/new-mg-hs-2023-facelift-review-pictures",
        "urlToImage": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1685958227/autoexpress/2023/06/MG HS 2023 UK-20.jpg",
        "publishedAt": "2023-06-05T09:41:16Z",
        "content": "New 2023 Tesla Model 3 facelift to get Roadster inspiration\r\nThe updated Tesla Model 3 will feature styling cues from the Roadster, while also inheriting the digital dash from the Model X"
        },
        {
        "source": {
        "id": null,
        "name": "Telegraph.co.uk"
        },
        "author": "Gareth Corfield",
        "title": "Musk hosts anti-vax presidential candidate in Twitter live event",
        "description": "Elon Musk is courting another US presidential candidate in the form of Robert F Kennedy Jr, a prominent anti-vaccine activist, just weeks after Ron DeSantis’...",
        "url": "https://www.telegraph.co.uk/business/2023/06/05/elon-musk-hosts-robert-kennedy-twitter-space/",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/yVtMk.zWnlika17JKj5UeQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NDg-/https://media.zenfs.com/en/the_telegraph_258/dcd212this.props.pageSized659f9c182342ddad7409253",
        "publishedAt": "2023-06-05T09:38:25Z",
        "content": "Robert Kennedy Jr - Jamie McCarthy/Getty Images\r\nElon Musk is courting another US presidential candidate in the form of Robert F Kennedy Jr, a prominent anti-vaccine activist, just weeks after Ron De… [+3120 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "GlobeNewswire"
        },
        "author": "Market Reports World",
        "title": "By [2029], Advance Energy Storage Market Size 2023: New Research Report Emphasizes the Potential for Growth, Opportunities, Industry Analysis and Future Projections",
        "description": "Pune, June 05, 2023 (GLOBE NEWSWIRE) -- Global Advance Energy Storage Market [2023-2029] Research Report Analysis and Outlook Insights | Latest Updated Report | 92 Pages Report | The Advance Energy Storage Market Size, Share, Growth, and Industry Analysis is …",
        "url": "https://www.globenewswire.com/news-release/2023/06/05/2681724/0/en/By-2029-Advance-Energy-Storage-Market-Size-2023-New-Research-Report-Emphasizes-the-Potential-for-Growth-Opportunities-Industry-Analysis-and-Future-Projections.html",
        "urlToImage": "https://ml.globenewswire.com/Resource/Download/f76f43b1-2795-46d0-981c-832a61a179b5",
        "publishedAt": "2023-06-05T09:32:00Z",
        "content": "Pune, June 05, 2023 (GLOBE NEWSWIRE) -- Global Advance Energy Storage Market [2023-2029] Research Report Analysis and Outlook Insights | Latest Updated Report | 92 Pages Report | The Advance Energy S… [+13674 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "PRNewswire"
        },
        "author": null,
        "title": "FORTUNE ANNOUNCES 2023 FORTUNE 500 LIST",
        "description": "Walmart takes the No. 1 spot for eleventh straight year, followed by Amazon.com and Exxon Mobil NEW YORK, June 5, 2023 /PRNewswire/ -- Today, Fortune announced the 69th Fortune 500TM ranking, its annual list of the largest corporations in the United States, r…",
        "url": "https://www.prnewswire.com/news-releases/fortune-announces-2023-fortune-500-list-301841941.html",
        "urlToImage": "https://mma.prnewswire.com/media/2092443/Lynch_COV_W.jpg?p=facebook",
        "publishedAt": "2023-06-05T09:30:00Z",
        "content": "Walmart takes the No. 1 spot for eleventh straight year, followed by Amazon.com and Exxon Mobil \r\nNEW YORK, June 5, 2023 /PRNewswire/ -- Today, Fortune announced the 69th Fortune 500TM ranking, its a… [+4209 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Robert Hart, Forbes Staff, \n Robert Hart, Forbes Staff\n https://www.forbes.com/sites/roberthart/",
        "title": "Elon Musk’s Neuralink Wants To Put Chips In Our Brains — How It Works And Who Else Is Doing It",
        "description": "Neuralink is one of many brain implant companies hoping to restore lost functions like sight and movement and Musk hopes it will one day help humans merge with artificial intelligence.",
        "url": "https://www.forbes.com/sites/roberthart/2023/06/05/elon-musks-neuralink-wants-to-put-chips-in-our-brains---how-it-works-and-who-else-is-doing-it/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/605b13ad9399a2c75875d357/0x0.jpg?format=jpg&crop=4800,2698,x0,y151,safe&width=1200",
        "publishedAt": "2023-06-05T09:26:06Z",
        "content": "Neuralink, Elon Musks brain implant company, has won approval from the Food and Drug Administration to start testing its device in humans, one of a growing cadre of neurotech pioneers with goals of m… [+7338 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Toronto Star"
        },
        "author": "Torstar Open Data Team -",
        "title": "Halton highway closures for planned roadwork (June 5, 2023)",
        "description": "Plan your trip before you’re on the road: The Ministry of Transportation has scheduled seven closures in Halton on June 5, 2023 for roadwork on Highwa...",
        "url": "https://www.thestar.com/news/highway-closures/halton/2023/06/05/halton-highway-closures-for-planned-roadwork-june-5-2023.html",
        "urlToImage": "https://images.thestarimages.com/9U-bXuywxkWLI1z3Va7wDOGkS9Y=/1280xthis.props.pageSize24/smart/filters:cb(1685957057624):format(webp)/https://www.thestar.com/content/dam/thestar/news/highway-closures/halton/2023/06/05/halton-highway-closures-for-planned-roadwork-june-5-2023/hal_hc_1.jpg",
        "publishedAt": "2023-06-05T09:24:08Z",
        "content": "Plan your trip before youre on the road: The Ministry of Transportation has scheduled seven closures in Halton on June 5, 2023 for roadwork on Highway 401 and Queen Elizabeth Way.\r\n<ul><li>Highway 40… [+1572 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Indian Express"
        },
        "author": "Trends Desk",
        "title": "Elon Musk reacts to AI image that shows him as a five-year-old",
        "description": "Billionaires like Elon Musk are often the subjects of AI artworks.",
        "url": "https://indianexpress.com/article/trending/trending-globally/elon-musk-reacts-to-ai-image-that-shows-him-as-a-five-year-old-8646642/",
        "urlToImage": "https://images.indianexpress.com/2023/06/elon-musk-child-AI.jpg",
        "publishedAt": "2023-06-05T09:21:48Z",
        "content": "In recent months, billionaires and celebrities have become the subject of many artificial intelligence artworks. Most recently, an AI-generated image of Musk that shows him as a young boy aged four o… [+1497 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Tesla Up 40% Since Late-April Lows: Analyst Outlines 4 Factors That Can Keep Stock Turbocharged",
        "description": "Tesla, Inc. TSLA shares have been on a tear in recent sessions and an analyst weighed in on what would keep the stock ticking up. What Happened: For Tesla’s stock to go higher, the electric vehicle maker's volumes have to grow by more than 39% in 2023 and mor…",
        "url": "https://biztoc.com/x/e5c213597f9b7cb6",
        "urlToImage": "https://c.biztoc.com/p/e5c213597f9b7cb6/s.webp",
        "publishedAt": "2023-06-05T09:18:13Z",
        "content": "Tesla, Inc. TSLA shares have been on a tear in recent sessions and an analyst weighed in on what would keep the stock ticking up.What Happened: For Teslas stock to go higher, the electric vehicle mak… [+251 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "MarketScreener",
        "title": "Tesla's China-made EV sales rose 2.4% in May from April - CPCA",
        "description": "(marketscreener.com) U.S. automaker Tesla Inc delivered 77,695 China-made electric vehicles in May, a 2.4% jump from April, data from the China Passenger Car Association showed on Monday.https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Tesla-…",
        "url": "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Tesla-s-China-made-EV-sales-rose-2-4-in-May-from-April-CPCA-44037652/?utm_medium=RSS&utm_content=20230605",
        "urlToImage": "https://img.zonebourse.com/reuters/2021-04/2021-04-26T164340Z_1_LYNXMPEH3P135_RTROPTP_3_TESLA-CHINA.JPG",
        "publishedAt": "2023-06-05T09:09:04Z",
        "content": "On a yearly basis, sales rose 142% in May from 32,165 vehicles in the same month of 2022 when Shanghai, where its factory is located, was still subject to COVID-19 containment measures that impacted … [+1734 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "marketwatch.com",
        "title": "Kia jumps into electric car price wars by bringing back the EV6 Light",
        "description": "The average new car sold for more than $48,000 last month — almost $2,000 higher than a year before. Electric vehicle prices, however, are on the way down. The average EV sold for just over $55,000 — more than $this.props.pageSize,000 lower than in the same month of April in …",
        "url": "https://biztoc.com/x/9c5b38cf4cd52675",
        "urlToImage": "https://c.biztoc.com/p/9c5b38cf4cd52675/s.webp",
        "publishedAt": "2023-06-05T09:06:06Z",
        "content": "The average new car sold for more than $48,000 last month almost $2,000 higher than a year before. Electric vehicle prices, however, are on the way down. The average EV sold for just over $55,000 mor… [+286 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Moneycontrol"
        },
        "author": "Reuters",
        "title": "Tesla#39;s China-made EV sales rose 2.4% in May from April: CPCA",
        "description": "That represented a 2.4% jump from April when Tesla sold 75,842 locally made Models 3 and Y in the world#39;s largest auto market.",
        "url": "https://www.moneycontrol.com/news/world/teslas-china-made-ev-sales-rose-2-4-in-may-from-april-cpca-this.props.pageSize744751.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/05/Tesla-1-770x433.jpg",
        "publishedAt": "2023-06-05T09:00:31Z",
        "content": "U.S. automaker Tesla Inc delivered 77,695 China-made electric vehicles (EVs) in May, data from the China Passenger Car Association (CPCA) showed on Monday.\r\nThat represented a 2.4% jump from April wh… [+484 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Investing.com"
        },
        "author": "Reuters",
        "title": "Tesla's China-made EV sales rose 2.4% in May from April - CPCA",
        "description": "Tesla's China-made EV sales rose 2.4% in May from April - CPCA",
        "url": "https://www.investing.com/news/stock-market-news/teslas-chinamade-ev-sales-rose-24-in-may-from-april--cpca-3097874",
        "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEB6Gthis.props.pageSizeB_L.jpg",
        "publishedAt": "2023-06-05T08:36:23Z",
        "content": "BEIJING (Reuters) - U.S. automaker Tesla (NASDAQ:TSLA) Inc delivered 77,695 China-made electric vehicles (EVs) in May, data from the China Passenger Car Association (CPCA) showed on Monday.\r\nThat rep… [+530 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "Reuters",
        "title": "Tesla's China-made EV sales rose 2.4% in May from April - CPCA",
        "description": "(marketscreener.com) U.S. automaker Tesla Inc delivered 77,695 China-made electric vehicles in May, data from the China Passenger Car Association showed on Monday.https://www.marketscreener.com/news/latest/Tesla-s-China-made-EV-sales-rose-2-4-in-May-from-Apri…",
        "url": "https://www.marketscreener.com/news/latest/Tesla-s-China-made-EV-sales-rose-2-4-in-May-from-April-CPCA--44037652/?utm_medium=RSS&utm_content=20230605",
        "urlToImage": "https://img.zonebourse.com/reuters/2021-04/2021-04-26T164340Z_1_LYNXMPEH3P135_RTROPTP_3_TESLA-CHINA.JPG",
        "publishedAt": "2023-06-05T08:31:27Z",
        "content": "BEIJING (Reuters) - U.S. automaker Tesla Inc delivered 77,695 China-made electric vehicles (EVs) in May, data from the China Passenger Car Association (CPCA) showed on Monday.\r\n That represented a 2.… [+585 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Qiaoyi Li and Brenda Goh",
        "title": "Tesla's China-made EV sales rose 2.4% in May from April - CPCA",
        "description": "U.S. automaker Tesla Inc delivered 77,695 China-made electric vehicles (EVs) in May, a 2.4% jump from April, data from the China Passenger Car Association...",
        "url": "https://finance.yahoo.com/news/teslas-china-made-ev-sales-083127003.html",
        "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/4c41ba9df29d2227d288eeb50this.props.pageSize4be5f",
        "publishedAt": "2023-06-05T08:31:27Z",
        "content": "BEIJING (Reuters) - U.S. automaker Tesla Inc delivered 77,695 China-made electric vehicles (EVs) in May, a 2.4% jump from April, data from the China Passenger Car Association (CPCA) showed on Monday.… [+1903 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNA"
        },
        "author": null,
        "title": "Tesla's China-made EV sales rose 2.4% in May from April - CPCA",
        "description": "BEIJING : U.S. automaker Tesla Inc delivered 77,695 China-made electric vehicles (EVs) in May, data from the China Passenger Car Association (CPCA) showed on Monday.That represented a 2.4 per cent jump from April when Tesla sold 75,842 locally made Models 3 a…",
        "url": "https://www.channelnewsasia.com/business/teslas-china-made-ev-sales-rose-24-may-april-cpca-3539406",
        "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--uUcwWHLt--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-06-05t083127z_1_lynxmpej5408t_rtroptp_3_tesla-china.jpg?itok=HIh2te4O",
        "publishedAt": "2023-06-05T08:31:27Z",
        "content": "BEIJING : U.S. automaker Tesla Inc delivered 77,695 China-made electric vehicles (EVs) in May, data from the China Passenger Car Association (CPCA) showed on Monday.\r\nThat represented a 2.4 per cent … [+518 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Remeredzai Joseph Kuhudzai",
        "title": "Battery Electric Vehicle Sales In South Africa Up this.props.pageSize6%",
        "description": "Sales of battery electric vehicles (BEVs) have been quite slow in South Africa but are now showing signs of significant progress.  In the first four months of 2022, 138 battery electric vehicles were sold in South Africa. Now, one year later, sales of battery…",
        "url": "https://cleantechnica.com/2023/06/05/battery-electric-vehicle-sales-in-south-africa-up-this.props.pageSize6/",
        "urlToImage": "http://cleantechnica.com/files/2023/05/Ora-Good-Cat-Funky-Cat.jpeg",
        "publishedAt": "2023-06-05T08:11:39Z",
        "content": "Sales of battery electric vehicles (BEVs) have been quite slow in South Africa but are now showing signs of significant progress.  In the first four months of 2022, 138 battery electric vehicles were… [+4393 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motor Authority"
        },
        "author": "news@motorauthority.com (Viknesh Vijayenthiran), Viknesh Vijayenthiran",
        "title": "Tesla Model S Plaid reclaims EV 'Ring record with Track Pack",
        "description": "A Tesla Model S Plaid is once again the fastest production electric vehicle around Germany's notorious Nürburgring racetrack, thanks to a new Track Package announced in May that unlocks the vehicle's true top speed of 200 mph. Video published by Tesla over th…",
        "url": "https://www.motorauthority.com/news/1139840_tesla-model-s-plaid-reclaims-ev-ring-record-with-track-pack",
        "urlToImage": "https://images.hgmsites.net/hug/tesla-model-s-plaid-track-package-sets-725-231-nrburgring-lap-time_this.props.pageSize0887873_h.jpg",
        "publishedAt": "2023-06-05T07:00:00Z",
        "content": "A Tesla Model S Plaid is once again the fastest production electric vehicle around Germany's notorious Nürburgring racetrack, thanks to a new Track Package announced in May that unlocks the vehicle's… [+2820 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "ET Now",
        "title": "4 sectors Aman Chowhan is bullish on for near term",
        "description": "​Nasdaq specifically has recovered, stocks there, the FAANG stocks also have almost doubled or some of them have more than doubled from the lows, so that has been the sentiment changer for India along with liquidity.",
        "url": "https://economictimes.indiatimes.com/markets/expert-view/4-sectors-aman-chowhan-is-bullish-on-for-near-term/articleshow/this.props.pageSize0759443.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-this.props.pageSize0759497,width-this.props.pageSize70,height-580,imgsize-4158,overlay-etmarkets/photo.jpg",
        "publishedAt": "2023-06-05T06:52:25Z",
        "content": "\"Nasdaq specifically has recovered, stocks there, the FAANG stocks also have almost doubled or some of them have more than doubled from the lows, so that has been the sentiment changer for India alon… [+5921 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daily Mail"
        },
        "author": "Tim Dornin",
        "title": "Australia's most popular vehicles revealed with Toyota selling 5,772 Hi-Lux models in May",
        "description": "Australia's auto industry has posted its best May sales on record, with Toyota, Mazda and Hyundai taking the top three spot for most popular car brands.",
        "url": "https://www.dailymail.co.uk/news/article-12159447/Australias-popular-vehicles-revealed-Toyota-selling-5-772-Hi-Lux-models-May.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/05/06/71768011-0-image-a-21_1685943926585.jpg",
        "publishedAt": "2023-06-05T06:05:02Z",
        "content": "Sales of new cars and trucks have jumped with Australia's auto industry posting its best May result on record.\r\nIn a further sign of improving supply, the Federal Chamber of Automotive Industries sai… [+2326 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "PTI",
        "title": "Using electric water heaters to store renewable energy could do the work of 2 million home batteries - and save us billions",
        "description": "Electric water heaters offer a cheap way to store large amounts of energy, in the form of hot water. A heater with a 300-litre tank can store about as much energy as a second-generation Tesla Powerwall - at a fraction of the cost.",
        "url": "https://economictimes.indiatimes.com/industry/renewables/using-electric-water-heaters-to-store-renewable-energy-could-do-the-work-of-2-million-home-batteries-and-save-us-billions/articleshow/this.props.pageSize0757490.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-this.props.pageSize0757749,width-this.props.pageSize70,height-580,imgsize-14944,overlay-economictimes/photo.jpg",
        "publishedAt": "2023-06-05T05:44:36Z",
        "content": "Australia's energy transition is well under way. Some 3 million households have rooftop solar and sales of medium-sized electric cars are surging. But as we work towards fully electric households pow… [+6050 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Electrek"
        },
        "author": "Michelle Lewis",
        "title": "In a first, a cargo ship strikes an offshore wind turbine [update]",
        "description": "A cargo ship struck an offshore wind turbine at the 330-megawatt (MW) Gode Wind 1 wind farm in the German North Sea.",
        "url": "https://electrek.co/2023/06/04/cargo-ship-offshore-wind-turbine/",
        "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/04/cargo-ship-wind-turbine-collision.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2023-06-05T05:27:11Z",
        "content": "A cargo ship struck an offshore wind turbine at the 330-megawatt (MW) Gode Wind 1 wind farm in the German North Sea now we know why.\r\nThe ship hit a turbine at Danish wind giant Ørsteds Gode 1 off th… [+2384 chars]"
        },
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": "Elizabeth Pineau",
        "title": "France rolls out the red carpet for EV battery factories",
        "description": "France rolls out the red carpet for EV battery factoriesreuters.com",
        "url": "https://www.reuters.com/business/autos-transportation/france-rolls-out-red-carpet-ev-battery-factories-2023-06-05/",
        "urlToImage": "https://www.reuters.com/resizer/LOLnNYQTET997bgVJfW4OGb9vHo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XZBDZZQ3BJIM5ASMOP3RC7OORU.jpg",
        "publishedAt": "2023-06-05T05:23:17Z",
        "content": "PARIS, June 5 - For French President Emmanuel Macron, it was a light-bulb moment.\r\nIn an ornate ballroom at the Palace of Versailles last July, the head of Taiwan's ProLogium took out a pair of sciss… [+7987 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Investing.com"
        },
        "author": "Reuters",
        "title": "France rolls out the red carpet for EV battery factories",
        "description": "France rolls out the red carpet for EV battery factories",
        "url": "https://www.investing.com/news/stock-market-news/france-rolls-out-the-red-carpet-for-ev-battery-factories-3097742",
        "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEA9907D_L.jpg",
        "publishedAt": "2023-06-05T05:16:59Z",
        "content": "By Elizabeth Pineau, Gilles Guillaume and Michel Rose\r\nPARIS - For French President Emmanuel Macron, it was a light-bulb moment.\r\nIn an ornate ballroom at the Palace of Versailles last July, the head… [+7847 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "MarketScreener",
        "title": "France rolls out the red carpet for EV battery factories",
        "description": "(marketscreener.com) PARIS - For French President Emmanuel Macron, it was a light-bulb moment.https://www.marketscreener.com/quote/stock/MERCEDES-BENZ-GROUP-AG-436541/news/France-rolls-out-the-red-carpet-for-EV-battery-factories-44036515/?utm_medium=RSS&utm_c…",
        "url": "https://www.marketscreener.com/quote/stock/MERCEDES-BENZ-GROUP-AG-436541/news/France-rolls-out-the-red-carpet-for-EV-battery-factories-44036515/?utm_medium=RSS&utm_content=20230605",
        "urlToImage": "https://img.zonebourse.com/reuters/2023-05/2023-05-11T220719Z_1_LYNXMPEJ4A0ZS_RTROPTP_3_FRANCE-PROLOGIUM.JPG",
        "publishedAt": "2023-06-05T05:12:29Z",
        "content": "In an ornate ballroom at the Palace of Versailles last July, the head of Taiwan's ProLogium took out a pair of scissors and cut one of its solid-state batteries the size of a credit card in half. The… [+7866 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNA"
        },
        "author": null,
        "title": "France rolls out the red carpet for EV battery factories",
        "description": "PARIS - For French President Emmanuel Macron, it was a light-bulb moment.In an ornate ballroom at the Palace of Versailles last July, the head of Taiwan's ProLogium took out a pair of scissors and cut one of its solid-state batteries the size of a credit card…",
        "url": "https://www.channelnewsasia.com/business/france-rolls-out-red-carpet-ev-battery-factories-3539051",
        "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--RA0IhIBy--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-06-05t051229z_1_lynxmpej5404e_rtroptp_3_france-gigafactories.jpg?itok=Kq48VziC",
        "publishedAt": "2023-06-05T05:12:29Z",
        "content": "PARIS - For French President Emmanuel Macron, it was a light-bulb moment.\r\nIn an ornate ballroom at the Palace of Versailles last July, the head of Taiwan's ProLogium took out a pair of scissors and … [+7902 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Elizabeth Pineau, Gilles Guillaume and Michel Rose",
        "title": "France rolls out the red carpet for EV battery factories",
        "description": "For French President Emmanuel Macron, it was a light-bulb moment.  In an ornate ballroom at the Palace of Versailles last July, the head of Taiwan's...",
        "url": "https://finance.yahoo.com/news/france-rolls-red-carpet-ev-051229813.html",
        "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/79c3e3bbb823f630b4a827c6f6082b3c",
        "publishedAt": "2023-06-05T05:12:29Z",
        "content": "By Elizabeth Pineau, Gilles Guillaume and Michel Rose\r\nPARIS - For French President Emmanuel Macron, it was a light-bulb moment.\r\nIn an ornate ballroom at the Palace of Versailles last July, the head… [+7930 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "bbc.com",
        "title": "Elon Musk: Twitter snaps up top NBCUniversal executive",
        "description": "It comes less than a month after NBCUniversal's head of advertising Linda Yaccarino was named as Twitter's new chief executive. She will take the position currently held by Mr Musk, who will remain closely involved in the company. Mr Benarroch has already upd…",
        "url": "https://biztoc.com/x/e48ec20398c01154",
        "urlToImage": "https://c.biztoc.com/p/e48ec20398c01154/og.webp",
        "publishedAt": "2023-06-05T05:00:08Z",
        "content": "It comes less than a month after NBCUniversal's head of advertising Linda Yaccarino was named as Twitter's new chief executive.She will take the position currently held by Mr Musk, who will remain cl… [+263 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketscreener.com"
        },
        "author": "MarketScreener",
        "title": "France rolls out the red carpet for EV battery factories",
        "description": "(marketscreener.com) the battery manufacturer involving\nFranco-Italian carmaker Stellantis, German rival Mercedes and\nFrench energy company TotalEnergies - France provided\nabout 840 million euros in subsidies, including funds for\nresearch and development, acc…",
        "url": "https://www.marketscreener.com/quote/stock/STELLANTIS-N-V-117814143/news/France-rolls-out-the-red-carpet-for-EV-battery-factories-44036515/?utm_medium=RSS&utm_content=20230605",
        "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
        "publishedAt": "2023-06-05T05:00:00Z",
        "content": "PARIS, June 5 - For French President Emmanuel Macron, it\r\nwas a light-bulb moment.\r\nIn an ornate ballroom at the Palace of Versailles last July,\r\nthe head of Taiwan's ProLogium took out a pair of sci… [+7972 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Internet"
        },
        "author": "Ravie Lakshmanan",
        "title": "Alarming Surge in TrueBot Activity Revealed with New Delivery Vectors",
        "description": "A surge in TrueBot activity was observed in May 2023, cybersecurity researchers disclosed.\n\"TrueBot is a downloader trojan botnet that uses command and control servers to collect information on compromised systems and uses that compromised system as a launchi…",
        "url": "https://thehackernews.com/2023/06/alarming-surge-in-truebot-activity.html",
        "urlToImage": "https://thehackernews.com/new-images/img/b/R29vZ2xl/AVvXsEjtCUtclieBm7q3WHuJvipjhOLRuK7hAutozP9mVVSPCB_DRINWdyExRdP-BIRYELV5ALXdXWDxD-96Zb1_N5uiCDFSqqnk5KOxe05kz9QwzJOubrRNpvCsic1bbggDD-PyBiToAZXmW5CnbnWQTZpWvNzi0cWCefgwNzVoniJlHseV82RMFKfN7Qvk/s728-e3650/bot.jpg",
        "publishedAt": "2023-06-05T04:31:00Z",
        "content": "A surge in TrueBot activity was observed in May 2023, cybersecurity researchers disclosed.\r\n\"TrueBot is a downloader trojan botnet that uses command and control servers to collect information on comp… [+1841 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Madshrimps.be"
        },
        "author": "Stefan Mileschin",
        "title": "Even the cheapest Tesla Model 3 now qualifies for the full $7,500 tax credit",
        "description": "If you're buying a Tesla Model 3 in the US, you can now get the maximum possible tax credit of $7,500 no matter what make you're getting. Tesla has updated its website to show that the rear-wheel drive Model 3, along with its long range and performance counte…",
        "url": "http://www.madshrimps.be/news/item/222649",
        "urlToImage": null,
        "publishedAt": "2023-06-05T04:21:36Z",
        "content": "Copyright © 2001-2011 Madshrimps, All rights reserved.Graphic Design by Dennis Kestelle, Programming by Maarten Menten,\r\nOverall Site design by John Meys\r\nAll information and graphics contained in Ma… [+135 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New Atlas"
        },
        "author": "David Szondy",
        "title": "DARPA launches program in quest for \"Red October\" silent submarine drive",
        "description": "Taking a plot point from the 1990 Sean Connery thriller The Hunt for Red October, DARPA is working on a super-silent submarine drive that has no moving parts and provides propulsion through the water using magnets and electricity.Continue ReadingCategory: Mil…",
        "url": "https://newatlas.com/military/darpa-launches-program-in-quest-for-red-october-silent-submarine-drive/",
        "urlToImage": "https://assets.newatlas.com/dims4/default/f1db674/2147483647/strip/true/crop/6555x3441+0+467/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff5%2Fcd%2Fbfcf6ab146aab0249b2b3a662db9%2Fhunter-ingals.jpg&na.image_optimisation=0",
        "publishedAt": "2023-06-05T04:18:50Z",
        "content": "Taking a plot point from the 1990 Sean Connery thriller The Hunt for Red October, DARPA is working on a super-silent submarine drive that has no moving parts and provides propulsion through the water… [+3740 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "teslarati.com",
        "title": "Tesla Model S Plaid Track Pack out of stock hours after announcement",
        "description": "The Tesla Model S Plaid Track Pack is officially out of stock just hours after its release. The long-awaited upgrade promised to significantly improve the physical Model S Plaid vehicle and its software. “Designed for the ultimate track experience, the Model …",
        "url": "https://biztoc.com/x/3e756b33bddc814f",
        "urlToImage": "https://c.biztoc.com/p/3e756b33bddc814f/og.webp",
        "publishedAt": "2023-06-05T04:12:09Z",
        "content": "The Tesla Model S Plaid Track Pack is officially out of stock just hours after its release. The long-awaited upgrade promised to significantly improve the physical Model S Plaid vehicle and its softw… [+321 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "BBC News"
        },
        "author": "Bbc News",
        "title": "Elon Musk: Twitter snaps up top NBCUniversal executive",
        "description": "It comes just weeks after NBCUniversal's head of advertising Linda Yaccarino was named as Twitter's CEO.",
        "url": "https://www.bbc.com/news/business-65806686",
        "urlToImage": "https://ichef.bbci.co.uk/news/this.props.pageSize24/branded_news/5225/production/_129992012_d1dd76eb00893c4bb83e0a73742684e01aaaac7d.jpg",
        "publishedAt": "2023-06-05T04:04:37Z",
        "content": "Twitter has snapped up senior NBCUniversal executive Joe Benarroch, as Elon Musk continues to shake up the social media platform's top team.\r\nMr Benarroch starts the role on Monday, focussing on busi… [+2494 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hurriyet Daily News"
        },
        "author": "hurriyetdailynews.com",
        "title": "Twitter safety exec quits after video strife",
        "description": "A top Twitter executive responsible for safety and content moderation has left the company, her departure coming soon after owner Elon Musk publicly complained about the platform’s handling of posts about transgender topics.",
        "url": "https://www.hurriyetdailynews.com/twitter-safety-exec-quits-after-video-strife-183676",
        "urlToImage": "https://i.hurimg.com/i/hdn/75/200x200/647c482d4e3fe119b8377f66.jpg",
        "publishedAt": "2023-06-05T04:00:00Z",
        "content": "SAN FRANCISCO\r\nA top Twitter executive responsible for safety and content moderation has left the company, her departure coming soon after owner Elon Musk publicly complained about the platforms hand… [+1661 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Business Standard"
        },
        "author": "Business Standard",
        "title": "Linda Yaccarino to take over as new Twitter CEO today, hires key aide",
        "description": "\"I've long been inspired by your vision to create a brighter future. I'm excited to help bring this vision to Twitter and transform this business together,\" she posted on Twitter",
        "url": "https://www.business-standard.com/world-news/linda-yaccarino-to-take-over-as-new-twitter-ceo-today-hires-key-aide-123060500062_1.html",
        "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-05/14/full/1684026955-4259.jpg",
        "publishedAt": "2023-06-05T03:52:30Z",
        "content": "Linda Yaccarino was set to take over as the new Twitter CEO from Monday, as Elon Musk aims to focus more on Tesla and SpaceX, the media reported.\r\nYaccarino, former Chairman of Global Advertising and… [+1626 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "bbc.co.uk",
        "title": "Elon Musk: Twitter snaps up top NBCUniversal executive",
        "description": "It comes less than a month after NBCUniversal's head of advertising Linda Yaccarino was named as Twitter's new chief executive. She will take the position currently held by Mr Musk, who will remain closely involved in the company. Mr Benarroch has already upd…",
        "url": "https://biztoc.com/x/11c24348889af272",
        "urlToImage": "https://c.biztoc.com/p/11c24348889af272/s.webp",
        "publishedAt": "2023-06-05T03:52:03Z",
        "content": "It comes less than a month after NBCUniversal's head of advertising Linda Yaccarino was named as Twitter's new chief executive.She will take the position currently held by Mr Musk, who will remain cl… [+265 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Remeredzai Joseph Kuhudzai",
        "title": "BYD Tops April EV Sales Table in Singapore",
        "description": "BYD topped the EV sales charts in Singapore in April. 121 BYDs were sold in April in Singapore, and it looks like BYD sales are accelerating rapidly in Singapore, as BYD sold as almost as many units in April as it did in the first quarter of the year! In Q1, …",
        "url": "https://cleantechnica.com/2023/06/04/byd-tops-april-ev-sales-table-in-singapore/",
        "urlToImage": "http://cleantechnica.com/files/2023/03/2023_byd_atto3.jpg",
        "publishedAt": "2023-06-05T03:50:59Z",
        "content": "BYD topped the EV sales charts in Singapore in April. 121 BYDs were sold in April in Singapore, and it looks like BYD sales are accelerating rapidly in Singapore, as BYD sold as almost as many units … [+4198 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Elon Musk: Twitter snaps up top NBCUniversal executive",
        "description": "It comes just weeks after NBCUniversal's head of advertising Linda Yaccarino was named as Twitter's CEO.",
        "url": "https://www.bbc.co.uk/news/business-65806686",
        "urlToImage": "https://ichef.bbci.co.uk/news/this.props.pageSize24/branded_news/44D3/production/_129991671_836fdbc52d5bb57de51fad5ebe55b2d3d421da8f.jpg",
        "publishedAt": "2023-06-05T03:47:51Z",
        "content": "Twitter has snapped up senior NBCUniversal executive Joe Benarroch, as Elon Musk continues to shake up the social media platform's top team.\r\nMr Benarroch starts the role on Monday, focussing on busi… [+2473 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daily Mail"
        },
        "author": "Ben Talintyre",
        "title": "Creepy Tesla feature that Australians need to know about",
        "description": "Social media users have called out the creepy feature which allows Tesla App users to see the car's in car system details and track the route the driver is on.",
        "url": "https://www.dailymail.co.uk/news/article-12158927/Creepy-Tesla-feature-Australians-need-know-about.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/05/03/71764387-0-image-a-8_1685932008596.jpg",
        "publishedAt": "2023-06-05T03:21:56Z",
        "content": "A Tesla feature that allows app users to see everything from the driver's route, location and what they're listening to has been labelled a 'stalker's dream car'.\r\nRyan Cowan, revealed that he can se… [+4573 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Guest Contributor",
        "title": "Opinion: Charging Remains Biggest U.S. Hurdle To EV Adoption",
        "description": "Although electric vehicles have taken huge steps toward mainstream adoption over the past few years, at least one major barrier remains. As Tesla and others work to expand their charging networks, consumers may still struggle to go electric until public charg…",
        "url": "https://cleantechnica.com/2023/06/04/opinion-charging-remains-biggest-u-s-hurdle-to-ev-adoption/",
        "urlToImage": "http://cleantechnica.com/files/2020/01/Electrify-America-Cynthia-Shahan-scaled-e1685934870202.jpg",
        "publishedAt": "2023-06-05T03:14:48Z",
        "content": "Although electric vehicles have taken huge steps toward mainstream adoption over the past few years, at least one major barrier remains. As Tesla and others work to expand their charging networks, co… [+3730 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Elon Musk Applauds Tesla Plaid Racing Team As Model S Plaid With Track Pack Sets New Nürburgring Record -",
        "description": "Fresh off his China visit, Tesla, Inc. TSLA CEO Elon Musk took time off to applaud the Tesla Plaid racing team. Tesla's Twitter handle tweeted on Saturday that the Model S Plaid with track pack set a new lap record for a production electric vehicle at Nürburg…",
        "url": "https://biztoc.com/x/21b2978bf489c75f",
        "urlToImage": "https://c.biztoc.com/p/21b2978bf489c75f/og.webp",
        "publishedAt": "2023-06-05T02:46:05Z",
        "content": "Fresh off his China visit, Tesla, Inc. TSLA CEO Elon Musk took time off to applaud the Tesla Plaid racing team.Tesla's Twitter handle tweeted on Saturday that the Model S Plaid with track pack set a … [+292 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Erickimphotography.com"
        },
        "author": "ERIC KIM",
        "title": "Tesla Model Y Review",
        "description": "I don’t really like it. I test drove the Model Y, Dual Motor. Quick thoughts — First of all, I think the design is great. However, subtle things I hate which include the cheap plastic trim around t…",
        "url": "https://erickimphotography.com/blog/2023/06/04/tesla-model-y-review/",
        "urlToImage": "https://i0.wp.com/erickimphotography.com/blog/wp-content/uploads/2023/06/cropped-IMG_1890.jpg?fit=512%2C512&ssl=1",
        "publishedAt": "2023-06-05T02:40:55Z",
        "content": "I dont really like it.\r\nI test drove the Model Y, Dual Motor.\r\nQuick thoughts \r\n<ol><li>First of all, I think the design is great. However, subtle things I hate which include the cheap plastic trim a… [+923 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Freerepublic.com"
        },
        "author": "Epoch Times",
        "title": "Biden’s Green Rules Mean Appliances Will Soon Cost More and Do Less, Experts Say",
        "description": "Consumer advocate: New Biden regulations mean ‘Everyday things that people want are going to get more expensive or disappear' ... A pledge by the Biden administration in December 2022 to take “more than this.props.pageSize0 actions” to impose significantly tighter environment…",
        "url": "https://freerepublic.com/focus/f-news/4158399/posts",
        "urlToImage": null,
        "publishedAt": "2023-06-05T02:05:02Z",
        "content": "Skip to comments.\r\nBidens Green Rules Mean Appliances Will Soon Cost More and Do Less, Experts SayEpoch Times ^\r\n | June 2, 2023\r\n | Kevin Stocklin\r\nPosted on 06/04/2023 7:05:02 PM PDT by george76\r\nC… [+14993 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Pypi.org"
        },
        "author": null,
        "title": "pwdusage added to PyPI",
        "description": "Usage (mainly time of use) proxy microservice for Powerwall-Dashboard.",
        "url": "https://pypi.org/project/pwdusage/",
        "urlToImage": "https://pypi.org/static/images/twitter.abaf4b19.webp",
        "publishedAt": "2023-06-05T01:39:41Z",
        "content": "Change Log\r\nI'm tracking progress towards v1.0 at:\r\nhttps://github.com/BuongiornoTexas/pwdusage/issues/1.\r\nFrom v0.9.4, the python/microservice is feature complete. Releases up to v1.0 will\r\naddress … [+35272 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Seclists.org"
        },
        "author": null,
        "title": "Risks Digest 33.72",
        "description": "Posted by RISKS List Owner on Jun 04RISKS-LIST: Risks-Forum Digest Sunday 4 June 2023 Volume 33 : Issue 72\n\nACM FORUM ON RISKS TO THE PUBLIC IN COMPUTERS AND RELATED SYSTEMS (comp.risks)\nPeter G. Neumann, founder and still moderator\n\n***** See last item for f…",
        "url": "https://seclists.org/risks/2023/q2/4",
        "urlToImage": "https://seclists.org/images/risks-img.png",
        "publishedAt": "2023-06-05T01:27:29Z",
        "content": "From: RISKS List Owner &lt;risko () csl sri com&gt;Date: Sun, 4 Jun 2023 18:16:46 PDT\r\nRISKS-LIST: Risks-Forum Digest Sunday 4 June 2023 Volume 33 : Issue 72\r\nACM FORUM ON RISKS TO THE PUBLIC IN COMP… [+49982 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "theregister.com",
        "title": "China EV market share hits 27 percent, tax breaks extended",
        "description": "Asia In Brief China's State Council last week anounced an extension of tax breaks for vehicles powered by alternative energy. China is already the world's largest market for electric vehicles, according to the International Energy Agency, which asserts it acc…",
        "url": "https://biztoc.com/x/f0dbe13dcd16f59e",
        "urlToImage": "https://c.biztoc.com/p/f0dbe13dcd16f59e/s.webp",
        "publishedAt": "2023-06-05T01:26:07Z",
        "content": "Asia In Brief China's State Council last week anounced an extension of tax breaks for vehicles powered by alternative energy.China is already the world's largest market for electric vehicles, accordi… [+292 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Theregister.com"
        },
        "author": "Simon Sharwood",
        "title": "China EV market share hits 27 percent as tax breaks extended",
        "description": "PLUS: Indonesia's digital success under the radar; Singapore picks Google AI; India claims streaming record\nAsia In Brief China's State Council last week anounced an extension of tax breaks for vehicles powered by alternative energy.…<!--#include virtual='/da…",
        "url": "https://www.theregister.com/2023/06/05/asia_tech_news_roundup/",
        "urlToImage": "https://regmedia.co.uk/2022/this.props.pageSize/09/shutterstock_asia_map.jpg",
        "publishedAt": "2023-06-05T01:17:07Z",
        "content": "Asia In Brief China's State Council last week anounced an extension of tax breaks for vehicles powered by alternative energy.\r\nChina is already the world's largest market for electric vehicles, accor… [+3998 chars]"
        },
        {
        "source": {
        "id": "fortune",
        "name": "Fortune"
        },
        "author": "Steve Mollman",
        "title": "Jack Dorsey endorses fellow Bitcoin advocate Robert F. Kennedy, Jr. for president—and predicts he’ll win",
        "description": "“As president, I will make sure that your right to hold and use Bitcoin is inviolable,\" Kennedy said last month.",
        "url": "https://fortune.com/2023/06/04/jack-dorsey-endorses-bitcoin-advocate-robert-f-kennedy-jr-for-president-predicts-win/",
        "urlToImage": "https://content.fortune.com/wp-content/uploads/2023/06/GettyImages-1233272647-e1685923679322.jpg?resize=1200,600",
        "publishedAt": "2023-06-05T00:19:43Z",
        "content": "Jack Dorsey, Twitters cofounder and former CEO, has endorsed Democratic presidential contender Robert F. Kennedy, Jr. On Sunday, the influential tech billionaire tweeted a Fox News YouTube video enti… [+2477 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Steve Mollman",
        "title": "Jack Dorsey endorses fellow Bitcoin advocate Robert F. Kennedy, Jr. for president—and predicts he’ll win",
        "description": "“As president, I will make sure that your right to hold and use Bitcoin is inviolable,\" Kennedy said last month.",
        "url": "https://finance.yahoo.com/news/jack-dorsey-endorses-fellow-bitcoin-001943733.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/2sdni6hrWGNgwUsvgbMmuQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/fortune_175/8f5a064344acbc1a3e1adf6aa7f8ff15",
        "publishedAt": "2023-06-05T00:19:43Z",
        "content": "Jack Dorsey, Twitters cofounder and former CEO, has endorsed Democratic presidential contender Robert F. Kennedy, Jr.\r\nMore from Fortune: 5 side hustles where you may earn over $20,000 per yearall wh… [+3099 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daily Mail"
        },
        "author": "David Wilkes",
        "title": "Elon Musk joins outcry over claims government unit worked with firms to stifle lockdown criticisms",
        "description": "A report claims that the Counter-Disinformation Unit (CDU), which leads the Government's response to 'disinformation threats' online, was used during the pandemic to curb critics of lockdown.",
        "url": "https://www.dailymail.co.uk/news/article-12158871/Elon-Musk-joins-outcry-claims-government-unit-worked-firms-stifle-lockdown-criticisms.html",
        "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/05/00/71760761-0-image-a-75_1685922116670.jpg",
        "publishedAt": "2023-06-04T23:57:02Z",
        "content": "Elon Musk has joined the outcry over allegations that a British government unit worked with social media firms to stifle criticism of Covid lockdown policies.\r\nA report claims that the Counter-Disinf… [+1187 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Globalsecurity.org"
        },
        "author": "John Pike",
        "title": "Complex security threats call for modern thinking, measures: experts",
        "description": "As China reiterated its security concepts and initiatives at the 20th Shangri-La Dialogue in Singapore about \"unprecedented\" security challenges facing the Asia-Pacific, Chinese experts on international relations and national security said on Sunday that Chin…",
        "url": "https://www.globalsecurity.org/wmd/library/news/china/2023/06/china-230605-globaltimes01.htm",
        "urlToImage": null,
        "publishedAt": "2023-06-04T22:50:14Z",
        "content": "Global Times\r\nBy Yang Sheng Published: Jun 05, 2023 12:31 AM\r\nAs China reiterated its security concepts and initiatives at the 20th Shangri-La Dialogue in Singapore about \"unprecedented\" security cha… [+7850 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "VOA News"
        },
        "author": "webdesk@voanews.com (Associated Press)",
        "title": "Las Vegas Ballpark Pitch Revives Debate on Public Funding for Sports Stadiums",
        "description": "Gov. Joe Lombardo wants to help build Major League Baseball's smallest ballpark — arguing that the worst team in baseball can boost Las Vegas, a city striving to call itself a sports mecca.\n\n\nNationwide debate about public funding for private sports clubs has…",
        "url": "https://www.voanews.com/a/las-vegas-ballpark-pitch-revives-debate-on-public-funding-for-sports-stadiums-/7122596.html",
        "urlToImage": "https://gdb.voanews.com/0this.props.pageSize00000-c0a8-0242-ef9c-08db6548b42a_w1200_r1.jpg",
        "publishedAt": "2023-06-04T22:33:46Z",
        "content": "CARSON CITY, Nev.  Gov. Joe Lombardo wants to help build Major League Baseball's smallest ballpark arguing that the worst team in baseball can boost Las Vegas, a city striving to call itself a sports… [+5900 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "benzinga.com",
        "title": "Is Elon Musk Right About His Warning Of A Commercial Real Estate Meltdown? Barbara Corcoran Weighs In: 'A Bloodbath Before It Gets Better'",
        "description": "Shortly after Tesla CEO Elon Musk warned of a commercial real estate market meltdown, “Shark Tank” star Barbara Corcoran weighed in on the same topic. What Happened: The commercial real estate market is in trouble, Corcoran said in an interview with Fox News …",
        "url": "https://biztoc.com/x/98ce11b3a695ec84",
        "urlToImage": "https://c.biztoc.com/p/98ce11b3a695ec84/s.webp",
        "publishedAt": "2023-06-04T21:24:09Z",
        "content": "Shortly after Tesla CEO Elon Musk warned of a commercial real estate market meltdown, Shark Tank star Barbara Corcoran weighed in on the same topic.What Happened: The commercial real estate market is… [+292 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New York Post"
        },
        "author": "Fox News",
        "title": "3 ‘brand-new’ Teslas found in China after 13 years now worth a record $2M",
        "description": "A trio of brand-new Teslas Roadsters that were sitting in shipping containers in Quingdao, China since 20this.props.pageSize are about to be sold for a record amount.",
        "url": "https://nypost.com/2023/06/04/3-brand-new-teslas-found-in-china-after-13-years-now-worth-a-record-2m/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/06/newspress-collage-27342801-1685912343964.jpg?quality=75&strip=all&1685897987&w=this.props.pageSize24",
        "publishedAt": "2023-06-04T21:23:59Z",
        "content": "A trio of brand-new Teslas that were sitting in shipping containers on a Chinese dock since 20this.props.pageSize are about to be sold for a record amount.\r\nThe Roadsters were recently discovered in the city of Quing… [+1733 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "techcrunch.com",
        "title": "Elon goes to China, Rivian is selling stock for $3 billion, and Fiat’s cutest tiny EV",
        "description": "Elon goes to China, Rivian is selling stock for $3 billion, and Fiat’s cutest tiny EV Welcome back to The Station, your central hub for all past, present and future means of moving people and packages from Point A to Point B. Rebecca Bellan here, and yup, I’m…",
        "url": "https://biztoc.com/x/78e27c741c62e524",
        "urlToImage": "https://c.biztoc.com/p/78e27c741c62e524/og.webp",
        "publishedAt": "2023-06-04T21:18:04Z",
        "content": "Elon goes to China, Rivian is selling stock for $3 billion, and Fiats cutest tiny EVWelcome back to The Station, your central hub for all past, present and future means of moving people and packages … [+275 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Howard Smith)",
        "title": "Why Tesla and Rivian Soared, but Nikola Plunged, in May",
        "description": "May was a great month for some EV maker stocks -- but not all.",
        "url": "https://www.fool.com/investing/2023/06/04/why-tesla-and-rivian-soared-but-nikola-plunged-in/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/734773/0x0-models_06.jpg",
        "publishedAt": "2023-06-04T20:33:37Z",
        "content": "What happened\r\nMay was a good month for growth and technology stocks. The Nasdaq Composite index jumped by 5.8% last month. So it shouldn't come as a huge surprise that some electric-vehicle (EV) com… [+3962 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "finance.yahoo.com",
        "title": "Elon goes to China, Rivian is selling stock for $3 billion, and Fiat's cutest tiny EV",
        "description": "Welcome back to The Station, your central hub for all past, present and future means of moving people and packages from Point A to Point B. Rebecca Bellan here, and yup, I'm still steering the ship. The biggest news this week has been Elon Musk’s visit to Chi…",
        "url": "https://biztoc.com/x/9e6d908ac2482651",
        "urlToImage": "https://c.biztoc.com/p/9e6d908ac2482651/s.webp",
        "publishedAt": "2023-06-04T20:28:04Z",
        "content": "Welcome back to The Station, your central hub for all past, present and future means of moving people and packages from Point A to Point B.Rebecca Bellan here, and yup, I'm still steering the ship.Th… [+276 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CleanTechnica"
        },
        "author": "Michael Barnard",
        "title": "Cow Burps, Landfill Belches, Rotting Stalks, Livestock Dung & More Are Having A Big Climate Impact",
        "description": "Our methane emissions from all the waste material we leave lying around the place is 15%+ as big a problem as the carbon dioxide from burning fossil fuels.",
        "url": "https://cleantechnica.com/2023/06/04/cow-burps-landfill-belches-rotting-stalks-livestock-dung-more-are-having-a-big-climate-impact/",
        "urlToImage": "http://cleantechnica.com/files/2023/06/DALL·E-generated-image-of-a-cow-burping-in-a-field-under-a-sunny-sky-digital-art-800x399.png",
        "publishedAt": "2023-06-04T20:17:52Z",
        "content": "The World Makes Too Much Methane From Our Biowaste, Yet Wants To Make More Intentionally\r\nSo, burning fossil fuels is the biggest climate problem. But all of the methane from our waste streams is als… [+11404 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Conversation Africa"
        },
        "author": "David Roche, Research Director - Strategic Energy Collaborations, University of Technology Sydney",
        "title": "Using electric water heaters to store renewable energy could do the work of 2 million home batteries – and save us billions",
        "description": "A heater with a 300-litre tank can store as much energy as a home battery at a fraction of the cost. Being able to store surplus solar energy at the right times helps grid stability and cuts emissions.",
        "url": "https://theconversation.com/using-electric-water-heaters-to-store-renewable-energy-could-do-the-work-of-2-million-home-batteries-and-save-us-billions-204281",
        "urlToImage": "https://images.theconversation.com/files/523358/original/file-20230428-28-izz5as.jpg?ixlib=rb-1.1.0&rect=0%2C843%2C5463%2C2727&q=45&auto=format&w=1356&h=668&fit=crop",
        "publishedAt": "2023-06-04T20:04:59Z",
        "content": "Shutterstock\r\nAustralia’s energy transition is well under way. Some 3 million households have rooftop solar and sales of medium-sized electric cars are surging. But as we work towards fully electric … [+6709 chars]"
        },
        {
        "source": {
        "id": "cbc-news",
        "name": "CBC News"
        },
        "author": "CBC News",
        "title": "MPI sues province, construction company to recover cost of damages to 12 vehicles on roadway",
        "description": "Manitoba Public Insurance is suing the province, a Manitoba-based construction company and one of their unidentified employees after they say defective construction work on a Winnipeg roadway caused damage to 12 vehicles it insured.",
        "url": "https://www.cbc.ca/news/canada/manitoba/manitoba-public-insurance-sues-province-wintec-employee-1.68648this.props.pageSize",
        "urlToImage": "https://i.cbc.ca/1.2677714.1685905841!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/mpi-tax-hike.jpg",
        "publishedAt": "2023-06-04T20:04:09Z",
        "content": "Manitoba Public Insurance is suing the province, a Manitoba-based construction company and one of their unidentified employees after they say defective construction work on a Winnipeg roadway caused … [+2880 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "coinwire.com",
        "title": "Dogecoin Twitter Logo Puts Musk to Insider Trading Allegations",
        "description": "In a proposed class action lawsuit, investors are accusing well-known business mogul Elon Musk of insider trading. They claim that the billionaire purposefully manipulated the price of the cryptocurrency Dogecoin. In light of this, plaintiffs claim that Musk …",
        "url": "https://biztoc.com/x/a6f90d24d870ae86",
        "urlToImage": "https://c.biztoc.com/p/a6f90d24d870ae86/s.webp",
        "publishedAt": "2023-06-04T20:00:11Z",
        "content": "In a proposed class action lawsuit, investors are accusing well-known business mogul Elon Musk of insider trading. They claim that the billionaire purposefully manipulated the price of the cryptocurr… [+286 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Erickimphotography.com"
        },
        "author": "ERIC KIM",
        "title": "The exterior of the Tesla looks really cheap, but the interior is good?",
        "description": "Observing a brand new Tesla model Y, brand new in person, it looks really cheap. On the outside. For example, the black molding, and also the paint job. The interior of a Tesla is a different story. Tesla was the first company to really be intelligent to maxi…",
        "url": "https://erickimphotography.com/blog/2023/06/04/the-exterior-of-the-tesla-looks-really-cheap-but-the-interior-is-good/",
        "urlToImage": "https://i0.wp.com/erickimphotography.com/blog/wp-content/uploads/2023/06/cropped-IMG_1890.jpg?fit=512%2C512&ssl=1",
        "publishedAt": "2023-06-04T19:57:03Z",
        "content": "Observing a brand new Tesla model Y, brand new in person, it looks really cheap. On the outside. For example, the black molding, and also the paint job.\r\nThe interior of a Tesla is a different story.… [+477 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "finance.yahoo.com",
        "title": "Elon Musk disclosed a missed opportunity, said he hates firing people, and revealed a desire to meet Warren Buffett in a 2008 profile that's resurfaced",
        "description": "None Elon Musk bemoaned a missed opportunity and said he wanted to meet Warren Buffett in a 2008 profile. • None The Tesla, SpaceX, and Twitter CEO said he hated firing people and struggled to move to Los Angeles. • None Musk also underscored his deep passion…",
        "url": "https://biztoc.com/x/64eb424d4da71532",
        "urlToImage": "https://c.biztoc.com/p/64eb424d4da71532/s.webp",
        "publishedAt": "2023-06-04T19:46:05Z",
        "content": "None Elon Musk bemoaned a missed opportunity and said he wanted to meet Warren Buffett in a 2008 profile.None The Tesla, SpaceX, and Twitter CEO said he hated firing people and struggled to move to L… [+288 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Biztoc.com"
        },
        "author": "thestreet.com",
        "title": "Elon Musk Says Something New Has Replaced Money",
        "description": "He is the richest man in the world with a fortune valued at $199 billion as of Jun. 3, according to the Bloomberg Billionaires Index. His name is the one that comes up, when elected Democrats castigate the 1% who do not pay, according to them, enough taxes. A…",
        "url": "https://biztoc.com/x/1f8328d4ed675633",
        "urlToImage": "https://c.biztoc.com/p/1f8328d4ed675633/s.webp",
        "publishedAt": "2023-06-04T19:24:19Z",
        "content": "He is the richest man in the world with a fortune valued at $199 billion as of Jun. 3, according to the Bloomberg Billionaires Index.His name is the one that comes up, when elected Democrats castigat… [+286 chars]"
        }
        ]

        constructor(){
            super();
            this.state = {

                articles: [], 
                loading: false,
                page: 1
            }
        }


        async componentDidMount(){
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=27f4ca917d84489081ff18be2d8161d7&page=1&pageSize=${this.props.pageSize}`
            this.setState({
                loading: true
             })
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
             })
        }

handlePrevClick = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=27f4ca917d84489081ff18be2d8161d7&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    this.setState({
        loading: true
     })
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
    page: this.state.page -1,
    articles: parsedData.articles,
    loading: false
  })
}

handleNextClick = async()=>{
    if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=27f4ca917d84489081ff18be2d8161d7&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({
           loading: true
        })

    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({
    page: this.state.page +1,
    articles: parsedData.articles,
    loading: false
  })
}
}



  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>News monkey - Top Headlines
</h1>
{this.state.loading && <Spinner />}

        <div className='row'>
            {!this.state.loading && this.state.articles.map((element)=> {
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title? element.title.slice(0,  45):""} description={element.description? element.description.slice(0, 88):""} imageurl={element.urlToImage} newsUrl={element.url} /> 
                </div>
            })}
            <div className="container d-flex justify-content-between"> 
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
            
       
        </div>

      </div>
    )
  }
}
