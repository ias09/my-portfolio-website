// =============================================================================
// SITE CONTENT — edit everything about yourself right here.
// You do not need to touch any other file to update your text, links, or
// details. Just save this file and Vercel will redeploy automatically.
// =============================================================================

export const profile = {
  name: "Istiaqe Ahamed",
  tagline:
    "Optimization algorithms, machine learning and high performance computing for large-scale decision systems",
  location: "Dhaka, Bangladesh",
  email: "istiaqeahamed09@gmail.com",
  affiliation: "North South University",
  role: "Graduate Research Assistant & Graduate Teaching Assistant, Dept. of Mathematics & Physics",
  bio: `I'm a graduate student working on optimization algorithms, machine learning, and high-performance computing for large-scale systems specifically vehicle routing, supply chain resilience, and decision-making under uncertainty. My current focus is to apply OpenMP, CUDA, and MPI and different decomposition methods with metaheuristics and exact methods to find optimal and exact solutions for large scale problems.`,
  links: [
    { label: "Email", href: "mailto:istiaqeahamed09@gmail.com" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=wlSwwvsAAAAJ&hl=en&authuser=3" }, // TODO: paste your Scholar profile URL
    { label: "GitHub", href: "https://github.com/ias09" }, // TODO: paste your GitHub profile URL
    { label: "LinkedIn", href: "https://www.linkedin.com/in/istiaqe-ahamed/" }, // TODO: paste your LinkedIn profile URL
    { label: "CV (PDF)", href: "/cv.pdf" }, // TODO: drop your CV PDF into /public as cv.pdf
  ],
};

export const education = [
  {
    degree: "M.Sc. in Applied Mathematics and Computational Science",
    institution: "North South University",
    period: "May 2025 – December 2026 (expected)",
    detail: "CGPA 3.94 / 4.00 (through 34 of 40 credits).",
  },
  {
    degree: "B.Sc. in Industrial and Production Engineering",
    institution: "Khulna University of Engineering & Technology (KUET)",
    period: "January 2018 – May 2023",
    detail:
      "CGPA 3.05 / 4.00 (last 80 credits: 3.27 / 4.00).",
  },
];

export const experience = [
  {
    role: "Graduate Research Assistant",
    org: "Dept. of Mathematics & Physics, North South University",
    period: "January 2026 – Present",
    detail: "Supervisor: Dr. Md. Mamun Molla",
  },
  {
    role: "Graduate Teaching Assistant",
    org: "Dept. of Mathematics & Physics, North South University",
    period: "September 2025 – Present",
    detail:
      "Assisting in teaching Linear Algebra, Ordinary Differential Equations, and Operations Research; grading assignments and exams.",
  },
];

export const research = {
  interests: [
    "Optimization Algorithms & Machine Learning for Large-Scale Systems",
    "Operations Research",
    "Decision Making Under Uncertainty",
    "Supply Chain Resilience",
    "High-Performance Computing",
  ],
  thesis: {
    title:
      "High-Performance Computing for Large-Scale Vehicle Routing Problems with Time Windows: Cross-Architecture Parallelization of Swarm Intelligence Metaheuristics",
    role: "M.Sc. Thesis (in progress)",
    supervisor: "Dr. Md. Mamun Molla",
    status: "In progress",
    highlights: [
      "Introduced the per-particle evaluation cost (τ) as a novel instance-aware predictor of parallel efficiency, resolving the paradox of high parallelizable fractions coexisting with poor speedup for clustered VRPTW instances.",
      "GPU-resident CUDA PSO achieved 53×–657× speedup over the serial CPU baseline and Pareto-dominates all OpenMP configurations on both runtime and monetary cost simultaneously.",
      "Demonstrated that the overhead-augmented Amdahl model fails for τ < 1ms instances, requiring a new linear throughput model for GPU performance prediction.",
      "Proposed a two-component evaluation cost framework (τ_construct + τ_update) and a pheromone synchronization ratio (γ) for characterizing distributed Ant Colony parallelism.",
    ],
  },
};

export const publications = {
  journal: [
    {
      title:
        "Cross-Architecture Scalability and Performance Modeling of OpenMP and CUDA-Based Particle Swarm Optimization for Large-Scale VRPTW",
      venue: "Swarm and Evolutionary Computation",
      status: "Under review",
      authors: "Istiaqe Ahamed, Dr. Md. Mamun Molla",
      href: "https://github.com/ias09/Cross-Architecture-Scalability-and-Performance-Modeling-of-OpenMP-and-CUDA-Based-PSO", // TODO
    },
    {
      title:
        "Decision-Calibrated Conformal Buffering for Supplier Delay Risk: A Machine Learning Framework with Drift Adaptation and Mondrian Coverage Equity",
      venue: "International Journal of Production Research",
      status: "Under review",
      authors: "Istiaqe Ahamed, Dr. Md. Mamun Molla",
      href: "https://github.com/ias09/Procurement_Paper_Code", // TODO
    },
    {
      title:
        "Converging Blockchain, Artificial Intelligence, and Digital Twin Technologies for Flexible Supply Chains: A Dynamic Capability View of Visibility, Predictive Accuracy, and Decision-Making Agility",
      venue: "Global Journal of Flexible Systems Management",
      status: "Submitted",
      authors: "Istiaqe Ahamed, Talat Mahmud Chowdhury",
      href: "https://github.com/ias09/converging_blockchain_artificial_intelligence_and_digital_twin_technologies_for_FSC", // TODO
    },
  ],
  conference: [
    {
      title:
        "How Playing Position and Market Era Shape Football Transfer Fees: A Machine Learning and Explainability Study",
      venue: "29th International Conference on Computer and Information Technology",
      status: "Under review",
      authors: "Istiaqe Ahamed, MD Samin Yeasar, Altaf Hussain Chowdhury",
      //href: "#", // TODO
    },
    {
      title:
        "An Investigation of Blockchain Technology and Supply Chain Flexibility as Complements to Supply Chain Integration and Performance: A Dynamic Capability View",
      venue: null,
      status: "Published",
      authors:
        "Nihal Rahman Raad, Palash Saha, Istiaqe Ahamed, Md. Omar Shadat Sarker, Ruhaniayth Bin Afsar",
      href: "https://doi.org/10.46254/BA07.20240025",
    },
    {
      title:
        "An Analysis of Barriers to Supply Chain Resilience Adoption in the Bangladesh Food Industries: A Fuzzy TOPSIS Approach",
      venue: "Secured 2nd place, Supply Chain and Logistics category",
      status: "Published",
      authors: "Ruhaniayth Bin Afsar, Istiaqe Ahamed, Md. Omar Shadat Sarker",
      href: "https://doi.org/10.46254/BA07.20240045",
    },
    {
      title:
        "Modeling the Barriers to Supply Chain Resilience in the Footwear Industry in Bangladesh",
      venue: null,
      status: "Published",
      authors: "Istiaqe Ahamed, Dr. Md. Rafiquzzaman, Palash Saha, Ruhaniayth Bin Afsar",
      href: "https://www.proquest.com/docview/3166809817", // TODO: paste your ProQuest link here
    },
  ],
};

export const projects = [
  {
    title:
      "Comparative Analysis of Particle Swarm Optimization and Genetic Algorithm for Solving VRPTW and Capacity Constraints",
    period: "Independent project, January 2026",
    description:
      "Implemented and compared PSO and GA metaheuristics for the vehicle routing problem with time windows and capacity constraints, in Python, on real-world-scale datasets.",
    href: "https://github.com/ias09/comparative-analysis-of-PSO-and-GA", // TODO
  },
  {
    title:
      "Breast Cancer Diagnosis: Performance Benchmarking and Statistical Validation of Machine Learning Models",
    period: "Academic project for AMCS 509, December 2025",
    description:
      "Benchmarked and statistically validated multiple ML models for breast cancer diagnosis.",
    href: "https://github.com/ias09/Breast-Cancer-Diagnosis-Performance-Benchmarking-and-Statistical-Validation", // TODO
  },
  {
    title: "Vehicle Routing Optimization using Particle Swarm Optimization",
    period: "Independent project, April 2025",
    description:
      "Applied PSO to a VRP logistics problem, achieving better cost efficiency than a published MILP solution.",
    href: "https://github.com/ias09/Optimized-Route-Using-PSO", // TODO
  },
  {
    title: "Custom Genetic Algorithm-Based Animated Visualization for Multi-Constrained VRP",
    period: "Independent project, May 2025",
    description:
      "Benchmarked against MILP from published literature — while global optimality wasn't reached, the heuristic delivered fast, feasible routing for all 24 customers with penalty-cost reduction over generations.",
    href: "https://github.com/ias09/Optimized-Route--Genetic-Algorithm", // TODO
  },
];

export const awards = [
  {
    title: "Second Place, Supply Chain and Logistics Category",
    detail:
      "7th IEOM Bangladesh International Conference on Industrial Engineering and Operations Management, Dhaka",
    year: "2024",
  },
  {
    title: "70% Scholarship Winner, ISCEA PTAK Prize",
    detail:
      "Global supply chain case competition — team secured a 70% scholarship for the CSCA certification course.",
    year: "2021",
  },
  {
    title: "First Runner-up, AutoCAD Workshop",
    detail: "Month-long competition organized by the IRCC Club of KUET.",
    year: "2019",
  },
];

export const certifications = [
  "Python for Data Science, AI & Development — IBM (Coursera), May 2025",
  "Supervised Machine Learning: Regression and Classification — DeepLearning.AI & Stanford University (Coursera), September 2025",
  "Python — Kaggle, April 2025",
  "Supply Chain Management Specialization (5 courses) — Rutgers, The State University of New Jersey (Coursera), June 2020",
];

export const volunteer = [
  { org: "IEM Robotics & CAD Club", role: "President", period: "2022–2023" },
  { org: "IEM Robotics & CAD Club", role: "Assistant General Secretary", period: "2020–2022" },
  { org: "IEOM KUET Student Chapter", role: "Vice President", period: "2022" },
];

export const credentials = [
  { label: "Graduate CGPA", value: "3.94 / 4.00", note: "through 34 of 40 credits" },
  { label: "Undergraduate CGPA", value: "3.05 / 4.00", note: "last 80 credits: 3.27" },
  { label: "GRE", value: "319", note: "Quant 167 (76th pct) · Verbal 152 · AWA 3.5" },
  //{ label: "IELTS", value: "7.0", note: "L 7.5 · R 6.5 · W 6.5 · S 6.5" },
];

export const skills = {
  Metaheuristics: ["PSO", "GA", "ACO"],
  "Parallel Computing": ["OpenMP", "MPI", "CUDA"],
  Languages: ["C", "Python"],
  Libraries: ["NumPy", "Pandas", "Matplotlib"],
};

// References are listed by name/title only — direct contact details are left
// off the public page out of courtesy to your referees. Add "(contact
// available on request)" or their info yourself if you'd rather show it.
export const references = "Available upon request.";