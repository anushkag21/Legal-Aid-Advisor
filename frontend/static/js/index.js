VANTA.WAVES({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x1e3a47,
    shininess: 35.00,
    waveHeight: 15.00,
    waveSpeed: 0.75,
    zoom: 0.65
});

// Sample dataset for legal services (simulating Kaggle dataset)
const legalServicesData = [
    {
        id: 1,
        title: "Family Law",
        summary: "Our family law services include divorce, child custody, adoption, and domestic violence protection.",
        content: `
            <h3>Family Law Services</h3>
            <p>Family law matters are often emotionally challenging and legally complex. Our experienced family law attorneys provide compassionate guidance through difficult times while protecting your rights and interests.</p>
            
            <h3>Divorce Proceedings</h3>
            <p>We handle both contested and uncontested divorces, helping clients navigate property division, spousal support, and other critical aspects of marital dissolution. Our goal is to achieve fair settlements while minimizing conflict.</p>
            
            <h3>Child Custody & Support</h3>
            <p>The well-being of children is paramount in family law cases. We work diligently to establish custody arrangements that serve the best interests of the child while protecting parental rights. Our attorneys also ensure that child support orders are fair and appropriate.</p>
            
            <h3>Adoption</h3>
            <p>Building families through adoption is a joyful but legally complex process. We guide clients through every step, from initial paperwork to finalization, handling both domestic and international adoptions.</p>
            
            <h3>Domestic Violence Protection</h3>
            <p>For those facing domestic violence situations, immediate legal protection is essential. We help clients obtain restraining orders and other protective measures while providing resources for safety planning.</p>
            
            <h3>Our Approach</h3>
            <p>Every family situation is unique. We take the time to understand your specific circumstances and goals before developing a tailored legal strategy. Throughout the process, we maintain open communication and provide the support you need during challenging times.</p>
        `
    },
    {
        id: 2,
        title: "Criminal Defense",
        summary: "Facing criminal charges? Our defense attorneys provide representation for misdemeanors, felonies, DUI cases, and more.",
        content: `
            <h3>Criminal Defense Services</h3>
            <p>Being accused of a crime can be a frightening experience with potentially life-altering consequences. Our criminal defense attorneys are committed to protecting your rights and freedom through aggressive legal representation.</p>
            
            <h3>Misdemeanor Defense</h3>
            <p>Even "minor" misdemeanor charges can result in jail time, fines, and a permanent criminal record. We handle cases including petty theft, simple assault, disorderly conduct, and other misdemeanor offenses with the same dedication as more serious charges.</p>
            
            <h3>Felony Defense</h3>
            <p>Felony charges carry severe penalties, including substantial prison sentences. Our attorneys have extensive experience defending clients against serious charges such as assault, robbery, drug trafficking, and white-collar crimes.</p>
            
            <h3>DUI Defense</h3>
            <p>DUI charges require specialized defense strategies. We examine every aspect of your case, from the initial traffic stop to breathalyzer administration, seeking procedural errors or rights violations that could lead to reduced charges or dismissal.</p>
            
            <h3>Juvenile Defense</h3>
            <p>Young people facing criminal charges need specialized representation that considers their unique circumstances. We work to protect juveniles' rights while seeking alternatives to incarceration that focus on rehabilitation.</p>
            
            <h3>Our Defense Strategy</h3>
            <p>We conduct thorough investigations, challenge evidence, negotiate with prosecutors, and prepare compelling courtroom arguments. Throughout the process, we keep you informed about your options and the potential outcomes of different defense strategies.</p>
        `
    },
    {
        id: 3,
        title: "Immigration Law",
        summary: "Navigate the complex immigration system with our help on visas, green cards, citizenship applications, and deportation defense.",
        content: `
            <h3>Immigration Law Services</h3>
            <p>The U.S. immigration system is notoriously complex and constantly changing. Our immigration attorneys stay current with the latest policies and procedures to provide accurate, effective representation for individuals and families.</p>
            
            <h3>Visa Applications</h3>
            <p>We assist with various visa categories, including family-based visas, employment visas, student visas, and visitor visas. Our attorneys carefully prepare applications to maximize the chances of approval and minimize processing delays.</p>
            
            <h3>Green Card Processing</h3>
            <p>Obtaining lawful permanent resident status (a green card) is a significant milestone. We guide clients through the entire process, whether through family sponsorship, employment, refugee/asylee status, or other qualifying categories.</p>
            
            <h3>Citizenship & Naturalization</h3>
            <p>Becoming a U.S. citizen provides important rights and benefits. We help eligible green card holders prepare for citizenship, including application preparation, interview coaching, and representation throughout the naturalization process.</p>
            
            <h3>Deportation Defense</h3>
            <p>Facing removal proceedings is extremely stressful. Our deportation defense attorneys explore all possible relief options, including asylum, cancellation of removal, adjustment of status, and waivers, fighting vigorously to keep families together.</p>
            
            <h3>Humanitarian Relief</h3>
            <p>We assist vulnerable individuals seeking humanitarian protection, including asylum seekers, refugees, victims of trafficking, and those eligible for Special Immigrant Juvenile Status or protection under the Violence Against Women Act.</p>
        `
    },
    {
        id: 4,
        title: "Personal Injury",
        summary: "Injured due to someone else's negligence? We'll help you seek compensation for medical bills, lost wages, and pain and suffering.",
        content: `
            <h3>Personal Injury Services</h3>
            <p>When you're injured due to someone else's negligence, you deserve fair compensation. Our personal injury attorneys fight for the full damages you're entitled to while you focus on recovery.</p>
            
            <h3>Auto Accidents</h3>
            <p>Car, truck, and motorcycle accidents can cause devastating injuries. We investigate the crash, establish liability, deal with insurance companies, and pursue maximum compensation for your medical expenses, lost income, and pain and suffering.</p>
            
            <h3>Slip and Fall Accidents</h3>
            <p>Property owners have a duty to maintain safe premises. If you've been injured in a slip and fall accident due to dangerous conditions, we help establish negligence and liability to secure appropriate compensation.</p>
            
            <h3>Medical Malpractice</h3>
            <p>When healthcare providers fail to meet the standard of care, the consequences can be severe. Our attorneys work with medical experts to build strong malpractice cases for surgical errors, misdiagnosis, medication mistakes, and other forms of medical negligence.</p>
            
            <h3>Workplace Injuries</h3>
            <p>Beyond workers' compensation, some workplace injuries may warrant personal injury claims against third parties. We explore all potential sources of compensation for serious workplace accidents.</p>
            
            <h3>Wrongful Death</h3>
            <p>Losing a loved one due to someone else's negligence is devastating. While no amount of money can replace your loss, we help families secure financial stability and a measure of justice through wrongful death claims.</p>
        `
    },
    {
        id: 5,
        title: "Estate Planning",
        summary: "Secure your family's future with wills, trusts, power of attorney documents, and comprehensive estate planning services.",
        content: `
            <h3>Estate Planning Services</h3>
            <p>Proper estate planning ensures your wishes are honored and your loved ones are protected after you're gone. Our estate planning attorneys create customized plans for clients at all stages of life and levels of wealth.</p>
            
            <h3>Wills</h3>
            <p>A will is the foundation of most estate plans. We help you create a legally sound will that clearly expresses your wishes regarding asset distribution, guardianship for minor children, and other important matters.</p>
            
            <h3>Trusts</h3>
            <p>Trusts offer benefits beyond what wills provide, including probate avoidance, tax advantages, and greater control over asset distribution. We design various types of trusts tailored to your specific needs, including revocable living trusts, irrevocable trusts, special needs trusts, and charitable trusts.</p>
            
            <h3>Power of Attorney</h3>
            <p>Designating trusted individuals to make decisions if you become incapacitated is crucial. We prepare durable powers of attorney for financial matters and healthcare decisions, ensuring your affairs will be managed according to your wishes even if you cannot manage them yourself.</p>
            
            <h3>Advanced Healthcare Directives</h3>
            <p>Medical directives and living wills specify your preferences for medical treatment in situations where you cannot communicate. We help you document these important healthcare decisions clearly and legally.</p>
            
            <h3>Estate Administration & Probate</h3>
            <p>After a loved one passes, navigating the probate process can be overwhelming. Our attorneys assist personal representatives and executors with inventory, appraisal, debt settlement, tax filings, and distribution of assets in accordance with the will or state law.</p>
        `
    },
    {
        id: 6,
        title: "Employment Law",
        summary: "We represent both employees and employers in workplace disputes, discrimination cases, contract negotiations, and more.",
        content: `
            <h3>Employment Law Services</h3>
            <p>Workplace legal issues can significantly impact your career, business, and livelihood. Our employment law attorneys advocate for fair treatment and legal compliance in the workplace.</p>
            
            <h3>Discrimination & Harassment</h3>
            <p>We represent employees facing discrimination or harassment based on race, gender, age, disability, religion, or other protected characteristics. We also advise employers on implementing effective anti-discrimination policies and handling complaints appropriately.</p>
            
            <h3>Wage & Hour Disputes</h3>
            <p>Workers deserve fair compensation for their labor. We handle cases involving minimum wage violations, unpaid overtime, misclassification of employees as independent contractors, and other wage and hour issues.</p>
            
            <h3>Wrongful Termination</h3>
            <p>If you've been fired for illegal reasons, such as discrimination, retaliation for whistleblowing, or exercising legal rights, we can help you seek reinstatement, back pay, and other damages.</p>
            
            <h3>Employment Contracts</h3>
            <p>We draft, review, and negotiate employment agreements, non-compete clauses, confidentiality agreements, and severance packages to protect your interests and ensure fair terms.</p>
            
            <h3>Workplace Investigations</h3>
            <p>For employers, we conduct thorough, impartial workplace investigations into allegations of misconduct, helping you make informed decisions and minimize legal exposure.</p>
        `
    }
];

// Populate the services cards
const cardContainer = document.querySelector('.card-container');
legalServicesData.forEach(service => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${service.title}</h3>
        <p>${service.summary}</p>
        <a href="#" class="read-more" data-id="${service.id}">Read More</a>
    `;
    cardContainer.appendChild(card);
});

// Modal functionality
const modal = document.getElementById('article-modal');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');
const modalClose = document.querySelector('.modal-close');

// Open modal when "Read More" is clicked
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('read-more')) {
        e.preventDefault();
        const serviceId = parseInt(e.target.getAttribute('data-id'));
        const service = legalServicesData.find(s => s.id === serviceId);
        
        if (service) {
            modalTitle.textContent = service.title;
            modalBody.innerHTML = service.content;
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
        }
    }
});

// Close modal when X is clicked
modalClose.addEventListener('click', function() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
});

// Close modal when clicking outside the content
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    }
});

// 3D card effect
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top; // y position within the element
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});