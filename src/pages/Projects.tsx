
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Economic Forecasting with ARMA Models",
      description: "Advanced time series analysis using ARMA models to predict economic indicators with high accuracy.",
      tools: ["R Studio", "tidyr", "dplyr", "ARMA", "ggplot2"],
      category: "econometrics",
      results: "RMSE: 0.23, 94% forecast accuracy",
      github: "https://github.com/kwesiboahene/economic-forecasting",
      highlights: ["Time series decomposition", "Seasonal adjustment", "Multi-step forecasting"]
    },
    {
      id: 2,
      title: "LASSO Regression for Variable Selection",
      description: "Implementation of LASSO regression techniques for feature selection in high-dimensional economic datasets.",
      tools: ["R Studio", "glmnet", "caret", "plotly"],
      category: "machine-learning",
      results: "Cross-validation score: 0.89, 15% improvement in prediction accuracy",
      github: "https://github.com/kwesiboahene/lasso-regression", 
      highlights: ["Cross-validation", "Regularization", "Feature selection"]
    },
    {
      id: 3,
      title: "Interactive Economic Dashboard",
      description: "Real-time dashboard for visualizing economic trends and indicators using interactive data visualization.",
      tools: ["R Studio", "plotly", "shiny", "dplyr"],
      category: "visualization",
      results: "Real-time data processing, 50+ interactive charts",
      github: "https://github.com/kwesiboahene/economic-dashboard",
      highlights: ["Real-time updates", "Interactive filters", "Responsive design"]
    },
    {
      id: 4,
      title: "Linear Model Performance Analysis",
      description: "Comprehensive analysis comparing simple linear models with advanced techniques for economic data.",
      tools: ["R Studio", "tidyr", "ggplot2", "broom"],
      category: "econometrics",
      results: "RMSE comparison across 5 models, detailed performance metrics",
      github: "https://github.com/kwesiboahene/linear-model-analysis",
      highlights: ["Model comparison", "Performance metrics", "Statistical validation"]
    },
    {
      id: 5,
      title: "Market Trend Prediction System",
      description: "Machine learning system for predicting market trends using ensemble methods and feature engineering.",
      tools: ["Python", "scikit-learn", "pandas", "matplotlib"],
      category: "machine-learning",
      results: "85% prediction accuracy, deployed production model",
      github: "https://github.com/kwesiboahene/market-prediction",
      highlights: ["Ensemble methods", "Feature engineering", "Model deployment"]
    },
    {
      id: 6,
      title: "Statistical Data Processing Pipeline",
      description: "Automated pipeline for cleaning, processing, and analyzing large economic datasets efficiently.",
      tools: ["R Studio", "tidyr", "dplyr", "data.table"],
      category: "data-processing",
      results: "90% reduction in processing time, handles 1M+ records",
      github: "https://github.com/kwesiboahene/data-pipeline",
      highlights: ["Automated processing", "Error handling", "Scalable architecture"]
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'econometrics', label: 'Econometrics' },
    { key: 'machine-learning', label: 'Machine Learning' },
    { key: 'visualization', label: 'Data Visualization' },
    { key: 'data-processing', label: 'Data Processing' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
              <a href="/projects" className="text-blue-600 font-medium">Projects</a>
              <a href="/resume" className="text-slate-600 hover:text-blue-600 transition-colors">Resume</a>
              <a href="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">My Projects</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A showcase of data science projects demonstrating expertise in econometrics, machine learning, and statistical analysis
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.key}
                onClick={() => setFilter(category.key)}
                variant={filter === category.key ? "default" : "outline"}
                className={`${
                  filter === category.key 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tools Used */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-slate-800">Tools & Techniques:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, idx) => (
                        <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-200">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-slate-800">Key Results:</h4>
                    <p className="text-sm text-green-600 font-medium">{project.results}</p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-slate-800">Highlights:</h4>
                    <div className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <ArrowRight className="h-3 w-3 text-slate-400" />
                          <span className="text-xs text-slate-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors group"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">View Code</span>
                    </a>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                      Learn More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 space-y-6">
            <h2 className="text-2xl font-bold text-slate-800">Interested in Collaboration?</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              I'm always excited to work on challenging data science projects. 
              Let's discuss how we can leverage data to solve complex problems together.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="/contact" className="flex items-center">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
