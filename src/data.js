export const profile = {
  name: 'Shrinjoyee Chatterjee',
  tagline: 'Engineering Intelligence from Data',
  roles: ['Data Analyst', 'ML Engineer', 'SDE', 'AI Engineer', 'Data Scientist'],
  email: 'shrinjoyee30@gmail.com',
  github: 'https://github.com/shrini30',
  linkedin: 'https://linkedin.com/in/shrinjoyee-chatterjee-1a0975266/',
  resumeUrl: 'https://drive.google.com/file/d/1tBb81sdkt9GucxIGpDn0kpK_DU-axYfp/view?usp=sharing',
}

export const about = `Computer Science Engineer with a strong foundation in data analytics, machine learning, and intelligent system design. I transform raw, complex data into actionable insights and build production-ready ML pipelines. My work spans structured data analysis, deep learning for computer vision, NLP-driven knowledge systems, and end-to-end software engineering — always with a focus on measurable impact.`

export const skills = {
  Programming: ['Python', 'C++', 'SQL', 'JavaScript', 'Groovy', 'Bash'],
  'Machine Learning / AI': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'CNN', 'NLP', 'LLMs', 'YOLO', 'OpenCV'],
  'Data Tools': ['Pandas', 'NumPy', 'Excel', 'Power BI', 'Matplotlib', 'Seaborn', 'Neo4j', 'MySQL'],
  'Core CS': ['DSA', 'OS', 'DBMS', 'Computer Networks', 'OOP', 'System Design'],
}

export const experience = [
  {
    company: 'Nordex Acciona',
    role: 'Data Analyst Intern / GET',
    period: '2026',
    location: 'India',
    points: [
      'Built Python (Pandas, NumPy) pipelines to validate and clean large-scale wind turbine sensor datasets',
      'Automated reporting workflows using Groovy scripts, reducing manual effort by ~60%',
      'Developed predictive insight models to flag anomalies in operational data',
      'Collaborated with engineering teams to translate data findings into actionable decisions',
    ],
    tags: ['Python', 'Pandas', 'NumPy', 'Groovy', 'Data Validation'],
  },
  {
    company: 'Eldyne Group',
    role: 'IT Support Intern',
    period: '2025',
    location: 'India',
    points: [
      'Debugged and resolved critical system and API integration issues across internal tools',
      'Optimized system performance through targeted configuration and process improvements',
      'Documented technical workflows and created internal knowledge base articles',
    ],
    tags: ['APIs', 'System Optimization', 'Debugging', 'Technical Support'],
  },
]

export const projects = [
  {
    id: 'knowledgegram',
    title: 'KnowledgeGram',
    subtitle: 'Knowledge Graph + NLP Engine',
    problem: 'Unstructured text data lacks relational context, making knowledge retrieval slow and inaccurate.',
    tech: ['Python', 'Neo4j', 'NLP', 'SpaCy', 'Knowledge Graphs', 'NetworkX'],
    outcome: 'Built an NLP pipeline that extracts entities and relationships from text, stores them in a Neo4j graph, and enables semantic querying — reducing knowledge retrieval time significantly.',
    impact: 'Enables intelligent Q&A over unstructured corpora with graph-based reasoning.',
    roles: ['AI Engineer', 'ML Engineer', 'Data Scientist'],
    github: 'https://github.com/shrinjoyee/knowledgegram',
    color: '#2dd4bf',
  },
  {
    id: 'traffic',
    title: 'Smart Traffic System',
    subtitle: 'Real-time Vehicle Detection & Flow Optimization',
    problem: 'Static traffic signals cause unnecessary congestion and inefficient road utilization.',
    tech: ['Python', 'YOLO', 'OpenCV', 'Deep Learning', 'TensorFlow'],
    outcome: 'Deployed YOLOv8-based real-time vehicle detection system that dynamically adjusts signal timing based on live traffic density.',
    impact: 'Demonstrated 30%+ reduction in simulated wait times vs. fixed-cycle signals.',
    roles: ['ML Engineer', 'AI Engineer', 'Data Scientist'],
    github: 'https://github.com/shrinjoyee/smart-traffic',
    color: '#e8621a',
  },
  {
    id: 'skincancer',
    title: 'Skin Cancer Detection',
    subtitle: 'CNN-based Medical Image Classifier',
    problem: 'Early-stage skin cancer detection requires expert dermatologists — inaccessible in resource-limited settings.',
    tech: ['Python', 'TensorFlow', 'CNN', 'Keras', 'Image Processing', 'Transfer Learning'],
    outcome: 'Trained a CNN classifier on dermoscopy images achieving 92%+ accuracy in distinguishing malignant vs. benign lesions.',
    impact: 'Provides a low-cost screening tool that can assist medical professionals in early diagnosis.',
    roles: ['ML Engineer', 'Data Scientist', 'AI Engineer'],
    github: 'https://github.com/shrinjoyee/skin-cancer-detection',
    color: '#f0a500',
  },
  {
    id: 'appreviews',
    title: 'App Review Trend Analysis',
    subtitle: 'LLM-powered Insight Extraction',
    problem: 'Product teams struggle to extract actionable signals from thousands of unstructured app reviews.',
    tech: ['Python', 'LLMs', 'NLP', 'Pandas', 'Transformers', 'Matplotlib'],
    outcome: 'Built an NLP pipeline using transformer models to cluster, summarize, and trend-analyze app reviews at scale.',
    impact: 'Surfaced key product pain points and feature requests, enabling data-driven product decisions.',
    roles: ['Data Analyst', 'Data Scientist', 'AI Engineer'],
    github: 'https://github.com/shrinjoyee/app-review-analysis',
    color: '#c9a84c',
  },
  {
    id: 'twitter',
    title: 'Twitter Sentiment Analysis',
    subtitle: 'Real-time Social Media Intelligence',
    problem: 'Brands lack real-time visibility into public sentiment around their products and campaigns.',
    tech: ['Python', 'NLP', 'NLTK', 'Scikit-learn', 'Pandas', 'SQL', 'Visualization'],
    outcome: 'Developed a sentiment classification pipeline processing live tweet streams with 89% accuracy using fine-tuned NLP models.',
    impact: 'Enables real-time brand monitoring and crisis detection from social data.',
    roles: ['Data Analyst', 'ML Engineer', 'Data Scientist'],
    github: 'https://github.com/shrinjoyee/twitter-sentiment',
    color: '#e8621a',
  },
]

export const certifications = [
  { name: 'Google Advanced Data Analytics', issuer: 'Google', year: '2024', tag: 'Analytics' },
  { name: 'MATLAB Onramp', issuer: 'MathWorks', year: '2023', tag: 'Engineering' },
  { name: 'Image Processing Fundamentals', issuer: 'MathWorks', year: '2023', tag: 'CV' },
  { name: 'Oracle Cloud Infrastructure', issuer: 'Oracle', year: '2024', tag: 'Cloud' },
  { name: 'Python for Machine Learning', issuer: 'Coursera', year: '2023', tag: 'ML' },
]

export const roleData = {
  'Data Analyst': {
    summary: 'Shrinjoyee brings strong analytical rigor to data-driven decision making. With hands-on experience at Nordex Acciona processing large sensor datasets, she combines Python, SQL, and visualization tools to surface insights that drive business outcomes.',
    skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'Excel', 'Power BI', 'Matplotlib', 'Seaborn', 'Data Validation'],
    projects: ['twitter', 'appreviews'],
    matchScore: 88,
    reasons: [
      'Real-world data validation and pipeline experience at Nordex Acciona',
      'Proficient in full analytics stack: Python, SQL, Excel, Power BI',
      'Built end-to-end sentiment and trend analysis systems',
      'Strong statistical foundation with practical visualization skills',
      'Experience translating data findings into business decisions',
    ],
  },
  'ML Engineer': {
    summary: 'Shrinjoyee has built and deployed multiple production-grade ML systems — from computer vision pipelines to NLP classifiers. She works across the full ML lifecycle: data prep, model training, evaluation, and deployment.',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'CNN', 'YOLO', 'NLP', 'OpenCV', 'Pandas', 'NumPy'],
    projects: ['skincancer', 'traffic', 'twitter'],
    matchScore: 91,
    reasons: [
      'Deployed YOLOv8 real-time detection system with measurable performance gains',
      'Built CNN classifier achieving 92%+ accuracy on medical imaging data',
      'Experience with both supervised and deep learning paradigms',
      'Hands-on with TensorFlow, PyTorch, and Scikit-learn ecosystems',
      'Strong Python + data engineering foundation supporting ML workflows',
    ],
  },
  SDE: {
    summary: 'Shrinjoyee combines solid CS fundamentals with practical software engineering experience. She has built automation systems, debugged complex APIs, and developed scalable data pipelines — demonstrating the systems thinking required for SDE roles.',
    skills: ['Python', 'C++', 'SQL', 'DSA', 'OS', 'DBMS', 'OOP', 'System Design', 'Groovy', 'APIs'],
    projects: ['traffic', 'knowledgegram'],
    matchScore: 79,
    reasons: [
      'Strong CS fundamentals: DSA, OS, DBMS, Computer Networks',
      'Built automation pipelines and API integrations in production environments',
      'Experience with system optimization and debugging at Eldyne Group',
      'Proficient in C++ and Python with OOP design principles',
      'Capable of designing and implementing scalable software systems',
    ],
  },
  'AI Engineer': {
    summary: 'Shrinjoyee operates at the intersection of AI research and engineering. She has built knowledge graph systems, deployed LLM-powered pipelines, and integrated NLP with graph databases — exactly the profile modern AI engineering teams need.',
    skills: ['Python', 'NLP', 'LLMs', 'Knowledge Graphs', 'Neo4j', 'TensorFlow', 'Transformers', 'OpenCV', 'SpaCy'],
    projects: ['knowledgegram', 'appreviews', 'traffic'],
    matchScore: 93,
    reasons: [
      'Built production NLP + Knowledge Graph system using Neo4j and SpaCy',
      'Experience with LLMs and transformer-based architectures',
      'Combines AI research depth with practical engineering delivery',
      'Cross-domain AI experience: CV, NLP, and graph-based reasoning',
      'Strong Python ecosystem knowledge for AI system development',
    ],
  },
  'Data Scientist': {
    summary: 'Shrinjoyee bridges the gap between data analysis and ML modeling. She applies statistical thinking, builds predictive models, and communicates findings clearly — making her a strong fit for data science roles across industries.',
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'NLP', 'SQL', 'Matplotlib', 'Statistics'],
    projects: ['skincancer', 'appreviews', 'twitter'],
    matchScore: 90,
    reasons: [
      'End-to-end ML project experience from data collection to model deployment',
      'Strong statistical and analytical foundation with real-world datasets',
      'Experience with both structured (SQL/Excel) and unstructured (NLP) data',
      'Built predictive models with measurable accuracy benchmarks',
      'Communicates data insights effectively through visualization',
    ],
  },
}
