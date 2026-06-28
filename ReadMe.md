1. Hero Section ✅ (You already have this)

Purpose:

Grab attention
Explain what LUAC is
Include a call-to-action
2. About LUAC (Recommended Next)

Introduce the association.

Example content:

Who We Are

The Lira University Association of Computing and Information Science (LUAC) is a student-led organization committed to fostering innovation, collaboration, and excellence in computing. We empower students through practical learning, leadership, technology projects, and professional development.

Include cards such as:

🎯 Mission
👁 Vision
⭐ Core Values
3. Our Activities

This is one of the most important sections.

Display cards for:

💻 Web Development
🤖 Artificial Intelligence
🎨 Graphic Design
📱 Mobile App Development
🔧 Computer Repair
🌐 Networking
🛡 Cybersecurity
⚽ Sports & Recreation

Use icons and a short description for each.

4. Why Join LUAC?

Explain the benefits.

Example:

Gain practical computing skills
Work on real projects
Build your portfolio
Meet fellow tech enthusiasts
Attend workshops and hackathons
Leadership opportunities
Career mentorship
Industry networking

This section helps convince visitors to become members.

5. Upcoming Events

Show:

Workshops
Bootcamps
Coding competitions
Guest lectures
Hackathons

Each event can have:

Date
Time
Location
Register button
6. Featured Projects

Showcase work completed by members.

Example:

Student Portal
LUAC Website
AI Chatbot
Mobile Attendance System
Library Management System

This demonstrates what members achieve.

7. Executive Committee

Introduce the leadership team.

Display:

Photo
Name
Position
Social media links

Example:

Chairperson
Vice Chairperson
Secretary
Treasurer
Academic Affairs
Publicity Officer
8. Gallery

Photos from:

Workshops
Hackathons
Sports
Community Outreach
Graduation
Tech Talks

A gallery makes the association feel active and welcoming.

9. Testimonials

Let members share their experiences.

Example:

"LUAC helped me build my first website and gain confidence in web development."

10. Partners & Sponsors

Display logos of:

Lira University
Tech companies
NGOs
Innovation hubs
11. Membership CTA

A dedicated call-to-action section.

Example:

Become Part of Uganda's Future Tech Leaders

Join LUAC Today

Learn • Build • Innovate • Lead

[Become a Member]
12. Contact Section

Include:

Email
Phone
Office Location
Contact Form
Google Map (optional)
13. Footer

Include:

Quick Links
Activities
Resources
Social Media
Copyright




.eventsSection {
    padding: 80px 0;
    background: var(--bodeBackgroundColor);
}

/* WRAPPER */
.eventsGridWrapper {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: var(--spacimgLarge);
    align-items: center;
}

/* LEFT CONTENT */
.sectionTag {
    color: var(--primary_color);
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 0.9rem;
}

.sectionTitle {
    font-size: var(--fontSizeXtraLarge);
    margin: var(--spacingMedium) 0;
    color: var(--darkTextColor);
}

.sectionDescription {
    color: var(--textGrayColor);
    line-height: 1.6;
    margin-bottom: var(--spacingLarge);
}

/* BUTTON */
.viewAllButton {
    display: inline-block;
    padding: 12px 20px;
    background: var(--primary_color);
    color: var(--whiteTextColor);
    border-radius: 10px;
    text-decoration: none;
    transition: 0.3s ease;
}

.viewAllButton:hover {
    background: var(--light-green);
}

/* GRID */
.eventsGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacingMedium);
}

/* CARD */
.eventCard {
    background: var(--whiteTextColor);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    position: relative;
    transition: 0.3s ease;
}

.eventCard:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

/* DATE BADGE */
.eventDate {
    position: absolute;
    top: 15px;
    right: 15px;
    background: var(--primary_color);
    color: var(--whiteTextColor);
    padding: 10px;
    border-radius: 12px;
    text-align: center;
    transition: 0.3s;
}

.eventCard:hover .eventDate {
    background: var(--light-green);
}

.eventDate .day {
    display: block;
    font-size: 1.2rem;
    font-weight: 800;
}

.eventDate .month {
    font-size: 0.8rem;
}

/* ICONS */
.material-symbols-outlined {
    font-size: 18px;
    vertical-align: middle;
    margin-right: 6px;
    color: var(--primary_color);
}

/* TITLE */
.eventCard h3 {
    margin-top: 50px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 6px;
}

/* META */
.eventMeta p {
    color: var(--textGrayColor);
    margin: 6px 0;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
}

/* REGISTER BUTTON */
.registerButton {
    display: inline-block;
    margin-top: 15px;
    width: 100%;
    text-align: center;
    padding: 10px;
    background: var(--primary_color);
    color: var(--whiteTextColor);
    border-radius: 10px;
    text-decoration: none;
    transition: 0.3s ease;
}

.registerButton:hover {
    background: var(--headingTextKarkiColor);
    color: var(--darkTextColor);
}

/* RESPONSIVE */
@media (max-width: 900px) {
    .eventsGridWrapper {
        grid-template-columns: 1fr;
    }

    .eventsGrid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 600px) {
    .eventsGrid {
        grid-template-columns: 1fr;
    }
}


<section class="eventsSection" id="events">
    <div class="container">

        <div class="eventsGridWrapper">

            <!-- LEFT CONTENT -->
            <div class="eventsContent">

                <span class="sectionTag">UPCOMING EVENTS</span>

                <h2 class="sectionTitle">
                    Learn, Build & Compete With LUAC
                </h2>

                <p class="sectionDescription">
                    Stay updated with workshops, hackathons, coding competitions,
                    guest lectures, and bootcamps designed to grow your technical skills
                    and connect you with like-minded innovators.
                </p>

                <a href="/" class="viewAllButton">
                    View All Events
                </a>

            </div>

            <!-- RIGHT EVENTS GRID -->
            <div class="eventsGrid">

                <!-- EVENT CARD -->
                <article class="eventCard">
                    <div class="eventDate">
                        <span class="day">15</span>
                        <span class="month">SEP</span>
                    </div>

                    <h3>
                        <span class="material-symbols-outlined icon">code</span>
                        Web Development Workshop
                    </h3>

                    <div class="eventMeta">
                        <p>
                            <span class="material-symbols-outlined icon">event</span>
                            Saturday
                        </p>

                        <p>
                            <span class="material-symbols-outlined icon">schedule</span>
                            9:00 AM
                        </p>

                        <p>
                            <span class="material-symbols-outlined icon">location_on</span>
                            Computer Lab
                        </p>
                    </div>

                    <a href="/" class="registerButton">
                        Register
                    </a>
                </article>

                <!-- EVENT CARD -->
                <article class="eventCard">
                    <div class="eventDate">
                        <span class="day">28</span>
                        <span class="month">SEP</span>
                    </div>

                    <h3>
                        <span class="material-symbols-outlined icon">psychology</span>
                        AI Bootcamp
                    </h3>

                    <div class="eventMeta">
                        <p>
                            <span class="material-symbols-outlined icon">event</span>
                            Friday
                        </p>

                        <p>
                            <span class="material-symbols-outlined icon">schedule</span>
                            10:00 AM
                        </p>

                        <p>
                            <span class="material-symbols-outlined icon">location_on</span>
                            Main Hall
                        </p>
                    </div>

                    <a href="/" class="registerButton">
                        Register
                    </a>
                </article>

                <!-- EVENT CARD -->
                <article class="eventCard">
                    <div class="eventDate">
                        <span class="day">04</span>
                        <span class="month">OCT</span>
                    </div>

                    <h3>
                        <span class="material-symbols-outlined icon">terminal</span>
                        Hackathon Weekend
                    </h3>

                    <div class="eventMeta">
                        <p>
                            <span class="material-symbols-outlined icon">event</span>
                            Weekend
                        </p>

                        <p>
                            <span class="material-symbols-outlined icon">schedule</span>
                            8:00 AM
                        </p>

                        <p>
                            <span class="material-symbols-outlined icon">location_on</span>
                            Innovation Hub
                        </p>
                    </div>

                    <a href="/" class="registerButton">
                        Register
                    </a>
                </article>

                <!-- EVENT CARD -->
                <article class="eventCard">
                    <div class="eventDate">
                        <span class="day">20</span>
                        <span class="month">OCT</span>
                    </div>

                    <h3>
                        <span class="material-symbols-outlined icon">record_voice_over</span>
                        Guest Lecture
                    </h3>

                    <div class="eventMeta">
                        <p>
                            <span class="material-symbols-outlined icon">event</span>
                            Tuesday
                        </p>

                        <p>
                            <span class="material-symbols-outlined icon">schedule</span>
                            2:00 PM
                        </p>

                        <p>
                            <span class="material-symbols-outlined icon">location_on</span>
                            Conference Room
                        </p>
                    </div>

                    <a href="/" class="registerButton">
                        Register
                    </a>
                </article>

            </div>

        </div>

    </div>
</section>




<!---->   <section class="executiveSection" id="executive">
        <div class="container">

            <div class="executiveHeader">

                <span class="sectionTag">EXECUTIVE COMMITTEE</span>

                <h2 class="sectionTitle">
                    Meet The Leadership Team
                </h2>

                <p class="sectionDescription">
                    The LUAC executive committee leads innovation, coordination, and execution
                    of all club activities, ensuring growth and impact in the tech community.
                </p>

            </div>

            <div class="executiveGrid">

                <!-- CHAIRPERSON -->
                <article class="executiveCard">
                    <img src="images/luac.jpg" alt="Chairperson">

                    <h3>Chairperson</h3>
                    <p class="name">Alex Kato</p>

                    <div class="socials">
                        <span class="material-symbols-outlined">mail</span>
                        <span class="material-symbols-outlined">link</span>
                        <span class="material-symbols-outlined">chat</span>
                    </div>
                </article>

                <!-- VICE CHAIRPERSON -->
                <article class="executiveCard">
                    <img src="images/vice-chair.jpg" alt="Vice Chairperson">

                    <h3>Vice Chairperson</h3>
                    <p class="name">Sarah Namugenyi</p>

                    <div class="socials">
                        <span class="material-symbols-outlined">mail</span>
                        <span class="material-symbols-outlined">link</span>
                        <span class="material-symbols-outlined">chat</span>
                    </div>
                </article>

                <!-- SECRETARY -->
                <article class="executiveCard">
                    <img src="images/secretary.jpg" alt="Secretary">

                    <h3>Secretary</h3>
                    <p class="name">Brian Okello</p>

                    <div class="socials">
                        <span class="material-symbols-outlined">mail</span>
                        <span class="material-symbols-outlined">link</span>
                        <span class="material-symbols-outlined">chat</span>
                    </div>
                </article>

                <!-- TREASURER -->
                <article class="executiveCard">
                    <img src="images/treasurer.jpg" alt="Treasurer">

                    <h3>Treasurer</h3>
                    <p class="name">Grace Auma</p>

                    <div class="socials">
                        <span class="material-symbols-outlined">mail</span>
                        <span class="material-symbols-outlined">link</span>
                        <span class="material-symbols-outlined">chat</span>
                    </div>
                </article>

                <!-- ACADEMIC AFFAIRS -->
                <article class="executiveCard">
                    <img src="images/academic.jpg" alt="Academic Affairs">

                    <h3>Academic Affairs</h3>
                    <p class="name">Daniel Mutesi</p>

                    <div class="socials">
                        <span class="material-symbols-outlined">mail</span>
                        <span class="material-symbols-outlined">link</span>
                        <span class="material-symbols-outlined">chat</span>
                    </div>
                </article>

                <!-- PUBLICITY OFFICER -->
                <article class="executiveCard">
                    <img src="images/mockups.png" alt="Publicity Officer">

                    <h3>Publicity Officer</h3>
                    <p class="name">Kevin Sseremba</p>

                    <div class="socials">
                        <span class="material-symbols-outlined">mail</span>
                        <span class="material-symbols-outlined">link</span>
                        <span class="material-symbols-outlined">chat</span>
                    </div>
                </article>

            </div>

        </div>
    </section>



    
/*MEMBERSHIP SECTION*/
.executiveSection {
    padding: 80px 0;
    background: var(--bodeBackgroundColor);
}

/* HEADER */
.executiveHeader {
    text-align: center;
    margin-bottom: 40px;
}

.executiveHeader .sectionDescription {
    max-width: 700px;
    margin: 0 auto;
    color: var(--textGrayColor);
}

/* GRID */
.executiveGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacimgLarge);
}

/* CARD */
.executiveCard {
    background: var(--whiteTextColor);
    border-radius: 16px;
    padding: 25px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
    transition: 0.3s ease;
}

.executiveCard:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

/* IMAGE */
.executiveCard img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--primary_color);
    margin-bottom: 15px;
}

/* ROLE */
.executiveCard h3 {
    color: var(--primary_color);
    margin-bottom: 5px;
    font-size: 1rem;
}

/* NAME */
.executiveCard .name {
    color: var(--darkTextColor);
    font-weight: 600;
    margin-bottom: 15px;
}

/* SOCIAL ICONS */
.socials {
    display: flex;
    justify-content: center;
    gap: 12px;
}

.socials .material-symbols-outlined {
    font-size: 20px;
    color: var(--navlink);
    cursor: pointer;
    transition: 0.3s;
}

.socials .material-symbols-outlined:hover {
    color: var(--primary_color);
    transform: scale(1.1);
}

/* RESPONSIVE */
@media (max-width: 900px) {
    .executiveGrid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .executiveGrid {
        grid-template-columns: 1fr;
    }
}