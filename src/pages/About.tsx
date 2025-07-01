
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Book, User, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl text-slate-800">Kwesi Boahene</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="/about" className="text-blue-600 font-medium">About</a>
              <a href="/projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="/resume" className="text-slate-600 hover:text-blue-600 transition-colors">Resume</a>
              <a href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">About Me</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Passionate about leveraging data science and machine learning to solve complex economic and business problems
            </p>
          </div>

          {/* Professional Bio */}
          <Card className="mb-12 border-slate-200 shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <User className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-800">Professional Background</h2>
              </div>
              <div className="prose prose-lg text-slate-600 max-w-none">
                <p className="mb-4">
                  I'm a dedicated data scientist and aspiring machine learning engineer with a strong foundation in 
                  <strong className="text-slate-800"> econometrics, computer science, and statistics</strong>. 
                  My passion lies at the intersection of economic theory and cutting-edge data science techniques, 
                  where I leverage quantitative methods to extract meaningful insights from complex datasets.
                </p>
                <p className="mb-4">
                  Currently pursuing advanced studies in data science, I specialize in developing predictive models 
                  and implementing machine learning algorithms to solve real-world problems. My experience spans 
                  from traditional econometric modeling using LASSO and ARMA techniques to modern machine learning 
                  approaches, consistently achieving high model accuracy rates.
                </p>
                <p>
                  My career goal is to bridge the gap between economic theory and practical data science applications, 
                  contributing to data-driven decision making in both academic research and industry settings. 
                  I'm particularly interested in roles that combine my quantitative economics background with 
                  advanced machine learning engineering.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="mb-12 border-slate-200 shadow-sm">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Book className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-800">Education</h2>
              </div>
              
              <div className="space-y-8">
                {/* Current Studies */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-800">Master of Science in Computer Science</h3>
                    <p className="text-blue-600 font-medium">Focus: Data Science</p>
                    <p className="text-slate-600">University of Illinois Urbana-Champaign (UIUC)</p>
                    <p className="text-sm text-slate-500">Currently Pursuing</p>
                  </div>
                </div>

                {/* Bachelor's Degree */}
                <div className="border-l-4 border-green-500 pl-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-slate-800">Bachelor of Science in Econometrics and Quantitative Economics</h3>
                    <p className="text-green-600 font-medium">Minors: Computer Science & Statistics</p>
                    <p className="text-slate-600">University of Illinois Urbana-Champaign (UIUC)</p>
                    <p className="text-sm text-slate-500">Expected May 2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Competencies */}
          <Card className="border-slate-200 shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Core Competencies</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Technical Skills</h3>
                  <div className="space-y-3">
                    {[
                      "Advanced Statistical Modeling",
                      "Machine Learning Algorithms",
                      "Econometric Analysis",
                      "Data Visualization",
                      "Predictive Analytics",
                      "Time Series Analysis"
                    ].map((skill, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                        <span className="text-slate-600">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Tools & Technologies</h3>
                  <div className="space-y-3">
                    {[
                      "R Studio & R Packages",
                      "Python for Data Science",
                      "SQL & Database Management",
                      "Git Version Control",
                      "Plotly & Interactive Dashboards",
                      "Statistical Computing"
                    ].map((tool, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <ArrowRight className="h-4 w-4 text-green-600" />
                        <span className="text-slate-600">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
