// components/courseData.js

/**
 * DEFAULT CONFIGURATION
 * Edit this to change the default slider content across all pages
 */
export const defaultSliderConfig = {
  mainHeading: "Explore Our Expert-Curated Course Books",
  subheading: "Every learner gets exclusive access to in-depth, industry-designed resources on Data Science, Machine Learning, and Generative AI.",
  autoPlayInterval: 5000, // 5 seconds, set to 0 to disable auto-play
  books: [
    {
      title: "Foundations of Data Science",
      description: "Master the fundamentals of data analysis, statistics, and visualization. Learn Python, Pandas, and NumPy to handle real-world datasets with confidence.",
      highlight: "Included in Post Graduation Program",
      imageUrl: "/Introduction-to-data-science-and-analytics.png",
    },
    {
      title: "Machine Learning Mastery",
      description: "Deep dive into supervised and unsupervised learning algorithms. Build predictive models using scikit-learn, TensorFlow, and real industry case studies.",
      highlight: "Advanced Certification Course",
      imageUrl: "/images/books/machine-learning-book.jpg",
    },
    {
      title: "Generative AI Revolution",
      description: "Explore cutting-edge generative models, transformers, and LLMs. Create AI applications with GPT, DALL-E, and prompt engineering techniques.",
      highlight: "Exclusive for AI Specialization",
      imageUrl: "/images/books/generative-ai-book.jpg",
    },
  ],
};

/**
 * ADVANCED COURSES CONFIGURATION
 * Use this for advanced/professional courses page
 */
export const advancedCoursesConfig = {
  mainHeading: "Advanced Professional Courses",
  subheading: "Take your skills to the next level with our advanced course materials.",
  autoPlayInterval: 4000,
  books: [
    {
      title: "Deep Learning Specialization",
      description: "Master neural networks, CNNs, RNNs, and transformers. Build state-of-the-art AI models for computer vision and NLP applications.",
      highlight: "Professional Certificate",
      imageUrl: "/images/books/deep-learning-book.jpg",
    },
    {
      title: "MLOps & Deployment",
      description: "Learn to deploy, monitor, and scale machine learning models in production environments using Docker, Kubernetes, and cloud platforms.",
      highlight: "Industry Essentials",
      imageUrl: "/images/books/mlops-book.jpg",
    },
    {
      title: "Data Engineering Pipeline",
      description: "Build robust data pipelines with Apache Spark, Airflow, and modern data warehousing solutions. Handle big data at scale.",
      highlight: "Advanced Track",
      imageUrl: "/images/books/data-engineering-book.jpg",
    },
  ],
};

/**
 * BEGINNER COURSES CONFIGURATION
 * Use this for beginner/starter courses page
 */
export const beginnerCoursesConfig = {
  mainHeading: "Start Your Learning Journey",
  subheading: "Perfect resources for beginners starting their tech career.",
  autoPlayInterval: 6000,
  books: [
    {
      title: "Introduction to Programming",
      description: "Learn programming fundamentals with Python. Perfect for absolute beginners with no prior coding experience.",
      highlight: "Beginner Friendly",
      imageUrl: "/images/books/programming-basics-book.jpg",
    },
    {
      title: "Web Development Basics",
      description: "Master HTML, CSS, and JavaScript. Build your first responsive websites and interactive web applications.",
      highlight: "Career Starter",
      imageUrl: "/images/books/web-dev-book.jpg",
    },
    {
      title: "Database Fundamentals",
      description: "Understand relational databases, SQL, and data modeling. Essential skills for any tech professional.",
      highlight: "Core Skills",
      imageUrl: "/images/books/database-book.jpg",
    },
  ],
};

/**
 * SPECIALIZATION COURSES CONFIGURATION
 * Use this for specialized domain courses
 */
export const specializationConfig = {
  mainHeading: "Specialized Domain Expertise",
  subheading: "Deep dive into specialized fields with industry expert guidance.",
  autoPlayInterval: 5000,
  books: [
    {
      title: "Computer Vision Masters",
      description: "Advanced image processing, object detection, and facial recognition. Work with OpenCV, YOLO, and cutting-edge vision models.",
      highlight: "AI Specialization",
      imageUrl: "/images/books/computer-vision-book.jpg",
    },
    {
      title: "Natural Language Processing",
      description: "Transform text data into insights. Master BERT, GPT, sentiment analysis, and text generation with modern NLP techniques.",
      highlight: "NLP Track",
      imageUrl: "/images/books/nlp-book.jpg",
    },
    {
      title: "Blockchain & Web3",
      description: "Build decentralized applications with Ethereum, Solidity, and smart contracts. Understand crypto and blockchain architecture.",
      highlight: "Emerging Tech",
      imageUrl: "/images/books/blockchain-book.jpg",
    },
  ],
};



/**
 * POST GRADUATION PROGRAM CONFIGURATION
 * Use this for Post Graduation Program page
 */
export const postGraduationConfig = {
  mainHeading: "Post Graduation Program in Data Science & AI",
  subheading: "Gain in-depth expertise in Data Science, Analytics, and Machine Learning with our industry-aligned Post Graduation Program.",
  autoPlayInterval: 5000, // 5 seconds, set to 0 to disable auto-play
  books: [
    {
      title: "Introduction to Data Science & Analytics",
      description: "Learn the foundations of Data Science and Analytics. Understand data processing, visualization, and basic statistical methods to kickstart your journey.",
      highlight: "Included in Post Graduation Program",
      imageUrl: "/Introduction-to-data-science-and-analytics.png",
    },
    {
      title: "Fundamentals of Analytics",
      description: "Dive deeper into data analysis techniques, Excel, SQL, and Python-based analytics to gain hands-on experience working with real-world datasets.",
      highlight: "Included in Post Graduation Program",
      imageUrl: "/Fundamental-of-analytics.png",
    },
    {
      title: "Fundamentals of Machine Learning",
      description: "Understand machine learning concepts, supervised & unsupervised learning, and build predictive models using Python and scikit-learn.",
      highlight: "Included in Post Graduation Program",
      imageUrl: "/Fundamental-of-machine-learning.png",
    },
    {
      title: "Advanced Machine Learning",
      description: "Advance your ML skills with ensemble methods, model optimization, feature engineering, and hands-on projects to solve complex problems.",
      highlight: "Included in Post Graduation Program",
      imageUrl: "/Advanced-machine-learning.png",
    },
    {
      title: "Neural Networks & Deep Learning",
      description: "Master neural networks, deep learning architectures, and frameworks like TensorFlow and Keras to build AI models for real-world applications.",
      highlight: "Included in Post Graduation Program",
      imageUrl: "/neural-network-deep-learning.png",
    },
  ],
};


/**
 * CHARTERED DATA SCIENCE PROGRAM CONFIGURATION
 * Use this for Chartered Data Science page
 */
export const charteredDataScienceConfig = {
  mainHeading: "Chartered Data Science Program",
  subheading:
    "Advance your career with the Chartered Data Science Program — an intensive curriculum designed to build expertise in Machine Learning, Deep Learning, and Artificial Intelligence through real-world projects and mentorship.",
  autoPlayInterval: 5000, // 5 seconds, set to 0 to disable auto-play
  books: [
    {
      title: "Introduction to Data Science & Analytics",
      description:
        "Learn the foundations of Data Science and Analytics. Understand data processing, visualization, and basic statistical methods to kickstart your journey.",
      highlight: "Included in Chartered Data Science",
      imageUrl: "/Introduction-to-data-science-and-analytics.png",
    },
    {
      title: "Fundamentals of Analytics",
      description:
        "Dive deeper into data analysis techniques, Excel, SQL, and Python-based analytics to gain hands-on experience working with real-world datasets.",
      highlight: "Included in Chartered Data Science",
      imageUrl: "/Fundamental-of-analytics.png",
    },
    {
      title: "Fundamentals of Machine Learning",
      description:
        "Understand machine learning concepts, supervised & unsupervised learning, and build predictive models using Python and scikit-learn.",
      highlight: "Included in Chartered Data Science",
      imageUrl: "/Fundamental-of-machine-learning.png",
    },
    {
      title: "Advanced Machine Learning",
      description:
        "Advance your ML skills with ensemble methods, model optimization, feature engineering, and hands-on projects to solve complex problems.",
      highlight: "Included in Chartered Data Science",
      imageUrl: "/Advanced-machine-learning.png",
    },
    {
      title: "Neural Networks & Deep Learning",
      description:
        "Master neural networks, deep learning architectures, and frameworks like TensorFlow and Keras to build AI models for real-world applications.",
      highlight: "Included in Chartered Data Science",
      imageUrl: "/neural-network-deep-learning.png",
    },
  ],
};


/**
 * APPLIED DATA ANALYTICS PROGRAM CONFIGURATION
 * Use this for Applied Data Analytics page
 */
export const appliedDataAnalyticsConfig = {
  mainHeading: "Applied Data Analytics Program",
  subheading:
    "Master the essential skills of Data Analytics with a practical, industry-focused curriculum designed to build expertise in Excel, SQL, Python, and real-world business analytics.",
  autoPlayInterval: 5000,

  books: [
    {
      title: "Introduction to Data Science & Analytics",
      description:
        "Learn the foundations of Data Science and Analytics. Understand data processing, visualization, and basic statistical methods to kickstart your journey.",
      highlight: "Included in Applied Data Analytics",
      imageUrl: "/Introduction-to-data-science-and-analytics.png",
    },
    {
      title: "Fundamentals of Analytics",
      description:
        "Dive deeper into data analysis techniques, Excel, SQL, and Python-based analytics to gain hands-on experience working with real-world datasets.",
      highlight: "Included in Applied Data Analytics",
      imageUrl: "/Fundamental-of-analytics.png",
    }
  ],
};



/**
 * FUNDAMENTAL MACHINE LEARNING COURSE CONFIGURATION
 * Use this for Fundamental Machine Learning course page
 */
export const fundamentalMachineLearningConfig = {
  mainHeading: "Fundamental Machine Learning Course",
  subheading:
    "Learn the core foundations of Machine Learning, including supervised and unsupervised algorithms, model building, and real-world predictive analytics.",
  autoPlayInterval: 5000, // 5 seconds

  books: [
    {
      title: "Fundamentals of Machine Learning",
      description:
        "Understand machine learning concepts, supervised & unsupervised learning, and build predictive models using Python and scikit-learn.",
      highlight: "Included in Fundamental Machine Learning Course",
      imageUrl: "/Fundamental-of-machine-learning.png",
    }
  ],
};


/**
 * ADVANCED MACHINE LEARNING COURSE CONFIGURATION
 * Use this for Advanced Machine Learning course page
 */
export const advancedMachineLearningConfig = {
  mainHeading: "Advanced Machine Learning Course",
  subheading:
    "Master advanced machine learning techniques including ensemble models, optimization methods, feature engineering, and real-world problem-solving.",
  autoPlayInterval: 5000, // 5 seconds

  books: [
    {
      title: "Advanced Machine Learning",
      description:
        "Advance your ML skills with ensemble methods, model optimization, feature engineering, and hands-on projects to solve complex problems.",
      highlight: "Included in Advanced Machine Learning Course",
      imageUrl: "/Advanced-machine-learning.png",
    }
  ],
};

/**
 * DEEP LEARNING WITH GEN AI COURSE CONFIGURATION
 * Use this for Deep Learning with Gen AI course page
 */
export const deepLearningGenAIConfig = {
  mainHeading: "Deep Learning with Generative AI Course",
  subheading:
    "Master deep learning foundations and explore cutting-edge Generative AI models, neural networks, and modern AI applications.",
  autoPlayInterval: 5000, // 5 seconds

  books: [
    {
      title: "Neural Networks & Deep Learning",
      description:
        "Master neural networks, deep learning architectures, and frameworks like TensorFlow and Keras to build AI models for real-world applications.",
      highlight: "Included in Deep Learning with Gen AI Course",
      imageUrl: "/neural-network-deep-learning.png",
    }
  ],
};


export const charteredBusinessAnalyticsConfig = {
  mainHeading: "Chartered Business Analytics Program",
  subheading:
    "Build strong foundations in Business Analytics with practical training in data analysis, business intelligence, and essential analytical tools.",
  autoPlayInterval: 5000,

  books: [
    {
      title: "Fundamentals of Data Science",
      description:
        "Learn the core foundations of data science, data processing, exploratory analysis, and essential data-driven decision-making concepts.",
      highlight: "Included in Chartered Business Analytics",
      imageUrl: "/Introduction-to-data-science-and-analytics.png",
    },
    {
      title: "Fundamentals of Business Analytics",
      description:
        "Understand business problem-solving using analytics, dashboarding, KPIs, and real-world analytical workflows used in organizations.",
      highlight: "Included in Chartered Business Analytics",
      imageUrl: "/Fundamental-of-business-analytics.png",
    },
    {
      title: "Fundamentals of Analytics",
      description:
        "Gain hands-on expertise in Excel, SQL, and Python-based analytics while learning how to interpret data and generate insights.",
      highlight: "Included in Chartered Business Analytics",
      imageUrl: "/Fundamental-of-analytics.png",
    },
  ],
};

