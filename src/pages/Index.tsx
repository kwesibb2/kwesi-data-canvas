
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl text-slate-800">Kwesi Boahene</div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/about" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</Link>
              <Link to="/resume" className="text-slate-600 hover:text-blue-600 transition-colors">Resume</Link>
              <Link to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
                  Kwesi <span className="text-blue-600">Boahene</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Data Scientist & Machine Learning Engineer specializing in 
                  <strong className="text-slate-800"> Econometrics</strong>, 
                  <strong className="text-slate-800"> Machine Learning</strong>, and 
                  <strong className="text-slate-800"> Software Development</strong>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                    View My Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg">
                    Get In Touch
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <a href="https://github.com/kwesiboahene" target="_blank" rel="noopener noreferrer" 
                   className="text-slate-600 hover:text-blue-600 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/in/kwesiboahene" target="_blank" rel="noopener noreferrer"
                   className="text-slate-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:pkwesi4@gmail.com"
                   className="text-slate-600 hover:text-blue-600 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center" 
                    alt="Kwesi Boahene" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-slate-600">Data Science Projects</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-blue-600">3+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-slate-600">Model Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Technical Expertise</h2>
            <p className="text-lg text-slate-600">Specializing in advanced analytics and machine learning</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Machine Learning", skills: ["LASSO", "ARMA", "Linear Models", "Predictive Analytics"] },
              { title: "Programming", skills: ["R Studio", "Python", "SQL", "Git"] },
              { title: "Data Analysis", skills: ["tidyr", "dplyr", "plotly", "glmnet"] },
              { title: "Visualization", skills: ["ggplot2", "Plotly", "Tableau", "Interactive Dashboards"] }
            ].map((category, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-800 mb-3">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="text-sm text-slate-600 bg-slate-50 px-3 py-1 rounded-full">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
