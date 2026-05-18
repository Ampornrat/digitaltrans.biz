// Bilingual content dictionary for Digitaltransform Co., Ltd.
// All strings live here so the language toggle stays trivial.

const COPY = {
  brand: {
    th: { name: "ดิจิทัลทรานฟอร์ม", suffix: "บริษัท จำกัด", short: "DGT" },
    en: { name: "Digitaltransform", suffix: "Co., Ltd.", short: "DGT" },
  },

  nav: {
    th: [
      { id: "home", label: "หน้าหลัก" },
      { id: "about", label: "เกี่ยวกับเรา" },
      { id: "expertise", label: "ความเชี่ยวชาญ" },
      { id: "product", label: "ผลิตภัณฑ์" },
      { id: "cases", label: "ผลงาน" },
      { id: "contact", label: "ติดต่อ" },
    ],
    en: [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "expertise", label: "Expertise" },
      { id: "product", label: "Product" },
      { id: "cases", label: "Case Studies" },
      { id: "contact", label: "Contact" },
    ],
  },

  cta: {
    th: { primary: "เริ่มโครงการกับเรา", secondary: "ดูผลงาน", contact: "นัดคุย 30 นาที" },
    en: { primary: "Start a project", secondary: "See our work", contact: "Book a 30-min intro" },
  },

  hero: {
    th: {
      eyebrow: "ที่ปรึกษาด้านดิจิทัลทรานส์ฟอร์เมชัน",
      headline_pre: "เปลี่ยนผ่านสู่ดิจิทัล ",
      headline_grad: "ออกแบบเพื่อธุรกิจไทย",
      headline_post: ".",
      sub: "เราช่วยบริษัทขนาดกลางในประเทศไทย ปรับปรุงการดำเนินงาน อัตโนมัติกระบวนการทำงาน และเติบโตอย่างมั่นใจ ด้วยกลยุทธ์ที่ใช้งานได้จริงและทีมงานในประเทศ",
      stat1: { num: "80+", label: "ลูกค้าทั่วประเทศ" },
      stat2: { num: "6 ปี", label: "ประสบการณ์ในตลาดไทย" },
      stat3: { num: "32%", label: "ROI เฉลี่ยใน 12 เดือน" },
    },
    en: {
      eyebrow: "Digital Transformation Consultancy",
      headline_pre: "Digital transformation, ",
      headline_grad: "built for Thai businesses",
      headline_post: ".",
      sub: "We help mid-market companies in Thailand modernize operations, automate workflows, and scale with confidence — with practical strategy and an in-country team.",
      stat1: { num: "80+", label: "Clients nationwide" },
      stat2: { num: "6 yrs", label: "In the Thai market" },
      stat3: { num: "32%", label: "Avg. ROI in 12 months" },
    },
  },

  trusted: {
    th: { label: "ไว้วางใจโดยองค์กรชั้นนำในประเทศไทย" },
    en: { label: "Trusted by leading organizations across Thailand" },
    logos: ["SiamCraft", "Krungthai Foods", "BluePeak Logistics", "Nidhi Manufacturing", "Sukhumvit Retail", "Andaman Health", "PTG Holdings", "Thanachart Mills"],
  },

  about: {
    th: {
      eyebrow: "เกี่ยวกับเรา",
      title: "เราเชื่อว่าการเปลี่ยนผ่านสู่ดิจิทัล ต้องเริ่มจากคน ไม่ใช่เทคโนโลยี",
      lead: "ดิจิทัลทรานฟอร์มก่อตั้งขึ้นในปี 2563 ที่กรุงเทพมหานคร โดยทีมที่ปรึกษาที่มีประสบการณ์ในบริษัทเทคโนโลยีระดับโลกและธุรกิจครอบครัวในประเทศไทย เราเข้าใจดีว่าการเปลี่ยนแปลงในองค์กรไทยมีความซับซ้อนเฉพาะตัว",
      body: "เราไม่ขายสไลด์สวยๆ แต่ขายผลลัพธ์ที่วัดได้ ทุกโครงการของเราเริ่มจากการทำความเข้าใจธุรกิจของลูกค้าอย่างลึกซึ้ง แล้วค่อยออกแบบเส้นทางการเปลี่ยนผ่านที่เหมาะกับวัฒนธรรมและทรัพยากรของแต่ละบริษัท",
      values: [
        { k: "01", t: "ปฏิบัติได้จริง", d: "เราเริ่มจากปัญหาธุรกิจที่จับต้องได้ ไม่ใช่เทคโนโลยีล่าสุด" },
        { k: "02", t: "ผลลัพธ์วัดได้", d: "ทุก KPI ที่ตั้งร่วมกัน เรารายงานความคืบหน้าทุก 2 สัปดาห์" },
        { k: "03", t: "ทีมในประเทศ", d: "ที่ปรึกษาทุกคนทำงานในประเทศไทย พูดภาษาธุรกิจของคุณ" },
        { k: "04", t: "ส่งมอบความรู้", d: "เป้าหมายของเราคือทำให้คุณไม่ต้องพึ่งเราในระยะยาว" },
      ],
    },
    en: {
      eyebrow: "About us",
      title: "We believe digital transformation starts with people, not technology.",
      lead: "Digitaltransform was founded in 2020 in Bangkok by consultants with backgrounds in global tech firms and Thai family businesses. We understand the unique complexity of change inside Thai organizations.",
      body: "We don't sell pretty slides — we sell measurable outcomes. Every engagement starts with deeply understanding our client's business, then designing a transformation path that fits their culture and resources.",
      values: [
        { k: "01", t: "Pragmatic", d: "We start with tangible business problems, not the latest technology." },
        { k: "02", t: "Outcome-driven", d: "Every KPI we set together is reported on every two weeks." },
        { k: "03", t: "In-country team", d: "All consultants work from Thailand and speak your business language." },
        { k: "04", t: "Knowledge transfer", d: "Our goal is for you to not need us in the long run." },
      ],
    },
  },

  expertise: {
    th: {
      eyebrow: "ความเชี่ยวชาญ",
      title: "หกความสามารถหลัก ที่นำมาประกอบกันในทุกโครงการ",
      areas: [
        { n: "01", t: "กลยุทธ์ดิจิทัล", d: "ประเมินวุฒิภาวะดิจิทัล จัดทำแผนแม่บท และจัดลำดับการลงทุน 3-5 ปี", tags: ["Maturity Assessment", "Roadmap", "Business Case"] },
        { n: "02", t: "ระบบอัตโนมัติ", d: "ออกแบบและติดตั้งระบบ workflow, RPA, และ low-code เพื่อลดงาน manual", tags: ["RPA", "Workflow", "Low-code"] },
        { n: "03", t: "คลาวด์และโครงสร้างพื้นฐาน", d: "ย้ายระบบขึ้นคลาวด์อย่างปลอดภัย พร้อม FinOps ควบคุมค่าใช้จ่าย", tags: ["AWS", "Azure", "FinOps"] },
        { n: "04", t: "ข้อมูลและการวิเคราะห์", d: "วาง data foundation, สร้าง dashboard ผู้บริหาร และเริ่ม use case AI ที่จับต้องได้", tags: ["Data Lake", "BI", "AI/ML"] },
        { n: "05", t: "การบริหารการเปลี่ยนแปลง", d: "อบรมพนักงาน, ออกแบบ change campaign, และวัด adoption ของระบบใหม่", tags: ["Training", "Adoption", "Comms"] },
        { n: "06", t: "ความปลอดภัยไซเบอร์", d: "ตรวจสอบจุดเสี่ยง วาง security baseline และเตรียมความพร้อม PDPA", tags: ["Audit", "PDPA", "Zero Trust"] },
      ],
    },
    en: {
      eyebrow: "Expertise",
      title: "Six core capabilities, combined to fit every engagement.",
      areas: [
        { n: "01", t: "Digital Strategy", d: "Maturity assessments, master plans, and 3–5 year investment prioritization.", tags: ["Maturity Assessment", "Roadmap", "Business Case"] },
        { n: "02", t: "Process Automation", d: "Design and deploy workflow, RPA and low-code systems to remove manual work.", tags: ["RPA", "Workflow", "Low-code"] },
        { n: "03", t: "Cloud & Infrastructure", d: "Migrate systems to cloud securely, with FinOps in place to control spend.", tags: ["AWS", "Azure", "FinOps"] },
        { n: "04", t: "Data & Analytics", d: "Lay the data foundation, build executive dashboards, and ship tangible AI use cases.", tags: ["Data Lake", "BI", "AI/ML"] },
        { n: "05", t: "Change Management", d: "Staff training, change campaigns, and adoption measurement for new systems.", tags: ["Training", "Adoption", "Comms"] },
        { n: "06", t: "Cybersecurity", d: "Risk audits, security baselines, and PDPA-readiness for Thai businesses.", tags: ["Audit", "PDPA", "Zero Trust"] },
      ],
    },
  },

  product: {
    th: {
      eyebrow: "ผลิตภัณฑ์",
      title: "เครื่องมือที่เราใช้ส่งมอบการเปลี่ยนแปลง",
      sub: "เราไม่ได้เป็นแค่ที่ปรึกษา เราพัฒนาเครื่องมือของเราเองเพื่อให้ลูกค้าใช้งานได้ทันที พร้อมการสนับสนุนภาษาไทยเต็มรูปแบบ",
      items: [
        {
          tag: "Platform",
          name: "TransformOS",
          tagline: "ระบบจัดการการดำเนินงานสำหรับ SME",
          desc: "ดึงข้อมูลจากระบบเดิม รวมเข้าด้วยกัน และสร้าง single source of truth สำหรับทีมผู้บริหาร พร้อมแดชบอร์ดสำเร็จรูป 12 แบบ",
          bullets: ["รวมข้อมูลจาก ERP, CRM, POS", "แดชบอร์ดผู้บริหารแบบเรียลไทม์", "รองรับ PDPA ตามมาตรฐานไทย", "พร้อมใช้งานใน 30 วัน"],
          price: "เริ่มต้น ฿28,000 / เดือน",
        },
        {
          tag: "Automation",
          name: "FlowAuto",
          tagline: "ระบบ workflow และอัตโนมัติแบบ no-code",
          desc: "สร้างกระบวนการอนุมัติ, แจ้งเตือน, และเชื่อมต่อระหว่างแอปต่างๆ โดยไม่ต้องเขียนโค้ด ออกแบบสำหรับทีมในประเทศไทย",
          bullets: ["เชื่อมต่อ LINE, Email, Google Workspace", "เทมเพลตสำหรับธุรกิจไทย 40+ แบบ", "audit log ครบถ้วน", "อบรมทีมงานฟรี 3 ครั้ง"],
          price: "เริ่มต้น ฿12,000 / เดือน",
        },
        {
          tag: "Analytics",
          name: "InsightHub",
          tagline: "Business intelligence ที่ผู้บริหารใช้งานได้จริง",
          desc: "วิเคราะห์ยอดขาย, สต็อก, และพนักงาน ในที่เดียว พร้อมการแจ้งเตือนเมื่อมีตัวเลขผิดปกติ และรายงานอัตโนมัติส่งเข้า LINE",
          bullets: ["รายงาน 80+ แบบสำเร็จรูป", "AI ตรวจจับความผิดปกติ", "ส่งรายงานเข้า LINE / Email", "รองรับ multi-branch"],
          price: "เริ่มต้น ฿18,000 / เดือน",
        },
      ],
    },
    en: {
      eyebrow: "Product",
      title: "The tools we use to deliver change.",
      sub: "We're more than a consultancy. We build our own tools so clients can start day one — with full Thai-language support.",
      items: [
        {
          tag: "Platform",
          name: "TransformOS",
          tagline: "Operations management for the mid-market.",
          desc: "Pulls data from legacy systems, unifies it, and creates a single source of truth for the leadership team — with 12 ready-made executive dashboards.",
          bullets: ["Connects ERP, CRM and POS sources", "Real-time executive dashboards", "PDPA-compliant by default", "Live in 30 days"],
          price: "From ฿28,000 / month",
        },
        {
          tag: "Automation",
          name: "FlowAuto",
          tagline: "No-code workflow and automation.",
          desc: "Build approval flows, notifications and inter-app integrations without writing code — designed for teams operating in Thailand.",
          bullets: ["Connects LINE, Email, Google Workspace", "40+ templates for Thai businesses", "Complete audit log", "3 free training sessions"],
          price: "From ฿12,000 / month",
        },
        {
          tag: "Analytics",
          name: "InsightHub",
          tagline: "BI that executives actually use.",
          desc: "Analyze sales, inventory and headcount in one place, with anomaly alerts and automated reports delivered straight to LINE.",
          bullets: ["80+ ready-made report templates", "AI anomaly detection", "Reports to LINE / Email", "Multi-branch ready"],
          price: "From ฿18,000 / month",
        },
      ],
    },
  },

  cases: {
    th: {
      eyebrow: "ผลงาน",
      title: "การเปลี่ยนแปลงที่วัดผลได้ จากลูกค้าจริง",
      items: [
        {
          industry: "การผลิต",
          client: "Nidhi Manufacturing",
          headline: "ลดเวลานำส่งสินค้าได้ 40% ภายใน 8 เดือน",
          body: "ออกแบบใหม่กระบวนการ production planning, ติดตั้งระบบ MES, และฝึกอบรมหัวหน้างาน 80 คน",
          metrics: [{ k: "−40%", v: "Lead time" }, { k: "+18%", v: "OEE" }, { k: "฿14M", v: "ประหยัดต่อปี" }],
        },
        {
          industry: "ค้าปลีก",
          client: "Sukhumvit Retail",
          headline: "รวม POS 47 สาขา และข้อมูลสต็อกในระบบเดียว",
          body: "ย้ายระบบเก่าขึ้นคลาวด์, รวมข้อมูลสต็อกแบบเรียลไทม์, และสร้างแดชบอร์ดสำหรับผู้จัดการเขต",
          metrics: [{ k: "47", v: "สาขาเชื่อมต่อ" }, { k: "−62%", v: "Stockout" }, { k: "12 wk", v: "เวลาส่งมอบ" }],
        },
        {
          industry: "โลจิสติกส์",
          client: "BluePeak Logistics",
          headline: "ระบบจัดส่งอัตโนมัติ ลดต้นทุนต่อรอบ 27%",
          body: "วาง dispatch algorithm, สร้างแอปคนขับ, และเชื่อมต่อกับลูกค้าผ่าน API พร้อมแดชบอร์ดติดตาม",
          metrics: [{ k: "−27%", v: "ต้นทุนต่อรอบ" }, { k: "3.2x", v: "Throughput" }, { k: "92%", v: "On-time" }],
        },
      ],
    },
    en: {
      eyebrow: "Case studies",
      title: "Measurable change, from real clients.",
      items: [
        {
          industry: "Manufacturing",
          client: "Nidhi Manufacturing",
          headline: "Cut lead time by 40% in 8 months.",
          body: "Redesigned production planning, deployed an MES system, and trained 80 line supervisors on the new process.",
          metrics: [{ k: "−40%", v: "Lead time" }, { k: "+18%", v: "OEE" }, { k: "฿14M", v: "Annual savings" }],
        },
        {
          industry: "Retail",
          client: "Sukhumvit Retail",
          headline: "Unified POS across 47 stores in one system.",
          body: "Migrated legacy systems to the cloud, unified real-time inventory, and built a regional manager dashboard.",
          metrics: [{ k: "47", v: "Stores connected" }, { k: "−62%", v: "Stockout rate" }, { k: "12 wk", v: "Delivery time" }],
        },
        {
          industry: "Logistics",
          client: "BluePeak Logistics",
          headline: "Automated dispatch cut cost-per-trip by 27%.",
          body: "Built a dispatch algorithm, driver mobile app, and customer API — with a real-time ops dashboard on top.",
          metrics: [{ k: "−27%", v: "Cost / trip" }, { k: "3.2x", v: "Throughput" }, { k: "92%", v: "On-time" }],
        },
      ],
    },
  },

  team: {
    th: {
      eyebrow: "ความเชี่ยวชาญ",
      title: "ความเชี่ยวชาญของเรา",
      lead: "เพื่อยกระดับบริการจากการอบรม IT เฉพาะทาง สู่การทรานส์ฟอร์ม AI ระดับองค์กรอย่างครบวงจร เราจึงประกอบทีมที่ปรึกษาคุณภาพสูง ที่เชื่อมช่องว่างระหว่างห้องเรียนกับผลลัพธ์ทางธุรกิจจริง ผ่านการให้คำปรึกษาเชิงกลยุทธ์ และสถาปัตยกรรมข้อมูลและ AI ขั้นสูง",
      members: [
        {
          role: "IT Project Management & Digital Transformation Consultant",
          tagline: "The Delivery Architect for Government IT & Enterprise AI Adoption",
          bullets: [
            { h: "29+ Years of Government & Enterprise Delivery", b: "ส่งมอบโครงการ IT ขนาดใหญ่ให้กระทรวงและหน่วยงานหลักของไทย — กระทรวงเกษตรฯ กระทรวงการคลัง กระทรวงทรัพยากรธรรมชาติฯ กรมทางหลวง ป.ป.ช. กฟภ. และกรมควบคุมโรค" },
            { h: "End-to-End IT Project Management", b: "เชี่ยวชาญตั้งแต่เก็บความต้องการ จัดทำ TOR วางแผนทรัพยากร ออกแบบระบบ และรายงานผู้มีส่วนได้ส่วนเสีย ได้รับการรับรอง LPMT Method (ม.เกษตรศาสตร์)" },
            { h: "Digital Health & Smart Platform Delivery", b: "นำส่ง Health Platform ของโรงพยาบาลค่ายวชิราวุธ (Smart OPD, Digital Healthcare Platform, Personal Health Mobile App) และ Phuket Health Sandbox จังหวัดภูเก็ต" },
            { h: "AI-Augmented Project Management", b: "ใช้เครื่องมือ AI ติดตามโครงการ พยากรณ์ความเสี่ยง และเพิ่มประสิทธิภาพทรัพยากร ลดเวลาการรายงานและเพิ่มความแม่นยำของการส่งมอบ" },
            { h: "Intelligent Document & Data Processing", b: "ติดตั้งระบบจำแนกเอกสารด้วย AI, OCR pipeline และการสกัดข้อมูลโครงสร้าง เปลี่ยนเอกสารราชการเดิมให้เป็นข้อมูลพร้อมวิเคราะห์" },
            { h: "RAG-Ready System Design", b: "ออกแบบสถาปัตยกรรมที่รองรับโมเดล Retrieval-Augmented Generation (RAG) ให้หน่วยงานราชการค้นข้อมูลภายในด้วยภาษาธรรมชาติได้อย่างปลอดภัย" },
            { h: "IT Master Planning", b: "ออกแบบ IT Master Plan 2558–2563 ให้สำนักงาน ป.ป.ช. ครอบคลุมธรรมาภิบาล IT โครงสร้างพื้นฐานดิจิทัล และยุทธศาสตร์ interoperability" },
            { h: "Data Interoperability & Standards", b: "นำทำ Data Standard and Interoperability Roadmap (DSIR) ให้ กฟภ. วางกรอบสถาปัตยกรรมข้อมูลสำหรับแลกเปลี่ยนข้อมูลข้ามหน่วยงาน" },
          ],
        },
        {
          role: "Technology Executive & Transformation Consultant",
          tagline: "The Execution Architect for Enterprise AI & Digital Transformation",
          bullets: [
            { h: "Founder & CEO of Nexto Co., Ltd.", b: "นำบริษัทเทคโนโลยีไทยที่มีพอร์ตผลิตภัณฑ์ของตนเอง — Saaniq (AI website builder สำหรับ SME), Endyra (operations ด้านส่องกล้อง), Manverra (MES และ traceability) และ Careyra (telemedicine) ควบคู่กับงาน enterprise delivery ให้กรมควบคุมโรค กระทรวงสาธารณสุข และเอกชนชั้นนำ" },
            { h: "Technology Organization Builder", b: "ในฐานะ CTO สร้างทีมวิศวกรรม 50 คนจากศูนย์ภายใน 24 เดือน ส่งมอบโครงการ Smart City และ HealthTech 8 โครงการรวม ~100 ล้านบาท uptime 99.9% retention 90%+ และปล่อย DevSecOps รายสัปดาห์บน Kubernetes และ Google Cloud" },
            { h: "Operational Turnaround Executive", b: "ในฐานะ MD ขยาย gross margin จาก 18% เป็น 22% ลด OPEX 15% ยืด cash runway จาก 3 เป็น 7 เดือน และลด DSO จาก 60 เป็น 30 วันในช่วงตลาดขาลง" },
            { h: "Practical AI in Production", b: "ฝัง AI ในงานวิศวกรรมและ data ops — code review, security scanning อัตโนมัติ และ data cleansing สำหรับแดชบอร์ดผู้บริหาร โดยมี human-in-the-loop governance" },
            { h: "Executive MBA, Chulalongkorn University", b: "ครอบคลุมการบริหารเชิงกลยุทธ์ การวางแผนการเงิน และการทรานส์ฟอร์มธุรกิจดิจิทัล สื่อสารได้ทั้งภาษาวิศวกรและภาษา ROI ของบอร์ดและคณะกรรมการลงทุน" },
          ],
        },
        {
          role: "Strategy and Management Consultant",
          tagline: "The Strategic Consultant for Business Scalability and Investment Readiness",
          bullets: [
            { h: "Strategic Roadmap Architect", b: "เชี่ยวชาญในการแปลงโจทย์ธุรกิจที่ซับซ้อนให้เป็น roadmap เชิงกลยุทธ์ที่นำไปปฏิบัติได้และวัดผลการเติบโตได้จริง" },
            { h: "Strategic Business Diagnosis", b: "เชี่ยวชาญการจัดทำรายงาน Business Organization Diagnosis ครอบคลุมการตรวจสุขภาพการเงินและระบุคอขวดเชิงปฏิบัติการ" },
            { h: "13+ Years of Experience", b: "ประสบการณ์บริหารความสัมพันธ์ผู้บริหารระดับ C-suite และผลักดัน business development ให้บริษัทเทคโนโลยี" },
            { h: "Market Entry & Expansion", b: "เชี่ยวชาญกลยุทธ์เข้าตลาดที่ขับเคลื่อนด้วยข้อมูล ช่วยองค์กรขยายสู่ ASEAN และตลาดโลกอย่างมั่นใจ" },
          ],
        },
        {
          role: "AI and Data Consultant",
          tagline: "The Technical Visionary for AI Architecture and Data Excellence",
          bullets: [
            { h: "Ph.D.-Level Expert", b: "ผู้เชี่ยวชาญด้าน Information Science ระดับปริญญาเอก เน้นสร้าง AI-driven insights ที่ทนทาน ปลอดภัย และขยายได้ เพื่อสนับสนุนการตัดสินใจ" },
            { h: "Senior Data Scientist (BDI)", b: "ประสบการณ์จาก Big Data Institute ในการบริหารโครงการข้อมูลขนาดใหญ่ และติดตั้งระบบวิเคราะห์ขั้นสูงทั้งภาครัฐและเอกชน" },
            { h: "Award-Winning Innovation", b: "ผู้ชนะ GeoHackathon 2025 (GISTDA) แสดงถึงความสามารถระดับโลกในการนำโมเดล AI/ML ไปใช้กับข้อมูลโลกจริงที่ซับซ้อน" },
            { h: "Advanced Data Architect", b: "เชี่ยวชาญการออกแบบ Digital Transformation Roadmap และติดตั้ง custom RAG (Retrieval-Augmented Generation) รวมถึง predictive analytics" },
          ],
        },
      ],
    },
    en: {
      eyebrow: "Expertise",
      title: "Our expertise.",
      lead: "To elevate offerings from specialized IT training to comprehensive Enterprise AI Transformation, we present a high-caliber consultant team. Our mission is to bridge the gap between classroom learning and real-world business impact through strategic advisory and advanced data and AI architecture.",
      members: [
        {
          role: "IT Project Management & Digital Transformation Consultant",
          tagline: "The Delivery Architect for Government IT & Enterprise AI Adoption",
          bullets: [
            { h: "29+ Years of Government & Enterprise Delivery", b: "Proven track record managing large-scale IT projects for Thailand's key ministries and agencies — Ministry of Agriculture, Ministry of Finance, Ministry of Natural Resources, Department of Highways, NACC, PEA, and the Department of Disease Control." },
            { h: "End-to-End IT Project Management", b: "Expert in requirements gathering, TOR preparation, resource planning, system design, and stakeholder reporting. Certified in IT Project Management using the LPMT Method (Kasetsart University)." },
            { h: "Digital Health & Smart Platform Delivery", b: "Led delivery of the Health Platform for Fort Wachirawut Hospital (Smart OPD, Digital Healthcare Platform, Personal Health Mobile App) and the Phuket Health Sandbox for Phuket Province." },
            { h: "AI-Augmented Project Management", b: "Applies AI-powered tools for automated project tracking, risk forecasting, and resource optimization — reducing manual reporting time and improving delivery predictability across multi-stakeholder environments." },
            { h: "Intelligent Document & Data Processing", b: "Implements AI-driven document classification, OCR pipelines, and structured data extraction to transform legacy government records into machine-readable, analysis-ready datasets." },
            { h: "RAG-Ready System Design", b: "Experienced in designing system architectures that integrate Retrieval-Augmented Generation (RAG) models, enabling government clients to query internal knowledge bases securely using natural language." },
            { h: "IT Master Planning", b: "Designed the IT Master Plan 2015–2020 for the Office of the National Anti-Corruption Commission (NACC), covering IT governance, digital infrastructure, and interoperability strategy." },
            { h: "Data Interoperability & Standards", b: "Led the Data Standard and Interoperability Roadmap (DSIR) for Provincial Electricity Authority (PEA), establishing data architecture frameworks for cross-agency data exchange." },
          ],
        },
        {
          role: "Technology Executive & Transformation Consultant",
          tagline: "The Execution Architect for Enterprise AI & Digital Transformation",
          bullets: [
            { h: "Founder & CEO of Nexto Co., Ltd.", b: "Leading a Thai technology firm with a proprietary product portfolio — Saaniq (AI website builder for SMEs), Endyra (endoscopy operations), Manverra (manufacturing execution and traceability), and Careyra (telemedicine) — alongside custom enterprise delivery for government and healthcare clients including the Department of Disease Control, Ministry of Public Health, and leading private-sector organizations." },
            { h: "Technology Organization Builder", b: "As CTO, built a 50-person engineering organization from zero in 24 months — delivering 8 flagship Smart City and HealthTech programs worth ~THB 100M with 99.9% uptime, 90%+ team retention, and weekly DevSecOps release cadence on Kubernetes and Google Cloud." },
            { h: "Operational Turnaround Executive", b: "As Managing Director, expanded gross margin from 18% to 22%, cut operating expenses by 15%, extended cash runway from 3 to 7 months, and reduced DSO from 60 to 30 days during market downturn — demonstrating full-stack P&L discipline alongside technical leadership." },
            { h: "Practical AI in Production", b: "Embedded AI into engineering and data operations — AI-driven code review, automated security scanning, and AI-powered data cleansing for executive dashboards with mandatory human-in-the-loop governance. AI that ships and sustains, not AI that stalls at pilot." },
            { h: "Executive MBA, Chulalongkorn University", b: "Strategic management, financial planning, and digital business transformation — fluent in both the architectural language of engineers and the ROI language of boards and investment committees." },
          ],
        },
        {
          role: "Strategy and Management Consultant",
          tagline: "The Strategic Consultant for Business Scalability and Investment Readiness",
          bullets: [
            { h: "Strategic Roadmap Architect", b: "Expert in translating complex corporate challenges into actionable strategic roadmaps that drive measurable growth." },
            { h: "Strategic Business Diagnosis", b: "Specialized in conducting comprehensive Business Organization Diagnosis reports, including financial health checks and operational bottleneck identification." },
            { h: "13+ Years of Experience", b: "Proven track record in managing high-level stakeholder relationships (C-suite) and driving business development for tech-driven firms." },
            { h: "Market Entry & Expansion", b: "Expert in data-driven market entry strategies, helping organizations scale confidently into new territories like ASEAN and global markets." },
          ],
        },
        {
          role: "AI and Data Consultant",
          tagline: "The Technical Visionary for AI Architecture and Data Excellence",
          bullets: [
            { h: "Ph.D.-Level Expert", b: "A Ph.D.-level expert in Information Science with a focus on building robust, secure, and scalable AI-driven insights for decision-making." },
            { h: "Senior Data Scientist (BDI)", b: "Extensive experience at the Big Data Institute managing large-scale data projects and implementing sophisticated analytics for both government and private sectors." },
            { h: "Award-Winning Innovation", b: "Winner of the GeoHackathon 2025 (GISTDA), demonstrating world-class ability in deploying AI/ML models tailored to complex, real-world data environments." },
            { h: "Advanced Data Architect", b: "Expert in designing Digital Transformation Roadmaps and implementing custom RAG (Retrieval-Augmented Generation) and predictive analytics solutions." },
          ],
        },
      ],
    },
  },

  contact: {
    th: {
      eyebrow: "ติดต่อเรา",
      title: "พร้อมเริ่มต้นการเปลี่ยนแปลง?",
      sub: "ปรึกษาฟรี 30 นาที กับผู้เชี่ยวชาญของเรา เพื่อประเมินสถานการณ์และวางแผนเบื้องต้น",
      labels: { name: "ชื่อ-นามสกุล", company: "บริษัท", email: "อีเมล", phone: "เบอร์โทรศัพท์", topic: "หัวข้อที่สนใจ", message: "ข้อความ", submit: "ส่งข้อความ" },
      topics: ["กลยุทธ์ดิจิทัล", "ระบบอัตโนมัติ", "คลาวด์", "ข้อมูลและ AI", "ความปลอดภัย", "อื่นๆ"],
      info: {
        address: "134/362 พลัส ซิตี้ พาร์ค สนามบินน้ำ ถนนนนทบุรี ตำบลท่าสาย อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 11000",
        phone: "+66 92 536 9797",
        email: "ampornrat.n@gmail.com",
        hours: "จันทร์–ศุกร์ 9:00–18:00",
      },
    },
    en: {
      eyebrow: "Contact",
      title: "Ready to start the change?",
      sub: "Free 30-minute consultation with one of our experts to assess your situation and sketch a first plan.",
      labels: { name: "Full name", company: "Company", email: "Email", phone: "Phone", topic: "Topic", message: "Message", submit: "Send message" },
      topics: ["Digital Strategy", "Process Automation", "Cloud", "Data & AI", "Security", "Other"],
      info: {
        address: "134/362, Plus City Park Sanambin-Nam, Nontaburi Rd., Tasai, Mueng-Nontaburi, Nontaburi, 11000",
        phone: "+66 92 536 9797",
        email: "ampornrat.n@gmail.com",
        hours: "Mon–Fri 09:00–18:00",
      },
    },
  },

  footer: {
    th: {
      tagline: "ที่ปรึกษาด้านดิจิทัลทรานส์ฟอร์เมชัน สำหรับธุรกิจขนาดกลางในประเทศไทย",
      cols: [
        { h: "บริษัท", links: ["เกี่ยวกับเรา", "ทีมงาน", "ร่วมงานกับเรา", "ข่าวสาร"] },
        { h: "บริการ", links: ["กลยุทธ์ดิจิทัล", "ระบบอัตโนมัติ", "คลาวด์", "ข้อมูลและ AI"] },
        { h: "ผลิตภัณฑ์", links: ["TransformOS", "FlowAuto", "InsightHub"] },
        { h: "ทรัพยากร", links: ["บทความ", "งานวิจัย", "เครื่องมือประเมิน", "Help Center"] },
      ],
      legal: "© 2026 บริษัท ดิจิทัลทรานฟอร์ม จำกัด — เลขประจำตัวผู้เสียภาษี 0105563012345",
    },
    en: {
      tagline: "Digital transformation consultancy for Thai mid-market businesses.",
      cols: [
        { h: "Company", links: ["About", "Team", "Careers", "News"] },
        { h: "Services", links: ["Digital Strategy", "Automation", "Cloud", "Data & AI"] },
        { h: "Product", links: ["TransformOS", "FlowAuto", "InsightHub"] },
        { h: "Resources", links: ["Articles", "Research", "Assessment tools", "Help center"] },
      ],
      legal: "© 2026 Digitaltransform Co., Ltd. — Tax ID 0105563012345",
    },
  },
};

window.COPY = COPY;
