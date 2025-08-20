import { useState } from 'react';
import { Users, Shield, Clock, Home, ArrowRight, X } from 'lucide-react';

export default function SophosCareerPage() {
  // Sample job positions data
  const jobPositions = [
    {
      id: 1,
      title: "Data Science Associate",
      department: "Technology",
      location: "Indore",
      type: "Full-time",
      description: "We are looking for a skilled Data Science Associate to join our technology team. You will be responsible for analyzing large datasets, building predictive models, and creating data-driven solutions for our clients.",
      responsibilities: [
        "Develop and implement machine learning models",
        "Clean and analyze large datasets",
        "Create data visualizations and reports",
        "Collaborate with cross-functional teams"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "2+ years of experience in data science",
        "Proficiency in Python and SQL",
        "Experience with machine learning frameworks"
      ]
    },
    {
      id: 2,
      title: "Sales Representative",
      department: "Sales, Service & Support",
      location: "Indore",
      type: "Full-time",
      description: "Join our sales team as a Sales Representative and help grow our business by building relationships with potential clients and closing deals.",
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Present products and services to potential clients",
        "Maintain relationships with existing clients",
        "Meet and exceed sales targets"
      ],
      requirements: [
        "Proven sales experience",
        "Excellent communication skills",
        "Ability to build rapport with clients",
        "Self-motivated and target-driven"
      ]
    },
    {
      id: 3,
      title: "HR Specialist",
      department: "People",
      location: "Indore",
      type: "Full-time",
      description: "We're seeking an HR Specialist to manage our recruitment processes and employee relations. You'll play a key role in building our talented team.",
      responsibilities: [
        "Manage full-cycle recruitment process",
        "Conduct interviews and screen candidates",
        "Handle employee onboarding and offboarding",
        "Maintain HR records and documentation"
      ],
      requirements: [
        "Degree in Human Resources or related field",
        "3+ years of HR experience",
        "Knowledge of labor laws and HR best practices",
        "Excellent interpersonal skills"
      ]
    },
    {
      id: 4,
      title: "Business Development Manager",
      department: "Business Development",
      location: "Indore",
      type: "Full-time",
      description: "Lead our business growth initiatives as a Business Development Manager. You'll identify new market opportunities and develop strategies to expand our business.",
      responsibilities: [
        "Develop and implement growth strategies",
        "Identify new business opportunities",
        "Build and maintain client relationships",
        "Analyze market trends and competition"
      ],
      requirements: [
        "5+ years in business development",
        "Proven track record of sales growth",
        "Strong negotiation skills",
        "Strategic thinking and planning skills"
      ]
    }
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const [showAllPositions, setShowAllPositions] = useState(false);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationForm(prev => ({ ...prev, resume: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', applicationForm);
    alert('Application submitted successfully!');
    setSelectedJob(null);
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      coverLetter: '',
      resume: null
    });
  };

  const scrollToPositions = () => {
    document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Custom button component
  const Button = ({ children, className = '', onClick, type = 'button', variant = 'default' }) => {
    const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = {
      default: 'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500',
      outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
      ghost: 'bg-transparent text-orange-500 hover:bg-orange-50 focus:ring-orange-500'
    };
    
    return (
      <button
        type={type}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  // Custom card component
  const Card = ({ children, className = '' }) => {
    return (
      <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
        {children}
      </div>
    );
  };

  // Custom input component
  const Input = ({ id, name, type = 'text', value, onChange, required = false, className = '', ...props }) => {
    return (
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 ${className}`}
        {...props}
      />
    );
  };

  // Custom textarea component
  const Textarea = ({ id, name, value, onChange, required = false, rows = 3, className = '' }) => {
    return (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 ${className}`}
      />
    );
  };

  // Custom label component
  const Label = ({ htmlFor, children, className = '' }) => {
    return (
      <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}>
        {children}
      </label>
    );
  };

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Build Your Future With Sophos
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our team of innovators and grow your career with exciting opportunities in technology and business.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={scrollToPositions}
            >
              Explore Openings
            </Button>
            <Button 
              variant="outline" 
              className="bg-gray-200 text-gray-800 hover:bg-gray-300"
              onClick={() => alert('This would navigate to the About page in a real application')}
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Sophos?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're more than just a workplace - we're a community of passionate professionals building the future together.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold text-black mb-2">Collaborative Culture</h3>
              <p className="text-gray-600">Work with talented professionals in a supportive environment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <Shield className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold text-black mb-2">Cutting-Edge Technology</h3>
              <p className="text-gray-600">Work with the latest technologies and innovative solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <Clock className="w-12 h-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-xl font-semibold text-black mb-2">Flexible Work Options</h3>
              <p className="text-gray-600">Balance your work and personal life with our flexible policies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Current Openings</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our available positions and find the perfect fit for your skills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {(showAllPositions ? jobPositions : jobPositions.slice(0, 2)).map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      {job.department}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {job.location}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {job.type}
                    </span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    onClick={() => setSelectedJob(job)}
                  >
                    <span className="flex items-center justify-center">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          {!showAllPositions && jobPositions.length > 2 && (
            <div className="text-center mt-8">
              <Button 
                variant="ghost" 
                className="text-orange-500 hover:text-orange-600"
                onClick={() => setShowAllPositions(true)}
              >
                View All Positions
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Work at Sophos Section */}
     <section className="py-16 px-4 bg-orange-50">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row gap-12 items-center">
      {/* Left Content */}
      <div className="md:w-1/2 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-black mb-6">Our Culture & Values</h2>
        <p className="text-lg text-gray-600 mb-6">
          At Sophos, we believe in creating an environment where everyone can thrive. Our core values guide everything we do.
        </p>
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="bg-orange-100 text-orange-800 rounded-full p-1 mr-3">✓</span>
            <div>
              <h3 className="font-semibold text-black">Innovation</h3>
              <p className="text-gray-600">We encourage creative thinking and new ideas</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-orange-100 text-orange-800 rounded-full p-1 mr-3">✓</span>
            <div>
              <h3 className="font-semibold text-black">Collaboration</h3>
              <p className="text-gray-600">Teamwork makes the dream work</p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="bg-orange-100 text-orange-800 rounded-full p-1 mr-3">✓</span>
            <div>
              <h3 className="font-semibold text-black">Growth</h3>
              <p className="text-gray-600">We invest in our people's development</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 px-4 md:px-8">
        <img
          src="/Dummy.png"
          alt="Our Culture"
          className="w-full h-auto rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  </div>
</section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      {selectedJob.department}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      {selectedJob.location}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {selectedJob.type}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Job Description</h3>
                  <p className="text-gray-700">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {selectedJob.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {selectedJob.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4">Apply for this position</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={applicationForm.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={applicationForm.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={applicationForm.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="resume">Resume/CV</Label>
                        <Input
                          id="resume"
                          name="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <Label htmlFor="coverLetter">Cover Letter</Label>
                      <Textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={applicationForm.coverLetter}
                        onChange={handleInputChange}
                        rows={4}
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        type="button"
                        onClick={() => setSelectedJob(null)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

   
    </div>
  );
}