
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl text-slate-800">Kwesi Boahene</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="/projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="/resume" className="text-blue-600 font-medium">Resume</a>
              <a href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Resume</h1>
            <p className="text-xl text-slate-600">
              Data Scientist & Machine Learning Engineer
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Download PDF Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Contact Information */}
          <Card className="mb-8 border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Kwesi Boahene</h2>
                  <p className="text-slate-600">Data Scientist & Machine Learning Engineer</p>
                </div>
                <div className="flex items-center space-x-6">
                  <a href="mailto:pkwesi4@gmail.com" className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>pkwesi4@gmail.com</span>
                  </a>
                  <a href="https://github.com/kwesiboahene" className="text-slate-600 hover:text-blue-600 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com/in/kwesiboahene" className="text-slate-600 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="mb-8 border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-slate-800">Master of Science in Computer Science</h3>
                <p className="text-blue-600 font-medium">Focus: Data Science</p>
                <p className="text-slate-600">University of Illinois Urbana-Champaign (UIUC)</p>
                <p className="text-sm text-slate-500">Currently Pursuing</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-slate-800">Bachelor of Science in Econometrics and Quantitative Economics</h3>
                <p className="text-green-600 font-medium">Minors: Computer Science & Statistics</p>
                <p className="text-slate-600">University of Illinois Urbana-Champaign (UIUC)</p>
                <p className="text-sm text-slate-500">Expected May 2025</p>
                <p className="text-sm text-slate-600 mt-2">
                  Relevant Coursework: Advanced Econometrics, Statistical Computing, Machine Learning, 
                  Data Structures & Algorithms, Database Systems
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card className="mb-8 border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Programming & Tools</h4>
                  <div className="space-y-2">
                    {[
                      "R Studio & Advanced R Programming",
                      "Python for Data Science",
                      "SQL & Database Management",
                      "Git Version Control",
                      "Statistical Computing"
                    ].map((skill, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-slate-600">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Data Science & ML</h4>
                  <div className="space-y-2">
                    {[
                      "Machine Learning Algorithms",
                      "LASSO & Ridge Regression",
                      "ARMA Time Series Models",
                      "Predictive Analytics",
                      "Statistical Modeling"
                    ].map((skill, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-slate-600">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">R Packages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["tidyr", "dplyr", "ggplot2", "plotly", "glmnet", "caret", "broom"].map((pkg, idx) => (
                      <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-200">
                        {pkg}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">Visualization</h4>
                  <div className="flex flex-wrap gap-2">
                    {["ggplot2", "plotly", "Shiny", "Tableau", "Interactive Dashboards"].map((tool, idx) => (
                      <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full border border-green-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Projects */}
          <Card className="mb-8 border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-800">Key Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  title: "Economic Forecasting with ARMA Models",
                  description: "Developed advanced time series models achieving 94% forecast accuracy with RMSE of 0.23",
                  tools: ["R Studio", "ARMA", "tidyr", "dplyr"]
                },
                {
                  title: "LASSO Regression for Variable Selection", 
                  description: "Implemented regularization techniques improving prediction accuracy by 15% on high-dimensional datasets",
                  tools: ["glmnet", "caret", "Cross-validation"]
                },
                {
                  title: "Interactive Economic Dashboard",
                  description: "Built real-time dashboard with 50+ interactive charts for economic trend visualization",
                  tools: ["plotly", "Shiny", "Real-time processing"]
                }
              ].map((project, idx) => (
                <div key={idx} className="border-l-4 border-slate-300 pl-6">
                  <h4 className="font-semibold text-slate-800">{project.title}</h4>
                  <p className="text-slate-600 text-sm mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIdx) => (
                      <span key={toolIdx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Let's Connect</h2>
            <p className="text-slate-600">
              Interested in discussing opportunities or collaborating on data science projects?
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="/contact">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
