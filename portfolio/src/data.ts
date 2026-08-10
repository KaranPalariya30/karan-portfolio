export const profile = {
  name: "Karan Palariya",
  title: "AI/ML & Backend Engineering Intern Candidate",
  location: "Bhimtal, Uttarakhand, India",
  email: "karanpalariya2@gmail.com",
  phone: "+91 9548116838",
  linkedin: "https://linkedin.com/in/karan-palariya",
  github: "https://github.com/KaranPalariya30",
  summary:
    "CS undergraduate (2027) building production-grade AI systems — retrieval-augmented generation, parameter-efficient fine-tuning, and full-stack ML platforms. Seeking Software Engineering / AI-ML / Backend internships where I can ship systems, not just notebooks.",
};

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "C++", "Java", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    label: "AI / ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "RAG",
      "Embeddings",
      "Cosine-Similarity Retrieval",
      "LoRA / PEFT Fine-Tuning",
      "CNNs",
      "NLP Fundamentals",
      "Computer Vision (OpenCV, MediaPipe)",
    ],
  },
  {
    label: "Backend / Full-Stack",
    items: ["Flask", "React.js", "REST API Design", "MySQL"],
  },
  {
    label: "Cloud & Tools",
    items: [
      "AWS (Certified Cloud Practitioner)",
      "Oracle Cloud Infrastructure (Certified AI Foundations Associate)",
      "Git",
      "GitHub",
      "Jupyter",
    ],
  },
  {
    label: "CS Fundamentals",
    items: [
      "Data Structures & Algorithms (200+ solved)",
      "OOP",
      "DBMS",
      "Computer Architecture",
      "Operating Systems",
      "Compiler Design",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  period: string;
  stack: string[];
  bullets: string[];
  metrics: { label: string; value: string }[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "simplerag",
    name: "SimpleRAG",
    tagline: "Retrieval-Augmented Generation Pipeline",
    period: "2026",
    stack: ["PyTorch", "Cosine Similarity", "Embedding Retrieval"],
    bullets: [
      "Engineered a retrieval-augmented generation pipeline in PyTorch implementing L2-normalized cosine-similarity search and query-document embedding fusion, retrieving top-k relevant passages on a 500-document evaluation corpus.",
      "Reduced irrelevant-context retrieval by fusing query and document representations before ranking.",
      "Designed the module as a reusable retrieval component, later extended into the architecture for DocMind, an agentic enterprise RAG copilot.",
    ],
    metrics: [
      { label: "Top-k accuracy", value: "85%" },
      { label: "Avg. query latency", value: "~140 ms" },
      { label: "Eval corpus", value: "500 docs" },
    ],
  },
  {
    id: "loralinear",
    name: "LoRALinear",
    tagline: "Parameter-Efficient Fine-Tuning Layer",
    period: "2026",
    stack: ["PyTorch", "LoRA (Low-Rank Adaptation)", "From-Scratch Implementation"],
    bullets: [
      "Implemented a LoRA linear layer from first principles per the original paper's specification, using Kaiming-uniform initialization and a custom nn.functional.linear forward/backward pass.",
      "Cut trainable parameters versus full fine-tuning while retaining most of baseline task accuracy, demonstrating hands-on PEFT fundamentals used in modern LLM adaptation.",
      "Verified correctness against a reference LoRA implementation with unit tests covering rank, alpha scaling, and gradient flow.",
    ],
    metrics: [
      { label: "Trainable params cut", value: "~92%" },
      { label: "Accuracy retained", value: "~96%" },
    ],
  },
  {
    id: "medilineage",
    name: "MediLineage",
    tagline: "Full-Stack Healthcare Risk Prediction Platform",
    period: "Aug 2025",
    stack: ["React.js", "Flask", "MySQL", "Scikit-learn"],
    bullets: [
      "Architected and shipped a full-stack platform (React, Flask, MySQL REST backend) that consolidates multi-generational family health history for disease-risk prediction.",
      "Trained and deployed a Random Forest classifier predicting diabetes, cancer, and heart-disease risk from patient and family records.",
      "Debugged and resolved a Lucide-React dependency conflict and cross-browser sidebar-icon rendering failures, stabilizing the release for a 20-user pilot group.",
    ],
    metrics: [
      { label: "Model accuracy", value: "~82%" },
      { label: "Pilot group", value: "20 users" },
    ],
  },
  {
    id: "genmouse",
    name: "GenMouse",
    tagline: "Gesture-Controlled Virtual Mouse",
    period: "Jun 2025",
    stack: ["Python", "Keras", "OpenCV", "MediaPipe"],
    bullets: [
      "Built a real-time computer-vision mouse controller by training a custom CNN on hand-landmark data.",
      "Mapped 6+ recognized gestures to OS-level mouse events (click, scroll, drag) via PyAutoGUI.",
    ],
    metrics: [
      { label: "Gesture accuracy", value: ">90%" },
      { label: "Response latency", value: "~50 ms" },
      { label: "Gestures mapped", value: "6+" },
    ],
  },
];

export const education = [
  {
    school: "Graphic Era Hill University, Bhimtal",
    degree: "B.Tech, Computer Science Engineering",
    period: "Aug 2023 – Jun 2027",
    detail: "SGPA: 8.38 / 10",
  },
  {
    school: "Hermann Gmeiner School, Bhimtal",
    degree: "Intermediate (92.6%) · Matriculation (94.8%)",
    period: "2023 / 2021",
    detail: "",
  },
];

export const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford Online (Andrew Ng), Coursera",
    year: "2026",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Training & Certification",
    year: "2026",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    year: "2025",
  },
];

export const achievements = [
  {
    title: "Team Leader, Smart India Internal Hackathon 2025",
    detail: "Led a 4-person team, coordinating scope and delivery under a fixed deadline.",
  },
  {
    title: "200+ DSA Problems Solved",
    detail: "Across LeetCode and GeeksforGeeks.",
  },
  {
    title: "NCC 'A' Certificate",
    detail: "Grade A recipient.",
  },
  {
    title: "Reliance Undergraduate Scholarship",
    detail: "Awarded for academic merit and technology-driven project contributions.",
  },
  {
    title: "Vivo Scholarship (2023)",
    detail: "Awarded for academic merit and technology-driven project contributions.",
  },
];
