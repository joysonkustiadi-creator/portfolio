export const profile = {
  name: "Joshua Joyson Kustiadi",
  handle: "JoyPro",
  location: "Jakarta, Indonesia",
  email: "joyson.kustiadi@gmail.com",
  github: "https://github.com/joysonkustiadi-creator",
  linkedin: "https://linkedin.com/in/your-handle",

  // Drop your photo at public/portrait.jpg (or .png and update the path).
  // Square crop works best — roughly 600x600.
  portrait: "/portrait.PNG",

  initials: "JJ",
  status: "Open to work",

  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Contact", href: "#contact" },
  ],

  // Set in oversized type at the top of the page, one line each.
  headline: ["SYSTEMS", "PEOPLE", "CAN TRUST"],

  // Cycled one at a time under your name in the hero.
  roles: [
    "machine learning",
    "natural language processing",
    "computer vision",
    "interface design",
    "full-stack products",
  ],

  intro:
    "I build systems that read language for what it is really doing. Most of my work sits where natural language processing meets a question someone actually needs answered — whether a message is trying to manipulate you, which career a student is drifting toward, or how a moral frame shifts over the length of a conversation.",
};

/**
 * Ordered oldest -> newest, so the ridgeline in the hero reads as a climb.
 *
 * elevation (0-100) sets the height of that project's peak in the hero
 * graphic. Keep it roughly ascending and the ridge stays coherent.
 *
 * images - as many screenshots as you like. Drop the files in
 * public/work/ and list them here:
 *
 *   images: [
 *     { src: "/work/scam-shield-1.png", caption: "Detection result" },
 *     { src: "/work/scam-shield-2.png", caption: "Tactic breakdown" },
 *   ],
 *
 * One image renders as a single panel. Two or more add a thumbnail
 * strip underneath. An empty array renders a placeholder.
 * `caption` is optional. 16:9 crop works best, around 1200x675.
 *
 * links - as many as the project has. `label` is the visible text.
 *
 *   links: [
 *     { label: "Live", href: "https://your-app.vercel.app" },
 *     { label: "Source", href: "https://github.com/you/repo" },
 *     { label: "Demo video", href: "https://youtu.be/..." },
 *   ],
 */
export const projects = [
  {
    id: "quickbite",
    name: "QuickBite",
    short: "QuickBite",
    elevation: 26,
    year: "2025",
    kind: "UI / UX",
    summary:
      "A food ordering app prototype, designed in Figma and then tested on 25 real users before anyone defended a single screen.",
    detail:
      "Team of three for a Human-Computer Interaction course. We shipped the prototype as a Figma link with a survey attached, and the useful finding was not the praise - it was that search was the one screen people struggled to locate. We added a search bar to the homepage, enlarged the small type, and weighted the reward labels. We also chose not to change the colour palette: some respondents called it monotonous, but more said it was fine, and changing a design on a minority signal is how you end up designing for whoever answered last.",
    stack: ["Figma", "Prototyping", "Usability testing", "Google Forms"],
    images: [
      { src: "/work/1.png", caption: "Home Page + Prototype" },
      { src: "/work/2.png", caption: "Takeaway Page + Order Summary Page" },
      { src: "/work/3.png", caption: "Delivery Page + Order Summary Page + Track Page" },
    ],
    links: [{ label: "Figma prototype", href: "https://www.figma.com/proto/wl7FO5Qr74wqP7BgYWWQk1/AoL-HCI?node-id=13-134&starting-point-node-id=13%3A134"}],
  },
  {
    id: "smatani",
    name: "SmaTani",
    short: "SmaTani",
    elevation: 30,
    year: "2025",
    kind: "Product & business",
    summary:
      "An urban farming app for city dwellers who want to grow food but do not know where to start - and cannot sell what they grow.",
    detail:
      "Team of two. Started from the empathise stage rather than the feature list: we read urban farming communities to find the actual complaints, which turned out to be education, sourcing, and distribution rather than gardening technique. The prototype covers planting guidance tied to local weather, a marketplace, and courses. I also worked the business side - revenue model, cost structure, and a five-year NPV and IRR on a 150 million rupiah starting cost.",
    stack: ["Figma", "Design thinking", "User personas", "Financial modelling"],
    images: [
      { src: "/work/4.png", caption: "Home Page + Add Plant + AI ChatBot" },
      { src: "/work/5.png", caption: "Prototype" },
      { src: "/work/6.png", caption: "Perceptual Map" },
    ],
    links: [{ label: "Figma prototype", href: "https://www.figma.com/proto/Qh7yF4nzC77TatfVzUX46M/SmaTani?node-id=0-1&t=ul5AoN5SeHTokau6-1"}],
  },
  {
    id: "christian-wijaya",
    name: "Christian Wijaya",
    short: "C. Wijaya",
    elevation: 34,
    year: "2025",
    kind: "Web & UI",
    summary:
      "A luxury fashion house site, designed in Figma and then built - one sentence here on who it was for.",
    detail:
      "Replace this with the part that was hard. Luxury retail is a genre with strict conventions - restraint, enormous imagery, almost no interface - so the interesting question is what you kept from Chanel, LV and Hermes, and what you deliberately did differently. Also worth naming: what changed between the Figma file and the built site, and why.",
    stack: ["Figma", "HTML", "CSS", "JavaScript"],
    images: [
      { src: "/work/7.png", caption: "Figma" },
      { src: "/work/8.png", caption: "Website" },
      { src: "/work/9.png", caption: "Folder Structure" },
    ],
    links: [
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/5ixEC8Ir8tYVE8eEPJ3EjP/Christian-Wijaya?node-id=1-3&t=wrqkUZA9DU8bhHmn-1&starting-point-node-id=1%3A3",
      },
    ],
  },
  {
    id: "bridgecom",
    name: "BridgeCom",
    short: "BridgeCom",
    elevation: 38,
    year: "2025",
    kind: "Product",
    summary:
      "A communication aid built for Samsung Solve for Tomorrow 2025 with team Mindsync Innovator.",
    detail:
      "Scoped, prototyped and pitched under competition deadline. The round where I learned that a clear problem statement beats a clever model - our first pitch led with architecture and lost the room.",
    stack: ["Product design", "Prototyping"],
    images: [
      { src: "/work/10.png", caption: "Wireframe Prototype" },
      { src: "/work/11.png", caption: "Our team and result" },
    ],
    links: [
      {
        label: "Figma prototype",
        href: "https://www.figma.com/board/TwF0FVmV9fLCRXDhsuQnOG/Untitled?node-id=0-1&p=f&t=IRv0TKRNvuTzh6kv-0",
      },
    ],
  },
  {
    id: "plastech",
    name: "PlasTech",
    short: "PlasTech",
    elevation: 46,
    year: "2025",
    kind: "Deep Learning",
    summary:
      "Plastic waste classification from a photo, wrapped in a Streamlit app anyone can open.",
    detail:
      "YOLOv8n for detection, Streamlit for the interface. Deployed rather than demoed - the model runs against images it has never seen, from phone cameras, in bad light. Accuracy on curated test images was never the interesting number.",
    stack: ["YOLOv8n", "Streamlit", "Python"],
    images: [
      { src: "/work/12.png", caption: "Dashboard Page" },
      { src: "/work/13.png", caption: "Detect + Dispose of Waste Page" },
      { src: "/work/14.png", caption: "AI + App Website Folder Structure" },
    ],
    links: [
      {
        label: "Demo Video",
        href: "https://drive.google.com/file/d/1fWkImoO7_3LP5KSfIpo0EnQ7tf7KIVWX/view?usp=sharing",
      },
    ],
  },
  {
    id: "skillswap",
    name: "SkillSwap",
    short: "SkillSwap",
    elevation: 55,
    year: "2026",
    kind: "Mobile app",
    summary:
      "A peer-to-peer skill barter app: you teach what you know to learn what you don't, and no money changes hands.",
    detail:
      "Built in a team of six for a software engineering course. Flutter on the client, Firebase as the whole backend - no custom server. I owned authentication: the sign-up and login screens, and the Firestore security rules. That second part turned out to be the real work. With no server in the middle, the rules are not a formality behind a login gate - they are the only thing standing between one user and another user's data, so every read and write path had to be written and tested as access control rather than as configuration.",
    stack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
    images: [
      { src: "/work/15.png", caption: "Sign in + Sign up Page" },
      { src: "/work/16.png", caption: "Discover + Swaps Page" },
    ],
    links: [
      {
        label: "Promotion + Demo Video",
        href: "https://youtu.be/RTRrui7AVmI?si=6PlB7jr85r7eOGNj",
      },
    ],
  },
  {
    id: "career-predictor",
    name: "Career Path Predictor",
    short: "Career Predictor",
    elevation: 62,
    year: "2026",
    kind: "Applied ML",
    summary:
      "Suggests three plausible career directions for a CS student from their stated interests and skills.",
    detail:
      "TF-IDF into XGBoost, chosen after comparing four models. The real work was finding a data leak that made the first version look far better than it was - scores dropped once I fixed it, which is the point.",
    stack: ["scikit-learn", "XGBoost", "Streamlit"],
    images: [
      { src: "/work/17.png", caption: "Homepage" },
      { src: "/work/18.png", caption: "Analysis Page" },
      { src: "/work/19.png", caption: "Four Model Performance Comparison" },
    ],
    links: [{ label: "Live App", href: "https://cs-career-predictor.streamlit.app/" }],
  },
  {
    id: "moral-trajectory",
    name: "Dynamic Moral Trajectory",
    short: "Moral Trajectory",
    elevation: 82,
    year: "2026",
    kind: "Research",
    summary:
      "Emotional manipulation detection that tracks how moral framing moves across a text, rather than scoring the text as one flat block.",
    detail:
      "Built on Moral Foundation Theory. Roughly 47 engineered features, nine of them trajectory features that are the actual contribution. A stacking ensemble over XGBoost and LightGBM reached 0.822 AUC-ROC. Submitted to ICIMTech as research lead of a five-person team.",
    stack: ["Python", "XGBoost", "LightGBM", "Optuna", "MFT"],
    images: [{ src: "/work/20.png", caption: "Paper + Novelty" },],
    links: [{ label: "Paper", href: "https://drive.google.com/file/d/1ZTmN1931RU2PJ33VmPxzfDNuEV0D-jaF/view?usp=sharing" }],
  },
  {
    id: "scam-shield",
    name: "Scam Shield",
    short: "Scam Shield",
    elevation: 92,
    year: "2026",
    kind: "Product",
    summary:
      "Paste an Indonesian message and get back the specific manipulation tactic it uses - urgency, false authority, isolation - instead of a yes/no verdict.",
    detail:
      "React and Vite on the front, a Vercel serverless function calling the Gemini API on the back. The hard part was not detection but explanation: a score people cannot interpret changes nobody's behaviour.",
    stack: ["React", "Vite", "Vercel Functions", "Gemini API"],
    images: [
      { src: "/work/21.png", caption: "Real World Scam" },
      { src: "/work/22.png", caption: "Comparison between Normal vs Scam" },
    ],
    links: [
      { label: "Live App", href: "https://scam-shield-joy-pro.vercel.app/" },
    ],
  },
];

/**
 * Numbered blocks describing what you actually do.
 *
 * Rule for this section: every line must be traceable to a project
 * listed below it. If you cannot point at the project that proves a
 * line, delete the line rather than soften it.
 */
export const capabilities = [
  {
    title: "Machine learning",
    points: [
      "Feature engineering where the features are the contribution",
      "Six models compared before committing to one",
      "Optuna search and stacked ensembles",
      "Catching the data leak that flattered the first result",
    ],
  },
  {
    title: "Language & vision",
    points: [
      "Manipulation tactics named, not just scored",
      "Moral framing tracked across a text rather than averaged",
      "YOLOv8 trained by transfer learning, not taken off a shelf",
      "Indonesian text as the first case, not an afterthought",
    ],
  },
  {
    title: "Design & user research",
    points: [
      "Figma prototypes carried through to a built interface",
      "Usability tested on real respondents, not teammates",
      "Revisions driven by where people actually got lost",
      "Knowing when feedback does not justify a change",
    ],
  },
  {
    title: "Shipping",
    points: [
      "Streamlit and Flutter apps with real databases behind them",
      "Serverless APIs on Vercel",
      "Firestore rules written as access control, not config",
      "Deployed and reachable, not only demoed",
    ],
  },
  {
    title: "Leading the work",
    points: [
      "Project manager and AI engineer on a three-person build",
      "Research lead on a five-person conference submission",
      "Owning one system inside a six-person team",
      "Writing down the limitations before a reviewer finds them",
    ],
  },
];

/**
 * Counted up when the strip scrolls into view.
 * Replace these with numbers you can actually defend, or delete the
 * section from app/page.jsx if you would rather not have it.
 */
export const stats = [
  { value: 9, suffix: "", label: "Projects completed" },
  { value: 1, suffix: "", label: "Conference paper submitted" },
  { value: 5, suffix: "", label: "Teammates led on research" },
];

export const toolkit = [
  { group: "Languages", items: ["Python", "JavaScript", "SQL", "C"] },
  {
    group: "Machine Learning",
    items: ["scikit-learn", "XGBoost", "LightGBM", "Optuna"],
  },
  {
    group: "Models & Methods",
    items: ["Naive Bayes", "Logistic Regression", "Linear SVM", "Gradient boosting"],
  },
  {
    group: "Computer Vision",
    items: ["YOLOv8 (Ultralytics)", "Transfer learning", "Dataset annotation"],
  },
  { group: "Data Science", items: ["pandas", "NumPy", "Matplotlib", "Seaborn", "SHAP"] },
  { group: "NLP", items: ["TF-IDF", "Moral Foundation Theory"] },
  { group: "Bioinformatics", items: ["BioPython"] },
  { group: "Web", items: ["HTML", "CSS", "React", "Next.js", "Vite", "Vercel"] },
  { group: "Mobile", items: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"] },
  { group: "Database", items: ["MySQL"] },
  { group: "Design", items: ["Figma"] },
  { group: "Tools", items: ["Streamlit", "GitHub"] },
];
