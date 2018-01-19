---
layout: default
---

<style>
    header {
        position: absolute;
    }
</style>
<div class="page" id="page">
    <header>
        <div class="page-header">
            <h1>
                <span>ermin</span> muratović
                <p>digital design and development expert</p>
            </h1>
            <div class="menu-toggle">
                <input type="checkbox" id="showmenucheckbox"/>
                <span></span>
                <span></span>
                <span></span>
                <nav id="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="javascript:void(0)" onclick="scrollToPortfolio()">Portfolio</a></li>
                        <li><a href="javascript:void(0)" onclick="scrollToBlog()">Blog</a></li>
                        <li><a href="javascript:void(0)" onclick="scrollToContact()" class="primary">Contact Me!</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <main class="main-content">
        <div class="banner" id="banner">
            <div class="text" data-scale>
                <p class="first">Hello, my name is</p>
                <h1>Ermin Muratović</h1>
                <p class="description">I'm an enthusiastic software engineer from Klagenfurt, Austria, who is always
                    bright and eager for new challenges.</p>
                <div class="social">
                    <p>You can find me on</p>
                    <div class="social-list">
                        <div class="social-button">
                            <a class="linkedin" target="_blank" href="https://linkedin.com/in/ermin-muratovic">
                                <i class="fab fa-linkedin fa-lg"></i>
                            </a>
                        </div>
                        <div class="social-button">
                            <a class="twitter" target="_blank" href="https://twitter.com/erminm">
                                <i class="fab fa-twitter fa-lg"></i>
                            </a>
                        </div>
                        <div class="social-button">
                            <a class="instagram" target="_blank" href="https://www.instagram.com/erminmurat/">
                                <i class="fab fa-instagram fa-lg"></i>
                            </a>
                        </div>
                        <div class="social-button">
                            <a class="github" target="_blank" href="https://github.com/ermin-muratovic">
                                <i class="fab fa-github fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <button class="align-middle rotate-icon" onclick="scrollToMore();"><span>More about me</span> <i
                            class="far fa-angle-right fa-lg"></i></button>
                </div>
                <!--p class="description detail">
                    Ich bin ein freiberuflicher Softwareentwickler aus Klagenfurt.
                    Haben Sie Interesse an einer modernen Webseite, Webanwendung oder mobilen Applikation, dann <a href="mailto:ermin@muratovic.at">kontaktieren</a> Sie mich bitte.
                </p-->
                <!-- work hard, top quality, purposeful, responsible, constantly improve -->
                <!-- pixel perfect work -->
                <!-- with (love) to the details -->
                <!-- contact, work together, website is your greatest business asset -->
                <!-- webdesign, development, blog or online shop -->
                <!-- individually, cms, wordpress, responsive, social media, re design old website, care&support service, e-commerce -->
                <!-- graphics and logo design, corporate branding, advertisement (online&offline) -->
                <!-- werbemittel, visitenkarten, briefpapier, stempel, plakate, banner, notizblöcke, flyer, folder, anzeigen&inserate -->
                <!-- werbevideos, imagevideos, marketing, foto, editing -->
            </div>
            <div class="image">
                <img src="resources/images/default.png" data-src="resources/images/ermin-1.png"/>
            </div>
        </div>
        <div class="expertin" id="expertin">
            <h1>Expert in</h1>
            <div class="expertin-list">
                <div class="expertin-item" data-animate data-animate-offset-element-height>
                    <i class="fal fa-desktop fa-5x"></i>
                    <h2>Web</h2>
                    <p>Design and development of web solutions from personal blog or small business websites to
                        e-commerce stores and web applications.</p>
                </div>
                <div class="expertin-item" data-animate data-animate-offset-element-height>
                    <i class="fal fa-mobile fa-5x"></i>
                    <h2>Mobile</h2>
                    <p>Web applications optimized for mobile devices or native applications developed for Android and
                        iOS.</p>
                </div>
                <div class="expertin-item" data-animate data-animate-offset-element-height>
                    <i class="fal fa-cloud fa-5x"></i>
                    <h2>Hosting</h2>
                    <p>Web hosting and long-term support from a single source at a low flat-rate.</p>
                </div>
            </div>
            <div class="expertin-list">
                <div class="expertin-item" data-animate data-animate-offset-element-height>
                    <i class="fal fa-briefcase fa-5x"></i>
                    <h2>Marketing</h2>
                    <p>Planning and running e-mail newsletter and social media campaigns for your website, application,
                        product or service.</p>
                </div>
                <div class="expertin-item" data-animate data-animate-offset-element-height>
                    <i class="fal fa-paint-brush fa-5x"></i>
                    <h2>Print</h2>
                    <p>Design and print of banners, flyers, corporate or personal business cards, letterheads,
                        brochures, promotional items, signboards and other printed materials.</p>
                </div>
                <div class="expertin-item" data-animate data-animate-offset-element-height>
                    <i class="fal fa-handshake fa-5x"></i>
                    <h2>Social Media</h2>
                    <p>Professional social media maintenance for your online presence to keep you connected with your
                        online followers and fans.</p>
                </div>
            </div>
            <h3><a href="javascript:void(0)" onclick="scrollToPortfolio()">See my work</a></h3>
        </div>
        <div class="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <p>Take a look at some of my projects</p>
            <div class="portfolio-list">
                <div class="portfolio-item reverse" data-animate data-animate-offset-element-height>
                    <div class="description">
                        <h3>Friseurstudio Edina</h3>
                        <p class="type">website, business card, signboard, gift card</p>
                        <p>A high-class local barber shop from Villach for women and kids.</p>
                        <br/>
                        <a href="http://friseurstudio-edina.at" target="_blank">Visit website</a>
                    </div>
                    <div class="showcase">
                        <img src="resources/images/default.png"
                             data-src="resources/images/friseurstudio-edina-showcase.png"/>
                    </div>
                </div>
                <div class="portfolio-item" data-animate data-animate-offset-element-height>
                    <div class="showcase">
                        <img src="resources/images/default.png"
                             data-src="resources/images/privat-auto-import-showcase.png"/>
                    </div>
                    <div class="description">
                        <h3>Privat Auto Import</h3>
                        <p class="type">personal project, website, web application, blog</p>
                        <p>Website with instructions how to import cars from Germany or other countries to Austria, with
                            online cost calculator and a blog.</p>
                        <br/>
                        <a href="http://privat-auto-import.at" target="_blank">Visit website</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog-preview" id="blog">
            <h1>Blog</h1>
            <p>I write regularly about code, design & life.</p>
            <div class="posts">
                {% for post in site.posts %}
                <div class="post">
                    <p>
                        <span class="date">{{ post.date | date: "%B %e, %Y" }}</span>
                        {% if post.category %}
                        <i class="fas fa-circle"></i> <span class="category">{{ post.category }}</span>
                        {% endif %}
                        {% if post.tags.size > 0 %}
                        <i class="fas fa-circle"></i> <span class="tags">{{ post.tags | join: ", " }}</span>
                        {% endif %}
                    </p>
                    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
                    <div class="separator"></div>
                    <p class="preview-text">{{ post.content | strip_html | truncatewords:75}}</p>
                    <a href="{{ post.url }}">Read article</a>
                </div>
                {% endfor %}
            </div>
        </div>
        <div class="contact" id="contact">
            <div class="text">
                <h1>Let's get in touch!</h1>
                <p>You have an idea for a project? Awesome! Trust your project in the hands of an expert whose
                    commitment to quality is unyielding.</p>
                <br/>
                <div class="contact-list">
                    <div class="btn-messenger">
                        <a href="http://m.me/ermin.muratovic" target="_blank">
                            <i class="fab fa-facebook-messenger fa-lg"></i>
                            Say Hi in Messenger
                        </a>
                    </div>
                    <div>
                        <p>Or use the traditional way</p>
                        <a href="mailto:ermin@muratovic.at">ermin@muratovic.at</a>
                    </div>
                </div>
                <div class="social">
                    <p>Stay in contact</p>
                    <div class="social-list">
                        <div class="social-button">
                            <a class="linkedin" target="_blank" href="https://linkedin.com/in/ermin-muratovic">
                                <i class="fab fa-linkedin fa-lg"></i>
                            </a>
                        </div>
                        <div class="social-button">
                            <a class="twitter" target="_blank" href="https://twitter.com/erminm">
                                <i class="fab fa-twitter fa-lg"></i>
                            </a>
                        </div>
                        <div class="social-button">
                            <a class="instagram" target="_blank" href="https://www.instagram.com/erminmurat/">
                                <i class="fab fa-instagram fa-lg"></i>
                            </a>
                        </div>
                        <div class="social-button">
                            <a class="github" target="_blank" href="https://github.com/ermin-muratovic">
                                <i class="fab fa-github fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="page-footer">
        <div class="impressum">
            <h2>Impressum</h2>
            <p>Ermin Muratović</p>
            <p>Rosentaler Straße 103/3</p>
            <p>9020 Klagenfurt am Wörthersee</p>
            <br/>
            <p>UID: ATU69487423</p>
            <p>Behörde gem. ECG: Magistrat der Stadt Klagenfurt</p>
            <br/>
            <a href="https://www.wkoecg.at/Web/Ecg.aspx?FirmaID=68532e82-4716-49d8-9d75-50102b06e38f">Informationspflicht
                lt. ECG und Mediengesetz wko.at</a>
        </div>
        <p class="copyright">&copy; 2017 - Handcrafted by Ermin Muratović</p>
    </footer>
</div>
<script src="/scripts/script.js"></script>