// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: stop observing once it's visible
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up, .fade-in').forEach(el => {
    observer.observe(el);
});

// Semester Tab Switcher
function showSemester(semesterId, btnElement) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Show the selected tab content and activate the button
    const selectedContent = document.getElementById(semesterId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
        // Add a small delay for the display block to take effect before adding active class for animation
        setTimeout(() => {
            selectedContent.classList.add('active');
        }, 10);
    }

    if (btnElement) {
        btnElement.classList.add('active');
    }
}

// Modal Logic
function openModal(url) {
    const modal = document.getElementById('docModal');
    const iframe = document.getElementById('docIframe');
    iframe.src = url;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('docModal');
    const iframe = document.getElementById('docIframe');
    iframe.src = '';
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
window.onclick = function(event) {
    const docModal = document.getElementById('docModal');
    const textModal = document.getElementById('textModal');
    if (event.target == docModal) closeModal();
    if (event.target == textModal) closeTextModal();
}

// Mobile Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinksContainer.classList.remove('active');
    });
});

// Text Reflection Modal Logic
const reflections = {
    'filosofi': {
        title: 'Refleksi: Filosofi Pendidikan',
        content: '<p>Mata kuliah ini menyadarkan saya akan pentingnya kembali ke akar filosofi pendidikan Ki Hajar Dewantara. Saya belajar bahwa mendidik bukan sekadar menuntut, melainkan <strong>"menuntun"</strong> kodrat anak agar mencapai keselamatan dan kebahagiaan setinggi-tingginya.</p><p>Lebih dari itu, saya mulai memahami konsep Trilogi Pendidikan, yaitu <em>Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani</em>. Konsep ini menjadi landasan bagi saya dalam berperan sebagai guru, bahwa terkadang saya harus di depan memberi contoh, di tengah membangun semangat, dan di belakang memberikan dorongan moral.</p><p>Ke depannya, saya berkomitmen untuk lebih fokus pada pendekatan yang memerdekakan peserta didik. Pembelajaran tidak lagi berpusat pada guru (teacher-centered), melainkan harus berpihak pada kebutuhan dan potensi masing-masing siswa (student-centered), sehingga lingkungan belajar menjadi ruang yang aman, nyaman, dan menyenangkan.</p>'
    },
    'pemahaman': {
        title: 'Refleksi: Pemahaman Peserta Didik',
        content: '<p>Setiap anak adalah individu yang unik dengan latar belakang, gaya belajar, dan kesiapan yang berbeda-beda. Melalui mata kuliah ini, saya memahami pentingnya melakukan asesmen diagnostik dan <em>profiling</em> peserta didik secara menyeluruh, baik dari aspek kognitif maupun non-kognitif, sebelum mulai merancang sebuah pembelajaran.</p><p>Pendekatan <em>Teaching at the Right Level (TaRL)</em> menjadi kunci utama bagi saya untuk menciptakan ruang kelas yang inklusif. Saya belajar bagaimana memetakan kemampuan siswa, menyusun strategi diferensiasi, dan mengelola kelas yang memiliki keberagaman tingkat pemahaman.</p><p>Tantangan yang sering ditemui di lapangan adalah bagaimana menyesuaikan ritme belajar. Namun, dengan pemahaman yang mendalam mengenai perkembangan kognitif, sosial, dan emosional siswa, saya menjadi lebih empati dan siap menjadi fasilitator yang menjembatani kesulitan belajar mereka menuju keberhasilan.</p>'
    },
    'pma': {
        title: 'Refleksi: Pembelajaran Mendalam & Asesmen',
        content: '<p>Saya merefleksikan bahwa asesmen bukanlah akhir dari sebuah proses belajar, melainkan bagian integral dari pembelajaran itu sendiri. Saya belajar membedakan serta menerapkan <em>Assessment of Learning, Assessment as Learning,</em> dan <em>Assessment for Learning</em> dengan porsi yang tepat.</p><p>Merancang asesmen yang otentik dan bermakna sangat krusial untuk mengukur pemahaman mendalam siswa (<em>Deep Learning</em>), bukan sekadar hafalan teoritis. Saya berlatih menyusun instrumen penilaian, rubrik, serta memberikan umpan balik (<em>feedback</em>) yang konstruktif agar siswa mengetahui area mana yang perlu mereka perbaiki tanpa merasa dihakimi.</p><p>Ke depan, saya akan terus berupaya menciptakan evaluasi yang tidak hanya berupa tes tertulis, melainkan juga melalui proyek, portofolio, dan unjuk kerja yang lebih mencerminkan kompetensi siswa di dunia nyata, serta menggunakan hasil asesmen sebagai dasar untuk memperbaiki rencana pembelajaran berikutnya.</p>'
    },
    'ppl': {
        title: 'Refleksi: Praktik Pengalaman Lapangan',
        content: '<p>Terjun langsung ke lapangan memberikan saya pengalaman otentik dalam menghadapi dinamika kelas yang sesungguhnya. Berada di lingkungan sekolah mengajarkan saya hal-hal yang tidak selalu tertulis di buku teks, mulai dari budaya sekolah, interaksi dengan rekan sejawat, hingga penanganan konflik di dalam kelas.</p><p>Tantangan terbesarnya adalah mengelola kelas dengan karakteristik siswa yang sangat beragam, serta memotivasi siswa yang cenderung pasif. Melalui bimbingan intensif dari guru pamong dan dosen pembimbing lapangan, saya perlahan belajar menyusun strategi manajemen kelas yang lebih efektif.</p><p>Selain itu, pengalaman ini melatih mental dan kedisiplinan saya. Saya belajar bagaimana membangun kedekatan emosional (<em>bonding</em>) dengan siswa sehingga mereka merasa dihargai. PPL adalah kawah candradimuka yang mematangkan kesiapan saya untuk menjadi guru profesional yang seutuhnya.</p>'
    },
    'growth': {
        title: 'Refleksi: Pola Pikir Bertumbuh',
        content: '<p>Saya menyadari bahwa kecerdasan dan kemampuan bukanlah hal yang statis atau bawaan sejak lahir semata. Melalui mata kuliah ini, pemahaman saya tentang <em>Growth Mindset</em> (Pola Pikir Bertumbuh) sangat diperkuat. Saya belajar memandang kegagalan dan kritik bukan sebagai ancaman atau akhir segalanya, melainkan sebagai batu loncatan dan <em>feedback</em> yang berharga untuk terus berkembang.</p><p>Pola pikir ini membawa perubahan besar pada cara saya mengajar. Saat menghadapi siswa yang kesulitan, saya tidak lagi melabeli mereka, melainkan memberikan afirmasi bahwa mereka "belum" bisa, bukan "tidak" bisa. Penggunaan kata "belum" ini sangat kuat dampaknya terhadap motivasi intrinsik siswa.</p><p>Ke depan, saya bertekad untuk membudayakan lingkungan kelas yang merayakan proses dan kerja keras, bukan sekadar nilai akhir. Saya ingin menularkan semangat pantang menyerah ini kepada siswa agar mereka tumbuh menjadi pembelajar sepanjang hayat yang tangguh menghadapi tantangan zaman.</p>'
    },
    'inovasi': {
        title: 'Refleksi: Inovasi Pembelajaran',
        content: '<p>Zaman terus berubah dengan sangat dinamis, dan pendekatan pembelajaran tentu harus ikut beradaptasi. Mata kuliah inovasi pembelajaran berbasis ajaran Tamansiswa mengajarkan saya harmoni yang indah antara mengintegrasikan nilai-nilai budaya dan kearifan lokal dengan pesatnya perkembangan teknologi pendidikan modern.</p><p>Saya belajar bahwa inovasi tidak selalu harus berupa teknologi canggih atau mahal, melainkan cara-cara kreatif untuk memecahkan masalah pembelajaran di kelas. Dengan mengadaptasi Sistem Among (Asah, Asih, Asuh), saya menciptakan media interaktif yang membuat siswa lebih antusias dan terlibat aktif dalam pembelajaran.</p><p>Inovasi ini membuktikan bahwa siswa kita bisa belajar melalui medium yang sangat relevan dengan abad 21, tanpa harus tercerabut dari akar kebudayaan lokal bangsa sendiri. Saya berkomitmen untuk terus mengeksplorasi metode, model, dan media pembelajaran baru agar kelas saya selalu hidup dan bermakna.</p>'
    },
    'inovasi_kejuruan': {
        title: 'Refleksi: Inovasi Kejuruan',
        content: '<p>Mata kuliah Inovasi Kejuruan membuka wawasan saya bahwa pendidikan vokasi harus selalu relevan dengan perkembangan industri terkini. Saya belajar untuk tidak hanya mengajarkan keterampilan dasar, tetapi juga bagaimana mengintegrasikan teknologi baru dan praktik industri ke dalam ruang kelas.</p><p>Tantangan utama adalah bagaimana merancang inovasi yang dapat diaplikasikan dengan fasilitas yang ada. Melalui mata kuliah ini, saya berhasil mengembangkan rancangan pembelajaran yang menjembatani kesenjangan antara teori di sekolah dan praktik di dunia kerja.</p><p>Pengalaman ini menyadarkan saya bahwa guru kejuruan harus terus menjadi pembelajar dan inovator yang proaktif dalam menjawab kebutuhan zaman.</p>'
    },
    'pembelajaran_mendalam': {
        title: 'Refleksi: Pembelajaran Mendalam dan Asesmen Lanjut',
        content: '<p>Melalui Pembelajaran Mendalam dan Asesmen Lanjut, saya memahami bahwa pembelajaran sejati melampaui sekadar hafalan fakta. Ini tentang memfasilitasi siswa untuk menguasai kompetensi inti dan menerapkannya dalam memecahkan masalah kompleks.</p><p>Saya belajar merancang asesmen yang tidak hanya mengukur hasil belajar (<i>assessment of learning</i>), tetapi juga sebagai bagian dari proses pembelajaran itu sendiri (<i>assessment for/as learning</i>). Menggunakan rubrik dan umpan balik yang komprehensif sangat membantu siswa menyadari progres mereka.</p><p>Pemahaman ini telah mengubah paradigma saya dari sekadar "menyampaikan materi" menjadi "merancang pengalaman belajar yang bermakna dan terukur secara holistik".</p>'
    },
    'sosial_emosional': {
        title: 'Refleksi: Pembelajaran Sosial Emosional',
        content: '<p>Pembelajaran Sosial Emosional (PSE) mengajarkan saya bahwa kesejahteraan psikologis siswa sama pentingnya dengan pencapaian akademis mereka. Mengintegrasikan kerangka CASEL ke dalam pembelajaran membantu menciptakan lingkungan yang aman, inklusif, dan mendukung.</p><p>Saya berlatih menerapkan teknik <i>mindfulness</i> (kesadaran penuh) dan membangun empati di dalam kelas. Hal ini terbukti efektif dalam mengelola dinamika kelas dan membantu siswa meregulasi emosi mereka saat menghadapi kesulitan belajar.</p><p>Ke depannya, saya berkomitmen untuk selalu menyisipkan aspek sosial emosional dalam setiap rancangan pembelajaran agar siswa tumbuh menjadi individu yang cerdas secara emosional dan resilien.</p>'
    },
    'proyek_kepemimpinan': {
        title: 'Refleksi: Proyek Kepemimpinan',
        content: '<p>Proyek Kepemimpinan adalah wadah nyata untuk mempraktikkan inisiatif dan kemampuan manajerial. Mata kuliah ini menantang saya untuk mengidentifikasi masalah nyata di komunitas atau sekolah, lalu merancang, mengeksekusi, dan mengevaluasi solusi secara kolaboratif.</p><p>Proses memimpin tim dan berinteraksi dengan berbagai pemangku kepentingan mengasah kemampuan komunikasi, negosiasi, dan resolusi konflik saya. Saya menyadari bahwa kepemimpinan guru tidak terbatas di dalam kelas, melainkan meluas ke ekosistem pendidikan yang lebih besar.</p><p>Pengalaman berharga ini menjadi fondasi kuat bagi saya untuk mengambil peran lebih aktif sebagai agen perubahan di lingkungan tempat saya mengabdi kelak.</p>'
    },
    'ppl_mandiri': {
        title: 'Refleksi: PPL Mandiri',
        content: '<p>Praktik Pengalaman Lapangan (PPL) Mandiri merupakan fase pemantapan peran saya sebagai calon pendidik profesional secara utuh. Pada tahap ini, saya memegang tanggung jawab penuh dalam merancang, melaksanakan, dan mengevaluasi pembelajaran langsung di sekolah mitra secara mandiri.</p><p>Saya menghadapi tantangan riil dalam pengelolaan kelas, diferensiasi kebutuhan belajar peserta didik, dan penerapan variasi model pembelajaran kejuruan. Bimbingan dari guru pamong dan dosen pembimbing membantu saya melakukan evaluasi reflektif yang mendalam atas setiap tindakan pembelajaran yang telah dilakukan.</p><p>Pengalaman PPL Mandiri ini memperkuat ketahanan mental, adaptabilitas, serta rasa percaya diri saya untuk siap mengemban tugas sebagai guru profesional seutuhnya di dunia pendidikan kejuruan.</p>'
    }
};

function openTextModal(key) {
    const modal = document.getElementById('textModal');
    const title = document.getElementById('reflectionTitle');
    const content = document.getElementById('reflectionContent');
    
    if (reflections[key]) {
        title.innerText = reflections[key].title;
        content.innerHTML = reflections[key].content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeTextModal() {
    const modal = document.getElementById('textModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
