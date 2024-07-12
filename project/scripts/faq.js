const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }
    
    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));




    
    const faqs = [
        {
            question: "How can I become a member of Erruki Gulf Club?",
            answer: "Potential members seeking to join the club can find detailed information on membership tiers, benefits, application steps, and any prerequisites. The website will also include testimonials from current members to highlight the community aspect of the club."
        },
        {
            question: "What facilities and amenities are available at Erruki Gulf Club?",
            answer: "Potential members will find details on membership tiers, benefits, and application steps. Prerequisites and testimonials from current members will also be included, showcasing the community aspect."
        },
        {
            question: "When is the next tournament, and how can I register?",
            answer: "An events calendar will provide details on upcoming tournaments, including dates, registration, fees, and eligibility. Highlights and results of past events will showcase the club's competitive spirit and community engagement."
        },
        {
            question: "What membership benefits does Erruki Gulf Club offer?",
            answer: "This section will highlight the benefits of being a member, including priority tee times, exclusive events, discounts at the pro shop and dining facilities, and reciprocal privileges at other golf clubs, showcasing the value of joining."
        },
        {
            question: "Can I host a private event at Erruki Gulf Club?",
            answer: "Visitors interested in hosting events will find details on venues, catering, event planning, and booking procedures. High-quality images and testimonials will highlight the club’s suitability for weddings, corporate gatherings, and parties."
        },
        {
            question: "What are the rules and etiquette at Erruki Gulf Club?",
            answer: "New members and guests will find guidelines on dress code, course rules, and pace of play tips. This ensures all visitors understand the club’s standards and can enjoy their time at Erruki Gulf Club harmoniously."
        },
        {
            question: "Who can I contact for golf lessons and clinics?",
            answer: "For those seeking instruction, the website will profile professional instructors, detailing their qualifications and teaching philosophies. Information on private lessons, group clinics, junior programs, scheduling, pricing, and student testimonials will be provided."
        }
    ];

    const accordionContainer = document.getElementById('accordion-container');

    faqs.forEach((faq, index) => {
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';
        accordionItem.innerHTML = `
            <button id="accordion-button-${index + 1}" aria-expanded="${index === 0 ? 'true' : 'false'}">
                <span class="accordion-title">${faq.question}</span>
                <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content" ${index === 0 ? 'style="opacity: 1; max-height: 9em;"' : ''}>
                <p>${faq.answer}</p>
            </div>
        `;
        accordionContainer.appendChild(accordionItem);
    });

    document.querySelectorAll('.accordion button').forEach(button => {
        button.addEventListener('click', () => {
            const expanded = button.getAttribute('aria-expanded') === 'true' || false;
            document.querySelectorAll('.accordion button').forEach(btn => btn.setAttribute('aria-expanded', 'false'));
            if (!expanded) {
                button.setAttribute('aria-expanded', 'true');
            }
        });
    });