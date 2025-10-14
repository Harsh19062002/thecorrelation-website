const blogData = [
  {
    title: 'Machine Learning: Learning Benefits',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 27, 2024',
    category: 'Machine Learning',
    excerpt: 'Given its many advantages...',
    content: 'Machine learning is transforming...',
    link: 'https://example.com/ml-benefits'
  },
  {
    title: 'Deep Learning: Interesting Facts',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 26, 2024',
    category: 'AI',
    excerpt: 'A subset of machine learning...',
    content: 'Deep learning, a subset of machine learning...',
    link: 'https://example.com/deep-learning'
  },
  {
    title: 'ANN Applications in detail',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 25, 2024',
    category: 'AI',
    excerpt: 'ANN (Artificial Neural Networks)...',
    content: 'Artificial Neural Networks (ANN)...',
    link: 'https://example.com/ann-applications'
  },
  {
    title: 'Statistics and Probability for DS',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 24, 2024',
    category: 'Data Science',
    excerpt: 'The foundation of data science...',
    content: 'Statistics and probability form...',
    link: 'https://example.com/stats-ds'
  },
  {
    title: 'Model Evaluation in Machine Learning',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 23, 2024',
    category: 'Machine Learning',
    excerpt: 'In data science, model evaluation...',
    content: 'Model evaluation involves assessing...',
    link: 'https://example.com/model-eval'
  },
  {
    title: 'NLP in Future Projects',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 20, 2024',
    category: 'NLP',
    excerpt: 'NLP appears to have a bright future...',
    content: 'Natural Language Processing (NLP)...',
    link: 'https://example.com/nlp-future'
  },
  {
    title: 'Data cleaning and Preprocessing',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 19, 2024',
    category: 'Data Science',
    excerpt: 'Data cleaning and Preprocessing...',
    content: 'Data cleaning and preprocessing...',
    link: 'https://example.com/data-cleaning'
  },
  {
    title: 'Data Science vs Traditional DA',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 16, 2024',
    category: 'Data Analytics',
    excerpt: 'Traditional data analysis and data science...',
    content: 'Traditional data analysis focuses on...',
    link: 'https://example.com/ds-vs-da'
  },
  {
    title: 'Data Structure in Data Science',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 14, 2024',
    category: 'Data Science',
    excerpt: 'Data structure and algorithms...',
    content: 'Understanding data structures and algorithms...',
    link: 'https://example.com/data-structure'
  },
  {
    title: 'How AI is Changing Businesses',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 12, 2024',
    category: 'AI',
    excerpt: 'AI is reshaping the way businesses operate...',
    content: 'With automation and smart insights...',
    link: 'https://example.com/ai-business'
  },
  {
    title: 'Role of Python in Data Science',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 10, 2024',
    category: 'Programming',
    excerpt: 'Python is a go-to language...',
    content: 'From libraries like Pandas to TensorFlow...',
    link: 'https://example.com/python-ds'
  },
  {
    title: 'Power of Data Visualization',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 9, 2024',
    category: 'Data Visualization',
    excerpt: 'Good visuals lead to great insights...',
    content: 'Tools like Tableau and Power BI...',
    link: 'https://example.com/data-visualization'
  },
  {
    title: 'Building Career in Data Analytics',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 8, 2024',
    category: 'Career',
    excerpt: 'Explore career paths in analytics...',
    content: 'From business intelligence roles...',
    link: 'https://example.com/career-analytics'
  },
  {
    title: 'Basics of Business Analytics',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 7, 2024',
    category: 'Business Analytics',
    excerpt: 'Business analytics bridges data and decisions...',
    content: 'Learn how BA can improve operations...',
    link: 'https://example.com/business-analytics'
  },
  {
    title: 'Miscellaneous Tools for Data Science',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 6, 2024',
    category: 'Miscellaneous',
    excerpt: 'Explore helpful tools for your DS projects...',
    content: 'From Jupyter to VSCode extensions...',
    link: 'https://example.com/misc-tools'
  },
  {
    title: 'Chatbots and NLP',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 5, 2024',
    category: 'NLP',
    excerpt: 'Chatbots use NLP to understand queries...',
    content: 'Explore chatbot frameworks and capabilities...',
    link: 'https://example.com/chatbots-nlp'
  },
  {
    title: 'Overfitting in Machine Learning',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 4, 2024',
    category: 'Machine Learning',
    excerpt: 'Overfitting leads to poor generalization...',
    content: 'Learn techniques like regularization...',
    link: 'https://example.com/overfitting'
  },
  {
    title: 'Data Pipelines Explained',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 3, 2024',
    category: 'Data Science',
    excerpt: 'Data pipelines are essential...',
    content: 'Understand the flow of data...',
    link: 'https://example.com/data-pipeline'
  },
  {
    title: 'Unsupervised Learning Explained',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 2, 2024',
    category: 'Machine Learning',
    excerpt: 'Clustering and dimensionality reduction...',
    content: 'Explore K-means, PCA, and more...',
    link: 'https://example.com/unsupervised-learning'
  },
  {
    title: 'Roadmap to Become a Data Scientist',
    image: '/Dummy.png',
    author: 'Kinshu Patel',
    date: 'September 1, 2024',
    category: 'Career',
    excerpt: 'Steps to build your DS career...',
    content: 'Skills, projects, and certifications...',
    link: 'https://example.com/ds-roadmap'
  }
];


export const categories = [
  'All',
  'Machine Learning',
  'AI',
  'Data Science',
  'Data Analytics',
  'Programming',
  'Data Visualization',
  'Career',
  'Business Analytics',
  'NLP',
  'Miscellaneous'
];


export default blogData;
